import * as chai from "chai";

import { processPlayer } from "../api/process_player";

import { pic_philippe_fanaro } from "../data/PicsBase64/pic_philippe_fanaro";

import {
  BrazilianState,
  CountryName,
} from "../../../frontend/src/models/country";
import { GoServers, Player } from "../../../frontend/src/models/player";

describe("Process Player", () => {
  it("processPlayer", () => {
    const player: Player = {
      name: "Philippe Fanaro",
      email: "philippefanaro@gmail.com",
      nicks: [{ name: "psygo", server: GoServers.ogs }],
      picture: pic_philippe_fanaro,
      countries: [
        {
          name: CountryName.brazil,
          state: BrazilianState.sp,
          city: "São Paulo",
        },
      ],
      rebaseElos: [
        { date: new Date(2021, 9, 0).getTime(), elo: 2150 },
        { date: new Date(2017, 9, 10).getTime(), elo: 2050 },
      ],
    };

    const processedPlayer = processPlayer(player);

    const now = new Date().getTime();

    chai.expect(processedPlayer.dateCreated).to.be.closeTo(now, 100);

    chai.expect(processedPlayer).to.deep.equal(<Player>{
      ...player,
      rebaseElos: [
        { date: new Date(2017, 9, 10).getTime(), elo: 2050 },
        { date: new Date(2021, 9, 0).getTime(), elo: 2150 },
      ],
      eloHistory: [
        { date: new Date(2017, 9, 10).getTime(), atTheTimeElo: 2050 },
        { date: new Date(2021, 9, 0).getTime(), atTheTimeElo: 2150 },
      ],
      currentElo: 2150,
      isBrazilian: true,
      dateCreated: processedPlayer.dateCreated,
      gamesTotal: 0,
    });
  });
});
