import { ExpressNexFunction } from "../infra";

import {
  envState,
  EnvState,
} from "../../../frontend/src/infra/env";

export const ifDev: ExpressNexFunction = (_, res, next) => {
  switch (envState) {
    case EnvState.dev:
      next();
      return;
    case EnvState.prod:
      res
        .status(403)
        .send({ status: "failure", message: "Not allowed in production." });
      return;
  }
};
