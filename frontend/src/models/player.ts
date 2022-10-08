import { Country } from "./country";
import { SerializedElo } from "./elo";
import { Author, FirebaseDoc, FirebaseRef } from "./firebase_models";
import { GameRecord } from "./game_record";

export interface _Player extends FirebaseDoc {
  firebaseRef?: FirebaseRef;
  name: string;
  email?: string;
  nicks?: readonly Nick[];
  picture?: string;
  countries: readonly Country[];
  isBrazilian?: boolean;
  currentElo: SerializedElo;
  eloHistory?: DateEloData[];
  dateCreated?: number;
  author?: Author;
  gamesTotal?: number;
  lastGame?: GameRecord;
  additionalInfo?: string;
}
export type Player = Readonly<_Player>;

interface _DateEloData {
  date: number;
  atTheTimeElo: number;
  eloDelta: number;
}
export type DateEloData = Readonly<_DateEloData>;

export enum GoServers {
  ogs = "OGS",
  kgs = "KGS",
  fox = "Fox",
  tygem = "Tygem",
  wbaduk = "WBaduk",
  pandanet = "Pandanet",
}

interface _Nick extends FirebaseDoc {
  name: string;
  server: GoServers;
}
export type Nick = Readonly<_Nick>;
