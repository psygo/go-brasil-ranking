import * as chai from "chai";

import { addFirebaseRef, dateSorter, paginationSlicer } from "../infra/utils";

import { GameEventTypes, TournamentOrLeague } from "../models/game_event";

describe("Pagination", () => {
  it("Pagination Slicer", () => {
    const events: TournamentOrLeague[] = [
      {
        type: GameEventTypes.tournament,
        name: "Comp 1",
        dates: [new Date(2022, 0, 29).getTime()],
      },
      {
        type: GameEventTypes.league,
        name: "Comp 2",
        dates: [new Date(2022, 0, 29).getTime()],
      },
      {
        type: GameEventTypes.league,
        name: "Comp 3",
        dates: [new Date(2022, 0, 29).getTime()],
      },
      {
        type: GameEventTypes.league,
        name: "Comp 4",
        dates: [new Date(2022, 0, 29).getTime()],
      },
      {
        type: GameEventTypes.league,
        name: "Comp 5",
        dates: [new Date(2022, 0, 29).getTime()],
      },
      {
        type: GameEventTypes.league,
        name: "Comp 6",
        dates: [new Date(2022, 0, 29).getTime()],
      },
    ];

    chai.expect(paginationSlicer(0, events).length).equal(5);
  });
});

describe("Firebase Ref", () => {
  it("addFirebaseRef", () => {
    const event: TournamentOrLeague = {
      type: GameEventTypes.tournament,
      name: "Comp 1",
      dates: [new Date(2022, 0, 29).getTime()],
    };

    const eventWithRef = addFirebaseRef(event, "0");

    chai.expect(eventWithRef).to.deep.equal({
      firebaseRef: "0",
      type: GameEventTypes.tournament,
      name: "Comp 1",
      dates: [new Date(2022, 0, 29).getTime()],
    });
  });
});

describe("Date Sorter", () => {
  it("Positive Dates", () => {
    const dateAbles = [
      { date: 1507593600003 },
      { date: 1507593600001 },
      { date: 1507593600000 },
    ];

    dateAbles.sort(dateSorter);

    chai
      .expect(dateAbles)
      .to.deep.equal([
        { date: 1507593600000 },
        { date: 1507593600001 },
        { date: 1507593600003 },
      ]);
  });

  it("Positive Descending Dates", () => {
    const dateAbles = [
      { date: 1507593600003 },
      { date: 1507593600001 },
      { date: 1507593600000 },
    ];

    dateAbles.sort((d1, d2) => dateSorter(d1, d2, true));

    chai
      .expect(dateAbles)
      .to.deep.equal([
        { date: 1507593600003 },
        { date: 1507593600001 },
        { date: 1507593600000 },
      ]);
  });

  it("Negative Dates", () => {
    const dateAbles = [
      { date: -1507593600003 },
      { date: -1507593600001 },
      { date: -1507593600000 },
    ];

    dateAbles.sort(dateSorter);

    chai
      .expect(dateAbles)
      .to.deep.equal([
        { date: -1507593600003 },
        { date: -1507593600001 },
        { date: -1507593600000 },
      ]);
  });
});
