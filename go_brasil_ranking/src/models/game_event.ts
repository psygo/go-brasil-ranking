import { FirebaseRef } from "./firebase_ref";

interface _GameEventBase {
  type: "online" | "live" | "tournament";
}

interface _GameEventOnline extends _GameEventBase {
  type: "online";
  date: Date;
}
export type GameEventOnline = Readonly<_GameEventOnline>;

interface _GameEventLive extends _GameEventBase {
  type: "live";
  date: Date;
}
export type GameEventLive = Readonly<_GameEventLive>;

interface _GameEventTournament extends _GameEventBase {
  type: "tournament";
  name: string;
  dates: readonly Date[];
  gamesTotal: number;
}
export type GameEventTournament = Readonly<_GameEventTournament>;

interface _GameEventWithRef extends _GameEventBase {
  firebaseRef: FirebaseRef;
}
export type GameEventWithRef = Readonly<_GameEventWithRef>;

interface _GameEventRef {
  gameEventRef: FirebaseRef;
}
export type GameEventRef = Readonly<_GameEventRef>;

type _GameEvent = GameEventOnline | GameEventLive | GameEventTournament;
export type GameEvent = Readonly<_GameEvent>;

export type GameEventOrRef = Readonly<
  GameEventOnline | GameEventLive | GameEventRef
>;
