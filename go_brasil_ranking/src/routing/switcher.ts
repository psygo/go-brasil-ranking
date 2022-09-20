import { Route, RouteEnum, Router } from "./router";
import { Globals as g } from "../infra/globals";

import AboutView from "../ui/views/about-view";
import GameRecordView from "../ui/views/game-record-view";
import GameRecordsView from "../ui/views/game-records-view";
import GameEventView from "../ui/views/game-event-view";
import GameEventsView from "../ui/views/game-events-view";
import HomeView from "../ui/views/home-view";
import PlayerView from "../ui/views/player-view";
import PlayersView from "../ui/views/players-view";

import AdminView from "../ui/views/admin-view";
import NewPlayerView from "../ui/views/new-player-view";
import NewGameEventView from "../ui/views/new-game-event-view";
import NewGameRecordView from "../ui/views/new-game-record-view";

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
      case RouteEnum.gameEvents:
        new GameEventsSwitcher(this.splitPrefixRoute).switch();
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

  protected get isNewRoute(): boolean {
    return this.currentRoute === "novo";
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
    else if (this.isNewRoute)
      this.mainElement.replaceChildren(new NewPlayerView());
    else this.mainElement.replaceChildren(new PlayerView(this.currentRoute));
  };
}

class GameRecordsSwitcher extends Switcher {
  switch = (): void => {
    if (!this.currentRoute)
      this.mainElement.replaceChildren(new GameRecordsView());
    else if (this.isNewRoute)
      this.mainElement.replaceChildren(new NewGameRecordView());
    else
      this.mainElement.replaceChildren(new GameRecordView(this.currentRoute));
  };
}

class GameEventsSwitcher extends Switcher {
  switch = (): void => {
    if (!this.currentRoute)
      this.mainElement.replaceChildren(new GameEventsView());
    else if (this.isNewRoute)
      this.mainElement.replaceChildren(new NewGameEventView());
    else this.mainElement.replaceChildren(new GameEventView(this.currentRoute));
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
