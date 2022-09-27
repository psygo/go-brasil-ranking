import Setup from "./setup";

export namespace Globals {
  export const queryLimit = 5;

  export const setup = Setup.getInstance();

  export const router = setup.router;

  export const apiUrl =
    "http://localhost:4096/fanaro-firebase-lab/us-central1/goBrasilRanking";

  export const repoUrl = "https://github.com/psygo/fanaro-firebase-lab";
}
