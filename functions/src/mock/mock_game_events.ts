import { ExpressApiRoute } from "../infra";

import { gameEvents } from "./data/game_events";

import { GameEvent } from "../../../frontend/src/models/game_event";
import { postGameEvent } from "../api/post_game_event_api";

export const mockPopulateGameEvents = async (): Promise<GameEvent[]> => {
  const fakeGameEventsWithFirebaseRef: GameEvent[] = [];

  for (let i = 0; i < gameEvents.length; i++) {
    const fakeGameEvent = gameEvents[i];
    const ref = i.toString();

    const fakeGameEventOnDb = await postGameEvent(fakeGameEvent, ref);

    fakeGameEventsWithFirebaseRef.push(fakeGameEventOnDb);
  }

  return fakeGameEventsWithFirebaseRef;
};

export const mockPopulateGameEventsApi: ExpressApiRoute = async (_, res) => {
  try {
    const gameEvents = await mockPopulateGameEvents();

    res.status(200).send({
      status: "Successo",
      message: "Evento adicionado com sucesso.",
      data: { gameEvents: gameEvents },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
