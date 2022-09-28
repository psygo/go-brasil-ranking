# Ranking Brasileiro de Go

Ferramentas utilizadas:

- Vanila HTML/SCSS/TS, com uma ou outra biblioteca (ex. Chart.js), mas *sem frameworks*
    - É um *SPA* (Single-Page Application)
- Firebase (Servidor (Functions), Hospedagem, Autenticação e Banco de Dados (Firestore))

## Como rodar em desenvolvimento

Há vários scripts em cada uma das pastas importantes, para agilizar e facilitar o desenvolvimento. Esses scripts são todos `.sh`, rodando ou em Linux ou Mac &mdash; se alguém quiser transcrevê-los para Powershell, fique à vontade.

No momento, a maneira mais agradável de se rodar algo localemente é abrir pelo menos 3 terminais e rodar:

- `sh scripts/firebase_emulators.sh`
- `cd frontend && npm run everything`
- `cd functions && npm run everything`