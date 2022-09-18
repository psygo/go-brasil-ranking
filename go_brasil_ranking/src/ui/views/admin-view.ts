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

    await this.signIn();
  }

  signIn = async (): Promise<void> => {
    const email = "philippefanaro@gmail.com";
    const password = "asdfasdf";

    const auth = getAuth();

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);

      console.log(cred);
    } catch (error) {
      const e = error as Error;
      console.log(e.message);
    }
  };
}
