"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const date_utils_1 = require("../../infra/date_utils");
const router_1 = require("../../routing/router");
const game_record_1 = require("../../models/game_record");
const game_event_1 = require("../../models/game_event");
const ui_utils_1 = require("../ui_utils");
class GameRecordsTable extends HTMLElement {
    title;
    limit;
    playerRef;
    static tag = "game-records-table";
    getGameRecords = async () => {
        const p = this.playerRef ? this.playerRef : "";
        const queryString = `?limite=${this.limit}&jogadorRef=${p}`;
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameRecords}${queryString}`);
        const json = await response.json();
        this.gameRecords = json["data"]["gameRecords"];
    };
    constructor(title = "Partidas", limit = 20, playerRef = "") {
        super();
        this.title = title;
        this.limit = limit;
        this.playerRef = playerRef;
    }
    get playerName() {
        if (this.playerRef) {
            const firstGame = this.gameRecords[0];
            return firstGame.blackRef === this.playerRef
                ? firstGame.blackPlayer.name
                : firstGame.whitePlayer.name;
        }
        else
            return null;
    }
    async connectedCallback() {
        await this.getGameRecords();
        if (this.gameRecords.length > 0) {
            const titleSuffix = this.playerRef ? this.playerName : "";
            const title = this.playerRef
                ? `
          <h2>
            Partidas de ${titleSuffix}
          </h2>
        `
                : `
          <h2>
            <route-link href="${router_1.RouteEnum.gameRecords}">
              ${this.title}
            </route-link>
          </h2>
        `;
            this.innerHTML = `
        ${title}

        <div class="game-records-table-legend">
          <span>#</span>
          <span>Foto Preto</span>
          <span class="align-left">Preto</span>
          <span>Elo</span>
          <span>Elo Dif</span>
          <span>Foto Branco</span>
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
    setGameRecordsTable = () => {
        for (let i = this.gameRecords.length - 1; i >= 0; i--) {
            const gameRecord = this.gameRecords[i];
            const blackWins = gameRecord.result.whoWins === game_record_1.Color.Black ? "winner" : "loser";
            const whiteWins = gameRecord.result.whoWins === game_record_1.Color.White ? "winner" : "loser";
            const gameDate = new Date(gameRecord.date);
            let winOrLossAttr = "";
            if (this.playerRef)
                if ((blackWins === "winner" && this.playerRef === gameRecord.blackRef) ||
                    (whiteWins === "winner" && this.playerRef === gameRecord.whiteRef))
                    winOrLossAttr = "player-wins";
                else
                    winOrLossAttr = "player-loses";
            this.innerHTML += `
        <route-link 
          class="game-record-card"
          id="${gameRecord.firebaseRef}"
          href="${router_1.RouteEnum.gameRecords}/${gameRecord.firebaseRef}"
          ${winOrLossAttr}>
            <span>${i + 1}</span>

            <span>
              ${ui_utils_1.UiUtils.playerPicture(gameRecord.blackPlayer.picture)}
            </span>

            <route-link 
              ${blackWins} 
              href="${router_1.RouteEnum.players}/${gameRecord.blackRef}">
                <span class="align-left">
                  ${gameRecord.blackPlayer.name}
                </span>
            </route-link>

            <span>${gameRecord.eloData.atTheTimeBlackElo}</span>

            <span>
              ${this.signedEloDelta(gameRecord.eloData.eloDeltaBlack)}
            </span>

            <span>
              ${ui_utils_1.UiUtils.playerPicture(gameRecord.whitePlayer.picture)}
            </span>

            <route-link 
              ${whiteWins} 
              href="${router_1.RouteEnum.players}/${gameRecord.whiteRef}">
                <span class="align-left">
                  ${gameRecord.whitePlayer.name}
                </span>
            </route-link>

            <span>${gameRecord.eloData.atTheTimeWhiteElo}</span>

            <span>
              ${this.signedEloDelta(gameRecord.eloData.eloDeltaWhite)}
            </span>

            <span>${(0, game_record_1.resultString)(gameRecord.result)}</span>

            <span>${date_utils_1.DateUtils.formatDate(gameDate)}</span>
            
            ${this.gameEventLink(gameRecord)}
        </route-link>
      `;
        }
    };
    signedEloDelta = (n) => {
        return n === 0 ? n.toString() : n > 0 ? `+${n}` : n.toString();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZV9yZWNvcmRzX3RhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL2NvbXBvbmVudHMvZ2FtZV9yZWNvcmRzX3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBQ25ELHVEQUFtRDtBQUNuRCxpREFBaUQ7QUFHakQsMERBQTJFO0FBQzNFLHdEQUErRDtBQUMvRCwwQ0FBc0M7QUFFdEMsTUFBcUIsZ0JBQWlCLFNBQVEsV0FBVztJQWdCckM7SUFDQTtJQUNBO0lBakJsQixNQUFNLENBQVUsR0FBRyxHQUFXLG9CQUFvQixDQUFDO0lBRTNDLGNBQWMsR0FBRyxLQUFLLElBQW1CLEVBQUU7UUFDakQsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9DLE1BQU0sV0FBVyxHQUFHLFdBQVcsSUFBSSxDQUFDLEtBQUssZUFBZSxDQUFDLEVBQUUsQ0FBQztRQUU1RCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLEVBQUUsQ0FDcEQsQ0FBQztRQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQztJQUVGLFlBQ2tCLFFBQWdCLFVBQVUsRUFDMUIsUUFBd0IsRUFBRSxFQUMxQixZQUF5QixFQUFFO1FBRTNDLEtBQUssRUFBRSxDQUFDO1FBSlEsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFHN0MsQ0FBQztJ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