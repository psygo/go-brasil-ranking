import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initAuth } from "../../infra/firebase_config";

export default class AdminView extends HTMLElement {
  static readonly tag: string = "admin-view";

  constructor() {
    super();

    initAuth();
  }

  async connectedCallback() {
    document.title = "RBGo | Admin";

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

    const submitButton: HTMLButtonElement = this.querySelector("button")!;
    submitButton.addEventListener("click", async (e: Event) => {
      e.preventDefault();
      await this.signIn();
    });
  }

  signIn = async (): Promise<void> => {
    const adminUserInput: HTMLInputElement = this.querySelector(
      "input[name=username]"
    )!;
    const adminPasswordInput: HTMLInputElement = this.querySelector(
      "input[name=password]"
    )!;

    const username = adminUserInput.value;
    const password = adminPasswordInput.value;

    const auth = getAuth();

    try {
      const cred = await signInWithEmailAndPassword(auth, username, password);

      console.log(cred);
    } catch (error) {
      const e = error as Error;
      console.log(e.message);
    }
  };
}
