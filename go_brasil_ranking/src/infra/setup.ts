import { getRouter, Router } from "../routing/router";
import RouteLink from "../ui/components/route-link";

export default class Setup {
  private static instance: Setup;

  private readonly _router: Router = getRouter();

  private constructor() {
    this.define();
  }

  get router(): Router {
    return this._router;
  }

  private define = (): void => {
    customElements.define(RouteLink.tag, RouteLink);
  };

  static singleInstance = (): Setup => {
    if (!Setup.instance) Setup.instance = new Setup();

    return Setup.instance;
  };
}

export const router: Router = Setup.singleInstance().router;
