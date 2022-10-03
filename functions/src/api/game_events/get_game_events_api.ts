import {
  ExpressApiRoute,
  mapDocsWithFirebaseRef,
  queryLimit,
} from "../../infra";

import { gameEventsCol } from "../../collections/game_events_col";

import { TournamentOrLeague } from "../../../../frontend/src/models/game_event";

export const getGameEvents: ExpressApiRoute = async (req, res) => {
  try {
    const startAfter = parseInt(req.query.de as string);

    const gameEventsSnaps = await gameEventsCol.col
      .orderBy("firstDate", "desc")
      .offset(startAfter)
      .limit(queryLimit)
      .get();

    const gameEvents = mapDocsWithFirebaseRef<TournamentOrLeague>(
      gameEventsSnaps.docs
    );

    res.status(200).send({
      status: "success",
      message: `Eventos encontrados (total: ${gameEvents.length})`,
      data: { gameEvents: gameEvents },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
