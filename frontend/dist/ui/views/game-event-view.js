"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
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
    };
}
exports.default = GameEventView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1ldmVudC12aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL3ZpZXdzL2dhbWUtZXZlbnQtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFtRDtBQUNuRCxpREFBaUQ7QUFRakQsTUFBcUIsYUFBYyxTQUFRLFdBQVc7SUFLeEI7SUFKNUIsTUFBTSxDQUFVLEdBQUcsR0FBVyxpQkFBaUIsQ0FBQztJQUloRCxZQUE0QixZQUF5QjtRQUNuRCxLQUFLLEVBQUUsQ0FBQztRQURrQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUVyRCxDQUFDO0lBRU8sWUFBWSxHQUFHLEtBQUssSUFBbUIsRUFBRTtRQUMvQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQzFELENBQUM7UUFDRixNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUM7SUFFRixLQUFLLENBQUMsaUJBQWlCO1FBQ3JCLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixRQUFRLENBQUMsS0FBSyxHQUFHLFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVuRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUl6QjtJQUNILENBQUM7SUFFTyxnQkFBZ0IsR0FBRyxHQUFTLEVBQUU7UUFDcEMsSUFBSSxDQUFDLFNBQVMsSUFBYTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7S0FDMUIsQ0FBQztJQTJCSixDQUFDLENBQUM7O0FBNURKLGdDQTZEQyJ9