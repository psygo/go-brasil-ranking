"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const date_utils_1 = require("../../infra/date_utils");
const router_1 = require("../../routing/router");
const game_record_1 = require("../../models/game_record");
const game_event_1 = require("../../models/game_event");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZV9yZWNvcmRzX3RhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL2NvbXBvbmVudHMvZ2FtZV9yZWNvcmRzX3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBQ25ELHVEQUFtRDtBQUNuRCxpREFBaUQ7QUFHakQsMERBQTJFO0FBQzNFLHdEQUErRDtBQUUvRCxNQUFxQixnQkFBaUIsU0FBUSxXQUFXO0lBZ0JyQztJQUNBO0lBQ0E7SUFqQmxCLE1BQU0sQ0FBVSxHQUFHLEdBQVcsb0JBQW9CLENBQUM7SUFFM0MsY0FBYyxHQUFHLEtBQUssSUFBbUIsRUFBRTtRQUNqRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0MsTUFBTSxXQUFXLEdBQUcsV0FBVyxJQUFJLENBQUMsS0FBSyxlQUFlLENBQUMsRUFBRSxDQUFDO1FBRTVELE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUMxQixHQUFHLGlCQUFDLENBQUMsTUFBTSxHQUFHLGtCQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsRUFBRSxDQUNwRCxDQUFDO1FBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDO0lBRUYsWUFDa0IsUUFBZ0IsVUFBVSxFQUMxQixRQUF3QixFQUFFLEVBQzFCLFlBQXlCLEVBQUU7UUFFM0MsS0FBSyxFQUFFLENBQUM7UUFKUSxVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUc3QyxDQUFDO0lBRUQsSUFBWSxVQUFV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