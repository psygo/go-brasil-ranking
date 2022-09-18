import { getRouter, Router } from "../routing/router";

import Navbar from "../ui/components/navbar";
import Footer from "../ui/components/foot-er";
import RouteLink from "../ui/components/route-link";

import GameRecordsTable from "../ui/components/game_records_table";
import PlayersTable from "../ui/components/players_table";

import GameRecordView from "../ui/views/game-record-view";
import GameRecordsView from "../ui/views/game-records-view";
import HomeView from "../ui/views/home-view";
import PlayerView from "../ui/views/player-view";
import PlayersView from "../ui/views/players-view";
import AboutView from "../ui/views/about-view";

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
    customElements.define(Footer.tag, Footer);
    customElements.define(RouteLink.tag, RouteLink);

    customElements.define(GameRecordsTable.tag, GameRecordsTable);
    customElements.define(PlayersTable.tag, PlayersTable);

    customElements.define(AboutView.tag, AboutView);
    customElements.define(GameRecordView.tag, GameRecordView);
    customElements.define(GameRecordsView.tag, GameRecordsView);
    customElements.define(HomeView.tag, HomeView);
    customElements.define(PlayerView.tag, PlayerView);
    customElements.define(PlayersView.tag, PlayersView);
  };

  static getInstance = (): Setup => {
    if (!Setup.instance) Setup.instance = new Setup();

    return Setup.instance;
  };
}
