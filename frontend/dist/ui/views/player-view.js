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
const chart_js_1 = require("chart.js");
const date_utils_1 = require("../../infra/date_utils");
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
        await this.setGraph();
        this.appendChild(new game_records_table_1.default("max", this.playerRef));
    }
    setGraph = async () => {
        const queryString = `?jogadorRef=${this.playerRef}`;
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameRecords}${queryString}`);
        const json = await response.json();
        let gameRecords = json["data"]["gameRecords"];
        gameRecords;
        const dateData = ["Início"].concat(gameRecords.map((gr) => date_utils_1.DateUtils.formatDate(new Date(gr.date))));
        const eloData = gameRecords.map((gr) => gr.blackRef === this.playerRef
            ? gr.eloData.atTheTimeBlackElo
            : gr.eloData.atTheTimeWhiteElo);
        const length = gameRecords.length;
        const lastElo = eloData[length - 1];
        const lastGameRecord = gameRecords[length - 1];
        const lastEloDelta = lastGameRecord.blackRef === this.playerRef
            ? lastGameRecord.eloData.eloDeltaBlack
            : lastGameRecord.eloData.eloDeltaWhite;
        eloData.push(lastElo + lastEloDelta);
        chart_js_1.Chart.register(...chart_js_1.registerables);
        const canvasDiv = document.createElement("div");
        canvasDiv.id = "graph";
        const graphCanvas = document.createElement("canvas");
        canvasDiv.appendChild(graphCanvas);
        this.appendChild(canvasDiv);
        const ctx = graphCanvas.getContext("2d");
        new chart_js_1.Chart(ctx, {
            type: "line",
            data: {
                labels: dateData,
                datasets: [
                    {
                        label: `Elo de ${this.player.name}`,
                        data: eloData,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                        ],
                        borderColor: [
                            "rgba(54, 162, 235, 1)",
                        ],
                        borderWidth: 1.5,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            autoSkip: false,
                            maxRotation: 30,
                            minRotation: 30,
                        },
                    },
                },
            },
        });
    };
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
          <span>Email</span>
          <span>Elo</span>
          <span>Dan Kyu</span>
          <span>Número de Partidas</span>
          <span>Data da Última Partida</span>
        </div>

        <div id="player-personal-card-content">
          <route-link href="mailto:${this.player.email}">
            <span>${this.player.email}</span>
          </route-link>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvdmlld3MvcGxheWVyLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELDJEQUFtQztBQUluQywwRkFBZ0U7QUFDaEUsb0NBQW1DO0FBQ25DLHVDQUFnRDtBQUVoRCx1REFBbUQ7QUFFbkQsTUFBcUIsVUFBVyxTQUFRLFdBQVc7SUFHckI7SUFGNUIsTUFBTSxDQUFVLEdBQUcsR0FBVyxhQUFhLENBQUM7SUFFNUMsWUFBNEIsU0FBc0I7UUFDaEQsS0FBSyxFQUFFLENBQUM7UUFEa0IsY0FBUyxHQUFULFNBQVMsQ0FBYTtJQUVsRCxDQUFDO0lBRU8sU0FBUyxHQUFHLEtBQUssSUFBcUIsRUFBRTtRQUM5QyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ3BELENBQUM7UUFDRixNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFJRixLQUFLLENBQUMsaUJBQWlCO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFckMsUUFBUSxDQUFDLEtBQUssR0FBRyxhQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFakQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSw0QkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxD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