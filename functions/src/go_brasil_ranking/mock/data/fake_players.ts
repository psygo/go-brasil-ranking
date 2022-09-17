import {
  BrazilianState,
  CountryName,
} from "../../../../../go_brasil_ranking/src/models/country";
import { Player } from "../../../../../go_brasil_ranking/src/models/player";

export const fakePlayers: readonly Player[] = [
  {
    name: "Philippe Fanaro",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 2150,
  },
  {
    name: "Fabrício Caluza Machado",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.df,
        city: "Brasília",
      },
    ],
    elo: 1750,
  },
  {
    name: "Ariel Oliveira",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.df,
        city: "São Paulo",
      },
    ],
    elo: 1050,
  },
  {
    name: "Laura Augustina Avram",
    countries: [
      {
        name: CountryName.romania,
      },
    ],
    elo: 2250,
  },
  {
    name: "Emanuel Araújo",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.rj,
        city: "São Paulo",
      },
    ],
    elo: 1650,
  },
  {
    name: "Sophie Pagès",
    countries: [
      {
        name: CountryName.france,
      },
      {
        name: CountryName.brazil,
      },
    ],
    elo: 700,
  },
  {
    name: "Laércio Pereira",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.pr,
        city: "Curitiba",
      },
    ],
    elo: 2000,
  },
  {
    name: "Gabriel Ventura",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 1600,
  },
  {
    name: "Gabriel Garcia",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 550,
  },
  {
    name: "Vanderson da Silva Rodrigues",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.al,
      },
    ],
    elo: 550,
  },
  {
    name: "Audrey Luciano Filho",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.ce,
      },
    ],
    elo: 900,
  },
  {
    name: "Amir Fragman",
    countries: [
      {
        name: CountryName.israel,
      },
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 2500,
  },
  {
    name: "Alexandre Amaro",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 2400,
  },
  {
    name: "Wang Seng Feng",
    countries: [
      {
        name: CountryName.taiwan,
      },
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 2400,
  },
  {
    name: "Hélcio Alexandre Pacheco",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 2100,
  },
  {
    name: "Felipe Herman van Riemsdijk",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 2100,
  },
];
