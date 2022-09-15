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

type _GameEvent = GameEventOnline | GameEventLive | GameEventTournament;
export type GameEvent = Readonly<_GameEvent>;

export namespace OnServerGameEvents {
  interface _GameEvent__WithRef extends _GameEventBase {
    firebaseRef: FirebaseRef;
  }
  export type GameEvent__WithRef = Readonly<_GameEvent__WithRef>;

  interface _GameEvent__Ref {
    gameEventRef: FirebaseRef;
  }
  export type GameEventRef = Readonly<_GameEvent__Ref>;

  export type GameEvent__OrRef = Readonly<
    GameEventOnline | GameEventLive | OnServerGameEvents.GameEventRef
  >;
}
