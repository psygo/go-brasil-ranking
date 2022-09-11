import * as admin from "firebase-admin";

import { db } from "../..";

import { ExpressApiRoute, Index } from "../../infra";

import Elo from "../../../../go_brasil_ranking/src/models/elo";
import {
  Color,
  GameResult,
  GameRecord,
  GameRecordPost,
} from "../../../../go_brasil_ranking/src/models/game_record";

export const dummyGameRecords: readonly GameRecordPost[] = [
  {
    blackRef: "0",
    whiteRef: "1",
    result: {
      whoWins: Color.Black,
      resignation: true,
    },
    gameEvent: { type: "online", date: new Date() },
  },
];

export const mockPopulateGameRecordsApi: ExpressApiRoute = async (_, res) => {
  try {
    const gameRecordsColl = db.collection("game_records");
    const playersColl = db.collection("players");

    let completeGameRecords: GameRecord[] = [];
    let i: Index = 0;
    for (const gameRecord of dummyGameRecords) {
      const black = (await playersColl.doc(gameRecord.blackRef).get()).data();
      const white = (await playersColl.doc(gameRecord.whiteRef).get()).data();

      const blackElo = new Elo(black!.elo);
      const whiteElo = new Elo(black!.elo);

      // TODO1: This is not computing the win/loss correctly
      const newBlackEloDelta = blackElo.eloFromGame(whiteElo, GameResult.Win);
      const newWhiteEloDelta = whiteElo.eloFromGame(blackElo, GameResult.Loss);

      const completeGameRecord: GameRecord = {
        ...gameRecord,
        firebaseRef: i.toString(),
        dateAdded: admin.firestore.Timestamp.now().toDate(),
        blackName: black!.name,
        whiteName: white!.name,
        eloData: {
          atTheTimeBlackElo: black!.elo,
          eloDeltaBlack: newBlackEloDelta.serialize(),
          atTheTimeWhiteElo: white!.elo,
          eloDeltaWhite: newWhiteEloDelta.serialize(),
        },
      };

      completeGameRecords.push(completeGameRecord);

      const { firebaseRef, ...noFirebaseRef } = { ...completeGameRecord };

      await gameRecordsColl.doc(i.toString()).set(noFirebaseRef);

      i++;
    }

    res.status(200).send({
      status: "success",
      message: "Player added successfully",
      data: { gameRecords: completeGameRecords },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
