import { JsonInterface } from "../../../frontend/src/infra/serializable";
import { FirebaseRef } from "../../../frontend/src/models/firebase_models";
import Col from "./col";

class PlayersCol extends Col {
  readonly colName = "players";

  getWithRef = async (ref: FirebaseRef) => {
    return (await this.col.doc(ref).get()).data();
  };

  updateWithRef = async (ref: FirebaseRef, updateData: JsonInterface) => {
    await this.col.doc(ref).update(updateData);
  };
}

export const playersCol = new PlayersCol();
