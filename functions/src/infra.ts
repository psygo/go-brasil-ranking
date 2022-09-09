import { Request, Response } from "express";

export type ExpressApiRoute = (req: Request, res: Response) => Promise<void>;
