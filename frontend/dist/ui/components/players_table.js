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
        <div 
          class="player-card" 
          id="${this.currentPlayer.firebaseRef}">
            <route-link 
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
                
                ${this.lastGameLink}
                
                <span>${player.gamesTotal}</span>
          </route-link>
        </div>
      `;
        }
    };
    get playerPicture() {
        return !this.currentPlayer.picture
            ? `<span class="centered" id="picture-placeholder">&mdash;</span>`
            : `<img id="picture" src="${this.currentPlayer.picture}"/>`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyc190YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS9jb21wb25lbnRzL3BsYXllcnNfdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELDJEQUFtQztBQUVuQyx1REFBbUQ7QUFDbkQsb0NBQW1DO0FBRW5DLE1BQXFCLFlBQWEsU0FBUSxXQUFXO0lBQ25ELE1BQU0sQ0FBVSxHQUFHLEdBQVcsZUFBZSxDQUFDO0lBSXRDLFVBQVUsR0FBRyxLQUFLLElBQXVCLEVBQUU7UUFDakQsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDaEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV4QyxJQUFJLENBQUMsU0FBUyxJQUFhOzs0QkFFSCxrQkFBUyxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7OztLQWV4QyxDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sZUFBZSxHQUFHLENBQUMsT0FBaUIsRUFBUSxFQUFFO1FBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7WUFFNUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU1QyxJQUFJLENBQUMsU0FBUyxJQUFhOzs7Z0JBR2pCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVzs7c0JBRXhCLGtCQUFTLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVzt3QkFDakQsQ0FBQzs7a0JBRVAsSUFBSSxDQUFDLGFBQWE7OzswQkFHVixrQkFBUyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7K0NBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTs7OztvQkFJbEQsZUFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQzs7O3dCQUcxQyxHQUFHLENBQUMsR0FBRzs7d0JBRVAsR0FBRyxDQUFDLFdBQVcsRUFBRTs7a0JBRXZCLElBQUksQ0FBQyxZQUFZOzt3QkFFWCxNQUFNLENBQUMsVUFBVTs7O09BR2xDLENBQUM7U0FDSDtJQUNILENBQUMsQ0FBQztJQUVGLElBQVksYUFBYTtRQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPO1lBQ2hDLENBQUMsQ0FBVSxnRUFBZ0U7WUFDM0UsQ0FBQyxDQUFVLDBCQUEwQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBSyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxJQUFZLFlBQVk7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtZQUMvQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7Z0JBQzlDLENBQUMsQ0FBQyxzQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFLLENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUVkLE9BQWdCOzs7a0JBR0osa0JBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVztvQkFDOUQsWUFBWTs7T0FFekIsQ0FBQztTQUNIOztZQUFNLE9BQWdCLHVDQUF1QyxDQUFDO0lBQ2pFLENBQUM7O0FBbEdILCtCQW1HQyJ9