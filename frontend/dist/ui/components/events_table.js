"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const game_event_1 = require("../../models/game_event");
class GameEventsTable extends HTMLElement {
    limit;
    static tag = "game-events-table";
    getGameEvents = async () => {
        const queryString = `?limit=${this.limit}`;
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
      <h2>Jogadores</h2>
      
      <div class="game-events-table-legend">
        <span>#</span>
        <span>Nome</span>
        <span>País</span>
        <span>Elo</span>
        <div>
          <span>Dan</span>
          <span>Kyu</span>
        </div>
      </div>
    `;
        this.setPlayersTable(gameEvents);
    }
    setPlayersTable = (gameEvents) => {
        for (let i = 0; i < gameEvents.length; i++) {
            const gameEvent = gameEvents[i];
            if (gameEvent.type === game_event_1.GameEventTypes.tournament ||
                gameEvent.type === game_event_1.GameEventTypes.league)
                this.innerHTML += `
        <div class="gameEvent-card" id="${gameEvent.firebaseRef}">
          <route-link href="${router_1.RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
            <span>${i + 1}</span>

            <route-link href="${router_1.RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
              <span>${gameEvent.name}</span>
            </route-link>
          </route-link>
        </div>
      `;
        }
    };
}
exports.default = GameEventsTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzX3RhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL2NvbXBvbmVudHMvZXZlbnRzX3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBRW5ELGlEQUFpRDtBQUVqRCx3REFBb0U7QUFFcEUsTUFBcUIsZUFBZ0IsU0FBUSxXQUFXO0lBWTFCO0lBWDVCLE1BQU0sQ0FBVSxHQUFHLEdBQVcsbUJBQW1CLENBQUM7SUFFMUMsYUFBYSxHQUFHLEtBQUssSUFBMEIsRUFBRTtRQUN2RCxNQUFNLFdBQVcsR0FBRyxVQUFVLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLFVBQVUsR0FBRyxXQUFXLEVBQUUsQ0FDbkQsQ0FBQztRQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQztJQUVGLFlBQTRCLFFBQXdCLEVBQUU7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFEa0IsVUFBSyxHQUFMLEtBQUssQ0FBcUI7SUFFdEQsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUI7UUFDckIsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLFNBQVMsSUFBYTs7Ozs7Ozs7Ozs7OztLQWExQixDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU8sZUFBZSxHQUFHLENBQUMsVUFBdUIsRUFBUSxFQUFFO1FBQzFELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUNFLFNBQVMsQ0FBQyxJQUFJLEtBQUssMkJBQWMsQ0FBQyxVQUFVO2dCQUM1QyxTQUFTLENBQUMsSUFBSSxLQUFLLDJCQUFjLENBQUMsTUFBTTtnQkFFeEMsSUFBSSxDQUFDLFNBQVMsSUFBYTswQ0FDTyxTQUFTLENBQUMsV0FBVzs4QkFDakMsa0JBQVMsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLFdBQVc7b0JBQ3ZELENBQUMsR0FBRyxDQUFDOztnQ0FFTyxrQkFBUyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsV0FBVztzQkFDdkQsU0FBUyxDQUFDLElBQUk7Ozs7T0FJN0IsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxDQUFDOztBQXhESixrQ0F5REMifQ==