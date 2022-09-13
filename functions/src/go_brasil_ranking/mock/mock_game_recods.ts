import * as admin from "firebase-admin";

import { db } from "../..";

import { ExpressApiRoute } from "../../infra";

import Elo from "../../../../go_brasil_ranking/src/models/elo";
import {
  Color,
  GameRecord,
  GameRecordPost,
  colorResult,
  GameRecordRef,
} from "../../../../go_brasil_ranking/src/models/game_record";
import { GameEventRef } from "../../../../go_brasil_ranking/src/models/game_event";
import { playersCol } from "../collections/players_col";
import { gameRecordsCol } from "../collections/game_records_col";

export const dummySgf =
  "(;GM[1]FF[4]CA[UTF-8]AP[Sabaki:0.52.1]KM[0]SZ[19]DT[2022-09-12])";

export const dummyGameRecords: readonly GameRecordPost[] = [
  {
    blackRef: "0",
    whiteRef: "1",
    result: {
      whoWins: Color.Black,
      resignation: true,
    },
    sgf: dummySgf,
    gameEvent: { type: "online", date: new Date() },
  },
  {
    blackRef: "0",
    whiteRef: "1",
    result: {
      whoWins: Color.White,
      resignation: true,
    },
    sgf: dummySgf,
    gameEvent: { type: "online", date: new Date() },
  },
  {
    blackRef: "1",
    whiteRef: "2",
    result: {
      whoWins: Color.Black,
      difference: 20,
    },
    sgf: dummySgf,
    gameEvent: { gameEventRef: "0" },
  },
];

export const mockPopulateGameRecords = async (): Promise<GameRecord[]> => {
  let completeGameRecords: GameRecord[] = [];
  for (let i = 0; i < dummyGameRecords.length; i++) {
    const gameRecord = dummyGameRecords[i];

    const black = (await playersCol.getWithRef(gameRecord.blackRef))!;
    const white = (await playersCol.getWithRef(gameRecord.whiteRef))!;

    const blackElo = new Elo(black.elo);
    const whiteElo = new Elo(white.elo);

    const blackEloDelta = blackElo.deltaFromGame(
      whiteElo,
      colorResult(gameRecord.result, Color.Black)
    );
    const whiteEloDelta = whiteElo.deltaFromGame(
      blackElo,
      colorResult(gameRecord.result, Color.White)
    );

    const now = admin.firestore.Timestamp.now().toDate();

    const completeGameRecord: GameRecord = {
      ...gameRecord,
      firebaseRef: i.toString(),
      dateAdded: now,
      blackName: black.name,
      whiteName: white.name,
      eloData: {
        atTheTimeBlackElo: black.elo,
        eloDeltaBlack: blackEloDelta.serialize(),
        atTheTimeWhiteElo: white.elo,
        eloDeltaWhite: whiteEloDelta.serialize(),
      },
    };

    completeGameRecords.push(completeGameRecord);

    const { firebaseRef, ...noFirebaseRef } = { ...completeGameRecord };

    await gameRecordsCol.col.doc(i.toString()).set(noFirebaseRef);

    // Update Players' Elos and Total Games
    await playersCol.updateWithRef(gameRecord.blackRef, {
      elo: blackElo.add(blackEloDelta).num,
      gamesTotal: black.gamesTotal + 1,
    });
    await playersCol.updateWithRef(gameRecord.whiteRef, {
      elo: whiteElo.add(whiteEloDelta).num,
      gamesTotal: white.gamesTotal + 1,
    });

    // Update Game References for Each Player
    await playersCol.col
      .doc(gameRecord.blackRef)
      .collection("gamesRefs")
      .add(<GameRecordRef>{ gameRef: i.toString(), gameDate: now });
    await playersCol.col
      .doc(gameRecord.whiteRef)
      .collection("gamesRefs")
      .add(<GameRecordRef>{ gameRef: i.toString(), gameDate: now });

    // Update Game References on Tournament
    if ((gameRecord.gameEvent as GameEventRef).gameEventRef) {
      const eventRefString = (gameRecord.gameEvent as GameEventRef)
        .gameEventRef;

      const eventRef = db.collection("game_events").doc(eventRefString);
      const gameEvent = (await eventRef.get()).data()!;

      await eventRef.update({ gamesTotal: gameEvent.gamesTotal + 1 });

      await eventRef.collection("games").add({ gameRef: i.toString() });
    }
  }

  return completeGameRecords;
};

export const mockPopulateGameRecordsApi: ExpressApiRoute = async (_, res) => {
  try {
    const completeGameRecords = await mockPopulateGameRecords();

    res.status(200).send({
      status: "success",
      message: "Player added successfully",
      data: { gameRecords: completeGameRecords },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
