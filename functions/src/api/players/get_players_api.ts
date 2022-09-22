import { Player } from "../../../../frontend/src/models/player";
import { playersCol } from "../../collections/players_col";
import { ExpressApiRoute, howMany } from "../../infra";

export const getPlayers: ExpressApiRoute = async (req, res) => {
  try {
    const limit = howMany(req.query.limite as string);

    const playersDocs = await playersCol.col
      .limit(limit)
      .orderBy("elo", "desc")
      .get();

    const players: Player[] = [];
    playersDocs.forEach((playerDoc) => {
      const playerNoRef = playerDoc.data() as Player;
      players.push({ ...playerNoRef, firebaseRef: playerDoc.id });
    });

    res.status(200).send({
      status: "Sucesso",
      message: `Jogadores encontrados (total: ${players.length}`,
      data: { players: players },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
