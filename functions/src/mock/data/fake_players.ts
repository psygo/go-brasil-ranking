import {
  BrazilianState,
  CountryName,
} from "../../../../frontend/src/models/country";
import { GoServers, Player } from "../../../../frontend/src/models/player";
import { fake_profile_picture_philippe_fanaro } from "./fake_base64_pics";

export const fakePlayers: readonly Player[] = [
  {
    name: "Alexandre Amaro",
    nicks: [{ name: "babao", server: GoServers.ogs }],
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
    name: "Amir Fragman",
    nicks: [{ name: "wade", server: GoServers.ogs }],
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
    name: "André Barbosa",
    nicks: [{ name: "seupera", server: GoServers.ogs }],
    email: "andre@mail.com",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 1500,
  },
  {
    name: "Ariel Oliveira",
    nicks: [{ name: "Oliv.AS", server: GoServers.ogs }],
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
    name: "Audrey Luciano Filho",
    nicks: [{ name: "AudreyLucianoFilho", server: GoServers.ogs }],
    email: "audrey@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.ce,
        city: "Fortaleza",
      },
    ],
    elo: 900,
  },
  {
    name: "Caio Ribeiro Chagas",
    nicks: [{ name: "cchagas", server: GoServers.ogs }],
    email: "caio@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.pr,
      },
    ],
    elo: 1400,
  },
  {
    name: "Emanuel Araújo",
    nicks: [{ name: "Cactus Juice", server: GoServers.ogs }],
    email: "emanuel@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.rj,
        city: "Rio de Janeiro",
      },
    ],
    elo: 1650,
  },
  {
    name: "Fabrício Caluza Machado",
    nicks: [{ name: "Fabrício", server: GoServers.ogs }],
    email: "fabricio@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.pr,
        city: "Curitiba",
      },
    ],
    elo: 1750,
  },
  {
    name: "Erendiro Pedro Sangueve",
    nicks: [{ name: "AfricanGrimReaper", server: GoServers.ogs }],
    email: "eren@mail.com",
    countries: [
      {
        name: CountryName.angola,
      },
    ],
    elo: 1400,
  },
  {
    name: "Felipe Herman van Riemsdijk",
    nicks: [{ name: "riemsdijk", server: GoServers.ogs }],
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
    name: "Gabriel Garcia",
    nicks: [{ name: "PutzGrila", server: GoServers.ogs }],
    email: "gabriel@mail.com",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 550,
  },
  {
    name: "Gabriel Ventura",
    nicks: [{ name: "Pedepano", server: GoServers.ogs }],
    email: "gabriel@mail.com",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 1600,
  },
  {
    name: "Guilherme Francisco de Souza Silva",
    nicks: [{ name: "XIKO", server: GoServers.ogs }],
    email: "guilherme@mail.com",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 1000,
  },
  {
    name: "Hélcio Alexandre Pacheco",
    nicks: [{ name: "HelcioAlex", server: GoServers.ogs }],
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
    name: "Laércio Pereira",
    nicks: [{ name: "laercioskt", server: GoServers.ogs }],
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
    name: "Laura Augustina Avram",
    nicks: [{ name: "balaura", server: GoServers.ogs }],
    email: "laura@mail.com",
    countries: [
      {
        name: CountryName.romania,
      },
    ],
    elo: 2250,
  },
  {
    name: "Lucas Cristovam",
    nicks: [{ name: "lukeverso", server: GoServers.ogs }],
    email: "lucas@gmail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 900,
  },
  {
    name: "Philippe Fanaro",
    nicks: [{ name: "psygo", server: GoServers.ogs }],
    picture: fake_profile_picture_philippe_fanaro,
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
    name: "Rui Malhado",
    nicks: [{ name: "Phelan", server: GoServers.ogs }],
    email: "rui@gmail.com",
    countries: [
      {
        name: CountryName.portugal,
      },
    ],
    elo: 1700,
  },
  {
    name: "Sophie Pagès",
    nicks: [{ name: "cixidetroy", server: GoServers.ogs }],
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
    name: "Vanderson da Silva Rodrigues",
    nicks: [{ name: "vandito", server: GoServers.ogs }],
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
