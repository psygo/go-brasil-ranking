"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTournamentOrLeagueRef = exports.isTournamentOrLeague = exports.isLeague = exports.isTournament = exports.gameEventTypeFromString = exports.GameEventTypes = void 0;
var GameEventTypes;
(function (GameEventTypes) {
    GameEventTypes["online"] = "Online";
    GameEventTypes["live"] = "Ao Vivo";
    GameEventTypes["tournament"] = "Torneio";
    GameEventTypes["league"] = "Liga";
})(GameEventTypes = exports.GameEventTypes || (exports.GameEventTypes = {}));
const gameEventTypeFromString = (getString) => Object.values(GameEventTypes).find((c) => c === getString);
exports.gameEventTypeFromString = gameEventTypeFromString;
const isTournament = (gameEvent) => gameEvent.type === GameEventTypes.tournament;
exports.isTournament = isTournament;
const isLeague = (gameEvent) => gameEvent.type === GameEventTypes.league;
exports.isLeague = isLeague;
const isTournamentOrLeague = (gameEvent) => (0, exports.isTournament)(gameEvent) || (0, exports.isLeague)(gameEvent);
exports.isTournamentOrLeague = isTournamentOrLeague;
const isTournamentOrLeagueRef = (gameEventRef) => gameEventRef !== GameEventTypes.online &&
    gameEventRef !== GameEventTypes.live;
exports.isTournamentOrLeagueRef = isTournamentOrLeagueRef;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZV9ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvZ2FtZV9ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxJQUFZLGNBS1g7QUFMRCxXQUFZLGNBQWM7SUFDeEIsbUNBQWlCLENBQUE7SUFDakIsa0NBQWdCLENBQUE7SUFDaEIsd0NBQXNCLENBQUE7SUFDdEIsaUNBQWUsQ0FBQTtBQUNqQixDQUFDLEVBTFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFLekI7QUFFTSxNQUFNLHVCQUF1QixHQUFHLENBQUMsU0FBaUIsRUFBa0IsRUFBRSxDQUMzRSxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBRSxDQUFDO0FBRGpELFFBQUEsdUJBQXVCLDJCQUMwQjtBQStDdkQsTUFBTSxZQUFZLEdBQUcsQ0FDMUIsU0FBb0IsRUFDYyxFQUFFLENBQ3BDLFNBQVMsQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLFVBQVUsQ0FBQztBQUhsQyxRQUFBLFlBQVksZ0JBR3NCO0FBRXhDLE1BQU0sUUFBUSxHQUFHLENBQUMsU0FBb0IsRUFBZ0MsRUFBRSxDQUM3RSxTQUFTLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFEOUIsUUFBQSxRQUFRLFlBQ3NCO0FBRXBDLE1BQU0sb0JBQW9CLEdBQUcsQ0FDbEMsU0FBb0IsRUFDZ0MsRUFBRSxDQUN0RCxJQUFBLG9CQUFZLEVBQUMsU0FBUyxDQUFDLElBQUksSUFBQSxnQkFBUSxFQUFDLFNBQVMsQ0FBQyxDQUFDO0FBSHBDLFFBQUEsb0JBQW9CLHdCQUdnQjtBQU8xQyxNQUFNLHVCQUF1QixHQUFHLENBQ3JDLFlBQTBCLEVBQ0csRUFBRSxDQUMvQixZQUFZLEtBQUssY0FBYyxDQUFDLE1BQU07SUFDdEMsWUFBWSxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUM7QUFKMUIsUUFBQSx1QkFBdUIsMkJBSUcifQ==