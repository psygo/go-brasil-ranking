import { DateEloData } from "../../../../frontend/src/models/game_record";
import { ExpressApiRoute } from "../../infra";

import { queryForPlayersGameRecords } from "../game_records/get_game_records_api";

export const getPlayerDateEloData: ExpressApiRoute = async (req, res) => {
  try {
    const playerRef = req.params.playerId;

    const allPlayerGames = await queryForPlayersGameRecords(playerRef);

    console.log(allPlayerGames.length);

    const playerDatesAndElos: DateEloData[] = allPlayerGames
      .map((g) => ({
        date: g.date,
        atTheTimeElo:
          playerRef === g.blackRef
            ? g.eloData!.atTheTimeBlackElo
            : g.eloData!.atTheTimeWhiteElo,
        eloDelta:
          playerRef === g.blackRef
            ? g.eloData!.eloDeltaBlack
            : g.eloData!.eloDeltaWhite,
      }))
      .reverse();

    console.log(playerDatesAndElos.length);

    res.status(200).send({
      status: "Sucesso",
      message: "Elos encontrados.",
      data: { dateEloData: playerDatesAndElos },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
