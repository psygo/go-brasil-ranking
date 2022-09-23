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
      <h2>
        <route-link href="${router_1.RouteEnum.gameRecords}">
          Partidas
        </route-link>
      </h2>

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
                <span class="align-left">${gameRecord.blackPlayer.name}</span>
            </route-link>

            <span>${gameRecord.eloData.atTheTimeBlackElo}</span>

            <span>${gameRecord.eloData.eloDeltaBlack}</span>

            <route-link 
              ${whiteWins} 
              href="${router_1.RouteEnum.players}/${gameRecord.whiteRef}">
                <span class="align-left">${gameRecord.whitePlayer.name}</span>
            </route-link>

            <span>${gameRecord.eloData.atTheTimeWhiteElo}</span>

            <span>${gameRecord.eloData.eloDeltaWhite}</span>

            <span>${(0, game_record_1.resultString)(gameRecord.result)}</span>

            <span>${date_utils_1.DateUtils.formatDate(gameDate)}</span>
            
            ${this.gameEventLink(gameRecord)}
          </route-link>
        </div>
      `;
        }
    };
    gameEventLink = (gameRecord) => {
        let gameEvent = gameRecord.gameEvent?.type.toString();
        let gameEventLink = `<span>${gameEvent}</span>`;
        if (gameRecord.gameEvent && (0, game_event_1.isTournamentOrLeague)(gameRecord.gameEvent)) {
            gameEvent = gameRecord.gameEvent.name;
            gameEventLink = `
        <route-link 
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