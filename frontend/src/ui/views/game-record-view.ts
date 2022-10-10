import { doc, getDoc } from "firebase/firestore";

import { DateUtils } from "../../infra/date_utils";
import { Globals as g } from "../../infra/globals";
import { EnvState, envState } from "../../infra/env";
import { addFirebaseRef } from "../../infra/utils";
import { RouteEnum } from "../../routing/router";

import { FirebaseRef } from "../../models/firebase_models";
import { Color, GameRecord, resultString } from "../../models/game_record";

import { UiUtils } from "../ui_utils";
import GameRecordsTable from "../components/game_records_table";
import Elo from "../../models/elo";

declare const glift: any;

export default class GameRecordView extends HTMLElement {
  static readonly tag: string = "game-record-view";

  private declare gameRecord: GameRecord;

  constructor(public readonly gameRecordRef: FirebaseRef) {
    super();
  }

  private getGameRecord = async (): Promise<void> => {
    const playerDoc = await getDoc(
      doc(g.db, "game_records", this.gameRecordRef)
    );

    this.gameRecord = addFirebaseRef(
      playerDoc.data() as GameRecord,
      playerDoc.id
    );
  };

  async connectedCallback(): Promise<void> {
    document.title = "Partida";

    this.prepareGameRecordPage();

    await this.getGameRecord();

    if (this.gameRecord) {
      document.title = `
        Partida | 
          ${this.gameRecord.blackPlayer!.name} 
          vs 
          ${this.gameRecord.whitePlayer!.name}
      `;

      this.setGameRecordPage();
    }
  }

  private prepareGameRecordPage = (): void => {
    this.innerHTML += /*html*/ `
      <div id="players-names"></div>
      
      <div id="card"></div>

      <div id="glift"></div>
    `;
  };

  private setGameRecordPage = (): void => {
    this.setPlayersNames();
    this.setGameRecordCard();
    this.addSgfDiagram();

    this.append(
      new GameRecordsTable(
        "Partidas entre",
        this.gameRecord.blackRef,
        this.gameRecord.whiteRef
      )
    );
  };

  private setPlayersNames = (): void => {
    const playerNamesDiv: HTMLDivElement =
      this.querySelector("#players-names")!;

    const [black, white] = [
      this.gameRecord.blackPlayer!,
      this.gameRecord.whitePlayer!,
    ];

    const [blackWins, whiteWins] = this.blackWhiteWins;

    const [blackFlags, whiteFlags] = [
      UiUtils.allFlags(black.countries),
      UiUtils.allFlags(white.countries),
    ];

    const [blackElo, whiteElo] = [
      new Elo(black.currentElo!),
      new Elo(white.currentElo!),
    ];

    playerNamesDiv.innerHTML = /*html*/ `
      <route-link href="${RouteEnum.players}/${this.gameRecord.blackRef}">
        <h2 id="black">
          ${blackElo.danKyuLevel()}
          ${blackFlags}
          <span ${blackWins}>${black.name}</span>
        </h2>
      </route-link>

      ${UiUtils.playerPicture(this.gameRecord.blackPlayer!.picture)}

      <svg>
        <circle 
          cx="25" 
          cy="25" 
          r="15" 
          stroke="white" 
          stroke-width="2.5" 
          fill="black" />
      </svg>

      <h2>vs</h2>

      <svg>
        <circle 
          cx="25" 
          cy="25" 
          r="14.5" 
          stroke="black" 
          stroke-width="2.5" 
          fill="white" />
      </svg>

      ${UiUtils.playerPicture(this.gameRecord.whitePlayer!.picture)}

      <route-link href="${RouteEnum.players}/${this.gameRecord.whiteRef}">
        <h2 id="white">
          <span ${whiteWins}>${white.name}</span>
          ${whiteFlags}
          ${whiteElo.danKyuLevel()}
        </h2>
      </route-link>
    `;
  };

  private get blackWhiteWins(): [string, string] {
    return [
      this.gameRecord.result.whoWins === Color.Black ? "winner" : "loser",
      this.gameRecord.result.whoWins === Color.White ? "winner" : "loser",
    ];
  }

  private setGameRecordCard = (): void => {
    const gameRecordCardDiv: HTMLDivElement = this.querySelector("#card")!;
    const gameDate = new Date(this.gameRecord.date);

    const formattedDate = DateUtils.formatDate(gameDate);

    const handicap = this.gameRecord.handicap ? this.gameRecord.handicap : "0";

    const [blackWins, whiteWins] = this.blackWhiteWins;

    const sgfButton = this.gameRecord.sgf
      ? /*html*/ `<a id="download">SGF</a>`
      : /*html*/ `<span>&mdash;</span>`;

    gameRecordCardDiv.innerHTML = /*html*/ `
      <div id="legend">
        <span>Elo Dif</span>
        <span>Elo</span>
        <span>Com-pensa-ção</span>
        <span>Data</span>
        <span>Resultado</span>
        <span>Baixar</span>
        <span>Evento</span>
        <span>Elo</span>
        <span>Elo Dif</span>
      </div>

      <div id="content">
        <span ${blackWins}>
          ${UiUtils.signedEloDelta(this.gameRecord!.eloData!.eloDeltaBlack)}
        </span>

        <span>${this.gameRecord!.eloData!.atTheTimeBlackElo}</span>

        <span>${handicap}</span>

        <span>${formattedDate}</span>

        <span>${resultString(this.gameRecord.result)}</span>

        ${sgfButton} 

        ${UiUtils.gameEventLink(this.gameRecord)}
        
        <span>${this.gameRecord!.eloData!.atTheTimeWhiteElo}</span>

        <span ${whiteWins}>
          ${UiUtils.signedEloDelta(this.gameRecord!.eloData!.eloDeltaWhite)}
        </span>
        
      </div>
    `;

    if (this.gameRecord.sgf) this.setDownloadButton();
  };

  private setDownloadButton = (): void => {
    const sgfDownloadA: HTMLAnchorElement = this.querySelector("a#download")!;

    const gameDate = new Date(this.gameRecord.date);

    const formattedDate = DateUtils.formatDate(gameDate).replaceAll("/", "-");

    const [blackName, whiteName] = [
      this.gameRecord.blackPlayer!.name,
      this.gameRecord.whitePlayer!.name,
    ];

    const blob = new Blob([this.gameRecord.sgf!], {
      type: "text/plain;charset=utf-8",
    });
    const fileUrl = URL.createObjectURL(blob);
    const fileName = `${formattedDate} - ${blackName} vs ${whiteName}`;
    sgfDownloadA.download = `${fileName}.sgf`;
    sgfDownloadA.href = fileUrl;
  };

  private addSgfDiagram = (): void => {
    if (!this.gameRecord.sgf) {
      const gliftDiv: HTMLDivElement = this.querySelector("div#glift")!;
      gliftDiv.style.display = "none";
    } else {
      const gliftScript = document.createElement("script");
      gliftScript.type = "text/javascript";
      const gliftScriptName = "glift_1_1_2.min.js";
      gliftScript.src =
        envState === EnvState.dev
          ? `/local/${gliftScriptName}`
          : `/${gliftScriptName}`;
      gliftScript.toggleAttribute("async");

      gliftScript.onload = () => {
        try {
          glift.create({
            divId: "glift",
            sgf: {
              sgfString: this.gameRecord!.sgf,
            },
            display: {
              theme: "DEPTH",
              goBoardBackground: "images/purty_wood.png",
              disableZoomForMobile: true,
            },
          });
        } catch (e) {
          console.log(e);
        }
      };

      document.head.appendChild(gliftScript);
    }
  };
}
