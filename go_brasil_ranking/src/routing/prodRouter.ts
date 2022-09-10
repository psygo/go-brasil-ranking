import { Route } from "./router";

import Multiplexer from "./switcher";

import RouteLink from "../ui/components/route-link";

export abstract class Router {
  public currentRoute: string = Route.home;

  protected constructor() {
    this.routeDomContentLoadedListener();
    this.routeClickListener();
    this.routePopstateListener();
  }

  private routeSwitcher = (): void => {
    new Multiplexer(this.currentRoute).mult();
  };

  protected routeDomContentLoadedListener = (): void => {
    document.addEventListener("DOMContentLoaded", (_) => {
      this.currentRoute = location.pathname;

      this.routeSwitcher();
    });
  };

  private routePopstateListener = (): void => {
    window.addEventListener("popstate", (_) => {
      this.currentRoute = location.pathname;

      this.routeSwitcher();
    });
  };

  private routeClickListener = (): void => {
    document.addEventListener("click", (evt: MouseEvent) => {
      const routeLink: RouteLink | null = (evt.target as HTMLElement).closest(
        "route-link"
      );

      if (routeLink && routeLink.href) {
        this.currentRoute = routeLink.href;

        this.routeSwitcher();

        history.pushState(null, "", this.currentRoute);
      }
    });
  };

  manualRouting = (route: string): void => {
    setTimeout(() => {
      this.currentRoute = route;
      history.pushState(null, "", this.currentRoute);
      this.routeSwitcher();
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
