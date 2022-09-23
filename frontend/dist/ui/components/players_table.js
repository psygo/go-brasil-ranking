"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const elo_1 = __importDefault(require("../../models/elo"));
const date_utils_1 = require("../../infra/date_utils");
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
      <h2>Jogadores</h2>
      
      <div class="players-table-legend">
        <span>#</span>
        <span>Foto</span>
        <span>Nome</span>
        <span>País</span>
        <span>Elo</span>
        <span class="centered">Dan Kyu</span>
        <span class="centered">Data da Última Partida</span>
        <span class="centered">Total de Partidas</span>
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
        <div 
          class="player-card" 
          id="${this.currentPlayer.firebaseRef}">
            <route-link 
              href="${router_1.RouteEnum.players}/${this.currentPlayer.firebaseRef}">
                <span>${i}</span>
                
                ${this.playerPicture}

                <route-link 
                  href="${router_1.RouteEnum.players}/${this.currentPlayer.firebaseRef}">
                    <span>${this.currentPlayer.name}</span>
                </route-link>

                <div class="countries">
                  ${utils_1.UiUtils.allFlags(this.currentPlayer.countries)}
                </div>

                <span>${elo.num}</span>

                <span class="dan-kyu">${elo.danKyuLevel()}</span>
                
                ${this.lastGameLink}
                
                <span class="centered">${player.gamesTotal}</span>
          </route-link>
        </div>
      `;
        }
    };
    get playerPicture() {
        return !this.currentPlayer.picture
            ? `<span>&mdash;</span>`
            : `<img src="${this.currentPlayer.picture}"/>`;
    }
    get lastGameLink() {
        if (this.currentPlayer.lastGame) {
            const lastGameDate = this.currentPlayer.lastGame
                ? date_utils_1.DateUtils.formatDate(new Date(this.currentPlayer.lastGame?.date))
                : "&mdash;";
            return `
        <route-link 
          class="centered" 
          href="${router_1.RouteEnum.gameRecords}/${this.currentPlayer.lastGame.firebaseRef}">
            <span>${lastGameDate}</span>
        </route-link>
      `;
        }
        else
            return `<span class="centered">&mdash;</span>`;
    }
}
exports.default = PlayersTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyc190YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS9jb21wb25lbnRzL3BsYXllcnNfdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELDJEQUFtQztBQUVuQyx1REFBbUQ7QUFDbkQsb0NBQW1DO0FBRW5DLE1BQXFCLFlBQWEsU0FBUSxXQUFXO0lBQ25ELE1BQU0sQ0FBVSxHQUFHLEdBQVcsZUFBZSxDQUFDO0lBSXRDLFVBQVUsR0FBRyxLQUFLLElBQXVCLEVBQUU7UUFDakQsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDaEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV4QyxJQUFJLENBQUMsU0FBUyxJQUFhOzs7Ozs7Ozs7Ozs7O0tBYTFCLENBQUM7UUFFRixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTyxlQUFlLEdBQUcsQ0FBQyxPQUFpQixFQUFRLEVBQUU7UUFDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDNUIsTUFBTSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVuRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztZQUU1QixNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxTQUFTLElBQWE7OztnQkFHakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXOztzQkFFeEIsa0JBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXO3dCQUNqRCxDQUFDOztrQkFFUCxJQUFJLENBQUMsYUFBYTs7OzBCQUdWLGtCQUFTLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVzs0QkFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJOzs7O29CQUkvQixlQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDOzs7d0JBRzFDLEdBQUcsQ0FBQyxHQUFHOzt3Q0FFUyxHQUFHLENBQUMsV0FBVyxFQUFFOztrQkFFdkMsSUFBSSxDQUFDLFlBQVk7O3lDQUVNLE1BQU0sQ0FBQyxVQUFVOzs7T0FHbkQsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxDQUFDO0lBRUYsSUFBWSxhQUFhO1FBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87WUFDaEMsQ0FBQyxDQUFVLHNCQUFzQjtZQUNqQyxDQUFDLENBQVUsYUFBYSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBSyxDQUFDO0lBQzVELENBQUM7SUFFRCxJQUFZLFlBQVk7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtZQUMvQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7Z0JBQzlDLENBQUMsQ0FBQyxzQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFLLENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUVkLE9BQWdCOzs7a0JBR0osa0JBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVztvQkFDOUQsWUFBWTs7T0FFekIsQ0FBQztTQUNIOztZQUFNLE9BQWdCLHVDQUF1QyxDQUFDO0lBQ2pFLENBQUM7O0FBOUZILCtCQStGQyJ9