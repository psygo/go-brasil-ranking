import * as chai from "chai";

import { DateUtils } from "../infra/date_utils";

describe("Date Utils", () => {
  it("formatDate", () => {
    const date = new Date(2022, 1, 1);

    const formattedDate = DateUtils.formatDate(date);

    chai.expect(formattedDate).equal("01/02/2022");
  });
});
