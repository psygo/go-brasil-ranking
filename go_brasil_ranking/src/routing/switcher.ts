import { Route, RouteEnum, Router } from "./router";
import { router } from "../infra/setup";
import { dummyPlayers } from "../infra/mock_data";

import Player from "../models/player";

import HomeView from "../ui/views/home-view";
import PlayerView from "../ui/views/user-view";

export default class Multiplexer {
  protected readonly router: Router = router;

  constructor(public readonly currentRoute: Route) {}

  protected get mainElement(): HTMLElement {
    return document.body.querySelector("main")!;
  }

  mult = (): void => {
    switch (this.prefixRoute) {
      case RouteEnum.home:
        new HomeMultiplexer().mult();
        break;
      case RouteEnum.user:
        new UserMultiplexer(this.splitPrefixRoute).mult();
        break;
      default:
        new UnknownMultiplexer().mult();
    }
  };

  private get prefixRoute(): string {
    return "/" + this.currentRoute.split("/")[1];
  }

  private get splitPrefixRoute(): string {
    return this.currentRoute.split("/")[2] || "";
  }
}

class HomeMultiplexer extends Multiplexer {
  constructor() {
    super("");
  }

  mult = (): void => {
    this.mainElement.replaceChildren(new HomeView());
  };
}

class UserMultiplexer extends Multiplexer {
  mult = (): void => {
    if (this.currentRoute === "") {
      this.mainElement.replaceChildren(
        new PlayerView(Player.deserialize(dummyPlayers[0]))
      );
    } else {
    }
  };
}

class UnknownMultiplexer extends Multiplexer {
  constructor() {
    super("");
  }

  mult = (): void => {
    this.mainElement.innerHTML = "<p>at unknown</p>";
  };
}
