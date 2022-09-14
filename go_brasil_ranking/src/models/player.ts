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

interface _Player__Post extends JsonInterface {
  name: string;
  countries: readonly Country[];
  elo: SerializedElo;
}
export type Player__Post = Readonly<_Player__Post>;

interface _Player extends _Player__Post {
  firebaseRef: FirebaseRef;
  name: string;
  countries: readonly Country[];
  elo: SerializedElo;
  gamesTotal: number;
}
export type Player = Readonly<_Player>;

interface _Player__NoRef extends _Player__Post {
  name: string;
  countries: readonly Country[];
  elo: SerializedElo;
  gamesTotal: number;
}
export type Player__NoRef = Readonly<_Player__NoRef>;

export enum CountryFlag {
  angola = "🇦🇴",
  argentina = "🇦🇷",
  brazil = "🇧🇷",
  colombia = "🇨🇴",
  france = "🇫🇷",
  israel = "🇮🇱",
  italy = "🇮🇹",
  japan = "🇯🇵",
  mexico = "🇲🇽",
  portugal = "🇵🇹",
  romania = "🇷🇴",
  taiwan = "🇹🇼",
}

export const brStateUpperCase = (brState: BrazilianState) =>
  Object.values(BrazilianState)[brState].toString().toUpperCase();

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
