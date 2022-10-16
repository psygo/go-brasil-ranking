import { generateSearchableArrayFromString, lastElo } from "../infra";

import { CountryName } from "../../../frontend/src/models/country";
import { EloHistory, Player } from "../../../frontend/src/models/player";
import { dateSorter } from "../../../frontend/src/infra/utils";

export const processPlayer = (player: Player): Player => {
  const isBrazilian = player.nationalities.some(
    (c) => c.name === CountryName.brazil
  );

  const { rebaseElos, ...playerNoRebaseElos } = player;
  const reorederedRebaseElos = [...rebaseElos].sort(dateSorter);

  const initialEloHistory: EloHistory[] = reorederedRebaseElos.map((re) => ({
    date: re.date,
    atTheTimeElo: re.elo,
  }));

  return {
    ...playerNoRebaseElos,
    searchableName: generateSearchableArrayFromString(player.name),
    rebaseElos: reorederedRebaseElos,
    eloHistory: initialEloHistory,
    currentElo: lastElo(initialEloHistory).serialize(),
    isBrazilian: isBrazilian,
    dateCreated: new Date().getTime(),
    gamesTotal: 0,
  };
};
