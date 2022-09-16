export default class AboutView extends HTMLElement {
  static readonly tag: string = "about-view";

  async connectedCallback() {
    document.title = "RBGo | Sobre";

    this.setContent();
    this.numberFaqQuestions();
  }

  private static readonly moderatorEmail: string = "moderador@rbgo.com.br";
  private static readonly repoAddress: string =
    "https://github.com/psygo/ranking-brasileiro-de-go";

  private get moderatorLinkString(): string {
    return `<a href="mailto:${AboutView.moderatorEmail}">moderador</a>`;
  }

  private setContent = (): void => {
    this.innerHTML = `
      <h1>Sobre o Ranking Brasileiro de Go (RBGo)</h1>
      
      <h2>Como faço para ser incluído no RBGo?</h2>
      
        <p>
           Mande um email para o ${this.moderatorLinkString}
           com os seus dados:
        </p>

        <ul>
          <li>Nome completo</li>
          <li>Nível em um dos servidores conhecidos (KGS, OGS, Fox, Tygem, etc.)</li>
          <li>3 partidas recentes</li>
        </ul>

      <h2>Como adicionar uma partida ao Ranking Brasileiro de Go?</h2>
      
        <p>
          Após ter feito seu cadastro, mande uma mensagem com a sua partida
          para o ${this.moderatorLinkString} com os dados da partida e,
          preferencialmente, o arquivo SGF.
        </p>
      
      <h2>Quero ajudar a melhorar o RBGo. Por onde posso fazê-lo?</h2>
      
        <p>
          O RBGo é um projeto em código aberto, ou seja, a infraestrutura é
          inspecionável por qualquer um. Se você quiser e puder acrescentar ou
          melhorar alguma funcionalidade é só 
            <a href="${AboutView.repoAddress}">
              adicionar um <i>pull request</i> no Github
            </a>.
        </p>
    `;
  };

  private numberFaqQuestions = (): void => {
    const questions = this.querySelectorAll("h2");

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      question.innerHTML = `${i + 1}. ${question.innerHTML}`;
    }
  };
}
