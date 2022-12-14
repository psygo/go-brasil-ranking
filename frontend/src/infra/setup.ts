import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, connectAuthEmulator, getAuth } from "firebase/auth";
import {
  connectFirestoreEmulator,
  Firestore,
  getFirestore,
} from "firebase/firestore";

import { EnvState, envState } from "./env";

import { firebaseConfig } from "./firebase_config";

import { getRouter, Router } from "../routing/router";

import { tableErrorLog } from "./utils";

import Navbar from "../ui/components/navbar";
import Footer from "../ui/components/footer_container";
import RouteLink from "../ui/components/route-link";

import GameEventsTable from "../ui/components/game_events_table";
import GameRecordsTable from "../ui/components/game_records_table";
import PlayersTable from "../ui/components/players_table";

import GameEventView from "../ui/views/game-event-view";
import GameEventsView from "../ui/views/game-events-view";
import GameRecordView from "../ui/views/game-record-view";
import GameRecordsView from "../ui/views/game-records-view";
import HomeView from "../ui/views/home-view";
import PlayerView from "../ui/views/player-view";
import PlayersView from "../ui/views/players-view";
import AboutView from "../ui/views/about-view";
import UnknownView from "../ui/views/unknown-view";

import AdminView from "../ui/views/admin-view";
import NewPlayerView from "../ui/views/new-player-view";
import NewGameEventView from "../ui/views/new-game-event-view";
import NewGameRecordView from "../ui/views/new-game-record-view";
import SearchView from "../ui/views/search-view";

export default class Setup {
  private static instance: Setup;

  private readonly _router: Router = getRouter();

  private app: FirebaseApp | null = null;

  private constructor() {
    this.define();
    this.initDb();
  }

  get router(): Router {
    return this._router;
  }

  declare auth: Auth;

  initAuth = (): void => {
    try {
      if (!this.app) this.app = initializeApp(firebaseConfig);

      if (!this.auth) this.auth = getAuth(this.app);

      if (envState === EnvState.dev)
        connectAuthEmulator(this.auth, "http://localhost:9094", {
          disableWarnings: true,
        });
    } catch (error) {
      const e = error as Error;
      tableErrorLog(e, "Init Auth");
    }
  };

  declare db: Firestore;

  private initDb = (): void => {
    try {
      if (!this.app) this.app = initializeApp(firebaseConfig);

      if (!this.db) this.db = getFirestore(this.app);

      if (envState === EnvState.dev)
        connectFirestoreEmulator(this.db, "localhost", 8075);
    } catch (error) {
      const e = error as Error;
      tableErrorLog(e, "Init DB");
    }
  };

  private define = (): void => {
    customElements.define(Navbar.tag, Navbar);
    customElements.define(Footer.tag, Footer);
    customElements.define(RouteLink.tag, RouteLink);

    customElements.define(GameRecordsTable.tag, GameRecordsTable);
    customElements.define(GameEventsTable.tag, GameEventsTable);
    customElements.define(PlayersTable.tag, PlayersTable);

    customElements.define(AboutView.tag, AboutView);
    customElements.define(GameRecordView.tag, GameRecordView);
    customElements.define(GameRecordsView.tag, GameRecordsView);
    customElements.define(GameEventView.tag, GameEventView);
    customElements.define(GameEventsView.tag, GameEventsView);
    customElements.define(HomeView.tag, HomeView);
    customElements.define(PlayerView.tag, PlayerView);
    customElements.define(PlayersView.tag, PlayersView);
    customElements.define(SearchView.tag, SearchView);
    customElements.define(UnknownView.tag, UnknownView);

    customElements.define(AdminView.tag, AdminView);
    customElements.define(NewPlayerView.tag, NewPlayerView);
    customElements.define(NewGameEventView.tag, NewGameEventView);
    customElements.define(NewGameRecordView.tag, NewGameRecordView);
  };

  static getInstance = (): Setup => {
    if (!Setup.instance) Setup.instance = new Setup();

    return Setup.instance;
  };
}
