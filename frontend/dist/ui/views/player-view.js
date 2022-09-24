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
    getPlayer = async () => {
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.players}/${this.playerRef}`);
        const json = await response.json();
        return json["data"]["player"];
    };
    async connectedCallback() {
        this.player = await this.getPlayer();
        document.title = `Jogador | ${this.player.name}`;
        this.setPlayersPage();
        this.appendChild(new game_records_table_1.default("max", this.playerRef));
    }
    setPlayersPage = () => {
        const countryFlags = utils_1.UiUtils.allFlags(this.player.countries);
        this.innerHTML += `
      <div id="name">
        <img src="${this.player.picture}"/>
        <h1>${this.player.name} ${countryFlags}</h1>
      </div>
    `;
        this.setPlayerCard();
    };
    setPlayerCard = () => {
        const elo = new elo_1.default(this.player.elo);
        this.innerHTML += `
      <div id="player-personal-card">
        <div id="player-personal-card-legend">
          <span>Elo</span>
          <span>Dan Kyu</span>
          <span>Número de Partidas</span>
          <span>Data da Última Partida</span>
        </div>

        <div id="player-personal-card-content">
          <span>${elo.num}</span>
          <span>${elo.danKyuLevel(true)}</span>
          <span>${this.player.gamesTotal}</span>
          <span>${utils_1.UiUtils.lastGameLink(this.player)}</span>
        </div>
      </div>
    `;
    };
}
exports.default = PlayerView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvdmlld3MvcGxheWVyLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELDJEQUFtQztBQUluQywwRkFBZ0U7QUFDaEUsb0NBQW1DO0FBRW5DLE1BQXFCLFVBQVcsU0FBUSxXQUFXO0lBR3JCO0lBRjVCLE1BQU0sQ0FBVSxHQUFHLEdBQVcsYUFBYSxDQUFDO0lBRTVDLFlBQTRCLFNBQXNCO1FBQ2hELEtBQUssRUFBRSxDQUFDO1FBRGtCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFFbEQsQ0FBQztJQUVPLFNBQVMsR0FBRyxLQUFLLElBQXFCLEVBQUU7UUFDOUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLEdBQUcsaUJBQUMsQ0FBQyxNQUFNLEdBQUcsa0JBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNwRCxDQUFDO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBSUYsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXJDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsYUFBYSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWpELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksNEJBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxjQUFjLEdBQUcsR0FBUyxFQUFFO1FBQ2xDLE1BQU0sWUFBWSxHQUFHLGVBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsU0FBUyxJQUFhOztvQkFFWCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Y0FDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksWUFBWTs7S0FFekMsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUM7SUFFTSxhQUFhLEdBQUcsR0FBUyxFQUFFO1FBQ2pDLE1BQU0sR0FBRyxHQUFHLElBQUksYUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLFNBQVMsSUFBYTs7Ozs7Ozs7OztrQkFVYixHQUFHLENBQUMsR0FBRztrQkFDUCxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztrQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO2tCQUN0QixlQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7OztLQUc5QyxDQUFDO0lBQ0osQ0FBQyxDQUFDOztBQTVESiw2QkE2REMifQ==