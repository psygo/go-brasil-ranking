"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const date_utils_1 = require("../../infra/date_utils");
class GameEventsTable extends HTMLElement {
    title;
    static tag = "game-events-table";
    getGameEvents = async () => {
        const queryString = `?de=${this.startAfter}`;
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameEvents}${queryString}`);
        const json = await response.json();
        this.gameEvents.push(...json["data"]["gameEvents"]);
    };
    gameEvents = [];
    startAfter = 0;
    constructor(title = "Eventos") {
        super();
        this.title = title;
    }
    async connectedCallback() {
        await this.getGameEvents();
        this.innerHTML += `
      <h2>
        <route-link href="${router_1.RouteEnum.gameEvents}">
          ${this.title}
        </route-link>
      </h2>
      
      <div class="game-events-table-legend">
        <span>#</span>
        <span class="align-left">Nome</span>
        <span>Tipo</span>
        <span>Total de Partidas</span>
        <span>Data de Início</span>
        <span>Data de Fim</span>
      </div>

      <div id="game-events-table-cards"></div>

      <div class="pagination"></div>
    `;
        this.setCards();
        this.setPagination();
    }
    setPagination = () => {
        const paginationDiv = this.querySelector(".pagination");
        paginationDiv.innerHTML += `
      <button class="next-page">+ ${globals_1.Globals.queryLimit} Eventos</button>
    `;
        const nextPageButton = this.querySelector("button.next-page");
        nextPageButton.onclick = async () => {
            this.startAfter += globals_1.Globals.queryLimit;
            await this.getGameEvents();
            this.setCards();
        };
    };
    setCards = () => {
        const cardsDiv = this.querySelector("#game-events-table-cards");
        const length = this.gameEvents.length;
        for (let i = this.startAfter; i < length; i++) {
            const gameEvent = this.gameEvents[i];
            const firstDate = gameEvent.dates.length === 0
                ? "&mdash;"
                : date_utils_1.DateUtils.formatDate(new Date(gameEvent.dates[0]));
            const lastDate = gameEvent.dates.length === 1
                ? "&mdash;"
                : date_utils_1.DateUtils.formatDate(new Date(gameEvent.dates[gameEvent.dates.length - 1]));
            cardsDiv.innerHTML += `
        <route-link
          class="game-event-card"
          id="${gameEvent.firebaseRef}"
          href="${router_1.RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
            <span>${i + 1}</span>

            <route-link 
              href="${router_1.RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
                <span class="align-left">${gameEvent.name}</span>
            </route-link>
            
            <span>${gameEvent.type}</span>
            
            <span>${gameEvent.gamesTotal}</span>
            
            <span>${firstDate}</span>

            <span>${lastDate}</span>
        </route-link>
      `;
        }
    };
}
exports.default = GameEventsTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZV9ldmVudHNfdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvY29tcG9uZW50cy9nYW1lX2V2ZW50c190YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFtRDtBQUVuRCxpREFBaUQ7QUFHakQsdURBQW1EO0FBRW5ELE1BQXFCLGVBQWdCLFNBQVEsV0FBVztJQWlCMUI7SUFoQjVCLE1BQU0sQ0FBVSxHQUFHLEdBQVcsbUJBQW1CLENBQUM7SUFFMUMsYUFBYSxHQUFHLEtBQUssSUFBbUIsRUFBRTtRQUNoRCxNQUFNLFdBQVcsR0FBRyxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUU3QyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLFVBQVUsR0FBRyxXQUFXLEVBQUUsQ0FDbkQsQ0FBQztRQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDO0lBRWUsVUFBVSxHQUF5QixFQUFFLENBQUM7SUFDL0MsVUFBVSxHQUFXLENBQUMsQ0FBQztJQUUvQixZQUE0QixRQUFnQixTQUFTO1FBQ25ELEtBQUssRUFBRSxDQUFDO1FBRGtCLFVBQUssR0FBTCxLQUFLLENBQW9CO0lBRXJELENBQUM7SUFFRCxLQUFLLENBQUMsaUJBQWlCO1FBQ3JCLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxTQUFTLElBQWE7OzRCQUVILGtCQUFTLENBQUMsVUFBVTtZQUNwQyxJQUFJLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztLQWdCakIsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLGFBQWEsR0FBRyxHQUFTLEVBQUU7UUFDakMsTUFBTSxhQUFhLEdBQW1CLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFFLENBQUM7UUFFekUsYUFBYSxDQUFDLFNBQVMsSUFBYTtvQ0FDSixpQkFBQyxDQUFDLFVBQVU7S0FDM0MsQ0FBQztRQUVGLE1BQU0sY0FBYyxHQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFFLENBQUM7UUFFMUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLElBQW1CLEVBQUU7WUFDakQsSUFBSSxDQUFDLFVBQVUsSUFBSSxpQkFBQyxDQUFDLFVBQVUsQ0FBQztZQUVoQyxNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUUzQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRU0sUUFBUSxHQUFHLEdBQVMsRUFBRTtRQUM1QixNQUFNLFFBQVEsR0FBbUIsSUFBSSxDQUFDLGFBQWEsQ0FDakQsMEJBQTBCLENBQzFCLENBQUM7UUFDSCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXJDLE1BQU0sU0FBUyxHQUNiLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxTQUFTO2dCQUNYLENBQUMsQ0FBQyxzQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxNQUFNLFFBQVEsR0FDWixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUMxQixDQUFDLENBQUMsU0FBUztnQkFDWCxDQUFDLENBQUMsc0JBQVMsQ0FBQyxVQUFVLENBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDdEQsQ0FBQztZQUVSLFFBQVEsQ0FBQyxTQUFTLElBQWE7OztnQkFHckIsU0FBUyxDQUFDLFdBQVc7a0JBQ25CLGtCQUFTLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxXQUFXO29CQUMzQyxDQUFDLEdBQUcsQ0FBQzs7O3NCQUdILGtCQUFTLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxXQUFXOzJDQUN4QixTQUFTLENBQUMsSUFBSTs7O29CQUdyQyxTQUFTLENBQUMsSUFBSTs7b0JBRWQsU0FBUyxDQUFDLFVBQVU7O29CQUVwQixTQUFTOztvQkFFVCxRQUFROztPQUVyQixDQUFDO1NBQ0g7SUFDSCxDQUFDLENBQUM7O0FBOUdKLGtDQStHQyJ9