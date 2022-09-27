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
        this.appendChild(new game_records_table_1.default("Partidas", "max", this.playerRef));
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
        const firstCountry = this.player.countries[0];
        const brState = firstCountry.name === country_1.CountryName.brazil
            ? this.player.countries[0].state
            : "&mdash;";
        const brCity = firstCountry.name === country_1.CountryName.brazil
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvdmlld3MvcGxheWVyLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELDJEQUFtQztBQUluQywwRkFBZ0U7QUFDaEUsb0NBQW1DO0FBQ25DLHVDQUFnRDtBQUVoRCx1REFBbUQ7QUFDbkQsa0RBQW1EO0FBRW5ELE1BQXFCLFVBQVcsU0FBUSxXQUFXO0lBR3JCO0lBRjVCLE1BQU0sQ0FBVSxHQUFHLEdBQVcsYUFBYSxDQUFDO0lBRTVDLFlBQTRCLFNBQXNCO1FBQ2hELEtBQUssRUFBRSxDQUFDO1FBRGtCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFFbEQsQ0FBQztJQUVPLFNBQVMsR0FBRyxLQUFLLElBQXFCLEVBQUU7UUFDOUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLEdBQUcsaUJBQUMsQ0FBQyxNQUFNLEdBQUcsa0JBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNwRCxDQUFDO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBSUYsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXJDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsYUFBYSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWpELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksNEJBQWdCLENBQUMsVUFB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