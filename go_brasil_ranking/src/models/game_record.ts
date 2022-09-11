import { Timestamp } from "firebase/firestore";
import Serializable, { JsonInterface } from "../infra/serializable";

import Elo, { SerializedElo, SerializedEloDelta } from "./elo";
import { GameEvent } from "./event";
import { FirebaseRef } from "./firebase_ref";
import Player, { SerializedPlayer } from "./player";

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

interface _SerializedGameRecord extends JsonInterface {
  firebaseRef?: FirebaseRef;
  date: Timestamp;
  blackPlayer: SerializedPlayer; // The server will register it as a ref and send us everything
  currentBlackElo?: SerializedElo;
  eloDeltaBlack?: SerializedEloDelta;
  whitePlayer: SerializedPlayer; // The server will register it as a ref and send us everything
  currentWhiteElo?: SerializedElo;
  eloDeltaWhite?: SerializedEloDelta;
  result: Result;
  gameEvent: GameEvent;
}

export type SerializedGameRecord = Readonly<_SerializedGameRecord>;

export default class GameRecord implements Serializable {
  private constructor(
    public readonly date: Date,
    public readonly blackPlayer: Player,
    public readonly whitePlayer: Player,
    public readonly result: Result,
    public readonly gameEvent: GameEvent = { type: "Online" },
    public readonly currentBlackElo?: Elo,
    public readonly eloDeltaBlack?: SerializedEloDelta,
    public readonly currentWhiteElo?: Elo,
    public readonly eloDeltaWhite?: SerializedEloDelta,
    public readonly firebaseRef?: FirebaseRef
  ) {}

  serialize = (): SerializedGameRecord => ({
    firebaseRef: this.firebaseRef,
    date: Serializable.dateToTimestamp(this.date),
    blackPlayer: this.blackPlayer.serialize(),
    currentBlackElo: this.currentBlackElo?.serialize(),
    eloDeltaBlack: this.eloDeltaBlack,
    whitePlayer: this.whitePlayer.serialize(),
    currentWhiteElo: this.currentWhiteElo?.serialize(),
    eloDeltaWhite: this.eloDeltaWhite,
    result: this.result,
    gameEvent: this.gameEvent,
  });

  static deserialize = (json: JsonInterface): GameRecord =>
    new GameRecord(
      Serializable.jsonToTimestampToDate(json.date),
      Player.deserialize(json.blackPlayer as SerializedPlayer),
      Player.deserialize(json.whitePlayer as SerializedPlayer),
      json.result as Result,
      json.event as GameEvent,
      Elo.deserialize(json.currentBlackElo as SerializedElo),
      json.eloDeltaBlack as SerializedEloDelta,
      Elo.deserialize(json.currentWhiteElo as SerializedElo),
      json.eloDeltaWhite as SerializedEloDelta,
      json.firebaseRef as FirebaseRef
    );

  static new = (
    date: Date,
    gameEvent: GameEvent,
    blackPlayer: Player,
    whitePlayer: Player,
    result: Result
  ): GameRecord =>
    new GameRecord(date, blackPlayer, whitePlayer, result, gameEvent);

  addCalculatedElos = (
    currentBlackElo: Elo,
    eloDeltaBlack: SerializedEloDelta,
    currentWhiteElo: Elo,
    eloDeltaWhite: SerializedEloDelta
  ): GameRecord =>
    new GameRecord(
      this.date,
      this.blackPlayer,
      this.whitePlayer,
      this.result,
      this.gameEvent,
      currentBlackElo,
      eloDeltaBlack,
      currentWhiteElo,
      eloDeltaWhite
    );
}
