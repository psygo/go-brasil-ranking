export default class UnknownView extends HTMLElement {
  static readonly tag: string = "unknown-view";

  connectedCallback(): void {
    this.innerHTML = /*html*/ `
      <h2>Infelizmente, esta página aparentemente não existe.</h2>
    `;
  }
}
