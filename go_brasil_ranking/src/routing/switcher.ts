import { Route, RouteEnum, Router } from "./router";
import { Globals as g } from "../infra/globals";

import AdminView from "../ui/views/admin-view";
import AboutView from "../ui/views/about-view";
import GameRecordView from "../ui/views/game-record-view";
import GameRecordsView from "../ui/views/game-records-view";
import HomeView from "../ui/views/home-view";
import PlayerView from "../ui/views/player-view";
import PlayersView from "../ui/views/players-view";

export default class Switcher {
  protected readonly router: Router = g.router;

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
      case RouteEnum.about:
        new AboutSwitcher().switch();
        break;
      case RouteEnum.admin:
        new AdminSwitcher().switch();
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
    if (!this.currentRoute)
      this.mainElement.replaceChildren(new GameRecordsView());
    else
      this.mainElement.replaceChildren(new GameRecordView(this.currentRoute));
  };
}

class AboutSwitcher extends Switcher {
  switch = (): void => {
    this.mainElement.replaceChildren(new AboutView());
  };
}

class AdminSwitcher extends Switcher {
  switch = (): void => {
    this.mainElement.replaceChildren(new AdminView());
  };
}

class UnknownSwitcher extends Switcher {
  switch = (): void => {
    this.mainElement.innerHTML = "<p>at unknown</p>";
  };
}
