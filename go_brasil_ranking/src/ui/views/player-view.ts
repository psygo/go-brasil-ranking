export default class PlayerView extends HTMLElement {
  static readonly tag: string = "player-view";

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML += `
      <h1>Jogador</h1>
    `;
  }
}
