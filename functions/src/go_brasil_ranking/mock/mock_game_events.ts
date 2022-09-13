import { db } from "../..";

import { ExpressApiRoute } from "../../infra";

import {
  GameEvent,
  GameEventWithRef,
  GameEventTournament,
} from "../../../../go_brasil_ranking/src/models/game_event";

export const dummyGameEvents: readonly GameEvent[] = [
  <GameEventTournament>{
    type: "tournament",
    name: "Copa do Brasil 2022",
    dates: [new Date(2022, 9, 10), new Date(2022, 9, 11)],
    gamesTotal: 0,
  },
];

export const mockPopulateGameEvents = async (): Promise<GameEventWithRef[]> => {
  const gameEventsColl = db.collection("game_events");
  const mockGameEventsWithFirebaseRef: GameEventWithRef[] = [];

  for (let i = 0; i < dummyGameEvents.length; i++) {
    const gameEvent = dummyGameEvents[i];

    await gameEventsColl.doc(i.toString()).set(gameEvent);

    mockGameEventsWithFirebaseRef.push({
      firebaseRef: i.toString(),
      ...gameEvent,
    });
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
