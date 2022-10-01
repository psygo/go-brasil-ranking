import { Player } from "../../../../frontend/src/models/player";
import { playersCol } from "../../collections/players_col";
import { ExpressApiRoute, paginationSlicer } from "../../infra";

export const getPlayers: ExpressApiRoute = async (req, res) => {
  try {
    const startAfter = parseInt(req.query.de as string);
    const onlyBrazilians =
      req.query.somenteBrasileiros === undefined
        ? undefined
        : req.query.somenteBrasileiros
        ? true
        : false;

    let playersQuery = playersCol.col.orderBy("elo", "desc");

    if (onlyBrazilians)
      playersQuery = playersQuery.where("isBrazilian", "==", onlyBrazilians);

    const playersSnaps = await playersQuery.get();

    const docs = paginationSlicer(startAfter, playersSnaps.docs);

    const players: Player[] = [];
    docs.forEach((playerDoc) => {
      const playerNoRef = playerDoc.data() as Player;
      players.push({ ...playerNoRef, firebaseRef: playerDoc.id });
    });

    res.status(200).send({
      status: "success",
      message: `Jogadores encontrados (total: ${players.length})`,
      data: { players: players },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
