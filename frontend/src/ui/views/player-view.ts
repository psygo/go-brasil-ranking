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

  private setGraph = async (): Promise<void> => {
    // Fetching the player's game records
    // This is basically part of the Game Records Table,
    // So it's copying code, and doing the same request twice...
    const queryString = `?jogadorRef=${this.playerRef}`;
    const response = await fetch(
      `${g.apiUrl}${RouteEnum.gameRecords}${queryString}`
    );
    const json = await response.json();
    let gameRecords = json["data"]["gameRecords"] as GameRecord[];
    gameRecords;

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
            data: eloData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              // "rgba(54, 162, 235, 0.2)",
              // "rgba(255, 206, 86, 0.2)",
              // "rgba(75, 192, 192, 0.2)",
              // "rgba(153, 102, 255, 0.2)",
              // "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              // "rgba(75, 192, 192, 1)",
              // "rgba(255, 99, 132, 1)",
              // "rgba(153, 102, 255, 1)",
              // "rgba(255, 159, 64, 1)",
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

  private setPlayersPage = (): void => {
    const countryFlags = UiUtils.allFlags(this.player.countries);

    this.innerHTML += /*html*/ `
      <div id="name">
        <img src="${this.player.picture}"/>
        <h1>${this.player.name} ${countryFlags}</h1>
      </div>
    `;

    this.setPlayerCard();
  };

  private setPlayerCard = (): void => {
    const elo = new Elo(this.player.elo);

    this.innerHTML += /*html*/ `
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
          <span>${UiUtils.lastGameLink(this.player)}</span>
        </div>
      </div>
    `;
  };
}
