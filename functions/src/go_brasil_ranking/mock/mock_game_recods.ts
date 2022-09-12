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
import {
  GameEventOnline,
  GameEventTournament,
} from "../../../../go_brasil_ranking/src/models/game_event";
import { dummyGameEvents } from "./mock_game_events";

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
    gameEvent: <GameEventOnline>{ date: new Date() },
  },
  {
    blackRef: "0",
    whiteRef: "1",
    result: {
      whoWins: Color.White,
      resignation: true,
    },
    sgf: dummySgf,
    gameEvent: <GameEventOnline>{ date: new Date() },
  },
  {
    blackRef: "1",
    whiteRef: "2",
    result: {
      whoWins: Color.Black,
      difference: 20,
    },
    sgf: dummySgf,
    gameEvent: dummyGameEvents[0],
  },
];

export const mockPopulateGameRecords = async (): Promise<GameRecord[]> => {
  const gameRecordsColl = db.collection("game_records");
  const playersColl = db.collection("players");

  let completeGameRecords: GameRecord[] = [];
  for (let i = 0; i < dummyGameRecords.length; i++) {
    const gameRecord = dummyGameRecords[i];

    const black = (await playersColl.doc(gameRecord.blackRef).get()).data()!;
    const white = (await playersColl.doc(gameRecord.whiteRef).get()).data()!;

    const blackElo = new Elo(black.elo);
    const whiteElo = new Elo(white.elo);

    const blackEloDelta = blackElo.eloFromGame(
      whiteElo,
      colorResult(gameRecord.result, Color.Black)
    );
    const whiteEloDelta = whiteElo.eloFromGame(
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

    await gameRecordsColl.doc(i.toString()).set(noFirebaseRef);

    // Update Players' Elos and Total Games
    await playersColl.doc(gameRecord.blackRef).update({
      elo: blackElo.add(blackEloDelta.num).num,
      gamesTotal: black.gamesTotal + 1,
    });
    await playersColl.doc(gameRecord.whiteRef).update({
      elo: blackElo.add(blackEloDelta.num).num,
      gamesTotal: white.gamesTotal + 1,
    });

    // Update Game References for Each Player
    await playersColl
      .doc(gameRecord.blackRef)
      .collection("gamesRefs")
      .add(<GameRecordRef>{ gameRef: i.toString(), gameDate: now });
    await playersColl
      .doc(gameRecord.whiteRef)
      .collection("gamesRefs")
      .add(<GameRecordRef>{ gameRef: i.toString(), gameDate: now });

    // Update Game References on Tournament
    if ( gameRecord.gameEvent.type === "tournament" ) {
      
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
