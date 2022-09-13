import { GameEvent } from "../../../../go_brasil_ranking/src/models/game_event";
import { ExpressApiRoute, howMany } from "../../infra";
import { gameEventsCol } from "../collections/game_events_col";

export const getGameEvents: ExpressApiRoute = async (req, res) => {
  try {
    const limit = howMany(req.query.limit as string);

    const gameEventsQuery = gameEventsCol.col.limit(limit);

    const gameEventsDocs = await gameEventsQuery.get();

    const gameEvents: GameEvent[] = [];
    gameEventsDocs.forEach((playerDoc) => {
      gameEvents.push(playerDoc.data() as GameEvent);
    });

    res.status(200).send({
      status: "success",
      message: `Game Records found (total: ${gameEvents.length}`,
      data: { players: gameEvents },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

export const getGameEvent: ExpressApiRoute = async (req, res) => {
  try {
    const id = req.params.gameEventId;

    const gameGameEventRef = gameEventsCol.col.doc(id);

    const gameEventDoc = await gameGameEventRef.get();

    if (req.query.exists === "")
      res.status(200).send({
        status: "success",
        message: "Game Record exists",
        data: gameEventDoc.exists,
      });
    else
      res.status(200).send({
        status: "success",
        message: "Game Record found.",
        data: { players: gameEventDoc.data() },
      });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
