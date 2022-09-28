import { ExpressApiRoute } from "../../infra";

import { gameEventsCol } from "../../collections/game_events_col";

export const getGameEvent: ExpressApiRoute = async (req, res) => {
  try {
    const id = req.params.gameEventId;

    const gameGameEventRef = gameEventsCol.col.doc(id);

    const gameEventDoc = await gameGameEventRef.get();

    if (req.query.existe === "")
      res.status(200).send({
        status: "success",
        message: "A partida existe.",
        data: gameEventDoc.exists,
      });
    else
      res.status(200).send({
        status: "success",
        message: "Partida encontrada.",
        data: { gameEvent: gameEventDoc.data() },
      });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
