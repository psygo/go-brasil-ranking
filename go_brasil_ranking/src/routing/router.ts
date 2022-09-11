import { EnvState, envState } from "../infra/env";

import Multiplexer from "./switcher";

import RouteLink from "../ui/components/route-link";

export type Route = string;

export enum RouteEnum {
  home = "/",
  user = "/user",
  unknown = "/unknown",
}

export const getRouter = (): Router => {
  switch (envState) {
    case EnvState.dev:
      const router = DevRouter.singleInstance();
      router.manualRouting("/");
      return router;
    case EnvState.prod:
      return ProdRouter.singleInstance();
    default:
      throw new Error("Not in any valid state for the application as a whole.");
  }
};

export abstract class Router {
  private _currentRoute: Route = RouteEnum.home;

  currentRoute(): Route {
    return this._currentRoute;
  }

  protected constructor() {
    this.routeDomContentLoadedListener();
    this.routeClickListener();
    this.routePopstateListener();
  }

  private routeSwitcth = (): void => {
    new Multiplexer(this._currentRoute).mult();
  };

  protected routeDomContentLoadedListener = (): void => {
    document.addEventListener("DOMContentLoaded", (_) => {
      this._currentRoute = location.pathname;

      this.routeSwitcth();
    });
  };

  private routePopstateListener = (): void => {
    window.addEventListener("popstate", (_) => {
      this._currentRoute = location.pathname;

      this.routeSwitcth();
    });
  };

  private routeClickListener = (): void => {
    document.addEventListener("click", (evt: MouseEvent) => {
      const routeLink: RouteLink | null = (evt.target as HTMLElement).closest(
        "route-link"
      );

      if (routeLink && routeLink.href) {
        this._currentRoute = routeLink.href;

        this.routeSwitcth();

        history.pushState(null, "", this._currentRoute);
      }
    });
  };

  manualRouting = (route: string): void => {
    setTimeout(() => {
      this._currentRoute = route;
      history.pushState(null, "", this._currentRoute);
      this.routeSwitcth();
    }, 1);
  };
}

export default class ProdRouter extends Router {
  protected static instance: ProdRouter;

  static singleInstance = (): ProdRouter => {
    if (!ProdRouter.instance) ProdRouter.instance = new ProdRouter();

    return ProdRouter.instance;
  };

  protected constructor() {
    super();
  }
}

export class DevRouter extends ProdRouter {
  private constructor() {
    super();
  }

  protected static instance: ProdRouter;

  static singleInstance = (): ProdRouter => {
    if (!DevRouter.instance) DevRouter.instance = new DevRouter();

    return DevRouter.instance;
  };

  protected routeDomContentLoadedListener = (): void => {};
}
