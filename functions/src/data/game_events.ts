import {
  GameEventTypes,
  TournamentOrLeague,
} from "../../../frontend/src/models/game_event";
import { players } from "./players";

// TODO3: Needs to be eliminated once we stop forcing indices...
const findPlayerRef = (name: string): string =>
  players.findIndex((p) => p.name.includes(name))!.toString();

export const gameEvents: readonly TournamentOrLeague[] = [
  {
    type: GameEventTypes.tournament,
    name: "Copa do Brasil 2022",
    dates: [new Date(2022, 8, 10).getTime(), new Date(2022, 8, 11).getTime()],
    finalOrderingRefs: [
      findPlayerRef("Wang Sen Feng"),
      findPlayerRef("Gabriel Marcondes de Castilho"),
      findPlayerRef("Renan Pablo Cruz"),
      findPlayerRef("Felipe Herman van Riemsdijk"),
      findPlayerRef("Mitsuyuki Shintaku"),
      findPlayerRef("Hélcio Alexandre Pacheco"),
      findPlayerRef("Laércio Pereira"),
      findPlayerRef("Yukio Hiramatsu"),
      findPlayerRef("Osamu Murai"),
      findPlayerRef("Shuji Hashimoto"),
      findPlayerRef("Masayasu Kihara"),
      findPlayerRef("Elias Bandeira Rodrigues Cardoso"),
      findPlayerRef("Thiago Augusto da Silva"),
      findPlayerRef("Bruno Aragão Wahlbuhl Gonçalves"),
      findPlayerRef("Lucas Torrisi"),
      findPlayerRef("Felipe Bottega Diniz"),
      findPlayerRef("Emanuel Araújo"),
      findPlayerRef("Yoshito Yoshitake"),
      findPlayerRef("Christian Spohn"),
      findPlayerRef("Kunio Yoshida"),
      findPlayerRef("Kisho Kawahara"),
      findPlayerRef("Mieko Murai"),
      findPlayerRef("Nicholas Jun de Toledo"),
      findPlayerRef("Cristiano Yuji Sato"),
      findPlayerRef("Tsuneo Koike"),
      findPlayerRef("Sung Wan Nam"),
      findPlayerRef("Lívia Aiko de Toledo"),
      findPlayerRef("Matao Kumao"),
    ],
  },
  {
    type: GameEventTypes.league,
    name: "PGLATC 2022",
    description: "Pandanet Latin American Team Championship 2022",
    dates: [new Date(2022, 0, 29).getTime(), new Date(2022, 10, 10).getTime()],
  },
  {
    type: GameEventTypes.league,
    name: "DOGemP",
    description: "Dojo Online de Go em Português",
    dates: [new Date(2021, 10, 10).getTime(), new Date(2022, 2, 10).getTime()],
  },
];
