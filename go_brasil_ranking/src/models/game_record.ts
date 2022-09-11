import { JsonInterface } from "../infra/serializable";

import { SerializedElo, SerializedEloDelta } from "./elo";
import { GameEvent } from "./game_event";
import { FirebaseRef } from "./firebase_ref";

export enum GameResult {
  Win,
  Loss,
  Voided,
}

export enum Color {
  Black,
  White,
}

interface _Result {
  whoWins: Color;
  resignation?: boolean;
  difference?: number;
}

type Result = Readonly<_Result>;

interface _EloData {
  atTheTimeBlackElo: SerializedElo;
  eloDeltaBlack: SerializedEloDelta;
  atTheTimeWhiteElo: SerializedElo;
  eloDeltaWhite: SerializedEloDelta;
}

type EloData = Readonly<_EloData>;

interface _GameRecordPost extends JsonInterface {
  blackRef: FirebaseRef;
  whiteRef: FirebaseRef;
  result: Result;
  gameEvent: GameEvent;
}

export type GameRecordPost = Readonly<_GameRecordPost>;

interface _GameRecord extends GameRecordPost {
  firebaseRef: FirebaseRef;
  date: Date;
  blackName: string;
  whiteName: string;
  eloData: EloData;
}

export type GameRecord = Readonly<_GameRecord>;
