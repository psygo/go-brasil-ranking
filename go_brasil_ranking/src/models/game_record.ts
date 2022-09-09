import { Timestamp } from "firebase/firestore";
import Serializable, { CustomJson } from "../infra/serializable";

import Elo from "./elo";
import { FirebaseRef } from "./firebase_ref";

export enum GameResult {
  Win,
  Loss,
  Voided,
}

enum Color {
  Black,
  White,
}

interface Result {
  whoWins: Color;
  difference: number;
}

export default interface SerializedGameRecord extends CustomJson {
  date: Timestamp;
  blackPlayerRef: FirebaseRef;
  currentBlackElo?: number;
  eloDeltaBlack?: number;
  whitePlayerRef: FirebaseRef;
  currentWhiteElo?: number;
  eloDeltaWhite?: number;
  result: Result;
}

export class GameRecord implements Serializable {
  private constructor(
    public readonly date: Date,
    public readonly blackPlayerRef: FirebaseRef,
    public readonly whitePlayerRef: FirebaseRef,
    public readonly result: Result,
    public readonly currentBlackElo?: Elo,
    public readonly eloDeltaBlack?: number,
    public readonly currentWhiteElo?: Elo,
    public readonly eloDeltaWhite?: number
  ) {}

  serialize = (): SerializedGameRecord => ({
    date: Serializable.dateToTimestamp(this.date),
    blackPlayerRef: this.blackPlayerRef,
    currentBlackElo: this.currentBlackElo?.num,
    eloDeltaBlack: this.eloDeltaBlack,
    whitePlayerRef: this.whitePlayerRef,
    currentWhiteElo: this.currentWhiteElo?.num,
    eloDeltaWhite: this.eloDeltaWhite,
    result: this.result,
  });

  static deserialize = (json: CustomJson): GameRecord =>
    new GameRecord(
      Serializable.jsonToTimestampToDate(json.date),
      json.blackPlayerRef as string,
      json.whitePlayerRef as string,
      json.result as Result,
      new Elo(json.currentBlackElo as number),
      json.eloDeltaBlack as number,
      new Elo(json.currentWhiteElo as number),
      json.eloDeltaWhite as number
    );

  static new = (
    date: Date,
    blackPlayerRef: FirebaseRef,
    whitePlayerRef: FirebaseRef,
    result: Result
  ): GameRecord => new GameRecord(date, blackPlayerRef, whitePlayerRef, result);

  addCalculatedElos = (
    currentBlackElo: Elo,
    eloDeltaBlack: number,
    currentWhiteElo: Elo,
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
