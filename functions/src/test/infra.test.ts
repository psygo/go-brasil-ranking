import * as chai from "chai";

import { EloHistory } from "../../../frontend/src/models/player";
import { eloAtTheTime, lastElo } from "../infra";

describe("eloAtTheTime", () => {
  it("Past", () => {
    const currentDate = new Date(1507593600001);

    const eloHistory: EloHistory[] = [
      {
        atTheTimeElo: 2050,
        date: 1507593600000,
      },
      {
        atTheTimeElo: 2150,
        date: 1517593600000,
      },
    ];

    chai.expect(eloAtTheTime(eloHistory, currentDate).serialize()).equal(2050);
  });

  it("Now", () => {
    const currentDate = new Date(1517593600001);

    const eloHistory: EloHistory[] = [
      {
        atTheTimeElo: 2050,
        date: 1507593600000,
      },
      {
        atTheTimeElo: 2150,
        date: 1517593600000,
      },
    ];

    chai.expect(eloAtTheTime(eloHistory, currentDate).serialize()).equal(2150);
  });

  it("With Forced", () => {
    const currentDate = new Date(1527593600001);

    const eloHistory: EloHistory[] = [
      {
        atTheTimeElo: 2050,
        date: 1507593600000,
      },
      {
        atTheTimeElo: 2150,
        date: 1517593600000,
      },
      {
        atTheTimeElo: 2250,
        date: 1527593600000,
        forced: true,
      },
      {
        atTheTimeElo: 2350,
        date: 1537593600000,
      },
    ];

    chai.expect(eloAtTheTime(eloHistory, currentDate).serialize()).equal(2150);
  });
});

describe("lastElo", () => {
  it("Past", () => {
    const eloHistory: EloHistory[] = [
      {
        atTheTimeElo: 2050,
        date: 1507593600000,
      },
      {
        atTheTimeElo: 2150,
        date: 1517593600000,
      },
    ];

    chai.expect(lastElo(eloHistory).serialize()).equal(2150);
  });
});
