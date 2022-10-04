import { gameEventsCol } from "../../collections/game_events_col";

import { ExpressApiRoute, parseBody } from "../../infra";

import { FirebaseRef } from "../../../../frontend/src/models/firebase_models";
import {
  GameEvent,
  TournamentOrLeague,
} from "../../../../frontend/src/models/game_event";

export const postGameEvent = async (
  gameEvent: TournamentOrLeague,
  firebaseRef?: FirebaseRef
): Promise<TournamentOrLeague> => {
  const gameEventOnDb: GameEvent = {
    ...gameEvent,
    dateCreated: new Date().getTime(),
    firstDate: gameEvent.dates[0],
    participants: [],
    gamesTotal: 0,
  };

  if (!firebaseRef) {
    const gameEventRef = await gameEventsCol.col.add(gameEventOnDb);
    return { ...gameEventOnDb, firebaseRef: gameEventRef.id };
  } else {
    await gameEventsCol.col.doc(firebaseRef).set(gameEventOnDb);
    return { ...gameEventOnDb, firebaseRef: firebaseRef };
  }
};

export const postGameEventApi: ExpressApiRoute = async (req, res) => {
  try {
    const gameEvent = parseBody(req.body);

    const gameEventOnDbWithRef = await postGameEvent(gameEvent);

    res.status(200).send({
      status: "sucesso",
      message: "Evento adicionado com sucesso.",
      data: { gameEvent: gameEventOnDbWithRef },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
