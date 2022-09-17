import { apiUrl } from "../../infra/setup";
import { RouteEnum } from "../../routing/router";

import { FirebaseRef } from "../../models/firebase_ref";
import { GameRecord, resultString } from "../../models/game_record";

export default class GameRecordView extends HTMLElement {
  static readonly tag: string = "game-record-view";

  private gameRecord?: GameRecord;

  constructor(public readonly gameRecordRef: FirebaseRef) {
    super();
  }

  private getGameRecord = async (): Promise<void> => {
    const response = await fetch(
      `${apiUrl}${RouteEnum.gameRecords}/${this.gameRecordRef}`
    );
    const json = await response.json();
    this.gameRecord = json["data"]["gameRecord"];
  };

  async connectedCallback() {
    await this.getGameRecord();

    if (this.gameRecord) {
      document.title = `
        Partida | ${this.gameRecord.blackName} vs ${this.gameRecord.whiteName}
      `;

      this.setGameRecordPage();
    }
  }

  private setGameRecordPage = (): void => {
    this.innerHTML += `
      <h2>${this.gameRecord!.blackName} vs ${this.gameRecord!.whiteName}</h2>
      <h3>${resultString(this.gameRecord!.result)}</h3>
      <div id="glift_display1" style="width: 500px; height: 500px;"></div>
    `;

    this.addSgfDiagram();
  };

  private addSgfDiagram = (): void => {
    const gliftScript = document.createElement("script");
    gliftScript.type = "text/javascript";
    gliftScript.src = "/public/glift_1_1_2.min.js";
    gliftScript.setAttribute("async", "");

    gliftScript.onload = () => {
      const s = document.createElement("script");
      s.innerHTML = `
        gliftWidget = glift.create({
          divId: "glift_display1",
          sgf: {
            sgfString: \`${this.gameRecord!.sgf}\`,
          },
          display: {
            theme: "DEPTH",
            goBoardBackground: "images/purty_wood.png",
            disableZoomForMobile: true,
          },
        });
      `;
      this.appendChild(s);
    };

    document.head.appendChild(gliftScript);
  };
}
