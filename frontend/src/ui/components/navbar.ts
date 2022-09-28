import { RouteEnum } from "../../routing/router";

export default class Navbar extends HTMLElement {
  static readonly tag: string = "nav-bar";

  private static readonly html: string = /*html*/ `
    <nav>
      <route-link href="${RouteEnum.home}">RBGo</route-link>
      <route-link href="${RouteEnum.gameRecords}">Partidas</route-link>
      <route-link href="${RouteEnum.players}">Jogadores</route-link>
      <route-link href="${RouteEnum.gameEvents}">Eventos</route-link>
      <route-link href="${RouteEnum.about}">Sobre</route-link>
    </nav>
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = Navbar.html;
  }
}
