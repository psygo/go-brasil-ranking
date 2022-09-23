"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const game_event_1 = require("../../models/game_event");
class GameEventsTable extends HTMLElement {
    limit;
    static tag = "game-events-table";
    getGameEvents = async () => {
        const queryString = `?limite=${this.limit}`;
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameEvents}${queryString}`);
        const json = await response.json();
        return json["data"]["gameEvents"];
    };
    constructor(limit = 20) {
        super();
        this.limit = limit;
    }
    async connectedCallback() {
        const gameEvents = await this.getGameEvents();
        this.innerHTML += `
      <h2>
        <route-link href="${router_1.RouteEnum.gameEvents}">
          Eventos
        </route-link>
      </h2>
      
      <div class="game-events-table-legend">
        <span>#</span>
        <span class="align-left">Nome</span>
        <span>Total de Partidas</span>
      </div>
    `;
        this.setPlayersTable(gameEvents);
    }
    setPlayersTable = (gameEvents) => {
        for (let i = 0; i < gameEvents.length; i++) {
            const gameEvent = gameEvents[i];
            if ((0, game_event_1.isTournamentOrLeague)(gameEvent))
                this.innerHTML += `
          <div class="game-event-card" id="${gameEvent.firebaseRef}">
            <route-link href="${router_1.RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
              <span>${i + 1}</span>

              <route-link 
                href="${router_1.RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
                  <span class="align-left">${gameEvent.name}</span>
              </route-link>
              
              <span>${gameEvent.gamesTotal}</span>
            </route-link>
          </div>
        `;
        }
    };
}
exports.default = GameEventsTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZV9ldmVudHNfdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvY29tcG9uZW50cy9nYW1lX2V2ZW50c190YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFtRDtBQUVuRCxpREFBaUQ7QUFFakQsd0RBQTBFO0FBRTFFLE1BQXFCLGVBQWdCLFNBQVEsV0FBVztJQVkxQjtJQVg1QixNQUFNLENBQVUsR0FBRyxHQUFXLG1CQUFtQixDQUFDO0lBRTFDLGFBQWEsR0FBRyxLQUFLLElBQTBCLEVBQUU7UUFDdkQsTUFBTSxXQUFXLEdBQUcsV0FBVyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLEdBQUcsaUJBQUMsQ0FBQyxNQUFNLEdBQUcsa0JBQVMsQ0FBQyxVQUFVLEdBQUcsV0FBVyxFQUFFLENBQ25ELENBQUM7UUFDRixNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUM7SUFFRixZQUE0QixRQUF3QixFQUFFO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBRGtCLFVBQUssR0FBTCxLQUFLLENBQXFCO0lBRXRELENBQUM7SUFFRCxLQUFLLENBQUMsaUJBQWlCO1FBQ3JCLE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTlDLElBQUksQ0FBQyxTQUFTLElBQWE7OzRCQUVILGtCQUFTLENBQUMsVUFBVTs7Ozs7Ozs7OztLQVUzQyxDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU8sZUFBZSxHQUFHLENBQUMsVUFBdUIsRUFBUSxFQUFFO1FBQzFELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLElBQUEsaUNBQW9CLEVBQUMsU0FBUyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsU0FBUyxJQUFhOzZDQUNVLFNBQVMsQ0FBQyxXQUFXO2dDQUNsQyxrQkFBUyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsV0FBVztzQkFDdkQsQ0FBQyxHQUFHLENBQUM7Ozt3QkFHSCxrQkFBUyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsV0FBVzs2Q0FDeEIsU0FBUyxDQUFDLElBQUk7OztzQkFHckMsU0FBUyxDQUFDLFVBQVU7OztTQUdqQyxDQUFDO1NBQ0w7SUFDSCxDQUFDLENBQUM7O0FBdkRKLGtDQXdEQyJ9