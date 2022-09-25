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
const country_1 = require("../../models/country");
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
    fetchPlayerGameRecords = async () => {
        const queryString = `?jogadorRef=${this.playerRef}`;
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameRecords}${queryString}`);
        const json = await response.json();
        return json["data"]["gameRecords"];
    };
    setGraph = async () => {
        const gameRecords = await this.fetchPlayerGameRecords();
        if (gameRecords.length > 0) {
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
            canvasDiv.innerHTML = `<h2>Evolução Elo</h2>`;
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
                            fill: true,
                            data: eloData,
                            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
                            borderColor: ["rgba(54, 162, 235, 1)"],
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
                                maxRotation: 45,
                                minRotation: 45,
                                font: {
                                    size: 15,
                                },
                            },
                        },
                        y: {
                            ticks: {
                                font: {
                                    size: 16,
                                },
                            },
                        },
                    },
                },
            });
        }
    };
    setPlayersPage = () => {
        const countryFlags = utils_1.UiUtils.allFlags(this.player.countries);
        const picture = this.player.picture
            ? `<img src="${this.player.picture}"/>`
            : "";
        this.innerHTML += `
      <div id="name">
        ${picture}
        <h1>${this.player.name} ${countryFlags}</h1>
      </div>
    `;
        this.setPlayerCard();
    };
    setPlayerCard = () => {
        const elo = new elo_1.default(this.player.elo);
        const brState = this.player.countries[0].name === country_1.CountryName.brazil
            ? this.player.countries[0].state
            : "&mdash;";
        const brCity = this.player.countries[0].name === country_1.CountryName.brazil
            ? this.player.countries[0].city
            : "&mdash;";
        this.innerHTML += `
      <div id="player-personal-card">
        <div id="player-personal-card-legend">
          <span>Email</span>
          <span>Estado</span>
          <span>Cidade</span>
          <span>Elo</span>
          <span>Dan Kyu</span>
          <span>Número de Partidas</span>
          <span>Data da Última Partida</span>
        </div>

        <div id="player-personal-card-content">
          <route-link href="mailto:${this.player.email}">
            <span>${this.player.email}</span>
          </route-link>
          <span>${brState}</span>
          <span>${brCity}</span>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvdmlld3MvcGxheWVyLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELDJEQUFtQztBQUluQywwRkFBZ0U7QUFDaEUsb0NBQW1DO0FBQ25DLHVDQUFnRDtBQUVoRCx1REFBbUQ7QUFDbkQsa0RBQW1EO0FBRW5ELE1BQXFCLFVBQVcsU0FBUSxXQUFXO0lBR3JCO0lBRjVCLE1BQU0sQ0FBVSxHQUFHLEdBQVcsYUFBYSxDQUFDO0lBRTVDLFlBQTRCLFNBQXNCO1FBQ2hELEtBQUssRUFBRSxDQUFDO1FBRGtCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFFbEQsQ0FBQztJQUVPLFNBQVMsR0FBRyxLQUFLLElBQXFCLEVBQUU7UUFDOUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLEdBQUcsaUJBQUMsQ0FBQyxNQUFNLEdBQUcsa0JBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNwRCxDQUFDO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBSUYsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXJDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsYUFBYSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWpELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksNEJBQWdCLENBQUMsS0FB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