export default class UnknownView extends HTMLElement {
  static readonly tag: string = "unknown-view";

  connectedCallback() {
    this.innerHTML = /*html*/ `
      <h2>Infelizmente, esta página aparentemente não existe.</h2>
    `;
  }
}
