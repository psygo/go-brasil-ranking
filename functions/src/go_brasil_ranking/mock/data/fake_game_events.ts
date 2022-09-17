import {
  GameEvent,
  GameEventTypes,
} from "../../../../../go_brasil_ranking/src/models/game_event";

export const fakeGameEvents: readonly GameEvent[] = [
  {
    type: GameEventTypes.tournament,
    name: "Copa do Brasil 2022",
    dates: [new Date(2022, 8, 10).getTime(), new Date(2022, 8, 11).getTime()],
  },
  {
    type: GameEventTypes.tournament,
    name: "Copa do Brasil 2018",
    dates: [new Date(2018, 8, 10).getTime(), new Date(2018, 8, 11).getTime()],
  },
  {
    type: GameEventTypes.league,
    name: "DOGemP — Dojo Online de Go em Português",
  },
];
