import { FirebaseRef } from "./firebase_ref";

export enum GameEventTypes {
  online = "online",
  live = "live",
  tournament = "tournament",
  league = "league",
}

interface _GameEventBase {
  type: GameEventTypes;
}

interface _GameEventOnline extends _GameEventBase {
  type: GameEventTypes.online;
}
export type GameEventOnline = Readonly<_GameEventOnline>;

interface _GameEventLive extends _GameEventBase {
  type: GameEventTypes.live;
}
export type GameEventLive = Readonly<_GameEventLive>;

interface _GameEventTournament extends _GameEventBase {
  type: GameEventTypes.tournament;
  firebaseRef?: FirebaseRef;
  name: string;
  dates: readonly number[];
  dateCreated?: number;
  gamesTotal?: number;
}
export type GameEventTournament = Readonly<_GameEventTournament>;

interface _GameEventLeague extends _GameEventBase {
  type: GameEventTypes.league;
  firebaseRef?: FirebaseRef;
  name: string;
  dateInit: number;
  dateEnd?: number;
  dateCreated?: number;
  gamesTotal?: number;
}
export type GameEventLeague = Readonly<_GameEventLeague>;

type _GameEvent =
  | GameEventOnline
  | GameEventLive
  | GameEventTournament
  | GameEventLeague;
export type GameEvent = Readonly<_GameEvent>;

export const isTournamentOrLeague = (
  gameEvent: GameEvent
): gameEvent is GameEventTournament | GameEventLeague =>
  gameEvent.type === GameEventTypes.tournament ||
  gameEvent.type === GameEventTypes.league;
