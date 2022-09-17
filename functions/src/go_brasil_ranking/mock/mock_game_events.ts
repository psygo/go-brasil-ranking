import { ExpressApiRoute } from "../../infra";

import { gameEventsCol } from "../collections/game_events_col";

import {
  GameEvent,
  GameEventTypes,
} from "../../../../go_brasil_ranking/src/models/game_event";
import { fakeGameEvents } from "./data/fake_game_events";

export const mockPopulateGameEvents = async (): Promise<GameEvent[]> => {
  const mockGameEventsWithFirebaseRef: GameEvent[] = [];

  for (let i = 0; i < fakeGameEvents.length; i++) {
    const gameEvent = fakeGameEvents[i];
    const ref = i.toString();

    await gameEventsCol.col.doc(ref).set({ ...gameEvent, gamesTotal: 0 });

    let gameEventToReturn = gameEvent;
    if (gameEvent.type === GameEventTypes.tournament)
      gameEventToReturn = { ...gameEvent, gamesTotal: 0, firebaseRef: ref };

    mockGameEventsWithFirebaseRef.push(gameEventToReturn);
  }

  return mockGameEventsWithFirebaseRef;
};

export const mockPopulateGameEventsApi: ExpressApiRoute = async (_, res) => {
  try {
    const mockGameEventsWithFirebaseRef = await mockPopulateGameEvents();

    res.status(200).send({
      status: "success",
      message: "Player added successfully",
      data: { gameEvents: mockGameEventsWithFirebaseRef },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
