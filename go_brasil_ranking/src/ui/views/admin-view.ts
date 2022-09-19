import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, initAuth } from "../../infra/firebase_config";

export default class AdminView extends HTMLElement {
  static readonly tag: string = "admin-view";

  private currentUser: User | null = null;

  constructor() {
    super();

    initAuth();
  }

  async connectedCallback() {
    document.title = "RBGo | Admin";

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
        this.alreadySignedIn();
      } else {
        this.signInForm();
      }
    });
  }

  private alreadySignedIn = (): void => {
    this.setAttribute("signed-in", "true");

    this.innerHTML = /*html*/ `
      <p>Você está logado como <span>${this.currentUser!.email}</span></p>
      
      <button>Sair</button>
    `;

    const button: HTMLButtonElement = this.querySelector("button")!;

    button.addEventListener("click", async (e) => {
      e.preventDefault();

      await signOut(auth);
    });
  };

  private signInForm = (): void => {
    this.setAttribute("signed-in", "false");

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

      await this.signIn();
    });
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
      const cred = await signInWithEmailAndPassword(auth, username, password);
      return cred ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}
