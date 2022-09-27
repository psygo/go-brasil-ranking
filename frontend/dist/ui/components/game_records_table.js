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
    playerRef;
    static tag = "game-records-table";
    getGameRecords = async () => {
        const queryString = `?de=${this.startAfter}` + `&jogadorRef=${this.playerRef}`;
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameRecords}${queryString}`);
        const json = await response.json();
        this.gameRecords.push(...json["data"]["gameRecords"]);
    };
    gameRecords = [];
    startAfter = 0;
    constructor(title = "Partidas", playerRef = "") {
        super();
        this.title = title;
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

        <div id="game-records-table-legend">
          <span>#</span>
          <span>Foto Preto</span>
          <span class="align-left">Preto</span>
          <span>Compen-sação</span>
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
        
        <div id="game-records-table-cards"></div>

        <div id="game-records-table-pagination"></div>
      `;
            this.setCards();
            this.setPagination();
        }
    }
    setPagination = () => {
        const paginationDiv = this.querySelector("#game-records-table-pagination");
        paginationDiv.innerHTML += `
      <button class="next-page">+ ${globals_1.Globals.queryLimit} Partidas</button>
    `;
        const nextPageButton = this.querySelector("button.next-page");
        nextPageButton.onclick = async () => {
            this.startAfter += globals_1.Globals.queryLimit;
            await this.getGameRecords();
            this.setCards();
        };
    };
    setCards = () => {
        const cardsDiv = this.querySelector("#game-records-table-cards");
        const length = this.gameRecords.length;
        for (let i = this.startAfter; i < length; i++) {
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
            const handicap = gameRecord.handicap ? gameRecord.handicap : "&mdash;";
            cardsDiv.innerHTML += `
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
            
            <span>${handicap}</span>

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZV9yZWNvcmRzX3RhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL2NvbXBvbmVudHMvZ2FtZV9yZWNvcmRzX3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBQ25ELHVEQUFtRDtBQUNuRCxpREFBaUQ7QUFHakQsMERBQTJFO0FBQzNFLHdEQUErRDtBQUMvRCwwQ0FBc0M7QUFFdEMsTUFBcUIsZ0JBQWlCLFNBQVEsV0FBVztJQW1CckM7SUFDQTtJQW5CbEIsTUFBTSxDQUFVLEdBQUcsR0FBVyxvQkFBb0IsQ0FBQztJQUUzQyxjQUFjLEdBQUcsS0FBSyxJQUFtQixFQUFFO1FBQ2pELE1BQU0sV0FBVyxHQUNmLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLGVBQWUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRTdELE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUMxQixHQUFHLGlCQUFDLENBQUMsTUFBTSxHQUFHLGtCQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsRUFBRSxDQUNwRCxDQUFDO1FBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUM7SUFFZSxXQUFXLEdBQWlCLEVBQUUsQ0FBQztJQUN4QyxVQUFVLEdBQVcsQ0FBQyxDQUFDO0lBRS9CLFlBQ2tCLFFBQWdCLFVBQVUsRUFDMUIsWUFBeUIsRUFBRTtRQUUzQyxLQUFLLEVBQUUsQ0FBQztRQUhRLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRzdDLENBQUM7SUFFRCxJQUFZLFVBQVU7UUFDcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lB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