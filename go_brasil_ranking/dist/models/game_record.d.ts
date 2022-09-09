import { FirebaseRef } from "./firebase_ref";
declare enum WhoWhins {
    BlackWins = "B+",
    WhiteWins = "W+",
    Voided = "V"
}
interface Result {
    whoWins: WhoWhins;
    difference: number;
}
export default interface SerializedGameRecord {
    date: Date;
    blackPlayerRef: FirebaseRef;
    currentBlackElo?: number;
    eloDeltaBlack?: number;
    whitePlayerRef: FirebaseRef;
    currentWhiteElo?: number;
    eloDeltaWhite?: number;
    result: Result;
}
export declare class GameRecord {
    readonly date: Date;
    readonly blackPlayerRef: FirebaseRef;
    readonly whitePlayerRef: FirebaseRef;
    readonly result: Result;
    readonly currentBlackElo?: number | undefined;
    readonly eloDeltaBlack?: number | undefined;
    readonly currentWhiteElo?: number | undefined;
    readonly eloDeltaWhite?: number | undefined;
    private constructor();
    static new: (date: Date, blackPlayerRef: FirebaseRef, whitePlayerRef: FirebaseRef, result: Result) => GameRecord;
    addCalculatedElos: (currentBlackElo: number, eloDeltaBlack: number, currentWhiteElo: number, eloDeltaWhite: number) => GameRecord;
}
export {};
