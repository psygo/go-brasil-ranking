"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../infra/globals");
class AboutView extends HTMLElement {
    static tag = "about-view";
    async connectedCallback() {
        document.title = "RBGo | Sobre";
        this.setContent();
        this.numberFaqQuestions();
    }
    static moderatorEmail = "moderador@rbgo.com.br";
    get moderatorLinkString() {
        return `
      <a href="mailto:${AboutView.moderatorEmail}">moderador</a>
    `;
    }
    setContent = () => {
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
            <a href="${globals_1.Globals.repoUrl}">
              adicionar um <i>pull request</i> no Github
            </a>.
        </p>
    `;
    };
    numberFaqQuestions = () => {
        const questions = this.querySelectorAll("h2");
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            question.innerHTML = `${i + 1}. ${question.innerHTML}`;
        }
    };
}
exports.default = AboutView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQtdmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS92aWV3cy9hYm91dC12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBRW5ELE1BQXFCLFNBQVUsU0FBUSxXQUFXO0lBQ2hELE1BQU0sQ0FBVSxHQUFHLEdBQVcsWUFBWSxDQUFDO0lBRTNDLEtBQUssQ0FBQyxpQkFBaUI7UUFDckIsUUFBUSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7UUFFaEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyxNQUFNLENBQVUsY0FBYyxHQUFXLHVCQUF1QixDQUFDO0lBRXpFLElBQVksbUJBQW1CO1FBQzdCLE9BQWdCO3dCQUNJLFNBQVMsQ0FBQyxjQUFjO0tBQzNDLENBQUM7SUFDSixDQUFDO0lBRU8sVUFBVSxHQUFHLEdBQVMsRUFBRTtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFZOzs7Ozs7bUNBTUssSUFBSSxDQUFDLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7bUJBY3hDLElBQUksQ0FBQyxtQkFBbUI7Ozs7Ozs7Ozs7dUJBVXBCLGlCQUFDLENBQUMsT0FBTzs7OztLQUkzQixDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRU0sa0JBQWtCLEdBQUcsR0FBUyxFQUFFO1FBQ3RDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsUUFBUSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQyxDQUFDOztBQS9ESiw0QkFnRUMifQ==