import { apiUrl } from "../../infra/setup";
import { FirebaseRef } from "../../models/firebase_ref";
import { GameRecord } from "../../models/game_record";

export default class GameRecordView extends HTMLElement {
  static readonly tag: string = "game-record-view";

  constructor(public readonly gameRecordRef: FirebaseRef) {
    super();
  }

  private getGameRecord = async (): Promise<GameRecord> => {
    const response = await fetch(
      `${apiUrl}/game-records/${this.gameRecordRef}`
    );
    const json = await response.json();
    return json["data"]["gameRecord"];
  };

  async connectedCallback() {
    const gameRecord = await this.getGameRecord();

    console.log(this.gameRecordRef);
    console.log(gameRecord);

    document.title = `
      Partida | ${gameRecord.blackName} vs ${gameRecord.whiteName}
    `;

    this.setGameRecordPage(gameRecord);
  }

  setGameRecordPage = (gameRecord: GameRecord): void => {
    this.innerHTML += `
      <h2>${gameRecord.blackName} vs ${gameRecord.whiteName}</h2>
    `;
  };
}
