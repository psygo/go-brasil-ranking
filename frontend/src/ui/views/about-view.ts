import { Globals as g } from "../../infra/globals";

export default class AboutView extends HTMLElement {
  static readonly tag: string = "about-view";

  async connectedCallback() {
    document.title = "RBGo | Sobre";

    this.setContent();
  }

  private static readonly moderatorEmail: string = "moderador@rbgo.com.br";

  private get moderatorLinkString(): string {
    return /*html*/ `
      <a href="mailto:${AboutView.moderatorEmail}">moderador</a>
    `;
  }

  private setContent = (): void => {
    this.innerHTML = /*html*/ `
      <h1>Sobre o Ranking Brasileiro de Go (RBGo)</h1>
      
      <ol>
        <li>
          <h2>Qual é o propósito do RBGo?</h2>

            <p>
              Proporcionar uma maneira de se registrar e arquivar partidas e a
              progressão do Go e dos jogadores brasileiros.
            </p>
        </li>
        <li>
          <h2>Como faço para ser incluído no RBGo?</h2>

            <p>
               Mande um email para o ${this.moderatorLinkString}
               com os seus dados:
            </p>

            <ul>
              <li>Nome completo</li>
              <li>Email (opcional, mas recomendado, vide o próximo item)</li>
              <li>Foto (opcional)</li>
              <li>
                País de Origem (opcionalmente, se brasileiro, estado e cidade)
              </li>
              <li>
                Nível em um dos servidores conhecidos (KGS, OGS, Fox, Tygem,
                etc.)
              </li>
              <li>3 partidas recentes</li>
            </ul>
        </li>
        <li>
          <h2>Como adicionar uma partida ao Ranking Brasileiro de Go?</h2>
          
            <p>
              Após ter feito seu cadastro, mande uma mensagem com a sua partida
              para o ${this.moderatorLinkString} com os dados da partida e,
              preferencialmente, o arquivo SGF.
            </p>

            <p>
              Há planos para que, no futuro, maneiras mais automatizadas de se
              adicionar partidas à plataforma sejam criadas, porém, de maneira
              geral, as partidas dentro desta plataforma seriam curadas por
              moderadores e não partidas quaisquer.
            </p>
              
            <p>
              Uma das funcionalidades extras do RBGo é a possibilidade de 
              registro de partidas "avulsas", isto é, não relacionadas a
              torneios, sejam elas online ou presenciais. Para tal, porém, é
              preciso que ambos os jogadores dêem aval via email, separadamente.
              (Em torneios, isto é desnecessário, devido à presença de juiz.)
            </p>
        </li>
        <li>
          <h2>Quero ajudar a melhorar o RBGo. Por onde posso fazê-lo?</h2>
          
            <p>
              O RBGo é um projeto em código aberto, ou seja, a infraestrutura é
              inspecionável por qualquer um. Se você quiser e puder acrescentar
              ou melhorar alguma funcionalidade é só 
                <a href="${g.repoUrl}">
                  adicionar um <i>pull request</i> no Github.
                </a>
              Caso você tenha alguma sugestão de funcionalidade mas não consiga
              ou não queira implementá-la, também é possível deixar a sugestão
              no repositório do Github.
            </p>
        </li>
        <li>
          <h2>Quem cuida do RBGo?</h2>
          
            <p>
              Se você quiser ajudar, toda ajuda é bem-vinda, mas, no momento,
              os integrantes da equipe são:
            </p>
              
            <ul>
              <li>Philippe Fanaro (desenvolvedor e moderador)</li>
            </ul>
        </li>
      </ol>
    `;
  };
}
