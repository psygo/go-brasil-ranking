"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenedWhoWins = exports.colorFromString = exports.Color = exports.GameResultStatus = exports.doesThisColorWin = exports.resultString = void 0;
const resultString = (result) => {
    const whoWins = (0, exports.colorFromString)(result.whoWins);
    const short = (0, exports.shortenedWhoWins)(whoWins);
    return !result?.difference ? `${short}R` : `${short}${result.difference}`;
};
exports.resultString = resultString;
const doesThisColorWin = (color, result) => color === Color.Black
    ? result.whoWins === Color.Black
        ? GameResultStatus.Win
        : GameResultStatus.Loss
    : result.whoWins === Color.White
        ? GameResultStatus.Win
        : GameResultStatus.Loss;
exports.doesThisColorWin = doesThisColorWin;
var GameResultStatus;
(function (GameResultStatus) {
    GameResultStatus["Win"] = "Win";
    GameResultStatus["Loss"] = "Loss";
    GameResultStatus["Voided"] = "Voided";
})(GameResultStatus = exports.GameResultStatus || (exports.GameResultStatus = {}));
var Color;
(function (Color) {
    Color["Black"] = "Preto";
    Color["White"] = "Branco";
})(Color = exports.Color || (exports.Color = {}));
const colorFromString = (cString) => Object.values(Color).find((c) => c === cString);
exports.colorFromString = colorFromString;
const shortenedColorDict = {
    Preto: "B+",
    Branco: "W+",
};
const shortenedWhoWins = (c) => shortenedColorDict[c];
exports.shortenedWhoWins = shortenedWhoWins;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZV9yZWNvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2dhbWVfcmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQWdETyxNQUFNLFlBQVksR0FBRyxDQUFDLE1BQWMsRUFBVSxFQUFFO0lBQ3JELE1BQU0sT0FBTyxHQUFHLElBQUEsdUJBQWUsRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFaEQsTUFBTSxLQUFLLEdBQUcsSUFBQSx3QkFBZ0IsRUFBQyxPQUFPLENBQUMsQ0FBQztJQUV4QyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzVFLENBQUMsQ0FBQztBQU5XLFFBQUEsWUFBWSxnQkFNdkI7QUFFSyxNQUFNLGdCQUFnQixHQUFHLENBQzlCLEtBQVksRUFDWixNQUFjLEVBQ0ksRUFBRSxDQUNwQixLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUs7SUFDbkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLEtBQUs7UUFDOUIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEdBQUc7UUFDdEIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUk7SUFDekIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLEtBQUs7UUFDaEMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEdBQUc7UUFDdEIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztBQVZmLFFBQUEsZ0JBQWdCLG9CQVVEO0FBRTVCLElBQVksZ0JBSVg7QUFKRCxXQUFZLGdCQUFnQjtJQUMxQiwrQkFBVyxDQUFBO0lBQ1gsaUNBQWEsQ0FBQTtJQUNiLHFDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFKVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUkzQjtBQUVELElBQVksS0FHWDtBQUhELFdBQVksS0FBSztJQUNmLHdCQUFlLENBQUE7SUFDZix5QkFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBSFcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBR2hCO0FBRU0sTUFBTSxlQUFlLEdBQUcsQ0FBQyxPQUFlLEVBQVMsRUFBRSxDQUN4RCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBRSxDQUFDO0FBRHRDLFFBQUEsZUFBZSxtQkFDdUI7QUFFbkQsTUFBTSxrQkFBa0IsR0FBRztJQUN6QixLQUFLLEVBQUUsSUFBSTtJQUNYLE1BQU0sRUFBRSxJQUFJO0NBQ2IsQ0FBQztBQUNLLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFRLEVBQVUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQS9ELFFBQUEsZ0JBQWdCLG9CQUErQyJ9