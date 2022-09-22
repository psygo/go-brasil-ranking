import GameEventsTable from "../components/game_events_table";

export default class GameEventsView extends HTMLElement {
  static readonly tag: string = "game-events-view";

  async connectedCallback() {
    document.title = "RBGo | Eventos";

    this.appendChild(new GameEventsTable("max"));
  }
}
