import { Country } from "./country";
import { SerializedElo } from "./elo";
import { Author, FirebaseDoc, FirebaseRef } from "./firebase_models";
import { GameRecord } from "./game_record";

export interface _Player extends FirebaseDoc {
  firebaseRef?: FirebaseRef;
  name: string;
  searchableName?: readonly string[];
  email?: string;
  nicks?: readonly Nick[];
  picture?: string;
  countries: readonly Country[];
  isBrazilian?: boolean;
  currentElo?: SerializedElo;
  rebaseElos: readonly RebaseElo[];
  eloHistory?: readonly EloHistory[];
  dateCreated?: number;
  author?: Author;
  gamesTotal?: number;
  lastGame?: GameRecord;
  additionalInfo?: string;
}
export type Player = Readonly<_Player>;

interface _RebaseElo {
  date: number;
  elo: SerializedElo;
}
export type RebaseElo = Readonly<_RebaseElo>;

interface _EloHistory {
  date: number;
  atTheTimeElo: SerializedElo;
  eloDelta?: SerializedElo;
  forced?: boolean;
}
export type EloHistory = Readonly<_EloHistory>;

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
