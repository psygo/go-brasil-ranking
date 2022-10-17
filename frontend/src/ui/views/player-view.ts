import { doc, getDoc } from "firebase/firestore";

import { Chart, registerables } from "chart.js";

import { db, emdash } from "../../infra/globals";
import { addFirebaseRef } from "../../infra/utils";
import { DateUtils } from "../../infra/date_utils";

import { getFlag } from "../../models/country";
import { FirebaseRef } from "../../models/firebase_models";
import { Player } from "../../models/player";

import GameRecordsTable from "../components/game_records_table";
import { UiUtils } from "../ui_utils";
import Elo from "../../models/elo";

export default class PlayerView extends HTMLElement {
  static readonly tag: string = "player-view";

  constructor(public readonly playerRef: FirebaseRef) {
    super();
  }

  private getPlayer = async (): Promise<void> => {
    const playerDoc = await getDoc(doc(db, "players", this.playerRef));

    this.player = addFirebaseRef(playerDoc.data() as Player, playerDoc.id);
  };

  private declare player: Player;

  async connectedCallback(): Promise<void> {
    document.title = "Jogador";

    await this.getPlayer();

    document.title = `Jogador | ${this.player.name}`;

    this.setPlayersPage();

    this.setGraph();

    this.appendChild(new GameRecordsTable("Partidas", this.playerRef));
  }

  private setGraph = (): void => {
    const eloHistory = this.player.eloHistory!;

    const dateData = eloHistory.map((ded) =>
      DateUtils.formatDate(new Date(ded.date))
    );
    const eloData = eloHistory.map((ded) =>
      ded.eloDelta ? ded.atTheTimeElo + ded.eloDelta : ded.atTheTimeElo
    );

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
              autoSkip: true,
              maxTicksLimit: 12,
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
  };

  private setPlayersPage = (): void => {
    const countryFlags = UiUtils.allFlags(this.player.nationalities);

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
    const elo = new Elo(this.player.currentElo!);

    const email = this.player.email ? this.player.email : emdash;

    let [statesOfOrigin, citiesOfOrigin] = ["", ""];
    for (const c of this.player.nationalities) {
      if (c.state)
        statesOfOrigin += statesOfOrigin.length > 0 ? ", " + c.state : c.state;
      if (c.city)
        citiesOfOrigin += citiesOfOrigin.length > 0 ? ", " + c.city : c.city;
    }

    const countryLivingIn = this.player.livingIn?.name
      ? getFlag(this.player.livingIn!.name)
      : emdash;
    const stateLivingIn = this.player.livingIn?.state
      ? this.player.livingIn!.state
      : emdash;
    const cityLivingIn = this.player.livingIn?.city
      ? this.player.livingIn!.city
      : emdash;

    this.innerHTML += /*html*/ `
      <div id="player-personal-card">
        <div id="legend">
          <span>Email</span>

          <span>Nacionalidade(s)</span>
          <span>Estado(s) de Origem</span>
          <span>Cidade(s) de Origem</span>

          <span>País onde Mora</span>
          <span>Estado onde Mora</span>
          <span>Cidade Onde Mora</span>

          <span>Elo</span>
          <span>Dan Kyu</span>

          <span># de Partidas</span>
          <span>Última Partida</span>
        </div>

        <div id="content">
          <route-link href="mailto:${this.player.email}">
            <span>${email}</span>
          </route-link>

          <div id="nationalities">
            ${UiUtils.allFlags(this.player.nationalities)}
          </div>
          <span>${statesOfOrigin}</span>
          <span>${citiesOfOrigin}</span>

          <span>${countryLivingIn}</span>
          <span>${stateLivingIn}</span>
          <span>${cityLivingIn}</span>

          <span>${elo.num}</span>
          <span>${elo.danKyuLevel(true)}</span>

          <span>${this.player.gamesTotal}</span>
          <span>${UiUtils.lastGameLink(this.player)}</span>
        </div>
      </div>
    `;
  };
}
