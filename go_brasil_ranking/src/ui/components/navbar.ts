export default class Navbar extends HTMLElement {
  static readonly tag: string = "nav-bar";

  private static readonly html: string = `
    <nav>
      <route-link href="/">Ranking Brasileiro de Go</route-link>
      <route-link href="/game-records">Partidas</route-link>
      <route-link href="/players">Jogadores</route-link>
      <route-link href="/about">Sobre</route-link>
    <nav>
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = Navbar.html;
  }
}
