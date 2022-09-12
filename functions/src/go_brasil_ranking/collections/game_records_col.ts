import { db } from "../..";

export default class GameRecordsCol {
  readonly col = db.collection("game_records");
}
