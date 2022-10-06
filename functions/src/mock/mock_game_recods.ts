import { ExpressApiRoute } from "../infra";

import { postGameRecord } from "../api/game_records/post_game_record_api";

import { GameRecord } from "../../../frontend/src/models/game_record";

import { dogempGames } from "./data/dogemp_game_records";
import { copaDoBrasil2022 } from "./data/copa_do_brasil_2022_game_records";

export const mockPopulateGameRecords = async (): Promise<GameRecord[]> => {
  let completeGameRecords: GameRecord[] = [];
  const records = [...dogempGames, ...copaDoBrasil2022];
  const length = records.length;
  for (let i = 0; i < length; i++) {
    const fakeGameRecord = records[i];

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
