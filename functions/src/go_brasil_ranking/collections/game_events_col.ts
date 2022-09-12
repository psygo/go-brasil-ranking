import { db } from "../..";

export default class GameEventsCol {
  readonly col = db.collection("game_events");
}
