import { db } from "..";
import { FirebaseRef } from "../../../frontend/src/models/firebase_models";

export default abstract class Col {
  protected abstract readonly colName: FirebaseRef;

  get col() {
    return db.collection(this.colName);
  }

  deleteEverything = async () => {
    await db.recursiveDelete(this.col);
  };
}
