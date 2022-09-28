import { ExpressApiRoute } from "../infra";

import { dogempGames } from "./data/fake_game_records";

import { postGameRecord } from "../api/game_records/post_game_record_api";

import { GameRecord } from "../../../frontend/src/models/game_record";

export const mockPopulateGameRecords = async (): Promise<GameRecord[]> => {
  let completeGameRecords: GameRecord[] = [];
  for (let i = 0; i < dogempGames.length; i++) {
    const fakeGameRecord = dogempGames[i];

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
      status: "Successo",
      message: "Partidas adicionadas com sucesso.",
      data: { gameRecords: completeGameRecords },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
