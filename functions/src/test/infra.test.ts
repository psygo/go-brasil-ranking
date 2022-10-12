import * as chai from "chai";

import { EloHistory } from "../../../frontend/src/models/player";
import { eloAtTheTime } from "../infra";

describe("Elo", () => {
  it("eloAtTheTime", () => {
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
});
