import {
  GameEventTypes,
  TournamentOrLeague,
} from "../../../../frontend/src/models/game_event";

export const fakeGameEvents: readonly TournamentOrLeague[] = [
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
    dateInit: new Date(2021, 10, 10).getTime(),
    dateEnd: new Date(2022, 2, 10).getTime(),
  },
];
