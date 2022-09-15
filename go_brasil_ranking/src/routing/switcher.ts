import { Route, RouteEnum, Router } from "./router";
import { router } from "../infra/setup";

import HomeView from "../ui/views/home-view";
import PlayerView from "../ui/views/player-view";
import GameRecordsView from "../ui/views/game_records_view";

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
      case RouteEnum.players:
        new PlayersMultiplexer(this.splitPrefixRoute).mult();
        break;
      case RouteEnum.gameRecords:
        new GameRecordsMultiplexer(this.splitPrefixRoute).mult();
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

class PlayersMultiplexer extends Multiplexer {
  mult = (): void => {
    if (this.currentRoute === "") this.router.manualRouting(RouteEnum.home);

    this.mainElement.replaceChildren(new PlayerView(this.currentRoute));
  };
}

class GameRecordsMultiplexer extends Multiplexer {
  mult = (): void => {
    // if (this.currentRoute === "") this.router.manualRouting(RouteEnum.home);

    this.mainElement.replaceChildren(new GameRecordsView());
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
