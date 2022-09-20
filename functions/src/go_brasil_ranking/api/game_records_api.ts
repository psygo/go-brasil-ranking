import * as admin from "firebase-admin";

import { ExpressApiRoute, howMany, parseBody } from "../../infra";

import { gameRecordsCol } from "../collections/game_records_col";
import { playersCol } from "../collections/players_col";

import {
  Color,
  doesThisColorWin,
  GameRecord,
} from "../../../../go_brasil_ranking/src/models/game_record";
import { FirebaseRef } from "../../../../go_brasil_ranking/src/models/firebase_models";
import Elo from "../../../../go_brasil_ranking/src/models/elo";
import { Player } from "../../../../go_brasil_ranking/src/models/player";
import { gameEventsCol } from "../collections/game_events_col";

// export const queryForPlayersGameRecords = async (
//   playerRef: FirebaseRef,
//   limit: number
// ) => {
//   const gamesWithPlayer = (
//     await playersCol.col
//       .doc(playerRef)
//       .collection("gamesRefs")
//       .orderBy("gameDate", "desc")
//       .limit(limit)
//       .get()
//   ).docs;

//   let gamesRefs: GameRecord[] = [];
//   gamesRefs = gamesWithPlayer.map((g) => g.data() as GameRecord);

//   const gameRecordsWithRefsQuery = gamesRefs.map((gRef) =>
//     gameRecordsCol.col.doc(gRef.gameRef).get()
//   );

//   return await Promise.all(gameRecordsWithRefsQuery);
// };

export const getGameRecords: ExpressApiRoute = async (req, res) => {
  try {
    const limit = howMany(req.query.limit as string);
    let gameRecordsQuery = gameRecordsCol.col.limit(limit);
    let gameRecordsDocs;

    // const playerRef = req.query.playerRef as FirebaseRef;
    // if (playerRef)
    //   gameRecordsDocs = await queryForPlayersGameRecords(playerRef, limit);
    // else
    gameRecordsDocs = await gameRecordsQuery.get();

    const gameRecords: GameRecord[] = [];
    gameRecordsDocs.forEach((gameRecordDoc) => {
      const gameRecordNoRef = gameRecordDoc.data() as GameRecord;
      gameRecords.push({ ...gameRecordNoRef, firebaseRef: gameRecordDoc.id });
    });

    res.status(200).send({
      status: "success",
      message: `Partidas encontradas (total: ${gameRecords.length}`,
      data: { gameRecords: gameRecords },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

export const getGameRecord: ExpressApiRoute = async (req, res) => {
  try {
    const id = req.params.gameRecordId;

    const gameRecordRef = gameRecordsCol.col.doc(id);

    const gameRecordDoc = await gameRecordRef.get();

    if (req.query.exists === "")
      res.status(200).send({
        status: "success",
        message: "Partida existe.",
        data: gameRecordDoc.exists,
      });
    else
      res.status(200).send({
        status: "success",
        message: "Partida encontrada.",
        data: { gameRecord: gameRecordDoc.data() },
      });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

export const postGameRecord = async (
  gameRecord: GameRecord,
  firebaseRef?: FirebaseRef
): Promise<GameRecord> => {
  const black = (await playersCol.getWithRef(gameRecord.blackRef))! as Player;
  const white = (await playersCol.getWithRef(gameRecord.whiteRef))! as Player;

  const blackElo = new Elo(black.elo);
  const whiteElo = new Elo(white.elo);

  const blackEloDelta = blackElo.deltaFromGame(
    whiteElo,
    doesThisColorWin(Color.Black, gameRecord.result)
  );
  const whiteEloDelta = whiteElo.deltaFromGame(
    blackElo,
    doesThisColorWin(Color.White, gameRecord.result)
  );

  const now = admin.firestore.Timestamp.now().toMillis();

  const gameRecordOnDb: GameRecord = {
    ...gameRecord,
    blackPlayer: black,
    whitePlayer: white,
    eloData: {
      atTheTimeBlackElo: blackElo.serialize(),
      eloDeltaBlack: blackEloDelta.serialize(),
      atTheTimeWhiteElo: whiteElo.serialize(),
      eloDeltaWhite: whiteEloDelta.serialize(),
    },
    dateCreated: now,
    gamesTotal: 0,
  };

  // Update Players' Elos and Total Games
  await playersCol.updateWithRef(gameRecord.blackRef, {
    elo: blackElo.add(blackEloDelta).num,
    gamesTotal: black.gamesTotal! + 1,
  });
  await playersCol.updateWithRef(gameRecord.whiteRef, {
    elo: whiteElo.add(whiteEloDelta).num,
    gamesTotal: white.gamesTotal! + 1,
  });

  // Update Total Games on Event, if it exists
  if (gameRecord?.gameEventRef) {
    const eventRefString = gameRecord.gameEventRef;

    const eventRef = gameEventsCol.col.doc(eventRefString);
    const gameEvent = (await eventRef.get()).data();

    if (gameEvent)
      await eventRef.update({ gamesTotal: gameEvent.gamesTotal + 1 });
  }

  if (!firebaseRef) {
    const gameRecordRef = await gameRecordsCol.col.add(gameRecordOnDb);
    return { ...gameRecordOnDb, firebaseRef: gameRecordRef.id };
  } else {
    await gameRecordsCol.col.doc(firebaseRef).set(gameRecordOnDb);
    return { ...gameRecordOnDb, firebaseRef: firebaseRef };
  }
};

export const postGameRecordApi: ExpressApiRoute = async (req, res) => {
  try {
    const gameRecord = parseBody(req.body);

    const gameRecordOnDbWithRef = await postGameRecord(gameRecord);

    res.status(200).send({
      status: "success",
      message: "Partida adicionada com sucesso.",
      data: { gameRecord: gameRecordOnDbWithRef },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
