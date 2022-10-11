import { dateSorter, ExpressApiRoute, lastElo, parseBody } from "../infra";

import { playersCol } from "../cols";

import { CountryName } from "../../../frontend/src/models/country";
import { FirebaseRef } from "../../../frontend/src/models/firebase_models";
import { EloHistory, Player } from "../../../frontend/src/models/player";

export const postPlayer = async (
  player: Player,
  firebaseRef?: FirebaseRef
): Promise<Player> => {
  const isBrazilian = player.countries.some(
    (c) => c.name === CountryName.brazil
  );

  const { rebaseElos, ...playerNoRebaseElos } = player;
  const reorederedRebaseElos = [...rebaseElos].sort(dateSorter);

  const initialEloHistory: EloHistory[] = reorederedRebaseElos.map((re) => ({
    date: re.date,
    atTheTimeElo: re.elo,
  }));

  let playerOnDb: Player = {
    ...playerNoRebaseElos,
    rebaseElos: reorederedRebaseElos,
    eloHistory: initialEloHistory,
    currentElo: lastElo(initialEloHistory).serialize(),
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
