"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./router");
const globals_1 = require("../infra/globals");
const about_view_1 = __importDefault(require("../ui/views/about-view"));
const game_record_view_1 = __importDefault(require("../ui/views/game-record-view"));
const game_records_view_1 = __importDefault(require("../ui/views/game-records-view"));
const game_event_view_1 = __importDefault(require("../ui/views/game-event-view"));
const game_events_view_1 = __importDefault(require("../ui/views/game-events-view"));
const home_view_1 = __importDefault(require("../ui/views/home-view"));
const player_view_1 = __importDefault(require("../ui/views/player-view"));
const players_view_1 = __importDefault(require("../ui/views/players-view"));
const admin_view_1 = __importDefault(require("../ui/views/admin-view"));
const new_player_view_1 = __importDefault(require("../ui/views/new-player-view"));
const new_game_event_view_1 = __importDefault(require("../ui/views/new-game-event-view"));
const new_game_record_view_1 = __importDefault(require("../ui/views/new-game-record-view"));
class Switcher {
    currentRoute;
    router = globals_1.Globals.router;
    constructor(currentRoute = router_1.RouteEnum.home) {
        this.currentRoute = currentRoute;
    }
    get mainElement() {
        return document.body.querySelector("main");
    }
    switch = () => {
        switch (this.prefixRoute) {
            case router_1.RouteEnum.home:
                new HomeSwitcher().switch();
                break;
            case router_1.RouteEnum.players:
                new PlayersSwitcher(this.splitPrefixRoute).switch();
                break;
            case router_1.RouteEnum.gameRecords:
                new GameRecordsSwitcher(this.splitPrefixRoute).switch();
                break;
            case router_1.RouteEnum.gameEvents:
                new GameEventsSwitcher(this.splitPrefixRoute).switch();
                break;
            case router_1.RouteEnum.about:
                new AboutSwitcher().switch();
                break;
            case router_1.RouteEnum.admin:
                new AdminSwitcher().switch();
                break;
            default:
                new UnknownSwitcher().switch();
        }
    };
    get prefixRoute() {
        return "/" + this.currentRoute.split("/")[1];
    }
    get splitPrefixRoute() {
        return this.currentRoute.split("/")[2] || "";
    }
    get isNewRoute() {
        return this.currentRoute === "novo";
    }
}
exports.default = Switcher;
class HomeSwitcher extends Switcher {
    switch = () => {
        this.mainElement.replaceChildren(new home_view_1.default());
    };
}
class PlayersSwitcher extends Switcher {
    switch = () => {
        if (!this.currentRoute)
            this.mainElement.replaceChildren(new players_view_1.default());
        else if (this.isNewRoute)
            this.mainElement.replaceChildren(new new_player_view_1.default());
        else
            this.mainElement.replaceChildren(new player_view_1.default(this.currentRoute));
    };
}
class GameRecordsSwitcher extends Switcher {
    switch = () => {
        if (!this.currentRoute)
            this.mainElement.replaceChildren(new game_records_view_1.default());
        else if (this.isNewRoute)
            this.mainElement.replaceChildren(new new_game_record_view_1.default());
        else
            this.mainElement.replaceChildren(new game_record_view_1.default(this.currentRoute));
    };
}
class GameEventsSwitcher extends Switcher {
    switch = () => {
        if (!this.currentRoute)
            this.mainElement.replaceChildren(new game_events_view_1.default());
        else if (this.isNewRoute)
            this.mainElement.replaceChildren(new new_game_event_view_1.default());
        else
            this.mainElement.replaceChildren(new game_event_view_1.default(this.currentRoute));
    };
}
class AboutSwitcher extends Switcher {
    switch = () => {
        this.mainElement.replaceChildren(new about_view_1.default());
    };
}
class AdminSwitcher extends Switcher {
    switch = () => {
        this.mainElement.replaceChildren(new admin_view_1.default());
    };
}
class UnknownSwitcher extends Switcher {
    switch = () => {
        this.mainElement.innerHTML = "<p>desconhecido</p>";
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGluZy9zd2l0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFvRDtBQUNwRCw4Q0FBZ0Q7QUFFaEQsd0VBQStDO0FBQy9DLG9GQUEwRDtBQUMxRCxzRkFBNEQ7QUFDNUQsa0ZBQXdEO0FBQ3hELG9GQUEwRDtBQUMxRCxzRUFBNkM7QUFDN0MsMEVBQWlEO0FBQ2pELDRFQUFtRDtBQUVuRCx3RUFBK0M7QUFDL0Msa0ZBQXdEO0FBQ3hELDBGQUErRDtBQUMvRCw0RkFBaUU7QUFFakUsTUFBcUIsUUFBUTtJQUdDO0lBRlQsTUFBTSxHQUFXLGlCQUFDLENBQUMsTUFBTSxDQUFDO0lBRTdDLFlBQTRCLGVBQXNCLGtCQUFTLENBQUMsSUFBSTtRQUFwQyxpQkFBWSxHQUFaLFlBQVksQ0FBd0I7SUFBRyxDQUFDO0lBRXBFLElBQWMsV0FBVztRQUN2QixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBRSxDQUFDO0lBQzlDLENBQUM7SUFFRCxNQUFNLEdBQUcsR0FBUyxFQUFFO1FBQ2xCLFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QixLQUFLLGtCQUFTLENBQUMsSUFBSTtnQkFDakIsSUFBSSxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDNUIsTUFBTTtZQUNSLEtBQUssa0JBQVMsQ0FBQyxPQUFPO2dCQUNwQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEQsTUFBTTtZQUNSLEtBQUssa0JBQVMsQ0FBQyxXQUFXO2dCQUN4QixJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN4RCxNQUFNO1lBQ1IsS0FBSyxrQkFBUyxDQUFDLFVBQVU7Z0JBQ3ZCLElBQUksa0JB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