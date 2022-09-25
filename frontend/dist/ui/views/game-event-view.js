"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const game_event_1 = require("../../models/game_event");
const date_utils_1 = require("../../infra/date_utils");
class GameEventView extends HTMLElement {
    gameEventRef;
    static tag = "game-event-view";
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
      <h2>${this.gameEvent.name}</h2>
    `;
        if (this.gameEvent.type === game_event_1.GameEventTypes.tournament) {
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
        else if (this.gameEvent.type === game_event_1.GameEventTypes.league) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1ldmVudC12aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL3ZpZXdzL2dhbWUtZXZlbnQtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFtRDtBQUNuRCxpREFBaUQ7QUFHakQsd0RBSWlDO0FBQ2pDLHVEQUFtRDtBQUVuRCxNQUFxQixhQUFjLFNBQVEsV0FBVztJQUt4QjtJQUo1QixNQUFNLENBQVUsR0FBRyxHQUFXLGlCQUFpQixDQUFDO0lBSWhELFlBQTRCLFlBQXlCO1FBQ25ELEtBQUssRUFBRSxDQUFDO1FBRGtCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBRXJELENBQUM7SUFFTyxZQUFZLEdBQUcsS0FBSyxJQUFtQixFQUFFO1FBQy9DLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUMxQixHQUFHLGlCQUFDLENBQUMsTUFBTSxHQUFHLGtCQUFTLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FDMUQsQ0FBQztRQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQztJQUVGLEtBQUssQ0FBQyxpQkFBaUI7UUFDckIsTUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsWUFBWSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRW5ELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBSXpCO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQixHQUFHLEdBQVMsRUFBRTtRQUNwQyxJQUFJLENBQUMsU0FBUyxJQUFhO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSTtLQUMxQixDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSywyQkFBYyxDQUFDLFVBQVUsRUFBRTtZQUNyRCxJQUFJLENBQUMsU0FBUyxJQUFhOztPQUUxQixDQUFDO1lBRUYsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFFbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxJQUFhO2VBQ3BCLHNCQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztTQUNoQyxDQUFDO2FBQ0g7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssMkJBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDeEQsTUFBTSxRQUFRLEdBQUcsc0JBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksT0FBTyxDQUFDO1lBQ1osSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Z0JBQUUsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFdkUsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLHNCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFdEUsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQWE7OEJBQ2IsUUFBUTsyQkFDWCxnQkFBZ0I7T0FDcEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxDQUFDOztBQTVESixnQ0E2REMifQ==