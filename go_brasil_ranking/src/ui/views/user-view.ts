import Player from "../../models/player";

export default class PlayerView extends HTMLElement {
  static readonly tag: string = "player-view";

  constructor(public readonly player: Player) {
    super();
  }

  connectedCallback() {
    this.innerHTML += `
      <h1>Jogador</h1>
    `;
  }
}
