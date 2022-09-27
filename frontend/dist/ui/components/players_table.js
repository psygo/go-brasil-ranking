"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const elo_1 = __importDefault(require("../../models/elo"));
const ui_utils_1 = require("../ui_utils");
class PlayersTable extends HTMLElement {
    title;
    limit;
    isBrazilian;
    static tag = "players-table";
    getPlayers = async () => {
        const isBrazilian = this.isBrazilian === undefined ? "" : `isBrazilian=${this.isBrazilian}`;
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.players}?limite=${this.limit}&${isBrazilian}`);
        const json = await response.json();
        return json["data"]["players"];
    };
    constructor(title = "Jogadores", limit = 20, isBrazilian = undefined) {
        super();
        this.title = title;
        this.limit = limit;
        this.isBrazilian = isBrazilian;
    }
    async connectedCallback() {
        const players = await this.getPlayers();
        this.innerHTML += `
      <h2>
        <route-link href="${router_1.RouteEnum.players}">
          ${this.title}
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
            
            <span>${ui_utils_1.UiUtils.playerPicture(player.picture)}</span>

            <route-link 
              href="${router_1.RouteEnum.players}/${this.currentPlayer.firebaseRef}">
                <span class="align-left">${this.currentPlayer.name}</span>
            </route-link>

            <div>
              ${ui_utils_1.UiUtils.allFlags(this.currentPlayer.countries)}
            </div>

            <span>${elo.num}</span>

            <span>${elo.danKyuLevel()}</span>
            
            ${ui_utils_1.UiUtils.lastGameLink(this.currentPlayer)}
            
            <span>${player.gamesTotal}</span>
        </route-link>
      `;
        }
    };
}
exports.default = PlayersTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyc190YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS9jb21wb25lbnRzL3BsYXllcnNfdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELDJEQUFtQztBQUVuQywwQ0FBc0M7QUFFdEMsTUFBcUIsWUFBYSxTQUFRLFdBQVc7SUFrQmpDO0lBQ0E7SUFDQTtJQW5CbEIsTUFBTSxDQUFVLEdBQUcsR0FBVyxlQUFlLENBQUM7SUFJdEMsVUFBVSxHQUFHLEtBQUssSUFBdUIsRUFBRTtRQUNqRCxNQUFNLFdBQVcsR0FDZixJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUxRSxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLE9BQU8sV0FBVyxJQUFJLENBQUMsS0FBSyxJQUFJLFdBQVcsRUFBRSxDQUN0RSxDQUFDO1FBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsWUFDa0IsUUFBZ0IsV0FBVyxFQUMzQixRQUF3QixFQUFFLEVBQzFCLGNBQW1DLFNBQVM7UUFFNUQsS0FBSyxFQUFFLENBQUM7UUFKUSxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUMzQixVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBaUM7SUFHOUQsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUI7UUFDckIsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFeEMsSUFBSSxDQUFDLFNBQVMsSUFBYTs7NEJBRUgsa0JBQVMsQ0FBQyxPQUFPO1lBQ2pDLElBQUksQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7OztLQWNqQixDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sZUFBZSxHQUFHLENBQUMsT0FBaUIsRUFBUSxFQUFFO1FBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7WUFFNUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU1QyxJQUFJLENBQUMsU0FBUyxJQUFhOzs7Z0JBR2pCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVztrQkFDNUIsa0JBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXO29CQUNqRCxDQUFDOztvQkFFRCxrQkFBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDOzs7c0JBR25DLGtCQUFTLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVzsyQ0FDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJOzs7O2dCQUlsRCxrQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQzs7O29CQUcxQyxHQUFHLENBQUMsR0FBRzs7b0JBRVAsR0FBRyxDQUFDLFdBQVcsRUFBRTs7Y0FFdkIsa0JBQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7b0JBRWxDLE1BQU0sQ0FBQyxVQUFVOztPQUU5QixDQUFDO1NBQ0g7SUFDSCxDQUFDLENBQUM7O0FBeEZKLCtCQTBGQyJ9