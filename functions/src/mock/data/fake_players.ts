import {
  BrazilianState,
  CountryName,
} from "../../../../frontend/src/models/country";
import { Player } from "../../../../frontend/src/models/player";
import { fake_profile_picture } from "./fake_base64_pics";

export const fakePlayers: readonly Player[] = [
  {
    name: "Philippe Fanaro",
    picture: fake_profile_picture,
    email: "philippefanaro@gmail.com",
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
    email: "fabricio@mail.com",
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
    email: "ariel@mail.com",
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
    email: "laura@mail.com",
    countries: [
      {
        name: CountryName.romania,
      },
    ],
    elo: 2250,
  },
  {
    name: "Emanuel Araújo",
    email: "emanuel@mail.com",
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
    email: "sophie@mail.com",
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
    email: "laercio@mail.com",
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
    email: "gabriel@mail.com",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 1600,
  },
  {
    name: "Gabriel Garcia",
    email: "gabriel@mail.com",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 550,
  },
  {
    name: "Vanderson da Silva Rodrigues",
    email: "vanderson@mail.com",
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
    email: "audrey@mail.com",
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
    email: "amir@mail.com",
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
    email: "alexandre@mail.com",
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
    email: "wang@mail.com",
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
    email: "helcio@mail.com",
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
    email: "fh.vanriemsdijk@gmail.com",
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
    name: "Yuichiro Shimawaki",
    email: "bonbare@infoseek.jp",
    countries: [
      {
        name: CountryName.japan,
      },
    ],
    elo: 2600,
  },
];
