import {
  GameEventTypes,
  TournamentOrLeague,
} from "../../../../frontend/src/models/game_event";

export const gameEvents: readonly TournamentOrLeague[] = [
  {
    type: GameEventTypes.tournament,
    name: "Copa do Brasil 2022",
    dates: [new Date(2022, 8, 10).getTime(), new Date(2022, 8, 11).getTime()],
  },
  {
    type: GameEventTypes.league,
    name: "Pandanet Latin American Team Championship 2022",
    dates: [new Date(2022, 0, 29).getTime(), new Date(2022, 10, 10).getTime()],
  },
  {
    type: GameEventTypes.league,
    name: "DOGemP",
    dates: [new Date(2021, 10, 10).getTime(), new Date(2022, 2, 10).getTime()],
  },
];
