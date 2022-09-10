import { Route } from "./router";
import { Router } from "./prodRouter";
import { router } from "../infra/setup";
import HomeView from "../ui/views/home-view";
import { dummyPlayers } from "../infra/mock_data";
import Player from "../models/player";
import PlayerView from "../ui/views/user-view";

export default class Multiplexer {
  protected readonly router: Router = router;

  constructor(public readonly currentRoute: string) {}

  protected get mainElement(): HTMLElement {
    return document.body.querySelector("main")!;
  }

  mult = (): Promise<void> =>
    new Promise<void>((resolve, _) => {
      switch (this.prefixRoute) {
        case Route.home:
          new HomeMultiplexer().mult();
          break;
        case Route.user:
          new UserMultiplexer(this.splitPrefixRoute).mult();
          break;
        default:
          new UnknownMultiplexer().mult();
      }

      resolve();
    });

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

  mult = (): Promise<void> =>
    new Promise((resolve, _) => {
      this.mainElement.replaceChildren(new HomeView());

      resolve();
    });
}

class UserMultiplexer extends Multiplexer {
  mult = (): Promise<void> =>
    new Promise<void>(async (resolve, _) => {
      if (this.currentRoute === "") {
        this.mainElement.replaceChildren(
          new PlayerView(Player.deserialize(dummyPlayers[0]))
        );
      } else {
      }

      resolve();
    });
}

class UnknownMultiplexer extends Multiplexer {
  constructor() {
    super("");
  }

  mult = (): Promise<void> =>
    new Promise<void>((resolve, _) => {
      this.mainElement.innerHTML = "<p>at unknown</p>";

      resolve();
    });
}
