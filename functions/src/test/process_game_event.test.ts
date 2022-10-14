import * as chai from "chai";

import { processGameEvent } from "../api/process_game_event";

import {
  GameEventTypes,
  TournamentOrLeague,
} from "../../../frontend/src/models/game_event";

describe("Process Game Event", () => {
  it("processGameEvent", () => {
    const event: TournamentOrLeague = {
      type: GameEventTypes.tournament,
      name: "Comp 1",
      dates: [new Date(2022, 2, 10).getTime()],
    };

    const processedEvent = processGameEvent(event);

    const now = new Date().getTime();

    chai.expect(processedEvent.dateCreated).to.be.closeTo(now, 100);

    chai.expect(processedEvent).to.deep.equal(<TournamentOrLeague>{
      ...event,
      searchableName: ["c", "co", "com", "comp", "comp ", "comp 1"],
      dateCreated: processedEvent.dateCreated,
      firstDate: new Date(2022, 2, 10).getTime(),
      participants: [],
      gamesTotal: 0,
    });
  });
});
