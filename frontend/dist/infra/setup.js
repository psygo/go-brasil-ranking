"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const env_1 = require("./env");
const firebase_config_1 = require("./firebase_config");
const router_1 = require("../routing/router");
const navbar_1 = __importDefault(require("../ui/components/navbar"));
const foot_er_1 = __importDefault(require("../ui/components/foot-er"));
const route_link_1 = __importDefault(require("../ui/components/route-link"));
const game_events_table_1 = __importDefault(require("../ui/components/game_events_table"));
const game_records_table_1 = __importDefault(require("../ui/components/game_records_table"));
const players_table_1 = __importDefault(require("../ui/components/players_table"));
const game_event_view_1 = __importDefault(require("../ui/views/game-event-view"));
const game_events_view_1 = __importDefault(require("../ui/views/game-events-view"));
const game_record_view_1 = __importDefault(require("../ui/views/game-record-view"));
const game_records_view_1 = __importDefault(require("../ui/views/game-records-view"));
const home_view_1 = __importDefault(require("../ui/views/home-view"));
const player_view_1 = __importDefault(require("../ui/views/player-view"));
const players_view_1 = __importDefault(require("../ui/views/players-view"));
const about_view_1 = __importDefault(require("../ui/views/about-view"));
const unknown_view_1 = __importDefault(require("../ui/views/unknown-view"));
const admin_view_1 = __importDefault(require("../ui/views/admin-view"));
const new_player_view_1 = __importDefault(require("../ui/views/new-player-view"));
const new_game_event_view_1 = __importDefault(require("../ui/views/new-game-event-view"));
const new_game_record_view_1 = __importDefault(require("../ui/views/new-game-record-view"));
class Setup {
    static instance;
    _router = (0, router_1.getRouter)();
    app = null;
    auth = null;
    constructor() {
        this.define();
    }
    get router() {
        return this._router;
    }
    initAuth = () => {
        try {
            if (!this.app)
                this.app = (0, app_1.initializeApp)(firebase_config_1.firebaseConfig);
            if (!this.auth)
                this.auth = (0, auth_1.getAuth)(this.app);
            if (env_1.envState === env_1.EnvState.dev)
                (0, auth_1.connectAuthEmulator)(this.auth, "http://localhost:9094", {
                    disableWarnings: true,
                });
        }
        catch (error) {
            const e = error;
            console.log(`Name: ${e.name}`);
            console.log(`Message: ${e.message}`);
            console.log(`Cause: ${e.cause}`);
            console.log(`Stack: ${e.stack}`);
            console.log(`Full Error: ${e}`);
        }
    };
    define = () => {
        customElements.define(navbar_1.default.tag, navbar_1.default);
        customElements.define(foot_er_1.default.tag, foot_er_1.default);
        customElements.define(route_link_1.default.tag, route_link_1.default);
        customElements.define(game_records_table_1.default.tag, game_records_table_1.default);
        customElements.define(game_events_table_1.default.tag, game_events_table_1.default);
        customElements.define(players_table_1.default.tag, players_table_1.default);
        customElements.define(about_view_1.default.tag, about_view_1.default);
        customElements.define(game_record_view_1.default.tag, game_record_view_1.default);
        customElements.define(game_records_view_1.default.tag, game_records_view_1.default);
        customElements.define(game_event_view_1.default.tag, game_event_view_1.default);
        customElements.define(game_events_view_1.default.tag, game_events_view_1.default);
        customElements.define(home_view_1.default.tag, home_view_1.default);
        customElements.define(player_view_1.default.tag, player_view_1.default);
        customElements.define(players_view_1.default.tag, players_view_1.default);
        customElements.define(unknown_view_1.default.tag, unknown_view_1.default);
        customElements.define(admin_view_1.default.tag, admin_view_1.default);
        customElements.define(new_player_view_1.default.tag, new_player_view_1.default);
        customElements.define(new_game_event_view_1.default.tag, new_game_event_view_1.default);
        customElements.define(new_game_record_view_1.default.tag, new_game_record_view_1.default);
    };
    static getInstance = () => {
        if (!Setup.instance)
            Setup.instance = new Setup();
        return Setup.instance;
    };
}
exports.default = Setup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5mcmEvc2V0dXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzQ0FBMEQ7QUFDMUQsd0NBQW1FO0FBRW5FLCtCQUEyQztBQUUzQyx1REFBbUQ7QUFFbkQsOENBQXNEO0FBRXRELHFFQUE2QztBQUM3Qyx1RUFBOEM7QUFDOUMsNkVBQW9EO0FBRXBELDJGQUFpRTtBQUNqRSw2RkFBbUU7QUFDbkUsbUZBQTBEO0FBRTFELGtGQUF3RDtBQUN4RCxvRkFBMEQ7QUFDMUQsb0ZBQTBEO0FBQzFELHNGQUE0RDtBQUM1RCxzRUFBNkM7QUFDN0MsMEVBQWlEO0FBQ2pELDRFQUFtRDtBQUNuRCx3RUFBK0M7QUFDL0MsNEVBQW1EO0FBRW5ELHdFQUErQztBQUMvQyxrRkFBd0Q7QUFDeEQsMEZBQStEO0FBQy9ELDRGQUFpRTtBQUVqRSxNQUFxQixLQUFLO0lBQ2hCLE1BQU0sQ0FBQyxRQUFRLENBQVE7SUFFZCxPQUFPLEdBQVcsSUFBQSxrQkFBUyxHQUFFLENBQUM7SUFFdkMsR0FBRyxHQUF1QixJQUFJLENBQUM7SUFDdkMsSUFBSSxHQUFnQixJQUFJLENBQUM7SUFFekI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsUUFBUSxHQUFHLEdBQVMsRUFBRTtRQUNwQixJQUFJO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBQSxtQkFBYSxFQUFDLGdDQUFjLENBQUMsQ0FBQztZQUV4RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFBLGNBQU8sRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFOUMsSUFBSSxjQUFRLEtBQUssY0FBUSxDQUFDLEdBQUc7Z0JBQzNCLElBQUEsMEJBQW1CLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBRSx1QkFBdUIsRUFBRTtvQkFDdEQsZUFBZSxFQUFFLElBQUk7aUJBQ3RCLENBQUMsQ0FBQztTQUNOO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLENBQUMsR0FBRyxLQUFjLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQyxDQUFDO0lBRU0sTUFBTSxHQUFHLEdBQVMsRUFBRTtRQUMxQixjQUFjLENBQUMsTUFBTSxDQUFDLGdCQUFNLENBQUMsR0FBRyxFQUFFLGdCQUFNLENBQUMsQ0FBQztRQUMxQyxjQUFjLENBQUMsTUFBTSxDQUFDLGlCQUFNLENBQUMsR0FBRyxFQUFFLGlCQUFNLENBQUMsQ0FBQztRQUMxQyxjQUFjLENBQUMsTUFBTSxDQUFDLG9CQUFTLENBQUMsR0FBRyxFQUFFLG9CQUFTLENBQUMsQ0FBQztRQUVoRCxjQUFjLENBQUMsTUFBTSxDQUFDLDRCQUFnQixDQUFDLEdBQUcsRUFBRSw0QkFBZ0IsQ0FBQyxDQUFDO1FBQzlELGNBQWMsQ0FBQyxNQUFNLENBQUMsMkJBQWUsQ0FBQyxHQUFHLEVBQUUsMkJBQWUsQ0FBQyxDQUFDO1FBQzVELGNBQWMsQ0FBQyxNQUFNLENBQUMsdUJBQVksQ0FBQyxHQUFHLEVBQUUsdUJBQVksQ0FBQyxDQUFDO1FBRXRELGNBQWMsQ0FBQyxNQUFNLENBQUMsb0JBQVMsQ0FBQyxHQUFHLEVBQUUsb0JBQVMsQ0FBQyxDQUFDO1FBQ2hELGNBQWMsQ0FBQyxNQUFNLENBQUMsMEJBQWMsQ0FBQyxHQUFHLEVBQUUsMEJBQWMsQ0FBQyxDQUFDO1FBQzFELGNBQWMsQ0FBQyxNQUFNLENBQUMsMkJBQWUsQ0FBQyxHQUFHLEVBQUUsMkJBQWUsQ0FBQyxDQUFDO1FBQzVELGNBQWMsQ0FBQyxNQUFNLENBQUMseUJBQWEsQ0FBQyxHQUFHLEVBQUUseUJBQWEsQ0FBQyxDQUFDO1FBQ3hELGNBQWMsQ0FBQyxNQUFNLENBQUMsMEJBQWMsQ0FBQyxHQUFHLEVBQUUsMEJBQWMsQ0FBQyxDQUFDO1FBQzFELGNBQWMsQ0FBQyxNQUFNLENBQUMsbUJBQVEsQ0FBQyxHQUFHLEVBQUUsbUJBQVEsQ0FBQyxDQUFDO1FBQzlDLGNBQWMsQ0FBQyxNQUFNLENBQUMscUJBQVUsQ0FBQyxHQUFHLEVBQUUscUJBQVUsQ0FBQyxDQUFDO1FBQ2xELGNBQWMsQ0FBQyxNQUFNLENBQUMsc0JBQVcsQ0FBQyxHQUFHLEVBQUUsc0JBQVcsQ0FBQyxDQUFDO1FBQ3BELGNBQWMsQ0FBQyxNQUFNLENBQUMsc0JBQVcsQ0FBQyxHQUFHLEVBQUUsc0JBQVcsQ0FBQyxDQUFDO1FBRXBELGNBQWMsQ0FBQyxNQUFNLENBQUMsb0JBQVMsQ0FBQyxHQUFHLEVBQUUsb0JBQVMsQ0FBQyxDQUFDO1FBQ2hELGNBQWMsQ0FBQyxNQUFNLENBQUMseUJBQWEsQ0FBQyxHQUFHLEVBQUUseUJBQWEsQ0FBQyxDQUFDO1FBQ3hELGNBQWMsQ0FBQyxNQUFNLENBQUMsNkJBQWdCLENBQUMsR0FBRyxFQUFFLDZCQUFnQixDQUFDLENBQUM7UUFDOUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyw4QkFBaUIsQ0FBQyxHQUFHLEVBQUUsOEJBQWlCLENBQUMsQ0FBQztJQUNsRSxDQUFDLENBQUM7SUFFRixNQUFNLENBQUMsV0FBVyxHQUFHLEdBQVUsRUFBRTtRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFBRSxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFFbEQsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ3hCLENBQUMsQ0FBQzs7QUFqRUosd0JBa0VDIn0=