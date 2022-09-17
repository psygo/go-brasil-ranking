import * as admin from "firebase-admin";

import { ExpressApiRoute } from "../../infra";

import { gameRecordsCol } from "../collections/game_records_col";
import { gameEventsCol } from "../collections/game_events_col";
import { playersCol } from "../collections/players_col";

import Elo from "../../../../go_brasil_ranking/src/models/elo";
import {
  Color,
  GameRecord,
  doesThisColorWin,
} from "../../../../go_brasil_ranking/src/models/game_record";
import { fakeGameRecords } from "./data/fake_game_records";

export const mockPopulateGameRecords = async (): Promise<GameRecord[]> => {
  let completeGameRecords: GameRecord[] = [];
  for (let i = 0; i < fakeGameRecords.length; i++) {
    const gameRecord = fakeGameRecords[i];
    const ref = i.toString();

    const black = (await playersCol.getWithRef(gameRecord.blackRef))!;
    const white = (await playersCol.getWithRef(gameRecord.whiteRef))!;

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

    const completeGameRecord: GameRecord = {
      ...gameRecord,
      firebaseRef: ref,
      dateAdded: now,
      blackName: black.name,
      whiteName: white.name,
      eloData: {
        atTheTimeBlackElo: blackElo.serialize(),
        eloDeltaBlack: blackEloDelta.serialize(),
        atTheTimeWhiteElo: whiteElo.serialize(),
        eloDeltaWhite: whiteEloDelta.serialize(),
      },
    };

    completeGameRecords.push(completeGameRecord);

    await gameRecordsCol.col.doc(ref).set(completeGameRecord);

    // Update Players' Elos and Total Games
    await playersCol.updateWithRef(gameRecord.blackRef, {
      elo: blackElo.add(blackEloDelta).num,
      gamesTotal: black.gamesTotal + 1,
    });
    await playersCol.updateWithRef(gameRecord.whiteRef, {
      elo: whiteElo.add(whiteEloDelta).num,
      gamesTotal: white.gamesTotal + 1,
    });

    // Update Game References on Tournament
    if (gameRecord?.gameEventRef) {
      const eventRefString = gameRecord.gameEventRef;

      const eventRef = gameEventsCol.col.doc(eventRefString);
      const gameEvent = (await eventRef.get()).data()!;

      await eventRef.update({ gamesTotal: gameEvent.gamesTotal + 1 });
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
