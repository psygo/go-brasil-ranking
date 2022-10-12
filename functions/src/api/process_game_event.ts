import { TournamentOrLeague } from "../../../frontend/src/models/game_event";

export const processGameEvent = (
  gameEvent: TournamentOrLeague
): TournamentOrLeague => ({
  ...gameEvent,
  dateCreated: new Date().getTime(),
  firstDate: gameEvent.dates[0],
  participants: [],
  gamesTotal: 0,
});
