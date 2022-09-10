import { Router } from "../routing/prodRouter";
import { getRouter } from "../routing/router";

export default class Setup {
  private static instance: Setup;

  private readonly _router: Router = getRouter();

  private constructor() {
    this.define();
  }

  get router(): Router {
    return this._router;
  }

  private define = (): void => {};

  static singleInstance = (): Setup => {
    if (!Setup.instance) Setup.instance = new Setup();

    return Setup.instance;
  };
}

export const router: Router = Setup.singleInstance().router;
