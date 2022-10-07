import { ExpressApiRoute } from "../infra";

import { gameEventsCol } from "../collections/game_events_col";
import { gameRecordsCol } from "../collections/game_records_col";
import { playersCol } from "../collections/players_col";

import { populateGameEvents } from "./populate_game_events";
import { populateGameRecords } from "./populate_game_recods";
import { populatePlayers } from "./populate_players";

const deleteEverything = async (): Promise<void> => {
  await playersCol.deleteEverything();
  await gameEventsCol.deleteEverything();
  await gameRecordsCol.deleteEverything();
};

export const populateEverythingApi: ExpressApiRoute = async (_, res) => {
  try {
    await deleteEverything();

    await populatePlayers();
    await populateGameEvents();
    await populateGameRecords();

    res.status(200).send({
      status: "success",
      message: "Everything added successfully",
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
