import {
  BrazilianState,
  CountryName,
} from "../../../../frontend/src/models/country";
import { GoServers, Player } from "../../../../frontend/src/models/player";
import { pic_laercio_pereira } from "./Pics/pic_laercio_pereira";

import { pic_philippe_fanaro } from "./Pics/pic_philippe_fanaro";

export const fakePlayers: readonly Player[] = [
  {
    name: "Adalberto Reis Duarte",
    nicks: [{ name: "Adalberto", server: GoServers.ogs }],
    email: "adalberto@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.pa,
      },
    ],
    elo: 2000,
  },
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
    name: "Ana Maria Cavalcanti",
    email: "ana@gmail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1000,
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
    name: "Anivaldo Reis",
    nicks: [{ name: "seupera", server: GoServers.ogs }],
    email: "andre@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.ce,
        city: "Fortaleza",
      },
    ],
    elo: 800,
  },
  {
    name: "Ariel Oliveira",
    nicks: [{ name: "GOiano", server: GoServers.ogs }],
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
    name: "Augusto Cezar",
    nicks: [{ name: "AugustoCezar", server: GoServers.ogs }],
    email: "augusto@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.rj,
      },
    ],
    elo: 1000,
  },
  {
    name: "Beatriz Bouchiglioni Neves",
    nicks: [{ name: "BeatrizBouchiglioniNeves", server: GoServers.ogs }],
    email: "beatriz@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1200,
  },
  {
    name: "Bruno Aragão Wahlbuhl Gonçalves",
    email: "beatriz@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1100,
  },
  {
    name: "Bruno Borchartt",
    email: "beatriz@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 2200,
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
    name: "Caio Sant Anna",
    nicks: [{ name: "caio_csan", server: GoServers.ogs }],
    email: "caio@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.pr,
      },
    ],
    elo: 700,
  },
  {
    name: "Carlos Dutra",
    email: "carlos@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1500,
  },
  {
    name: "Carlos Esteves",
    nicks: [{ name: "carlos.prog91", server: GoServers.ogs }],
    email: "carlos@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.rj,
      },
    ],
    elo: 600,
  },
  {
    name: "Celso Siqueira Scaff",
    email: "celso@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1700,
  },
  {
    name: "Cícero de Melo Lucas",
    nicks: [{ name: "Musashi-san", server: GoServers.ogs }],
    email: "cicero@mail.com",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 0,
  },
  {
    name: "Christian Spohn",
    email: "christian@mail.com",
    countries: [
      {
        name: CountryName.germany,
      },
    ],
    elo: 1400,
  },
  {
    name: "Diogo Barbosa",
    email: "diogo@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1600,
  },
  {
    name: "Edivan José Junior",
    nicks: [{ name: "juniorcloud7", server: GoServers.ogs }],
    email: "edivan@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 2300,
  },
  {
    name: "Eduardo Takeuti",
    nicks: [{ name: "edu4ever", server: GoServers.ogs }],
    email: "eduardo@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1900,
  },
  {
    name: "Efraim Queiroz",
    nicks: [{ name: "efraimqe", server: GoServers.ogs }],
    email: "efraim@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.df,
        city: "Brasília",
      },
    ],
    elo: 1500,
  },
  {
    name: "Elias Bandeira Rodrigues Cardoso",
    nicks: [{ name: "elias.rodriguescardoso", server: GoServers.ogs }],
    email: "elias@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.rj,
      },
    ],
    elo: 1900,
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
    name: "Felipe Pait",
    email: "pait@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1000,
  },
  {
    name: "Francisco Motta",
    nicks: [{ name: "ChicoMotta", server: GoServers.ogs }],
    email: "chico@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.rj,
        city: "Niterói",
      },
    ],
    elo: 1000,
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
    name: "Gabriel Hissao Makio",
    email: "gabriel@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1900,
  },
  {
    name: "Gabriel Marcondes de Catilho",
    email: "gabriel@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1900,
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
    name: "Guilherme Hatori",
    email: "guilherme@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1000,
  },
  {
    name: "Haruo Kitano",
    email: "haruo@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1500,
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
    name: "Hiro Okawa",
    email: "hiro@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 2200,
  },
  {
    name: "Jiéverson Maissiat",
    nicks: [{ name: "jieverson", server: GoServers.ogs }],
    email: "jieverson@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.rs,
        city: "Porto Alegre",
      },
    ],
    elo: 1300,
  },
  {
    name: "Julio Gabriel Otterback Pinheiro",
    nicks: [{ name: "bodlike", server: GoServers.ogs }],
    email: "julio@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.mt,
      },
    ],
    elo: 1500,
  },
  {
    name: "Juno Jo",
    email: "juno@mail.com",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 1800,
  },
  {
    name: "Laércio Pereira",
    nicks: [{ name: "laercioskt", server: GoServers.ogs }],
    picture: pic_laercio_pereira,
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
    name: "Leonardo Inomata",
    email: "leonardo@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1300,
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
    name: "Lúcio Picanço",
    email: "lucio@gmail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.ma,
      },
    ],
    elo: 1000,
  },
  {
    name: "Luiz Sato",
    nicks: [{ name: "biruta", server: GoServers.ogs }],
    email: "luiz@gmail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
      },
    ],
    elo: 2000,
  },
  {
    name: "Márton Divényi",
    nicks: [{ name: "MartDiv", server: GoServers.ogs }],
    email: "mart@gmail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.rj,
      },
    ],
    elo: 1200,
  },
  {
    name: "Murilo Oliveira",
    email: "murilo@gmail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1400,
  },
  {
    name: "Nelson Kenzo Tamashiro",
    email: "nelson@gmail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1500,
  },
  {
    name: "Patricia Bongiorno",
    email: "patricia@gmail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1000,
  },
  {
    name: "Pedro Regis",
    nicks: [{ name: "Lunps422", server: GoServers.ogs }],
    email: "pedro@gmail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.ce,
        city: "Fortaleza",
      },
    ],
    elo: 1000,
  },
  {
    name: "Philippe Fanaro",
    nicks: [{ name: "psygo", server: GoServers.ogs }],
    picture: pic_philippe_fanaro,
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
    name: "Rachel Esteves",
    nicks: [{ name: "Rachel Esteves", server: GoServers.ogs }],
    email: "rachel@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.rj,
      },
    ],
    elo: 600,
  },
  {
    name: "Rafael Leão",
    email: "rafael@mail.com",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 1400,
  },
  {
    name: "Renan Pablo Cruz",
    email: "renan@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1800,
  },
  {
    name: "Rodrigo Braz",
    email: "rodrigo@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1900,
  },
  {
    name: "Rodrigo Edelton Issa",
    email: "rodrigo@mail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1300,
  },
  {
    name: "Ronaldo Matayoshi",
    email: "ronaldo@mail.com",
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
    name: "Samuel Karasin",
    nicks: [{ name: "Samkar69", server: GoServers.ogs }],
    email: "samuel@gmail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 600,
  },
  {
    name: "Simão Gonçalves",
    nicks: [{ name: "TsukeShinogi", server: GoServers.ogs }],
    email: "samuel@gmail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 600,
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
    name: "Thiago Augusto",
    email: "thiago@gmail.com",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 1500,
  },
  {
    name: "Thiago Sinji Shimada Ramos",
    email: "thiago@gmail.com",
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
