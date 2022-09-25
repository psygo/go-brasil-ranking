"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const elo_1 = __importDefault(require("../../models/elo"));
const utils_1 = require("../utils");
class PlayersTable extends HTMLElement {
    static tag = "players-table";
    getPlayers = async () => {
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.players}`);
        const json = await response.json();
        return json["data"]["players"];
    };
    async connectedCallback() {
        const players = await this.getPlayers();
        this.innerHTML += `
      <h2>
        <route-link href="${router_1.RouteEnum.players}">
          Jogadores
        </route-link>
      </h2>
      
      <div class="players-table-legend">
        <span>#</span>
        <span>Foto</span>
        <span class="align-left">Nome</span>
        <span>País</span>
        <span>Elo</span>
        <span>Dan Kyu</span>
        <span>Data da Última Partida</span>
        <span>Número de Partidas</span>
      </div>
    `;
        this.setPlayersTable(players);
    }
    setPlayersTable = (players) => {
        let i = 1;
        this.currentPlayer = players[0];
        for (const player of players) {
            player.elo === this.currentPlayer.elo ? null : i++;
            this.currentPlayer = player;
            const elo = new elo_1.default(this.currentPlayer.elo);
            this.innerHTML += `
        <route-link 
          class="player-card" 
          id="${this.currentPlayer.firebaseRef}"
          href="${router_1.RouteEnum.players}/${this.currentPlayer.firebaseRef}">
            <span>${i}</span>
            
            ${this.playerPicture}

            <route-link 
              href="${router_1.RouteEnum.players}/${this.currentPlayer.firebaseRef}">
                <span class="align-left">${this.currentPlayer.name}</span>
            </route-link>

            <div>
              ${utils_1.UiUtils.allFlags(this.currentPlayer.countries)}
            </div>

            <span>${elo.num}</span>

            <span>${elo.danKyuLevel()}</span>
            
            ${utils_1.UiUtils.lastGameLink(this.currentPlayer)}
            
            <span>${player.gamesTotal}</span>
        </route-link>
      `;
        }
    };
    get playerPicture() {
        return !this.currentPlayer.picture
            ? `<span class="centered" id="picture-placeholder">&mdash;</span>`
            : `<img id="picture" src="${this.currentPlayer.picture}"/>`;
    }
}
exports.default = PlayersTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyc190YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS9jb21wb25lbnRzL3BsYXllcnNfdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELDJEQUFtQztBQUVuQyxvQ0FBbUM7QUFFbkMsTUFBcUIsWUFBYSxTQUFRLFdBQVc7SUFDbkQsTUFBTSxDQUFVLEdBQUcsR0FBVyxlQUFlLENBQUM7SUFJdEMsVUFBVSxHQUFHLEtBQUssSUFBdUIsRUFBRTtRQUNqRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLGlCQUFDLENBQUMsTUFBTSxHQUFHLGtCQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRSxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUM7SUFFRixLQUFLLENBQUMsaUJBQWlCO1FBQ3JCLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXhDLElBQUksQ0FBQyxTQUFTLElBQWE7OzRCQUVILGtCQUFTLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O0tBZXhDLENBQUM7UUFFRixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTyxlQUFlLEdBQUcsQ0FBQyxPQUFpQixFQUFRLEVBQUU7UUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDNUIsTUFBTSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVuRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztZQUU1QixNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxTQUFTLElBQWE7OztnQkFHakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXO2tCQUM1QixrQkFBUyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7b0JBQ2pELENBQUM7O2NBRVAsSUFBSSxDQUFDLGFBQWE7OztzQkFHVixrQkFBUyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7MkNBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTs7OztnQkFJbEQsZUFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQzs7O29CQUcxQyxHQUFHLENBQUMsR0FBRzs7b0JBRVAsR0FBRyxDQUFDLFdBQVcsRUFBRTs7Y0FFdkIsZUFBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDOztvQkFFbEMsTUFBTSxDQUFDLFVBQVU7O09BRTlCLENBQUM7U0FDSDtJQUNILENBQUMsQ0FBQztJQUVGLElBQVksYUFBYTtRQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPO1lBQ2hDLENBQUMsQ0FBVSxnRUFBZ0U7WUFDM0UsQ0FBQyxDQUFVLDBCQUEwQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBSyxDQUFDO0lBQ3pFLENBQUM7O0FBaEZILCtCQWlGQyJ9