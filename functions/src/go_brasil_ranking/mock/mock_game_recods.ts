import { ExpressApiRoute } from "../../infra";

import { fakeGameRecords } from "./data/fake_game_records";

import { postGameRecord } from "../api/game_records_api";

import { GameRecord } from "../../../../go_brasil_ranking/src/models/game_record";

export const mockPopulateGameRecords = async (): Promise<GameRecord[]> => {
  let completeGameRecords: GameRecord[] = [];
  for (let i = 0; i < fakeGameRecords.length; i++) {
    const fakeGameRecord = fakeGameRecords[i];
    const ref = i.toString();

    const fakeGameRecordOnDb = await postGameRecord(fakeGameRecord, ref);

    completeGameRecords.push(fakeGameRecordOnDb);
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
