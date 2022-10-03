import {
  ExpressApiRoute,
  mapDocsWithFirebaseRef,
  queryLimit,
} from "../../infra";

import { playersCol } from "../../collections/players_col";

import { Player } from "../../../../frontend/src/models/player";

export const getPlayers: ExpressApiRoute = async (req, res) => {
  try {
    const startAfter = parseInt(req.query.de as string);
    const onlyBrazilians = req.query.somenteBrasileiros ? true : false;

    let playersQuery = playersCol.col
      .orderBy("elo", "desc")
      .offset(startAfter)
      .limit(queryLimit);

    if (onlyBrazilians)
      playersQuery = playersQuery.where("isBrazilian", "==", onlyBrazilians);

    const playersSnaps = await playersQuery.get();

    const players = mapDocsWithFirebaseRef<Player>(playersSnaps.docs);

    res.status(200).send({
      status: "success",
      message: `Jogadores encontrados (total: ${players.length})`,
      data: { players: players },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
