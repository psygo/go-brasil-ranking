# Ranking Brasileiro de Go

Ferramentas utilizadas:

- Vanila HTML/SCSS/TS, com uma ou outra biblioteca (ex. Chart.js), mas _sem frameworks_
  - É um _SPA_ (Single-Page Application)
- Firebase (Servidor (Functions), Hospedagem, Autenticação e Banco de Dados (Firestore))

## Como rodar em desenvolvimento

Há vários scripts em cada uma das pastas importantes, para agilizar e facilitar o desenvolvimento. Esses scripts são todos `.sh`, rodando ou em Linux ou Mac &mdash; se alguém quiser transcrevê-los para Powershell, fique à vontade.

No momento, a maneira mais agradável de se rodar algo localemente é abrir pelo menos 3 terminais e rodar:

- `sh scripts/firebase_emulators.sh`
- `cd frontend && npm run dev`
- `cd functions && npm run dev`

## Em Produção

É preciso criar manualmente índices compostos para este aplicativo, o que só é possível manualmente com o Firebase. Seguem os índices necessários:

> Tabela atualizada em: 03/10/2022

| Collection ID | Fields indexed                         | Query scope | Status  |
| ------------- | -------------------------------------- | ----------- | ------- |
| game_records  | whiteRef Ascending date Descending     | Collection  | Enabled |
| players       | isBrazilian Ascending elo Descending   | Collection  | Enabled |
| game_records  | gameEventRef Ascending date Descending | Collection  | Enabled |
| game_records  | blackRef Ascending date Descending     | Collection  | Enabled |

## Screenshots

<img src="assets/Screenshot 1"/>
<img src="assets/Screenshot 2"/>
<img src="assets/Screenshot 3"/>
<img src="assets/Screenshot 4"/>
