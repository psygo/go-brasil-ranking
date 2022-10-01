import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { Globals as g } from "../../infra/globals";

import { RouteEnum } from "../../routing/router";

export default class AdminView extends HTMLElement {
  static readonly tag: string = "admin-view";

  private currentUser: User | null = null;

  constructor() {
    super();

    g.setup.initAuth();
  }

  async connectedCallback(): Promise<void> {
    document.title = "RBGo | Admin";

    onAuthStateChanged(g.setup.auth!, (user) => {
      if (user) {
        this.currentUser = user;
        this.alreadySignedIn();
      } else this.signInForm();
    });
  }

  private alreadySignedIn = (): void => {
    this.setAttribute("signed-in", "true");

    this.innerHTML = /*html*/ `
      <p>Você está logado como <span>${this.currentUser!.email}</span></p>
      
      <button>Sair</button>
      
      <div id="add-new">
        <p>O que você gostaria de adicionar?</p>

        <ul>
          <li>
            <route-link href="${RouteEnum.gameRecords}/novo">
              Partida
            </route-link>
          </li>
          <li>
            <route-link href="${RouteEnum.players}/novo">
              Jogador
            </route-link>
          </li>
          <li>
            <route-link href="${RouteEnum.gameEvents}/novo">
              Evento
            </route-link>
          </li>
        </ul>
      </div>
    `;

    const button: HTMLButtonElement = this.querySelector("button")!;

    button.onclick = async (e) => {
      e.preventDefault();

      await signOut(g.setup.auth!);
    };
  };

  private signInForm = (): void => {
    this.setAttribute("signed-in", "false");

    this.innerHTML = /*html*/ `
      <form>
        <fieldset>
          <label for="username">Administrador</label>
          <input autofocus required type="text" name="username"/>
        </fieldset>
      
        <fieldset>
          <label for="password">Senha</label>
          <input required type="password" name="password" minlength="8"/>
        </fieldset>
        
        <button type="submit">Entrar</button>
      </form>
    `;

    const form: HTMLFormElement = this.querySelector("form")!;
    form.onsubmit = async (e: Event) => {
      e.preventDefault();

      await this.signIn();
    };
  };

  private signIn = async (): Promise<boolean> => {
    const adminUserInput: HTMLInputElement = this.querySelector(
      "input[name=username]"
    )!;
    const adminPasswordInput: HTMLInputElement = this.querySelector(
      "input[name=password]"
    )!;

    const username = adminUserInput.value;
    const password = adminPasswordInput.value;

    try {
      const cred = await signInWithEmailAndPassword(
        g.setup.auth!,
        username,
        password
      );
      return cred ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}
