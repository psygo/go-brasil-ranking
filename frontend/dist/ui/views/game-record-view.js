"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const game_record_1 = require("../../models/game_record");
class GameRecordView extends HTMLElement {
    gameRecordRef;
    static tag = "game-record-view";
    constructor(gameRecordRef) {
        super();
        this.gameRecordRef = gameRecordRef;
    }
    getGameRecord = async () => {
        const response = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameRecords}/${this.gameRecordRef}`);
        const json = await response.json();
        this.gameRecord = json["data"]["gameRecord"];
    };
    async connectedCallback() {
        await this.getGameRecord();
        if (this.gameRecord) {
            document.title = `
        Partida | 
          ${this.gameRecord.blackPlayer.name} 
          vs 
          ${this.gameRecord.whitePlayer.name}
      `;
            this.setGameRecordPage();
        }
    }
    setGameRecordPage = () => {
        this.innerHTML += `
      <h2>
        ${this.gameRecord.blackPlayer.name}
        vs 
        ${this.gameRecord.whitePlayer.name}
      </h2>

      <h3>${(0, game_record_1.resultString)(this.gameRecord.result)}</h3>

      <div id="glift"></div>
    `;
        this.addSgfDiagram();
    };
    addSgfDiagram = () => {
        const gliftScript = document.createElement("script");
        gliftScript.type = "text/javascript";
        gliftScript.src = "/public/glift_1_1_2.min.js";
        gliftScript.toggleAttribute("async");
        gliftScript.onload = () => {
            try {
                glift.create({
                    divId: "glift",
                    sgf: {
                        sgfString: `${this.gameRecord.sgf}`,
                    },
                    display: {
                        theme: "DEPTH",
                        goBoardBackground: "images/purty_wood.png",
                    },
                });
            }
            catch (e) {
                console.log(e);
            }
        };
        document.head.appendChild(gliftScript);
    };
}
exports.default = GameRecordView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1yZWNvcmQtdmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS92aWV3cy9nYW1lLXJlY29yZC12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBQ25ELGlEQUFpRDtBQUdqRCwwREFBb0U7QUFJcEUsTUFBcUIsY0FBZSxTQUFRLFdBQVc7SUFLekI7SUFKNUIsTUFBTSxDQUFVLEdBQUcsR0FBVyxrQkFBa0IsQ0FBQztJQUlqRCxZQUE0QixhQUEwQjtRQUNwRCxLQUFLLEVBQUUsQ0FBQztRQURrQixrQkFBYSxHQUFiLGFBQWEsQ0FBYTtJQUV0RCxDQUFDO0lBRU8sYUFBYSxHQUFHLEtBQUssSUFBbUIsRUFBRTtRQUNoRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIsR0FBRyxpQkFBQyxDQUFDLE1BQU0sR0FBRyxrQkFBUyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQzVELENBQUM7UUFDRixNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUM7SUFFRixLQUFLLENBQUMsaUJBQWlCO1FBQ3JCLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixRQUFRLENBQUMsS0FBSyxHQUFHOztZQUVYLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBWSxDQUFDLElBQUk7O1lBRWpDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBWSxDQUFDLElBQUk7T0FDdEMsQ0FBQztZQUVGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVPLGlCQUFpQixHQUFHLEdBQVMsRUFBRTtRQUNyQyxJQUFJLENBQUMsU0FBUyxJQUFhOztVQUVyQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVksQ0FBQyxJQUFJOztVQUVqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVksQ0FBQyxJQUFJOzs7WUFHL0IsSUFBQSwwQkFBWSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDOzs7S0FHM0MsQ0FBQztRQU1GLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUM7SUFFTSxhQUFhLEdBQUcsR0FBUyxFQUFFO1FBQ2pDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsV0FBVyxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUNyQyxXQUFXLENBQUMsR0FBRyxHQUFHLDRCQUE0QixDQUFDO1FBQy9DLFdBQVcsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSTtnQkFDRixLQUFLLENBQUMsTUFBTSxDQUFDO29CQUNYLEtBQUssRUFBRSxPQUFPO29CQUNkLEdBQUcsRUFBRTt3QkFDSCxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVyxDQUFDLEdBQUcsRUFBRTtxQkFDckM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLEtBQUssRUFBRSxPQUFPO3dCQUNkLGlCQUFpQixFQUFFLHVCQUF1QjtxQkFDM0M7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDOztBQTVFSixpQ0E2RUMifQ==