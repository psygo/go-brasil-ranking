interface _Country {
    name: CountryName;
    state?: BrazilianState;
    city?: string;
}
export declare type Country = Readonly<_Country>;
export declare const getFlag: (cn: CountryName) => CountryFlag;
export declare const getAllFlags: (countries: readonly Country[]) => string;
export declare enum CountryName {
    brazil = "Brasil",
    angola = "Angola",
    argentina = "Argentina",
    canada = "Canad\u00E1",
    colombia = "Colombia",
    france = "Fran\u00E7a",
    israel = "Israel",
    italy = "It\u00E1lia",
    japan = "Jap\u00E3o",
    mexico = "M\u00E9xico",
    portugal = "Portugal",
    romania = "Rom\u00EAnia",
    taiwan = "Taiwan",
    usa = "EUA"
}
export declare const countryNameFromString: (cString: string) => CountryName;
export declare const countryKeyFromString: (cString: string) => string;
export declare enum CountryFlag {
    angola = "\uD83C\uDDE6\uD83C\uDDF4",
    argentina = "\uD83C\uDDE6\uD83C\uDDF7",
    brazil = "\uD83C\uDDE7\uD83C\uDDF7",
    canada = "\uD83C\uDDE8\uD83C\uDDE6",
    colombia = "\uD83C\uDDE8\uD83C\uDDF4",
    france = "\uD83C\uDDEB\uD83C\uDDF7",
    israel = "\uD83C\uDDEE\uD83C\uDDF1",
    italy = "\uD83C\uDDEE\uD83C\uDDF9",
    japan = "\uD83C\uDDEF\uD83C\uDDF5",
    mexico = "\uD83C\uDDF2\uD83C\uDDFD",
    portugal = "\uD83C\uDDF5\uD83C\uDDF9",
    romania = "\uD83C\uDDF7\uD83C\uDDF4",
    taiwan = "\uD83C\uDDF9\uD83C\uDDFC",
    usa = "\uD83C\uDDFA\uD83C\uDDF8"
}
export declare enum BrazilianState {
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
    to = "TO"
}
export declare const brazilianStateFromString: (brString: string) => BrazilianState;
export {};
