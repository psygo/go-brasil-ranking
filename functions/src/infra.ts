import { Request, Response, NextFunction } from "express";

export type ExpressApiRoute = (req: Request, res: Response) => Promise<void>;
export type ExpressNexFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export const howMany = (askedLimit: string): number => {
  const maxLimit = 10000;

  const intendedLimit =
    askedLimit === "max"
      ? maxLimit
      : askedLimit
      ? parseInt(askedLimit as string)
      : maxLimit;

  return intendedLimit <= maxLimit ? intendedLimit : maxLimit;
};

export const parseBody = (body: any): any =>
  typeof body === "string" ? JSON.parse(body) : body;
