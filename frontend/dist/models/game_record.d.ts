import { SerializedElo, SerializedEloDelta } from "./elo";
import { Author, FirebaseDoc, FirebaseRef } from "./firebase_models";
import { GameEvent, GameEventRef } from "./game_event";
import { Player } from "./player";
interface _GameRecord extends FirebaseDoc {
    firebaseRef?: FirebaseRef;
    author?: Author;
    blackRef: FirebaseRef;
    blackPlayer?: Player;
    whiteRef: FirebaseRef;
    whitePlayer?: Player;
    handicap?: number;
    date: number;
    dateCreated?: number;
    result: Result;
    sgf?: Sgf;
    gameEventRef: GameEventRef;
    gameEvent?: GameEvent;
    eloData?: EloData;
}
export declare type GameRecord = Readonly<_GameRecord>;
interface _EloData {
    atTheTimeBlackElo: SerializedElo;
    eloDeltaBlack: SerializedEloDelta;
    atTheTimeWhiteElo: SerializedElo;
    eloDeltaWhite: SerializedEloDelta;
}
declare type EloData = Readonly<_EloData>;
export declare type Sgf = Readonly<string>;
interface _Result {
    whoWins: Color;
    difference?: number;
    time?: boolean;
}
declare type Result = Readonly<_Result>;
export declare const resultString: (result: Result) => string;
export declare const doesThisColorWin: (color: Color, result: Result) => GameResultStatus;
export declare enum GameResultStatus {
    Win = "Win",
    Loss = "Loss",
    Voided = "Voided"
}
export declare enum Color {
    Black = "Preto",
    White = "Branco"
}
export declare const colorFromString: (cString: string) => Color;
export declare const shortenedWhoWins: (c: Color) => string;
export {};
