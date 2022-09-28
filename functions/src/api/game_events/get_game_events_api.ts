import { ExpressApiRoute, paginationSlicer } from "../../infra";

import { gameEventsCol } from "../../collections/game_events_col";

import { TournamentOrLeague } from "../../../../frontend/src/models/game_event";

export const getGameEvents: ExpressApiRoute = async (req, res) => {
  try {
    const startAfter = parseInt(req.query.de as string);

    const gameEventsQuery = gameEventsCol.col.orderBy("firstDate", "desc");

    const gameEventsSnaps = await gameEventsQuery.get();

    const docs = paginationSlicer(startAfter, gameEventsSnaps.docs);

    const gameEvents: TournamentOrLeague[] = [];
    docs.forEach((gameEventDoc) => {
      const gameEventNoRef = gameEventDoc.data() as TournamentOrLeague;
      gameEvents.push({ ...gameEventNoRef, firebaseRef: gameEventDoc.id });
    });

    res.status(200).send({
      status: "Sucesso",
      message: `Eventos encontrados (total: ${gameEvents.length})`,
      data: { gameEvents: gameEvents },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
