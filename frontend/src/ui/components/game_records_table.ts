import { Globals as g } from "../../infra/globals";
import { DateUtils } from "../../infra/date_utils";
import { RouteEnum } from "../../routing/router";

import { FirebaseRef } from "../../models/firebase_models";
import { Color, GameRecord, resultString } from "../../models/game_record";
import { isTournamentOrLeague } from "../../models/game_event";

export default class GameRecordsTable extends HTMLElement {
  static readonly tag: string = "game-records-table";

  private getGameRecords = async (): Promise<GameRecord[]> => {
    const p = this.playerRef ? this.playerRef : "";
    const queryString = `?limite=${this.limit}&jogadorRef=${p}`;

    const response = await fetch(
      `${g.apiUrl}${RouteEnum.gameRecords}${queryString}`
    );

    const json = await response.json();
    return json["data"]["gameRecords"];
  };

  constructor(
    public readonly limit: number | "max" = 20,
    public readonly playerRef: FirebaseRef = ""
  ) {
    super();
  }

  async connectedCallback() {
    const gameRecords = await this.getGameRecords();

    this.innerHTML = /*html*/ `
      <h2>Partidas</h2>

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

    this.setGameRecordsTable(gameRecords);
  }

  setGameRecordsTable = (gameRecords: GameRecord[]): void => {
    for (let i = gameRecords.length - 1; i >= 0; i--) {
      const gameRecord = gameRecords[i];

      const blackWins =
        gameRecord.result.whoWins === Color.Black ? "winner" : "loser";
      const whiteWins =
        gameRecord.result.whoWins === Color.White ? "winner" : "loser";

      const gameDate = new Date(gameRecord.date);

      this.innerHTML += /*html*/ `
        <div class="game-record-card" id="${gameRecord.firebaseRef}">
          <route-link href="${RouteEnum.gameRecords}/${gameRecord.firebaseRef}">
            <span>${i.toString()}</span>

            <route-link 
              ${blackWins} 
              href="${RouteEnum.players}/${gameRecord.blackRef}">
                <span class="align-left">${gameRecord.blackPlayer!.name}</span>
            </route-link>

            <span>${gameRecord!.eloData!.atTheTimeBlackElo}</span>

            <span>${gameRecord!.eloData!.eloDeltaBlack}</span>

            <route-link 
              ${whiteWins} 
              href="${RouteEnum.players}/${gameRecord.whiteRef}">
                <span class="align-left">${gameRecord.whitePlayer!.name}</span>
            </route-link>

            <span>${gameRecord!.eloData!.atTheTimeWhiteElo}</span>

            <span>${gameRecord!.eloData!.eloDeltaWhite}</span>

            <span>${resultString(gameRecord.result)}</span>

            <span>${DateUtils.formatDate(gameDate)}</span>
            
            ${this.gameEventLink(gameRecord)}
          </route-link>
        </div>
      `;
    }
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
