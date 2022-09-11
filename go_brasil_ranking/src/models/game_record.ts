import { Timestamp } from "firebase/firestore";
import { JsonInterface } from "../infra/serializable";

import { SerializedElo, SerializedEloDelta } from "./elo";
import { GameEvent } from "./event";
import { FirebaseRef } from "./firebase_ref";
import { SerializedPlayer } from "./player";

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

interface _EloData {
  atTheTimeBlackElo: SerializedElo;
  eloDeltaBlack: SerializedEloDelta;
  atTheTimeWhiteElo: SerializedElo;
  eloDeltaWhite: SerializedEloDelta;
}

type EloData = Readonly<_EloData>;

interface _SerializedGameRecord extends JsonInterface {
  firebaseRef: FirebaseRef;
  date: Timestamp;
  blackPlayer: SerializedPlayer;
  whitePlayer: SerializedPlayer;
  eloData: EloData;
  result: Result;
  gameEvent: GameEvent;
}

export type SerializedGameRecord = Readonly<_SerializedGameRecord>;
