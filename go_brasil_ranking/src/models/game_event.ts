export type _GameEvent = _EventOnline | _EventLive | _EventTournament;
export type GameEvent = Readonly<_GameEvent>;

interface _EventOnline {
  type: "online";
}

export type EventOnline = Readonly<_EventOnline>;

interface _EventLive {
  type: "live";
}

export type EventLive = Readonly<_EventLive>;

interface _EventTournament {
  type: "tournament";
  name: string;
  dates: readonly Date[];
}

export type EventTournament = Readonly<_EventTournament>;
