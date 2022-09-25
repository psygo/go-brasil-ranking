import { Globals as g } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";

import Elo from "../../models/elo";
import { FirebaseRef } from "../../models/firebase_models";
import { Player } from "../../models/player";

import GameRecordsTable from "../components/game_records_table";
import { UiUtils } from "../utils";
import { Chart, registerables } from "chart.js";
import { GameRecord } from "../../models/game_record";
import { DateUtils } from "../../infra/date_utils";
import { CountryName } from "../../models/country";

export default class PlayerView extends HTMLElement {
  static readonly tag: string = "player-view";

  constructor(public readonly playerRef: FirebaseRef) {
    super();
  }

  private getPlayer = async (): Promise<Player> => {
    const response = await fetch(
      `${g.apiUrl}${RouteEnum.players}/${this.playerRef}`
    );
    const json = await response.json();
    return json["data"]["player"];
  };

  private declare player: Player;

  async connectedCallback() {
    this.player = await this.getPlayer();

    document.title = `Jogador | ${this.player.name}`;

    this.setPlayersPage();

    await this.setGraph();

    this.appendChild(new GameRecordsTable("max", this.playerRef));
  }

  private fetchPlayerGameRecords = async (): Promise<GameRecord[]> => {
    // Fetching the player's game records
    // This is basically part of the Game Records Table,
    // So it's copying code, and doing the same request twice...
    const queryString = `?jogadorRef=${this.playerRef}`;
    const response = await fetch(
      `${g.apiUrl}${RouteEnum.gameRecords}${queryString}`
    );
    const json = await response.json();
    return json["data"]["gameRecords"];
  };

  private setGraph = async (): Promise<void> => {
    const gameRecords = await this.fetchPlayerGameRecords();

    if (gameRecords.length > 0) {
      const dateData = ["Início"].concat(
        gameRecords.map((gr) => DateUtils.formatDate(new Date(gr.date)))
      );

      const eloData = gameRecords.map((gr) =>
        gr.blackRef === this.playerRef
          ? gr.eloData!.atTheTimeBlackElo
          : gr.eloData!.atTheTimeWhiteElo
      );
      const length = gameRecords.length;
      const lastElo = eloData[length - 1];
      const lastGameRecord = gameRecords[length - 1];
      const lastEloDelta =
        lastGameRecord.blackRef === this.playerRef
          ? lastGameRecord.eloData!.eloDeltaBlack
          : lastGameRecord.eloData!.eloDeltaWhite;
      eloData.push(lastElo + lastEloDelta);

      Chart.register(...registerables);
      const canvasDiv: HTMLDivElement = document.createElement("div");
      canvasDiv.id = "graph";
      canvasDiv.innerHTML = /*html*/ `<h2>Evolução Elo</h2>`;
      const graphCanvas: HTMLCanvasElement = document.createElement("canvas");
      canvasDiv.appendChild(graphCanvas);
      this.appendChild(canvasDiv);
      const ctx = graphCanvas.getContext("2d")!;

      new Chart(ctx, {
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
                  size: 16,
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

  private setPlayersPage = (): void => {
    const countryFlags = UiUtils.allFlags(this.player.countries);

    const picture = this.player.picture
      ? /*html*/ `<img src="${this.player.picture}"/>`
      : "";

    this.innerHTML += /*html*/ `
      <div id="name">
        ${picture}
        <h1>${this.player.name} ${countryFlags}</h1>
      </div>
    `;

    this.setPlayerCard();
  };

  private setPlayerCard = (): void => {
    const elo = new Elo(this.player.elo);
    const brState =
      this.player.countries[0].name === CountryName.brazil
        ? this.player.countries[0].state
        : "&mdash;";
    const brCity =
      this.player.countries[0].name === CountryName.brazil
        ? this.player.countries[0].city
        : "&mdash;";

    this.innerHTML += /*html*/ `
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
          <span>${UiUtils.lastGameLink(this.player)}</span>
        </div>
      </div>
    `;
  };
}
