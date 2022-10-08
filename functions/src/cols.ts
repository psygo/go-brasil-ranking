import { db } from ".";

import { FirebaseRef } from "../../frontend/src/models/firebase_models";

export const deleteEverything = async (): Promise<void> => {
  await playersCol.deleteEverything();
  await gameEventsCol.deleteEverything();
  await gameRecordsCol.deleteEverything();
};

export default abstract class Col {
  protected abstract readonly colName: FirebaseRef;

  get col() {
    return db.collection(this.colName);
  }

  deleteEverything = async () => {
    await db.recursiveDelete(this.col);
  };
}

class PlayersCol extends Col {
  readonly colName = "players";
}

export const playersCol = new PlayersCol();

class GameRecordsCol extends Col {
  readonly colName = "game_records";
}

export const gameRecordsCol = new GameRecordsCol();

class GameEventsCol extends Col {
  readonly colName = "game_events";
}

export const gameEventsCol = new GameEventsCol();
