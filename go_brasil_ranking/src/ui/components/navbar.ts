// TODO: Add this to Setup's Custom Elements Register
export default class Navbar extends HTMLElement {
  static readonly tag: string = "nav-bar";

  private static readonly html: string = `
    <nav>
      <route-link href="/">Ranking Brasileiro de Go</route-link>
      <route-link href="/partidas">Partidas</route-link>
      <route-link href="/jogadores">Jogadores</route-link>
    <nav>
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = Navbar.html;
  }
}
