import { apiUrl } from "../../infra/setup";
import Elo from "../../models/elo";
import { FirebaseRef } from "../../models/firebase_ref";
import { getAllFlags, Player } from "../../models/player";
import GameRecordsTable from "../components/game_records_table";

export default class PlayerView extends HTMLElement {
  static readonly tag: string = "player-view";

  constructor(public readonly playerRef: FirebaseRef) {
    super();
  }

  private getPlayers = async (): Promise<Player> => {
    const response = await fetch(`${apiUrl}/players/${this.playerRef}`);
    const json = await response.json();
    return json["data"]["player"];
  };

  async connectedCallback() {
    const player = await this.getPlayers();

    document.title = `Jogador | ${player.name}`;

    this.setPlayersPage(player);

    this.appendChild(new GameRecordsTable("max", this.playerRef));
  }

  private setPlayersPage = (player: Player): void => {
    const countryFlags = getAllFlags(player.countries);
    const elo = new Elo(player.elo);

    this.innerHTML += `
      <h1>${player.name} ${countryFlags}</h1>
      <hr/>

      <h3>${elo.num} | ${elo.danKyuLevel(true)}</h3>
      <hr/>
    `;

    const brazil = player.countries.find((c) => c.name === "Brazil");

    if (brazil) {
      // const state = brStateUpperCase(brazil.state!);
      // this.innerHTML += `
      //   <h3>${brazil.city} - ${state}</h3>
      // `;
    }
  };
}
