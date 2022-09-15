import { JsonInterface } from "../infra/serializable";

import { SerializedElo, SerializedEloDelta } from "./elo";
import { OnServerGameEvents } from "./game_event";
import { FirebaseRef } from "./firebase_ref";

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

export const shortenedWhoWins = (c: Color): string => {
  const dict = {
    Preto: "B+",
    Branco: "W+",
  };
  return dict[c];
};

interface _Result {
  whoWins: Color;
  resignation?: boolean;
  difference?: number;
}
type Result = Readonly<_Result>;

export const resultString = (result: Result): string => {
  const whoWins = colorFromString(result.whoWins);

  const short = shortenedWhoWins(whoWins);

  return result.resignation ? `${short}R` : `${short}${result.difference}`;
};

export const colorResult = (result: Result, color: Color): GameResultStatus =>
  color === Color.Black
    ? result.whoWins === Color.Black
      ? GameResultStatus.Win
      : GameResultStatus.Loss
    : result.whoWins === Color.White
    ? GameResultStatus.Win
    : GameResultStatus.Loss;

interface _EloData {
  atTheTimeBlackElo: SerializedElo;
  eloDeltaBlack: SerializedEloDelta;
  atTheTimeWhiteElo: SerializedElo;
  eloDeltaWhite: SerializedEloDelta;
}
type EloData = Readonly<_EloData>;

export type Sgf = string;

export namespace ToServerGameRecord {
  interface _GameRecord__Post extends JsonInterface {
    blackRef: FirebaseRef;
    whiteRef: FirebaseRef;
    result: Result;
    sgf: Sgf;
    gameEvent: OnServerGameEvents.GameEvent__OrRef;
  }
  export type GameRecord__Post = Readonly<_GameRecord__Post>;
}

interface _GameRecord extends ToServerGameRecord.GameRecord__Post {
  firebaseRef: FirebaseRef;
  dateAdded: Date;
  blackName: string;
  whiteName: string;
  eloData: EloData;
}
export type GameRecord = Readonly<_GameRecord>;

export namespace OnServerGameRecord {
  interface _GameRecord__NoRef extends ToServerGameRecord.GameRecord__Post {
    dateAdded: Date;
    blackName: string;
    whiteName: string;
    eloData: EloData;
  }
  export type GameRecord__NoRef = Readonly<_GameRecord__NoRef>;

  interface _GameRecord__Ref {
    gameRef: FirebaseRef;
    gameDate: Date;
  }
  export type GameRecord__Ref = Readonly<_GameRecord__Ref>;
}
