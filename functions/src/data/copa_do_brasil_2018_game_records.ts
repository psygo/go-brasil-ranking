import { Color, GameRecord } from "../../../frontend/src/models/game_record";
import { findEventRef, findPlayerRef } from "../infra";

export const copaDoBrasil2018: readonly GameRecord[] = [
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Hissao Uyama"),
    date: new Date(2018, 8, 10).getTime(),
    result: {
      whoWins: Color.White,
    },
    gameEventRef: findEventRef("Copa do Brasil 2018"),
  },
];
