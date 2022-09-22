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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5mcmEvc2V0dXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzQ0FBMEQ7QUFDMUQsd0NBQW1FO0FBRW5FLCtCQUEyQztBQUUzQyx1REFBbUQ7QUFFbkQsOENBQXNEO0FBRXRELHFFQUE2QztBQUM3Qyx1RUFBOEM7QUFDOUMsNkVBQW9EO0FBRXBELDJGQUFpRTtBQUNqRSw2RkFBbUU7QUFDbkUsbUZBQTBEO0FBRTFELGtGQUF3RDtBQUN4RCxvRkFBMEQ7QUFDMUQsb0ZBQTBEO0FBQzFELHNGQUE0RDtBQUM1RCxzRUFBNkM7QUFDN0MsMEVBQWlEO0FBQ2pELDRFQUFtRDtBQUNuRCx3RUFBK0M7QUFFL0Msd0VBQStDO0FBQy9DLGtGQUF3RDtBQUN4RCwwRkFBK0Q7QUFDL0QsNEZBQWlFO0FBRWpFLE1BQXFCLEtBQUs7SUFDaEIsTUFBTSxDQUFDLFFBQVEsQ0FBUTtJQUVkLE9BQU8sR0FBVyxJQUFBLGtCQUFTLEdBQUUsQ0FBQztJQUV2QyxHQUFHLEdBQXVCLElBQUksQ0FBQztJQUN2QyxJQUFJLEdBQWdCLElBQUksQ0FBQztJQUV6QjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxRQUFRLEdBQUcsR0FBUyxFQUFFO1FBQ3BCLElBQUk7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFBLG1CQUFhLEVBQUMsZ0NBQWMsQ0FBQyxDQUFDO1lBRXhELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUEsY0FBTyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU5QyxJQUFJLGNBQVEsS0FBSyxjQUFRLENBQUMs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