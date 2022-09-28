import { Globals as g } from "../../infra/globals";
import { DateUtils } from "../../infra/date_utils";
import { RouteEnum } from "../../routing/router";

import { FirebaseRef } from "../../models/firebase_models";
import { Color, GameRecord, resultString } from "../../models/game_record";
import { isTournamentOrLeague } from "../../models/game_event";
import { UiUtils } from "../ui_utils";

export default class GameRecordsTable extends HTMLElement {
  static readonly tag: string = "game-records-table";

  private getGameRecords = async (): Promise<void> => {
    const queryString =
      `?de=${this.startAfter}` + `&jogadorRef=${this.playerRef}`;

    const response = await fetch(
      `${g.apiUrl}${RouteEnum.gameRecords}${queryString}`
    );

    const json = await response.json();
    this.gameRecords.push(...json["data"]["gameRecords"]);
  };

  private readonly gameRecords: GameRecord[] = [];
  private startAfter: number = 0;

  constructor(
    public readonly title: string = "Partidas",
    public readonly playerRef: FirebaseRef = ""
  ) {
    super();
  }

  private get playerName(): string | null {
    if (this.playerRef) {
      const firstGame = this.gameRecords[0];
      return firstGame.blackRef === this.playerRef
        ? firstGame.blackPlayer!.name
        : firstGame.whitePlayer!.name;
    } else return null;
  }

  async connectedCallback() {
    await this.getGameRecords();

    if (this.gameRecords.length > 0) {
      const titleSuffix = this.playerRef ? this.playerName : "";
      const title = this.playerRef
        ? /*html*/ `
          <h2>
            Partidas de ${titleSuffix}
          </h2>
        `
        : /*html*/ `
          <h2>
            <route-link href="${RouteEnum.gameRecords}">
              ${this.title}
            </route-link>
          </h2>
        `;

      this.innerHTML = /*html*/ `
        ${title}

        <div id="game-records-table-legend">
          <span>#</span>
          <span>Foto Preto</span>
          <span class="align-left">Preto</span>
          <span>País Preto</span>
          <span>Compen-sação</span>
          <span>Elo</span>
          <span>Elo Dif</span>
          <span>Foto Branco</span>
          <span class="align-left">Branco</span>
          <span>País Branco</span>
          <span>Elo</span>
          <span>Elo Dif</span>
          <span>Resultado</span>
          <span>Data</span>
          <span>Evento</span>
        </div>
        
        <div id="game-records-table-cards"></div>

        <div class="pagination"></div>
      `;

      this.setCards();

      this.setPagination();
    }
  }

  private setPagination = (): void => {
    const paginationDiv: HTMLDivElement = this.querySelector(".pagination")!;

    paginationDiv.innerHTML += /*html*/ `
      <button class="next-page">+ Partidas</button>
    `;

    const nextPageButton: HTMLButtonElement =
      this.querySelector("button.next-page")!;

    nextPageButton.onclick = async (): Promise<void> => {
      this.startAfter += g.queryLimit;

      await this.getGameRecords();

      this.setCards();
    };
  };

  private setCards = (): void => {
    const cardsDiv: HTMLDivElement = this.querySelector(
      "#game-records-table-cards"
    )!;
    const length = this.gameRecords.length;
    for (let i = this.startAfter; i < length; i++) {
      const gameRecord = this.gameRecords[i];

      const blackWins =
        gameRecord.result.whoWins === Color.Black ? "winner" : "loser";
      const whiteWins =
        gameRecord.result.whoWins === Color.White ? "winner" : "loser";

      const gameDate = new Date(gameRecord.date);

      let winOrLossAttr = "";
      if (this.playerRef)
        if (
          (blackWins === "winner" && this.playerRef === gameRecord.blackRef) ||
          (whiteWins === "winner" && this.playerRef === gameRecord.whiteRef)
        )
          winOrLossAttr = "player-wins";
        else winOrLossAttr = "player-loses";

      const handicap = gameRecord.handicap ? gameRecord.handicap : "0";

      cardsDiv.innerHTML += /*html*/ `
        <route-link 
          class="game-record-card"
          id="${gameRecord.firebaseRef}"
          href="${RouteEnum.gameRecords}/${gameRecord.firebaseRef}"
          ${winOrLossAttr}>
            <span>${i + 1}</span>

            <span>
              ${UiUtils.playerPicture(gameRecord.blackPlayer!.picture)}
            </span>

            <route-link 
              ${blackWins} 
              href="${RouteEnum.players}/${gameRecord.blackRef}">
                <span class="align-left">
                  ${gameRecord.blackPlayer!.name}
                </span>
            </route-link>

            <div>
              ${UiUtils.allFlags(gameRecord.blackPlayer!.countries)}
            </div>
            
            <span>${handicap}</span>

            <span>${gameRecord!.eloData!.atTheTimeBlackElo}</span>

            <span>
              ${this.signedEloDelta(gameRecord!.eloData!.eloDeltaBlack)}
            </span>

            <span>
              ${UiUtils.playerPicture(gameRecord.whitePlayer!.picture)}
            </span>

            <route-link 
              ${whiteWins} 
              href="${RouteEnum.players}/${gameRecord.whiteRef}">
                <span class="align-left">
                  ${gameRecord.whitePlayer!.name}
                </span>
            </route-link>

            <div>
              ${UiUtils.allFlags(gameRecord.whitePlayer!.countries)}
            </div>

            <span>${gameRecord!.eloData!.atTheTimeWhiteElo}</span>

            <span>
              ${this.signedEloDelta(gameRecord!.eloData!.eloDeltaWhite)}
            </span>

            <span>${resultString(gameRecord.result)}</span>

            <span>${DateUtils.formatDate(gameDate)}</span>
            
            ${this.gameEventLink(gameRecord)}
        </route-link>
      `;
    }
  };

  private signedEloDelta = (n: number): string => {
    return n === 0 ? n.toString() : n > 0 ? `+${n}` : n.toString();
  };

  private gameEventLink = (gameRecord: GameRecord) => {
    let gameEvent = gameRecord.gameEvent?.type.toString();

    let gameEventLink = /*html*/ `<span>${gameEvent}</span>`;

    if (gameRecord.gameEvent && isTournamentOrLeague(gameRecord.gameEvent)) {
      gameEvent = gameRecord.gameEvent.name;
      gameEventLink = /*html*/ `
        <route-link 
          href="${RouteEnum.gameEvents}/${gameRecord.gameEventRef}">
            <span>${gameRecord.gameEvent.name}</span>
        </route-link>
      `;
    }

    return gameEventLink;
  };
}
