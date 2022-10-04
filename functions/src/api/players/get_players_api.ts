import {
  ExpressApiRoute,
  mapDocsWithFirebaseRef,
  paginationSlicer,
  queryLimit,
} from "../../infra";

import { playersCol } from "../../collections/players_col";

import { Player } from "../../../../frontend/src/models/player";
import { FirebaseRef } from "../../../../frontend/src/models/firebase_models";
import { TournamentOrLeague } from "../../../../frontend/src/models/game_event";
import { gameEventsCol } from "../../collections/game_events_col";

const playersFromEvent = async (
  eventRef: FirebaseRef,
  startAfter: number
): Promise<Player[]> => {
  const gameEvent = (
    await gameEventsCol.col.doc(eventRef).get()
  ).data() as TournamentOrLeague;

  let players = [];
  for (const playerRef of gameEvent.participants!)
    players.push(await playersCol.getWithRef(playerRef));

  players.sort((p1, p2) => p2.elo - p1.elo);

  return paginationSlicer(startAfter, players);
};

export const getPlayers: ExpressApiRoute = async (req, res) => {
  try {
    const startAfter = parseInt(req.query.de as string);
    const onlyBrazilians = req.query["somente-brasileiros"] ? true : false;
    const eventRef = req.query.eventoRef as string;

    let players: Player[] = [];
    if (eventRef) players = await playersFromEvent(eventRef, startAfter);
    else {
      let playersQuery = playersCol.col
        .orderBy("elo", "desc")
        .offset(startAfter)
        .limit(queryLimit);

      if (onlyBrazilians)
        playersQuery = playersQuery.where("isBrazilian", "==", onlyBrazilians);

      const playersSnaps = await playersQuery.get();

      players = mapDocsWithFirebaseRef<Player>(playersSnaps.docs);
    }

    res.status(200).send({
      status: "success",
      message: `Jogadores encontrados (total: ${players.length})`,
      data: { players: players },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
