import { ExpressApiRoute } from "../infra";

import { gameEventsCol } from "../collections/game_events_col";
import { gameRecordsCol } from "../collections/game_records_col";
import { playersCol } from "../collections/players_col";

import { mockPopulateGameEvents } from "./mock_game_events";
import { mockPopulateGameRecords } from "./mock_game_recods";
import { mockPopulatePlayers } from "./mock_players";

const deleteEverything = async (): Promise<void> => {
  await playersCol.deleteEverything();
  await gameEventsCol.deleteEverything();
  await gameRecordsCol.deleteEverything();
};

export const mockPopulateEverythingApi: ExpressApiRoute = async (_, res) => {
  try {
    await deleteEverything();

    await mockPopulatePlayers();
    await mockPopulateGameEvents();
    await mockPopulateGameRecords();

    res.status(200).send({
      status: "success",
      message: "Everything added successfully",
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
