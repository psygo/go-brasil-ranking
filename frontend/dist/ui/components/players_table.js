"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const elo_1 = __importDefault(require("../../models/elo"));
const ui_utils_1 = require("../ui_utils");
const utils_1 = require("../../infra/utils");
class PlayersTable extends HTMLElement {
    title;
    isBrazilian;
    static tag = "players-table";
    getPlayers = async () => {
        const isBrazilian = this.isBrazilian === undefined ? "" : `isBrazilian=${this.isBrazilian}`;
        const queryString = `?de=${this.startAfter}&${isBrazilian}`;
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.players}${queryString}`);
        const json = await response.json();
        this.players.push(...json["data"]["players"]);
    };
    startAfter = 0;
    players = [];
    constructor(title = "Jogadores", isBrazilian = undefined) {
        super();
        this.title = title;
        this.isBrazilian = isBrazilian;
    }
    async connectedCallback() {
        await this.getPlayers();
        this.innerHTML += `
      <h2>
        <route-link href="${router_1.RouteEnum.players}">
          ${this.title}
        </route-link>
      </h2>
      
      <div id="players-table-legend">
        <span>#</span>
        <span>Foto</span>
        <span class="align-left">Nome</span>
        <span>País</span>
        <span>Elo</span>
        <span>Dan Kyu</span>
        <span>Data da Última Partida</span>
        <span>Número de Partidas</span>
      </div>

      <div id="players-table-cards"></div>

      <div class="pagination"></div>
    `;
        this.setCards();
        this.setPagination();
        const nextPageButton = this.querySelector("button.next-page");
        nextPageButton.click();
    }
    setPagination = () => {
        const paginationDiv = this.querySelector(".pagination");
        paginationDiv.innerHTML += `
      <button class="next-page">+ Jogadores</button>
    `;
        const nextPageButton = this.querySelector("button.next-page");
        nextPageButton.onclick = async () => {
            this.startAfter += globals_1.Globals.queryLimit;
            await this.getPlayers();
            this.setCards();
        };
    };
    i = 0;
    lastElo = -10000;
    setCards = () => {
        const cardsDiv = this.querySelector("#players-table-cards");
        const slicedPlayers = (0, utils_1.paginationSlicer)(this.startAfter, this.players);
        for (const player of slicedPlayers) {
            if (player.elo !== this.lastElo) {
                this.i++;
                this.lastElo = player.elo;
            }
            const elo = new elo_1.default(player.elo);
            cardsDiv.innerHTML += `
        <route-link 
          class="player-card" 
          id="${player.firebaseRef}"
          href="${router_1.RouteEnum.players}/${player.firebaseRef}">
            <span>${this.i}</span>
            
            <span>${ui_utils_1.UiUtils.playerPicture(player.picture)}</span>

            <route-link 
              href="${router_1.RouteEnum.players}/${player.firebaseRef}">
                <span class="align-left">${player.name}</span>
            </route-link>

            <div>
              ${ui_utils_1.UiUtils.allFlags(player.countries)}
            </div>

            <span>${elo.num}</span>

            <span>${elo.danKyuLevel()}</span>
            
            ${ui_utils_1.UiUtils.lastGameLink(player)}
            
            <span>${player.gamesTotal}</span>
        </route-link>
      `;
        }
    };
}
exports.default = PlayersTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyc190YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS9jb21wb25lbnRzL3BsYXllcnNfdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELDJEQUFtQztBQUVuQywwQ0FBc0M7QUFDdEMsNkNBQXFEO0FBRXJELE1BQXFCLFlBQWEsU0FBUSxXQUFXO0lBcUJqQztJQUNBO0lBckJsQixNQUFNLENBQVUsR0FBRyxHQUFXLGVBQWUsQ0FBQztJQUV0QyxVQUFVLEdBQUcsS0FBSyxJQUFtQixFQUFFO1FBQzdDLE1BQU0sV0FBVyxHQUNmLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTFFLE1BQU0sV0FBVyxHQUFHLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUU1RCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLE9BQU8sR0FBRyxXQUFXLEVBQUUsQ0FDaEQsQ0FBQztRQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0lBRU0sVUFBVSxHQUFXLENBQUMsQ0FBQztJQUNkLE9BQU8sR0FBYSxFQUFFLENBQUM7SUFFeEMsWUFDa0IsUUFBZ0IsV0FBVyxFQUMzQixjQUFtQyxTQUFTO1FBRTVELEtBQUssRUFBRSxDQUFDO1FBSFEsVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFDM0IsZ0JBQVcsR0FBWCxXQUFX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