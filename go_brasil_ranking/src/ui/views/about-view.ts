export default class AboutView extends HTMLElement {
  static readonly tag: string = "about-view";

  async connectedCallback() {
    document.title = "RBGo | Sobre";

    this.setContent();
  }

  private setContent = (): void => {
    this.innerHTML = `
      <h1>Sobre o Ranking Brasileiro de Go (RBGo)</h1>

      <h2>1. Como adicionar uma partida ao Ranking Brasileiro de Go?</h2>
      
      <p>Mande uma mensagem com a sua partida para o moderador: </p>
      
      <h2>2. Quero ajudar a melhorar o RBGo. Por onde posso fazê-lo?
      
      <p></p>
    `;
  };
}
