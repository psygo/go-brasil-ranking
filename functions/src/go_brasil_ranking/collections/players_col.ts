import { db } from "../..";
import { JsonInterface } from "../../../../go_brasil_ranking/src/infra/serializable";
import { FirebaseRef } from "../../../../go_brasil_ranking/src/models/firebase_ref";

export default class PlayersCol {
  readonly col = db.collection("players");

  getWithRef = async (ref: FirebaseRef) => {
    return (await this.col.doc(ref).get()).data();
  };

  updateWithRef = async (ref: FirebaseRef, updateData: JsonInterface) => {
    await this.col.doc(ref).update(updateData);
  };
}
