import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth, initAuth } from "../../infra/firebase_config";

export default class AdminView extends HTMLElement {
  static readonly tag: string = "admin-view";

  constructor() {
    super();

    initAuth();
  }

  async connectedCallback() {
    document.title = "RBGo | Admin";

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.innerHTML = /*html*/ `
          <p>Você está logado como <span>${user.email}</span></p>
        `;
      } else {
        this.signInForm();
      }
    });
  }

  signInForm = (): void => {
    this.innerHTML = /*html*/ `
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

    const submitButton: HTMLButtonElement = this.querySelector("button")!;
    submitButton.addEventListener("click", async (e: Event) => {
      e.preventDefault();
      const isLoggedIn = await this.signIn();

      const msg = isLoggedIn
        ? "Você está logado!"
        : "Você não conseguiu entrar...";
      this.innerHTML += /*html*/ `
        <p>${msg}</p>
      `;
    });
  };

  signIn = async (): Promise<boolean> => {
    const adminUserInput: HTMLInputElement = this.querySelector(
      "input[name=username]"
    )!;
    const adminPasswordInput: HTMLInputElement = this.querySelector(
      "input[name=password]"
    )!;

    const username = adminUserInput.value;
    const password = adminPasswordInput.value;

    try {
      const cred = await signInWithEmailAndPassword(auth, username, password);

      if (cred) return true;
      else return false;
    } catch (error) {
      const e = error as Error;
      console.log(e.message);

      return false;
    }
  };
}
