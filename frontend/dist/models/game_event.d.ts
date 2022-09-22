import { FirebaseDoc, FirebaseRef } from "./firebase_models";
export declare enum GameEventTypes {
    online = "Online",
    live = "Ao Vivo",
    tournament = "Torneio",
    league = "Liga"
}
export declare const gameEventTypeFromString: (getString: string) => GameEventTypes;
interface _GameEventBase extends FirebaseDoc {
    type: GameEventTypes;
}
interface _GameEventOnline extends _GameEventBase {
    type: GameEventTypes.online;
}
export declare type GameEventOnline = Readonly<_GameEventOnline>;
interface _GameEventLive extends _GameEventBase {
    type: GameEventTypes.live;
}
export declare type GameEventLive = Readonly<_GameEventLive>;
interface _GameEventTournament extends _GameEventBase {
    type: GameEventTypes.tournament;
    firebaseRef?: FirebaseRef;
    name: string;
    dates: readonly number[];
    link?: string;
    dateCreated?: number;
    gamesTotal?: number;
}
export declare type GameEventTournament = Readonly<_GameEventTournament>;
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
export declare type GameEventLeague = Readonly<_GameEventLeague>;
declare type _GameEvent = GameEventOnline | GameEventLive | GameEventTournament | GameEventLeague;
export declare type GameEvent = Readonly<_GameEvent>;
export declare const isTournamentOrLeague: (gameEvent: GameEvent) => gameEvent is Readonly<_GameEventTournament> | Readonly<_GameEventLeague>;
export declare type GameEventRef = FirebaseRef | GameEventTypes.online | GameEventTypes.live;
export declare const isTournamentOrLeagueRef: (gameEventRef: GameEventRef) => gameEventRef is string;
export declare type TournamentOrLeague = GameEventTournament | GameEventLeague;
export declare type OnlineOrLive = GameEventOnline | GameEventLive;
export {};
