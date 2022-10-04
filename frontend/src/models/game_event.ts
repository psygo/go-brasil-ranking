import { FirebaseDoc, FirebaseRef } from "./firebase_models";

export enum GameEventTypes {
  online = "Online",
  live = "Ao Vivo",
  tournament = "Torneio",
  league = "Liga",
}

export const gameEventTypeFromString = (getString: string): GameEventTypes =>
  Object.values(GameEventTypes).find((c) => c === getString)!;

interface _GameEventBase extends FirebaseDoc {
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

interface _TournamentLeagueBase extends _GameEventBase {
  firebaseRef?: FirebaseRef;
  name: string;
  dates: readonly number[];
  firstDate?: number;
  link?: string;
  dateCreated?: number;
  gamesTotal?: number;
  participants?: readonly FirebaseRef[];
}

interface _GameEventTournament extends _TournamentLeagueBase {
  type: GameEventTypes.tournament;
}
export type GameEventTournament = Readonly<_GameEventTournament>;

interface _GameEventLeague extends _TournamentLeagueBase {
  type: GameEventTypes.league;
}
export type GameEventLeague = Readonly<_GameEventLeague>;

type _GameEvent =
  | GameEventOnline
  | GameEventLive
  | GameEventTournament
  | GameEventLeague;
export type GameEvent = Readonly<_GameEvent>;

export const isTournament = (
  gameEvent: GameEvent
): gameEvent is GameEventTournament =>
  gameEvent.type === GameEventTypes.tournament;

export const isLeague = (gameEvent: GameEvent): gameEvent is GameEventLeague =>
  gameEvent.type === GameEventTypes.league;

export const isTournamentOrLeague = (
  gameEvent: GameEvent
): gameEvent is GameEventTournament | GameEventLeague =>
  isTournament(gameEvent) || isLeague(gameEvent);

export type GameEventRef =
  | FirebaseRef
  | GameEventTypes.online
  | GameEventTypes.live;

export const isTournamentOrLeagueRef = (
  gameEventRef: GameEventRef
): gameEventRef is FirebaseRef =>
  gameEventRef !== GameEventTypes.online &&
  gameEventRef !== GameEventTypes.live;

export type TournamentOrLeague = GameEventTournament | GameEventLeague;
export type _TournamentOrLeague = _GameEventTournament | _GameEventLeague;

export type OnlineOrLive = GameEventOnline | GameEventLive;
