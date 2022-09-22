"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brazilianStateFromString = exports.BrazilianState = exports.CountryFlag = exports.countryKeyFromString = exports.countryNameFromString = exports.CountryName = exports.getAllFlags = exports.getFlag = void 0;
const getFlag = (cn) => {
    const ind = Object.keys(CountryFlag).findIndex((cf) => cf === (0, exports.countryKeyFromString)(cn).toLowerCase());
    return Object.values(CountryFlag)[ind];
};
exports.getFlag = getFlag;
const getAllFlags = (countries) => countries
    .map((c) => (0, exports.getFlag)(c.name).toString())
    .reduce((pflag, cflag) => `${pflag} ${cflag}`);
exports.getAllFlags = getAllFlags;
var CountryName;
(function (CountryName) {
    CountryName["brazil"] = "Brasil";
    CountryName["angola"] = "Angola";
    CountryName["argentina"] = "Argentina";
    CountryName["canada"] = "Canad\u00E1";
    CountryName["colombia"] = "Colombia";
    CountryName["france"] = "Fran\u00E7a";
    CountryName["israel"] = "Israel";
    CountryName["italy"] = "It\u00E1lia";
    CountryName["japan"] = "Jap\u00E3o";
    CountryName["mexico"] = "M\u00E9xico";
    CountryName["portugal"] = "Portugal";
    CountryName["romania"] = "Rom\u00EAnia";
    CountryName["taiwan"] = "Taiwan";
    CountryName["usa"] = "EUA";
})(CountryName = exports.CountryName || (exports.CountryName = {}));
const countryNameFromString = (cString) => Object.values(CountryName).find((c) => c === cString);
exports.countryNameFromString = countryNameFromString;
const countryKeyFromString = (cString) => {
    for (const [k, v] of Object.entries(CountryName))
        if (v === cString)
            return k;
    return "";
};
exports.countryKeyFromString = countryKeyFromString;
var CountryFlag;
(function (CountryFlag) {
    CountryFlag["angola"] = "\uD83C\uDDE6\uD83C\uDDF4";
    CountryFlag["argentina"] = "\uD83C\uDDE6\uD83C\uDDF7";
    CountryFlag["brazil"] = "\uD83C\uDDE7\uD83C\uDDF7";
    CountryFlag["canada"] = "\uD83C\uDDE8\uD83C\uDDE6";
    CountryFlag["colombia"] = "\uD83C\uDDE8\uD83C\uDDF4";
    CountryFlag["france"] = "\uD83C\uDDEB\uD83C\uDDF7";
    CountryFlag["israel"] = "\uD83C\uDDEE\uD83C\uDDF1";
    CountryFlag["italy"] = "\uD83C\uDDEE\uD83C\uDDF9";
    CountryFlag["japan"] = "\uD83C\uDDEF\uD83C\uDDF5";
    CountryFlag["mexico"] = "\uD83C\uDDF2\uD83C\uDDFD";
    CountryFlag["portugal"] = "\uD83C\uDDF5\uD83C\uDDF9";
    CountryFlag["romania"] = "\uD83C\uDDF7\uD83C\uDDF4";
    CountryFlag["taiwan"] = "\uD83C\uDDF9\uD83C\uDDFC";
    CountryFlag["usa"] = "\uD83C\uDDFA\uD83C\uDDF8";
})(CountryFlag = exports.CountryFlag || (exports.CountryFlag = {}));
var BrazilianState;
(function (BrazilianState) {
    BrazilianState["ac"] = "AC";
    BrazilianState["al"] = "AL";
    BrazilianState["ap"] = "AP";
    BrazilianState["am"] = "AM";
    BrazilianState["ba"] = "BA";
    BrazilianState["ce"] = "CE";
    BrazilianState["df"] = "DF";
    BrazilianState["es"] = "ES";
    BrazilianState["go"] = "GO";
    BrazilianState["ma"] = "MA";
    BrazilianState["mt"] = "MT";
    BrazilianState["ms"] = "MS";
    BrazilianState["mg"] = "MG";
    BrazilianState["pa"] = "PA";
    BrazilianState["pb"] = "PB";
    BrazilianState["pr"] = "PR";
    BrazilianState["pe"] = "PE";
    BrazilianState["pi"] = "PI";
    BrazilianState["rj"] = "RJ";
    BrazilianState["rn"] = "RN";
    BrazilianState["rs"] = "RS";
    BrazilianState["ro"] = "RO";
    BrazilianState["rr"] = "RR";
    BrazilianState["sp"] = "SP";
    BrazilianState["se"] = "SE";
    BrazilianState["to"] = "TO";
})(BrazilianState = exports.BrazilianState || (exports.BrazilianState = {}));
const brazilianStateFromString = (brString) => Object.values(BrazilianState).find((brS) => brS === brString);
exports.brazilianStateFromString = brazilianStateFromString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvY291bnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPTyxNQUFNLE9BQU8sR0FBRyxDQUFDLEVBQWUsRUFBZSxFQUFFO0lBQ3RELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUM1QyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLElBQUEsNEJBQW9CLEVBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQ3RELENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDO0FBTFcsUUFBQSxPQUFPLFdBS2xCO0FBQ0ssTUFBTSxXQUFXLEdBQUcsQ0FBQyxTQUE2QixFQUFFLEVBQUUsQ0FDM0QsU0FBUztLQUNOLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBQSxlQUFPLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3RDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7QUFIdEMsUUFBQSxXQUFXLGVBRzJCO0FBRW5ELElBQVksV0FlWDtBQWZELFdBQVksV0FBVztJQUNyQixnQ0FBaUIsQ0FBQTtJQUNqQixnQ0FBaUIsQ0FBQTtJQUNqQixzQ0FBdUIsQ0FBQTtJQUN2QixxQ0FBaUIsQ0FBQTtJQUNqQixvQ0FBcUIsQ0FBQTtJQUNyQixxQ0FBaUIsQ0FBQTtJQUNqQixnQ0FBaUIsQ0FBQTtJQUNqQixvQ0FBZ0IsQ0FBQTtJQUNoQixtQ0FBZSxDQUFBO0lBQ2YscUNBQWlCLENBQUE7SUFDakIsb0NBQXFCLENBQUE7SUFDckIsdUNBQW1CLENBQUE7SUFDbkIsZ0NBQWlCLENBQUE7SUFDakIsMEJBQVcsQ0FBQTtBQUNiLENBQUMsRUFmVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQWV0QjtBQUVNLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxPQUFlLEVBQWUsRUFBRSxDQUNwRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBRSxDQUFDO0FBRDVDLFFBQUEscUJBQXFCLHlCQUN1QjtBQUVsRCxNQUFNLG9CQUFvQixHQUFHLENBQUMsT0FBZSxFQUFVLEVBQUU7SUFDOUQsS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQUUsSUFBSSxDQUFDLEtBQUssT0FBTztZQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlFLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBSFcsUUFBQSxvQkFBb0Isd0JBRy9CO0FBRUYsSUFBWSxXQWVYO0FBZkQsV0FBWSxXQUFXO0lBQ3JCLGtEQUFlLENBQUE7SUFDZixxREFBa0IsQ0FBQTtJQUNsQixrREFBZSxDQUFBO0lBQ2Ysa0RBQWUsQ0FBQTtJQUNmLG9EQUFpQixDQUFBO0lBQ2pCLGtEQUFlLENBQUE7SUFDZixrREFBZSxDQUFBO0lBQ2YsaURBQWMsQ0FBQTtJQUNkLGlEQUFjLENBQUE7SUFDZCxrREFBZSxDQUFBO0lBQ2Ysb0RBQWlCLENBQUE7SUFDakIsbURBQWdCLENBQUE7SUFDaEIsa0RBQWUsQ0FBQTtJQUNmLCtDQUFZLENBQUE7QUFDZCxDQUFDLEVBZlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFldEI7QUFFRCxJQUFZLGNBMkJYO0FBM0JELFdBQVksY0FBYztJQUN4QiwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtBQUNYLENBQUMsRUEzQlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUEyQnpCO0FBRU0sTUFBTSx3QkFBd0IsR0FBRyxDQUFDLFFBQWdCLEVBQWtCLEVBQUUsQ0FDM0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUUsQ0FBQztBQURwRCxRQUFBLHdCQUF3Qiw0QkFDNEIifQ==