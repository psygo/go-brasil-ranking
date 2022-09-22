import { playersCol } from "../../collections/players_col";
import { ExpressApiRoute } from "../../infra";

export const getPlayer: ExpressApiRoute = async (req, res) => {
  try {
    const id = req.params.playerId;

    const playerRef = playersCol.col.doc(id);

    const playerDoc = await playerRef.get();

    if (req.query.existe === "")
      res.status(200).send({
        status: "Sucesso",
        message: "Jogador existe.",
        data: playerDoc.exists,
      });
    else
      res.status(200).send({
        status: "Sucesso",
        message: "Jogador encontrado.",
        data: { player: playerDoc.data() },
      });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
