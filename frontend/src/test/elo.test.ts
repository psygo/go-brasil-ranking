import * as chai from "chai";

import Elo from "../models/elo";
import { Color, GameResultStatus } from "../models/game_record";

describe("Elo Formatting", () => {
  it("Below 2000 and above 2000 should yield asymmetric deltas", () => {
    const eloNear2000 = new Elo(1980);

    chai.expect(eloNear2000.danKyuLevel()).equal("1k");
  });
});

describe("Elo Math", () => {
  it("Below 2000 and above 2000 should yield asymmetric deltas", () => {
    const eloAbove2000 = new Elo(2027);
    const eloBelow2000 = new Elo(1716);

    const deltaEloAbove2000 = eloAbove2000.deltaFromGame(
      eloBelow2000,
      GameResultStatus.Win
    );
    const deltaEloBelow2000 = eloBelow2000.deltaFromGame(
      eloAbove2000,
      GameResultStatus.Loss
    );

    chai.expect(deltaEloAbove2000.num).equal(4);
    chai.expect(deltaEloBelow2000.num).equal(-6);
  });

  it("Above 2000 and above 2000 should yield symmetric deltas", () => {
    const elo1 = new Elo(2196);
    const elo2 = new Elo(2044);

    const deltaElo1 = elo1.deltaFromGame(elo2, GameResultStatus.Loss);
    const deltaElo2 = elo2.deltaFromGame(elo1, GameResultStatus.Win);

    chai.expect(deltaElo1.num).equal(-21);
    chai.expect(deltaElo2.num).equal(21);
  });

  it("Below 2000 and below 2000 should yield symmetric deltas", () => {
    const elo1 = new Elo(1400);
    const elo2 = new Elo(1076);

    const deltaElo1 = elo1.deltaFromGame(elo2, GameResultStatus.Win);
    const deltaElo2 = elo2.deltaFromGame(elo1, GameResultStatus.Loss);

    chai.expect(deltaElo1.num).equal(7);
    chai.expect(deltaElo2.num).equal(-7);
  });

  it("Above 1500 (and below 2000) and below 1500 should yield asymmetric deltas", () => {
    const eloAbove1500 = new Elo(1499);
    const eloBelow1500 = new Elo(1501);

    const deltaEloAbove1500 = eloAbove1500.deltaFromGame(
      eloBelow1500,
      GameResultStatus.Win
    );
    const deltaEloBelow1500 = eloBelow1500.deltaFromGame(
      eloAbove1500,
      GameResultStatus.Loss
    );

    chai.expect(deltaEloAbove1500.num).equal(25);
    chai.expect(deltaEloBelow1500.num).equal(-20);
  });

  it("(With Handicap) Below 2000 and above 2000 should yield asymmetric deltas", () => {
    const whiteEloAbove2000 = new Elo(2027);
    const blackEloBelow2000 = new Elo(1016);

    const whiteDeltaEloAbove2000 = whiteEloAbove2000.deltaFromGame(
      blackEloBelow2000,
      GameResultStatus.Win,
      7,
      Color.White
    );
    const blackDeltaEloBelow2000 = blackEloBelow2000.deltaFromGame(
      whiteEloAbove2000,
      GameResultStatus.Loss,
      7,
      Color.Black
    );

    chai.expect(whiteDeltaEloAbove2000.num).equal(4);
    chai.expect(blackDeltaEloBelow2000.num).equal(-7);
  });
});
