import { Timestamp } from "firebase/firestore";

// JSON + Helpful Firebase types.
export type JsonDatum =
  | string
  | boolean
  | number
  | Timestamp
  | []
  | Object
  | null
  | undefined;

export interface CustomJson {
  [key: string]: JsonDatum;
}

export type Json = JsonDatum | CustomJson;

export default abstract class Serializable {
  abstract serialize(): Json;

  static dateToTimestamp = (date: Date): Timestamp => Timestamp.fromDate(date);

  static jsonToTimestampToDate = (jsonDatum: JsonDatum): Date =>
    jsonDatum ? (jsonDatum as Timestamp).toDate() : new Date();
}
