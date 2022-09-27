import { Globals as g } from "../../infra/globals";
import { DateUtils } from "../../infra/date_utils";
import { RouteEnum } from "../../routing/router";

import { FirebaseRef } from "../../models/firebase_models";
import { Color, GameRecord, resultString } from "../../models/game_record";
import { isTournamentOrLeague } from "../../models/game_event";

export default class GameRecordsTable extends HTMLElement {
  static readonly tag: string = "game-records-table";

  private getGameRecords = async (): Promise<void> => {
    const p = this.playerRef ? this.playerRef : "";
    const queryString = `?limite=${this.limit}&jogadorRef=${p}`;

    const response = await fetch(
      `${g.apiUrl}${RouteEnum.gameRecords}${queryString}`
    );

    const json = await response.json();
    this.gameRecords = json["data"]["gameRecords"];
  };

  constructor(
    public readonly title: string = "Partidas",
    public readonly limit: number | "max" = 20,
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

  private declare gameRecords: GameRecord[];

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

        <div class="game-records-table-legend">
          <span>#</span>
          <span class="align-left">Preto</span>
          <span>Elo</span>
          <span>Elo Dif</span>
          <span class="align-left">Branco</span>
          <span>Elo</span>
          <span>Elo Dif</span>
          <span>Resultado</span>
          <span>Data</span>
          <span>Evento</span>
        </div>
      `;

      this.setGameRecordsTable();
    }
  }

  setGameRecordsTable = (): void => {
    // TODO2: Add Player's Pictures
    for (let i = this.gameRecords.length - 1; i >= 0; i--) {
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

      this.innerHTML += /*html*/ `
        <route-link 
          class="game-record-card"
          id="${gameRecord.firebaseRef}"
          href="${RouteEnum.gameRecords}/${gameRecord.firebaseRef}"
          ${winOrLossAttr}>
            <span>${i + 1}</span>

            <route-link 
              ${blackWins} 
              href="${RouteEnum.players}/${gameRecord.blackRef}">
                <span class="align-left">
                  ${gameRecord.blackPlayer!.name}
                </span>
            </route-link>

            <span>${gameRecord!.eloData!.atTheTimeBlackElo}</span>

            <span>
              ${this.signedEloDelta(gameRecord!.eloData!.eloDeltaBlack)}
            </span>

            <route-link 
              ${whiteWins} 
              href="${RouteEnum.players}/${gameRecord.whiteRef}">
                <span class="align-left">
                  ${gameRecord.whitePlayer!.name}
                </span>
            </route-link>

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
