import { Request, Response, NextFunction } from "express";

import { EnvState, envState } from "../../go_brasil_ranking/src/infra/env";

export type Index = number;
export type Length = number;

export type ExpressApiRoute = (req: Request, res: Response) => Promise<void>;
export type ExpressNexFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export const howMany = (askedLimit: string): number => {
  const maxLimit = 100;

  const intendedLimit = askedLimit ? parseInt(askedLimit as string) : maxLimit;

  return intendedLimit <= maxLimit ? intendedLimit : maxLimit;
};

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
