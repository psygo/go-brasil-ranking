"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const elo_1 = __importDefault(require("../../models/elo"));
const game_records_table_1 = __importDefault(require("../components/game_records_table"));
const ui_utils_1 = require("../ui_utils");
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
        this.appendChild(new game_records_table_1.default("Partidas", this.playerRef));
    }
    setGraph = async () => {
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameRecords}` +
            `?data-elo=true` +
            `&jogadorRef=${this.playerRef}`);
        const json = await response.json();
        const dateEloData = json["data"]["dateEloData"];
        if (dateEloData.length > 0) {
            const dateData = ["Início"].concat(dateEloData.map((ded) => date_utils_1.DateUtils.formatDate(new Date(ded.date))));
            const eloData = dateEloData.map((ded) => ded.atTheTimeElo);
            const length = dateEloData.length;
            const lastElo = dateEloData[length - 1].atTheTimeElo;
            const lastEloDelta = dateEloData[length - 1].eloDelta;
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
        const countryFlags = ui_utils_1.UiUtils.allFlags(this.player.countries);
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
          <span>${ui_utils_1.UiUtils.lastGameLink(this.player)}</span>
        </div>
      </div>
    `;
    };
}
exports.default = PlayerView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvdmlld3MvcGxheWVyLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELDJEQUFtQztBQUluQywwRkFBZ0U7QUFDaEUsMENBQXNDO0FBQ3RDLHVDQUFnRDtBQUVoRCx1REFBbUQ7QUFDbkQsa0RBQW1EO0FBRW5ELE1BQXFCLFVBQVcsU0FBUSxXQUFXO0lBR3JCO0lBRjVCLE1BQU0sQ0FBVSxHQUFHLEdBQVcsYUFBYSxDQUFDO0lBRTVDLFlBQTRCLFNBQXNCO1FBQ2hELEtBQUssRUFBRSxDQUFDO1FBRGtCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFFbEQsQ0FBQztJQUVPLFNBQVMsR0FBRyxLQUFLLElBQXFCLEVBQUU7UUFDOUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLEdBQUcsaUJBQUMsQ0FBQyxNQUFNLEdBQUcsa0JBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNwRCxDQUFDO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBSUYsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXJDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsYUFBYSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWpELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksNEJBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTyxRQUFRLEdBQUcsS0FBSyxJQUFtQixFQUFFO1FBQzNDLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUMxQixHQUFHLGlCQUFDLENBQUMsTUFBTSxHQUFHLGtCQUFTLENBQUMsV0FBVyxFQUFFO1lBQ25DLGdCQUFnQjtZQUNoQixlQUFlLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDbEMsQ0FBQztRQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQWtCLENBQUM7UUFFakUsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQixNQUFNLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FDaEMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsc0JBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDbkUsQ0FBQztZQUVGLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUUzRCxNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ2xDLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ3JELE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBRXRELE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxDQUFDO1lBRXJDLGdCQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsd0JBQWEsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sU0FBUyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLFNBQVMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLFNBQVMsQ0FBQyxTQUFTLEdBQVksdUJBQXVCLENBQUM7WUFDdkQsTUFBTSxXQUFXLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7WUFFMUMsSUFBSSxnQkFBSyxDQUFDLEdBQUcsRUFBRTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUU7b0JBQ0osTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLFFBQVEsRUFBRTt3QkFDUjs0QkFDRSxLQUFLLEVBQUUsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTs0QkFDbkMsSUFBSSxFQUFFLElBQUk7NEJBQ1YsSUFBSSxFQUFFLE9BQU87NEJBQ2IsZUFBZSxFQUFFLENBQUMseUJBQXlCLENBQUM7NEJBQzVDLFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDOzRCQUN0QyxXQUFXLEVBQUUsR0FBRzt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUU7NEJBQ04sT0FBTyxFQUFFLEtBQUs7eUJBQ2Y7cUJBQ0Y7b0JBQ0QsTUFBTSxFQUFFO3dCQUNOLENBQUMsRUFBRTs0QkFDRCxLQUFLLEVBQUU7Z0NBQ0wsUUFBUSxFQUFFLEtBQUs7Z0NBQ2YsV0FBVyxFQUFFLEVBQUU7Z0NBQ2YsV0FBVyxFQUFFLEVBQUU7Z0NBQ2YsSUFBSSxFQUFFO29DQUNKLElBQUksRUFBRSxFQUFFO2lDQUNUOzZCQUNGO3lCQUNGO3dCQUNELENBQUMsRUFBRTs0QkFDRCxLQUFLLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFO29DQUNKLElBQUksRUFBRSxFQUFFO2lDQUNUOzZCQUNGO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDLENBQUM7SUFFTSxjQUFjLEdBQUcsR0FBUyxFQUFFO1FBQ2xDLE1BQU0sWUFBWSxHQUFHLGtCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFN0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ2pDLENBQUMsQ0FBVSxhQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLO1lBQ2hELENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFUCxJQUFJLENBQUMsU0FBUyxJQUFhOztVQUVyQixPQUFPO2NBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksWUFBWTs7S0FFekMsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUM7SUFFTSxhQUFhLEdBQUcsR0FBUyxFQUFFO1FBQ2pDLE1BQU0sR0FBRyxHQUFHLElBQUksYUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsTUFBTSxPQUFPLEdBQ1gsWUFBWSxDQUFDLElBQUksS0FBSyxxQkFBVyxDQUFDLE1BQU07WUFDdEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDaEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNoQixNQUFNLE1BQU0sR0FDVixZQUFZLENBQUMsSUFBSSxLQUFLLHFCQUFXLENBQUMsTUFBTTtZQUN0QyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUMvQixDQUFDLENBQUMsU0FBUyxDQUFDO1FBRWhCLElBQUksQ0FBQyxTQUFTLElBQWE7Ozs7Ozs7Ozs7Ozs7cUNBYU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7O2tCQUVuQixPQUFPO2tCQUNQLE1BQU07a0JBQ04sR0FBRyxDQUFDLEdBQUc7a0JBQ1AsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7a0JBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtrQkFDdEIsa0JBQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7O0tBRzlDLENBQUM7SUFDSixDQUFDLENBQUM7O0FBaEtKLDZCQWlLQyJ9