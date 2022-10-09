import { ExpressApiRoute, parseBody } from "../infra";

import { playersCol } from "../cols";

import { CountryName } from "../../../frontend/src/models/country";
import { FirebaseRef } from "../../../frontend/src/models/firebase_models";
import {
  DateEloData,
  Player,
  RebaseElo,
} from "../../../frontend/src/models/player";

export const postPlayer = async (
  player: Player,
  firebaseRef?: FirebaseRef
): Promise<Player> => {
  const isBrazilian = player.countries.some(
    (c) => c.name === CountryName.brazil
  );

  const rebaseElos = player.rebaseElos as RebaseElo[];
  rebaseElos.sort((p1, p2) => p2.date - p1.date);

  const initialEloHistory: DateEloData[] = rebaseElos.map((re) => ({
    date: re.date,
    atTheTimeElo: re.elo,
  }));

  let playerOnDb = {
    ...player,
    eloHistory: initialEloHistory,
    isBrazilian: isBrazilian,
    dateCreated: new Date().getTime(),
    gamesTotal: 0,
  };

  if (!firebaseRef) {
    const playerRef = await playersCol.col.add(playerOnDb);
    playerOnDb = { ...playerOnDb, firebaseRef: playerRef.id };
  } else {
    await playersCol.col.doc(firebaseRef).set(playerOnDb);
    playerOnDb = { ...playerOnDb, firebaseRef: firebaseRef };
  }

  return playerOnDb;
};

export const postPlayerApi: ExpressApiRoute = async (req, res) => {
  try {
    const player = parseBody(req.body);

    const playerOnDbWithRef = await postPlayer(player);

    res.status(200).send({
      status: "success",
      message: "Jogador adicionado com sucesso.",
      data: { player: playerOnDbWithRef },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
