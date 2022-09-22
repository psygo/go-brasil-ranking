import { Globals as g } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";

import { FirebaseRef } from "../../models/firebase_models";
import { GameRecord, resultString } from "../../models/game_record";

declare let glift: any;

export default class GameRecordView extends HTMLElement {
  static readonly tag: string = "game-record-view";

  private gameRecord?: GameRecord;

  constructor(public readonly gameRecordRef: FirebaseRef) {
    super();
  }

  private getGameRecord = async (): Promise<void> => {
    const response = await fetch(
      `${g.apiUrl}${RouteEnum.gameRecords}/${this.gameRecordRef}`
    );
    const json = await response.json();
    this.gameRecord = json["data"]["gameRecord"];
  };

  async connectedCallback() {
    await this.getGameRecord();

    if (this.gameRecord) {
      document.title = `
        Partida | 
          ${this.gameRecord.blackPlayer!.name} 
          vs 
          ${this.gameRecord.whitePlayer!.name}
      `;

      this.setGameRecordPage();
    }
  }

  private setGameRecordPage = (): void => {
    this.innerHTML += /*html*/ `
      <h2>
        ${this.gameRecord!.blackPlayer!.name}
        vs 
        ${this.gameRecord!.whitePlayer!.name}
      </h2>

      <h3>${resultString(this.gameRecord!.result)}</h3>

      <div id="glift_display1" style="width: 500px; height: 500px;"></div>
    `;

    // TODO2: Add button for downloading the SGF

    this.addSgfDiagram();
  };

  private addSgfDiagram = (): void => {
    const gliftScript = document.createElement("script");
    gliftScript.type = "text/javascript";
    gliftScript.src = "/public/glift_1_1_2.min.js";
    gliftScript.setAttribute("async", "");

    gliftScript.onload = () => {
      glift.create({
        divId: "glift_display1",
        sgf: {
          sgfString: `${this.gameRecord!.sgf}`,
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
