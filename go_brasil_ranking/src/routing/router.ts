import { EnvState, envState } from "../infra/env";

import DevRouter from "./devRouter";
import ProdRouter, { Router } from "./prodRouter";

export enum Route {
  home = "/",
  indexed = "/indexed",
  user = "/user",
  addNew = "/new",
  unknown = "/unknown",
}

export const getRouter = (): Router => {
  switch (envState) {
    case EnvState.dev:
      const router = DevRouter.singleInstance();
      router.manualRouting("/new");
      return router;
    case EnvState.prod:
      return ProdRouter.singleInstance();
    default:
      throw new Error("Not in any valid state for the application as a whole.");
  }
};
