import { ExpressApiRoute, findPlayerRef } from "../infra";

import { postGameRecord } from "../api/post_game_record_api";

import { Color, GameRecord } from "../../../frontend/src/models/game_record";

import { copaDoBrasil2018 } from "../data/copa_do_brasil_2018_game_records";
import { dogempGames } from "../data/dogemp_game_records";
// import { pglatc_2022 } from "../data/pglatc_2022_game_records";
// import { copaDoBrasil2022 } from "../data/copa_do_brasil_2022_game_records";
import { GameEventTypes } from "../../../frontend/src/models/game_event";

export const populateGameRecords = async (): Promise<GameRecord[]> => {
  const demoGame: GameRecord = {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    handicap: 4,
    date: new Date(2022, 1, 1).getTime(),
    result: {
      whoWins: Color.White,
    },
    gameEventRef: GameEventTypes.live,
    forcedElos: {
      blackElo: 2400,
      whiteElo: 2700,
    },
  };

  const records: GameRecord[] = [
    demoGame,
    ...copaDoBrasil2018,
    ...dogempGames,
    // ...pglatc_2022,
    // ...copaDoBrasil2022,
  ];

  let completeGameRecords: GameRecord[] = [];
  const length = records.length;
  for (let i = 0; i < length; i++) {
    const gameRecord = records[i];
    const ref = i.toString();

    const gameRecordOnDb = await postGameRecord(gameRecord, ref);

    completeGameRecords.push(gameRecordOnDb);
  }

  return completeGameRecords;
};

export const populateGameRecordsApi: ExpressApiRoute = async (_, res) => {
  try {
    const completeGameRecords = await populateGameRecords();

    res.status(200).send({
      status: "Successo",
      message: "Partidas adicionadas com sucesso.",
      data: { gameRecords: completeGameRecords },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
