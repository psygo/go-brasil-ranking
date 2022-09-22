"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTournamentOrLeagueRef = exports.isTournamentOrLeague = exports.gameEventTypeFromString = exports.GameEventTypes = void 0;
var GameEventTypes;
(function (GameEventTypes) {
    GameEventTypes["online"] = "Online";
    GameEventTypes["live"] = "Ao Vivo";
    GameEventTypes["tournament"] = "Torneio";
    GameEventTypes["league"] = "Liga";
})(GameEventTypes = exports.GameEventTypes || (exports.GameEventTypes = {}));
const gameEventTypeFromString = (getString) => Object.values(GameEventTypes).find((c) => c === getString);
exports.gameEventTypeFromString = gameEventTypeFromString;
const isTournamentOrLeague = (gameEvent) => gameEvent.type === GameEventTypes.tournament ||
    gameEvent.type === GameEventTypes.league;
exports.isTournamentOrLeague = isTournamentOrLeague;
const isTournamentOrLeagueRef = (gameEventRef) => gameEventRef !== GameEventTypes.online &&
    gameEventRef !== GameEventTypes.live;
exports.isTournamentOrLeagueRef = isTournamentOrLeagueRef;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZV9ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvZ2FtZV9ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxJQUFZLGNBS1g7QUFMRCxXQUFZLGNBQWM7SUFDeEIsbUNBQWlCLENBQUE7SUFDakIsa0NBQWdCLENBQUE7SUFDaEIsd0NBQXNCLENBQUE7SUFDdEIsaUNBQWUsQ0FBQTtBQUNqQixDQUFDLEVBTFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFLekI7QUFFTSxNQUFNLHVCQUF1QixHQUFHLENBQUMsU0FBaUIsRUFBa0IsRUFBRSxDQUMzRSxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBRSxDQUFDO0FBRGpELFFBQUEsdUJBQXVCLDJCQUMwQjtBQThDdkQsTUFBTSxvQkFBb0IsR0FBRyxDQUNsQyxTQUFvQixFQUNnQyxFQUFFLENBQ3RELFNBQVMsQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLFVBQVU7SUFDNUMsU0FBUyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBSjlCLFFBQUEsb0JBQW9CLHdCQUlVO0FBT3BDLE1BQU0sdUJBQXVCLEdBQUcsQ0FDckMsWUFBMEIsRUFDRyxFQUFFLENBQy9CLFlBQVksS0FBSyxjQUFjLENBQUMsTUFBTTtJQUN0QyxZQUFZLEtBQUssY0FBYyxDQUFDLElBQUksQ0FBQztBQUoxQixRQUFBLHVCQUF1QiwyQkFJRyJ9