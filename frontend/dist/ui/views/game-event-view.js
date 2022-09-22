"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const game_event_1 = require("../../models/game_event");
const date_utils_1 = require("../../infra/date_utils");
class GameEventView extends HTMLElement {
    gameEventRef;
    static tag = "game-event-view";
    gameEvent;
    constructor(gameEventRef) {
        super();
        this.gameEventRef = gameEventRef;
    }
    getGameEvent = async () => {
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameEvents}/${this.gameEventRef}`);
        const json = await response.json();
        this.gameEvent = json["data"]["gameEvent"];
    };
    async connectedCallback() {
        await this.getGameEvent();
        if (this.gameEvent) {
            document.title = `Evento | ${this.gameEvent.name}`;
            this.setGameEventPage();
        }
    }
    setGameEventPage = () => {
        this.innerHTML += `
      <h2>${this.gameEvent?.name}</h2>
    `;
        if (this.gameEvent?.type === game_event_1.GameEventTypes.tournament) {
            this.innerHTML += `
        <h4>Dias</h4>
      `;
            const dates = this.gameEvent.dates;
            for (let i = 0; i < dates.length; i++) {
                const date = new Date(dates[i]);
                this.innerHTML += `
          <p>${date_utils_1.DateUtils.formatDate(date)}</p>
        `;
            }
        }
        else if (this.gameEvent?.type === game_event_1.GameEventTypes.league) {
            const dateInit = date_utils_1.DateUtils.formatDate(new Date(this.gameEvent.dateInit));
            let dateEnd;
            if (this.gameEvent.dateEnd)
                dateEnd = new Date(this.gameEvent.dateEnd);
            const dateEndFormatted = dateEnd ? date_utils_1.DateUtils.formatDate(dateEnd) : "";
            dateEnd = this.innerHTML += `
        <h4>Data de Início: ${dateInit}</h4>
        <h4>Data de Fim: ${dateEndFormatted}</h4>
      `;
        }
    };
}
exports.default = GameEventView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1ldmVudC12aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL3ZpZXdzL2dhbWUtZXZlbnQtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFtRDtBQUNuRCxpREFBaUQ7QUFHakQsd0RBSWlDO0FBQ2pDLHVEQUFtRDtBQUVuRCxNQUFxQixhQUFjLFNBQVEsV0FBVztJQUt4QjtJQUo1QixNQUFNLENBQVUsR0FBRyxHQUFXLGlCQUFpQixDQUFDO0lBRXhDLFNBQVMsQ0FBeUM7SUFFMUQsWUFBNEIsWUFBeUI7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFEa0IsaUJBQVksR0FBWixZQUFZLENBQWE7SUFFckQsQ0FBQztJQUVPLFlBQVksR0FBRyxLQUFLLElBQW1CLEVBQUU7UUFDL0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLEdBQUcsaUJBQUMsQ0FBQyxNQUFNLEdBQUcsa0JBQVMsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUMxRCxDQUFDO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDO0lBRUYsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsUUFBUSxDQUFDLEtBQUssR0FBRyxZQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFbkQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRU8sZ0JBQWdCLEdBQUcsR0FBUyxFQUFFO1FBQ3BDLElBQUksQ0FBQyxTQUFTLElBQWE7WUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJO0tBQzNCLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxLQUFLLDJCQUFjLENBQUMsVUFBVSxFQUFFO1lBQ3RELElBQUksQ0FBQyxTQUFTLElBQWE7O09BRTFCLENBQUM7WUFFRixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUVuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxTQUFTLElBQWE7ZUFDcEIsc0JBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1NBQ2hDLENBQUM7YUFDSDtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksS0FBSywyQkFBYyxDQUFDLE1BQU0sRUFBRTtZQUN6RCxNQUFNLFFBQVEsR0FBRyxzQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDekUsSUFBSSxPQUFPLENBQUM7WUFDWixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTztnQkFBRSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV2RSxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsc0JBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUV0RSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBYTs4QkFDYixRQUFROzJCQUNYLGdCQUFnQjtPQUNwQyxDQUFDO1NBQ0g7SUFDSCxDQUFDLENBQUM7O0FBekRKLGdDQTBEQyJ9