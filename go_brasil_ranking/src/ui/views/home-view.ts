import { apiUrl } from "../../infra/setup";
import Elo from "../../models/elo";
import {
  GameRecord,
  resultString,
  Result__FromServer,
} from "../../models/game_record";
import { Player } from "../../models/player";

export default class HomeView extends HTMLElement {
  static readonly tag: string = "home-view";

  private getPlayers = async (): Promise<Player[]> => {
    const response = await fetch(`${apiUrl}/players`);
    const json = await response.json();
    return json["data"]["players"];
  };

  private getGameRecords = async (): Promise<GameRecord[]> => {
    const response = await fetch(`${apiUrl}/game-records`);
    const json = await response.json();
    return json["data"]["gameRecords"];
  };

  async connectedCallback() {
    const players = await this.getPlayers();

    this.setPlayersTable(players);

    const gameRecords = await this.getGameRecords();

    this.setGameRecordsTable(gameRecords);
  }

  private setGameRecordsTable = (gameRecords: GameRecord[]): void => {
    this.innerHTML += `
      <table id="game-records">
        <caption>Partidas</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Preto</th>
            <th>Branco</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;

    const gameRecordsTableBody = this.querySelector(
      "table#game-records > tbody"
    )!;

    for (let i = gameRecords.length - 1; i >= 0; i--) {
      const gameRecord = gameRecords[i];
      const result = gameRecord.result as unknown as Result__FromServer;

      gameRecordsTableBody.innerHTML += `
        <tr id="${gameRecord.firebaseRef}">
          <td>${gameRecord.firebaseRef}</td>
          <td>${gameRecord.blackName}</td>
          <td>${gameRecord.whiteName}</td>
          <td>${resultString(result)}</td>
        </tr>
      `;
    }
  };

  private setPlayersTable = (players: Player[]): void => {
    this.innerHTML += `
      <table id="players">
        <caption>Jogadores</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Elo</th>
            <th>Dan/Kyu</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;

    const playersTableBody = this.querySelector("table#players > tbody")!;

    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      const elo = new Elo(player.elo);

      playersTableBody.innerHTML += `
        <tr id="${player.firebaseRef}">
          <td>${i + 1}</td>
          <td>${player.name}</td>
          <td>${elo.num}</td>
          <td>${elo.danKyuLevel}</td>
        </tr>
      `;
    }
  };
}
