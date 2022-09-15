import GameRecordsTable from "../components/game_records_table";

export default class GameRecordsView extends HTMLElement {
  static readonly tag: string = "game-records-view";

  async connectedCallback() {
    document.title = "RBGo - Partidas";

    this.appendChild(new GameRecordsTable("max"));
  }
}
