import { Timestamp } from "firebase/firestore";
import Serializable, { JsonInterface } from "../infra/serializable";

import Elo, { SerializedElo, SerializedEloDelta } from "./elo";
import { GameEvent } from "./event";
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

interface _Result {
  whoWins: Color;
  difference: number;
}

type Result = Readonly<_Result>;

export default interface _SerializedGameRecord extends JsonInterface {
  date: Timestamp;
  blackPlayerRef: FirebaseRef;
  currentBlackElo?: SerializedElo;
  eloDeltaBlack?: SerializedEloDelta;
  whitePlayerRef: FirebaseRef;
  currentWhiteElo?: SerializedElo;
  eloDeltaWhite?: SerializedEloDelta;
  result: Result;
  gameEvent: GameEvent;
}

type SerializedGameRecord = Readonly<_SerializedGameRecord>;

export class GameRecord implements Serializable {
  private constructor(
    public readonly date: Date,
    public readonly blackPlayerRef: FirebaseRef,
    public readonly whitePlayerRef: FirebaseRef,
    public readonly result: Result,
    public readonly gameEvent: GameEvent = { type: "Online" },
    public readonly currentBlackElo?: Elo,
    public readonly eloDeltaBlack?: SerializedEloDelta,
    public readonly currentWhiteElo?: Elo,
    public readonly eloDeltaWhite?: SerializedEloDelta
  ) {}

  serialize = (): SerializedGameRecord => ({
    date: Serializable.dateToTimestamp(this.date),
    blackPlayerRef: this.blackPlayerRef,
    currentBlackElo: this.currentBlackElo?.serialize(),
    eloDeltaBlack: this.eloDeltaBlack,
    whitePlayerRef: this.whitePlayerRef,
    currentWhiteElo: this.currentWhiteElo?.serialize(),
    eloDeltaWhite: this.eloDeltaWhite,
    result: this.result,
    gameEvent: this.gameEvent,
  });

  static deserialize = (json: JsonInterface): GameRecord =>
    new GameRecord(
      Serializable.jsonToTimestampToDate(json.date),
      json.blackPlayerRef as FirebaseRef,
      json.whitePlayerRef as FirebaseRef,
      json.result as Result,
      json.event as GameEvent,
      Elo.deserialize(json.currentBlackElo as SerializedElo),
      json.eloDeltaBlack as SerializedEloDelta,
      Elo.deserialize(json.currentWhiteElo as SerializedElo),
      json.eloDeltaWhite as SerializedEloDelta
    );

  static new = (
    date: Date,
    gameEvent: GameEvent,
    blackPlayerRef: FirebaseRef,
    whitePlayerRef: FirebaseRef,
    result: Result
  ): GameRecord =>
    new GameRecord(date, blackPlayerRef, whitePlayerRef, result, gameEvent);

  addCalculatedElos = (
    currentBlackElo: Elo,
    eloDeltaBlack: SerializedEloDelta,
    currentWhiteElo: Elo,
    eloDeltaWhite: SerializedEloDelta
  ): GameRecord =>
    new GameRecord(
      this.date,
      this.blackPlayerRef,
      this.whitePlayerRef,
      this.result,
      this.gameEvent,
      currentBlackElo,
      eloDeltaBlack,
      currentWhiteElo,
      eloDeltaWhite
    );
}
