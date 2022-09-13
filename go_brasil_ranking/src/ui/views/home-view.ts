import { apiUrl } from "../../infra/setup";
import { Player } from "../../models/player";

export default class HomeView extends HTMLElement {
  static readonly tag: string = "home-view";

  private static readonly html: string = `
    <h1>Ranking Nacional Brasileiro</h1>
  `;

  async connectedCallback() {
    this.innerHTML = HomeView.html;

    const players = await this.getPlayers();

    for (const player of players) {
      this.innerHTML += `
        <div id="${player.firebaseRef}">
          <p>${player.name}</p>
        </div>
      `;
    }
  }

  getPlayers = async (): Promise<Player[]> => {
    const response = await fetch(`${apiUrl}/players`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    return json["data"]["players"];
  };
}
