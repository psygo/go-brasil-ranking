import { ExpressApiRoute } from "../infra";

import { gameEvents } from "../data/game_events";

import { GameEvent } from "../../../frontend/src/models/game_event";
import { postGameEvent } from "../api/post_game_event_api";

export const populateGameEvents = async (): Promise<GameEvent[]> => {
  const gameEventsWithFirebaseRef: GameEvent[] = [];

  for (let i = 0; i < gameEvents.length; i++) {
    const gameEvent = gameEvents[i];
    const ref = i.toString();

    const gameEventOnDb = await postGameEvent(gameEvent, ref);

    gameEventsWithFirebaseRef.push(gameEventOnDb);
  }

  return gameEventsWithFirebaseRef;
};

export const populateGameEventsApi: ExpressApiRoute = async (_, res) => {
  try {
    const gameEvents = await populateGameEvents();

    res.status(200).send({
      status: "Successo",
      message: "Evento adicionado com sucesso.",
      data: { gameEvents: gameEvents },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
