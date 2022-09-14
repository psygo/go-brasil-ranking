import { apiUrl } from "../../infra/setup";
import Elo from "../../models/elo";
import { FirebaseRef } from "../../models/firebase_ref";
import { brStateUpperCase, Player } from "../../models/player";

export default class PlayerView extends HTMLElement {
  static readonly tag: string = "player-view";

  constructor(public readonly ref: FirebaseRef) {
    super();
  }

  private getPlayers = async (): Promise<Player> => {
    const response = await fetch(`${apiUrl}/players/${this.ref}`);
    const json = await response.json();
    return json["data"]["player"];
  };

  async connectedCallback() {
    const player = await this.getPlayers();

    document.title = `RBG | ${player.name}`;

    this.setPlayersPage(player);
  }

  setPlayersPage = (player: Player): void => {
    const countryFlags = player.countries
      .map((c) => c.flag.toString())
      .reduce((pflag, cflag) => pflag + " " + cflag);
    const elo = new Elo(player.elo);

    this.innerHTML += `
      <h2>${player.name} ${countryFlags}</h2>
      <h3>${elo.num} | ${elo.danKyuLevel(true)}</h3>
    `;

    const brazil = player.countries.find((c) => c.name === "Brazil");

    if (brazil) {
      const state = brStateUpperCase(brazil.state!);

      this.innerHTML += `
        <h3>${brazil.city} - ${state}</h3>
      `;
    }
  };
}
