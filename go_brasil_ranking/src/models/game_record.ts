import { FirebaseRef } from "./firebase_ref";

export enum GameResult {
  Win,
  Loss,
  Voided
}

enum Color {
  Black,
  White,
}

interface Result {
  whoWins: Color;
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

export class GameRecord {
  private constructor(
    public readonly date: Date,
    public readonly blackPlayerRef: FirebaseRef,
    public readonly whitePlayerRef: FirebaseRef,
    public readonly result: Result,
    public readonly currentBlackElo?: number,
    public readonly eloDeltaBlack?: number,
    public readonly currentWhiteElo?: number,
    public readonly eloDeltaWhite?: number
  ) {}

  static new = (
    date: Date,
    blackPlayerRef: FirebaseRef,
    whitePlayerRef: FirebaseRef,
    result: Result
  ): GameRecord => new GameRecord(date, blackPlayerRef, whitePlayerRef, result);

  addCalculatedElos = (
    currentBlackElo: number,
    eloDeltaBlack: number,
    currentWhiteElo: number,
    eloDeltaWhite: number
  ): GameRecord =>
    new GameRecord(
      this.date,
      this.blackPlayerRef,
      this.whitePlayerRef,
      this.result,
      currentBlackElo,
      eloDeltaBlack,
      currentWhiteElo,
      eloDeltaWhite
    );
}
