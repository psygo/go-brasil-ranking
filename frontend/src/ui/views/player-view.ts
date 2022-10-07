import { Globals as g } from "../../infra/globals";

import Elo from "../../models/elo";
import { FirebaseRef } from "../../models/firebase_models";
import { Player } from "../../models/player";

import GameRecordsTable from "../components/game_records_table";
import { UiUtils } from "../ui_utils";
import { Chart, registerables } from "chart.js";
import { DateEloData } from "../../models/game_record";
import { DateUtils } from "../../infra/date_utils";
import { CountryName } from "../../models/country";
import { doc, getDoc } from "firebase/firestore";
import { addFirebaseRef, getPlayerGameRecords } from "../../infra/utils";

export default class PlayerView extends HTMLElement {
  static readonly tag: string = "player-view";

  constructor(public readonly playerRef: FirebaseRef) {
    super();
  }

  private getPlayer = async (): Promise<void> => {
    const playerDoc = await getDoc(doc(g.db, "players", this.playerRef));

    this.player = addFirebaseRef(playerDoc.data() as Player, playerDoc.id);
  };

  private declare player: Player;

  async connectedCallback(): Promise<void> {
    document.title = "Jogador";

    await this.getPlayer();

    document.title = `Jogador | ${this.player.name}`;

    this.setPlayersPage();

    await this.setGraph();

    this.appendChild(new GameRecordsTable("Partidas", this.playerRef));
  }

  private getPlayerDateEloData = async (): Promise<DateEloData[]> => {
    const allPlayerGames = await getPlayerGameRecords(this.playerRef);

    return allPlayerGames
      .map((g) => ({
        date: g.date,
        atTheTimeElo:
          this.playerRef === g.blackRef
            ? g.eloData!.atTheTimeBlackElo
            : g.eloData!.atTheTimeWhiteElo,
        eloDelta:
          this.playerRef === g.blackRef
            ? g.eloData!.eloDeltaBlack
            : g.eloData!.eloDeltaWhite,
      }))
      .reverse();
  };

  private setGraph = async (): Promise<void> => {
    const dateEloData = await this.getPlayerDateEloData();

    if (dateEloData.length > 0) {
      const dateData = ["Início"].concat(
        dateEloData.map((ded) => DateUtils.formatDate(new Date(ded.date)))
      );

      const eloData = dateEloData.map((ded) => ded.atTheTimeElo);

      const length = dateEloData.length;
      const lastElo = dateEloData[length - 1].atTheTimeElo;
      const lastEloDelta = dateEloData[length - 1].eloDelta;

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

    const email = this.player.email ? this.player.email : "&mdash;";

    const firstCountry = this.player.countries[0];
    const brState =
      firstCountry.name === CountryName.brazil
        ? this.player.countries[0].state
        : "&mdash;";
    const brCity =
      firstCountry.name === CountryName.brazil
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
            <span>${email}</span>
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
