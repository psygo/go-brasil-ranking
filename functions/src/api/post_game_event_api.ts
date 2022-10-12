import { ExpressApiRoute, parseBody, postRankingData } from "../infra";

import { gameEventsCol } from "../cols";

import { processGameEvent } from "./process_game_event";

import { FirebaseRef } from "../../../frontend/src/models/firebase_models";
import {
  GameEvent,
  TournamentOrLeague,
} from "../../../frontend/src/models/game_event";

export const postGameEvent = async (
  gameEvent: TournamentOrLeague,
  firebaseRef?: FirebaseRef
): Promise<TournamentOrLeague> => {
  const gameEventOnDb: GameEvent = processGameEvent(gameEvent);

  return await postRankingData(gameEventsCol, gameEventOnDb, firebaseRef);
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
