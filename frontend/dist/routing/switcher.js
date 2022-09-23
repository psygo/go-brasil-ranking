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
const unknown_view_1 = __importDefault(require("../ui/views/unknown-view"));
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
        this.mainElement.replaceChildren(new unknown_view_1.default());
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGluZy9zd2l0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFvRDtBQUNwRCw4Q0FBZ0Q7QUFFaEQsd0VBQStDO0FBQy9DLG9GQUEwRDtBQUMxRCxzRkFBNEQ7QUFDNUQsa0ZBQXdEO0FBQ3hELG9GQUEwRDtBQUMxRCxzRUFBNkM7QUFDN0MsMEVBQWlEO0FBQ2pELDRFQUFtRDtBQUVuRCx3RUFBK0M7QUFDL0Msa0ZBQXdEO0FBQ3hELDBGQUErRDtBQUMvRCw0RkFBaUU7QUFDakUsNEVBQW1EO0FBRW5ELE1BQXFCLFFBQVE7SUFHQztJQUZULE1BQU0sR0FBVyxpQkFBQyxDQUFDLE1BQU0sQ0FBQztJQUU3QyxZQUE0QixlQUFzQixrQkFBUyxDQUFDLElBQUk7UUFBcEMsaUJBQVksR0FBWixZQUFZLENBQXdCO0lBQUcsQ0FBQztJQUVwRSxJQUFjLFdBQVc7UUFDdkIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsTUFBTSxHQUFHLEdBQVMsRUFBRTtRQUNsQixRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEIsS0FBSyxrQkFBUyxDQUFDLElBQUk7Z0JBQ2pCLElBQUksWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzVCLE1BQU07WUFDUixLQUFLLGtCQUFTLENBQUMsT0FBTztnQkFDcEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3BELE1BQU07WUFDUixLQUFLLGtCQUFTLENBQUMsV0FBVztnQkFDeEIsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDeEQsTUFBTTtZQUNSLEtBQUssa0JBQVMsQ0FBQyxVQUFVO2dC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