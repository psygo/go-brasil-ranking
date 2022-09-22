import GameEventsTable from "../components/game_events_table";
import GameRecordsTable from "../components/game_records_table";
import PlayersTable from "../components/players_table";

export default class HomeView extends HTMLElement {
  static readonly tag: string = "home-view";

  async connectedCallback() {
    document.title = "Ranking Brasileiro de Go";

    this.append(
      new GameRecordsTable(),
      new PlayersTable(),
      new GameEventsTable()
    );
  }
}
