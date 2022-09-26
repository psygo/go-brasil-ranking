"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brazilianStateFromString = exports.BrazilianState = exports.CountryFlag = exports.countryKeyFromString = exports.countryNameFromString = exports.CountryName = exports.getFlag = void 0;
const getFlag = (cn) => {
    const ind = Object.keys(CountryFlag).findIndex((cf) => cf === (0, exports.countryKeyFromString)(cn).toLowerCase());
    return Object.values(CountryFlag)[ind];
};
exports.getFlag = getFlag;
var CountryName;
(function (CountryName) {
    CountryName["brazil"] = "Brasil";
    CountryName["angola"] = "Angola";
    CountryName["argentina"] = "Argentina";
    CountryName["canada"] = "Canad\u00E1";
    CountryName["colombia"] = "Colombia";
    CountryName["france"] = "Fran\u00E7a";
    CountryName["germany"] = "Germany";
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
    CountryFlag["germany"] = "\uD83C\uDDE9\uD83C\uDDEA";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvY291bnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPTyxNQUFNLE9BQU8sR0FBRyxDQUFDLEVBQWUsRUFBZSxFQUFFO0lBQ3RELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUM1QyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLElBQUEsNEJBQW9CLEVBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQ3RELENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDO0FBTFcsUUFBQSxPQUFPLFdBS2xCO0FBRUYsSUFBWSxXQWdCWDtBQWhCRCxXQUFZLFdBQVc7SUFDckIsZ0NBQWlCLENBQUE7SUFDakIsZ0NBQWlCLENBQUE7SUFDakIsc0NBQXVCLENBQUE7SUFDdkIscUNBQWlCLENBQUE7SUFDakIsb0NBQXFCLENBQUE7SUFDckIscUNBQWlCLENBQUE7SUFDakIsa0NBQW1CLENBQUE7SUFDbkIsZ0NBQWlCLENBQUE7SUFDakIsb0NBQWdCLENBQUE7SUFDaEIsbUNBQWUsQ0FBQTtJQUNmLHFDQUFpQixDQUFBO0lBQ2pCLG9DQUFxQixDQUFBO0lBQ3JCLHVDQUFtQixDQUFBO0lBQ25CLGdDQUFpQixDQUFBO0lBQ2pCLDBCQUFXLENBQUE7QUFDYixDQUFDLEVBaEJXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBZ0J0QjtBQUVNLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxPQUFlLEVBQWUsRUFBRSxDQUNwRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBRSxDQUFDO0FBRDVDLFFBQUEscUJBQXFCLHlCQUN1QjtBQUVsRCxNQUFNLG9CQUFvQixHQUFHLENBQUMsT0FBZSxFQUFVLEVBQUU7SUFDOUQsS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQUUsSUFBSSxDQUFDLEtBQUssT0FBTztZQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlFLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBSFcsUUFBQSxvQkFBb0Isd0JBRy9CO0FBRUYsSUFBWSxXQWdCWDtBQWhCRCxXQUFZLFdBQVc7SUFDckIsa0RBQWUsQ0FBQTtJQUNmLHFEQUFrQixDQUFBO0lBQ2xCLGtEQUFlLENBQUE7SUFDZixrREFBZSxDQUFBO0lBQ2Ysb0RBQWlCLENBQUE7SUFDakIsa0RBQWUsQ0FBQTtJQUNmLG1EQUFnQixDQUFBO0lBQ2hCLGtEQUFlLENBQUE7SUFDZixpREFBYyxDQUFBO0lBQ2QsaURBQWMsQ0FBQTtJQUNkLGtEQUFlLENBQUE7SUFDZixvREFBaUIsQ0FBQTtJQUNqQixtREFBZ0IsQ0FBQTtJQUNoQixrREFBZSxDQUFBO0lBQ2YsK0NBQVksQ0FBQTtBQUNkLENBQUMsRUFoQlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFnQnRCO0FBRUQsSUFBWSxjQTJCWDtBQTNCRCxXQUFZLGNBQWM7SUFDeEIsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7SUFDVCwyQkFBUyxDQUFBO0lBQ1QsMkJBQVMsQ0FBQTtJQUNULDJCQUFTLENBQUE7QUFDWCxDQUFDLEVBM0JXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBMkJ6QjtBQUVNLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxRQUFnQixFQUFrQixFQUFFLENBQzNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFFLENBQUM7QUFEcEQsUUFBQSx3QkFBd0IsNEJBQzRCIn0=