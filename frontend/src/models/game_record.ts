import { SerializedElo, SerializedEloDelta } from "./elo";
import { Author, FirebaseDoc, FirebaseRef } from "./firebase_models";
import { GameEvent, GameEventRef } from "./game_event";
import { Player } from "./player";

export enum Hosts {
  ogs = "https://online-go.com/",
  pglatc = "https://pandanet-igs.com/system/sgfs/",
}

interface _Link {
  complete?: string;
  host?: string;
  id?: string;
}
export type Link = Readonly<_Link>;

export interface _GameRecord extends FirebaseDoc {
  firebaseRef?: FirebaseRef;
  author?: Author;
  blackRef: FirebaseRef;
  blackPlayer?: Player;
  whiteRef: FirebaseRef;
  whitePlayer?: Player;
  handicap?: number;
  date: number;
  dateCreated?: number;
  result: Result;
  sgf?: Sgf;
  gameEventRef: GameEventRef;
  gameEvent?: GameEvent;
  eloData?: EloData;
  links?: readonly Link[];
  additionalInfo?: string;
}
export type GameRecord = Readonly<_GameRecord>;

interface _EloData {
  atTheTimeBlackElo: SerializedElo;
  eloDeltaBlack: SerializedEloDelta;
  atTheTimeWhiteElo: SerializedElo;
  eloDeltaWhite: SerializedEloDelta;
}
export type EloData = Readonly<_EloData>;

interface _DateEloData {
  date: number;
  atTheTimeElo: number;
  eloDelta: number;
}
export type DateEloData = Readonly<_DateEloData>;

export type Sgf = Readonly<string>;

interface _Result {
  whoWins: Color;
  // TODO2: These should be enums...
  difference?: number;
  time?: boolean;
  byReferee?: boolean;
}
type Result = Readonly<_Result>;

export const resultString = (result: Result): string => {
  const whoWins = colorFromString(result.whoWins);

  const short = shortenedWhoWins(whoWins);

  return !result?.difference ? `${short}R` : `${short}${result.difference}`;
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
