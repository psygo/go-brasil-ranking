import { FirebaseRef } from "./firebase_ref";

export enum GameEventTypes {
  online = "online",
  live = "live",
  tournament = "tournament",
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
  gamesTotal: number;
}
export type GameEventTournament = Readonly<_GameEventTournament>;

type _GameEvent = GameEventOnline | GameEventLive | GameEventTournament;
export type GameEvent = Readonly<_GameEvent>;
