import { JsonInterface } from "../infra/serializable";

import { SerializedElo, SerializedEloDelta } from "./elo";
import { FirebaseRef } from "./firebase_ref";
import { GameEvent } from "./game_event";

interface _GameRecord extends JsonInterface {
  firebaseRef?: FirebaseRef;
  blackRef: FirebaseRef;
  blackName?: string;
  whiteRef: FirebaseRef;
  whiteName?: string;
  date: Date;
  dateAdded?: Date;
  result: Result;
  sgf: Sgf;
  gameEventRef?: FirebaseRef;
  gameEvent?: GameEvent;
  eloData?: EloData;
}
export type GameRecord = Readonly<_GameRecord>;

interface _EloData {
  atTheTimeBlackElo: SerializedElo;
  eloDeltaBlack: SerializedEloDelta;
  atTheTimeWhiteElo: SerializedElo;
  eloDeltaWhite: SerializedEloDelta;
}
type EloData = Readonly<_EloData>;

export type Sgf = string;

interface _Result {
  whoWins: Color;
  difference?: number;
}
type Result = Readonly<_Result>;

export const resultString = (result: Result): string => {
  const whoWins = colorFromString(result.whoWins);

  const short = shortenedWhoWins(whoWins);

  return result?.difference ? `${short}R` : `${short}${result.difference}`;
};

export const doesThisColorWin = (
  color: Color,
  result: Result
): GameResultStatus =>
  color === Color.Black
    ? result.whoWins === Color.Black
      ? GameResultStatus.Win
      : GameResultStatus.Loss
    : result.whoWins === Color.White
    ? GameResultStatus.Win
    : GameResultStatus.Loss;

export enum GameResultStatus {
  Win = "Win",
  Loss = "Loss",
  Voided = "Voided",
}

export enum Color {
  Black = "Preto",
  White = "Branco",
}

export const colorFromString = (cString: string): Color =>
  Object.values(Color).find((c) => c === cString)!;

const shortenedColorDict = {
  Preto: "B+",
  Branco: "W+",
};
export const shortenedWhoWins = (c: Color): string => shortenedColorDict[c];
