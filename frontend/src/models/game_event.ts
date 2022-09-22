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

interface _GameEventTournament extends _GameEventBase {
  type: GameEventTypes.tournament;
  firebaseRef?: FirebaseRef;
  name: string;
  dates: readonly number[];
  link?: string;
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
  link?: string;
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

export type OnlineOrLive = GameEventOnline | GameEventLive;