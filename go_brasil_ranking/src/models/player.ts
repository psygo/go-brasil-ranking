import { JsonInterface } from "../infra/serializable";
import { SerializedElo } from "./elo";
import { FirebaseRef } from "./firebase_ref";

interface _Country {
  name: CountryName;
  state?: BrazilianState;
  city?: string;
}
export type Country = Readonly<_Country>;

export const getFlag = (cn: CountryName): CountryFlag => {
  const ind = Object.keys(CountryFlag).findIndex(cf => cf === cn.toLowerCase())
  return Object.values(CountryFlag)[ind]
}

export namespace ToServerPlayers {
  interface _Player__Post extends JsonInterface {
    name: string;
    countries: readonly Country[];
    elo: SerializedElo;
  }
  export type Player__Post = Readonly<_Player__Post>;
}

interface _Player extends ToServerPlayers.Player__Post {
  firebaseRef: FirebaseRef;
  name: string;
  countries: readonly Country[];
  elo: SerializedElo;
  gamesTotal: number;
}
export type Player = Readonly<_Player>;

export namespace OnServerPlayers {
  interface _Player__NoRef extends ToServerPlayers.Player__Post {
    name: string;
    countries: readonly Country[];
    elo: SerializedElo;
    gamesTotal: number;
  }
  export type Player__NoRef = Readonly<_Player__NoRef>;
}

export enum CountryName {
  angola = "Angola",
  argentina = "Argentina",
  brazil = "Brazil",
  colombia = "Colombia",
  france = "France",
  israel = "Israel",
  italy = "Italy",
  japan = "Japan",
  mexico = "Mexico",
  portugal = "Portugal",
  romania = "Romania",
  taiwan = "Taiwan",
}

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

export enum BrazilianState {
  ac = "AC",
  al = "AL",
  ap = "AP",
  am = "AM",
  ba = "BA",
  ce = "CE",
  df = "DF",
  es = "ES",
  go = "GO",
  ma = "MA",
  mt = "MT",
  ms = "MS",
  mg = "MG",
  pa = "PA",
  pb = "PB",
  pr = "PR",
  pe = "PE",
  pi = "PI",
  rj = "RJ",
  rn = "RN",
  rs = "RS",
  ro = "RO",
  rr = "RR",
  sp = "SP",
  se = "SE",
  to = "TO",
}
