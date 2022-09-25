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
        this.gameRecords = json["data"]["gameRecords"];
    };
    constructor(limit = 20, playerRef = "") {
        super();
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
            const titleSuffix = this.playerRef ? ` de ${this.playerName}` : "";
            const title = this.playerRef
                ? `
          <h2>
            Partidas ${titleSuffix}
          </h2>
        `
                : `
          <h2>
            <route-link href="${router_1.RouteEnum.gameRecords}">
              Partidas
            </route-link>
          </h2>
        `;
            this.innerHTML = `
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
    setGameRecordsTable = () => {
        for (let i = this.gameRecords.length - 1; i >= 0; i--) {
            const gameRecord = this.gameRecords[i];
            const blackWins = gameRecord.result.whoWins === game_record_1.Color.Black ? "winner" : "loser";
            const whiteWins = gameRecord.result.whoWins === game_record_1.Color.White ? "winner" : "loser";
            const gameDate = new Date(gameRecord.date);
            console.log(blackWins);
            console.log(whiteWins);
            console.log(this.playerRef);
            console.log(gameRecord.blackRef);
            console.log(gameRecord.whiteRef);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZV9yZWNvcmRzX3RhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL2NvbXBvbmVudHMvZ2FtZV9yZWNvcmRzX3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBQ25ELHVEQUFtRDtBQUNuRCxpREFBaUQ7QUFHakQsMERBQTJFO0FBQzNFLHdEQUErRDtBQUUvRCxNQUFxQixnQkFBaUIsU0FBUSxXQUFXO0lBZ0JyQztJQUNBO0lBaEJsQixNQUFNLENBQVUsR0FBRyxHQUFXLG9CQUFvQixDQUFDO0lBRTNDLGNBQWMsR0FBRyxLQUFLLElBQW1CLEVBQUU7UUFDakQsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9DLE1BQU0sV0FBVyxHQUFHLFdBQVcsSUFBSSxDQUFDLEtBQUssZUFBZSxDQUFDLEVBQUUsQ0FBQztRQUU1RCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLEVBQUUsQ0FDcEQsQ0FBQztRQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQztJQUVGLFlBQ2tCLFFBQXdCLEVBQUUsRUFDMUIsWUFBeUIsRUFBRTtRQUUzQyxLQUFLLEVBQUUsQ0FBQztRQUhRLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRzdDLENBQUM7SUFFRCxJQUFZLFVBQVU7UUFDcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE1BQU0sU0FBUyxH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