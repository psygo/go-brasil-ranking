import { Timestamp } from "firebase/firestore";

// JSON + Helpful Firebase types.
export type JsonDatum =
  | string
  | boolean
  | number
  | SerializedTimeStamp
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
}

export interface SerializedTimeStamp {
  seconds: number;
  nanoseconds: number;
}

export class TimeStamp implements Serializable {
  private readonly ts: Timestamp;
  readonly seconds: number;
  readonly nanoseconds: number;

  private constructor(seconds?: number, nanoseconds?: number, ts?: Timestamp) {
    if (ts) {
      this.ts = ts;
      this.seconds = ts.seconds;
      this.nanoseconds = ts.nanoseconds;
    } else {
      this.seconds = seconds!;
      this.nanoseconds = nanoseconds!;
      this.ts = new Timestamp(seconds!, nanoseconds!);
    }
  }

  serialize = (): SerializedTimeStamp => ({
    seconds: this.seconds,
    nanoseconds: this.nanoseconds,
  });

  get toDate(): Date {
    return this.ts.toDate();
  }

  static fromSerializedTimeStamp = (sts: SerializedTimeStamp): TimeStamp =>
    new TimeStamp(sts.seconds, sts.nanoseconds);

  static deserialized = TimeStamp.fromSerializedTimeStamp;

  static fromDate = (date: Date): TimeStamp =>
    new TimeStamp(undefined, undefined, Timestamp.fromDate(date));

  static now = (): TimeStamp =>
    new TimeStamp(undefined, undefined, Timestamp.now());
}
