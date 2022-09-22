"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const game_record_1 = require("../../models/game_record");
class GameRecordView extends HTMLElement {
    gameRecordRef;
    static tag = "game-record-view";
    gameRecord;
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

      <div id="glift_display1" style="width: 500px; height: 500px;"></div>
    `;
        this.addSgfDiagram();
    };
    addSgfDiagram = () => {
        const gliftScript = document.createElement("script");
        gliftScript.type = "text/javascript";
        gliftScript.src = "/public/glift_1_1_2.min.js";
        gliftScript.setAttribute("async", "");
        gliftScript.onload = () => {
            glift.create({
                divId: "glift_display1",
                sgf: {
                    sgfString: `${this.gameRecord.sgf}`,
                },
                display: {
                    theme: "DEPTH",
                    goBoardBackground: "images/purty_wood.png",
                    disableZoomForMobile: true,
                },
            });
        };
        document.head.appendChild(gliftScript);
    };
}
exports.default = GameRecordView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1yZWNvcmQtdmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS92aWV3cy9nYW1lLXJlY29yZC12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBQ25ELGlEQUFpRDtBQUdqRCwwREFBb0U7QUFJcEUsTUFBcUIsY0FBZSxTQUFRLFdBQVc7SUFLekI7SUFKNUIsTUFBTSxDQUFVLEdBQUcsR0FBVyxrQkFBa0IsQ0FBQztJQUV6QyxVQUFVLENBQWM7SUFFaEMsWUFBNEIsYUFBMEI7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFEa0Isa0JBQWEsR0FBYixhQUFhLENBQWE7SUFFdEQsQ0FBQztJQUVPLGFBQWEsR0FBRyxLQUFLLElBQW1CLEVBQUU7UUFDaEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLEdBQUcsaUJBQUMsQ0FBQyxNQUFNLEdBQUcsa0JBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUM1RCxDQUFDO1FBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDO0lBRUYsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsUUFBUSxDQUFDLEtBQUssR0FBRzs7WUFFWCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVksQ0FBQyxJQUFJOztZQUVqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVksQ0FBQyxJQUFJO09BQ3RDLENBQUM7WUFFRixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFTyxpQkFBaUIsR0FBRyxHQUFTLEVBQUU7UUFDckMsSUFBSSxDQUFDLFNBQVMsSUFBYTs7VUFFckIsSUFBSSxDQUFDLFVBQVcsQ0FBQyxXQUFZLENBQUMsSUFBSTs7VUFFbEMsSUFBSSxDQUFDLFVBQVcsQ0FBQyxXQUFZLENBQUMsSUFBSTs7O1lBR2hDLElBQUEsMEJBQVksRUFBQyxJQUFJLENBQUMsVUFBVyxDQUFDLE1BQU0sQ0FBQzs7O0tBRzVDLENBQUM7UUFJRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDO0lBRU0sYUFBYSxHQUFHLEdBQVMsRUFBRTtRQUNqQyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELFdBQVcsQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDckMsV0FBVyxDQUFDLEdBQUcsR0FBRyw0QkFBNEIsQ0FBQztRQUMvQyxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV0QyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUN4QixLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNYLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLEdBQUcsRUFBRTtvQkFDSCxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVyxDQUFDLEdBQUcsRUFBRTtpQkFDckM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEtBQUssRUFBRSxPQUFPO29CQUNkLGlCQUFpQixFQUFFLHVCQUF1QjtvQkFDMUMsb0JBQW9CLEVBQUUsSUFBSTtpQkFDM0I7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUM7O0FBdkVKLGlDQXdFQyJ9