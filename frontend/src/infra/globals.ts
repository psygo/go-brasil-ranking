import { EnvState, envState } from "./env";
import Setup from "./setup";

export namespace Globals {
  export const queryLimit = 5;

  export const setup = Setup.getInstance();

  export const router = setup.router;

  export const apiUrl = envState === EnvState.dev ?
    "http://localhost:4096/fanaro-firebase-lab/southamerica-east1/goBrasilRanking" :
    "https://southamerica-east1-fanaro-firebase-lab.cloudfunctions.net/goBrasilRanking";

  export const repoUrl = "https://github.com/psygo/fanaro-firebase-lab";
}
