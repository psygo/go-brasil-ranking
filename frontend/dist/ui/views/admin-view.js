"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("firebase/auth");
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
class AdminView extends HTMLElement {
    static tag = "admin-view";
    currentUser = null;
    constructor() {
        super();
        globals_1.Globals.setup.initAuth();
    }
    async connectedCallback() {
        document.title = "RBGo | Admin";
        (0, auth_1.onAuthStateChanged)(globals_1.Globals.setup.auth, (user) => {
            if (user) {
                this.currentUser = user;
                this.alreadySignedIn();
            }
            else
                this.signInForm();
        });
    }
    alreadySignedIn = () => {
        this.setAttribute("signed-in", "true");
        this.innerHTML = `
      <p>Você está logado como <span>${this.currentUser.email}</span></p>
      
      <button>Sair</button>
      
      <div id="add-new">
        <p>O que você gostaria de adicionar?</p>

        <ul>
          <li>
            <route-link href="${router_1.RouteEnum.gameRecords}/novo">
              Partida
            </route-link>
          </li>
          <li>
            <route-link href="${router_1.RouteEnum.players}/novo">
              Jogador
            </route-link>
          </li>
          <li>
            <route-link href="${router_1.RouteEnum.gameEvents}/novo">
              Evento
            </route-link>
          </li>
        </ul>
      </div>
    `;
        const button = this.querySelector("button");
        button.onclick = async (e) => {
            e.preventDefault();
            await (0, auth_1.signOut)(globals_1.Globals.setup.auth);
        };
    };
    signInForm = () => {
        this.setAttribute("signed-in", "false");
        this.innerHTML = `
      <form>
        <fieldset>
          <label for="username">Administrador</label>
          <input type="text" name="username" autofocus/>
        </fieldset>
      
        <fieldset>
          <label for="password">Senha</label>
          <input type="text" name="password"/>
        </fieldset>
        
        <button type="submit">Entrar</button>
      </form>
    `;
        const form = this.querySelector("form");
        form.onsubmit = async (e) => {
            e.preventDefault();
            await this.signIn();
        };
    };
    signIn = async () => {
        const adminUserInput = this.querySelector("input[name=username]");
        const adminPasswordInput = this.querySelector("input[name=password]");
        const username = adminUserInput.value;
        const password = adminPasswordInput.value;
        try {
            const cred = await (0, auth_1.signInWithEmailAndPassword)(globals_1.Globals.setup.auth, username, password);
            return cred ? true : false;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    };
}
exports.default = AdminView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tdmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS92aWV3cy9hZG1pbi12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBS3VCO0FBRXZCLGlEQUFtRDtBQUVuRCxpREFBaUQ7QUFFakQsTUFBcUIsU0FBVSxTQUFRLFdBQVc7SUFDaEQsTUFBTSxDQUFVLEdBQUcsR0FBVyxZQUFZLENBQUM7SUFFbkMsV0FBVyxHQUFnQixJQUFJLENBQUM7SUFFeEM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUVSLGlCQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxLQUFLLENBQUMsaUJBQWlCO1FBQ3JCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1FBRWhDLElBQUEseUJBQWtCLEVBQUMsaUJBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDekMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4Qjs7Z0JBQU0sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGVBQWUsR0FBRyxHQUFTLEVBQUU7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLFNBQVMsR0FBWTt1Q0FDUyxJQUFJLENBQUMsV0FBWSxDQUFDLEtBQUs7Ozs7Ozs7OztnQ0FTOUIsa0JBQVMsQ0FBQyxXQUFXOzs7OztnQ0FLckIsa0JBQVMsQ0FBQyxPQUFPOzs7OztnQ0FLakIsa0JBQVMsQ0FBQyxVQUFVOzs7Ozs7S0FNL0MsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBRWhFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVuQixNQUFNLElBQUEsY0FBTyxFQUFDLGlCQUFDLENBQUMsS0FBSyxDQUFDLElBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVNLFVBQVUsR0FBRyxHQUFTLEVBQUU7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLFNBQVMsR0FBWTs7Ozs7Ozs7Ozs7Ozs7S0FjekIsQ0FBQztRQUVGLE1BQU0sSUFBSSxHQUFvQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxFQUFFLENBQVEsRUFBRSxFQUFFO1lBQ2pDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVuQixNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFTSxNQUFNLEdBQUcsS0FBSyxJQUFzQixFQUFFO1FBQzVDLE1BQU0sY0FBYyxHQUFxQixJQUFJLENBQUMsYUFBYSxDQUN6RCxzQkFBc0IsQ0FDdEIsQ0FBQztRQUNILE1BQU0sa0JBQWtCLEdBQXFCLElBQUksQ0FBQyxhQUFhLENBQzdELHNCQUFzQixDQUN0QixDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUN0QyxNQUFNLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7UUFFMUMsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxpQ0FBMEIsRUFDM0MsaUJBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSyxFQUNiLFFBQVEsRUFDUixRQUFRLENBQ1QsQ0FBQztZQUNGLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUM1QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQyxDQUFDOztBQS9HSiw0QkFnSEMifQ==