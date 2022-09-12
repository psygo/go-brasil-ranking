import { db } from "../..";
import { FirebaseRef } from "../../../../go_brasil_ranking/src/models/firebase_ref";

export default abstract class Col {
  protected abstract readonly colName: FirebaseRef;

  get col() {
    return db.collection(this.colName);
  }

  deleteEverything = async () => {
    await db.recursiveDelete(this.col);
  };
}
