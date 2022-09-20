import { ExpressApiRoute } from "../../infra";

import { fakeGameEvents } from "./data/fake_game_events";
import { postGameEvent } from "../api/game_events";

import { GameEvent } from "../../../../go_brasil_ranking/src/models/game_event";

export const mockPopulateGameEvents = async (): Promise<GameEvent[]> => {
  const fakeGameEventsWithFirebaseRef: GameEvent[] = [];

  for (let i = 0; i < fakeGameEvents.length; i++) {
    const fakeGameEvent = fakeGameEvents[i];
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
      status: "success",
      message: "Evento adicionado com sucesso.",
      data: { gameEvents: gameEvents },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
