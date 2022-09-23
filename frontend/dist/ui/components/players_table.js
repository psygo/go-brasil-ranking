"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const country_1 = require("../../models/country");
const elo_1 = __importDefault(require("../../models/elo"));
const date_utils_1 = require("../../infra/date_utils");
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

                <route-link 
                  href="${router_1.RouteEnum.players}/${this.currentPlayer.firebaseRef}">
                    <span>${this.currentPlayer.name}</span>
                </route-link>

                <div class="countries">
                  ${this.allFlags}
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
    get allFlags() {
        return this.currentPlayer.countries
            .map((c) => `
          <span title="${c.name}">
            ${(0, country_1.getFlag)(c.name)}
          </span>
        `)
            .reduce((pflag, cflag) => pflag + cflag);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyc190YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS9jb21wb25lbnRzL3BsYXllcnNfdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELGtEQUErQztBQUMvQywyREFBbUM7QUFFbkMsdURBQW1EO0FBRW5ELE1BQXFCLFlBQWEsU0FBUSxXQUFXO0lBQ25ELE1BQU0sQ0FBVSxHQUFHLEdBQVcsZUFBZSxDQUFDO0lBSXRDLFVBQVUsR0FBRyxLQUFLLElBQXVCLEVBQUU7UUFDakQsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDaEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV4QyxJQUFJLENBQUMsU0FBUyxJQUFhOzs7Ozs7Ozs7Ozs7S0FZMUIsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLGVBQWUsR0FBRyxDQUFDLE9BQWlCLEVBQVEsRUFBRTtRQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUM1QixNQUFNLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBRW5ELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1lBRTVCLE1BQU0sR0FBRyxHQUFHLElBQUksYUFBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFNUMsSUFBSSxDQUFDLFNBQVMsSUFBYTs7O2dCQUdqQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7O3NCQUV4QixrQkFBUyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7d0JBQ2pELENBQUM7OzswQkFHQyxrQkFBUyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7NEJBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTs7OztvQkFJL0IsSUFBSSxDQUFDLFFBQVE7Ozt3QkFHVCxHQUFHLENBQUMsR0FBRzs7d0NBRVMsR0FBRyxDQUFDLFdBQVcsRUFBRTs7a0JBRXZDLElBQUksQ0FBQyxZQUFZOzt5Q0FFTSxNQUFNLENBQUMsVUFBVTs7O09BR25ELENBQUM7U0FDSDtJQUNILENBQUMsQ0FBQztJQUVGLElBQVksUUFBUTtRQUNsQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUzthQUNoQyxHQUFHLENBQ0YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFVO3lCQUNDLENBQUMsQ0FBQyxJQUFJO2NBQ2pCLElBQUEsaUJBQU8sRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztTQUVwQixDQUNGO2FBQ0EsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFZLFlBQVk7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtZQUMvQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7Z0JBQzlDLENBQUMsQ0FBQyxzQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFLLENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUVkLE9BQWdCOzs7a0JBR0osa0JBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVztvQkFDOUQsWUFBWTs7T0FFekIsQ0FBQztTQUNIOztZQUFNLE9BQWdCLHVDQUF1QyxDQUFDO0lBQ2pFLENBQUM7O0FBakdILCtCQWtHQyJ9