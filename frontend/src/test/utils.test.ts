import * as chai from "chai";

// TODO3: Zero idea why, but having this specific function in only one place
// doesn't work, otherwise the whole project errors in a weird fashion. This is
// currently copied in 3 different places.
const dateSorter = <T extends { date: number }>(
  dateAble1: T,
  dateAble2: T,
  desc: boolean = false
): number => {
  const [d1, d2] = [new Date(dateAble1.date), new Date(dateAble2.date)];
  const coeff = d1 > d2 ? 1 : d1 < d2 ? -1 : 0;
  return desc ? -coeff : coeff;
};

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
