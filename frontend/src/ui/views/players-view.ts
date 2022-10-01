import PlayersTable from "../components/players_table";

export default class PlayersView extends HTMLElement {
  static readonly tag: string = "players-view";

  async connectedCallback(): Promise<void> {
    document.title = "RBGo | Jogadores";

    this.appendChild(new PlayersTable("Jogadores"));
  }
}
