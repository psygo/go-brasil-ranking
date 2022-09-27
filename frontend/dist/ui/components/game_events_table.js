"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const game_event_1 = require("../../models/game_event");
const date_utils_1 = require("../../infra/date_utils");
class GameEventsTable extends HTMLElement {
    title;
    limit;
    static tag = "game-events-table";
    getGameEvents = async () => {
        const queryString = `?limite=${this.limit}`;
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameEvents}${queryString}`);
        const json = await response.json();
        return json["data"]["gameEvents"];
    };
    constructor(title = "Eventos", limit = 20) {
        super();
        this.title = title;
        this.limit = limit;
    }
    async connectedCallback() {
        const gameEvents = await this.getGameEvents();
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
    `;
        this.setPlayersTable(gameEvents);
    }
    setPlayersTable = (gameEvents) => {
        const length = gameEvents.length;
        for (let i = 0; i < length; i++) {
            const gameEvent = gameEvents[i];
            if ((0, game_event_1.isTournamentOrLeague)(gameEvent)) {
                const firstDate = gameEvent.dates.length === 0
                    ? "&mdash;"
                    : date_utils_1.DateUtils.formatDate(new Date(gameEvent.dates[0]));
                let lastDate = gameEvent.dates.length === 1
                    ? "&mdash;"
                    : date_utils_1.DateUtils.formatDate(new Date(gameEvent.dates[gameEvent.dates.length - 1]));
                this.innerHTML += `
          <route-link
            class="game-event-card"
            id="${gameEvent.firebaseRef}"
            href="${router_1.RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
              <span>${length - i}</span>

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
        }
    };
}
exports.default = GameEventsTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZV9ldmVudHNfdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvY29tcG9uZW50cy9nYW1lX2V2ZW50c190YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFtRDtBQUVuRCxpREFBaUQ7QUFFakQsd0RBQTBFO0FBQzFFLHVEQUFtRDtBQUVuRCxNQUFxQixlQUFnQixTQUFRLFdBQVc7SUFhcEM7SUFDQTtJQWJsQixNQUFNLENBQVUsR0FBRyxHQUFXLG1CQUFtQixDQUFDO0lBRTFDLGFBQWEsR0FBRyxLQUFLLElBQTBCLEVBQUU7UUFDdkQsTUFBTSxXQUFXLEdBQUcsV0FBVyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLEdBQUcsaUJBQUMsQ0FBQyxNQUFNLEdBQUcsa0JBQVMsQ0FBQyxVQUFVLEdBQUcsV0FBVyxFQUFFLENBQ25ELENBQUM7UUFDRixNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUM7SUFFRixZQUNrQixRQUFnQixTQUFTLEVBQ3pCLFFBQXdCLEVBQUU7UUFFMUMsS0FBSyxFQUFFLENBQUM7UUFIUSxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFxQjtJQUc1QyxDQUFDO0lBRUQsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsU0FBUyxJQUFhOzs0QkFFSCxrQkFBUyxDQUFDLFVBQVU7WUFDcEMsSUFBSSxDQUFDLEtBQUs7Ozs7Ozs7Ozs7OztLQVlqQixDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU8sZUFBZSxHQUFHLENBQUMsVUFBdUIsRUFBUSxFQUFFO1FBQzFELE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFaEMsSUFBSSxJQUFBLGlDQUFvQixFQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNuQyxNQUFNLFNBQVMsR0FDYixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO29CQUMxQixDQUFDLENBQUMsU0FBUztvQkFDWCxDQUFDLENBQUMsc0JBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELElBQUksUUFBUSxHQUNWLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxTQUFTO29CQUNYLENBQUMsQ0FBQyxzQkFBUyxDQUFDLFVBQVUsQ0FDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUN0RCxDQUFDO2dCQUVSLElBQUksQ0FBQyxTQUFTLElBQWE7OztrQkFHakIsU0FBUyxDQUFDLFdBQVc7b0JBQ25CLGtCQUFTLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxXQUFXO3NCQUMzQyxNQUFNLEdBQUcsQ0FBQzs7O3dCQUdSLGtCQUFTLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxXQUFXOzZDQUN4QixTQUFTLENBQUMsSUFBSTs7O3NCQUdyQyxTQUFTLENBQUMsSUFBSTs7c0JBRWQsU0FBUyxDQUFDLFVBQVU7O3NCQUVwQixTQUFTOztzQkFFVCxRQUFROztTQUVyQixDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUMsQ0FBQzs7QUFsRkosa0NBbUZDIn0=