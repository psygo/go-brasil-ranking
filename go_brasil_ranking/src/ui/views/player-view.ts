import { apiUrl } from "../../infra/setup";
import { FirebaseRef } from "../../models/firebase_ref";
import { Player } from "../../models/player";

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
    this.innerHTML += `
      <h1>Jogador</h1>
    `;

    await this.getPlayers();
  }
}
