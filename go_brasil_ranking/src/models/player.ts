import { JsonInterface } from "../infra/serializable";
import { SerializedElo } from "./elo";
import { FirebaseRef } from "./firebase_ref";

interface _Country {
  name: string;
  flag: CountryFlag;
  state?: BrazilianState;
  city?: string;
}
export type Country = Readonly<_Country>;

interface _PlayerPost extends JsonInterface {
  name: string;
  countries: readonly Country[];
  elo: SerializedElo;
}
export type PlayerPost = Readonly<_PlayerPost>;

interface _Player extends _PlayerPost {
  firebaseRef: FirebaseRef;
  name: string;
  countries: readonly Country[];
  elo: SerializedElo;
  gamesTotal: number;
}
export type Player = Readonly<_Player>;

interface _PlayerNoRef extends _PlayerPost {
  name: string;
  countries: readonly Country[];
  elo: SerializedElo;
  gamesTotal: number;
}
export type PlayerNoRef = Readonly<_PlayerNoRef>;

export enum CountryFlag {
  angola = "🇦🇴",
  argentina = "🇦🇷",
  brazil = "🇧🇷",
  colombia = "🇨🇴",
  france = "🇫🇷",
  israel = "🇮🇱",
  italy = "🇮🇹",
  mexico = "🇲🇽",
  portugal = "🇵🇹",
  romania = "🇷🇴",
  taiwan = "🇹🇼",
}

export enum BrazilianState {
  ac,
  al,
  ap,
  am,
  ba,
  ce,
  df,
  es,
  go,
  ma,
  mt,
  ms,
  mg,
  pa,
  pb,
  pr,
  pe,
  pi,
  rj,
  rn,
  rs,
  ro,
  rr,
  sp,
  se,
  to,
}
