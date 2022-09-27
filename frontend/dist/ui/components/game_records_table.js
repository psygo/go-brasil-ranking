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