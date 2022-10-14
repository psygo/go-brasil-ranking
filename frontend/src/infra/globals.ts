import { EnvState, envState } from "./env";
import Setup from "./setup";

export const queryLimit = 5;

export const dayInMs = 86400000;

export const setup = Setup.getInstance();

export const router = setup.router;

export const db = setup.db;

export const apiUrl =
  envState === EnvState.dev
    ? "http://localhost:4096/fanaro-firebase-lab/southamerica-east1/goBrasilRanking"
    : "https://southamerica-east1-fanaro-firebase-lab.cloudfunctions.net/goBrasilRanking";

export const repoUrl = "https://github.com/psygo/go-brasil-ranking";
