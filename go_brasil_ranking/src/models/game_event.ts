import { FirebaseRef } from "./firebase_ref";

export type GameEvent = Readonly<_GameEvent>;

interface _GameEvent {}

interface _GameEventOnline extends _GameEvent {
  date: Date;
}

export type GameEventOnline = Readonly<_GameEventOnline>;

interface _GameEventLive extends _GameEventOnline {}

export type EventLive = Readonly<_GameEventLive>;

interface _GameEventTournament extends _GameEvent {
  name: string;
  dates: readonly Date[];
}

export type EventTournament = Readonly<_GameEventTournament>;

interface _GameEventWithRef extends _GameEvent {
  firebaseRef: FirebaseRef;
}

export type GameEventWithRef = Readonly<_GameEventWithRef>;
