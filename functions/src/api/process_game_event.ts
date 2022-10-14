import { TournamentOrLeague } from "../../../frontend/src/models/game_event";
import { generateSearchableArrayFromString } from "../infra";

export const processGameEvent = (
  gameEvent: TournamentOrLeague
): TournamentOrLeague => ({
  ...gameEvent,
  searchableName: generateSearchableArrayFromString(gameEvent.name),
  dateCreated: new Date().getTime(),
  firstDate: gameEvent.dates[0],
  participants: [],
  gamesTotal: 0,
});
