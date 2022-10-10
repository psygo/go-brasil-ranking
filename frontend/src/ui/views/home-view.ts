import PlayersTable from "../components/players_table";
import GameEventsTable from "../components/game_events_table";
import GameRecordsTable from "../components/game_records_table";

export default class HomeView extends HTMLElement {
  static readonly tag: string = "home-view";

  async connectedCallback(): Promise<void> {
    document.title = "Ranking Brasileiro de Go";

    this.append(
      new PlayersTable("Os 10 Melhores Brasileiros", true),
      new GameEventsTable("Eventos Recentes"),
      new GameRecordsTable("Partidas Recentes")
    );
  }
}
