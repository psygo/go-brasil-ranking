import { getRouter, Router } from "../routing/router";

import GameRecordsTable from "../ui/components/game_records_table";
import Navbar from "../ui/components/navbar";

import PlayersTable from "../ui/components/players_table";
import RouteLink from "../ui/components/route-link";

import GameRecordsView from "../ui/views/game_records_view";
import HomeView from "../ui/views/home-view";
import PlayerView from "../ui/views/player-view";

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
    customElements.define(Navbar.tag, Navbar);
    customElements.define(RouteLink.tag, RouteLink);

    customElements.define(GameRecordsTable.tag, GameRecordsTable);
    customElements.define(PlayersTable.tag, PlayersTable);

    customElements.define(HomeView.tag, HomeView);
    customElements.define(PlayerView.tag, PlayerView);
    customElements.define(GameRecordsView.tag, GameRecordsView);
  };

  static getInstance = (): Setup => {
    if (!Setup.instance) Setup.instance = new Setup();

    return Setup.instance;
  };
}

export const setup = Setup.getInstance();

export const router = setup.router;

export const apiUrl =
  "http://localhost:4096/fanaro-firebase-lab/us-central1/goBrasilRanking";
