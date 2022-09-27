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
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameRecords}/data-elo/${this.playerRef}`);
        const json = await response.json();
        const dateEloData = json["data"]["dateEloData"];
        console.log(dateEloData);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvdmlld3MvcGxheWVyLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBbUQ7QUFDbkQsaURBQWlEO0FBRWpELDJEQUFtQztBQUluQywwRkFBZ0U7QUFDaEUsMENBQXNDO0FBQ3RDLHVDQUFnRDtBQUVoRCx1REFBbUQ7QUFDbkQsa0RBQW1EO0FBRW5ELE1BQXFCLFVBQVcsU0FBUSxXQUFXO0lBR3JCO0lBRjVCLE1BQU0sQ0FBVSxHQUFHLEdBQVcsYUFBYSxDQUFDO0lBRTVDLFlBQTRCLFNBQXNCO1FBQ2hELEtBQUssRUFBRSxDQUFDO1FBRGtCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFFbEQsQ0FBQztJQUVPLFNBQVMsR0FBRyxLQUFLLElBQXFCLEVBQUU7UUFDOUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLEdBQUcsaUJBQUMsQ0FBQyxNQUFNLEdBQUcsa0JBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNwRCxDQUFDO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBSUYsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXJDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsYUFBYSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWpELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksNEJBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTyxRQUFRLEdBQUcsS0FBSyxJQUFtQixFQUFFO1FBQzNDLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUMxQixHQUFHLGlCQUFDLENBQUMsTUFBTSxHQUFHLGtCQUFTLENBQUMsV0FBVyxhQUFhLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDakUsQ0FBQztRQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQWtCLENBQUM7UUFFakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6QixJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUNoQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxzQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNuRSxDQUFDO1lBRUYsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRTNELE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDbEMsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDckQsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFFdEQsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFFckMsZ0JBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyx3QkFBYSxDQUFDLENBQUM7WUFDakMsTUFBTSxTQUFTLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEUsU0FBUyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7WUFDdkIsU0FBUyxDQUFDLFNBQVMsR0FBWSx1QkFBdUIsQ0FBQztZQUN2RCxNQUFNLFdBQVcsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RSxTQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsQ0FBQztZQUUxQyxJQUFJLGdCQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNiLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRTtvQkFDSixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsUUFBUSxFQUFFO3dCQUNSOzRCQUNFLEtBQUssRUFBRSxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFOzRCQUNuQyxJQUFJLEVBQUUsSUFBSTs0QkFDVixJQUFJLEVBQUUsT0FBTzs0QkFDYixlQUFlLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzs0QkFDNUMsV0FBVyxFQUFFLENBQUMsdUJBQXVCLENBQUM7NEJBQ3RDLFdBQVcsRUFBRSxHQUFHO3lCQUNqQjtxQkFDRjtpQkFDRjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRTs0QkFDTixPQUFPLEVBQUUsS0FBSzt5QkFDZjtxQkFDRjtvQkFDRCxNQUFNLEVBQUU7d0JBQ04sQ0FBQyxFQUFFOzRCQUNELEtBQUssRUFBRTtnQ0FDTCxRQUFRLEVBQUUsS0FBSztnQ0FDZixXQUFXLEVBQUUsRUFBRTtnQ0FDZixXQUFXLEVBQUUsRUFBRTtnQ0FDZixJQUFJLEVBQUU7b0NBQ0osSUFBSSxFQUFFLEVBQUU7aUNBQ1Q7NkJBQ0Y7eUJBQ0Y7d0JBQ0QsQ0FBQyxFQUFFOzRCQUNELEtBQUssRUFBRTtnQ0FDTCxJQUFJLEVBQUU7b0NBQ0osSUFBSSxFQUFFLEVBQUU7aUNBQ1Q7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDLENBQUM7U0FDSjtJQUNILENBQUMsQ0FBQztJQUVNLGNBQWMsR0FBRyxHQUFTLEVBQUU7UUFDbEMsTUFBTSxZQUFZLEdBQUcsa0JBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU3RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDakMsQ0FBQyxDQUFVLGFBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUs7WUFDaEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVQLElBQUksQ0FBQyxTQUFTLElBQWE7O1VBRXJCLE9BQU87Y0FDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxZQUFZOztLQUV6QyxDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztJQUVNLGFBQWEsR0FBRyxHQUFTLEVBQUU7UUFDakMsTUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxNQUFNLE9BQU8sR0FDWCxZQUFZLENBQUMsSUFBSSxLQUFLLHFCQUFXLENBQUMsTUFBTTtZQUN0QyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNoQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2hCLE1BQU0sTUFBTSxHQUNWLFlBQVksQ0FBQyxJQUFJLEtBQUsscUJBQVcsQ0FBQyxNQUFNO1lBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQy9CLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFaEIsSUFBSSxDQUFDLFNBQVMsSUFBYTs7Ozs7Ozs7Ozs7OztxQ0FhTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSzs7a0JBRW5CLE9BQU87a0JBQ1AsTUFBTTtrQkFDTixHQUFHLENBQUMsR0FBRztrQkFDUCxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztrQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO2tCQUN0QixrQkFBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7S0FHOUMsQ0FBQztJQUNKLENBQUMsQ0FBQzs7QUFoS0osNkJBaUtDIn0=