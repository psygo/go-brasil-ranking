import { ExpressApiRoute, howMany } from "../../infra";

import { gameEventsCol } from "../../collections/game_events_col";

import {
  GameEvent,
  isTournamentOrLeague,
} from "../../../../frontend/src/models/game_event";

export const getGameEvents: ExpressApiRoute = async (req, res) => {
  try {
    const limit = howMany(req.query.limite as string);

    const gameEventsQuery = gameEventsCol.col.limit(limit);

    const gameEventsDocs = await gameEventsQuery.get();

    const gameEvents: GameEvent[] = [];
    gameEventsDocs.forEach((gameEventDoc) => {
      const gameEventNoRef = gameEventDoc.data() as GameEvent;

      if (isTournamentOrLeague(gameEventNoRef))
        gameEvents.push({ ...gameEventNoRef, firebaseRef: gameEventDoc.id });
      else gameEvents.push(gameEventNoRef);
    });

    res.status(200).send({
      status: "Sucesso",
      message: `Partidas encontradas (total: ${gameEvents.length}`,
      data: { gameEvents: gameEvents },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
