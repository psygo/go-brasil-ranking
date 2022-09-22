interface _Country {
  name: CountryName;
  state?: BrazilianState;
  city?: string;
}
export type Country = Readonly<_Country>;

export const getFlag = (cn: CountryName): CountryFlag => {
  const ind = Object.keys(CountryFlag).findIndex(
    (cf) => cf === countryKeyFromString(cn).toLowerCase()
  );
  return Object.values(CountryFlag)[ind];
};
export const getAllFlags = (countries: readonly Country[]) =>
  countries
    .map((c) => getFlag(c.name).toString())
    .reduce((pflag, cflag) => `${pflag} ${cflag}`);

export enum CountryName {
  brazil = "Brasil",
  angola = "Angola",
  argentina = "Argentina",
  canada = "Canadá",
  colombia = "Colombia",
  france = "França",
  israel = "Israel",
  italy = "Itália",
  japan = "Japão",
  mexico = "México",
  portugal = "Portugal",
  romania = "Romênia",
  taiwan = "Taiwan",
  usa = "EUA",
}

export const countryNameFromString = (cString: string): CountryName =>
  Object.values(CountryName).find((c) => c === cString)!;

export const countryKeyFromString = (cString: string): string => {
  for (const [k, v] of Object.entries(CountryName)) if (v === cString) return k;
  return "";
};

export enum CountryFlag {
  angola = "🇦🇴",
  argentina = "🇦🇷",
  brazil = "🇧🇷",
  canada = "🇨🇦",
  colombia = "🇨🇴",
  france = "🇫🇷",
  israel = "🇮🇱",
  italy = "🇮🇹",
  japan = "🇯🇵",
  mexico = "🇲🇽",
  portugal = "🇵🇹",
  romania = "🇷🇴",
  taiwan = "🇹🇼",
  usa = "🇺🇸",
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

export const brazilianStateFromString = (brString: string): BrazilianState =>
  Object.values(BrazilianState).find((brS) => brS === brString)!;
