export default class HomeView extends HTMLElement {
  static readonly tag: string = "home-view";

  private static readonly html: string = `
    <h1>Ranking Nacional Brasileiro</h1>
  `;

  connectedCallback() {
    this.innerHTML = HomeView.html;
  }
}
