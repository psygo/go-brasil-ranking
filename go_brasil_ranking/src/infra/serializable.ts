import { Timestamp } from "firebase/firestore";

// JSON + Helpful Firebase types.
export type JsonDatum =
  | string
  | boolean
  | number
  | Timestamp
  | Json[]
  | Object
  | null
  | undefined;

export interface JsonInterface {
  [key: string]: Json;
}

export type Json = JsonDatum | JsonInterface;

export default abstract class Serializable {
  abstract serialize(): Json;

  static dateToTimestamp = (date: Date): Timestamp => Timestamp.fromDate(date);

  static jsonToTimestampToDate = (jsonDatum: JsonDatum): Date =>
    (jsonDatum as Timestamp).toDate();
}
