import {
  BrazilianState,
  CountryName,
} from "../../../../frontend/src/models/country";
import { GoServers, Player } from "../../../../frontend/src/models/player";

import { pic_alexandre_amaro } from "./PicsBase64/pic_alexandre_amaro";
import { pic_amir_fragman } from "./PicsBase64/pic_amir_fragman";
import { pic_ana_maria_cavalcanti } from "./PicsBase64/pic_ana_maria_cavalcanti";
import { pic_ariel_oliveira } from "./PicsBase64/pic_ariel_oliveira";
import { pic_audrey_luciano_filho } from "./PicsBase64/pic_audrey_luciano";
import { pic_augusto_cezar } from "./PicsBase64/pic_augusto_cezar";
import { pic_beatriz_neves } from "./PicsBase64/pic_beatriz_neves";
import { pic_bruno_aragao } from "./PicsBase64/pic_bruno_aragao";
import { pic_bruno_borchartt } from "./PicsBase64/pic_bruno_borchartt";
import { pic_caio_chagas } from "./PicsBase64/pic_caio_chagas";
import { pic_carlos_dutra } from "./PicsBase64/pic_carlos_dutra";
import { pic_carlos_esteves } from "./PicsBase64/pic_carlos_esteves";
import { pic_celso_scaff } from "./PicsBase64/pic_celso_scaff";
import { pic_chico_motta } from "./PicsBase64/pic_chico_motta";
import { pic_diogo_barbosa } from "./PicsBase64/pic_diogo_barbosa";
import { pic_edivan } from "./PicsBase64/pic_edivan";
import { pic_eduardo_takeuti } from "./PicsBase64/pic_eduardo_takeuti";
import { pic_efraim_queiroz } from "./PicsBase64/pic_efraim_queiroz";
import { pic_elias_rodrigues } from "./PicsBase64/pic_elias_rodrigues";
import { pic_emanuel_araujo } from "./PicsBase64/pic_emanuel_araujo";
import { pic_eren_sangueve } from "./PicsBase64/pic_eren_sangueve";
import { pic_fabricio_caluza } from "./PicsBase64/pic_fabricio_caluza";
import { pic_felipe_pait } from "./PicsBase64/pic_felipe_pait";
import { pic_felipe_riemsdijk } from "./PicsBase64/pic_felipe_riemsdijk";
import { pic_gabriel_castilho } from "./PicsBase64/pic_gabriel_castilho";
import { pic_gabriel_makio } from "./PicsBase64/pic_gabriel_makio";
import { pic_guilherme_francisco } from "./PicsBase64/pic_guilherme_francisco";
import { pic_guilherme_hatori } from "./PicsBase64/pic_guilherme_hatori";
import { pic_haruo_kitano } from "./PicsBase64/pic_haruo_kitano";
import { pic_helcio_pacheco } from "./PicsBase64/pic_helcio_pacheco";
import { pic_hiro_okawa } from "./PicsBase64/pic_hiro_okawa";
import { pic_jieverson_maissiat } from "./PicsBase64/pic_jieverson_maissiat";
import { pic_juno_jo } from "./PicsBase64/pic_juno_jo";
import { pic_laercio_pereira } from "./PicsBase64/pic_laercio_pereira";
import { pic_laura_avram } from "./PicsBase64/pic_laura_avram";
import { pic_lucas_cristovam } from "./PicsBase64/pic_lucas_cristovam";
import { pic_philippe_fanaro } from "./PicsBase64/pic_philippe_fanaro";
import { pic_rachel_esteves } from "./PicsBase64/pic_rachel_esteves";
import { pic_simao_goncalves } from "./PicsBase64/pic_simao_goncalves";
import { pic_thiago_augusto } from "./PicsBase64/pic_thiago_augusto";
import { pic_vanderson_rodrigues } from "./PicsBase64/pic_vanderson_rodrigues";
import { pic_wang_feng } from "./PicsBase64/pic_wang_feng";
import { pic_yuichiro_shimawaki } from "./PicsBase64/pic_yuichiro_shimawaki";

export const fakePlayers: readonly Player[] = [
  {
    name: "Adalberto Reis Duarte",
    nicks: [{ name: "Adalberto", server: GoServers.ogs }],
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
    picture: pic_alexandre_amaro,
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
    picture: pic_amir_fragman,
    nicks: [{ name: "wade", server: GoServers.ogs }],
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
    picture: pic_ana_maria_cavalcanti,
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
    picture: pic_ariel_oliveira,
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
    picture: pic_audrey_luciano_filho,
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
    picture: pic_augusto_cezar,
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
    picture: pic_beatriz_neves,
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
    picture: pic_bruno_aragao,
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
    picture: pic_bruno_borchartt,
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
    picture: pic_caio_chagas,
    nicks: [{ name: "cchagas", server: GoServers.ogs }],
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
    picture: pic_carlos_dutra,
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
    picture: pic_carlos_esteves,
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
    picture: pic_celso_scaff,
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
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 0,
  },
  {
    name: "Christian Spohn",
    countries: [
      {
        name: CountryName.germany,
      },
    ],
    elo: 1400,
  },
  {
    name: "Cristiane Amaral Bertolino",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.sp,
        city: "São Paulo"
      },
    ],
    elo: 1000,
  },
  {
    name: "Diogo Barbosa",
    nicks: [{ name: "Diogo Barbosa", server: GoServers.ogs }],
    picture: pic_diogo_barbosa,
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
    picture: pic_edivan,
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
    picture: pic_eduardo_takeuti,
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
    picture: pic_efraim_queiroz,
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
    picture: pic_elias_rodrigues,
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
    picture: pic_emanuel_araujo,
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
    picture: pic_eren_sangueve,
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
    picture: pic_fabricio_caluza,
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
    picture: pic_felipe_riemsdijk,
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
    picture: pic_felipe_pait,
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
    picture: pic_chico_motta,
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
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 550,
  },
  {
    name: "Gabriel Hissao Makio",
    picture: pic_gabriel_makio,
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
    picture: pic_gabriel_castilho,
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
    picture: pic_guilherme_francisco,
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 1000,
  },
  {
    name: "Guilherme Hatori",
    picture: pic_guilherme_hatori,
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
    name: "Haruo Kitano",
    picture: pic_haruo_kitano,
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
    picture: pic_helcio_pacheco,
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
    picture: pic_hiro_okawa,
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
    picture: pic_jieverson_maissiat,
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
    picture: pic_juno_jo,
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
    picture: pic_laura_avram,
    countries: [
      {
        name: CountryName.romania,
      },
    ],
    elo: 2250,
  },
  {
    name: "Leonardo Inomata",
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
    picture: pic_lucas_cristovam,
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
    picture: pic_rachel_esteves,
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
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 1400,
  },
  {
    name: "Renan Pablo Cruz",
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
    picture: pic_simao_goncalves,
    countries: [
      {
        name: CountryName.portugal,
      },
    ],
    elo: 2400,
  },
  {
    name: "Sophie Pagès",
    nicks: [{ name: "cixidetroy", server: GoServers.ogs }],
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
    picture: pic_thiago_augusto,
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
    picture: pic_vanderson_rodrigues,
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
    picture: pic_wang_feng,
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
    picture: pic_yuichiro_shimawaki,
    countries: [
      {
        name: CountryName.japan,
      },
    ],
    elo: 2600,
  },
];
