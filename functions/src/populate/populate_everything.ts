import { ExpressApiRoute } from "../infra";

import { deleteEverything } from "../cols";

import { populateGameEvents } from "./populate_game_events";
import { populateGameRecords } from "./populate_game_recods";
import { populatePlayers } from "./populate_players";

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
