"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = __importStar(require("chai"));
const elo_1 = __importDefault(require("../models/elo"));
const game_record_1 = require("../models/game_record");
describe("Elo Formatting", () => {
    it("Below 2000 and above 2000 should yield asymmetric deltas", () => {
        const eloNear2000 = new elo_1.default(1980);
        chai.expect(eloNear2000.danKyuLevel()).equal("1k");
    });
});
describe("Elo Math", () => {
    it("Below 2000 and above 2000 should yield asymmetric deltas", () => {
        const eloAbove2000 = new elo_1.default(2027);
        const eloBelow2000 = new elo_1.default(1716);
        const deltaEloAbove2000 = eloAbove2000.deltaFromGame(eloBelow2000, game_record_1.GameResultStatus.Win);
        const deltaEloBelow2000 = eloBelow2000.deltaFromGame(eloAbove2000, game_record_1.GameResultStatus.Loss);
        chai.expect(deltaEloAbove2000.num).equal(4);
        chai.expect(deltaEloBelow2000.num).equal(-6);
    });
    it("Above 2000 and above 2000 should yield symmetric deltas", () => {
        const elo1 = new elo_1.default(2196);
        const elo2 = new elo_1.default(2044);
        const deltaElo1 = elo1.deltaFromGame(elo2, game_record_1.GameResultStatus.Loss);
        const deltaElo2 = elo2.deltaFromGame(elo1, game_record_1.GameResultStatus.Win);
        chai.expect(deltaElo1.num).equal(-21);
        chai.expect(deltaElo2.num).equal(21);
    });
    it("Below 2000 and below 2000 should yield symmetric deltas", () => {
        const elo1 = new elo_1.default(1400);
        const elo2 = new elo_1.default(1076);
        const deltaElo1 = elo1.deltaFromGame(elo2, game_record_1.GameResultStatus.Win);
        const deltaElo2 = elo2.deltaFromGame(elo1, game_record_1.GameResultStatus.Loss);
        chai.expect(deltaElo1.num).equal(7);
        chai.expect(deltaElo2.num).equal(-7);
    });
    it("Above 1500 (and below 2000) and below 1500 should yield asymmetric deltas", () => {
        const eloAbove1500 = new elo_1.default(1499);
        const eloBelow1500 = new elo_1.default(1501);
        const deltaEloAbove1500 = eloAbove1500.deltaFromGame(eloBelow1500, game_record_1.GameResultStatus.Win);
        const deltaEloBelow1500 = eloBelow1500.deltaFromGame(eloAbove1500, game_record_1.GameResultStatus.Loss);
        chai.expect(deltaEloAbove1500.num).equal(25);
        chai.expect(deltaEloBelow1500.num).equal(-20);
    });
    it("(With Handicap) Below 2000 and above 2000 should yield asymmetric deltas", () => {
        const whiteEloAbove2000 = new elo_1.default(2027);
        const blackEloBelow2000 = new elo_1.default(1016);
        const whiteDeltaEloAbove2000 = whiteEloAbove2000.deltaFromGame(blackEloBelow2000, game_record_1.GameResultStatus.Win, 7, game_record_1.Color.White);
        const blackDeltaEloBelow2000 = blackEloBelow2000.deltaFromGame(whiteEloAbove2000, game_record_1.GameResultStatus.Loss, 7, game_record_1.Color.Black);
        chai.expect(whiteDeltaEloAbove2000.num).equal(4);
        chai.expect(blackDeltaEloBelow2000.num).equal(-7);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxvLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdC9lbG8udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTZCO0FBRTdCLHdEQUFnQztBQUNoQyx1REFBZ0U7QUFFaEUsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUM5QixFQUFFLENBQUMsMERBQTBELEVBQUUsR0FBRyxFQUFFO1FBQ2xFLE1BQU0sV0FBVyxHQUFHLElBQUksYUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtJQUN4QixFQUFFLENBQUMsMERBQTBELEVBQUUsR0FBRyxFQUFFO1FBQ2xFLE1BQU0sWUFBWSxHQUFHLElBQUksYUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLE1BQU0sWUFBWSxHQUFHLElBQUksYUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLE1BQU0saUJBQWlCLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FDbEQsWUFBWSxFQUNaLDhCQUFnQixDQUFDLEdBQUcsQ0FDckIsQ0FBQztRQUNGLE1BQU0saUJBQWlCLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FDbEQsWUFBWSxFQUNaLDhCQUFnQixDQUFDLElBQUksQ0FDdEIsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FB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