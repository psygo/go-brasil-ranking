"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const elo_1 = __importDefault(require("../../models/elo"));
const game_records_table_1 = __importDefault(require("../components/game_records_table"));
const utils_1 = require("../utils");
class PlayerView extends HTMLElement {
    playerRef;
    static tag = "player-view";
    constructor(playerRef) {
        super();
        this.playerRef = playerRef;
    }
    getPlayers = async () => {
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.players}/${this.playerRef}`);
        const json = await response.json();
        return json["data"]["player"];
    };
    async connectedCallback() {
        const player = await this.getPlayers();
        document.title = `Jogador | ${player.name}`;
        this.setPlayersPage(player);
        this.appendChild(new game_records_table_1.default("max", this.playerRef));
    }
    setPlayersPage = (player) => {
        const countryFlags = utils_1.UiUtils.allFlags(player.countries);
        const elo = new elo_1.default(player.elo);
        this.innerHTML += `
      <h1>${player.name} ${countryFlags}</h1>

      <div id="player-metadata">
        <h3>Elo: ${elo.num} | ${elo.danKyuLevel(true)}</h3>
        <img src="${player.picture}"/>
      </div>
    `;
    };
}
exports.default = PlayerView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvdmlld3MvcGxheWVyLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELDJEQUFtQztBQUluQywwRkFBZ0U7QUFDaEUsb0NBQW1DO0FBRW5DLE1BQXFCLFVBQVcsU0FBUSxXQUFXO0lBR3JCO0lBRjVCLE1BQU0sQ0FBVSxHQUFHLEdBQVcsYUFBYSxDQUFDO0lBRTVDLFlBQTRCLFNBQXNCO1FBQ2hELEtBQUssRUFBRSxDQUFDO1FBRGtCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFFbEQsQ0FBQztJQUVPLFVBQVUsR0FBRyxLQUFLLElBQXFCLEVBQUU7UUFDL0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLEdBQUcsaUJBQUMsQ0FBQyxNQUFNLEdBQUcsa0JBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNwRCxDQUFDO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBRUYsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV2QyxRQUFRLENBQUMsS0FBSyxHQUFHLGFBQWEsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTVDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLDRCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sY0FBYyxHQUFHLENBQUMsTUFBYyxFQUFRLEVBQUU7UUFDaEQsTUFBTSxZQUFZLEdBQUcsZUFBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxTQUFTLElBQWE7WUFDbkIsTUFBTSxDQUFDLElBQUksSUFBSSxZQUFZOzs7bUJBR3BCLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ2pDLE1BQU0sQ0FBQyxPQUFPOztLQUU3QixDQUFDO0lBQ0osQ0FBQyxDQUFDOztBQXJDSiw2QkFzQ0MifQ==