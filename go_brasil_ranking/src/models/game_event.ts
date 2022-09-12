import { FirebaseRef } from "./firebase_ref";


interface _GameEventBase {}

interface _GameEventOnline extends _GameEventBase {
  date: Date;
}
export type GameEventOnline = Readonly<_GameEventOnline>;

interface _GameEventLive extends _GameEventOnline {}
export type GameEventLive = Readonly<_GameEventLive>;

interface _GameEventTournament extends _GameEventBase {
  name: string;
  dates: readonly Date[];
}
export type GameEventTournament = Readonly<_GameEventTournament>;

interface _GameEventWithRef extends _GameEventBase {
  firebaseRef: FirebaseRef;
}

type _GameEvent = GameEventOnline | GameEventLive | GameEventTournament;

export type GameEventRef = Readonly<_GameEventWithRef>;

export type GameEvent = Readonly<_GameEvent>;