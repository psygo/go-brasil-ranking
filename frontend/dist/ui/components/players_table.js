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
        <span>Dan Kyu</span>
        <span class="centered">Data da Última Partida</span>
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

                <span class="countries">
                  ${(0, country_1.getAllFlags)(this.currentPlayer.countries)}
                </span>

                <span>${elo.num}</span>

                <span class="dan-kyu">${elo.danKyuLevel()}</span>
                
                ${this.lastGameLink(this.currentPlayer)}
          </route-link>
        </div>
      `;
        }
    };
    lastGameLink = (player) => {
        if (player.lastGame) {
            const lastGameDate = player.lastGame
                ? date_utils_1.DateUtils.formatDate(new Date(player.lastGame?.date))
                : "&mdash;";
            return `
        <route-link 
          class="centered" 
          href="${router_1.RouteEnum.gameRecords}/${player.lastGame.firebaseRef}">
            <span>${lastGameDate}</span>
        </route-link>
      `;
        }
        else
            return `<span class="centered">&mdash;</span>`;
    };
}
exports.default = PlayersTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyc190YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS9jb21wb25lbnRzL3BsYXllcnNfdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELGtEQUFtRDtBQUNuRCwyREFBbUM7QUFFbkMsdURBQW1EO0FBRW5ELE1BQXFCLFlBQWEsU0FBUSxXQUFXO0lBQ25ELE1BQU0sQ0FBVSxHQUFHLEdBQVcsZUFBZSxDQUFDO0lBRXRDLFVBQVUsR0FBRyxLQUFLLElBQXVCLEVBQUU7UUFDakQsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDaEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV4QyxJQUFJLENBQUMsU0FBUyxJQUFhOzs7Ozs7Ozs7OztLQVcxQixDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sZUFBZSxHQUFHLENBQUMsT0FBaUIsRUFBUSxFQUFFO1FBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7WUFFNUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU1QyxJQUFJLENBQUMsU0FBUyxJQUFhOzs7Z0JBR2pCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVzs7c0JBRXhCLGtCQUFTLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVzt3QkFDakQsQ0FBQzs7OzBCQUdDLGtCQUFTLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVzs0QkFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJOzs7O29CQUkvQixJQUFBLHFCQUFXLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7Ozt3QkFHckMsR0FBRyxDQUFDLEdBQUc7O3dDQUVTLEdBQUcsQ0FBQyxXQUFXLEVBQUU7O2tCQUV2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7OztPQUdoRCxDQUFDO1NBQ0g7SUFDSCxDQUFDLENBQUM7SUFJTSxZQUFZLEdBQUcsQ0FBQyxNQUFjLEVBQVUsRUFBRTtRQUNoRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDbkIsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVE7Z0JBQ2xDLENBQUMsQ0FBQyxzQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUssQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLENBQUMsU0FBUyxDQUFDO1lBRWQsT0FBZ0I7OztrQkFHSixrQkFBUyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVc7b0JBQ2xELFlBQVk7O09BRXpCLENBQUM7U0FDSDs7WUFBTSxPQUFnQix1Q0FBdUMsQ0FBQztJQUNqRSxDQUFDLENBQUM7O0FBbEZKLCtCQW1GQyJ9