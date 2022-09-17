interface _Country {
  name: CountryName;
  state?: BrazilianState;
  city?: string;
}
export type Country = Readonly<_Country>;

export const getFlag = (cn: CountryName): CountryFlag => {
  const ind = Object.keys(CountryFlag).findIndex(
    (cf) => cf === cn.toLowerCase()
  );
  return Object.values(CountryFlag)[ind];
};
export const getAllFlags = (countries: readonly Country[]) =>
  countries
    .map((c) => getFlag(c.name).toString())
    .reduce((pflag, cflag) => `${pflag} ${cflag}`);

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
