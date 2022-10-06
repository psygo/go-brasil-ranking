import { Color, GameRecord } from "../../../../frontend/src/models/game_record";

import {
  fakeSgf1_empty,
  fakeSgf2_fabricio_vs_philippe,
  findEventRef,
  findPlayerRef,
} from "./fake_game_records";

export const dogempGames: readonly GameRecord[] = [
  // ***************************************************************************
  // Nov 2021
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Audrey Luciano Filho"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2021, 10, 2).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Ventura"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2021, 10, 8).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Ventura"),
    whiteRef: findPlayerRef("Erendiro Pedro Sangueve"),
    date: new Date(2021, 10, 14).getTime(),
    result: {
      whoWins: Color.White,
      difference: 151.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Erendiro Pedro Sangueve"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2021, 10, 17).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Rui Malhado"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2021, 10, 25).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  // ***************************************************************************
  // Dez 2021
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Lucas Cristovam"),
    whiteRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    date: new Date(2021, 11, 6).getTime(),
    result: {
      whoWins: Color.Black,
      time: true,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Erendiro Pedro Sangueve"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2021, 11, 9).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("André Barbosa"),
    date: new Date(2021, 11, 11).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Erendiro Pedro Sangueve"),
    whiteRef: findPlayerRef("Laura Augustina Avram"),
    date: new Date(2021, 11, 11).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Lucas Cristovam"),
    whiteRef: findPlayerRef("Sophie Pagès"),
    date: new Date(2021, 11, 12).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Fabrício Caluza Machado"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2021, 11, 12).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    date: new Date(2021, 11, 13).getTime(),
    result: {
      whoWins: Color.Black,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Rui Malhado"),
    date: new Date(2021, 11, 18).getTime(),
    result: {
      whoWins: Color.Black,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    whiteRef: findPlayerRef("André Barbosa"),
    date: new Date(2021, 11, 19).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("Gabriel Ventura"),
    date: new Date(2021, 11, 20).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
      difference: 40.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Erendiro Pedro Sangueve"),
    whiteRef: findPlayerRef("Rui Malhado"),
    date: new Date(2021, 11, 20).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Rui Malhado"),
    whiteRef: findPlayerRef("Laura Augustina Avram"),
    date: new Date(2021, 11, 22).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Erendiro Pedro Sangueve"),
    whiteRef: findPlayerRef("Fabrício Caluza Machado"),
    date: new Date(2021, 11, 24).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Laura Augustina Avram"),
    whiteRef: findPlayerRef("Fabrício Caluza Machado"),
    date: new Date(2021, 11, 28).getTime(),
    result: {
      whoWins: Color.Black,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Laura Augustina Avram"),
    date: new Date(2021, 11, 29).getTime(),
    result: {
      whoWins: Color.White,
      difference: 6.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Lucas Cristovam"),
    whiteRef: findPlayerRef("André Barbosa"),
    date: new Date(2021, 11, 31).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
      difference: 61.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  // ***************************************************************************
  // Jan 2022
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Gabriel Garcia"),
    whiteRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    date: new Date(2022, 0, 9).getTime(),
    result: {
      whoWins: Color.White,
      difference: 109.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("Laércio Pereira"),
    date: new Date(2022, 0, 10).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    whiteRef: findPlayerRef("Ariel Oliveira"),
    date: new Date(2022, 0, 10).getTime(),
    result: {
      whoWins: Color.Black,
      time: true,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    whiteRef: findPlayerRef("Fabrício Caluza Machado"),
    date: new Date(2022, 0, 10).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Ventura"),
    whiteRef: findPlayerRef("Ariel Oliveira"),
    date: new Date(2022, 0, 14).getTime(),
    result: {
      whoWins: Color.White,
      difference: 111.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("André Barbosa"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2022, 0, 15).getTime(),
    result: {
      whoWins: Color.White,
      difference: 63.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Guilherme Francisco de Souza Silva"),
    whiteRef: findPlayerRef("Fabrício Caluza Machado"),
    date: new Date(2022, 0, 15).getTime(),
    handicap: 6,
    result: {
      whoWins: Color.Black,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Laércio Pereira"),
    date: new Date(2022, 0, 16).getTime(),
    result: {
      whoWins: Color.Black,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Lucas Cristovam"),
    whiteRef: findPlayerRef("Ariel Oliveira"),
    date: new Date(2022, 0, 17).getTime(),
    handicap: 3,
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Lucas Cristovam"),
    whiteRef: findPlayerRef("Gabriel Ventura"),
    date: new Date(2022, 0, 20).getTime(),
    handicap: 3,
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2022, 0, 23).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.Black,
      difference: 39.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Lucas Cristovam"),
    whiteRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    date: new Date(2022, 0, 23).getTime(),
    handicap: 3,
    result: {
      whoWins: Color.Black,
      difference: 52.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Laércio Pereira"),
    whiteRef: findPlayerRef("André Barbosa"),
    date: new Date(2022, 0, 24).getTime(),
    result: {
      whoWins: Color.Black,
      difference: 13.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Guilherme Francisco de Souza Silva"),
    whiteRef: findPlayerRef("Gabriel Ventura"),
    date: new Date(2022, 0, 24).getTime(),
    handicap: 2,
    result: {
      whoWins: Color.Black,
      difference: 17.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Laura Augustina Avram"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2022, 0, 27).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Fabrício Caluza Machado"),
    whiteRef: findPlayerRef("Rui Malhado"),
    date: new Date(2022, 0, 27).getTime(),
    result: {
      whoWins: Color.Black,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Ventura"),
    whiteRef: findPlayerRef("Fabrício Caluza Machado"),
    date: new Date(2022, 0, 31).getTime(),
    result: {
      whoWins: Color.White,
      difference: 88.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Laércio Pereira"),
    whiteRef: findPlayerRef("Laura Augustina Avram"),
    date: new Date(2022, 0, 31).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("André Barbosa"),
    date: new Date(2022, 1, 5).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.Black,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  // ***************************************************************************
  // Fev 2022
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Gabriel Garcia"),
    whiteRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    date: new Date(2022, 1, 8).getTime(),
    result: {
      whoWins: Color.Black,
      difference: 5.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Garcia"),
    whiteRef: findPlayerRef("Ariel Oliveira"),
    date: new Date(2022, 1, 11).getTime(),
    result: {
      whoWins: Color.White,
      time: true,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Guilherme Francisco de Souza Silva"),
    whiteRef: findPlayerRef("Emanuel Araújo"),
    date: new Date(2022, 1, 12).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Fabrício Caluza Machado"),
    date: new Date(2022, 1, 13).getTime(),
    result: {
      whoWins: Color.Black,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    whiteRef: findPlayerRef("Ariel Oliveira"),
    date: new Date(2022, 1, 15).getTime(),
    result: {
      whoWins: Color.White,
      time: true,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("Emanuel Araújo"),
    date: new Date(2022, 1, 20).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.White,
      difference: 44.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Fabrício Caluza Machado"),
    whiteRef: findPlayerRef("Laércio Pereira"),
    date: new Date(2022, 1, 21).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Caio Ribeiro Chagas"),
    whiteRef: findPlayerRef("Guilherme Francisco de Souza Silva"),
    date: new Date(2022, 1, 21).getTime(),
    result: {
      whoWins: Color.Black,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Garcia"),
    whiteRef: findPlayerRef("Ariel Oliveira"),
    date: new Date(2022, 1, 22).getTime(),
    result: {
      whoWins: Color.White,
      difference: 108.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Caio Ribeiro Chagas"),
    whiteRef: findPlayerRef("Emanuel Araújo"),
    date: new Date(2022, 1, 22).getTime(),
    result: {
      whoWins: Color.White,
      difference: 24.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Laércio Pereira"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2022, 1, 24).getTime(),
    result: {
      whoWins: Color.White,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Emanuel Araújo"),
    whiteRef: findPlayerRef("Gabriel Ventura"),
    date: new Date(2022, 1, 28).getTime(),
    result: {
      whoWins: Color.Black,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Ventura"),
    whiteRef: findPlayerRef("Caio Ribeiro Chagas"),
    date: new Date(2022, 2, 2).getTime(),
    result: {
      whoWins: Color.White,
      difference: 13.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Laura Augustina Avram"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2022, 2, 6).getTime(),
    result: {
      whoWins: Color.White,
      difference: 4.5,
    },
    sgf: fakeSgf2_fabricio_vs_philippe,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    whiteRef: findPlayerRef("Gabriel Garcia"),
    date: new Date(2022, 2, 6).getTime(),
    result: {
      whoWins: Color.White,
      difference: 2.5,
    },
    sgf: fakeSgf1_empty,
    gameEventRef: findEventRef("DOGemP"),
  },
];
