import { JsonInterface } from "../infra/serializable";

import { SerializedElo, SerializedEloDelta } from "./elo";
import { GameEventOrRef } from "./game_event";
import { FirebaseRef } from "./firebase_ref";

export enum GameResultStatus {
  Win,
  Loss,
  Voided,
}

export enum Color {
  Black = "Preto",
  White = "Branco",
}

export const colorFromInt = (cInt: number): Color => Object.values(Color)[cInt];

interface _Result {
  whoWins: Color;
  resignation?: boolean;
  difference?: number;
}
type Result = Readonly<_Result>;

interface _Result__FromServer {
  whoWins: number;
  resignation?: boolean;
  difference?: number;
}
export type Result__FromServer = Readonly<_Result__FromServer>;

export const resultString = (result: Result__FromServer): string => {
  const whoWins = colorFromInt(result.whoWins);

  const resultDict = {
    Preto: "B+",
    Branco: "W+",
  };

  const shortenedWhoWins = resultDict[whoWins];

  return result.resignation
    ? `${shortenedWhoWins}R`
    : `${shortenedWhoWins}${result.difference}`;
};

interface _EloData {
  atTheTimeBlackElo: SerializedElo;
  eloDeltaBlack: SerializedEloDelta;
  atTheTimeWhiteElo: SerializedElo;
  eloDeltaWhite: SerializedEloDelta;
}
type EloData = Readonly<_EloData>;

export type Sgf = string;

interface _GameRecordPost extends JsonInterface {
  blackRef: FirebaseRef;
  whiteRef: FirebaseRef;
  result: Result;
  sgf: Sgf;
  gameEvent: GameEventOrRef;
}
export type GameRecordPost = Readonly<_GameRecordPost>;

interface _GameRecord extends GameRecordPost {
  firebaseRef: FirebaseRef;
  dateAdded: Date;
  blackName: string;
  whiteName: string;
  eloData: EloData;
}
export type GameRecord = Readonly<_GameRecord>;

interface _GameRecordNoRef extends GameRecordPost {
  dateAdded: Date;
  blackName: string;
  whiteName: string;
  eloData: EloData;
}
export type GameRecordNoRef = Readonly<_GameRecordNoRef>;

interface _GameRecordRef {
  gameRef: FirebaseRef;
  gameDate: Date;
}
export type GameRecordRef = Readonly<_GameRecordRef>;

export const colorResult = (result: Result, color: Color): GameResultStatus =>
  color === Color.Black
    ? result.whoWins === Color.Black
      ? GameResultStatus.Win
      : GameResultStatus.Loss
    : result.whoWins === Color.White
    ? GameResultStatus.Win
    : GameResultStatus.Loss;
