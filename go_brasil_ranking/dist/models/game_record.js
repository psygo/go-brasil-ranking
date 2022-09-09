"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRecord = void 0;
var WhoWhins;
(function (WhoWhins) {
    WhoWhins["BlackWins"] = "B+";
    WhoWhins["WhiteWins"] = "W+";
    WhoWhins["Voided"] = "V";
})(WhoWhins || (WhoWhins = {}));
class GameRecord {
    date;
    blackPlayerRef;
    whitePlayerRef;
    result;
    currentBlackElo;
    eloDeltaBlack;
    currentWhiteElo;
    eloDeltaWhite;
    constructor(date, blackPlayerRef, whitePlayerRef, result, currentBlackElo, eloDeltaBlack, currentWhiteElo, eloDeltaWhite) {
        this.date = date;
        this.blackPlayerRef = blackPlayerRef;
        this.whitePlayerRef = whitePlayerRef;
        this.result = result;
        this.currentBlackElo = currentBlackElo;
        this.eloDeltaBlack = eloDeltaBlack;
        this.currentWhiteElo = currentWhiteElo;
        this.eloDeltaWhite = eloDeltaWhite;
    }
    static new = (date, blackPlayerRef, whitePlayerRef, result) => new GameRecord(date, blackPlayerRef, whitePlayerRef, result);
    addCalculatedElos = (currentBlackElo, eloDeltaBlack, currentWhiteElo, eloDeltaWhite) => new GameRecord(this.date, this.blackPlayerRef, this.whitePlayerRef, this.result, currentBlackElo, eloDeltaBlack, currentWhiteElo, eloDeltaWhite);
}
exports.GameRecord = GameRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZV9yZWNvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2dhbWVfcmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLElBQUssUUFJSjtBQUpELFdBQUssUUFBUTtJQUNYLDRCQUFnQixDQUFBO0lBQ2hCLDRCQUFnQixDQUFBO0lBQ2hCLHdCQUFZLENBQUE7QUFDZCxDQUFDLEVBSkksUUFBUSxLQUFSLFFBQVEsUUFJWjtBQWtCRCxNQUFhLFVBQVU7SUFFSDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBUmxCLFlBQ2tCLElBQVUsRUFDVixjQUEyQixFQUMzQixjQUEyQixFQUMzQixNQUFjLEVBQ2QsZUFBd0IsRUFDeEIsYUFBc0IsRUFDdEIsZUFBd0IsRUFDeEIsYUFBc0I7UUFQdEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLG1CQUFjLEdBQWQsY0FBYyxDQUFhO1FBQzNCLG1CQUFjLEdBQWQsY0FBYyxDQUFhO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBUztRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBUztRQUN0QixvQkFBZSxHQUFmLGVBQWUsQ0FBUztRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBUztJQUNyQyxDQUFDO0lBRUosTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUNYLElBQVUsRUFDVixjQUEyQixFQUMzQixjQUEyQixFQUMzQixNQUFjLEVBQ0YsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRTlFLGlCQUFpQixHQUFHLENBQ2xCLGVBQXVCLEVBQ3ZCLGFBQXFCLEVBQ3JCLGVBQXVCLEVBQ3ZCLGFBQXFCLEVBQ1QsRUFBRSxDQUNkLElBQUksVUFBVSxDQUNaLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFDWCxlQUFlLEVBQ2YsYUFBYSxFQUNiLGVBQWUsRUFDZixhQUFhLENBQ2QsQ0FBQzs7QUFsQ04sZ0NBbUNDIn0=