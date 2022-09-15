import { Route, RouteEnum, Router } from "./router";
import { router } from "../infra/setup";

import HomeView from "../ui/views/home-view";
import PlayerView from "../ui/views/player-view";
import GameRecordsView from "../ui/views/game-records-view";
import PlayersView from "../ui/views/players-view";

export default class Switcher {
  protected readonly router: Router = router;

  constructor(public readonly currentRoute: Route = RouteEnum.home) {}

  protected get mainElement(): HTMLElement {
    return document.body.querySelector("main")!;
  }

  switch = (): void => {
    switch (this.prefixRoute) {
      case RouteEnum.home:
        new HomeSwitcher().switch();
        break;
      case RouteEnum.players:
        new PlayersSwitcher(this.splitPrefixRoute).switch();
        break;
      case RouteEnum.gameRecords:
        new GameRecordsSwitcher(this.splitPrefixRoute).switch();
        break;
      default:
        new UnknownSwitcher().switch();
    }
  };

  private get prefixRoute(): string {
    return "/" + this.currentRoute.split("/")[1];
  }

  private get splitPrefixRoute(): string {
    return this.currentRoute.split("/")[2] || "";
  }
}

class HomeSwitcher extends Switcher {
  switch = (): void => {
    this.mainElement.replaceChildren(new HomeView());
  };
}

class PlayersSwitcher extends Switcher {
  switch = (): void => {
    if (!this.currentRoute) this.mainElement.replaceChildren(new PlayersView());
    else this.mainElement.replaceChildren(new PlayerView(this.currentRoute));
  };
}

class GameRecordsSwitcher extends Switcher {
  switch = (): void => {
    // if (!this.currentRoute) this.router.manualRouting(RouteEnum.home);

    this.mainElement.replaceChildren(new GameRecordsView());
  };
}

class UnknownSwitcher extends Switcher {
  switch = (): void => {
    this.mainElement.innerHTML = "<p>at unknown</p>";
  };
}
