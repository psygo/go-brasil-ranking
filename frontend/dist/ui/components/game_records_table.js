"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const date_utils_1 = require("../../infra/date_utils");
const router_1 = require("../../routing/router");
const game_record_1 = require("../../models/game_record");
const game_event_1 = require("../../models/game_event");
class GameRecordsTable extends HTMLElement {
    limit;
    playerRef;
    static tag = "game-records-table";
    getGameRecords = async () => {
        const p = this.playerRef ? this.playerRef : "";
        const queryString = `?limite=${this.limit}&jogadorRef=${p}`;
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameRecords}${queryString}`);
        const json = await response.json();
        return json["data"]["gameRecords"];
    };
    constructor(limit = 20, playerRef = "") {
        super();
        this.limit = limit;
        this.playerRef = playerRef;
    }
    async connectedCallback() {
        const gameRecords = await this.getGameRecords();
        this.innerHTML = `
      <h2>Partidas</h2>

      <div class="game-records-table-legend">
        <span>#</span>
        <span>Preto</span>
        <span class="centered">Elo</span>
        <div>
          <p>Elo</span>
          <p>Dif</span>
        </div>
        <span>Branco</span>
        <span class="centered">Elo</span>
        <div>
          <span>Elo</span>
          <span>Dif</span>
        </div>
        <span>Resultado</span>
        <span class="centered">Data</span>
        <span class="centered">Evento</span>
      </div>
    `;
        this.setGameRecordsTable(gameRecords);
    }
    setGameRecordsTable = (gameRecords) => {
        for (let i = gameRecords.length - 1; i >= 0; i--) {
            const gameRecord = gameRecords[i];
            const blackWins = gameRecord.result.whoWins === game_record_1.Color.Black ? "winner" : "loser";
            const whiteWins = gameRecord.result.whoWins === game_record_1.Color.White ? "winner" : "loser";
            const gameDate = new Date(gameRecord.date);
            this.innerHTML += `
        <div class="game-record-card" id="${gameRecord.firebaseRef}">
          <route-link href="${router_1.RouteEnum.gameRecords}/${gameRecord.firebaseRef}">
            <span>${i.toString()}</span>

            <route-link 
              ${blackWins} 
              href="${router_1.RouteEnum.players}/${gameRecord.blackRef}">
                <span>${gameRecord.blackPlayer.name}</span>
            </route-link>

            <span>${gameRecord.eloData.atTheTimeBlackElo}</span>

            <span class="centered">${gameRecord.eloData.eloDeltaBlack}</span>

            <route-link 
              ${whiteWins} 
              href="${router_1.RouteEnum.players}/${gameRecord.whiteRef}">
                <span>${gameRecord.whitePlayer.name}</span>
            </route-link>

            <span>${gameRecord.eloData.atTheTimeWhiteElo}</span>

            <span class="centered">${gameRecord.eloData.eloDeltaWhite}</span>

            <span class="centered">${(0, game_record_1.resultString)(gameRecord.result)}</span>

            <span>${date_utils_1.DateUtils.formatDate(gameDate)}</span>
            
            ${this.gameEventLink(gameRecord)}
          </route-link>
        </div>
      `;
        }
    };
    gameEventLink = (gameRecord) => {
        let gameEvent = gameRecord.gameEvent?.type.toString();
        let gameEventLink = `<span class="centered">${gameEvent}</span>`;
        if (gameRecord.gameEvent && (0, game_event_1.isTournamentOrLeague)(gameRecord.gameEvent)) {
            gameEvent = gameRecord.gameEvent.name;
            gameEventLink = `
        <route-link 
          class="centered" 
          href="${router_1.RouteEnum.gameEvents}/${gameRecord.gameEventRef}">
            <span>${gameRecord.gameEvent.name}</span>
        </route-link>
      `;
        }
        return gameEventLink;
    };
}
exports.default = GameRecordsTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZV9yZWNvcmRzX3RhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL2NvbXBvbmVudHMvZ2FtZV9yZWNvcmRzX3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBQ25ELHVEQUFtRDtBQUNuRCxpREFBaUQ7QUFHakQsMERBQTJFO0FBQzNFLHdEQUErRDtBQUUvRCxNQUFxQixnQkFBaUIsU0FBUSxXQUFXO0lBZ0JyQztJQUNBO0lBaEJsQixNQUFNLENBQVUsR0FBRyxHQUFXLG9CQUFvQixDQUFDO0lBRTNDLGNBQWMsR0FBRyxLQUFLLElBQTJCLEVBQUU7UUFDekQsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9DLE1BQU0sV0FBVyxHQUFHLFdBQVcsSUFBSSxDQUFDLEtBQUssZUFBZSxDQUFDLEVBQUUsQ0FBQztRQUU1RCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLEVBQUUsQ0FDcEQsQ0FBQztRQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQztJQUVGLFlBQ2tCLFFBQXdCLEVBQUUsRUFDMUIsWUFBeUIsRUFBRTtRQUUzQyxLQUFLLEVBQUUsQ0FBQztRQUhRLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRzdDLENBQUM7SUFFRCxLQUFLLENBQUMsaUJBQWlCO1FBQ3JCLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRWhE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