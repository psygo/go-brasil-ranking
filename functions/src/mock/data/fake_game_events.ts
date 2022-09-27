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
    name: "Copa do Brasil 2021",
    dates: [new Date(2021, 8, 10).getTime(), new Date(2021, 8, 11).getTime()],
  },
  {
    type: GameEventTypes.tournament,
    name: "Copa do Brasil 2020",
    dates: [new Date(2020, 8, 10).getTime(), new Date(2020, 8, 11).getTime()],
  },
  {
    type: GameEventTypes.tournament,
    name: "Copa do Brasil 2019",
    dates: [new Date(2019, 8, 10).getTime(), new Date(2019, 8, 11).getTime()],
  },
  {
    type: GameEventTypes.tournament,
    name: "Copa do Brasil 2018",
    dates: [new Date(2018, 8, 10).getTime(), new Date(2018, 8, 11).getTime()],
  },
  {
    type: GameEventTypes.league,
    name: "DOGemP",
    dates: [new Date(2021, 10, 10).getTime(), new Date(2022, 2, 10).getTime()],
  },
];
