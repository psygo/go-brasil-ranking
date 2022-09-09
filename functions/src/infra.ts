import { Request, Response } from "express";

export type ExpressApiRoute = (req: Request, res: Response) => Promise<void>;

export const howMany = (askedLimit: string): number => {
  const maxLimit = 100;

  const intendedLimit = askedLimit ? parseInt(askedLimit as string) : maxLimit;

  return intendedLimit <= maxLimit ? intendedLimit : maxLimit;
};
