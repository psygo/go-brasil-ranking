import { findPlayerRef } from "../infra";

import { Color, GameRecord } from "../../../frontend/src/models/game_record";
import { GameEventTypes } from "../../../frontend/src/models/game_event";

export const philippeVsYuichiro2022: readonly GameRecord[] = [
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 5, 10).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.White,
    },
    additionalInfo: "Partida 1",
    gameEventRef: GameEventTypes.live,
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[0.5]RU[japanese]DT[2022-05-31]PW[Yuichiro Shimawaki]PB[Philippe Fanaro]RE[W+R]C[Mistakes:

      Player	Move	Loss 	Score

      White	  2	 13.4	B+18.6 points
      White	  4	 11.4	B+29.9 points
      White	  6	 13.4	B+43.8 points
      White	 42	  4.0	B+49.8 points
      Black	 43	  6.9	B+42.9 points
      Black	 45	  3.0	B+41.3 points
      Black	 51	 11.4	B+29.8 points
      White	 70	  4.9	B+36.7 points
      Black	 71	  3.8	B+32.9 points
      White	 72	  3.3	B+36.2 points
      Black	 73	  8.6	B+27.6 points
      White	 76	  3.5	B+33.0 points
      Black	 77	  3.2	B+29.8 points
      White	 84	  3.0	B+33.7 points
      Black	 85	  3.1	B+30.6 points
      White	 86	  3.6	B+34.2 points
      Black	 87	  3.2	B+31.0 points
      Black	 97	  3.4	B+25.3 points
      White	 98	 16.7	B+42.0 points
      Black	 99	 21.0	B+21.0 points
      Black	105	  9.1	B+15.1 points
      Black	109	  9.5	B+3.8 points
      Black	113	  7.6	W+5.1 points
      Black	115	  3.2	W+5.5 points
      White	116	  5.5	Even game
      Black	121	  7.0	W+6.5 points
      White	124	  6.7	W+1 points
      Black	125	  4.4	W+5.4 points
      White	126	  6.5	B+1.1 points
      Black	127	  8.5	W+7.4 points
      Black	131	  8.2	W+9.4 points
      Black	141	  6.0	W+12 points
      Black	145	  2.9	W+13.2 points
      Black	149	  3.6	W+14.1 points
      Black	151	  2.9	W+14.8 points];B[pd](;W[]C[Mistake!

      This move is 13.4 points worse than the AI move.

      Black is ahead by 18.6 points.];B[dd](;W[]C[Mistake!

      This move is 11.4 points worse than the AI move.

      Black is ahead by 29.9 points.];B[dp](;W[]C[Mistake!

      This move is 13.4 points worse than the AI move.

      Black is ahead by 43.8 points.];B[pp];W[cn];B[fq];W[qc];B[qd];W[pc];B[od];W[oc];B[nd];W[nc];B[md];W[cf];B[ch];W[ef];B[ck];W[fd];B[bd];W[qn];B[pj];W[mp];B[no];W[mo];B[nn];W[np];B[op];W[pm];B[mn];W[ln];B[lm];W[kn];B[kp];W[jq];B[ro];W[ok];B[oj](;W[mk]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 49.8 points.](;B[ol]C[Mistake!

      This move is 6.9 points worse than the AI move.

      Black is ahead by 42.9 points.];W[nl](;B[om]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 41.3 points.];W[pk];B[nj];W[nk];B[qk];W[pl](;B[nm]C[Mistake!

      This move is 11.4 points worse than the AI move.

      Black is ahead by 29.8 points.];W[km];B[dm];W[cq];B[cp];W[bp];B[bo];W[bq];B[co];W[er];B[go];W[di];B[dh];W[ci];B[bi];W[bj];B[bh];W[cj];B[bk](;W[ak]C[Mistake!

      This move is 4.9 points worse than the AI move.

      Black is ahead by 36.7 points.](;B[al]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 32.9 points.](;W[aj]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 36.2 points.](;B[bf]C[Mistake!

      This move is 8.6 points worse than the AI move.

      Black is ahead by 27.6 points.];W[dk];B[cl](;W[fk]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 33.0 points.](;B[fh]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 29.8 points.];W[eh];B[eg];W[ei];B[fg];W[cc];B[cd](;W[eb]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 33.7 points.](;B[hk]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 30.6 points.](;W[hl]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 34.2 points.](;B[gl]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 31.0 points.];W[gk];B[gm];W[hj];B[ik];W[ij];B[jk];W[jj];B[kk];W[kj](;B[lk]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 25.3 points.](;W[lj]C[Mistake!

      This move is 16.7 points worse than the AI move.

      Black is ahead by 42.0 points.](;B[mj]C[Mistake!

      This move is 21 points worse than the AI move.

      Black is ahead by 21.0 points.];W[ll];B[im];W[fm];B[gn];W[dg](;B[gi]C[Mistake!

      This move is 9.1 points worse than the AI move.

      Black is ahead by 15.1 points.];W[ff];B[ig];W[gg](;B[gh]C[Mistake!

      This move is 9.5 points worse than the AI move.

      Black is ahead by 3.8 points.];W[hh];B[hg];W[gf](;B[lr]C[Mistake!

      This move is 7.6 points worse than the AI move.

      White is ahead by 5.1 points.];W[oo](;B[nr]C[Mistake!

      This move is 3.2 points worse than the AI move.

      White is ahead by 5.5 points.](;W[po]C[Mistake!

      This move is 5.5 points worse than the AI move.

      The game is even.];B[qo];W[mm];B[fr];W[eq](;B[mc]C[Mistake!

      This move is 7 points worse than the AI move.

      White is ahead by 6.5 points.];W[ep];B[fp](;W[bm]C[Mistake!

      This move is 6.7 points worse than the AI move.

      White is ahead by 1.0 points.](;B[dn]C[Mistake!

      This move is 4.4 points worse than the AI move.

      White is ahead by 5.4 points.](;W[bn]C[Mistake!

      This move is 6.5 points worse than the AI move.

      Black is ahead by 1.1 points.](;B[bl]C[Mistake!

      This move is 8.5 points worse than the AI move.

      White is ahead by 7.4 points.];W[eo];B[fl];W[bc](;B[dc]C[Mistake!

      This move is 8.2 points worse than the AI move.

      White is ahead by 9.4 points.];W[db];B[cg];W[df];B[ag];W[oq];B[pq];W[mr];B[ms];W[or](;B[mq]C[Mistake!

      This move is 6 points worse than the AI move.

      White is ahead by 12.0 points.];W[nq];B[pr];W[ps](;B[qs]C[Mistake!

      This move is 2.9 points worse than the AI move.

      White is ahead by 13.2 points.];W[os];B[rr];W[jp](;B[kq]C[Mistake!

      This move is 3.6 points worse than the AI move.

      White is ahead by 14.1 points.];W[jr](;B[jo]C[Mistake!

      This move is 2.9 points worse than the AI move.

      White is ahead by 14.8 points.];W[ko];B[kr])(;B[kr]C[I would play here.

      White is ahead by 11.9 points.];W[jo];B[lp];W[do]))(;B[rc]C[I would play here.

      White is ahead by 10.5 points.];W[rb];B[rd];W[mb];B[lb]))(;B[rc]C[I would play here.

      White is ahead by 10.3 points.];W[rb];B[rd];W[mb];B[lb];W[na]))(;B[nq]C[I would play here.

      White is ahead by 6.0 points.];W[mq];B[ns];W[lq];B[pr]))(;B[cg]C[I would play here.

      White is ahead by 1.2 points.];W[df];B[ag];W[rc];B[do];W[fs]))(;B[eo]C[I would play here.

      Black is ahead by 1.1 points.];W[bc];B[cg];W[df];B[ag]))(;W[eo]C[I would play here.

      White is ahead by 5.4 points.];B[fl];W[el];B[fn];W[bc]))(;B[eo]C[I would play here.

      White is ahead by 1.0 points.];W[dn];B[do];W[dq]))(;W[eo]C[I would play here.

      White is ahead by 7.7 points.];B[dn];W[bc];B[cg];W[df]))(;B[ep]C[I would play here.

      Black is ahead by 0.5 points.];W[bc];B[cg];W[df];B[ag]))(;W[bc]C[I would play here.

      White is ahead by 5.5 points.];B[po];W[mm];B[on];W[qj]))(;B[po]C[I would play here.

      White is ahead by 2.3 points.];W[nr];B[or];W[pn]))(;B[hi]C[I would play here.

      Black is ahead by 2.5 points.];W[ih];B[ii];W[jh];B[ji]))(;B[hh]C[I would play here.

      Black is ahead by 13.3 points.];W[gh];B[fi];W[hg];B[nr]))(;B[ff]C[I would play here.

      Black is ahead by 24.2 points.];W[ee];B[fi];W[fj];B[gi]))(;B[ll]C[I would play here.

      Black is ahead by 42.0 points.];W[mj];B[kq];W[jp];B[jr]))(;W[ll]C[I would play here.

      Black is ahead by 25.3 points.];B[lj];W[oo];B[fi]))(;B[fr]C[I would play here.

      Black is ahead by 28.7 points.];W[eq];B[ep];W[nr];B[or]))(;B[il]C[I would play here.

      Black is ahead by 34.2 points.];W[gl];B[ll]))(;W[fm]C[I would play here.

      Black is ahead by 30.6 points.];B[dn];W[dl];B[bn]))(;B[fr]C[I would play here.

      Black is ahead by 33.7 points.];W[eq];B[ep];W[dq]))(;W[ff]C[I would play here.

      Black is ahead by 30.7 points.];B[df];W[fm];B[dn]))(;B[ei]C[I would play here.

      Black is ahead by 33.0 points.];W[ej];B[fi];W[fm]))(;W[em]C[I would play here.

      Black is ahead by 29.5 points.];B[el];W[dl]))(;B[ei]C[I would play here.

      Black is ahead by 36.2 points.];W[ej];B[fj];W[bl]))(;W[oo]C[I would play here.

      Black is ahead by 32.9 points.];B[po];W[pn];B[on]))(;B[ei]C[I would play here.

      Black is ahead by 36.7 points.];W[dk];B[al];W[aj];B[cl]))(;W[ei]C[I would play here.

      Black is ahead by 31.8 points.];B[eh];W[dk];B[fi];W[cl]))(;B[jp]C[I would play here.

      Black is ahead by 41.2 points.];W[kq];B[km];W[jn]))(;B[pl]C[I would play here.

      Black is ahead by 44.3 points.];W[om];B[ql];W[mm];B[oo]))(;B[pk]C[I would play here.

      Black is ahead by 49.8 points.];W[ol];B[km]))(;W[pk]C[I would play here.

      Black is ahead by 45.8 points.];B[qj];W[mm];B[nm]))(;W[pp]C[I would play here.

      Black is ahead by 30.4 points.];B[qq];W[pq];B[qp]))(;W[pp]C[I would play here.

      Black is ahead by 18.5 points.];B[dp];W[qc];B[pc]))(;W[dd]C[I would play here.

      Black is ahead by 5.2 points.];B[dp];W[pp];B[qq]))
    `,
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 5, 11).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.White,
      difference: 3.5,
    },
    additionalInfo: "Partida 2",
    gameEventRef: GameEventTypes.live,
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[0.5]RU[japanese]DT[2022-05-31]PW[Yuichiro Shimawaki]PB[Philippe Fanaro]RE[W+R]C[Mistakes:

      Player	Move	Loss 	Score

      White	  2	 13.4	B+18.6 points
      White	  4	 11.4	B+29.9 points
      White	  6	 13.4	B+43.8 points
      White	 42	  4.0	B+49.8 points
      Black	 43	  6.9	B+42.9 points
      Black	 45	  3.0	B+41.3 points
      Black	 51	 11.4	B+29.8 points
      White	 70	  4.9	B+36.7 points
      Black	 71	  3.8	B+32.9 points
      White	 72	  3.3	B+36.2 points
      Black	 73	  8.6	B+27.6 points
      White	 76	  3.5	B+33.0 points
      Black	 77	  3.2	B+29.8 points
      White	 84	  3.0	B+33.7 points
      Black	 85	  3.1	B+30.6 points
      White	 86	  3.6	B+34.2 points
      Black	 87	  3.2	B+31.0 points
      Black	 97	  3.4	B+25.3 points
      White	 98	 16.7	B+42.0 points
      Black	 99	 21.0	B+21.0 points
      Black	105	  9.1	B+15.1 points
      Black	109	  9.5	B+3.8 points
      Black	113	  7.6	W+5.1 points
      Black	115	  3.2	W+5.5 points
      White	116	  5.5	Even game
      Black	121	  7.0	W+6.5 points
      White	124	  6.7	W+1 points
      Black	125	  4.4	W+5.4 points
      White	126	  6.5	B+1.1 points
      Black	127	  8.5	W+7.4 points
      Black	131	  8.2	W+9.4 points
      Black	141	  6.0	W+12 points
      Black	145	  2.9	W+13.2 points
      Black	149	  3.6	W+14.1 points
      Black	151	  2.9	W+14.8 points];B[pd](;W[]C[Mistake!

      This move is 13.4 points worse than the AI move.

      Black is ahead by 18.6 points.];B[dd](;W[]C[Mistake!

      This move is 11.4 points worse than the AI move.

      Black is ahead by 29.9 points.];B[dp](;W[]C[Mistake!

      This move is 13.4 points worse than the AI move.

      Black is ahead by 43.8 points.];B[pp];W[cn];B[fq];W[qc];B[qd];W[pc];B[od];W[oc];B[nd];W[nc];B[md];W[cf];B[ch];W[ef];B[ck];W[fd];B[bd];W[qn];B[pj];W[mp];B[no];W[mo];B[nn];W[np];B[op];W[pm];B[mn];W[ln];B[lm];W[kn];B[kp];W[jq];B[ro];W[ok];B[oj](;W[mk]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 49.8 points.](;B[ol]C[Mistake!

      This move is 6.9 points worse than the AI move.

      Black is ahead by 42.9 points.];W[nl](;B[om]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 41.3 points.];W[pk];B[nj];W[nk];B[qk];W[pl](;B[nm]C[Mistake!

      This move is 11.4 points worse than the AI move.

      Black is ahead by 29.8 points.];W[km];B[dm];W[cq];B[cp];W[bp];B[bo];W[bq];B[co];W[er];B[go];W[di];B[dh];W[ci];B[bi];W[bj];B[bh];W[cj];B[bk](;W[ak]C[Mistake!

      This move is 4.9 points worse than the AI move.

      Black is ahead by 36.7 points.](;B[al]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 32.9 points.](;W[aj]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 36.2 points.](;B[bf]C[Mistake!

      This move is 8.6 points worse than the AI move.

      Black is ahead by 27.6 points.];W[dk];B[cl](;W[fk]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 33.0 points.](;B[fh]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 29.8 points.];W[eh];B[eg];W[ei];B[fg];W[cc];B[cd](;W[eb]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 33.7 points.](;B[hk]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 30.6 points.](;W[hl]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 34.2 points.](;B[gl]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 31.0 points.];W[gk];B[gm];W[hj];B[ik];W[ij];B[jk];W[jj];B[kk];W[kj](;B[lk]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 25.3 points.](;W[lj]C[Mistake!

      This move is 16.7 points worse than the AI move.

      Black is ahead by 42.0 points.](;B[mj]C[Mistake!

      This move is 21 points worse than the AI move.

      Black is ahead by 21.0 points.];W[ll];B[im];W[fm];B[gn];W[dg](;B[gi]C[Mistake!

      This move is 9.1 points worse than the AI move.

      Black is ahead by 15.1 points.];W[ff];B[ig];W[gg](;B[gh]C[Mistake!

      This move is 9.5 points worse than the AI move.

      Black is ahead by 3.8 points.];W[hh];B[hg];W[gf](;B[lr]C[Mistake!

      This move is 7.6 points worse than the AI move.

      White is ahead by 5.1 points.];W[oo](;B[nr]C[Mistake!

      This move is 3.2 points worse than the AI move.

      White is ahead by 5.5 points.](;W[po]C[Mistake!

      This move is 5.5 points worse than the AI move.

      The game is even.];B[qo];W[mm];B[fr];W[eq](;B[mc]C[Mistake!

      This move is 7 points worse than the AI move.

      White is ahead by 6.5 points.];W[ep];B[fp](;W[bm]C[Mistake!

      This move is 6.7 points worse than the AI move.

      White is ahead by 1.0 points.](;B[dn]C[Mistake!

      This move is 4.4 points worse than the AI move.

      White is ahead by 5.4 points.](;W[bn]C[Mistake!

      This move is 6.5 points worse than the AI move.

      Black is ahead by 1.1 points.](;B[bl]C[Mistake!

      This move is 8.5 points worse than the AI move.

      White is ahead by 7.4 points.];W[eo];B[fl];W[bc](;B[dc]C[Mistake!

      This move is 8.2 points worse than the AI move.

      White is ahead by 9.4 points.];W[db];B[cg];W[df];B[ag];W[oq];B[pq];W[mr];B[ms];W[or](;B[mq]C[Mistake!

      This move is 6 points worse than the AI move.

      White is ahead by 12.0 points.];W[nq];B[pr];W[ps](;B[qs]C[Mistake!

      This move is 2.9 points worse than the AI move.

      White is ahead by 13.2 points.];W[os];B[rr];W[jp](;B[kq]C[Mistake!

      This move is 3.6 points worse than the AI move.

      White is ahead by 14.1 points.];W[jr](;B[jo]C[Mistake!

      This move is 2.9 points worse than the AI move.

      White is ahead by 14.8 points.];W[ko];B[kr])(;B[kr]C[I would play here.

      White is ahead by 11.9 points.];W[jo];B[lp];W[do]))(;B[rc]C[I would play here.

      White is ahead by 10.5 points.];W[rb];B[rd];W[mb];B[lb]))(;B[rc]C[I would play here.

      White is ahead by 10.3 points.];W[rb];B[rd];W[mb];B[lb];W[na]))(;B[nq]C[I would play here.

      White is ahead by 6.0 points.];W[mq];B[ns];W[lq];B[pr]))(;B[cg]C[I would play here.

      White is ahead by 1.2 points.];W[df];B[ag];W[rc];B[do];W[fs]))(;B[eo]C[I would play here.

      Black is ahead by 1.1 points.];W[bc];B[cg];W[df];B[ag]))(;W[eo]C[I would play here.

      White is ahead by 5.4 points.];B[fl];W[el];B[fn];W[bc]))(;B[eo]C[I would play here.

      White is ahead by 1.0 points.];W[dn];B[do];W[dq]))(;W[eo]C[I would play here.

      White is ahead by 7.7 points.];B[dn];W[bc];B[cg];W[df]))(;B[ep]C[I would play here.

      Black is ahead by 0.5 points.];W[bc];B[cg];W[df];B[ag]))(;W[bc]C[I would play here.

      White is ahead by 5.5 points.];B[po];W[mm];B[on];W[qj]))(;B[po]C[I would play here.

      White is ahead by 2.3 points.];W[nr];B[or];W[pn]))(;B[hi]C[I would play here.

      Black is ahead by 2.5 points.];W[ih];B[ii];W[jh];B[ji]))(;B[hh]C[I would play here.

      Black is ahead by 13.3 points.];W[gh];B[fi];W[hg];B[nr]))(;B[ff]C[I would play here.

      Black is ahead by 24.2 points.];W[ee];B[fi];W[fj];B[gi]))(;B[ll]C[I would play here.

      Black is ahead by 42.0 points.];W[mj];B[kq];W[jp];B[jr]))(;W[ll]C[I would play here.

      Black is ahead by 25.3 points.];B[lj];W[oo];B[fi]))(;B[fr]C[I would play here.

      Black is ahead by 28.7 points.];W[eq];B[ep];W[nr];B[or]))(;B[il]C[I would play here.

      Black is ahead by 34.2 points.];W[gl];B[ll]))(;W[fm]C[I would play here.

      Black is ahead by 30.6 points.];B[dn];W[dl];B[bn]))(;B[fr]C[I would play here.

      Black is ahead by 33.7 points.];W[eq];B[ep];W[dq]))(;W[ff]C[I would play here.

      Black is ahead by 30.7 points.];B[df];W[fm];B[dn]))(;B[ei]C[I would play here.

      Black is ahead by 33.0 points.];W[ej];B[fi];W[fm]))(;W[em]C[I would play here.

      Black is ahead by 29.5 points.];B[el];W[dl]))(;B[ei]C[I would play here.

      Black is ahead by 36.2 points.];W[ej];B[fj];W[bl]))(;W[oo]C[I would play here.

      Black is ahead by 32.9 points.];B[po];W[pn];B[on]))(;B[ei]C[I would play here.

      Black is ahead by 36.7 points.];W[dk];B[al];W[aj];B[cl]))(;W[ei]C[I would play here.

      Black is ahead by 31.8 points.];B[eh];W[dk];B[fi];W[cl]))(;B[jp]C[I would play here.

      Black is ahead by 41.2 points.];W[kq];B[km];W[jn]))(;B[pl]C[I would play here.

      Black is ahead by 44.3 points.];W[om];B[ql];W[mm];B[oo]))(;B[pk]C[I would play here.

      Black is ahead by 49.8 points.];W[ol];B[km]))(;W[pk]C[I would play here.

      Black is ahead by 45.8 points.];B[qj];W[mm];B[nm]))(;W[pp]C[I would play here.

      Black is ahead by 30.4 points.];B[qq];W[pq];B[qp]))(;W[pp]C[I would play here.

      Black is ahead by 18.5 points.];B[dp];W[qc];B[pc]))(;W[dd]C[I would play here.

      Black is ahead by 5.2 points.];B[dp];W[pp];B[qq]))
    `,
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 5, 14).getTime(),
    handicap: 5,
    result: {
      whoWins: Color.Black,
    },
    gameEventRef: GameEventTypes.live,
    additionalInfo: "Partida 3, com 5 de handicap",
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[0.5]RU[japanese]PW[Yuichiro Shimawaki]PB[Philippe Fanaro]HA[5]AB[dd][pd][jj][dp][pp]C[Mistakes:

      Player	Move	Loss 	Score

      White	 11	  3.5	B+61.1 points
      Black	 12	  5.0	B+56.1 points
      White	 29	  3.1	B+54.9 points
      Black	 38	  6.7	B+49.1 points
      White	 39	  3.0	B+52.1 points
      Black	 40	  6.8	B+45.3 points
      White	 41	  9.8	B+55.1 points
      Black	 44	  5.5	B+50.8 points
      White	 63	  2.9	B+52.0 points
      White	 79	  7.9	B+53.6 points
      White	 85	  4.6	B+58.7 points
      Black	 86	  4.1	B+54.6 points
      Black	 88	  3.9	B+53.0 points
      White	 89	  4.1	B+57.1 points
      Black	 92	  7.1	B+50.6 points
      Black	 94	  7.2	B+44.6 points
      Black	 96	  4.6	B+41.1 points
      White	 97	  3.4	B+44.5 points
      Black	 98	  3.0	B+41.5 points
      White	 99	 17.4	B+58.9 points
      White	101	  6.1	B+62.8 points
      White	103	  8.3	B+70.1 points
      Black	108	  4.4	B+68.3 points
      White	109	  3.3	B+71.6 points
      Black	110	  4.7	B+66.9 points
      Black	114	  6.2	B+62.1 points
      Black	116	  4.6	B+58.6 points
      White	117	  3.7	B+62.3 points
      Black	118	  8.0	B+54.3 points
      White	119	  4.0	B+58.3 points
      White	123	  5.0	B+62.7 points
      White	125	  7.8	B+69.1 points
      Black	126	  4.0	B+65.1 points
      Black	128	  3.2	B+64.3 points
      White	129	  4.6	B+68.9 points
      White	131	  7.0	B+73.9 points
      White	133	  3.1	B+76.0 points
      Black	134	  4.5	B+71.5 points
      Black	136	  5.9	B+66.8 points
      White	137	  8.5	B+75.3 points
      Black	138	  3.9	B+71.4 points
      White	139	  4.6	B+76.0 points
      White	141	 14.9	B+88.0 points
      Black	142	 15.4	B+72.6 points
      White	145	 13.8	B+85.5 points
      Black	146	 20.1	B+65.4 points
      White	147	  6.3	B+71.7 points
      Black	148	  7.8	B+63.9 points
      White	157	  5.9	B+68.7 points
      Black	158	  7.5	B+61.2 points
      White	159	  3.0	B+64.2 points
      White	163	 13.1	B+75.8 points
      Black	164	 25.9	B+49.9 points
      White	173	  5.1	B+53.7 points
      Black	174	  5.2	B+48.5 points
      White	175	 10.5	B+59.0 points
      Black	176	 13.0	B+46.0 points
      White	177	 15.7	B+61.7 points
      Black	178	 16.9	B+44.8 points
      White	179	 18.5	B+63.3 points
      Black	180	 16.2	B+47.1 points
      White	181	 15.8	B+62.9 points
      Black	182	 14.3	B+48.6 points
      White	183	  9.3	B+57.9 points
      Black	184	  8.2	B+49.7 points
      White	185	  5.2	B+54.9 points
      White	187	 12.4	B+65.9 points
      Black	188	  4.2	B+61.7 points
      White	189	  6.1	B+67.8 points
      Black	192	  5.8	B+63.1 points
      White	193	 15.2	B+78.3 points
      Black	196	 23.2	B+57.8 points
      White	197	  6.1	B+63.9 points
      Black	198	  7.9	B+56.0 points
      Black	200	  8.8	B+50.8 points
      White	201	  7.7	B+58.5 points
      Black	202	 20.6	B+37.9 points];W[cf];B[fc];W[cn];B[dj];W[gp];B[fo];W[fp];B[ep];W[go];B[fn](;W[dn]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 61.1 points.](;B[en]C[Mistake!

      This move is 5 points worse than the AI move.

      Black is ahead by 56.1 points.];W[dl];B[ek];W[cp];B[cq];W[bq];B[bp];W[co];B[fq];W[gq];B[br];W[dq];B[cr];W[eq];B[eo];W[fr];B[el](;W[ck]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 54.9 points.];B[cj];W[bo];B[aq];W[bj];B[bi];W[bk];B[ch];W[cd](;B[bm]C[Mistake!

      This move is 6.7 points worse than the AI move.

      Black is ahead by 49.1 points.](;W[ao]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 52.1 points.](;B[ap]C[Mistake!

      This move is 6.8 points worse than the AI move.

      Black is ahead by 45.3 points.](;W[bl]C[Mistake!

      This move is 9.8 points worse than the AI move.

      Black is ahead by 55.1 points.];B[cc];W[bc](;B[ce]C[Mistake!

      This move is 5.5 points worse than the AI move.

      Black is ahead by 50.8 points.];W[bd];B[de];W[dc];B[cb];W[db];B[bb];W[ab];B[be];W[ca];B[mq];W[nc];B[kc];W[ke];B[le];W[lf];B[ld];W[kf];B[nf](;W[me]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 52.0 points.];B[mf];W[id];B[ic];W[hc];B[jd];W[ie];B[hd];W[gd];B[he];W[gc];B[ge];W[fe];B[fd];W[ib];B[jc](;W[fb]C[Mistake!

      This move is 7.9 points worse than the AI move.

      Black is ahead by 53.6 points.];B[ff];W[gf];B[ee];W[hf];B[fe](;W[lc]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 58.7 points.](;B[kd]C[Mistake!

      This move is 4.1 points worse than the AI move.

      Black is ahead by 54.6 points.];W[pc](;B[od]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 53.0 points.](;W[ne]C[Mistake!

      This move is 4.1 points worse than the AI move.

      Black is ahead by 57.1 points.];B[mc];W[nd](;B[oc]C[Mistake!

      This move is 7.1 points worse than the AI move.

      Black is ahead by 50.6 points.];W[ob](;B[pb]C[Mistake!

      This move is 7.2 points worse than the AI move.

      Black is ahead by 44.6 points.];W[mb](;B[qc]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 41.1 points.](;W[of]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 44.5 points.](;B[og]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 41.5 points.](;W[pf]C[Mistake!

      This move is 17.4 points worse than the AI move.

      Black is ahead by 58.9 points.];B[je](;W[ng]C[Mistake!

      This move is 6.1 points worse than the AI move.

      Black is ahead by 62.8 points.];B[mg](;W[mh]C[Mistake!

      This move is 8.3 points worse than the AI move.

      Black is ahead by 70.1 points.];B[nh];W[lg];B[ng];W[lh](;B[oe]C[Mistake!

      This move is 4.4 points worse than the AI move.

      Black is ahead by 68.3 points.](;W[md]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 71.6 points.](;B[lb]C[Mistake!

      This move is 4.7 points worse than the AI move.

      Black is ahead by 66.9 points.];W[if];B[mc];W[nb](;B[lc]C[Mistake!

      This move is 6.2 points worse than the AI move.

      Black is ahead by 62.1 points.];W[ni](;B[pg]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 58.6 points.](;W[ph]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 62.3 points.](;B[qf]C[Mistake!

      This move is 8 points worse than the AI move.

      Black is ahead by 54.3 points.](;W[oh]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 58.3 points.];B[qg];W[jb];B[oa](;W[kq]C[Mistake!

      This move is 5 points worse than the AI move.

      Black is ahead by 62.7 points.];B[mi](;W[nj]C[Mistake!

      This move is 7.8 points worse than the AI move.

      Black is ahead by 69.1 points.](;B[lj]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 65.1 points.];W[hj](;B[il]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 64.3 points.](;W[hl]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 68.9 points.];B[hm](;W[kk]C[Mistake!

      This move is 7 points worse than the AI move.

      Black is ahead by 73.9 points.];B[kj](;W[im]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 76.0 points.](;B[ik]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 71.5 points.];W[hk](;B[hn]C[Mistake!

      This move is 5.9 points worse than the AI move.

      Black is ahead by 66.8 points.](;W[jm]C[Mistake!

      This move is 8.5 points worse than the AI move.

      Black is ahead by 75.3 points.](;B[lk]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 71.4 points.](;W[ml]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 76.0 points.];B[km](;W[in]C[Mistake!

      This move is 14.9 points worse than the AI move.

      Black is ahead by 88.0 points.](;B[kl]C[Mistake!

      This move is 15.4 points worse than the AI move.

      Black is ahead by 72.6 points.];W[jf];B[na](;W[fg]C[Mistake!

      This move is 13.8 points worse than the AI move.

      Black is ahead by 85.5 points.](;B[eg]C[Mistake!

      This move is 20.1 points worse than the AI move.

      Black is ahead by 65.4 points.](;W[fh]C[Mistake!

      This move is 6.3 points worse than the AI move.

      Black is ahead by 71.7 points.](;B[hh]C[Mistake!

      This move is 7.8 points worse than the AI move.

      Black is ahead by 63.9 points.];W[ii];B[io];W[jo];B[kn];W[ip];B[pj];W[pk];B[qk](;W[ok]C[Mistake!

      This move is 5.9 points worse than the AI move.

      Black is ahead by 68.7 points.](;B[kp]C[Mistake!

      This move is 7.5 points worse than the AI move.

      Black is ahead by 61.2 points.](;W[ko]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 64.2 points.];B[lo];W[lp];B[mo](;W[eh]C[Mistake!

      This move is 13.1 points worse than the AI move.

      Black is ahead by 75.8 points.](;B[dg]C[Mistake!

      This move is 25.9 points worse than the AI move.

      Black is ahead by 49.9 points.];W[qj];B[ql];W[qi];B[om];W[pm];B[pl];W[ol];B[on](;W[qp]C[Mistake!

      This move is 5.1 points worse than the AI move.

      Black is ahead by 53.7 points.](;B[qo]C[Mistake!

      This move is 5.2 points worse than the AI move.

      Black is ahead by 48.5 points.](;W[pq]C[Mistake!

      This move is 10.5 points worse than the AI move.

      Black is ahead by 59.0 points.](;B[po]C[Mistake!

      This move is 13 points worse than the AI move.

      Black is ahead by 46.0 points.](;W[rp]C[Mistake!

      This move is 15.7 points worse than the AI move.

      Black is ahead by 61.7 points.](;B[oq]C[Mistake!

      This move is 16.9 points worse than the AI move.

      Black is ahead by 44.8 points.](;W[pr]C[Mistake!

      This move is 18.5 points worse than the AI move.

      Black is ahead by 63.3 points.](;B[rr]C[Mistake!

      This move is 16.2 points worse than the AI move.

      Black is ahead by 47.1 points.](;W[or]C[Mistake!

      This move is 15.8 points worse than the AI move.

      Black is ahead by 62.9 points.](;B[nr]C[Mistake!

      This move is 14.3 points worse than the AI move.

      Black is ahead by 48.6 points.](;W[op]C[Mistake!

      This move is 9.3 points worse than the AI move.

      Black is ahead by 57.9 points.](;B[nq]C[Mistake!

      This move is 8.2 points worse than the AI move.

      Black is ahead by 49.7 points.](;W[ro]C[Mistake!

      This move is 5.2 points worse than the AI move.

      Black is ahead by 54.9 points.];B[rn](;W[rq]C[Mistake!

      This move is 12.4 points worse than the AI move.

      Black is ahead by 65.9 points.](;B[rh]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 61.7 points.](;W[qm]C[Mistake!

      This move is 6.1 points worse than the AI move.

      Black is ahead by 67.8 points.];B[rm];W[rj](;B[rl]C[Mistake!

      This move is 5.8 points worse than the AI move.

      Black is ahead by 63.1 points.](;W[mj]C[Mistake!

      This move is 15.2 points worse than the AI move.

      Black is ahead by 78.3 points.];B[li];W[mk](;B[mm]C[Mistake!

      This move is 23.2 points worse than the AI move.

      Black is ahead by 57.8 points.](;W[nl]C[Mistake!

      This move is 6.1 points worse than the AI move.

      Black is ahead by 63.9 points.](;B[sr]C[Mistake!

      This move is 7.9 points worse than the AI move.

      Black is ahead by 56.0 points.];W[qr](;B[so]C[Mistake!

      This move is 8.8 points worse than the AI move.

      Black is ahead by 50.8 points.](;W[sq]C[Mistake!

      This move is 7.7 points worse than the AI move.

      Black is ahead by 58.5 points.](;B[kr]C[Mistake!

      This move is 20.6 points worse than the AI move.

      Black is ahead by 37.9 points.])(;B[ih]C[I would play here.

      Black is ahead by 58.5 points.];W[fj];B[jh];W[fm];B[em];W[gn];B[gg];W[ji];B[kh]))(;W[kb]C[I would play here.

      Black is ahead by 50.8 points.];B[ma];W[sn];B[ih];W[jh];B[gi];W[fj];B[gj];W[hi]))(;B[ih]C[I would play here.

      Black is ahead by 59.6 points.];W[hi];B[jh];W[fm];B[gl];W[gm];B[gi];W[fj];B[fi]))(;B[ih]C[I would play here.

      Black is ahead by 63.9 points.];W[fj];B[jh];W[fm];B[em];W[gn];B[gg];W[gh];B[hg];W[ji];B[kh]))(;W[kb]C[I would play here.

      Black is ahead by 57.8 points.];B[ma];W[nl];B[ih];W[fj];B[jh];W[fm];B[gl];W[gm];B[em];W[gn];B[gg]))(;B[ih]C[I would play here.

      Black is ahead by 81.0 points.];W[fj];B[jh];W[ji];B[kh];W[fm];B[nl];W[mm]))(;W[oj]C[I would play here.

      Black is ahead by 63.1 points.];B[pi];W[mk];B[nl];W[mm];B[nm];W[mj];B[li];W[ln];B[qh];W[oi];B[mn];W[lm];B[ji];W[jh];B[ih];W[hi];B[kh];W[jg];B[jl];W[ho];B[rk]))(;B[rk]C[I would play here.

      Black is ahead by 68.9 points.];W[oj];B[pi];W[ln];B[mk];W[mn];B[no];W[nl];B[mm];W[lm];B[ll];W[sk]))(;W[oj]C[I would play here.

      Black is ahead by 61.7 points.];B[pi];W[mk];B[nl];W[mm];B[nm];W[mj];B[li];W[ln];B[mn];W[lm];B[ji];W[jh];B[ih]))(;B[rk]C[I would play here.

      Black is ahead by 65.9 points.];W[oj];B[pi];W[mk];B[nl];W[mm];B[nm];W[mj];B[li];W[ln];B[ji];W[jh];B[ih]))(;W[nm]C[I would play here.

      Black is ahead by 53.5 points.];B[mk];W[rj];B[qm];W[rh];B[qq];W[gn];B[eb];W[gb];B[ec]))(;W[rk]C[I would play here.

      Black is ahead by 49.7 points.];B[rl];W[rm];B[qm];W[sl];B[qn];W[ri];B[ro];W[lr];B[eb];W[gb];B[ec]))(;B[rj]C[I would play here.

      Black is ahead by 57.9 points.];W[nq];B[np];W[ri];B[rk];W[mk];B[nl];W[mm];B[nm]))(;W[rm]C[I would play here.

      Black is ahead by 48.6 points.];B[qm];W[rk];B[rl];W[sl];B[qn];W[mm];B[mk];W[nl];B[mn];W[ri]))(;B[rj]C[I would play here.

      Black is ahead by 62.9 points.];W[mk];B[nl];W[mm];B[nm];W[mj];B[li];W[ln];B[mn];W[lm];B[oj]))(;W[rk]C[I would play here.

      Black is ahead by 47.1 points.];B[rl];W[rm];B[qm];W[sl];B[qn];W[ri];B[ro];W[lq];B[eb];W[gb]))(;B[rj]C[I would play here.

      Black is ahead by 63.3 points.];W[mk];B[nl];W[mm];B[nm];W[ri];B[rk];W[mj];B[li];W[ln];B[mn];W[lm]))(;W[rm]C[I would play here.

      Black is ahead by 44.8 points.];B[qm];W[rk];B[rl];W[sl];B[qn];W[ri];B[eb];W[gb];B[ec];W[ba];B[pr];W[rn];B[ro]))(;B[rj]C[I would play here.

      Black is ahead by 61.7 points.];W[mk];B[nl];W[oj];B[pi];W[ri];B[rk];W[mm];B[nm];W[mj];B[li];W[ln];B[mn];W[lm];B[ji];W[jh];B[ih]))(;W[nm]C[I would play here.

      Black is ahead by 46.0 points.];B[mm];W[mn];B[nn];W[lm];B[mk];W[mp];B[np]))(;B[rj]C[I would play here.

      Black is ahead by 59.0 points.];W[ri];B[rk];W[oj];B[pi];W[po];B[op];W[mk];B[nl];W[mm]))(;W[qn]C[I would play here.

      Black is ahead by 48.5 points.];B[qm];W[ro];B[po];W[rk];B[rl];W[sl];B[pn];W[ri]))(;B[qn]C[I would play here.

      Black is ahead by 53.7 points.];W[mk];B[pq];W[mp];B[np];W[lq]))(;W[qn]C[I would play here.

      Black is ahead by 48.6 points.];B[qm];W[rm];B[rl];W[sl];B[pn];W[rk];B[pm];W[ri];B[rn];W[mp];B[np];W[lq]))(;B[ql]C[I would play here.

      Black is ahead by 75.8 points.];W[qj];B[qi];W[rj];B[qn];W[pi];B[qh];W[oj];B[mk];W[pm];B[qm];W[nn]))(;W[qj]C[I would play here.

      Black is ahead by 62.7 points.];B[qi];W[rj];B[rk];W[pi];B[ri];W[oj];B[gi];W[fi];B[gj];W[fj]))(;W[qj]C[I would play here.

      Black is ahead by 61.2 points.];B[qi];W[rj];B[rk];W[pi];B[ri];W[sj];B[qm];W[om]))(;B[ho]C[I would play here.

      Black is ahead by 68.7 points.];W[fj];B[ql];W[qj];B[qi];W[rj];B[pm];W[pi];B[qh]))(;W[pl]C[I would play here.

      Black is ahead by 62.8 points.];B[rj];W[mn];B[lo];W[np];B[mp]))(;B[ii]C[I would play here.

      Black is ahead by 71.7 points.];W[hh];B[io];W[jo];B[ih];W[fj];B[hi]))(;W[fm]C[I would play here.

      Black is ahead by 65.4 points.];B[io];W[jo];B[em];W[gn];B[gm];W[fl]))(;B[hi]C[I would play here.

      Black is ahead by 85.5 points.];W[ii];B[gi];W[hh];B[gh];W[gg];B[ih];W[jh];B[hg];W[ig];B[hh];W[fj];B[ij]))(;W[fm]C[I would play here.

      Black is ahead by 71.7 points.];B[em];W[ii];B[gi];W[gn];B[gm];W[gj];B[io];W[fi];B[fh]))(;B[io]C[I would play here.

      Black is ahead by 88.0 points.];W[jf];B[ma];W[kn];B[lm];W[ii];B[gi];W[gh];B[fh]))(;W[ij]C[I would play here.

      Black is ahead by 73.1 points.];B[kl];W[ji];B[gi];W[jf];B[ma];W[hi];B[hh];W[gh];B[gg];W[fh];B[fg];W[hg]))(;W[jf]C[I would play here.

      Black is ahead by 71.4 points.];B[ma];W[ij];B[kl];W[ji];B[ki];W[kh];B[ii];W[jh]))(;B[hi]C[I would play here.

      Black is ahead by 75.3 points.];W[ij];B[ii];W[jk];B[lk];W[gi];B[gh];W[hh];B[ih]))(;W[ij]C[I would play here.

      Black is ahead by 66.8 points.];B[jk];W[jf];B[ma];W[ji];B[eb];W[mj];B[ec];W[ba]))(;B[ii]C[I would play here.

      Black is ahead by 72.7 points.];W[jf];B[ma];W[hi];B[hh];W[gh];B[ih];W[fg];B[gm]))(;B[ii]C[I would play here.

      Black is ahead by 76.0 points.];W[jf];B[ma];W[hi];B[jk];W[gl];B[jm]))(;W[jf]C[I would play here.

      Black is ahead by 72.9 points.];B[ma];W[ii];B[ij];W[gi];B[ji];W[jh];B[ih]))(;W[ik]C[I would play here.

      Black is ahead by 66.9 points.];B[jk];W[jf];B[na];W[ii];B[ji];W[jh];B[ij]))(;W[ji]C[I would play here.

      Black is ahead by 64.3 points.];B[eb];W[jf];B[ma];W[ij];B[ec];W[ba]))(;B[jf]C[I would play here.

      Black is ahead by 67.5 points.];W[jg];B[ma];W[ki];B[kj];W[ji];B[hh];W[ih];B[ij]))(;B[mj]C[I would play here.

      Black is ahead by 69.1 points.];W[ij];B[nk];W[jf];B[ma];W[ji];B[oj]))(;W[mj]C[I would play here.

      Black is ahead by 61.3 points.];B[li];W[jf];B[ma];W[ki];B[lj];W[kj];B[lk];W[kk];B[ll];W[qm];B[qk];W[pk]))(;W[mj]C[I would play here.

      Black is ahead by 57.7 points.];B[eb];W[gb];B[ec];W[ba];B[ea];W[jf];B[ma]))(;W[jb]C[I would play here.

      Black is ahead by 54.3 points.];B[ma];W[mj];B[eb];W[gb];B[ec];W[jf];B[oa];W[ba];B[ea];W[ha]))(;B[qg]C[I would play here.

      Black is ahead by 62.3 points.];W[jb];B[oa];W[mj];B[eb];W[gb];B[ec];W[jf];B[ma];W[ba];B[ea]))(;W[qg]C[I would play here.

      Black is ahead by 58.6 points.];B[oi];W[nj];B[oj];W[jb];B[oa];W[ok];B[pj]))(;B[oi]C[I would play here.

      Black is ahead by 63.2 points.];W[nj];B[oj];W[qj];B[ok];W[lj];B[ql];W[pl]))(;B[jb]C[I would play here.

      Black is ahead by 68.3 points.];W[ni];B[pg];W[hb];B[ka];W[mj];B[jf];W[jg];B[ig]))(;B[oa]C[I would play here.

      Black is ahead by 71.6 points.];W[nb];B[if];W[ni];B[pg];W[mj];B[kb];W[qj];B[qg];W[qn];B[jq]))(;W[ni]C[I would play here.

      Black is ahead by 68.3 points.];B[pg];W[qg];B[qf];W[md];B[if];W[mj];B[pj];W[pi];B[oj]))(;B[ni]C[I would play here.

      Black is ahead by 72.7 points.];W[if];B[lb];W[oe];B[jf];W[qh];B[pg];W[qg];B[qe]))(;W[nh]C[I would play here.

      Black is ahead by 61.8 points.];B[mh];W[mi];B[ni];W[oh];B[li];W[mj];B[lh];W[oe];B[qe];W[oi];B[iq]))(;W[md]C[I would play here.

      Black is ahead by 56.7 points.];B[if];W[pg];B[oh];W[pi];B[oi];W[oj]))(;W[je]C[I would play here.

      Black is ahead by 41.5 points.];B[lb];W[oe];B[pg];W[jb];B[kb];W[qe];B[eb];W[gb];B[ec];W[ha];B[pe];W[pf]))(;B[je]C[I would play here.

      Black is ahead by 44.5 points.];W[mg];B[jf];W[ng];B[qf];W[qe];B[pe];W[qg]))(;W[je]C[I would play here.

      Black is ahead by 41.1 points.];B[lb];W[oe];B[eb];W[jb];B[kb];W[hb];B[fa];W[md];B[ma];W[nb];B[gb]))(;B[je]C[I would play here.

      Black is ahead by 45.7 points.];W[of];B[oa];W[mg];B[nb];W[ng];B[jq];W[if];B[lb]))(;B[of]C[I would play here.

      Black is ahead by 51.8 points.];W[qc];B[je];W[ki];B[qd];W[mb];B[rc];W[rb];B[re]))(;B[of]C[I would play here.

      Black is ahead by 57.7 points.];W[je];B[lb];W[nb];B[jb];W[oe];B[pe];W[qc]))(;W[qc]C[I would play here.

      Black is ahead by 53.0 points.];B[je];W[lh];B[qd];W[kj];B[oc];W[ob]))(;B[qc]C[I would play here.

      Black is ahead by 56.9 points.];W[md];B[lb];W[oe];B[je];W[qd];B[qe]))(;B[md]C[I would play here.

      Black is ahead by 58.7 points.];W[lh];B[je];W[kj];B[qc];W[oe];B[od]))(;W[oe]C[I would play here.

      Black is ahead by 54.1 points.];B[je];W[ne];B[nh];W[of];B[mh]))(;W[lc]C[I would play here.

      Black is ahead by 45.7 points.];B[md];W[je];B[ff];W[kd];B[mc];W[lb];B[mb];W[kb];B[jq];W[nb];B[hr];W[io]))(;W[mf]C[I would play here.

      Black is ahead by 49.1 points.];B[nd];W[ng];B[of];W[jc];B[jb];W[qc];B[pc]))(;B[bd]C[I would play here.

      Black is ahead by 56.3 points.];W[ce];B[bb];W[dc];B[cb];W[ed];B[fd];W[ee];B[ec];W[fe];B[ge]))(;W[dc]C[I would play here.

      Black is ahead by 45.3 points.];B[bl];W[ed];B[de];W[ec];B[ce];W[bd];B[be]))(;B[cc]C[I would play here.

      Black is ahead by 52.1 points.];W[de];B[bd];W[ed];B[ce];W[ec];B[ee];W[fd];B[df];W[ic]))(;W[cc]C[I would play here.

      Black is ahead by 49.1 points.];B[ao];W[bg];B[an];W[nq];B[qn];W[qf];B[qh];W[no]))(;B[cc]C[I would play here.

      Black is ahead by 55.8 points.];W[bc];B[bd];W[ce];B[bb];W[dc];B[cb];W[ed];B[fd];W[fe];B[ee];W[ef];B[ec]))(;W[bj]C[I would play here.

      Black is ahead by 51.8 points.];B[bi];W[bo];B[aq];W[bk];B[ci];W[dk];B[fi];W[nq]))(;B[bo]C[I would play here.

      Black is ahead by 61.1 points.];W[hm];B[gl];W[er];B[dr];W[cr]))(;W[gn]C[I would play here.

      Black is ahead by 57.6 points.];B[fm];W[gm];B[fl];W[bp];B[jq];W[cq];B[er]))
    `,
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 5, 16).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.White,
    },
    additionalInfo: "Partida 4",
    gameEventRef: GameEventTypes.live,
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[6.5]RU[japanese]PW[Yuichiro Shimawaki]WR[-]PB[Philippe Fanaro]BR[-]C[Mistakes:

      Player	Move	Loss 	Score

      White	  2	 12.7	B+12.5 points
      White	  4	 13.7	B+26.2 points
      White	  6	 15.3	B+41.3 points
      Black	 47	  4.0	B+39.5 points
      Black	 55	  6.2	B+31.7 points
      White	 66	  4.3	B+35.1 points
      Black	 75	  6.3	B+28.8 points
      White	 76	  6.4	B+35.2 points
      Black	 95	  4.3	B+29.9 points
      White	104	  3.2	B+32.8 points
      White	106	  3.8	B+35.5 points
      Black	113	  6.1	B+30.2 points
      White	114	  4.7	B+34.9 points
      Black	115	  3.8	B+31.1 points
      Black	117	  3.2	B+29.6 points
      Black	119	  6.4	B+23.9 points
      White	120	  4.1	B+28.0 points
      Black	123	  3.7	B+25.0 points
      Black	127	 12.5	B+17.0 points
      White	130	 20.2	B+36.1 points
      Black	133	 31.9	B+4.9 points
      White	134	  4.5	B+9.4 points
      Black	135	  5.2	B+4.2 points
      Black	137	 15.7	W+11.9 points
      White	142	  6.2	W+8 points
      Black	157	  4.2	W+13.7 points
      White	162	 13.2	B+0.1 points
      Black	163	 13.1	W+13 points
      White	164	 11.5	W+1.5 points
      Black	165	 12.4	W+13.9 points
      White	178	  2.9	W+11.7 points
      Black	179	  4.2	W+15.9 points];B[dp](;W[]C[Mistake!

      This move is 12.7 points worse than the AI move.

      Black is ahead by 12.5 points.];B[pd](;W[]C[Mistake!

      This move is 13.7 points worse than the AI move.

      Black is ahead by 26.2 points.];B[dd](;W[]C[Mistake!

      This move is 15.3 points worse than the AI move.

      Black is ahead by 41.3 points.];B[pp];W[nc];B[qf];W[cq];B[dq];W[cp];B[do];W[bn];B[fc];W[nq];B[jp];W[pn];B[on];W[om];B[nn];W[qq];B[pq];W[qp];B[po];W[qo];B[pm];W[qn];B[qr];W[pl];B[nm];W[ol];B[or];W[pc];B[qc];W[qb];B[oc];W[pb];B[od];W[ob];B[rc];W[qh];B[mb];W[mc];B[lc];W[ld](;B[kc]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 39.5 points.];W[nb];B[me];W[ne];B[ph];W[pi];B[pg];W[qi](;B[nd]C[Mistake!

      This move is 6.2 points worse than the AI move.

      Black is ahead by 31.7 points.];W[md];B[mf];W[le];B[lf];W[kf];B[kg];W[jg];B[jf];W[ke];B[kh](;W[gc]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 35.1 points.];B[gd];W[hc];B[hd];W[jc];B[ic];W[ib];B[id];W[jd](;B[fb]C[Mistake!

      This move is 6.3 points worse than the AI move.

      Black is ahead by 28.8 points.](;W[hb]C[Mistake!

      This move is 6.4 points worse than the AI move.

      Black is ahead by 35.2 points.];B[cn];W[co];B[cr];W[br];B[bm];W[dn];B[cm];W[dr];B[er];W[cs];B[fp];W[if];B[jh];W[ig];B[gg];W[cf];B[ce];W[ee](;B[fd]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 29.9 points.];W[be];B[bd];W[de];B[cd];W[dj];B[el];W[fr];B[gr](;W[ko]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 32.8 points.];B[km](;W[jo]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 35.5 points.];B[ip];W[jm];B[jl];W[im];B[kl];W[io](;B[ci]C[Mistake!

      This move is 6.1 points worse than the AI move.

      Black is ahead by 30.2 points.](;W[di]C[Mistake!

      This move is 4.7 points worse than the AI move.

      Black is ahead by 34.9 points.](;B[ch]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 31.1 points.];W[cj](;B[dh]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 29.6 points.];W[eh](;B[bf]C[Mistake!

      This move is 6.4 points worse than the AI move.

      Black is ahead by 23.9 points.](;W[eg]C[Mistake!

      This move is 4.1 points worse than the AI move.

      Black is ahead by 28.0 points.];B[df];W[hp](;B[ir]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 25.0 points.];W[en];B[fn];W[fo](;B[gn]C[Mistake!

      This move is 12.5 points worse than the AI move.

      Black is ahead by 17.0 points.];W[go];B[fq](;W[dl]C[Mistake!

      This move is 20.2 points worse than the AI move.

      Black is ahead by 36.1 points.];B[dm];W[em](;B[fl]C[Mistake!

      This move is 31.9 points worse than the AI move.

      Black is ahead by 4.9 points.](;W[fm]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 9.4 points.](;B[gm]C[Mistake!

      This move is 5.2 points worse than the AI move.

      Black is ahead by 4.2 points.];W[eo](;B[bk]C[Mistake!

      This move is 15.7 points worse than the AI move.

      White is ahead by 11.9 points.];W[cl];B[bl];W[bj];B[bo](;W[ao]C[Mistake!

      This move is 6.2 points worse than the AI move.

      White is ahead by 8.0 points.];B[an];W[ap];B[bp];W[aq];B[fi];W[ei];B[gk];W[hl];B[gl];W[kp];B[hn];W[ho];B[kr];W[kq](;B[jr]C[Mistake!

      This move is 4.2 points worse than the AI move.

      White is ahead by 13.7 points.];W[hk];B[gj];W[ii];B[ih](;W[jj]C[Mistake!

      This move is 13.2 points worse than the AI move.

      Black is ahead by 0.1 points.](;B[hi]C[Mistake!

      This move is 13.1 points worse than the AI move.

      White is ahead by 13.0 points.](;W[hj]C[Mistake!

      This move is 11.5 points worse than the AI move.

      White is ahead by 1.5 points.](;B[hg]C[Mistake!

      This move is 12.4 points worse than the AI move.

      White is ahead by 13.9 points.];W[ef];B[cg];W[np];B[no];W[lj];B[mk];W[lk];B[ml];W[nr];B[rq];W[rp];B[sq](;W[nh]C[Mistake!

      This move is 2.9 points worse than the AI move.

      White is ahead by 11.7 points.](;B[ni]C[Mistake!

      This move is 4.2 points worse than the AI move.

      White is ahead by 15.9 points.];W[oi];B[mi];W[oh];B[nf];W[sp];B[lr];W[mp];B[rs];W[rg];B[rb];W[hq];B[hr];W[rf];B[re];W[se];B[rd];W[og];B[of];W[qg];B[pf];W[ie];B[ok];W[pk];B[lq];W[lp];B[ln];W[nk];B[bi];W[ak];B[al];W[aj];B[ek];W[bq];B[qa];W[pa];B[ra];W[li];B[mh];W[os];B[ps];W[ns])(;B[oi]C[I would play here.

      White is ahead by 11.7 points.];W[mi];B[oh];W[qk];B[mj];W[li];B[ng];W[rg];B[sp]))(;W[ds]C[I would play here.

      White is ahead by 14.6 points.];B[lr];W[mp];B[oi];W[oj];B[nj];W[rf]))(;B[ef]C[I would play here.

      White is ahead by 1.5 points.];W[hh];B[fh];W[gi];B[fj];W[fg];B[hg];W[ff];B[dg];W[fe];B[gf];W[aj];B[bi];W[bq];B[ge];W[bn];B[bo];W[bp];B[ai];W[bn];B[jb];W[kb];B[bo];W[ck];B[ej]))(;W[ef]C[I would play here.

      White is ahead by 13.0 points.];B[dg];W[ni];B[mp];W[mo];B[np];W[mq];B[lq]))(;B[ef]C[I would play here.

      Black is ahead by 0.1 points.];W[hi];B[fh];W[fg];B[gf];W[gh];B[ek];W[aj];B[dg];W[bq];B[bi];W[bn];B[bo];W[gi];B[fj]))(;W[ef]C[I would play here.

      White is ahead by 13.1 points.];B[dg];W[ni];B[fh];W[aj];B[bi];W[bq];B[lq];W[mo];B[mq]))(;B[ef]C[I would play here.

      White is ahead by 9.5 points.];W[gh];B[hh];W[gi];B[hi];W[gj];B[fj];W[fh];B[hk];W[hj];B[ij];W[ii];B[ik];W[ih];B[hg];W[ff];B[ie]))(;W[an]C[I would play here.

      White is ahead by 14.2 points.];B[ei];W[fi];B[gk];W[ej];B[lp];W[kp];B[kq];W[lq];B[lo];W[jq];B[kr];W[iq]))(;B[dk]C[I would play here.

      Black is ahead by 3.8 points.];W[cl];B[ck];W[bl];B[bk];W[am];B[bj];W[fj];B[gk];W[gf];B[hf];W[hg];B[gh];W[hi];B[hh];W[ih];B[gi];W[he];B[ff];W[gj];B[hj];W[ii];B[fg];W[hk];B[ij]))(;B[gl]C[I would play here.

      Black is ahead by 9.4 points.];W[gm];B[dk];W[cl];B[ck];W[bl];B[bk];W[am];B[bj];W[fj];B[hk];W[gf];B[hf];W[hg];B[gh];W[he];B[ff];W[hi];B[gi]))(;W[eo]C[I would play here.

      Black is ahead by 4.9 points.];B[dk];W[cl];B[ck];W[bl];B[bk];W[am];B[bj];W[fj];B[gk];W[gf];B[gh];W[hf];B[ff];W[hi];B[fg];W[hk];B[hl];W[il];B[hj];W[gi];B[ih]))(;B[eo]C[I would play here.

      Black is ahead by 36.8 points.];W[fm];B[gm];W[fl];B[gl];W[fk];B[gk];W[nl];B[ml];W[mk];B[ll];W[mo];B[np];W[mp];B[lq]))(;W[eo]C[I would play here.

      Black is ahead by 15.9 points.];B[ck];W[fk];B[fl];W[gl];B[ek];W[fj];B[bk];W[hk];B[kp];W[lo]))(;B[go]C[I would play here.

      Black is ahead by 29.5 points.];W[eo];B[gp];W[ep];B[gm];W[kp];B[em];W[eq];B[kr]))(;B[hq]C[I would play here.

      Black is ahead by 28.7 points.];W[kp];B[gl];W[gn];B[ho];W[hn];B[gp];W[en]))(;W[kp]C[I would play here.

      Black is ahead by 23.9 points.];B[hp];W[bg];B[df];W[af];B[eg];W[bi];B[bh]))(;B[kp]C[I would play here.

      Black is ahead by 30.3 points.];W[hk];B[fi];W[ei];B[fk]))(;B[kp]C[I would play here.

      Black is ahead by 32.8 points.];W[en];B[fm];W[fn];B[gn];W[go];B[gm]))(;B[kp]C[I would play here.

      Black is ahead by 34.9 points.];W[hk];B[gl];W[hl];B[fj];W[hi]))(;W[kp]C[I would play here.

      Black is ahead by 30.2 points.];B[kr];W[hp];B[hq];W[lr];B[jr];W[mo];B[lq]))(;B[kp]C[I would play here.

      Black is ahead by 36.3 points.];W[hk];B[gl];W[hl];B[gj];W[hp]))(;W[eq]C[I would play here.

      Black is ahead by 31.7 points.];B[ch];W[en];B[fo];W[dh];B[ci]))(;W[eq]C[I would play here.

      Black is ahead by 29.6 points.];B[cg];W[en];B[ep];W[es];B[gq]))(;B[df]C[I would play here.

      Black is ahead by 34.2 points.];W[cg];B[de];W[cj];B[dk];W[dj];B[ek]))(;W[cm]C[I would play here.

      Black is ahead by 28.8 points.];B[dm];W[jq];B[iq];W[kp];B[jo];W[ir];B[jr]))(;B[jb]C[I would play here.

      Black is ahead by 35.1 points.];W[hb];B[fb];W[kb];B[cm];W[if];B[jh];W[ig];B[bm];W[dr];B[er]))(;W[id]C[I would play here.

      Black is ahead by 30.8 points.];B[ib];W[jh];B[ki];W[if];B[cm];W[hq];B[iq]))(;B[mf]C[I would play here.

      Black is ahead by 37.9 points.];W[md];B[cm];W[id];B[bm];W[cn];B[dn]))(;B[lb]C[I would play here.

      Black is ahead by 43.5 points.];W[nb];B[kd];W[ke];B[le];W[md];B[jd];W[lf];B[je];W[me];B[kg];W[pg];B[pf]))(;W[pp]C[I would play here.

      Black is ahead by 26.0 points.];B[qn];W[nq];B[qf];W[fq];B[cn];W[cc]))(;W[dd]C[I would play here.

      Black is ahead by 12.5 points.];B[qp];W[cq];B[cp];W[dq];B[ep];W[fr];B[op]))(;W[dd]C[I would play here.

      White is ahead by 0.2 points.];B[pp];W[pd];B[cc];W[dc];B[cd];W[de];B[bf];W[qq];B[pq];W[qp];B[qn];W[qo]))
    `,
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 5, 29).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.Black,
    },
    additionalInfo: "Partida 5",
    gameEventRef: GameEventTypes.live,
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[0.5]RU[japanese]PW[Yuichiro]WR[-]PB[Philippe]BR[-]RE[B+R]C[Mistakes:

      Player	Move	Loss 	Score

      White	  2	 13.0	B+18.7 points
      White	  4	 12.3	B+31.1 points
      White	  6	 13.8	B+44.7 points
      Black	 39	  4.3	B+42.7 points
      White	 40	  4.2	B+46.9 points
      Black	 41	  3.5	B+43.4 points
      White	 44	  2.9	B+46.4 points
      White	 46	  4.3	B+50.1 points
      Black	 47	  4.0	B+46.1 points
      White	 52	  3.0	B+47.7 points
      Black	 53	  3.5	B+44.2 points
      Black	 55	  3.1	B+43.9 points
      Black	 57	  7.4	B+37.8 points
      Black	 63	  3.6	B+36.6 points
      Black	 67	  5.7	B+31.5 points
      Black	 85	  9.9	B+27.8 points
      White	 88	  6.5	B+33.9 points
      White	 90	  5.5	B+39.0 points
      Black	 91	  3.2	B+35.8 points
      White	 92	  5.8	B+41.6 points
      White	 94	  3.1	B+43.4 points
      Black	 97	  4.2	B+41.2 points
      White	100	  5.3	B+46.5 points
      White	102	  3.0	B+48.9 points
      Black	103	  4.5	B+44.4 points
      Black	107	  8.9	B+39.8 points
      White	112	  4.3	B+43.8 points
      White	118	  3.7	B+50.1 points
      Black	125	  3.2	B+45.5 points
      Black	129	  3.4	B+44.1 points
      White	130	  3.4	B+47.5 points
      White	134	  5.9	B+51.4 points
      Black	135	  3.5	B+47.9 points
      White	136	  4.9	B+52.8 points
      White	138	 10.1	B+61.9 points
      Black	139	  8.4	B+53.5 points
      White	140	  3.7	B+57.2 points
      White	142	  9.0	B+64.3 points
      White	156	  4.6	B+62.4 points
      Black	157	  4.2	B+58.2 points
      Black	167	  4.2	B+57.9 points
      Black	171	  4.6	B+53.7 points
      White	172	  4.3	B+58.0 points
      Black	173	  4.2	B+53.8 points
      White	174	  2.9	B+56.7 points
      White	176	  3.8	B+60.5 points
      White	180	  6.4	B+66.3 points
      Black	181	  3.3	B+63.0 points
      Black	183	  6.4	B+57.2 points
      Black	185	  8.7	B+49.4 points
      White	186	  5.7	B+55.1 points
      Black	187	  4.3	B+50.8 points
      White	188	  2.9	B+53.7 points
      Black	189	  3.4	B+50.3 points
      White	190	  4.8	B+55.1 points
      White	192	  4.4	B+57.2 points];B[dp](;W[]C[Mistake!

      This move is 13 points worse than the AI move.

      Black is ahead by 18.7 points.];B[pd](;W[]C[Mistake!

      This move is 12.3 points worse than the AI move.

      Black is ahead by 31.1 points.];B[dd](;W[]C[Mistake!

      This move is 13.8 points worse than the AI move.

      Black is ahead by 44.7 points.];B[pp];W[nc];B[qf];W[fc];B[jd];W[cf];B[df];W[dg];B[ef];W[cd];B[cc];W[be];B[db];W[qq];B[qp];W[pq];B[op];W[oq];B[np];W[nq];B[mp];W[pc];B[qc];W[qb];B[oc];W[pb];B[od];W[ob];B[rc];W[lc];B[kc];W[ld](;B[kf]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 42.7 points.](;W[mf]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 46.9 points.](;B[mh]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 43.4 points.];W[pg];B[nf](;W[pf]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 46.4 points.];B[nd](;W[je]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 50.1 points.](;B[ke]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 46.1 points.];W[kd];B[jc];W[ie];B[hc](;W[hd]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 47.7 points.](;B[gc]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 44.2 points.];W[gd](;B[fb]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 43.9 points.];W[md](;B[mb]C[Mistake!

      This move is 7.4 points worse than the AI move.

      Black is ahead by 37.8 points.];W[lb];B[mg];W[lf];B[kg];W[ng](;B[of]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 36.6 points.];W[og];B[qe];W[qg](;B[rb]C[Mistake!

      This move is 5.7 points worse than the AI move.

      Black is ahead by 31.5 points.];W[nb];B[qj];W[oj];B[mj];W[rf];B[re];W[rh];B[ra];W[qk];B[rk];W[ql];B[rl];W[rj];B[ri];W[qi];B[sj];W[pj](;B[rj]C[Mistake!

      This move is 9.9 points worse than the AI move.

      Black is ahead by 27.8 points.];W[lg];B[lh](;W[rm]C[Mistake!

      This move is 6.5 points worse than the AI move.

      Black is ahead by 33.9 points.];B[qm](;W[rn]C[Mistake!

      This move is 5.5 points worse than the AI move.

      Black is ahead by 39.0 points.](;B[ro]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 35.8 points.](;W[mk]C[Mistake!

      This move is 5.8 points worse than the AI move.

      Black is ahead by 41.6 points.];B[lk](;W[ol]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 43.4 points.];B[qn];W[ml](;B[fh]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 41.2 points.];W[bc];B[de](;W[eg]C[Mistake!

      This move is 5.3 points worse than the AI move.

      Black is ahead by 46.5 points.];B[fg](;W[ch]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 48.9 points.](;B[mq]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 44.4 points.];W[gb];B[hb];W[eb](;B[ec]C[Mistake!

      This move is 8.9 points worse than the AI move.

      Black is ahead by 39.8 points.];W[fa];B[fd];W[fe];B[fb](;W[ic]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 43.8 points.];B[ib];W[fc];B[ed];W[id];B[jb](;W[ig]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 50.1 points.];B[jh];W[hi];B[hf];W[hg];B[gf];W[jg](;B[nj]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 45.5 points.];W[nk];B[ll];W[lm](;B[jl]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 44.1 points.](;W[ji]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 47.5 points.];B[ih];W[hh];B[km](;W[mr]C[Mistake!

      This move is 5.9 points worse than the AI move.

      Black is ahead by 51.4 points.](;B[lr]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 47.9 points.](;W[ms]C[Mistake!

      This move is 4.9 points worse than the AI move.

      Black is ahead by 52.8 points.];B[gj](;W[ik]C[Mistake!

      This move is 10.1 points worse than the AI move.

      Black is ahead by 61.9 points.](;B[hl]C[Mistake!

      This move is 8.4 points worse than the AI move.

      Black is ahead by 53.5 points.](;W[il]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 57.2 points.];B[im](;W[hk]C[Mistake!

      This move is 9 points worse than the AI move.

      Black is ahead by 64.3 points.];B[gk];W[hm];B[gl];W[in];B[jm];W[lj];B[kj];W[ki];B[kh];W[li];B[ii];W[kk];B[jk](;W[kl]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 62.4 points.](;B[hj]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 58.2 points.];W[cq];B[dq];W[cp];B[co];W[bo];B[bn];W[cn];B[do];W[bm](;B[bp]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 57.9 points.];W[an];B[bq];W[cb](;B[fb]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 53.7 points.](;W[kn]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 58.0 points.](;B[ln]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 53.8 points.](;W[jn]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 56.7 points.];B[ij](;W[lo]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 60.5 points.];B[mn];W[fr];B[er](;W[em]C[Mistake!

      This move is 6.4 points worse than the AI move.

      Black is ahead by 66.3 points.](;B[fn]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 63.0 points.];W[kr](;B[lq]C[Mistake!

      This move is 6.4 points worse than the AI move.

      Black is ahead by 57.2 points.];W[ls](;B[dc]C[Mistake!

      This move is 8.7 points worse than the AI move.

      Black is ahead by 49.4 points.](;W[ej]C[Mistake!

      This move is 5.7 points worse than the AI move.

      Black is ahead by 55.1 points.](;B[ek]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 50.8 points.](;W[dk]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 53.7 points.](;B[dj]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 50.3 points.](;W[el]C[Mistake!

      This move is 4.8 points worse than the AI move.

      Black is ahead by 55.1 points.];B[ei](;W[fk]C[Mistake!

      This move is 4.4 points worse than the AI move.

      Black is ahead by 57.2 points.];B[ci])(;W[kq]C[I would play here.

      Black is ahead by 52.8 points.];B[ck];W[fk];B[ci];W[cl];B[bb];W[bi];B[bj];W[ab];B[ca]))(;W[cr]C[I would play here.

      Black is ahead by 50.3 points.];B[br];W[jq];B[ck];W[dl];B[di];W[ei];B[eh];W[dh];B[bi]))(;B[jq]C[I would play here.

      Black is ahead by 53.7 points.];W[jr];B[iq];W[ir];B[hq];W[hr];B[gq];W[gr];B[rq];W[fq]))(;W[kq]C[I would play here.

      Black is ahead by 50.8 points.];B[ce];W[bd];B[ck];W[dk];B[dj];W[dl];B[di];W[bj];B[cj]))(;B[jq]C[I would play here.

      Black is ahead by 55.1 points.];W[jr];B[iq];W[ir];B[hq];W[hr];B[gq];W[gr];B[rq];W[fq]))(;W[iq]C[I would play here.

      Black is ahead by 49.4 points.];B[cj];W[bk];B[bj];W[ck];B[dj];W[bb]))(;B[jq]C[I would play here.

      Black is ahead by 58.1 points.];W[jr];B[iq];W[ir];B[hq];W[hr];B[gq];W[ek];B[di];W[dj]))(;B[kq]C[I would play here.

      Black is ahead by 63.6 points.];W[ls];B[jr];W[lq];B[lp];W[ir];B[jq];W[js];B[lr];W[ks];B[iq];W[hr];B[gq];W[fc]))(;B[ls]C[I would play here.

      Black is ahead by 66.3 points.];W[nr];B[fn];W[lq];B[kq];W[lp];B[jr];W[iq];B[ir]))(;W[iq]C[I would play here.

      Black is ahead by 59.9 points.];B[ls];W[nr];B[kq];W[go];B[rq];W[rr];B[sr];W[rs];B[jp]))(;W[kr]C[I would play here.

      Black is ahead by 56.7 points.];B[kq];W[ls];B[jq];W[jr];B[iq];W[dn];B[en]))(;W[kr]C[I would play here.

      Black is ahead by 53.8 points.];B[kq];W[ls];B[jq];W[lq];B[lp];W[jr];B[ir];W[iq]))(;B[rq]C[I would play here.

      Black is ahead by 58.0 points.];W[rr];B[sr];W[kr];B[kq];W[ls];B[jr];W[lq];B[kp]))(;W[kr]C[I would play here.

      Black is ahead by 53.7 points.];B[kq];W[ls];B[jr];W[lq];B[jq];W[dn];B[rq];W[rr]))(;B[dc]C[I would play here.

      Black is ahead by 58.3 points.];W[kr];B[kq];W[ls];B[cj];W[dk];B[dj];W[ej]))(;B[ls]C[I would play here.

      Black is ahead by 62.1 points.];W[cb];B[dc];W[nr];B[rq];W[rr];B[sr]))(;B[jj]C[I would play here.

      Black is ahead by 62.4 points.];W[fq];B[dr];W[hj];B[ij];W[gm]))(;W[jj]C[I would play here.

      Black is ahead by 57.8 points.];B[hj];W[ij];B[kl];W[kn];B[kj];W[sd];B[mi];W[se];B[ls];W[or];B[eq];W[cn];B[cl];W[bp];B[cq]))(;W[gk]C[I would play here.

      Black is ahead by 55.3 points.];B[hj];W[hk];B[ij];W[ii];B[ki];W[gi];B[fj];W[fi];B[ei];W[jj]))(;W[gk]C[I would play here.

      Black is ahead by 53.5 points.];B[fk];W[hj];B[ki];W[gl];B[hm];W[fj];B[gi]))(;B[ii]C[I would play here.

      Black is ahead by 61.9 points.];W[gk];B[fk];W[fj];B[gi];W[hj];B[gl]))(;W[cb]C[I would play here.

      Black is ahead by 51.8 points.];B[dc];W[hj];B[ki];W[gk];B[pi];W[oi];B[qh];W[nm];B[pl]))(;W[cb]C[I would play here.

      Black is ahead by 47.9 points.];B[dc];W[fi];B[rq];W[fq];B[eh];W[gl]))(;B[nh]C[I would play here.

      Black is ahead by 51.4 points.];W[oi];B[gj];W[hj];B[hk];W[ki];B[kh];W[ik]))(;W[gj]C[I would play here.

      Black is ahead by 45.5 points.];B[ki];W[rq];B[ej];W[gl];B[el]))(;W[cb]C[I would play here.

      Black is ahead by 44.1 points.];B[dc];W[gj];B[rq];W[bb];B[da];W[fq];B[km]))(;B[km]C[I would play here.

      Black is ahead by 47.5 points.];W[cb];B[dc];W[hk];B[mm];W[ln];B[nm]))(;B[ll]C[I would play here.

      Black is ahead by 48.7 points.];W[ji];B[kh];W[gj];B[nk];W[nj]))(;W[kh]C[I would play here.

      Black is ahead by 46.4 points.];B[ig];W[jh];B[jg];W[ih];B[hh];W[hi];B[hg];W[jl];B[jj]))(;W[kh]C[I would play here.

      Black is ahead by 39.5 points.];B[ig];W[jh];B[jg];W[ih];B[hh];W[fc];B[ed];W[hi];B[hg]))(;B[ga]C[I would play here.

      Black is ahead by 48.7 points.];W[ih];B[ig];W[hg];B[hh];W[ec];B[dc];W[fe]))(;B[ih]C[I would play here.

      Black is ahead by 48.9 points.];W[kh];B[ki];W[cn];B[dn];W[dm];B[en];W[jh];B[ji]))(;W[kh]C[I would play here.

      Black is ahead by 45.9 points.];B[ig];W[ji];B[ce];W[bg];B[ch];W[cg]))(;W[kh]C[I would play here.

      Black is ahead by 41.2 points.];B[jh];W[ki];B[ig];W[ji];B[ii];W[jk];B[ij];W[kk]))(;B[ig]C[I would play here.

      Black is ahead by 45.4 points.];W[ji];B[ii];W[jh];B[ih];W[jj];B[kh]))(;W[kh]C[I would play here.

      Black is ahead by 40.3 points.];B[ig];W[ki];B[lj];W[ec];B[eb];W[hh];B[hg];W[gg];B[ih];W[ii]))(;W[kh]C[I would play here.

      Black is ahead by 35.8 points.];B[ig];W[ki];B[lj];W[ec];B[eb];W[hh];B[hg];W[gg];B[ih]))(;B[qn]C[I would play here.

      Black is ahead by 39.0 points.];W[kh];B[ig];W[ki];B[lj];W[hh];B[hg];W[gg];B[gf];W[gh]))(;W[se]C[I would play here.

      Black is ahead by 33.5 points.];B[pi];W[oi];B[sd];W[ec];B[eb];W[kh];B[ig];W[ki]))(;W[kh]C[I would play here.

      Black is ahead by 27.4 points.];B[ig];W[qn];B[rm];W[ki];B[lj];W[ol];B[qm];W[hh]))(;B[ig]C[I would play here.

      Black is ahead by 37.7 points.];W[lg];B[lh];W[kh];B[ji];W[jh];B[ih];W[ki];B[kj];W[jj]))(;B[nb]C[I would play here.

      Black is ahead by 37.2 points.];W[mc];B[rb];W[na];B[pj];W[lg];B[oi];W[qi]))(;B[ne]C[I would play here.

      Black is ahead by 40.2 points.];W[ed];B[ec];W[qe];B[re];W[rf];B[qg]))(;B[mg]C[I would play here.

      Black is ahead by 45.2 points.];W[ne];B[oe];W[me];B[of];W[qe];B[qd];W[re];B[nb]))(;B[mc]C[I would play here.

      Black is ahead by 47.0 points.];W[lb];B[fb];W[nb];B[md];W[mb];B[qg];W[qh];B[rh]))(;B[mc]C[I would play here.

      Black is ahead by 47.7 points.];W[lb];B[gc];W[gd];B[fb];W[nb];B[md];W[mb];B[qg];W[qh]))(;W[md]C[I would play here.

      Black is ahead by 44.7 points.];B[mg];W[me];B[ne];W[gd];B[hd];W[he]))(;B[mc]C[I would play here.

      Black is ahead by 50.1 points.];W[lb];B[nb];W[id];B[qi];W[qe];B[qd];W[pi]))(;W[md]C[I would play here.

      Black is ahead by 45.8 points.];B[qg];W[ng];B[ne];W[mg];B[me];W[le]))(;W[nd]C[I would play here.

      Black is ahead by 43.5 points.];B[qg];W[pi];B[di];W[eg];B[fg];W[fh]))(;B[nd]C[I would play here.

      Black is ahead by 46.9 points.];W[md];B[mq];W[je];B[ie];W[jf]))(;W[je]C[I would play here.

      Black is ahead by 42.7 points.];B[nd];W[ke];B[hd];W[ie];B[mc]))(;B[nd]C[I would play here.

      Black is ahead by 47.0 points.];W[lb];B[mc];W[nb];B[md];W[mb];B[mq];W[qi]))(;W[pp]C[I would play here.

      Black is ahead by 30.9 points.];B[nq];W[qn];B[fq];W[qf];B[nc]))(;W[dd]C[I would play here.

      Black is ahead by 18.8 points.];B[qp];W[cq];B[dq];W[cp];B[do];W[cn]))(;W[pd]C[I would play here.

      Black is ahead by 5.7 points.];B[dc];W[pp];B[qc];W[qd];B[pc];W[nc];B[oc];W[od];B[nb]))
    `,
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 5, 30).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.White,
    },
    additionalInfo: "Partida 6",
    gameEventRef: GameEventTypes.live,
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[0.5]RU[japanese]DT[2022-06-30]PW[Yuichiro Shimawaki]PB[Philippe Fanaro]RE[W+R]C[Mistakes:

      Player	Move	Loss 	Score

      White	  2	 12.9	B+18.6 points
      White	  4	 12.3	B+31.0 points
      White	  6	 13.8	B+44.7 points
      Black	 25	  3.9	B+42.5 points
      White	 30	  3.7	B+44.7 points
      Black	 37	  3.3	B+41.2 points
      White	 46	  3.6	B+44.1 points
      Black	 47	  5.4	B+38.7 points
      Black	 63	  2.9	B+36.6 points
      White	 76	  3.2	B+41.1 points
      Black	 79	  3.1	B+39.2 points
      Black	 87	  4.4	B+34.4 points
      White	 90	  6.1	B+40.0 points
      Black	 91	  8.3	B+31.7 points
      White	 96	  3.3	B+34.2 points
      Black	 97	  4.4	B+29.8 points
      White	 98	  3.1	B+32.9 points
      Black	 99	  4.8	B+28.1 points
      White	102	  5.5	B+34.0 points
      Black	103	 11.4	B+22.6 points
      White	104	  5.3	B+27.9 points
      Black	105	  5.4	B+22.5 points
      White	106	  4.2	B+26.7 points
      White	108	  4.9	B+28.9 points
      White	112	 10.1	B+39.7 points
      Black	113	 14.1	B+25.6 points
      Black	117	  4.2	B+24.0 points
      Black	119	  4.3	B+20.0 points
      White	120	  6.2	B+26.2 points
      Black	121	  5.3	B+20.9 points
      White	124	  4.0	B+27.0 points
      Black	125	 10.2	B+16.8 points
      White	128	  2.9	B+19.3 points
      Black	129	 10.5	B+8.8 points
      White	130	  3.9	B+12.7 points
      Black	131	  3.8	B+8.9 points
      White	134	 10.7	B+17.6 points
      Black	135	  7.2	B+10.4 points
      White	136	  9.7	B+20.1 points
      Black	137	  8.5	B+11.6 points
      White	138	  6.3	B+17.9 points
      Black	143	  3.1	B+17.1 points
      White	144	 11.6	B+28.7 points
      Black	145	 16.4	B+12.3 points
      White	146	  3.2	B+15.5 points
      Black	147	  4.3	B+11.2 points
      Black	149	  7.8	B+3.7 points
      White	154	  5.7	B+8.1 points
      Black	155	 10.1	W+2 points
      White	158	  3.0	W+0.5 points
      Black	159	  5.1	W+5.6 points
      White	160	  5.8	B+0.2 points
      Black	161	  6.2	W+6 points
      White	162	  6.7	B+0.7 points
      Black	163	 10.1	W+9.4 points
      White	164	  6.4	W+3 points
      Black	165	  5.1	W+8.1 points
      White	166	  3.0	W+5.1 points
      Black	167	  5.0	W+10.1 points
      Black	169	  5.1	W+12.5 points
      White	170	  5.0	W+7.5 points
      Black	173	  7.9	W+16.2 points
      White	174	  3.1	W+13.1 points
      White	178	  4.2	W+9.9 points
      Black	179	  3.9	W+13.8 points
      Black	181	  3.7	W+16.1 points
      Black	183	  7.5	W+22.3 points
      White	186	  3.2	W+19.9 points
      Black	187	 11.3	W+31.2 points
      Black	189	  8.4	W+37.3 points
      White	190	 11.2	W+26.1 points
      Black	193	  3.2	W+28.2 points
      Black	195	  8.9	W+36.1 points];B[pd](;W[]C[Mistake!

      This move is 12.9 points worse than the AI move.

      Black is ahead by 18.6 points.];B[dd](;W[]C[Mistake!

      This move is 12.3 points worse than the AI move.

      Black is ahead by 31.0 points.];B[dp](;W[]C[Mistake!

      This move is 13.8 points worse than the AI move.

      Black is ahead by 44.7 points.];B[pp];W[cq];B[dq];W[cp];B[do];W[bn];B[lq];W[fc];B[jd];W[cf];B[df];W[dg];B[ef];W[cc];B[ce];W[cg];B[dc];W[db](;B[eb]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 42.5 points.];W[cb];B[fb];W[be];B[eg](;W[eh]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 44.7 points.];B[fh];W[fi];B[gi];W[gh];B[fg];W[fj](;B[hh]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 41.2 points.];W[gj];B[gg];W[qf];B[pf];W[pg];B[of];W[qc];B[qe](;W[ob]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 44.1 points.](;B[qg]C[Mistake!

      This move is 5.4 points worse than the AI move.

      Black is ahead by 38.7 points.];W[lc];B[kc];W[ld];B[nc];W[nb];B[pc];W[pb];B[rc];W[rb];B[qd];W[qb];B[lb];W[mb];B[kb];W[nd](;B[hj]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 36.6 points.];W[hk];B[cn];W[bm];B[ei];W[dh];B[gk];W[ij];B[hi];W[ej];B[hl];W[ik];B[gl](;W[il]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 41.1 points.];B[im];W[jm](;B[in]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 39.2 points.];W[jn];B[jo];W[io];B[gn];W[kp];B[ko];W[lp](;B[lm]C[Mistake!

      This move is 4.4 points worse than the AI move.

      Black is ahead by 34.4 points.];W[jp];B[lo](;W[ho]C[Mistake!

      This move is 6.1 points worse than the AI move.

      Black is ahead by 40.0 points.](;B[go]C[Mistake!

      This move is 8.3 points worse than the AI move.

      Black is ahead by 31.7 points.];W[mp];B[kl];W[mo];B[mn](;W[je]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 34.2 points.](;B[ki]C[Mistake!

      This move is 4.4 points worse than the AI move.

      Black is ahead by 29.8 points.](;W[id]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 32.9 points.](;B[ic]C[Mistake!

      This move is 4.8 points worse than the AI move.

      Black is ahead by 28.1 points.];W[qh];B[rf](;W[rg]C[Mistake!

      This move is 5.5 points worse than the AI move.

      Black is ahead by 34.0 points.](;B[qf]C[Mistake!

      This move is 11.4 points worse than the AI move.

      Black is ahead by 22.6 points.](;W[ri]C[Mistake!

      This move is 5.3 points worse than the AI move.

      Black is ahead by 27.9 points.](;B[oi]C[Mistake!

      This move is 5.4 points worse than the AI move.

      Black is ahead by 22.5 points.](;W[oh]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 26.7 points.];B[nh](;W[ng]C[Mistake!

      This move is 4.9 points worse than the AI move.

      Black is ahead by 28.9 points.];B[og];W[ph];B[me](;W[mj]C[Mistake!

      This move is 10.1 points worse than the AI move.

      Black is ahead by 39.7 points.](;B[lk]C[Mistake!

      This move is 14.1 points worse than the AI move.

      Black is ahead by 25.6 points.];W[mg];B[ni];W[kd](;B[lf]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 24.0 points.];W[jc](;B[rk]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 20.0 points.](;W[kh]C[Mistake!

      This move is 6.2 points worse than the AI move.

      Black is ahead by 26.2 points.](;B[lg]C[Mistake!

      This move is 5.3 points worse than the AI move.

      Black is ahead by 20.9 points.];W[qk];B[ql](;W[pi]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 27.0 points.](;B[mh]C[Mistake!

      This move is 10.2 points worse than the AI move.

      Black is ahead by 16.8 points.];W[pk];B[rj](;W[qj]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 19.3 points.](;B[sg]C[Mistake!

      This move is 10.5 points worse than the AI move.

      Black is ahead by 8.8 points.](;W[om]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 12.7 points.](;B[oo]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 8.9 points.];W[qm];B[rl](;W[on]C[Mistake!

      This move is 10.7 points worse than the AI move.

      Black is ahead by 17.6 points.](;B[nn]C[Mistake!

      This move is 7.2 points worse than the AI move.

      Black is ahead by 10.4 points.](;W[no]C[Mistake!

      This move is 9.7 points worse than the AI move.

      Black is ahead by 20.1 points.](;B[qn]C[Mistake!

      This move is 8.5 points worse than the AI move.

      Black is ahead by 11.6 points.](;W[po]C[Mistake!

      This move is 6.3 points worse than the AI move.

      Black is ahead by 17.9 points.];B[op];W[qo];B[qp];W[ro](;B[rp]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 17.1 points.](;W[nq]C[Mistake!

      This move is 11.6 points worse than the AI move.

      Black is ahead by 28.7 points.](;B[rn]C[Mistake!

      This move is 16.4 points worse than the AI move.

      Black is ahead by 12.3 points.](;W[pn]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 15.5 points.](;B[so]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 11.2 points.];W[rm](;B[sm]C[Mistake!

      This move is 7.8 points worse than the AI move.

      Black is ahead by 3.7 points.];W[sn];B[rn];W[oj];B[or](;W[nr]C[Mistake!

      This move is 5.7 points worse than the AI move.

      Black is ahead by 8.1 points.](;B[nl]C[Mistake!

      This move is 10.1 points worse than the AI move.

      White is ahead by 2.0 points.];W[lh];B[nf](;W[li]C[Mistake!

      This move is 3 points worse than the AI move.

      White is ahead by 0.5 points.](;B[ji]C[Mistake!

      This move is 5.1 points worse than the AI move.

      White is ahead by 5.6 points.](;W[jh]C[Mistake!

      This move is 5.8 points worse than the AI move.

      Black is ahead by 0.2 points.](;B[ii]C[Mistake!

      This move is 6.2 points worse than the AI move.

      White is ahead by 6.0 points.](;W[rh]C[Mistake!

      This move is 6.7 points worse than the AI move.

      Black is ahead by 0.7 points.](;B[hq]C[Mistake!

      This move is 10.1 points worse than the AI move.

      White is ahead by 9.4 points.](;W[iq]C[Mistake!

      This move is 6.4 points worse than the AI move.

      White is ahead by 3.0 points.](;B[hr]C[Mistake!

      This move is 5.1 points worse than the AI move.

      White is ahead by 8.1 points.](;W[ir]C[Mistake!

      This move is 3 points worse than the AI move.

      White is ahead by 5.1 points.](;B[cl]C[Mistake!

      This move is 5 points worse than the AI move.

      White is ahead by 10.1 points.];W[cm](;B[dm]C[Mistake!

      This move is 5.1 points worse than the AI move.

      White is ahead by 12.5 points.](;W[co]C[Mistake!

      This move is 5 points worse than the AI move.

      White is ahead by 7.5 points.];B[cj];W[dj](;B[dn]C[Mistake!

      This move is 7.9 points worse than the AI move.

      White is ahead by 16.2 points.](;W[pr]C[Mistake!

      This move is 3.1 points worse than the AI move.

      White is ahead by 13.1 points.];B[qr];W[oq];B[pq](;W[os]C[Mistake!

      This move is 4.2 points worse than the AI move.

      White is ahead by 9.9 points.](;B[rr]C[Mistake!

      This move is 3.9 points worse than the AI move.

      White is ahead by 13.8 points.];W[hc](;B[ci]C[Mistake!

      This move is 3.7 points worse than the AI move.

      White is ahead by 16.1 points.];W[di](;B[gc]C[Mistake!

      This move is 7.5 points worse than the AI move.

      White is ahead by 22.3 points.];W[dl];B[ib](;W[gb]C[Mistake!

      This move is 3.2 points worse than the AI move.

      White is ahead by 19.9 points.](;B[hd]C[Mistake!

      This move is 11.3 points worse than the AI move.

      White is ahead by 31.2 points.];W[gd](;B[he]C[Mistake!

      This move is 8.4 points worse than the AI move.

      White is ahead by 37.3 points.](;W[hb]C[Mistake!

      This move is 11.2 points worse than the AI move.

      White is ahead by 26.1 points.];B[jb];W[ec](;B[mc]C[Mistake!

      This move is 3.2 points worse than the AI move.

      White is ahead by 28.2 points.];W[md](;B[oc]C[Mistake!

      This move is 8.9 points worse than the AI move.

      White is ahead by 36.1 points.];W[jd])(;B[jf]C[I would play here.

      White is ahead by 27.2 points.];W[oc];B[ol];W[ok];B[pl];W[ge];B[hf];W[ie];B[is]))(;B[jf]C[I would play here.

      White is ahead by 25.0 points.];W[nj];B[mf];W[nm];B[jd];W[oc];B[ie];W[dr];B[er]))(;W[ec]C[I would play here.

      White is ahead by 37.3 points.];B[jf];W[ok];B[jb];W[if];B[jg];W[oc];B[jd];W[ie];B[ke]))(;B[hb]C[I would play here.

      White is ahead by 28.9 points.];W[nj];B[mf];W[gc];B[ec];W[ha];B[he];W[jb];B[cr];W[br]))(;B[el]C[I would play here.

      White is ahead by 19.9 points.];W[dk];B[hb];W[gd];B[ga];W[nj];B[mf];W[jb];B[ja]))(;W[nj]C[I would play here.

      White is ahead by 23.1 points.];B[mf];W[hb];B[hd];W[he];B[gd];W[jb];B[bl];W[dk];B[cr]))(;B[cr]C[I would play here.

      White is ahead by 14.8 points.];W[br];B[bq];W[aq];B[bs];W[ar];B[bl];W[dr];B[er];W[cs];B[gb];W[hb]))(;B[cr]C[I would play here.

      White is ahead by 12.4 points.];W[br];B[bq];W[bp];B[ar];W[aq];B[bs];W[as];B[ci];W[di];B[ar];W[nj];B[mf];W[as]))(;B[ok]C[I would play here.

      White is ahead by 9.9 points.];W[nj];B[pl];W[mi];B[rd];W[dl];B[hc];W[jb];B[is];W[js];B[hs];W[jr];B[cr];W[br]))(;W[nj]C[I would play here.

      White is ahead by 14.1 points.];B[mf];W[os];B[qs];W[hc];B[bl];W[ci];B[cr];W[br];B[dr]))(;W[dl]C[I would play here.

      White is ahead by 16.2 points.];B[cr];W[br];B[bq];W[aq];B[bs];W[ar];B[ib];W[hc];B[hb];W[jb]))(;B[hc]C[I would play here.

      White is ahead by 8.3 points.];W[nj];B[mf];W[jb];B[dl];W[pr];B[qr];W[oq];B[pq];W[os];B[rr];W[dr];B[er];W[cr];B[is]))(;W[nj]C[I would play here.

      White is ahead by 12.5 points.];B[mf];W[hc];B[cr];W[br];B[bq];W[bp];B[bo];W[dr];B[co];W[cs]))(;B[hc]C[I would play here.

      White is ahead by 7.4 points.];W[nj];B[mf];W[jb];B[dl];W[pr];B[qr];W[os];B[pq];W[oq];B[qs]))(;B[ok]C[I would play here.

      White is ahead by 5.1 points.];W[nj];B[pl];W[mi];B[rd];W[hc];B[cr];W[cm];B[dl];W[br];B[ck];W[dr];B[er];W[cs];B[di];W[dj]))(;W[pr]C[I would play here.

      White is ahead by 8.1 points.];B[qr];W[oq];B[pq];W[os];B[ok];W[ol];B[nk];W[pl];B[nj];W[rs];B[rr];W[qs];B[sl];W[sj];B[pj];W[qn];B[sn]))(;B[ok]C[I would play here.

      White is ahead by 3.0 points.];W[nj];B[pl];W[mi];B[rd];W[hr];B[hc];W[jb];B[dk];W[dj];B[cj];W[cm];B[cl];W[dm];B[ek];W[dr];B[er];W[cr];B[hp];W[gr];B[ip];W[pr];B[oq]))(;W[pr]C[I would play here.

      White is ahead by 9.4 points.];B[ok];W[pl];B[nj];W[qq];B[pj];W[sj];B[sl];W[oj];B[rr];W[oq];B[rq];W[ol];B[pj];W[sp]))(;B[ok]C[I would play here.

      Black is ahead by 0.7 points.];W[nj];B[iq];W[jr];B[ir];W[mi];B[rd];W[ip];B[gq];W[pl];B[kr];W[lr];B[ls];W[pr];B[oq];W[os];B[rr];W[mq];B[mr];W[rs]))(;W[hq]C[I would play here.

      White is ahead by 6.0 points.];B[jf];W[pl];B[ol];W[sh];B[rh];W[nm];B[ml];W[rg];B[bf];W[cd];B[rh];W[nj];B[mf];W[rg];B[de];W[bg];B[rh];W[ln];B[kn];W[rg];B[bd]))(;B[iq]C[I would play here.

      Black is ahead by 0.2 points.];W[jr];B[ir];W[pr];B[oq];W[os];B[qr];W[lr];B[nk];W[ok];B[nj];W[rh];B[ib];W[hc];B[hb];W[gb];B[ga];W[gc];B[ec];W[jb]))(;W[hq]C[I would play here.

      White is ahead by 5.6 points.];B[ol];W[pl];B[mf];W[sl];B[sk];W[si];B[sn];W[sh];B[rh];W[nj];B[lj];W[rg];B[sf];W[ok];B[rh];W[mi];B[jh];W[rg];B[ib];W[jb]))(;B[iq]C[I would play here.

      White is ahead by 0.5 points.];W[pr];B[oq];W[os];B[qr];W[qs];B[rr];W[jr];B[ir];W[lr];B[jq];W[kq];B[js];W[kr];B[ip];W[nj];B[ks];W[ns];B[mq]))(;W[nj]C[I would play here.

      White is ahead by 3.5 points.];B[mf];W[nm];B[iq];W[ip];B[ml];W[li];B[jr];W[gp];B[hq];W[gq];B[hp];W[kr]))(;B[iq]C[I would play here.

      Black is ahead by 8.1 points.];W[ip];B[jr];W[pr];B[oq];W[gp];B[gr];W[os];B[qr];W[fp];B[hq];W[fo];B[ek];W[fn];B[hm];W[dm]))(;W[oq]C[I would play here.

      Black is ahead by 2.4 points.];B[pr];W[hq];B[nr];W[gp];B[lh];W[pl];B[ib];W[jb];B[ja];W[jd];B[hc];W[fo];B[fn];W[hn];B[hm];W[en];B[eo];W[fm];B[gm]))(;B[or]C[I would play here.

      Black is ahead by 11.5 points.];W[sn];B[nr];W[gp];B[jr];W[iq];B[fp];W[fq];B[hp];W[gq];B[lr]))(;B[pl]C[I would play here.

      Black is ahead by 15.5 points.];W[ol];B[oj];W[rm];B[ok];W[pr];B[qr];W[pq];B[qq];W[sp];B[sq];W[rr];B[so];W[sn];B[rn];W[qn];B[sl];W[ml];B[ip];W[iq];B[hp];W[hq];B[hn];W[sp]))(;W[oj]C[I would play here.

      Black is ahead by 12.3 points.];B[pn];W[lh];B[iq];W[ip];B[jr];W[gp];B[hq];W[gq];B[lr];W[hp];B[fp];W[fr];B[er];W[hr]))(;B[pl]C[I would play here.

      Black is ahead by 28.7 points.];W[ol];B[oj];W[rm];B[ok];W[pr];B[sp];W[qq];B[so];W[rn];B[nl];W[sl];B[sn];W[sm];B[pj];W[hc];B[iq]))(;W[oj]C[I would play here.

      Black is ahead by 17.1 points.];B[mq];W[hq];B[ir];W[nq];B[nr];W[kr];B[iq]))(;B[nr]C[I would play here.

      Black is ahead by 20.2 points.];W[nq];B[or];W[hq];B[pl];W[ol];B[oj];W[ok];B[rn];W[pn];B[pm];W[sn];B[rm];W[sh];B[rh];W[jl]))(;W[oj]C[I would play here.

      Black is ahead by 11.6 points.];B[iq];W[ip];B[hq];W[or];B[op];W[nq];B[qq];W[jr];B[pl]))(;B[pl]C[I would play here.

      Black is ahead by 20.1 points.];W[ol];B[oj];W[qo];B[qp];W[ok];B[or];W[rh];B[iq];W[ro];B[mq];W[hc]))(;W[oj]C[I would play here.

      Black is ahead by 10.4 points.];B[iq];W[jr];B[ir];W[ip];B[mr];W[mq];B[kr];W[oq];B[pq];W[nr];B[jq];W[pr];B[qr]))(;B[pl]C[I would play here.

      Black is ahead by 17.6 points.];W[ol];B[oj];W[ok];B[qo];W[nn];B[no];W[rm];B[si];W[rh];B[sh];W[ro];B[rp];W[qn];B[nr];W[oq]))(;W[pl]C[I would play here.

      Black is ahead by 6.9 points.];B[iq];W[nr];B[oq];W[jr];B[ip];W[or];B[pr];W[ir];B[hc];W[jb];B[ro];W[rn]))(;B[pl]C[I would play here.

      Black is ahead by 12.7 points.];W[ol];B[oj];W[ok];B[qn];W[nn];B[oq];W[oo];B[hc];W[jb];B[mq]))(;W[oj]C[I would play here.

      Black is ahead by 8.8 points.];B[lh];W[pn];B[qn];W[nn];B[pm];W[om];B[ib];W[hc];B[hb];W[gb];B[ga];W[gc];B[ec];W[jb]))(;B[oj]C[I would play here.

      Black is ahead by 19.3 points.];W[nn];B[hc];W[mm];B[ln];W[jb];B[pm];W[om]))(;W[om]C[I would play here.

      Black is ahead by 16.4 points.];B[qj];W[pj];B[pn];W[nn];B[pl];W[ol];B[oq];W[oo];B[po];W[qq]))(;B[qj]C[I would play here.

      Black is ahead by 27.0 points.];W[pk];B[rj];W[pj];B[pm];W[mh];B[mi];W[li];B[lh];W[lj];B[mf];W[kj];B[ji];W[ii]))(;W[pk]C[I would play here.

      Black is ahead by 23.0 points.];B[rj];W[pi];B[qj];W[pj];B[pl];W[ol];B[nk];W[nj];B[lh];W[nn]))(;B[pk]C[I would play here.

      Black is ahead by 26.2 points.];W[pi];B[pj];W[nn];B[oq];W[nr];B[no];W[mh]))(;W[pi]C[I would play here.

      Black is ahead by 20.0 points.];B[pk];W[qk];B[ql];W[qj];B[pl];W[oq];B[pq];W[pr];B[qr];W[or]))(;B[qj]C[I would play here.

      Black is ahead by 24.3 points.];W[rj];B[qk];W[rk];B[qm];W[ql];B[pl];W[rl];B[rm];W[pm];B[ok];W[ol];B[pk]))(;B[qj]C[I would play here.

      Black is ahead by 28.2 points.];W[rj];B[qk];W[rk];B[ql];W[rl];B[rm];W[qm];B[rn];W[pm];B[ol];W[qo];B[qn];W[pn];B[ro];W[qp]))(;B[ni]C[I would play here.

      Black is ahead by 39.7 points.];W[kd];B[jc];W[lf];B[qj];W[rj];B[mc];W[md];B[qk]))(;W[kd]C[I would play here.

      Black is ahead by 29.6 points.];B[jc];W[oc];B[ql];W[ni];B[mh];W[pk];B[nj];W[pl]))(;W[kd]C[I would play here.

      Black is ahead by 24.0 points.];B[ql];W[qk];B[pl];W[pi];B[jc];W[ni]))(;W[kd]C[I would play here.

      Black is ahead by 22.5 points.];B[ql];W[hc];B[iq];W[ip];B[hq]))(;B[kd]C[I would play here.

      Black is ahead by 27.9 points.];W[le];B[ql];W[pk];B[pl];W[nh];B[ng]))(;W[kd]C[I would play here.

      Black is ahead by 22.6 points.];B[jc];W[ql];B[qn];W[ri];B[iq];W[ip]))(;B[kd]C[I would play here.

      Black is ahead by 34.0 points.];W[le];B[ke];W[og];B[ng];W[nf];B[nh]))(;W[kd]C[I would play here.

      Black is ahead by 28.5 points.];B[on];W[gp];B[fp];W[jc];B[iq];W[ip]))(;B[kd]C[I would play here.

      Black is ahead by 32.9 points.];W[ke];B[le];W[ic];B[lf];W[jb];B[ie];W[kg];B[kf]))(;W[nn]C[I would play here.

      Black is ahead by 29.8 points.];B[nm];W[on];B[om];W[pn];B[ql];W[jl];B[ll];W[pm]))(;B[on]C[I would play here.

      Black is ahead by 34.2 points.];W[gp];B[fp];W[id];B[iq];W[ip];B[hq];W[gq]))(;W[nn]C[I would play here.

      Black is ahead by 30.9 points.];B[nm];W[on];B[om];W[jl];B[pn];W[ln];B[kn];W[km];B[ln]))(;B[mp]C[I would play here.

      Black is ahead by 40.0 points.];W[mq];B[np];W[lr];B[nq];W[qh];B[mr];W[rg];B[og];W[hq]))(;W[mp]C[I would play here.

      Black is ahead by 33.9 points.];B[ip];W[ho];B[iq];W[go];B[fn];W[gq];B[kr];W[mr];B[mq];W[nq]))(;B[jp]C[I would play here.

      Black is ahead by 38.8 points.];W[kq];B[jq];W[qh];B[rf];W[jr];B[ir];W[lr];B[oq];W[qn];B[lo]))(;B[jn]C[I would play here.

      Black is ahead by 42.3 points.];W[km];B[kn];W[lm];B[ln];W[mm];B[mn];W[qq];B[qp]))(;W[kp]C[I would play here.

      Black is ahead by 37.9 points.];B[jm];W[kq];B[lp];W[kn];B[lo];W[ko];B[mm]))(;B[ei]C[I would play here.

      Black is ahead by 39.5 points.];W[qh];B[rf];W[dh];B[cn];W[bm];B[qn];W[cr]))(;B[mb]C[I would play here.

      Black is ahead by 44.1 points.];W[pc];B[pk];W[qq];B[qp];W[pq];B[nq]))(;W[nb]C[I would play here.

      Black is ahead by 40.5 points.];B[pc];W[pb];B[qb];W[rb];B[ob];W[qa];B[oa];W[jc];B[nc];W[kd];B[kc]))(;B[cn]C[I would play here.

      Black is ahead by 44.5 points.];W[bm];B[gj];W[fk];B[gk];W[fl];B[gl];W[fm];B[gm];W[fn]))(;W[hc]C[I would play here.

      Black is ahead by 41.0 points.];B[if];W[qf];B[kc];W[qc];B[cn]))(;B[bd]C[I would play here.

      Black is ahead by 46.4 points.];W[bb];B[eg];W[di];B[hb];W[gb];B[gc]))(;W[pp]C[I would play here.

      Black is ahead by 30.9 points.];B[qn];W[nq];B[qf];W[fq];B[cn];W[cf]))(;W[dp]C[I would play here.

      Black is ahead by 18.7 points.];B[pq];W[fc];B[cf];W[qo];B[np]))(;W[dp]C[I would play here.

      Black is ahead by 5.7 points.];B[pq];W[dd];B[cq];W[dq];B[cp];W[cn];B[bn];W[bm];B[co]))
    `,
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 6, 1).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.White,
    },
    additionalInfo: "Partida 7",
    gameEventRef: GameEventTypes.live,
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[0.5]RU[japanese]PW[Yuichiro Shimawaki]WR[-]PB[Philippe Fanaro]BR[-]RE[W+R]C[Mistakes:

      Player	Move	Loss 	Score

      White	  2	 13.0	B+18.6 points
      White	  4	 12.2	B+31.0 points
      White	  6	 13.8	B+44.7 points
      White	 58	  3.2	B+49.1 points
      White	 72	  3.7	B+50.7 points
      White	 86	  3.5	B+55.2 points
      Black	 87	  6.2	B+49.0 points
      Black	 89	  6.6	B+43.1 points
      Black	 93	  5.8	B+38.0 points
      Black	101	  3.2	B+34.6 points
      Black	103	  4.3	B+31.5 points
      Black	105	  3.5	B+28.7 points
      White	108	  3.6	B+32.6 points
      White	114	  5.0	B+38.0 points
      Black	115	  5.4	B+32.6 points
      White	116	 13.6	B+46.2 points
      Black	117	 13.7	B+32.5 points
      White	120	 13.8	B+47.9 points
      Black	121	  8.5	B+39.4 points
      White	122	  5.1	B+44.5 points
      Black	123	 12.2	B+32.3 points
      White	124	  9.9	B+42.2 points
      White	126	  8.2	B+49.5 points
      Black	127	  7.0	B+42.5 points
      White	128	 11.0	B+53.5 points
      Black	131	  7.4	B+46.3 points
      White	132	  3.5	B+49.8 points
      Black	135	  6.0	B+46.2 points
      Black	137	  5.1	B+43.9 points
      Black	139	  6.7	B+38.5 points
      Black	141	 15.0	B+26.5 points
      White	142	 14.8	B+41.3 points
      Black	143	 16.3	B+25.0 points
      Black	149	  9.0	B+21.0 points
      Black	161	  9.1	B+13.0 points];B[dp](;W[]C[Mistake!

      This move is 13 points worse than the AI move.

      Black is ahead by 18.6 points.];B[pd](;W[]C[Mistake!

      This move is 12.2 points worse than the AI move.

      Black is ahead by 31.0 points.];B[dd](;W[]C[Mistake!

      This move is 13.8 points worse than the AI move.

      Black is ahead by 44.7 points.];B[pp];W[nq];B[qn];W[fq];B[iq];W[dm];B[fp];W[eq];B[ep];W[dq];B[cq];W[cr];B[br];W[bq];B[cp];W[bs];B[ar];W[aq];B[gq];W[as];B[fr];W[ds];B[er];W[dr];B[gn];W[pq];B[qq];W[qr];B[oq];W[pr];B[or];W[op];B[nr];W[qp];B[po];W[rp];B[mq];W[np];B[nn];W[mp];B[lq];W[lp];B[kp];W[mn];B[mm];W[ln];B[nm];W[ko];B[jp];W[kl];B[pi](;W[gr]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 49.1 points.];B[dj];W[nc];B[nd];W[md];B[ne];W[ob];B[qc];W[pc];B[rd];W[me];B[mf];W[nf];B[od](;W[ng]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 50.7 points.];B[lf];W[lc];B[mh];W[pm];B[oo];W[oi];B[mj];W[pj];B[ph];W[qm];B[qj];W[qk];B[pk](;W[oj]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 55.2 points.](;B[ok]C[Mistake!

      This move is 6.2 points worse than the AI move.

      Black is ahead by 49.0 points.];W[nk](;B[ol]C[Mistake!

      This move is 6.6 points worse than the AI move.

      Black is ahead by 43.1 points.];W[qi];B[rj];W[qh](;B[ql]C[Mistake!

      This move is 5.8 points worse than the AI move.

      Black is ahead by 38.0 points.];W[pg];B[qf];W[mg];B[lg];W[lh];B[kh];W[li](;B[mi]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 34.6 points.];W[ki](;B[kk]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 31.5 points.];W[jh](;B[jl]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 28.7 points.];W[qb];B[rb](;W[jm]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 32.6 points.];B[km];W[ll];B[lm];W[jk];B[il](;W[lk]C[Mistake!

      This move is 5 points worse than the AI move.

      Black is ahead by 38.0 points.](;B[mk]C[Mistake!

      This move is 5.4 points worse than the AI move.

      Black is ahead by 32.6 points.](;W[hm]C[Mistake!

      This move is 13.6 points worse than the AI move.

      Black is ahead by 46.2 points.](;B[gm]C[Mistake!

      This move is 13.7 points worse than the AI move.

      Black is ahead by 32.5 points.];W[hl];B[ik](;W[hn]C[Mistake!

      This move is 13.8 points worse than the AI move.

      Black is ahead by 47.9 points.](;B[jj]C[Mistake!

      This move is 8.5 points worse than the AI move.

      Black is ahead by 39.4 points.](;W[gp]C[Mistake!

      This move is 5.1 points worse than the AI move.

      Black is ahead by 44.5 points.](;B[lj]C[Mistake!

      This move is 12.2 points worse than the AI move.

      Black is ahead by 32.3 points.](;W[go]C[Mistake!

      This move is 9.9 points worse than the AI move.

      Black is ahead by 42.2 points.];B[jf](;W[jo]C[Mistake!

      This move is 8.2 points worse than the AI move.

      Black is ahead by 49.5 points.](;B[io]C[Mistake!

      This move is 7 points worse than the AI move.

      Black is ahead by 42.5 points.](;W[in]C[Mistake!

      This move is 11 points worse than the AI move.

      Black is ahead by 53.5 points.];B[hq];W[gl](;B[hf]C[Mistake!

      This move is 7.4 points worse than the AI move.

      Black is ahead by 46.3 points.](;W[ie]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 49.8 points.];B[if];W[pf](;B[pe]C[Mistake!

      This move is 6 points worse than the AI move.

      Black is ahead by 46.2 points.];W[rf](;B[qe]C[Mistake!

      This move is 5.1 points worse than the AI move.

      Black is ahead by 43.9 points.];W[ri](;B[rk]C[Mistake!

      This move is 6.7 points worse than the AI move.

      Black is ahead by 38.5 points.];W[rg](;B[qa]C[Mistake!

      This move is 15 points worse than the AI move.

      Black is ahead by 26.5 points.](;W[pb]C[Mistake!

      This move is 14.8 points worse than the AI move.

      Black is ahead by 41.3 points.](;B[re]C[Mistake!

      This move is 16.3 points worse than the AI move.

      Black is ahead by 25.0 points.];W[cl];B[jc];W[ke];B[kf];W[ic](;B[jd]C[Mistake!

      This move is 9 points worse than the AI move.

      Black is ahead by 21.0 points.];W[je];B[id];W[hd];B[hc];W[he];B[ib];W[fd];B[gc];W[le];B[ff];W[gf](;B[ge]C[Mistake!

      This move is 9.1 points worse than the AI move.

      Black is ahead by 13.0 points.];W[gg])(;B[ek]C[I would play here.

      Black is ahead by 22.1 points.];W[fl];B[ho];W[fn];B[gg];W[ge];B[hh];W[fc];B[kb];W[fg]))(;B[ib]C[I would play here.

      Black is ahead by 30.0 points.];W[kq];B[kr];W[id];B[hc];W[gd];B[kb]))(;B[ho]C[I would play here.

      Black is ahead by 41.3 points.];W[sc];B[fn];W[el];B[re];W[rc];B[sd];W[qd];B[fk];W[fl];B[qc]))(;W[cl]C[I would play here.

      Black is ahead by 26.5 points.];B[jc];W[kd];B[hc];W[gd];B[jd];W[ke]))(;B[ho]C[I would play here.

      Black is ahead by 41.5 points.];W[kq];B[kr];W[fn];B[fm];W[el];B[en];W[fl];B[em];W[ra];B[oc];W[pb];B[qa]))(;B[ho]C[I would play here.

      Black is ahead by 45.2 points.];W[kq];B[kr];W[ej];B[fn];W[fk];B[dk];W[di];B[ei]))(;B[ho]C[I would play here.

      Black is ahead by 49.0 points.];W[ra];B[fl];W[fk];B[fm];W[el];B[fo];W[ej];B[gk]))(;B[ho]C[I would play here.

      Black is ahead by 52.2 points.];W[qe];B[re];W[pe];B[qd];W[rf];B[fl]))(;W[pf]C[I would play here.

      Black is ahead by 46.3 points.];B[ho];W[qe];B[re];W[pe];B[qd];W[fn];B[fm]))(;B[ho]C[I would play here.

      Black is ahead by 53.7 points.];W[pf];B[fn];W[qe];B[re];W[rf];B[mb];W[mc];B[qa]))(;W[pf]C[I would play here.

      Black is ahead by 42.5 points.];B[hq];W[ho];B[rg];W[pe];B[qd];W[oh];B[jc]))(;B[hq]C[I would play here.

      Black is ahead by 49.5 points.];W[ri];B[fo];W[gl];B[ho];W[kq];B[jq];W[gj]))(;W[pf]C[I would play here.

      Black is ahead by 41.3 points.];B[hq];W[qe];B[re];W[rf];B[en];W[em];B[fl];W[ra]))(;W[hq]C[I would play here.

      Black is ahead by 32.3 points.];B[jf];W[pf];B[qe];W[ri];B[rk];W[rg];B[rf];W[pe]))(;B[hq]C[I would play here.

      Black is ahead by 44.5 points.];W[kg];B[fk];W[go];B[fn];W[fo];B[en];W[eo];B[dn]))(;W[kg]C[I would play here.

      Black is ahead by 39.4 points.];B[fk];W[fd];B[fc];W[gc];B[ec];W[gd];B[gj]))(;B[jf]C[I would play here.

      Black is ahead by 47.9 points.];W[kj];B[hj];W[if];B[ie];W[hf];B[jg];W[ih]))(;W[kf]C[I would play here.

      Black is ahead by 34.1 points.];B[gj];W[fk];B[fj];W[ek];B[ej];W[hk]))(;B[jf]C[I would play here.

      Black is ahead by 46.2 points.];W[kj];B[jc];W[oh];B[ml];W[hk];B[im]))(;W[hd]C[I would play here.

      Black is ahead by 32.6 points.];B[ik];W[fd];B[ge];W[he];B[cf];W[dc]))(;B[jf]C[I would play here.

      Black is ahead by 38.0 points.];W[ik];B[mk];W[ri];B[jc];W[hl];B[im]))(;W[hd]C[I would play here.

      Black is ahead by 33.0 points.];B[jj];W[fd];B[ge];W[gd];B[jf]))(;W[kg]C[I would play here.

      Black is ahead by 29.0 points.];B[fc];W[ll];B[nj];W[oh];B[lk];W[jm];B[im]))(;B[jf]C[I would play here.

      Black is ahead by 32.2 points.];W[lk];B[mk];W[jk];B[kd];W[ri];B[rk];W[rg];B[kc]))(;B[jf]C[I would play here.

      Black is ahead by 35.8 points.];W[jh];B[mk];W[ll];B[ml];W[ri];B[rk];W[rg];B[rf]))(;B[kj]C[I would play here.

      Black is ahead by 37.8 points.];W[kg];B[kf];W[ki];B[jg];W[ji];B[nj];W[mi];B[ni]))(;B[nh]C[I would play here.

      Black is ahead by 43.8 points.];W[oh];B[pg];W[rk];B[og];W[sj];B[jn];W[lm];B[mk];W[il];B[jk]))(;B[rk]C[I would play here.

      Black is ahead by 49.7 points.];W[qe];B[qd];W[ql];B[ol];W[nh];B[nj];W[mg];B[lg];W[mi]))(;B[rk]C[I would play here.

      Black is ahead by 55.2 points.];W[os];B[mr];W[ql];B[ri];W[rn];B[rq];W[rr];B[ro]))(;W[no]C[I would play here.

      Black is ahead by 51.7 points.];B[on];W[oj];B[rk];W[ql];B[ri];W[oh];B[nk];W[pg]))(;W[pm]C[I would play here.

      Black is ahead by 47.0 points.];B[oo];W[lk];B[nk];W[oj];B[mj];W[pj]))(;W[kq]C[I would play here.

      Black is ahead by 45.9 points.];B[kr];W[pm];B[qm];W[pl];B[oo];W[lk]))(;W[pp]C[I would play here.

      Black is ahead by 30.9 points.];B[nq];W[qn];B[fq];W[fc]))(;W[dd]C[I would play here.

      Black is ahead by 18.8 points.];B[pq];W[qo];B[op];W[qc];B[qd];W[pc]))(;W[pd]C[I would play here.

      Black is ahead by 5.6 points.];B[dc];W[pp];B[qq];W[pq];B[qp];W[po];B[rn]))
    `,
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 6, 6).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.White,
      difference: 0.5,
    },
    additionalInfo: "Partida 8",
    gameEventRef: GameEventTypes.live,
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[0.5]RU[japanese]DT[2022-07-06]PW[Yuichiro Shimawaki]WR[-]PB[Philippe Fanaro]BR[-]RE[W+-.5]C[Mistakes:

      Player	Move	Loss 	Score

      White	  2	 13.0	B+18.6 points
      White	  4	 12.6	B+31.2 points
      White	  6	 14.2	B+45.0 points
      White	 34	  4.7	B+47.9 points
      Black	 35	  2.9	B+45.0 points
      White	 40	  3.0	B+47.1 points
      Black	 43	  4.2	B+43.1 points
      Black	 55	  4.1	B+41.3 points
      Black	 73	  7.6	B+29.5 points
      Black	 75	  6.1	B+24.9 points
      White	 76	  3.1	B+28.0 points
      Black	 83	  3.5	B+24.3 points
      White	 84	  4.9	B+29.2 points
      Black	 85	  4.7	B+24.5 points
      Black	 89	  3.3	B+20.5 points
      White	 90	  5.4	B+25.9 points
      White	 92	  4.2	B+29.1 points
      White	 94	  4.0	B+31.2 points
      White	 98	  8.0	B+39.4 points
      White	102	  4.9	B+42.8 points
      Black	109	  4.5	B+38.3 points
      White	110	  3.9	B+42.2 points
      Black	113	  4.0	B+37.6 points
      White	116	  3.7	B+39.8 points
      White	118	  4.7	B+44.0 points
      Black	119	  3.2	B+40.8 points
      White	122	  3.5	B+43.5 points
      Black	125	  3.5	B+40.8 points
      White	126	  4.5	B+45.3 points
      Black	127	 17.9	B+27.4 points
      White	134	 11.4	B+40.2 points
      Black	137	  8.2	B+32.5 points
      White	138	  8.7	B+41.2 points
      Black	139	  8.7	B+32.5 points
      White	140	 12.0	B+44.5 points
      Black	141	 11.5	B+33.0 points
      Black	145	  3.2	B+33.2 points
      White	146	  5.4	B+38.6 points
      Black	147	  5.8	B+32.8 points
      White	150	  4.2	B+36.5 points
      White	152	  4.7	B+39.4 points
      Black	155	  3.1	B+34.4 points
      White	158	  3.4	B+37.4 points
      Black	159	  3.0	B+34.4 points
      White	160	  7.9	B+42.3 points
      Black	161	  5.6	B+36.7 points
      White	162	  3.7	B+40.4 points
      Black	163	  3.9	B+36.5 points
      White	164	  5.8	B+42.3 points
      Black	165	  6.3	B+36.0 points
      White	168	  7.1	B+44.3 points
      Black	169	  9.6	B+34.7 points
      White	172	  5.0	B+40.3 points
      Black	173	  6.1	B+34.2 points
      White	174	  7.8	B+42.0 points
      Black	175	  8.0	B+34.0 points
      White	176	  4.0	B+38.0 points
      Black	177	  3.5	B+34.5 points
      White	178	  4.8	B+39.3 points
      Black	179	  3.3	B+36.0 points
      Black	181	  3.6	B+34.1 points
      White	182	  5.4	B+39.5 points
      Black	183	  3.4	B+36.1 points
      White	184	  4.5	B+40.6 points
      Black	185	  7.8	B+32.8 points
      Black	189	  3.4	B+31.5 points
      Black	193	  5.1	B+25.9 points
      Black	205	  4.7	B+22.3 points
      Black	217	  3.5	B+19.2 points
      White	222	  4.8	B+22.9 points
      Black	223	  5.0	B+17.9 points
      Black	225	  3.2	B+17.0 points
      Black	231	  4.2	B+14.9 points
      Black	237	  3.5	B+13.6 points
      Black	239	  2.9	B+11.4 points
      Black	241	 11.4	B+1.7 points
      White	246	  6.6	B+12.9 points
      White	250	  4.1	B+17.4 points
      White	258	  8.9	B+37.7 points
      Black	261	 35.8	B+1.6 points
      Black	263	  3.7	W+0.7 points
      White	268	  4.3	B+4.1 points
      Black	269	  5.9	W+1.8 points
      White	272	  3.4	B+0.7 points];B[dp](;W[]C[Mistake!

      This move is 13 points worse than the AI move.

      Black is ahead by 18.6 points.];B[pd](;W[]C[Mistake!

      This move is 12.6 points worse than the AI move.

      Black is ahead by 31.2 points.];B[dd](;W[]C[Mistake!

      This move is 14.2 points worse than the AI move.

      Black is ahead by 45.0 points.];B[pp];W[fq];B[cn];W[kp];B[mq];W[fo];B[eq];W[fr];B[qf];W[cc];B[dc];W[cd];B[de];W[ce];B[df];W[cf];B[dg];W[ob];B[lc];W[qc];B[qd];W[rc];B[lo];W[qp];B[qq];W[pq];B[po](;W[nq]C[Mistake!

      This move is 4.7 points worse than the AI move.

      Black is ahead by 47.9 points.](;B[rp]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 45.0 points.];W[qr];B[qo];W[or];B[ko](;W[jp]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 47.1 points.];B[jo];W[ip](;B[oc]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 43.1 points.];W[nc];B[nd];W[nb];B[md];W[pj];B[nj];W[ql];B[rj];W[qj];B[rk];W[nl](;B[ml]C[Mistake!

      This move is 4.1 points worse than the AI move.

      Black is ahead by 41.3 points.];W[mm];B[ll];W[nk];B[mj];W[no];B[np];W[op];B[nn];W[on];B[oo];W[mp];B[mo];W[np];B[om];W[nm];B[pn];W[mn](;B[on]C[Mistake!

      This move is 7.6 points worse than the AI move.

      Black is ahead by 29.5 points.];W[pl](;B[hn]C[Mistake!

      This move is 6.1 points worse than the AI move.

      Black is ahead by 24.9 points.](;W[km]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 28.0 points.];B[io];W[mk];B[lk];W[lj];B[jl];W[rn](;B[rr]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 24.3 points.](;W[rs]C[Mistake!

      This move is 4.9 points worse than the AI move.

      Black is ahead by 29.2 points.](;B[ro]C[Mistake!

      This move is 4.7 points worse than the AI move.

      Black is ahead by 24.5 points.];W[rl];B[sr];W[qh](;B[oh]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 20.5 points.](;W[kl]C[Mistake!

      This move is 5.4 points worse than the AI move.

      Black is ahead by 25.9 points.];B[kk](;W[jk]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 29.1 points.];B[kj](;W[jm]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 31.2 points.];B[il];W[im];B[hm](;W[lm]C[Mistake!

      This move is 8 points worse than the AI move.

      Black is ahead by 39.4 points.];B[li];W[hl];B[ik](;W[rg]C[Mistake!

      This move is 4.9 points worse than the AI move.

      Black is ahead by 42.8 points.];B[lp];W[mr];B[hp];W[hq];B[gp];W[fp](;B[kq]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 38.3 points.](;W[jr]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 42.2 points.];B[fm];W[jc](;B[hc]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 37.6 points.];W[hd];B[gc](;W[je]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 39.8 points.];B[ic](;W[ih]C[Mistake!

      This move is 4.7 points worse than the AI move.

      Black is ahead by 44.0 points.](;B[jj]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 40.8 points.];W[gh];B[hf](;W[if]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 43.5 points.];B[hg];W[id](;B[jb]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 40.8 points.](;W[he]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 45.3 points.](;B[kf]C[Mistake!

      This move is 17.9 points worse than the AI move.

      Black is ahead by 27.4 points.];W[gf];B[ig];W[jg];B[jf];W[gg];B[ie](;W[fd]C[Mistake!

      This move is 11.4 points worse than the AI move.

      Black is ahead by 40.2 points.];B[if];W[fc](;B[cg]C[Mistake!

      This move is 8.2 points worse than the AI move.

      Black is ahead by 32.5 points.](;W[eh]C[Mistake!

      This move is 8.7 points worse than the AI move.

      Black is ahead by 41.2 points.](;B[di]C[Mistake!

      This move is 8.7 points worse than the AI move.

      Black is ahead by 32.5 points.](;W[fj]C[Mistake!

      This move is 12 points worse than the AI move.

      Black is ahead by 44.5 points.](;B[ek]C[Mistake!

      This move is 11.5 points worse than the AI move.

      Black is ahead by 33.0 points.];W[kb];B[kc];W[jd](;B[lb]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 33.2 points.](;W[ib]C[Mistake!

      This move is 5.4 points worse than the AI move.

      Black is ahead by 38.6 points.](;B[ka]C[Mistake!

      This move is 5.8 points worse than the AI move.

      Black is ahead by 32.8 points.];W[hb];B[cb](;W[gb]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 36.5 points.];B[eb](;W[hh]C[Mistake!

      This move is 4.7 points worse than the AI move.

      Black is ahead by 39.4 points.];B[fe];W[ff](;B[dr]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 34.4 points.];W[do];B[co](;W[em]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 37.4 points.](;B[fn]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 34.4 points.](;W[le]C[Mistake!

      This move is 7.9 points worse than the AI move.

      Black is ahead by 42.3 points.](;B[eo]C[Mistake!

      This move is 5.6 points worse than the AI move.

      Black is ahead by 36.7 points.](;W[ld]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 40.4 points.](;B[mc]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 36.5 points.](;W[mf]C[Mistake!

      This move is 5.8 points worse than the AI move.

      Black is ahead by 42.3 points.](;B[lg]C[Mistake!

      This move is 6.3 points worse than the AI move.

      Black is ahead by 36.0 points.];W[bg];B[bh](;W[ah]C[Mistake!

      This move is 7.1 points worse than the AI move.

      Black is ahead by 44.3 points.](;B[bi]C[Mistake!

      This move is 9.6 points worse than the AI move.

      Black is ahead by 34.7 points.];W[bb];B[ba](;W[ab]C[Mistake!

      This move is 5 points worse than the AI move.

      Black is ahead by 40.3 points.](;B[bf]C[Mistake!

      This move is 6.1 points worse than the AI move.

      Black is ahead by 34.2 points.](;W[af]C[Mistake!

      This move is 7.8 points worse than the AI move.

      Black is ahead by 42.0 points.](;B[ag]C[Mistake!

      This move is 8 points worse than the AI move.

      Black is ahead by 34.0 points.](;W[db]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 38.0 points.](;B[da]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 34.5 points.](;W[bg]C[Mistake!

      This move is 4.8 points worse than the AI move.

      Black is ahead by 39.3 points.](;B[be]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 36.0 points.];W[bd](;B[ag]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 34.1 points.](;W[oe]C[Mistake!

      This move is 5.4 points worse than the AI move.

      Black is ahead by 39.5 points.](;B[nf]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 36.1 points.](;W[bg]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 40.6 points.](;B[iq]C[Mistake!

      This move is 7.8 points worse than the AI move.

      Black is ahead by 32.8 points.];W[jq];B[ag];W[of](;B[qg]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 31.5 points.];W[ph];B[og];W[bg](;B[hr]C[Mistake!

      This move is 5.1 points worse than the AI move.

      Black is ahead by 25.9 points.];W[gq];B[ag];W[pg];B[pf];W[bg];B[ir];W[go];B[ho];W[kr];B[ag];W[lf](;B[jh]C[Mistake!

      This move is 4.7 points worse than the AI move.

      Black is ahead by 22.3 points.];W[ne];B[pb];W[pc];B[od];W[bg];B[lq];W[lr];B[ag];W[qb];B[rf];W[rh](;B[rd]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 19.2 points.];W[bg];B[ee];W[ge];B[ag](;W[ji]C[Mistake!

      This move is 4.8 points worse than the AI move.

      Black is ahead by 22.9 points.](;B[kh]C[Mistake!

      This move is 5 points worse than the AI move.

      Black is ahead by 17.9 points.];W[bg](;B[ol]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 17.0 points.];W[ok];B[ag];W[so];B[sp];W[bg](;B[pr]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 14.9 points.];W[ae];B[oq];W[pe];B[qe];W[ng](;B[se]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 13.6 points.];W[pq](;B[qs]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 11.4 points.];W[dj](;B[ei]C[Mistake!

      This move is 11.4 points worse than the AI move.

      Black is ahead by 1.7 points.];W[en];B[dn];W[bj];B[ai](;W[ej]C[Mistake!

      This move is 6.6 points worse than the AI move.

      Black is ahead by 12.9 points.];B[fi];W[ia];B[ja](;W[gj]C[Mistake!

      This move is 4.1 points worse than the AI move.

      Black is ahead by 17.4 points.];B[gi];W[hj];B[hi];W[ij];B[ii];W[hk];B[ga](;W[fh]C[Mistake!

      This move is 8.9 points worse than the AI move.

      Black is ahead by 37.7 points.];B[ci];W[eg](;B[dl]C[Mistake!

      This move is 35.8 points worse than the AI move.

      Black is ahead by 1.6 points.];W[jk](;B[ck]C[Mistake!

      This move is 3.7 points worse than the AI move.

      White is ahead by 0.7 points.];W[cj];B[fb];W[gd];B[bk](;W[ep]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 4.1 points.](;B[do]C[Mistake!

      This move is 5.9 points worse than the AI move.

      White is ahead by 1.8 points.];W[er];B[dq](;W[aj]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 0.7 points.];B[es];W[gs];B[oq];W[nr];B[ak];W[fk];B[el];W[gl];B[nh];W[mg];B[mh];W[sn];B[ag];W[bf];B[qn];W[qm];B[oi];W[dh];B[ch];W[fa];B[pi];W[qi];B[ma];W[mb];B[na];W[pa];B[la];W[oa];B[me];W[nf];B[ec];W[is];B[sg];W[sh];B[sf];W[os];B[sc];W[sb];B[ea];W[fs];B[ds];W[pq];B[ra];W[qa];B[oq];W[ps];B[qr];W[sd];B[pq];W[sc];B[ah];W[ke];B[kg];W[fl];B[dm];W[dk];B[gm];W[ef];B[fa];W[ed];B[ki];W[aa];B[ca];W[oj];B[in];W[ln];B[kn];W[pm];B[jn];W[gn];B[ha];W[kd])(;W[ds]C[I would play here.

      White is ahead by 2.7 points.];B[es];W[cs];B[gs];W[fs];B[is];W[cr];B[gn];W[bq];B[bp];W[js];B[cq];W[br];B[aq];W[ar];B[ap];W[os];B[oq];W[nr];B[nh]))(;B[er]C[I would play here.

      Black is ahead by 4.1 points.];W[do];B[oq];W[cq];B[cr];W[ke];B[eo];W[ma];B[mb];W[do];B[kg];W[nr];B[eo];W[dh];B[gn];W[do]))(;W[oi]C[I would play here.

      White is ahead by 0.2 points.];B[nh];W[aj];B[oq];W[nr];B[ak];W[ni];B[mh];W[ep];B[do];W[er];B[dq];W[es];B[ds];W[gr]))(;B[bk]C[I would play here.

      Black is ahead by 3.0 points.];W[ck];B[cl];W[cj];B[aj];W[ep];B[er];W[do];B[fb];W[gd];B[eo];W[dh];B[gs];W[ch];B[ag];W[bf];B[fs];W[os]))(;B[jk]C[I would play here.

      Black is ahead by 37.4 points.];W[ep];B[do];W[el];B[fl];W[dk];B[dl];W[er];B[dq];W[fk];B[gn]))(;W[dh]C[I would play here.

      Black is ahead by 28.8 points.];B[ch];W[ke];B[kg];W[oi];B[nh];W[ni];B[mh];W[fh];B[ci];W[el];B[eg]))(;W[ma]C[I would play here.

      Black is ahead by 13.3 points.];B[la];W[gj];B[gi];W[hj];B[hi];W[ij];B[ii];W[hk];B[dk];W[el];B[fl];W[jk];B[cj];W[er]))(;W[ma]C[I would play here.

      Black is ahead by 6.3 points.];B[la];W[ia];B[ja];W[ej];B[fi];W[gj];B[gi];W[hj];B[hi];W[hk];B[dk];W[ij];B[ii];W[cj];B[jk]))(;B[ej]C[I would play here.

      Black is ahead by 13.1 points.];W[dh];B[ch];W[ei];B[ci];W[ia];B[ja];W[fl];B[fk];W[gk];B[el];W[gl];B[gj];W[hj]))(;B[me]C[I would play here.

      Black is ahead by 14.3 points.];W[nf];B[oq];W[ia];B[ja];W[pq];B[sn];W[rm];B[oq];W[ej]))(;B[ma]C[I would play here.

      Black is ahead by 17.1 points.];W[mb];B[sd];W[pq];B[na];W[pa];B[oq];W[ia];B[ja];W[pq];B[la];W[oa]))(;B[pa]C[I would play here.

      Black is ahead by 19.1 points.];W[qa];B[ag];W[ia];B[ja];W[bg];B[sn];W[sm];B[ag]))(;B[sl]C[I would play here.

      Black is ahead by 20.2 points.];W[rm];B[ag];W[ia];B[ja];W[bg];B[sn];W[sm];B[ag];W[ma]))(;B[bg]C[I would play here.

      Black is ahead by 22.9 points.];W[kh];B[gk];W[ng];B[ma];W[mb];B[sd];W[lh];B[mh]))(;W[rq]C[I would play here.

      Black is ahead by 18.1 points.];B[sq];W[bg];B[nr];W[ns];B[ag];W[ia];B[ja];W[bg];B[sn];W[sm];B[ag];W[ma]))(;B[ma]C[I would play here.

      Black is ahead by 22.7 points.];W[mb];B[pe];W[bg];B[ee];W[ge];B[ag];W[ng];B[rd];W[bg];B[nr];W[ns]))(;B[ne]C[I would play here.

      Black is ahead by 27.0 points.];W[pc];B[od];W[bg];B[lq];W[lr];B[ag];W[rq];B[sq];W[bg];B[nr];W[ns];B[ag]))(;B[gq]C[I would play here.

      Black is ahead by 31.0 points.];W[hr];B[gr];W[gs];B[ag];W[pg];B[od];W[bg];B[rd];W[qb]))(;B[od]C[I would play here.

      Black is ahead by 34.9 points.];W[ng];B[gq];W[hr];B[ai];W[kh];B[mg]))(;B[gq]C[I would play here.

      Black is ahead by 40.6 points.];W[hr];B[gr];W[gs];B[lr];W[lq];B[ee];W[ge];B[mq];W[go];B[ho]))(;W[lq]C[I would play here.

      Black is ahead by 36.1 points.];B[ae];W[of];B[og];W[lf]))(;B[od]C[I would play here.

      Black is ahead by 39.5 points.];W[lq];B[ae];W[ej];B[dj]))(;W[lq]C[I would play here.

      Black is ahead by 34.1 points.];B[ae];W[ej];B[gq];W[hr];B[dj]))(;B[gq]C[I would play here.

      Black is ahead by 37.7 points.];W[lq];B[ag];W[hr];B[ae];W[ej];B[dj]))(;B[gq]C[I would play here.

      Black is ahead by 39.3 points.];W[lq];B[hr];W[be];B[ai];W[ir];B[iq]))(;W[lq]C[I would play here.

      Black is ahead by 34.5 points.];B[bg];W[go];B[ho];W[gq];B[rf]))(;B[gq]C[I would play here.

      Black is ahead by 38.0 points.];W[lq];B[hr];W[ca];B[jq];W[kr];B[iq];W[bg]))(;W[lq]C[I would play here.

      Black is ahead by 34.0 points.];B[gq];W[hr];B[ae];W[of];B[rd];W[pc]))(;B[rf]C[I would play here.

      Black is ahead by 42.0 points.];W[ph];B[gq];W[hr];B[gr];W[gs];B[kr];W[lq]))(;W[lq]C[I would play here.

      Black is ahead by 34.2 points.];B[gq];W[hr];B[pc];W[pb];B[rd];W[sc];B[rf]))(;B[gq]C[I would play here.

      Black is ahead by 40.3 points.];W[hr];B[gr];W[lq];B[jq];W[iq];B[hs];W[kr];B[bf];W[af];B[ag]))(;W[lq]C[I would play here.

      Black is ahead by 35.3 points.];B[pc];W[pb];B[rd];W[sc];B[bc];W[of]))(;B[rf]C[I would play here.

      Black is ahead by 44.3 points.];W[ph];B[bb];W[go];B[ho];W[lq];B[gq]))(;W[lq]C[I would play here.

      Black is ahead by 37.2 points.];B[pc];W[pb];B[rd];W[sc];B[rf]))(;B[gq]C[I would play here.

      Black is ahead by 42.3 points.];W[hr];B[gr];W[gs];B[jq];W[iq];B[kr];W[lq];B[js];W[hs];B[ir];W[ls]))(;W[lq]C[I would play here.

      Black is ahead by 36.5 points.];B[pc];W[pb];B[rd];W[sc];B[rf];W[ph]))(;B[gq]C[I would play here.

      Black is ahead by 40.4 points.];W[hr];B[gr];W[gs];B[lr];W[lq];B[ee];W[lg];B[kg]))(;W[lq]C[I would play here.

      Black is ahead by 36.7 points.];B[ke];W[bg];B[bh];W[ah];B[bc];W[ch]))(;B[gq]C[I would play here.

      Black is ahead by 42.3 points.];W[hr];B[gr];W[gs];B[lr];W[lq];B[ee];W[ge];B[mq];W[go];B[ho];W[lq];B[pc];W[pb]))(;W[en]C[I would play here.

      Black is ahead by 34.4 points.];B[ee];W[ge];B[el];W[lq];B[hj];W[ei];B[eg]))(;B[en]C[I would play here.

      Black is ahead by 37.4 points.];W[lq];B[fn];W[bg];B[bh];W[ch];B[dh]))(;W[lq]C[I would play here.

      Black is ahead by 34.0 points.];B[pc];W[pb];B[rd];W[sc];B[rf];W[ph];B[ee];W[ge]))(;B[pc]C[I would play here.

      Black is ahead by 37.5 points.];W[pb];B[rd];W[sc];B[er];W[lq];B[gq]))(;W[ei]C[I would play here.

      Black is ahead by 34.7 points.];B[er];W[dj];B[ci];W[ej];B[gq];W[hr]))(;W[bb]C[I would play here.

      Black is ahead by 32.3 points.];B[eb];W[ca];B[da];W[db];B[gq];W[hr];B[cb];W[gb];B[ba]))(;B[fb]C[I would play here.

      Black is ahead by 38.6 points.];W[fk];B[el];W[gl];B[fn];W[hj];B[gq]))(;W[fb]C[I would play here.

      Black is ahead by 33.2 points.];B[db];W[ib];B[ka];W[hb];B[ia];W[gb];B[fe];W[ff]))(;B[fb]C[I would play here.

      Black is ahead by 36.4 points.];W[ib];B[lb];W[fk];B[fl];W[ja];B[gb];W[hj]))(;B[fe]C[I would play here.

      Black is ahead by 44.5 points.];W[kb];B[kc];W[jd];B[ib];W[fb];B[eb];W[ge];B[lb]))(;W[kb]C[I would play here.

      Black is ahead by 32.5 points.];B[kc];W[jd];B[lb];W[fb];B[cb];W[ib];B[ka];W[hb];B[ia];W[gd]))(;B[db]C[I would play here.

      Black is ahead by 41.2 points.];W[fk];B[dj];W[ej];B[dk];W[el];B[en]))(;W[kb]C[I would play here.

      Black is ahead by 32.5 points.];B[kc];W[jd];B[lb];W[ib];B[ka];W[hb];B[cb];W[gb];B[eb];W[fi];B[fe];W[ge]))(;B[db]C[I would play here.

      Black is ahead by 40.7 points.];W[fb];B[kc];W[ei];B[cg];W[ci];B[bb]))(;W[kb]C[I would play here.

      Black is ahead by 28.8 points.];B[gq];W[hr];B[if];W[ib];B[ge];W[gd];B[fe];W[fd];B[fc]))(;B[gf]C[I would play here.

      Black is ahead by 45.3 points.];W[ff];B[ge];W[kf];B[kc];W[ig];B[jd];W[fj];B[hj]))(;W[hh]C[I would play here.

      Black is ahead by 40.8 points.];B[fg];W[hj];B[hk];W[gg];B[gf];W[ig];B[fi]))(;B[fg]C[I would play here.

      Black is ahead by 44.3 points.];W[hh];B[kd];W[ei];B[ci];W[fk];B[gj]))(;W[fj]C[I would play here.

      Black is ahead by 40.0 points.];B[dj];W[ek];B[gk];W[gj];B[dm];W[hg]))(;B[hj]C[I would play here.

      Black is ahead by 44.0 points.];W[hi];B[hg];W[id];B[if];W[gj];B[gl]))(;W[gl]C[I would play here.

      Black is ahead by 39.3 points.];B[hk];W[gk];B[gj];W[fj];B[gi];W[el];B[fn];W[fi];B[gh]))(;W[lb]C[I would play here.

      Black is ahead by 36.1 points.];B[cg];W[ic];B[id];W[jd];B[ie];W[je]))(;B[cg]C[I would play here.

      Black is ahead by 41.6 points.];W[hd];B[hf];W[if];B[ig];W[jf];B[he];W[ie];B[jg]))(;W[dn]C[I would play here.

      Black is ahead by 38.3 points.];B[gl];W[cm];B[co];W[dm];B[ek];W[cq];B[er]))(;B[gl]C[I would play here.

      Black is ahead by 42.8 points.];W[hk];B[ij];W[hj];B[fj];W[jc];B[kb];W[ii]))(;W[ho]C[I would play here.

      Black is ahead by 37.9 points.];B[go];W[hp];B[fn];W[ch];B[in];W[rg];B[ei];W[gp]))(;W[li]C[I would play here.

      Black is ahead by 31.4 points.];B[ki];W[lh];B[kh];W[lg];B[nh];W[kg];B[ik];W[kd];B[ri];W[ni];B[mi]))(;W[li]C[I would play here.

      Black is ahead by 27.2 points.];B[ki];W[lh];B[kh];W[ni];B[lg];W[mg];B[lp];W[mr];B[cg];W[fm]))(;W[li]C[I would play here.

      Black is ahead by 24.9 points.];B[lp];W[mr];B[hp];W[hq];B[mh];W[jk];B[kj];W[jm];B[il]))(;W[mh]C[I would play here.

      Black is ahead by 20.5 points.];B[jj];W[kj];B[ji];W[kh];B[jh];W[kg];B[jg];W[kk]))(;B[jj]C[I would play here.

      Black is ahead by 23.8 points.];W[li];B[cg];W[mh];B[lp];W[mr];B[fm];W[jh]))(;B[rl]C[I would play here.

      Black is ahead by 29.2 points.];W[li];B[rm];W[jk];B[kj];W[ki];B[jj];W[nh]))(;W[li]C[I would play here.

      Black is ahead by 24.3 points.];B[mh];W[rs];B[rl];W[qm];B[ro];W[rm];B[qh];W[sr]))(;B[rl]C[I would play here.

      Black is ahead by 27.8 points.];W[qm];B[ro];W[li];B[mh];W[rm];B[rr];W[qh];B[lp]))(;W[rl]C[I would play here.

      Black is ahead by 24.9 points.];B[rr];W[qh];B[lp];W[lq];B[mr];W[nr];B[km];W[ig];B[hp]))(;B[lp]C[I would play here.

      Black is ahead by 31.0 points.];W[mr];B[km];W[rl];B[rr];W[qh];B[ph];W[pg];B[qg]))(;B[lp]C[I would play here.

      Black is ahead by 37.1 points.];W[lq];B[io];W[hp];B[pl];W[pk];B[jl];W[qm];B[rn]))(;B[np]C[I would play here.

      Black is ahead by 45.4 points.];W[qh];B[nh];W[oh];B[rl];W[qm];B[rm]))(;B[lp]C[I would play here.

      Black is ahead by 47.3 points.];W[qi];B[oi];W[nc];B[md]))(;W[mr]C[I would play here.

      Black is ahead by 44.1 points.];B[cg];W[nc];B[pi];W[no];B[jp];W[fm];B[cb]))(;B[oq]C[I would play here.

      Black is ahead by 47.9 points.];W[nc];B[pj];W[pr];B[or];W[qr];B[rq]))(;W[qo]C[I would play here.

      Black is ahead by 43.2 points.];B[pn];W[rq];B[qr];W[qm];B[qn];W[rn];B[rm];W[ro]))(;W[pp]C[I would play here.

      Black is ahead by 30.8 points.];B[qn];W[nq];B[qf];W[fc];B[jc]))(;W[dd]C[I would play here.

      Black is ahead by 18.6 points.];B[pp];W[qc];B[qd];W[pc];B[od];W[nb]))(;W[pd]C[I would play here.

      Black is ahead by 5.6 points.];B[dc];W[pp];B[qq];W[qp];B[pq];W[nq];B[nr]))
    `,
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 6, 7).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.White,
    },
    additionalInfo: "Partida 9",
    gameEventRef: GameEventTypes.live,
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[0.5]RU[japanese]DT[2022-07-07]PW[Yuichiro Shimawaki]WR[-]PB[Philippe Fanaro]BR[-]RE[W+R]C[Mistakes:

      Player	Move	Loss 	Score

      White	  2	 13.0	B+18.6 points
      White	  4	 12.5	B+31.2 points
      White	  6	 14.3	B+45.1 points
      Black	 35	  3.4	B+41.7 points
      White	 42	  2.9	B+46.2 points
      Black	 45	  3.9	B+42.6 points
      White	 56	  3.1	B+46.6 points
      White	 58	  3.1	B+48.4 points
      Black	 61	  4.3	B+44.1 points
      Black	 65	  6.4	B+36.9 points
      White	 86	  8.7	B+39.5 points
      Black	 95	  3.7	B+37.2 points
      Black	 97	  8.6	B+30.2 points
      White	 98	  5.7	B+35.9 points
      Black	 99	  3.4	B+32.5 points
      Black	101	 22.8	B+11.8 points
      Black	103	  5.3	B+15.0 points
      White	116	  3.8	B+17.5 points
      Black	125	  4.1	B+10.8 points
      White	128	  2.9	B+12.2 points
      Black	129	 13.1	W+0.9 points
      Black	135	  3.9	W+4.5 points
      White	154	 17.2	B+14.9 points
      Black	157	 24.8	W+7.5 points
      Black	187	  3.0	W+12.2 points
      Black	245	  8.2	W+20.9 points
      Black	257	  3.8	W+23.8 points];B[dp](;W[]C[Mistake!

      This move is 13 points worse than the AI move.

      Black is ahead by 18.6 points.];B[pd](;W[]C[Mistake!

      This move is 12.5 points worse than the AI move.

      Black is ahead by 31.2 points.];B[dd](;W[]C[Mistake!

      This move is 14.3 points worse than the AI move.

      Black is ahead by 45.1 points.];B[pp];W[fq];B[cn];W[qc];B[qd];W[pc];B[od];W[nb];B[jq];W[dq];B[cq];W[cr];B[eq];W[dr];B[er];W[ep];B[fr];W[cp];B[do];W[bp];B[fp];W[pq];B[qq];W[oq];B[qr];W[mq];B[oo];W[mo](;B[mn]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 41.7 points.];W[lo];B[nn];W[jp];B[ip];W[io];B[hp](;W[kq]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 46.2 points.];B[jo];W[kp](;B[in]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 42.6 points.];W[qj];B[qi];W[pi];B[qh];W[pk];B[ql];W[ri];B[ph];W[oi];B[oh](;W[rh]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 46.6 points.];B[ni](;W[nj]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 48.4 points.];B[mj];W[nk](;B[ol]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 44.1 points.];W[pl];B[oj];W[pj](;B[ok]C[Mistake!

      This move is 6.4 points worse than the AI move.

      Black is ahead by 36.9 points.];W[nh];B[mi];W[ng];B[pf];W[om];B[nl];W[qm];B[rm];W[qn];B[rk];W[rg];B[rf];W[qg];B[pg];W[rj];B[rn];W[qo];B[ro];W[qp];B[rp](;W[nm]C[Mistake!

      This move is 8.7 points worse than the AI move.

      Black is ahead by 39.5 points.];B[mk];W[mm];B[ln];W[qf];B[re];W[rc];B[of];W[ll](;B[kn]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 37.2 points.];W[lh](;B[nc]C[Mistake!

      This move is 8.6 points worse than the AI move.

      Black is ahead by 30.2 points.](;W[mb]C[Mistake!

      This move is 5.7 points worse than the AI move.

      Black is ahead by 35.9 points.](;B[kj]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 32.5 points.];W[me](;B[le]C[Mistake!

      This move is 22.8 points worse than the AI move.

      Black is ahead by 11.8 points.];W[md](;B[mc]C[Mistake!

      This move is 5.3 points worse than the AI move.

      Black is ahead by 15.0 points.];W[lc];B[mf];W[nf];B[ne];W[lf];B[ld];W[mg];B[lb];W[kc];B[ob];W[kb];B[oc](;W[rd]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 17.5 points.];B[qe];W[pb];B[na];W[la];B[pa];W[qa];B[ra];W[oa](;B[nd]C[Mistake!

      This move is 4.1 points worse than the AI move.

      Black is ahead by 10.8 points.];W[mf];B[pa](;W[rq]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 12.2 points.](;B[qb]C[Mistake!

      This move is 13.1 points worse than the AI move.

      White is ahead by 0.9 points.];W[rr];B[gc];W[dm];B[cm];W[dk](;B[dl]C[Mistake!

      This move is 3.9 points worse than the AI move.

      White is ahead by 4.5 points.];W[el];B[cl];W[fj];B[ii];W[ci];B[ck];W[dj];B[cg];W[em];B[fn];W[fh];B[gi];W[gj];B[gh];W[eg];B[gf];W[ij];B[ji](;W[jk]C[Mistake!

      This move is 17.2 points worse than the AI move.

      Black is ahead by 14.9 points.];B[ke];W[jf](;B[ic]C[Mistake!

      This move is 24.8 points worse than the AI move.

      White is ahead by 7.5 points.];W[je];B[ce];W[cc];B[eb];W[he];B[ge];W[hd];B[gd];W[iq];B[hq];W[jr];B[bh];W[bi];B[ir];W[db];B[bd];W[hc];B[hb];W[ib];B[jb];W[gb];B[ia];W[fb];B[ec];W[ea];B[bb];W[jc];B[id];W[ie](;B[cb]C[Mistake!

      This move is 3 points worse than the AI move.

      White is ahead by 12.2 points.];W[ja];B[ka];W[jd];B[ga];W[ja];B[rs];W[pr];B[ka];W[hg];B[gg];W[ja];B[qs];W[ps];B[ka];W[hj];B[ig];W[ja];B[sq];W[ss];B[ka];W[en];B[eo];W[ja];B[br];W[bq];B[ka];W[hi];B[hh];W[ja];B[bs];W[cs];B[ka];W[jh];B[ih];W[ja];B[es];W[ar];B[ka];W[sf];B[se];W[ja];B[pn];W[on];B[ka];W[no];B[kk];W[kl];B[kg];W[kf];B[fc];W[ja];B[ds];W[as];B[ka];W[rb];B[qa];W[ja](;B[jl]C[Mistake!

      This move is 8.2 points worse than the AI move.

      White is ahead by 20.9 points.];W[ib];B[il];W[ch];B[bg];W[gl];B[fa];W[ef];B[dg];W[dh];B[fi];W[ei](;B[cj]C[Mistake!

      This move is 3.8 points worse than the AI move.

      White is ahead by 23.8 points.];W[jq];B[bo];W[aj];B[gm];W[fm])(;B[fm]C[I would play here.

      White is ahead by 20.0 points.];W[fl];B[jq];W[co];B[dn];W[iq];B[sk];W[qk];B[jq]))(;B[sk]C[I would play here.

      White is ahead by 12.7 points.];W[qk];B[ka];W[ki];B[jj];W[ja];B[rl];W[sp];B[ka];W[ch];B[jg]))(;B[fc]C[I would play here.

      White is ahead by 9.2 points.];W[fa];B[cb];W[hm];B[il];W[im];B[jm];W[jl]))(;B[je]C[I would play here.

      Black is ahead by 17.3 points.];W[ie];B[id];W[ig];B[jd];W[he];B[ib];W[fd];B[ff];W[hd];B[hc];W[fe];B[ef];W[fc];B[gb];W[fb];B[db];W[jb];B[ja]))(;W[je]C[I would play here.

      White is ahead by 2.3 points.];B[ce];W[hm];B[jr];W[eb];B[fc];W[cc];B[dc];W[db];B[bc];W[bb];B[bd];W[fb]))(;B[di]C[I would play here.

      White is ahead by 0.6 points.];W[fj];B[fh];W[if];B[ij];W[cl];B[cj];W[bl];B[ce]))(;B[rr]C[I would play here.

      Black is ahead by 12.2 points.];W[oa];B[pm];W[pn];B[pa];W[rb];B[qb];W[sa];B[sb];W[qa];B[oa];W[sa];B[je];W[sc];B[jd];W[jg];B[ib];W[ic];B[hc];W[jb];B[id];W[ia];B[ih];W[ji];B[jh]))(;W[rb]C[I would play here.

      Black is ahead by 9.3 points.];B[qb];W[rq];B[rr];W[qa];B[pm];W[pn];B[qb];W[sa];B[sb];W[qa];B[oa];W[sa];B[je];W[sc];B[jd];W[jh];B[ib];W[ic];B[jc];W[jb];B[hc];W[ia];B[id]))(;B[pm]C[I would play here.

      Black is ahead by 14.9 points.];W[pn];B[pa];W[rr];B[rq];W[oa];B[nd];W[mf];B[pa];W[sa];B[rb];W[oa];B[sd];W[sc];B[pa];W[jj];B[oa];W[kk]))(;W[pb]C[I would play here.

      Black is ahead by 13.7 points.];B[oa];W[rd];B[qe];W[pa];B[rb];W[sb];B[lm];W[pm];B[qa];W[qb];B[po];W[ml];B[kl];W[lk];B[ji];W[la];B[kk];W[mf];B[jr];W[kr];B[ch]))(;B[mf]C[I would play here.

      Black is ahead by 20.3 points.];W[nf];B[mc];W[lc];B[ld];W[ne];B[lg];W[mh];B[oc];W[ob];B[kh];W[kg];B[jh];W[kf];B[lf];W[li];B[lj]))(;B[mc]C[I would play here.

      Black is ahead by 34.6 points.];W[lc];B[oc];W[ob];B[mf];W[lf];B[md];W[qe];B[ld];W[rd];B[kc];W[ji];B[kf];W[kg]))(;B[me]C[I would play here.

      Black is ahead by 35.9 points.];W[kj];B[li];W[kh];B[ki];W[ji];B[mh];W[mg];B[lg];W[lf]))(;W[me]C[I would play here.

      Black is ahead by 30.2 points.];B[mb];W[kj];B[ob];W[ke];B[ld];W[le];B[md];W[pb]))(;B[me]C[I would play here.

      Black is ahead by 38.8 points.];W[kj];B[ki];W[li];B[mh];W[mg];B[lg];W[lj];B[mf];W[kg]))(;B[lm]C[I would play here.

      Black is ahead by 40.9 points.];W[ml];B[kj];W[jm];B[jn];W[jk];B[km];W[kl];B[jj];W[im]))(;W[qf]C[I would play here.

      Black is ahead by 30.8 points.];B[mk];W[qe];B[of];W[rd];B[le];W[cf];B[dg];W[df]))(;B[rk]C[I would play here.

      Black is ahead by 43.3 points.];W[rj];B[qn];W[ml];B[nh];W[rf];B[rc]))(;B[rk]C[I would play here.

      Black is ahead by 48.4 points.];W[rj];B[mk];W[nl];B[rg];W[rm];B[qm]))(;W[rk]C[I would play here.

      Black is ahead by 45.3 points.];B[mc];W[nh];B[nj];W[ok];B[rg];W[qn];B[mb]))(;W[ni]C[I would play here.

      Black is ahead by 43.5 points.];B[rk];W[rj];B[nh];W[om];B[qn];W[mi];B[ch];W[mh]))(;B[pj]C[I would play here.

      Black is ahead by 46.5 points.];W[mc];B[md];W[rj];B[qj];W[rk];B[ri]))(;W[qj]C[I would play here.

      Black is ahead by 43.3 points.];B[ql];W[ph];B[kp];W[jo];B[lq];W[no];B[ko]))(;B[pk]C[I would play here.

      Black is ahead by 45.1 points.];W[cf];B[ch];W[mc];B[ko];W[qi]))(;W[pp]C[I would play here.

      Black is ahead by 30.8 points.];B[qn];W[nq];B[qf];W[fq];B[cn]))(;W[pp]C[I would play here.

      Black is ahead by 18.7 points.];B[dd];W[cq];B[dq];W[cp];B[do];W[bn];B[qq]))(;W[pd]C[I would play here.

      Black is ahead by 5.6 points.];B[dc];W[pp];B[qq];W[qp];B[pq];W[op];B[nr];W[ce]))
    `,
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 6, 8).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.White,
    },
    additionalInfo: "Partida 10",
    gameEventRef: GameEventTypes.live,
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[0.5]RU[japanese]DT[2022-07-08]PW[Yuichiro Shimawaki]WR[-]PB[Philippe Fanaro]BR[-]RE[W+R]C[Mistakes:

      Player	Move	Loss 	Score

      White	  2	 12.9	B+18.6 points
      White	  4	 12.2	B+31.0 points
      White	  6	 13.9	B+44.8 points
      Black	 45	  4.8	B+38.5 points
      Black	 47	  4.8	B+33.8 points
      White	 48	  4.7	B+38.5 points
      Black	 49	  4.0	B+34.5 points
      White	 50	  5.7	B+40.2 points
      Black	 51	  5.2	B+35.0 points
      Black	 53	  3.1	B+32.5 points
      Black	 55	  4.5	B+29.3 points
      Black	 57	  6.6	B+23.8 points
      White	 58	  7.6	B+31.4 points
      Black	 59	  8.3	B+23.1 points
      White	 66	  5.0	B+28.6 points
      White	 70	  3.8	B+31.1 points
      Black	 73	  3.1	B+28.2 points
      Black	 75	  4.0	B+27.0 points
      White	 82	  5.0	B+30.7 points
      Black	 83	  3.7	B+27.0 points
      Black	 85	  2.9	B+25.6 points
      Black	 91	  3.4	B+25.6 points
      White	 94	  4.0	B+28.7 points
      Black	 97	  5.0	B+23.6 points
      White	120	  3.8	B+29.7 points
      White	122	  5.5	B+34.8 points
      White	126	  5.8	B+41.1 points
      Black	127	 10.0	B+31.1 points
      Black	129	  4.3	B+29.6 points
      White	134	  5.4	B+35.4 points
      White	142	  3.2	B+38.9 points
      Black	143	  3.5	B+35.4 points
      Black	145	  3.5	B+34.4 points
      White	150	  3.2	B+36.7 points
      White	152	  4.1	B+40.1 points
      Black	153	  4.0	B+36.1 points
      White	154	  5.4	B+41.5 points
      Black	155	  3.2	B+38.3 points
      Black	157	  3.7	B+36.3 points
      White	158	  3.9	B+40.2 points
      Black	159	  3.6	B+36.6 points
      Black	165	  4.5	B+34.8 points
      White	166	  4.0	B+38.8 points
      Black	167	  7.1	B+31.7 points
      Black	173	  3.1	B+29.1 points
      White	178	  3.3	B+30.0 points
      Black	181	  3.9	B+27.1 points
      Black	185	  3.6	B+24.5 points
      Black	187	  3.3	B+22.2 points
      Black	189	  6.9	B+16.1 points
      Black	191	  6.3	B+11.3 points
      Black	199	  8.3	B+2.3 points
      Black	207	  9.3	W+8.1 points
      White	208	  4.0	W+4.1 points
      White	212	  6.1	W+0.1 points
      Black	213	  4.2	W+4.3 points
      Black	215	  5.8	W+8.7 points
      White	216	  3.1	W+5.6 points
      Black	217	  5.9	W+11.5 points];B[dp](;W[]C[Mistake!

      This move is 12.9 points worse than the AI move.

      Black is ahead by 18.6 points.];B[pd](;W[]C[Mistake!

      This move is 12.2 points worse than the AI move.

      Black is ahead by 31.0 points.];B[dd](;W[]C[Mistake!

      This move is 13.9 points worse than the AI move.

      Black is ahead by 44.8 points.];B[pp];W[cf];B[fc];W[ck];B[cm];W[cd];B[cc];W[bc];B[ce];W[bd];B[de];W[be];B[cb];W[df];B[md];W[qn];B[ql];W[qq];B[qp];W[pq];B[op];W[nr];B[qg];W[fe];B[gd];W[jc];B[kd];W[jd];B[je];W[kc];B[ke];W[ie];B[if];W[he];B[ge];W[hf];B[ff];W[ig](;B[jf]C[Mistake!

      This move is 4.8 points worse than the AI move.

      Black is ahead by 38.5 points.];W[fg](;B[lc]C[Mistake!

      This move is 4.8 points worse than the AI move.

      Black is ahead by 33.8 points.](;W[qc]C[Mistake!

      This move is 4.7 points worse than the AI move.

      Black is ahead by 38.5 points.](;B[qd]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 34.5 points.](;W[nb]C[Mistake!

      This move is 5.7 points worse than the AI move.

      Black is ahead by 40.2 points.](;B[kb]C[Mistake!

      This move is 5.2 points worse than the AI move.

      Black is ahead by 35.0 points.];W[pc](;B[id]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 32.5 points.];W[hd](;B[ic]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 29.3 points.];W[hc](;B[jb]C[Mistake!

      This move is 6.6 points worse than the AI move.

      Black is ahead by 23.8 points.](;W[gb]C[Mistake!

      This move is 7.6 points worse than the AI move.

      Black is ahead by 31.4 points.](;B[fb]C[Mistake!

      This move is 8.3 points worse than the AI move.

      Black is ahead by 23.1 points.];W[gf];B[bb];W[od];B[rc];W[rb];B[rd](;W[oe]C[Mistake!

      This move is 5 points worse than the AI move.

      Black is ahead by 28.6 points.];B[sb];W[ra];B[og](;W[pf]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 31.1 points.];B[pg];W[pb](;B[nq]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 28.2 points.];W[oq](;B[np]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 27.0 points.];W[mr];B[dk];W[dj];B[dl];W[cj];B[ji](;W[qj]C[Mistake!

      This move is 5 points worse than the AI move.

      Black is ahead by 30.7 points.](;B[pk]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 27.0 points.];W[rn](;B[rq]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 25.6 points.];W[rr];B[ro];W[sq];B[sp];W[rp](;B[nc]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 25.6 points.];W[oc];B[rq](;W[qf]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 28.7 points.];B[sr];W[rl](;B[rk]C[Mistake!

      This move is 5 points worse than the AI move.

      Black is ahead by 23.6 points.];W[qk];B[rm];W[pl];B[sl];W[qm];B[rl];W[rj];B[ol];W[pm];B[sn];W[sk];B[sj];W[si];B[so];W[sk];B[sm];W[ok];B[pj];W[pi];B[oj];W[oi];B[nj](;W[ni]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 29.7 points.];B[rh](;W[qi]C[Mistake!

      This move is 5.5 points worse than the AI move.

      Black is ahead by 34.8 points.];B[rf];W[ng];B[nf](;W[ki]C[Mistake!

      This move is 5.8 points worse than the AI move.

      Black is ahead by 41.1 points.](;B[nh]C[Mistake!

      This move is 10 points worse than the AI move.

      Black is ahead by 31.1 points.];W[jh](;B[li]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 29.6 points.];W[mi];B[lh];W[mj];B[nk](;W[mk]C[Mistake!

      This move is 5.4 points worse than the AI move.

      Black is ahead by 35.4 points.];B[ml];W[nm];B[nl];W[ll];B[mm];W[kj];B[lm](;W[kl]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 38.9 points.](;B[qr]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 35.4 points.];W[ps](;B[rs]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 34.4 points.];W[jq];B[hq];W[iq];B[hr](;W[fk]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 36.7 points.];B[kh](;W[jg]C[Mistake!

      This move is 4.1 points worse than the AI move.

      Black is ahead by 40.1 points.](;B[cq]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 36.1 points.](;W[fp]C[Mistake!

      This move is 5.4 points worse than the AI move.

      Black is ahead by 41.5 points.](;B[gp]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 38.3 points.];W[fn](;B[fq]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 36.3 points.](;W[co]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 40.2 points.](;B[dn]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 36.6 points.];W[bq];B[br];W[cp];B[dq];W[bm](;B[bn]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 34.8 points.](;W[cn]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 38.8 points.](;B[do]C[Mistake!

      This move is 7.1 points worse than the AI move.

      Black is ahead by 31.7 points.];W[cl];B[dm];W[bo];B[fl];W[gl](;B[lq]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 29.1 points.];W[lr];B[kq];W[kr];B[ir](;W[jr]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 30.0 points.];B[pr];W[mq](;B[mp]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 27.1 points.];W[ko];B[lp];W[jn](;B[io]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 24.5 points.];W[ho](;B[in]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 22.2 points.];W[ip](;B[jo]C[Mistake!

      This move is 6.9 points worse than the AI move.

      Black is ahead by 16.1 points.];W[km](;B[jm]C[Mistake!

      This move is 6.3 points worse than the AI move.

      Black is ahead by 11.3 points.];W[kn];B[fm];W[gm];B[gk];W[ek];B[gn];W[hn](;B[hm]C[Mistake!

      This move is 8.3 points worse than the AI move.

      Black is ahead by 2.3 points.];W[go];B[hl];W[gn];B[lj];W[lk];B[jj];W[kk](;B[jl]C[Mistake!

      This move is 9.3 points worse than the AI move.

      White is ahead by 8.1 points.](;W[hk]C[Mistake!

      This move is 4 points worse than the AI move.

      White is ahead by 4.1 points.];B[gj];W[im];B[il](;W[jk]C[Mistake!

      This move is 6.1 points worse than the AI move.

      White is ahead by 0.1 points.](;B[gi]C[Mistake!

      This move is 4.2 points worse than the AI move.

      White is ahead by 4.3 points.];W[ej](;B[ik]C[Mistake!

      This move is 5.8 points worse than the AI move.

      White is ahead by 8.7 points.](;W[ij]C[Mistake!

      This move is 3.1 points worse than the AI move.

      White is ahead by 5.6 points.](;B[hh]C[Mistake!

      This move is 5.9 points worse than the AI move.

      White is ahead by 11.5 points.])(;B[mb]C[I would play here.

      White is ahead by 5.6 points.];W[na];B[aq];W[mn];B[ln];W[lo];B[nn];W[mo];B[om];W[hp];B[kg]))(;W[hh]C[I would play here.

      White is ahead by 8.7 points.];B[aq];W[mn];B[nn];W[hp];B[gq];W[bp];B[kg]))(;B[kg]C[I would play here.

      White is ahead by 2.9 points.];W[mn];B[ln];W[lo];B[nn];W[mo];B[om];W[hh];B[hp];W[jp];B[aq];W[bp];B[ar];W[an];B[mb];W[na];B[or];W[ab];B[ee]))(;B[kg]C[I would play here.

      White is ahead by 0.1 points.];W[mn];B[nn];W[mo];B[om];W[hg];B[hp];W[fo];B[aq];W[bp];B[ar];W[an];B[fd];W[ef];B[mb];W[ma];B[la];W[na];B[or];W[ab];B[fa];W[dc];B[db];W[ed];B[ec];W[ee];B[hb];W[ha]))(;W[hh]C[I would play here.

      White is ahead by 6.2 points.];B[hp];W[jp];B[mb];W[na];B[aq];W[mn];B[ln];W[lo];B[nn];W[mo];B[om];W[bp];B[ar];W[an]))(;W[hp]C[I would play here.

      White is ahead by 8.1 points.];B[aq];W[hh];B[kg];W[mn];B[ln];W[lo];B[nn];W[mo];B[om];W[bp];B[ar];W[an];B[mb]))(;B[kg]C[I would play here.

      Black is ahead by 1.2 points.];W[hg];B[hp];W[jp];B[aq];W[mn];B[nn];W[bp];B[ar];W[mo];B[om];W[an];B[mb];W[na];B[or];W[ab];B[ee]))(;B[go]C[I would play here.

      Black is ahead by 10.6 points.];W[im];B[kg];W[hg];B[aq];W[mn];B[nn];W[mo];B[om];W[bp];B[ar];W[an]))(;B[go]C[I would play here.

      Black is ahead by 17.6 points.];W[gn];B[gk];W[el];B[ek];W[fj];B[kg];W[fm];B[lj];W[lk]))(;B[gk]C[I would play here.

      Black is ahead by 23.0 points.];W[el];B[im];W[jo];B[ek];W[fj];B[em];W[gm];B[go]))(;B[gk]C[I would play here.

      Black is ahead by 25.5 points.];W[fm];B[fj];W[ek];B[in];W[ip];B[im];W[km];B[el]))(;B[gk]C[I would play here.

      Black is ahead by 28.1 points.];W[hk];B[io];W[ho];B[in];W[hn];B[im];W[il]))(;B[gk]C[I would play here.

      Black is ahead by 31.0 points.];W[lo];B[km];W[hk];B[gj];W[fj];B[hl];W[gm]))(;W[mq]C[I would play here.

      Black is ahead by 26.7 points.];B[kg];W[jj];B[ii];W[hh];B[ek];W[fj]))(;B[km]C[I would play here.

      Black is ahead by 32.2 points.];W[lp];B[pr];W[jl];B[in];W[kr]))(;B[mb]C[I would play here.

      Black is ahead by 38.8 points.];W[na];B[bo];W[cl];B[dm];W[bl];B[lq]))(;W[do]C[I would play here.

      Black is ahead by 34.8 points.];B[bo];W[eo];B[bp];W[km];B[kg];W[jj];B[ek]))(;B[jn]C[I would play here.

      Black is ahead by 39.3 points.];W[lp];B[pr];W[io];B[in];W[ho];B[il];W[jj]))(;B[jn]C[I would play here.

      Black is ahead by 40.2 points.];W[lp];B[im];W[ik];B[pr];W[ir];B[kr]))(;W[lp]C[I would play here.

      Black is ahead by 36.3 points.];B[km];W[jl];B[ek];W[mo];B[no]))(;B[jn]C[I would play here.

      Black is ahead by 40.0 points.];W[lp];B[il];W[jj];B[fl];W[gl];B[gk]))(;B[hp]C[I would play here.

      Black is ahead by 41.5 points.];W[km];B[lq];W[lo];B[lp];W[lr];B[jo]))(;W[kg]C[I would play here.

      Black is ahead by 36.1 points.];B[lg];W[hp];B[gp];W[ho];B[gl];W[go]))(;B[gl]C[I would play here.

      Black is ahead by 40.1 points.];W[km];B[ho];W[lp];B[fl]))(;W[jj]C[I would play here.

      Black is ahead by 36.0 points.];B[ii];W[km];B[lq];W[lr];B[ho];W[cq];B[dq]))(;W[cq]C[I would play here.

      Black is ahead by 33.5 points.];B[dq];W[cp];B[co];W[bo];B[bn];W[do];B[cn];W[dr];B[er];W[cr];B[eo];W[bp]))(;B[jq]C[I would play here.

      Black is ahead by 37.9 points.];W[rs];B[kh];W[jj];B[ii];W[ij];B[hi];W[hj]))(;B[mb]C[I would play here.

      Black is ahead by 38.9 points.];W[na];B[lr];W[mq];B[kq];W[lo];B[jo]))(;W[jq]C[I would play here.

      Black is ahead by 35.7 points.];B[kh];W[jj];B[ii];W[ij];B[hi];W[hj];B[gi]))(;W[ml]C[I would play here.

      Black is ahead by 30.0 points.];B[om];W[kj];B[kh];W[mk];B[on];W[jj];B[kr]))(;B[nk]C[I would play here.

      Black is ahead by 33.9 points.];W[mi];B[kr];W[mg];B[of];W[ml];B[om];W[rs];B[kj]))(;B[mj]C[I would play here.

      Black is ahead by 41.1 points.];W[li];B[jh];W[mi];B[mg];W[jg];B[ml]))(;W[mj]C[I would play here.

      Black is ahead by 35.3 points.];B[nk];W[ml];B[mk];W[lk];B[lj];W[mi];B[ll];W[kk];B[mm];W[ki];B[mg];W[kl];B[lm];W[km];B[kr];W[nm]))(;W[rf]C[I would play here.

      Black is ahead by 29.3 points.];B[mj];W[kq];B[rg];W[bo];B[of];W[pe]))(;W[rg]C[I would play here.

      Black is ahead by 25.9 points.];B[lq];W[lr];B[kq];W[ni];B[mj];W[iq];B[kr];W[rs];B[qh]))(;B[lq]C[I would play here.

      Black is ahead by 28.6 points.];W[lr];B[ri];W[rj];B[pj];W[qk];B[qm]))(;W[eb]C[I would play here.

      Black is ahead by 24.7 points.];B[fa];W[rp];B[bg];W[bf];B[rq];W[ec];B[ed];W[rp]))(;B[oc]C[I would play here.

      Black is ahead by 29.0 points.];W[nc];B[nd];W[mb];B[rq];W[rl];B[sr];W[qk];B[pl];W[rh];B[rg]))(;B[rp]C[I would play here.

      Black is ahead by 28.5 points.];W[rl];B[qm];W[rm];B[qk];W[rk];B[ri];W[on];B[pn];W[pm];B[po];W[rj];B[pj]))(;B[oc]C[I would play here.

      Black is ahead by 30.7 points.];W[nc];B[nd];W[mb];B[pl];W[nk];B[ml];W[om]))(;W[pl]C[I would play here.

      Black is ahead by 25.7 points.];B[pk];W[pm];B[qk];W[mm];B[lq];W[ok];B[ln]))(;B[oc]C[I would play here.

      Black is ahead by 31.0 points.];W[nc];B[nd];W[mb];B[mq];W[mr];B[lq];W[pl];B[pk];W[qk]))(;B[oc]C[I would play here.

      Black is ahead by 31.3 points.];W[nc];B[nd];W[mb];B[rq];W[pl];B[pk];W[rr]))(;W[pb]C[I would play here.

      Black is ahead by 27.3 points.];B[oc];W[nc];B[nd];W[mb];B[ma];W[lb];B[la];W[qa]))(;W[sb]C[I would play here.

      Black is ahead by 23.6 points.];B[dk];W[dj];B[dl];W[cj];B[rp];W[mq];B[ol]))(;B[ef]C[I would play here.

      Black is ahead by 31.4 points.];W[eg];B[gf];W[gg];B[fb];W[pl];B[pk];W[pm];B[qk];W[nl];B[rc];W[rb]))(;W[gf]C[I would play here.

      Black is ahead by 23.8 points.];B[hb];W[pl];B[pk];W[pm];B[qk];W[nl]))(;B[ef]C[I would play here.

      Black is ahead by 30.4 points.];W[eg];B[gf];W[gg];B[ib];W[pl];B[pk];W[ol];B[qm];W[pn]))(;B[gf]C[I would play here.

      Black is ahead by 33.8 points.];W[gg];B[ef];W[eg];B[rc];W[rb];B[rd];W[sb];B[nq];W[mr];B[rq];W[rr]))(;B[gf]C[I would play here.

      Black is ahead by 35.6 points.];W[gg];B[ef];W[eg];B[rc];W[rb];B[rd];W[od];B[mb];W[sb];B[ob]))(;B[gf]C[I would play here.

      Black is ahead by 40.2 points.];W[gg];B[ef];W[eg];B[mb];W[ok];B[dk];W[dj]))(;W[gf]C[I would play here.

      Black is ahead by 34.5 points.];B[hc];W[ol];B[dk];W[pc];B[rd];W[nb]))(;B[gf]C[I would play here.

      Black is ahead by 38.5 points.];W[gg];B[qd];W[pl];B[ef];W[eg];B[pk];W[qk];B[pm];W[ol]))(;W[gf]C[I would play here.

      Black is ahead by 33.8 points.];B[hc];W[hb];B[gb];W[mq];B[ol];W[qc];B[qd];W[pc]))(;B[gf]C[I would play here.

      Black is ahead by 38.6 points.];W[gg];B[ef];W[eg];B[dk];W[dj];B[dl];W[nc];B[nd];W[qc];B[oc]))(;B[ef]C[I would play here.

      Black is ahead by 43.3 points.];W[dh];B[lc];W[qc];B[qd];W[pc];B[rd]))(;W[pp]C[I would play here.

      Black is ahead by 30.9 points.];B[nq];W[qn];B[fq];W[qf];B[nc]))(;W[dd]C[I would play here.

      Black is ahead by 18.8 points.];B[pq];W[qo];B[op];W[qc];B[qd]))(;W[pd]C[I would play here.

      Black is ahead by 5.7 points.];B[qp];W[dd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed]))
    `,
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 6, 8).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.White,
    },
    additionalInfo: "Partida 11",
    gameEventRef: GameEventTypes.live,
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[0.5]RU[japanese]DT[2022-07-08]PW[Yuichiro Shimawaki]WR[-]PB[Philippe Fanaro]BR[-]RE[W+R]C[Mistakes:

      Player	Move	Loss 	Score

      White	  2	 12.9	B+18.6 points
      White	  4	 12.2	B+31.0 points
      White	  6	 13.8	B+44.7 points
      Black	 13	  3.3	B+42.5 points
      Black	 29	  4.9	B+40.4 points
      Black	 51	  4.0	B+35.8 points
      White	 52	  4.5	B+40.3 points
      White	 60	  3.8	B+42.4 points
      White	 76	  4.1	B+50.1 points
      Black	 87	  5.9	B+41.6 points
      White	 88	  3.0	B+44.6 points
      White	 96	  6.0	B+47.7 points
      White	110	  2.9	B+45.4 points
      Black	115	  3.0	B+41.8 points
      White	116	  3.0	B+44.8 points
      Black	117	  3.8	B+41.0 points
      Black	119	  5.1	B+38.2 points
      Black	121	  3.1	B+36.8 points
      Black	123	  3.4	B+35.5 points
      White	130	  9.9	B+44.1 points
      Black	131	  8.6	B+35.5 points
      White	132	  5.5	B+41.0 points
      Black	133	  3.5	B+37.5 points
      White	136	  5.8	B+44.2 points
      Black	137	  6.2	B+38.0 points
      Black	143	  4.2	B+36.9 points
      White	144	  3.2	B+40.1 points
      Black	145	  2.9	B+37.2 points
      White	146	  7.0	B+44.2 points
      Black	147	  4.5	B+39.7 points
      Black	149	  4.4	B+37.7 points
      White	152	  4.3	B+43.3 points
      White	154	  3.9	B+45.3 points
      White	158	  4.4	B+49.7 points
      Black	159	  3.5	B+46.2 points
      White	160	  4.1	B+50.3 points
      Black	161	  3.3	B+47.0 points
      Black	165	 17.2	B+34.0 points
      Black	169	 10.8	B+26.7 points
      Black	171	  4.3	B+25.1 points
      Black	175	  4.4	B+22.7 points
      Black	177	  5.4	B+19.5 points
      White	178	  4.2	B+23.7 points
      White	180	  4.3	B+25.8 points
      Black	181	  6.6	B+19.2 points
      Black	183	  8.4	B+11.1 points
      White	184	 11.6	B+22.7 points
      White	186	  3.7	B+24.3 points
      White	188	  4.4	B+26.4 points
      Black	193	  6.4	B+20.3 points
      White	194	  5.0	B+25.3 points
      Black	195	  5.1	B+20.2 points
      White	196	  3.4	B+23.6 points
      Black	201	  5.8	B+16.7 points
      Black	203	  2.9	B+16.5 points
      White	204	  7.7	B+24.2 points
      Black	205	  8.8	B+15.4 points
      White	206	  8.9	B+24.3 points
      Black	207	  6.6	B+17.7 points
      Black	209	  7.4	B+11.5 points
      White	210	  6.5	B+18.0 points
      Black	211	  5.4	B+12.6 points
      Black	215	  5.1	B+10.2 points
      Black	223	  6.8	B+4.2 points
      White	230	  6.8	B+8.7 points
      Black	233	  6.7	B+4.1 points
      White	236	  3.0	B+7.2 points
      Black	237	  8.1	W+0.9 points
      White	242	  4.6	B+3.3 points
      Black	243	  5.4	W+2.1 points
      Black	247	 10.9	W+13.6 points
      White	248	 12.3	W+1.3 points
      Black	249	 24.9	W+26.2 points
      White	250	 21.2	W+5 points
      Black	253	 26.5	W+29.2 points
      White	254	 24.9	W+4.3 points
      Black	255	 22.0	W+26.3 points
      White	256	 25.1	W+1.2 points
      Black	257	 10.6	W+11.8 points
      Black	261	 34.6	W+41.5 points
      Black	263	  8.4	W+42.5 points
      White	264	 33.8	W+8.7 points
      Black	267	 44.7	W+53.9 points];B[dp](;W[]C[Mistake!

      This move is 12.9 points worse than the AI move.

      Black is ahead by 18.6 points.];B[pd](;W[]C[Mistake!

      This move is 12.2 points worse than the AI move.

      Black is ahead by 31.0 points.];B[dd](;W[]C[Mistake!

      This move is 13.8 points worse than the AI move.

      Black is ahead by 44.7 points.];B[pp];W[qc];B[qd];W[pc];B[oc];W[ob](;B[nb]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 42.5 points.];W[nc];B[od];W[mb];B[pb];W[na];B[qb];W[cn];B[cl];W[fq];B[fp];W[gp];B[fo];W[dq];B[cq];W[eq](;B[dn]C[Mistake!

      This move is 4.9 points worse than the AI move.

      Black is ahead by 40.4 points.];W[ep];B[do];W[cr];B[bp];W[bq];B[cp];W[nq];B[qn];W[fc];B[df];W[pq];B[qq];W[qr];B[oq];W[pr];B[op];W[or];B[ip];W[go];B[gn];W[hn](;B[ho]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 35.8 points.](;W[hp]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 40.3 points.];B[io];W[fn];B[gm];W[eo];B[fm];W[ch];B[bg](;W[en]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 42.4 points.];B[em];W[fi];B[rq];W[np];B[mr];W[lq];B[lr];W[qp];B[rp];W[jq];B[kq];W[kp];B[kr];W[iq];B[nr](;W[br]C[Mistake!

      This move is 4.1 points worse than the AI move.

      Black is ahead by 50.1 points.];B[dj];W[di];B[ej];W[fg];B[fd];W[gd];B[fe];W[eb];B[gh];W[dg](;B[ef]C[Mistake!

      This move is 5.9 points worse than the AI move.

      Black is ahead by 41.6 points.](;W[gi]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 44.6 points.];B[ge];W[hd];B[he];W[hh];B[id];W[cc];B[ic](;W[gc]C[Mistake!

      This move is 6 points worse than the AI move.

      Black is ahead by 47.7 points.];B[cd];W[bc];B[jg];W[ji];B[me];W[kc];B[kd];W[ld];B[le];W[jd];B[ke];W[jc];B[hg](;W[ih]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 45.4 points.];B[gg];W[rc];B[rb];W[qj](;B[qh]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 41.8 points.](;W[qm]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 44.8 points.](;B[rm]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 41.0 points.];W[rl](;B[rn]C[Mistake!

      This move is 5.1 points worse than the AI move.

      Black is ahead by 38.2 points.];W[rf](;B[re]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 36.8 points.];W[rh](;B[ri]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 35.5 points.];W[qi];B[rg];W[qg];B[sh];W[ph];B[rh](;W[pg]C[Mistake!

      This move is 9.9 points worse than the AI move.

      Black is ahead by 44.1 points.](;B[rj]C[Mistake!

      This move is 8.6 points worse than the AI move.

      Black is ahead by 35.5 points.](;W[qk]C[Mistake!

      This move is 5.5 points worse than the AI move.

      Black is ahead by 41.0 points.](;B[pm]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 37.5 points.];W[pl];B[om](;W[nd]C[Mistake!

      This move is 5.8 points worse than the AI move.

      Black is ahead by 44.2 points.](;B[of]C[Mistake!

      This move is 6.2 points worse than the AI move.

      Black is ahead by 38.0 points.];W[ne];B[nf];W[mi];B[hj];W[hi](;B[oi]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 36.9 points.](;W[nj]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 40.1 points.](;B[nh]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 37.2 points.](;W[pi]C[Mistake!

      This move is 7 points worse than the AI move.

      Black is ahead by 44.2 points.](;B[oj]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 39.7 points.];W[nl](;B[ok]C[Mistake!

      This move is 4.4 points worse than the AI move.

      Black is ahead by 37.7 points.];W[ol];B[nk](;W[mk]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 43.3 points.];B[ml](;W[nm]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 45.3 points.];B[lk];W[mj];B[ll](;W[kj]C[Mistake!

      This move is 4.4 points worse than the AI move.

      Black is ahead by 49.7 points.](;B[lo]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 46.2 points.](;W[po]C[Mistake!

      This move is 4.1 points worse than the AI move.

      Black is ahead by 50.3 points.](;B[qo]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 47.0 points.];W[oo];B[qp];W[lp](;B[ql]C[Mistake!

      This move is 17.2 points worse than the AI move.

      Black is ahead by 34.0 points.];W[jl];B[nn];W[mm](;B[pk]C[Mistake!

      This move is 10.8 points worse than the AI move.

      Black is ahead by 26.7 points.];W[qm](;B[lm]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 25.1 points.];W[mn];B[ql];W[qe](;B[pe]C[Mistake!

      This move is 4.4 points worse than the AI move.

      Black is ahead by 22.7 points.];W[qm](;B[kh]C[Mistake!

      This move is 5.4 points worse than the AI move.

      Black is ahead by 19.5 points.](;W[lj]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 23.7 points.];B[ql](;W[pf]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 25.8 points.](;B[qm]C[Mistake!

      This move is 6.6 points worse than the AI move.

      Black is ahead by 19.2 points.];W[rd](;B[oe]C[Mistake!

      This move is 8.4 points worse than the AI move.

      Black is ahead by 11.1 points.](;W[se]C[Mistake!

      This move is 11.6 points worse than the AI move.

      Black is ahead by 22.7 points.];B[mo](;W[ng]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 24.3 points.];B[mg](;W[og]C[Mistake!

      This move is 4.4 points worse than the AI move.

      Black is ahead by 26.4 points.];B[mf];W[hl];B[rk];W[in](;B[jb]C[Mistake!

      This move is 6.4 points worse than the AI move.

      Black is ahead by 20.3 points.](;W[kb]C[Mistake!

      This move is 5 points worse than the AI move.

      Black is ahead by 25.3 points.](;B[bd]C[Mistake!

      This move is 5.1 points worse than the AI move.

      Black is ahead by 20.2 points.](;W[ie]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 23.6 points.];B[je];W[if];B[ig];W[ib](;B[ci]C[Mistake!

      This move is 5.8 points worse than the AI move.

      Black is ahead by 16.7 points.];W[ei](;B[bh]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 16.5 points.](;W[ad]C[Mistake!

      This move is 7.7 points worse than the AI move.

      Black is ahead by 24.2 points.](;B[ae]C[Mistake!

      This move is 8.8 points worse than the AI move.

      Black is ahead by 15.4 points.](;W[ac]C[Mistake!

      This move is 8.9 points worse than the AI move.

      Black is ahead by 24.3 points.](;B[cg]C[Mistake!

      This move is 6.6 points worse than the AI move.

      Black is ahead by 17.7 points.];W[fk](;B[js]C[Mistake!

      This move is 7.4 points worse than the AI move.

      Black is ahead by 11.5 points.](;W[is]C[Mistake!

      This move is 6.5 points worse than the AI move.

      Black is ahead by 18.0 points.](;B[ir]C[Mistake!

      This move is 5.4 points worse than the AI move.

      Black is ahead by 12.6 points.];W[jr];B[hs];W[ks](;B[hq]C[Mistake!

      This move is 5.1 points worse than the AI move.

      Black is ahead by 10.2 points.];W[is];B[dc];W[js];B[db];W[rr];B[sr];W[rs](;B[sb]C[Mistake!

      This move is 6.8 points worse than the AI move.

      Black is ahead by 4.2 points.];W[sc];B[sf];W[sg];B[hb];W[hc];B[sf](;W[dk]C[Mistake!

      This move is 6.8 points worse than the AI move.

      Black is ahead by 8.7 points.];B[ck];W[sg](;B[im]C[Mistake!

      This move is 6.7 points worse than the AI move.

      Black is ahead by 4.1 points.];W[hm];B[sf](;W[cj]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 7.2 points.](;B[sg]C[Mistake!

      This move is 8.1 points worse than the AI move.

      White is ahead by 0.9 points.];W[bi];B[bj];W[ci];B[oh](;W[pa]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 3.3 points.](;B[pj]C[Mistake!

      This move is 5.4 points worse than the AI move.

      White is ahead by 2.1 points.];W[no];B[ln];W[aj](;B[bn]C[Mistake!

      This move is 10.9 points worse than the AI move.

      White is ahead by 13.6 points.](;W[qa]C[Mistake!

      This move is 12.3 points worse than the AI move.

      White is ahead by 1.3 points.](;B[jk]C[Mistake!

      This move is 24.9 points worse than the AI move.

      White is ahead by 26.2 points.](;W[kk]C[Mistake!

      This move is 21.2 points worse than the AI move.

      White is ahead by 5.0 points.];B[jm];W[jn](;B[il]C[Mistake!

      This move is 26.5 points worse than the AI move.

      White is ahead by 29.2 points.](;W[kl]C[Mistake!

      This move is 24.9 points worse than the AI move.

      White is ahead by 4.3 points.](;B[km]C[Mistake!

      This move is 22 points worse than the AI move.

      White is ahead by 26.3 points.](;W[bl]C[Mistake!

      This move is 25.1 points worse than the AI move.

      White is ahead by 1.2 points.](;B[ek]C[Mistake!

      This move is 10.6 points worse than the AI move.

      White is ahead by 11.8 points.];W[cm];B[dm];W[bm](;B[co]C[Mistake!

      This move is 34.6 points worse than the AI move.

      White is ahead by 41.5 points.];W[bk](;B[gk]C[Mistake!

      This move is 8.4 points worse than the AI move.

      White is ahead by 42.5 points.](;W[gl]C[Mistake!

      This move is 33.8 points worse than the AI move.

      White is ahead by 8.7 points.];B[fl];W[dl](;B[cl]C[Mistake!

      This move is 44.7 points worse than the AI move.

      White is ahead by 53.9 points.])(;B[hk]C[I would play here.

      White is ahead by 9.2 points.];W[jp];B[fj];W[ec];B[jj];W[ki];B[md];W[ra];B[qf];W[sa]))(;W[hk]C[I would play here.

      White is ahead by 42.5 points.];B[ik];W[gl];B[fl];W[dl];B[jj];W[ki];B[jo];W[gj];B[ko];W[jp];B[ec];W[fb]))(;B[ps]C[I would play here.

      White is ahead by 34.1 points.];W[hk];B[sq];W[ik];B[ec];W[fb]))(;B[fl]C[I would play here.

      White is ahead by 6.9 points.];W[bk];B[dl];W[ik];B[ec];W[fb];B[fj];W[gj];B[hk];W[ij]))(;B[dl]C[I would play here.

      White is ahead by 1.2 points.];W[bm];B[cm];W[bk];B[ek];W[ra];B[hk];W[sa];B[gl];W[ko];B[ec];W[fb];B[md];W[gk];B[jj];W[ki]))(;W[cm]C[I would play here.

      White is ahead by 26.3 points.];B[bl];W[bm];B[am];W[bo];B[an];W[ao];B[al];W[ap];B[dm];W[aq];B[co];W[cm];B[ek];W[el];B[dl];W[fl];B[gl];W[gk]))(;B[os]C[I would play here.

      White is ahead by 4.3 points.];W[ls];B[km];W[cm];B[bm];W[dl];B[dm];W[bl];B[co];W[cm];B[cn]))(;W[cm]C[I would play here.

      White is ahead by 29.2 points.];B[ek];W[bm];B[dm];W[bk];B[fl];W[dl];B[el];W[bo];B[gk];W[ik];B[kl];W[fj];B[ij]))(;B[bk]C[I would play here.

      White is ahead by 2.7 points.];W[km];B[ek];W[el];B[dl];W[fl];B[kl];W[il];B[ec];W[fb];B[md];W[bm];B[ak];W[ai];B[ao];W[cm]))(;W[cm]C[I would play here.

      White is ahead by 26.2 points.];B[bl];W[bm];B[am];W[bo];B[dm];W[an];B[ak];W[ai];B[dl];W[bk];B[jo];W[jp];B[bj];W[ek];B[co];W[al];B[bk]))(;B[bk]C[I would play here.

      White is ahead by 1.3 points.];W[jm];B[ek];W[el];B[dl];W[fl];B[ec];W[fb];B[md];W[bm];B[ak];W[ai];B[ao];W[cm];B[dm];W[am];B[qf];W[ra];B[re]))(;W[cm]C[I would play here.

      White is ahead by 13.6 points.];B[bl];W[bm];B[am];W[bo];B[ao];W[an];B[mp];W[mq];B[bn];W[cb];B[co];W[da];B[qf];W[jn];B[ek];W[el];B[dl];W[fl];B[md];W[qa];B[re]))(;B[bk]C[I would play here.

      White is ahead by 2.7 points.];W[ek];B[bn];W[ra];B[gl];W[gk];B[jn];W[jo];B[il];W[hk];B[jm];W[al];B[bm];W[ak];B[am];W[ec];B[qf];W[qa]))(;B[ko]C[I would play here.

      Black is ahead by 3.3 points.];W[jo];B[mp];W[ek];B[mq];W[cm];B[bm];W[bn];B[ai];W[bk];B[ak];W[aj];B[jp];W[kp];B[bj];W[ah];B[ag];W[aj];B[pj];W[qa];B[bj];W[mh];B[qf]))(;W[ek]C[I would play here.

      White is ahead by 1.3 points.];B[ko];W[jo];B[no];W[cm];B[mq];W[pa];B[pj];W[ai];B[qf];W[jp];B[mp]))(;B[oh]C[I would play here.

      Black is ahead by 7.2 points.];W[no];B[ln];W[bi];B[pj];W[bk];B[bl];W[an];B[ak]))(;W[dm]C[I would play here.

      Black is ahead by 4.2 points.];B[cm];W[sg];B[sq];W[mq];B[sf];W[cj];B[bj];W[sg];B[ss];W[ns];B[sf];W[ek];B[dl];W[sg];B[os];W[ls];B[sf];W[da];B[oh];W[sg];B[pj];W[qf]))(;B[jn]C[I would play here.

      Black is ahead by 10.8 points.];W[dm];B[jo];W[jp];B[cm];W[ek];B[dl];W[sf];B[ij];W[gl];B[ik];W[il];B[fj];W[gj];B[cj]))(;W[cj]C[I would play here.

      Black is ahead by 1.9 points.];B[dh];W[sg];B[jm];W[jn];B[sf];W[dl];B[el];W[sg];B[jk];W[ik];B[sf];W[ck];B[dm];W[sg];B[no];W[mq];B[sf];W[bl];B[cm];W[sg];B[kl]))(;B[sf]C[I would play here.

      Black is ahead by 11.0 points.];W[sg];B[sc];W[sb];B[sf];W[cj];B[dh];W[sg];B[sa];W[sf];B[dl];W[qa];B[pa];W[fj];B[ek]))(;B[sc]C[I would play here.

      Black is ahead by 15.3 points.];W[sb];B[ls];W[cj];B[dh];W[dk];B[ck];W[ek];B[bj];W[dm];B[dl];W[cm]))(;B[sf]C[I would play here.

      Black is ahead by 18.0 points.];W[sc];B[pj];W[sb];B[oh];W[re];B[qf];W[cj]))(;W[cj]C[I would play here.

      Black is ahead by 11.5 points.];B[bi];W[dk];B[ck];W[ek];B[sc];W[sb];B[sf];W[dm];B[dl];W[cm];B[sa];W[sg]))(;B[sc]C[I would play here.

      Black is ahead by 18.9 points.];W[sb];B[sf];W[sg];B[sa];W[qa];B[sf];W[cj];B[dh];W[sg];B[dc];W[db]))(;B[sf]C[I would play here.

      Black is ahead by 24.3 points.];W[sg];B[sc];W[sb];B[sf];W[cj];B[bi];W[sg];B[dc];W[db];B[sf];W[fk]))(;W[sc]C[I would play here.

      Black is ahead by 15.4 points.];B[gk];W[fk];B[gl];W[cj];B[bi];W[dk];B[ck];W[ij];B[jn]))(;B[sc]C[I would play here.

      Black is ahead by 24.2 points.];W[sb];B[sf];W[sg];B[dc];W[db];B[sf];W[cj];B[bi];W[sg];B[bb];W[cb];B[sf]))(;W[fk]C[I would play here.

      Black is ahead by 16.5 points.];B[sc];W[sb];B[sf];W[sg];B[sa];W[qa];B[sf];W[cj];B[bi];W[sg]))(;B[sc]C[I would play here.

      Black is ahead by 19.4 points.];W[sb];B[sf];W[sg];B[sa];W[sf];B[sb];W[sd];B[oh];W[pa]))(;B[sc]C[I would play here.

      Black is ahead by 22.5 points.];W[sb];B[sf];W[sg];B[gk];W[ij];B[sf];W[rr];B[sr];W[sg]))(;W[cj]C[I would play here.

      Black is ahead by 20.2 points.];B[ck];W[bj];B[sf];W[an];B[bk];W[ap];B[bo]))(;B[sf]C[I would play here.

      Black is ahead by 25.3 points.];W[sg];B[sc];W[sb];B[sf];W[cj];B[ck];W[bj];B[sa];W[sg]))(;W[sc]C[I would play here.

      Black is ahead by 20.3 points.];B[kb];W[lc];B[je];W[cj];B[ck];W[bj];B[md];W[lb]))(;B[sf]C[I would play here.

      Black is ahead by 26.7 points.];W[sc];B[oh];W[sb];B[pj];W[re];B[qf];W[cj];B[ck]))(;W[je]C[I would play here.

      Black is ahead by 22.0 points.];B[jf];W[cj];B[ck];W[ei];B[rk];W[ie];B[sc];W[sb];B[sf]))(;W[je]C[I would play here.

      Black is ahead by 20.6 points.];B[rk];W[ie];B[jf];W[ij];B[sc];W[sb];B[sa];W[sf]))(;W[mo]C[I would play here.

      Black is ahead by 11.1 points.];B[qf];W[oh];B[qe];W[ni];B[ib];W[md];B[im];W[cj];B[ck];W[jr]))(;B[mo]C[I would play here.

      Black is ahead by 19.5 points.];W[cj];B[oe];W[se];B[rk];W[cm];B[bm];W[dl];B[dm];W[bl]))(;B[rd]C[I would play here.

      Black is ahead by 25.8 points.];W[qm];B[il];W[ql];B[jm];W[jk];B[in];W[ij];B[jp];W[ln]))(;W[mo]C[I would play here.

      Black is ahead by 21.5 points.];B[qf];W[qm];B[im];W[jm];B[ql];W[rr];B[sr];W[qm]))(;W[qf]C[I would play here.

      Black is ahead by 19.5 points.];B[rd];W[ql];B[lj];W[cj];B[ck];W[sf];B[ij];W[li];B[ki];W[jj]))(;B[jm]C[I would play here.

      Black is ahead by 24.9 points.];W[ql];B[il];W[jk];B[in];W[ij];B[mo];W[no];B[qf];W[pf]))(;B[rd]C[I would play here.

      Black is ahead by 27.1 points.];W[qm];B[jk];W[ql];B[kk];W[ij];B[ik];W[hk];B[gj];W[hl];B[hm];W[il];B[jn];W[kn]))(;B[jk]C[I would play here.

      Black is ahead by 29.4 points.];W[kk];B[jm];W[mn];B[kl];W[il]))(;B[lm]C[I would play here.

      Black is ahead by 37.5 points.];W[mn];B[mo];W[no];B[im];W[ij];B[jk];W[ik];B[il];W[je]))(;B[mn]C[I would play here.

      Black is ahead by 51.2 points.];W[nn];B[ij];W[jl];B[jn];W[im];B[jk];W[kk];B[kl];W[hl];B[jm];W[il];B[gl]))(;B[oo]C[I would play here.

      Black is ahead by 50.3 points.];W[jl];B[no];W[oe];B[pf];W[qf];B[pe];W[sf];B[rk]))(;W[lp]C[I would play here.

      Black is ahead by 46.2 points.];B[mn];W[nn];B[ij];W[jl];B[jn];W[im];B[kk]))(;B[mn]C[I would play here.

      Black is ahead by 49.7 points.];W[ij];B[jk];W[oe];B[pf];W[qf];B[pe];W[ik]))(;W[ij]C[I would play here.

      Black is ahead by 45.3 points.];B[ki];W[kj];B[lj];W[oe];B[ei];W[fh];B[hk];W[ik]))(;W[oe]C[I would play here.

      Black is ahead by 41.4 points.];B[pf];W[qf];B[pe];W[lk];B[nm];W[sf];B[rk];W[sl];B[ql];W[rd]))(;W[oe]C[I would play here.

      Black is ahead by 39.0 points.];B[pf];W[qf];B[pe];W[ij];B[mk];W[nm];B[mq];W[pn]))(;B[kj]C[I would play here.

      Black is ahead by 42.1 points.];W[jj];B[kk];W[ki];B[li];W[lh];B[lj]))(;B[ki]C[I would play here.

      Black is ahead by 44.2 points.];W[jj];B[kj];W[kk];B[lk];W[kh];B[lh];W[mh]))(;W[oe]C[I would play here.

      Black is ahead by 37.2 points.];B[pf];W[qf];B[pe];W[nl];B[pi];W[in];B[ib]))(;B[ki]C[I would play here.

      Black is ahead by 40.1 points.];W[oe];B[kj];W[ij];B[nh];W[pe];B[sf]))(;W[mk]C[I would play here.

      Black is ahead by 36.9 points.];B[nh];W[ol];B[nm];W[oe];B[pf]))(;B[li]C[I would play here.

      Black is ahead by 41.1 points.];W[lh];B[mj];W[mh];B[kh];W[ki];B[lj];W[oe]))(;B[kj]C[I would play here.

      Black is ahead by 44.2 points.];W[cj];B[ei];W[cm];B[dm]))(;W[mj]C[I would play here.

      Black is ahead by 38.4 points.];B[hj];W[cj];B[ck];W[hi];B[ki];W[kj]))(;B[mi]C[I would play here.

      Black is ahead by 41.0 points.];W[il];B[oi];W[om];B[no];W[mk]))(;W[mi]C[I would play here.

      Black is ahead by 35.5 points.];B[oj];W[qe];B[sf];W[nk];B[ok];W[ol]))(;B[mi]C[I would play here.

      Black is ahead by 44.1 points.];W[cj];B[oi];W[cm];B[dl];W[dm]))(;W[cj]C[I would play here.

      Black is ahead by 34.2 points.];B[ck];W[mi];B[oi];W[oh];B[ni];W[nh]))(;B[qg]C[I would play here.

      Black is ahead by 38.9 points.];W[cj];B[ck];W[il];B[ib];W[je];B[ie]))(;B[qf]C[I would play here.

      Black is ahead by 39.9 points.];W[cj];B[ck];W[qe];B[re];W[qg]))(;B[pm]C[I would play here.

      Black is ahead by 43.3 points.];W[ql];B[hj];W[hi];B[kj];W[jj];B[jk];W[ij]))(;B[pm]C[I would play here.

      Black is ahead by 44.8 points.];W[pl];B[om];W[ol];B[hj];W[cj];B[ck]))(;W[cj]C[I would play here.

      Black is ahead by 41.8 points.];B[ck];W[il];B[oj];W[rf];B[qf]))(;B[ij]C[I would play here.

      Black is ahead by 44.8 points.];W[cj];B[ck];W[bf];B[cf];W[bk];B[bl]))(;W[cj]C[I would play here.

      Black is ahead by 42.5 points.];B[ck];W[rf];B[re];W[qj];B[ih];W[hi];B[ii];W[ij]))(;W[cj]C[I would play here.

      Black is ahead by 41.7 points.];B[ck];W[be];B[bf];W[ce];B[cf];W[hb];B[cd]))(;W[cj]C[I would play here.

      Black is ahead by 41.6 points.];B[ck];W[gg];B[ge];W[cc];B[hd];W[be];B[bf];W[ce]))(;B[gc]C[I would play here.

      Black is ahead by 47.5 points.];W[cc];B[hd];W[cj];B[ck];W[be];B[cf]))(;W[db]C[I would play here.

      Black is ahead by 46.0 points.];B[cc];W[hd];B[me];W[ck];B[dk]))(;W[np]C[I would play here.

      Black is ahead by 38.6 points.];B[jc];W[ee];B[ef];W[ck];B[dk]))(;W[fn]C[I would play here.

      Black is ahead by 35.8 points.];B[gm];W[eo];B[in];W[np];B[rq];W[nd];B[mr];W[lq];B[lr]))(;B[fn]C[I would play here.

      Black is ahead by 39.8 points.];W[np];B[ho];W[hq];B[in];W[ch];B[dh];W[di]))(;B[cp]C[I would play here.

      Black is ahead by 45.3 points.];W[dm];B[dl];W[em];B[el];W[fm];B[go];W[hp]))(;B[nc]C[I would play here.

      Black is ahead by 45.8 points.];W[nb];B[mc];W[mb];B[lc];W[cf];B[pj];W[oe]))(;W[pp]C[I would play here.

      Black is ahead by 30.9 points.];B[nq];W[qn];B[fq];W[qf];B[nc]))(;W[dd]C[I would play here.

      Black is ahead by 18.8 points.];B[pq];W[nc];B[qn];W[qf];B[pf]))(;W[pd]C[I would play here.

      Black is ahead by 5.7 points.];B[qp];W[dd];B[cc];W[dc];B[cd];W[cf];B[ce];W[de];B[bf]))
    `,
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 6, 11).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.Black,
    },
    additionalInfo: "Partida 12",
    gameEventRef: GameEventTypes.live,
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[0.5]RU[japanese]DT[2022-07-12]PW[Yuichiro Shimawaki]WR[-]PB[Philippe Fanaro]BR[-]RE[B+R]C[Mistakes:

      Player	Move	Loss 	Score

      White	  2	 12.9	B+18.6 points
      White	  4	 12.3	B+31.1 points
      White	  6	 13.8	B+44.7 points
      Black	 33	  3.6	B+41.3 points
      White	 38	  4.3	B+45.2 points
      Black	 39	  3.2	B+42.0 points
      Black	 41	  4.0	B+40.8 points
      White	 42	  4.3	B+45.1 points
      Black	 43	  3.3	B+41.8 points
      White	 44	  3.7	B+45.5 points
      Black	 45	  5.5	B+40.0 points
      White	 50	 11.0	B+54.1 points
      Black	 51	  9.9	B+44.2 points
      White	 54	  3.0	B+47.4 points
      White	 56	  5.6	B+51.9 points
      Black	 57	  3.9	B+48.0 points
      White	 58	  4.7	B+52.7 points
      Black	 59	  5.0	B+47.7 points
      Black	 63	  4.2	B+46.4 points
      White	 66	  3.2	B+51.0 points
      Black	 67	  3.1	B+47.9 points
      Black	 69	  4.0	B+44.7 points
      Black	 75	  6.9	B+37.0 points
      Black	 79	 13.7	B+27.4 points
      White	 80	 12.4	B+39.8 points
      Black	 81	 11.0	B+28.8 points
      White	 82	  3.6	B+32.4 points
      White	 84	 10.0	B+40.8 points
      Black	 85	  7.7	B+33.1 points
      White	 86	  8.7	B+41.8 points
      Black	 87	  3.6	B+38.2 points
      Black	 89	  7.7	B+32.8 points
      White	 90	  7.2	B+40.0 points
      Black	 91	  5.1	B+34.9 points
      Black	 93	  3.1	B+32.2 points
      White	 94	  6.8	B+39.0 points
      Black	 95	  4.2	B+34.8 points
      White	 96	  3.5	B+38.3 points
      Black	 97	  3.8	B+34.5 points
      White	 98	  6.1	B+40.6 points
      Black	 99	  7.6	B+33.0 points
      White	100	  8.0	B+41.0 points
      Black	101	  6.0	B+35.0 points
      Black	103	  4.7	B+31.5 points
      White	104	  4.9	B+36.4 points
      White	116	  3.3	B+39.2 points
      Black	117	  4.2	B+35.0 points
      White	118	  6.1	B+41.1 points
      Black	119	  6.9	B+34.2 points
      Black	125	  7.3	B+30.2 points
      White	130	  8.9	B+40.4 points
      White	132	  3.4	B+42.3 points
      Black	133	  3.3	B+39.0 points
      White	134	  3.8	B+42.8 points
      White	136	  3.5	B+44.3 points
      Black	137	  3.8	B+40.5 points
      White	140	  3.9	B+43.4 points
      White	142	  9.7	B+53.0 points
      Black	143	  9.8	B+43.2 points
      White	144	  3.6	B+46.8 points
      Black	145	 12.1	B+34.7 points
      White	152	  3.5	B+33.8 points
      Black	153	  4.0	B+29.8 points
      White	156	  4.3	B+36.0 points
      Black	157	  5.3	B+30.7 points
      White	158	  4.5	B+35.2 points
      Black	161	  3.2	B+31.5 points];B[dp](;W[]C[Mistake!

      This move is 12.9 points worse than the AI move.

      Black is ahead by 18.6 points.];B[pd](;W[]C[Mistake!

      This move is 12.3 points worse than the AI move.

      Black is ahead by 31.1 points.];B[dd](;W[]C[Mistake!

      This move is 13.8 points worse than the AI move.

      Black is ahead by 44.7 points.];B[pp];W[cf];B[fc];W[dj];B[cl];W[nq];B[qn];W[cn];B[dn];W[do];B[eo];W[co];B[dm];W[cp];B[dq];W[cq];B[cr];W[br];B[dr];W[bm];B[lq];W[mo];B[ko];W[fo];B[en];W[fq](;B[fp]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 41.3 points.];W[gp];B[ep];W[jq];B[kq](;W[go]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 45.2 points.](;B[bs]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 42.0 points.];W[ar](;B[ej]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 40.8 points.](;W[dk]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 45.1 points.](;B[ek]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 41.8 points.](;W[di]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 45.5 points.](;B[hl]C[Mistake!

      This move is 5.5 points worse than the AI move.

      Black is ahead by 40.0 points.];W[el];B[fl];W[dl];B[fm](;W[cm]C[Mistake!

      This move is 11 points worse than the AI move.

      Black is ahead by 54.1 points.](;B[lm]C[Mistake!

      This move is 9.9 points worse than the AI move.

      Black is ahead by 44.2 points.];W[jp];B[lo](;W[po]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 47.4 points.];B[qp](;W[oo]C[Mistake!

      This move is 5.6 points worse than the AI move.

      Black is ahead by 51.9 points.](;B[qo]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 48.0 points.](;W[om]C[Mistake!

      This move is 4.7 points worse than the AI move.

      Black is ahead by 52.7 points.](;B[pl]C[Mistake!

      This move is 5 points worse than the AI move.

      Black is ahead by 47.7 points.];W[ol];B[pk];W[ok](;B[pj]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 46.4 points.];W[im];B[lk](;W[jk]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 51.0 points.](;B[oj]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 47.9 points.];W[ml](;B[jl]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 44.7 points.];W[il];B[ik];W[hm];B[ij];W[ll](;B[jm]C[Mistake!

      This move is 6.9 points worse than the AI move.

      Black is ahead by 37.0 points.];W[jn];B[kk];W[kn](;B[df]C[Mistake!

      This move is 13.7 points worse than the AI move.

      Black is ahead by 27.4 points.](;W[be]C[Mistake!

      This move is 12.4 points worse than the AI move.

      Black is ahead by 39.8 points.](;B[ce]C[Mistake!

      This move is 11 points worse than the AI move.

      Black is ahead by 28.8 points.](;W[cd]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 32.4 points.];B[de](;W[bc]C[Mistake!

      This move is 10 points worse than the AI move.

      Black is ahead by 40.8 points.](;B[cc]C[Mistake!

      This move is 7.7 points worse than the AI move.

      Black is ahead by 33.1 points.](;W[bd]C[Mistake!

      This move is 8.7 points worse than the AI move.

      Black is ahead by 41.8 points.](;B[cb]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 38.2 points.];W[cg](;B[oc]C[Mistake!

      This move is 7.7 points worse than the AI move.

      Black is ahead by 32.8 points.](;W[qe]C[Mistake!

      This move is 7.2 points worse than the AI move.

      Black is ahead by 40.0 points.](;B[qd]C[Mistake!

      This move is 5.1 points worse than the AI move.

      Black is ahead by 34.9 points.];W[km](;B[hr]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 32.2 points.](;W[gr]C[Mistake!

      This move is 6.8 points worse than the AI move.

      Black is ahead by 39.0 points.](;B[nr]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 34.8 points.](;W[oq]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 38.3 points.](;B[or]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 34.5 points.](;W[pq]C[Mistake!

      This move is 6.1 points worse than the AI move.

      Black is ahead by 40.6 points.](;B[pr]C[Mistake!

      This move is 7.6 points worse than the AI move.

      Black is ahead by 33.0 points.](;W[jj]C[Mistake!

      This move is 8 points worse than the AI move.

      Black is ahead by 41.0 points.](;B[ji]C[Mistake!

      This move is 6 points worse than the AI move.

      Black is ahead by 35.0 points.];W[kl](;B[ii]C[Mistake!

      This move is 4.7 points worse than the AI move.

      Black is ahead by 31.5 points.](;W[qq]C[Mistake!

      This move is 4.9 points worse than the AI move.

      Black is ahead by 36.4 points.];B[jr];W[jc];B[lc];W[rd];B[rc];W[qi];B[rj];W[qj];B[rk];W[rf];B[qg](;W[pe]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 39.2 points.](;B[oe]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 35.0 points.](;W[pg]C[Mistake!

      This move is 6.1 points worse than the AI move.

      Black is ahead by 41.1 points.](;B[qh]C[Mistake!

      This move is 6.9 points worse than the AI move.

      Black is ahead by 34.2 points.];W[of];B[ne];W[ph];B[ri];W[nh](;B[hc]C[Mistake!

      This move is 7.3 points worse than the AI move.

      Black is ahead by 30.2 points.];W[gl];B[gk];W[hk];B[gj](;W[jf]C[Mistake!

      This move is 8.9 points worse than the AI move.

      Black is ahead by 40.4 points.];B[kg](;W[ld]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 42.3 points.](;B[mg]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 39.0 points.](;W[nj]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 42.8 points.];B[kc](;W[kd]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 44.3 points.](;B[jb]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 40.5 points.];W[mc];B[jd](;W[me]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 43.4 points.];B[nf](;W[lf]C[Mistake!

      This move is 9.7 points worse than the AI move.

      Black is ahead by 53.0 points.](;B[kf]C[Mistake!

      This move is 9.8 points worse than the AI move.

      Black is ahead by 43.2 points.](;W[rb]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 46.8 points.](;B[mh]C[Mistake!

      This move is 12.1 points worse than the AI move.

      Black is ahead by 34.7 points.];W[qc];B[eh];W[pc];B[od];W[hq];B[rq](;W[rr]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 33.8 points.](;B[rp]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 29.8 points.];W[qr];B[ir](;W[kj]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 36.0 points.](;B[og]C[Mistake!

      This move is 5.3 points worse than the AI move.

      Black is ahead by 30.7 points.](;W[oh]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 35.2 points.];B[pb];W[qb](;B[ob]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 31.5 points.];W[ng];B[mf])(;B[dh]C[I would play here.

      Black is ahead by 34.7 points.];W[ch];B[ob];W[bb];B[ba];W[ng];B[mf];W[ki];B[kh];W[mi]))(;W[ei]C[I would play here.

      Black is ahead by 30.7 points.];B[fh];W[ob];B[nb];W[pb];B[na];W[qf];B[sg]))(;B[dh]C[I would play here.

      Black is ahead by 36.0 points.];W[ob];B[nb];W[pb];B[mb];W[ch];B[ki];W[lj];B[bb];W[pi];B[ln]))(;W[ei]C[I would play here.

      Black is ahead by 31.7 points.];B[fh];W[dg];B[eg];W[ob];B[nb];W[pb];B[mb]))(;B[qb]C[I would play here.

      Black is ahead by 33.8 points.];W[pb];B[ob];W[qa];B[dh];W[ir];B[js];W[ch];B[kj];W[rp];B[ro]))(;W[ei]C[I would play here.

      Black is ahead by 30.3 points.];B[fh];W[ic];B[id];W[ob];B[nb];W[pb];B[mb]))(;B[sc]C[I would play here.

      Black is ahead by 46.8 points.];W[je];B[ic];W[fh];B[mh];W[gg];B[ni];W[jg];B[kh]))(;W[je]C[I would play here.

      Black is ahead by 43.2 points.];B[ic];W[lg];B[lh];W[kh];B[mf];W[ki];B[jh]))(;B[mh]C[I would play here.

      Black is ahead by 53.0 points.];W[kh];B[lg];W[mi];B[oi];W[ni];B[oh];W[jh]))(;W[fh]C[I would play here.

      Black is ahead by 43.3 points.];B[gg];W[ng];B[mf];W[hq];B[ir];W[gh];B[hh];W[fg]))(;W[lh]C[I would play here.

      Black is ahead by 39.5 points.];B[lg];W[fh];B[gg];W[hq];B[ir];W[kh]))(;B[eh]C[I would play here.

      Black is ahead by 44.3 points.];W[mc];B[mb];W[ic];B[lb];W[hd];B[gc];W[kf];B[lf]))(;W[fh]C[I would play here.

      Black is ahead by 40.8 points.];B[gg];W[lh];B[mh];W[mi];B[lg];W[gh];B[hg]))(;W[mc]C[I would play here.

      Black is ahead by 39.0 points.];B[kc];W[mf];B[me];W[lf];B[nf];W[ng];B[lg];W[rb]))(;B[mf]C[I would play here.

      Black is ahead by 42.3 points.];W[mc];B[kc];W[kd];B[jb];W[ic];B[ib];W[hd];B[kf];W[gc]))(;W[mf]C[I would play here.

      Black is ahead by 38.9 points.];B[le];W[fh];B[mi];W[sc];B[rb];W[qf]))(;W[mf]C[I would play here.

      Black is ahead by 31.5 points.];B[le];W[kh];B[kf];W[jg];B[mi]))(;B[mg]C[I would play here.

      Black is ahead by 37.5 points.];W[mf];B[lf];W[lg];B[lh];W[kg];B[mh]))(;B[of]C[I would play here.

      Black is ahead by 41.1 points.];W[ld];B[mc];W[qh];B[pf];W[qf];B[og];W[gc]))(;W[qc]C[I would play here.

      Black is ahead by 35.0 points.];B[qb];W[of];B[ne];W[pg];B[qh];W[ph];B[rh]))(;B[og]C[I would play here.

      Black is ahead by 39.2 points.];W[ng];B[nf];W[of];B[ne];W[pg];B[oh];W[ph]))(;W[pg]C[I would play here.

      Black is ahead by 35.9 points.];B[ph];W[ld];B[md];W[mc];B[kd];W[le]))(;W[mq]C[I would play here.

      Black is ahead by 31.5 points.];B[mr];W[kr];B[lr];W[kc];B[ic];W[nd];B[nc]))(;B[kj]C[I would play here.

      Black is ahead by 36.2 points.];W[mq];B[mr];W[kr];B[lr];W[kd];B[ic];W[id]))(;B[kl]C[I would play here.

      Black is ahead by 41.0 points.];W[ln];B[ji];W[kc];B[ld];W[lc];B[ic];W[md];B[me]))(;W[kr]C[I would play here.

      Black is ahead by 33.0 points.];B[lr];W[kl];B[jj];W[kd];B[ic];W[id]))(;B[kl]C[I would play here.

      Black is ahead by 40.6 points.];W[ln];B[jr];W[rd];B[rc];W[kd];B[hq];W[ic]))(;W[kd]C[I would play here.

      Black is ahead by 34.5 points.];B[le];W[hc];B[ke];W[ld];B[jd]))(;B[kl]C[I would play here.

      Black is ahead by 38.3 points.];W[ln];B[kd];W[pe];B[nf];W[ne];B[me];W[of];B[nd]))(;W[or]C[I would play here.

      Black is ahead by 34.8 points.];B[kl];W[mr];B[jo];W[io];B[mk];W[ln];B[kd];W[pe]))(;B[kl]C[I would play here.

      Black is ahead by 39.0 points.];W[ln];B[kd];W[pe];B[nf];W[ne];B[me];W[of]))(;W[kl]C[I would play here.

      Black is ahead by 32.2 points.];B[jj];W[kd];B[jr];W[gr];B[hq];W[gq];B[jo]))(;B[kl]C[I would play here.

      Black is ahead by 35.3 points.];W[mk];B[mi];W[ni];B[nj];W[mj];B[li];W[lj];B[kj]))(;B[ln]C[I would play here.

      Black is ahead by 40.0 points.];W[km];B[kl];W[jo];B[nn];W[mk];B[op];W[np];B[no];W[mi];B[ki]))(;W[km]C[I would play here.

      Black is ahead by 32.8 points.];B[kl];W[mk];B[mi];W[kd];B[jo];W[io];B[ln];W[in];B[hq]))(;B[ln]C[I would play here.

      Black is ahead by 40.5 points.];W[km];B[kl];W[jo];B[nn];W[mk];B[op];W[np];B[no];W[mi];B[ki]))(;B[ln]C[I would play here.

      Black is ahead by 41.8 points.];W[km];B[kl];W[jo];B[nn];W[mk];B[op];W[nj];B[li];W[nh]))(;W[km]C[I would play here.

      Black is ahead by 33.1 points.];B[kl];W[mk];B[cg];W[mi];B[hq];W[gq];B[jo]))(;B[ln]C[I would play here.

      Black is ahead by 40.8 points.];W[km];B[kl];W[jo];B[nn];W[mk];B[op];W[mi];B[ki];W[np];B[no]))(;W[km]C[I would play here.

      Black is ahead by 30.8 points.];B[kl];W[mk];B[jo];W[io];B[ln];W[in];B[hq];W[gq]))(;W[km]C[I would play here.

      Black is ahead by 28.8 points.];B[kl];W[mk];B[hq];W[ir];B[gq];W[fr]))(;B[ln]C[I would play here.

      Black is ahead by 39.8 points.];W[km];B[kl];W[jo];B[nn];W[mk];B[op];W[np];B[no];W[mi];B[ki]))(;W[km]C[I would play here.

      Black is ahead by 27.4 points.];B[kl];W[mk];B[mi];W[qc];B[qd];W[pc]))(;B[ln]C[I would play here.

      Black is ahead by 41.1 points.];W[km];B[kl];W[jo];B[nn];W[mk];B[op];W[nj];B[li];W[nh];B[no];W[lh];B[ki]))(;B[kl]C[I would play here.

      Black is ahead by 43.9 points.];W[km];B[jm];W[jn];B[kn];W[kk];B[km];W[lj];B[jo];W[kr];B[ip];W[io];B[ho];W[iq];B[in];W[lr];B[nc]))(;B[ll]C[I would play here.

      Black is ahead by 48.7 points.];W[nj];B[hq];W[hr];B[gr];W[gq];B[ir]))(;B[mj]C[I would play here.

      Black is ahead by 51.0 points.];W[jm];B[ni];W[hj];B[ei];W[gj]))(;W[oj]C[I would play here.

      Black is ahead by 47.8 points.];B[in];W[gr];B[hq];W[hr];B[io]))(;B[oj]C[I would play here.

      Black is ahead by 50.6 points.];W[nj];B[ni];W[pm];B[qm];W[mj];B[ml];W[mk]))(;B[hr]C[I would play here.

      Black is ahead by 52.7 points.];W[ir];B[hq];W[gr];B[hs];W[gq];B[kr];W[jr]))(;W[jr]C[I would play here.

      Black is ahead by 48.0 points.];B[ol];W[in];B[jm];W[pr];B[mr]))(;B[hq]C[I would play here.

      Black is ahead by 51.9 points.];W[hr];B[gr];W[fr];B[ir];W[jr];B[gq];W[iq];B[hs]))(;W[jr]C[I would play here.

      Black is ahead by 46.3 points.];B[in];W[io];B[hn];W[op];B[pn]))(;W[gr]C[I would play here.

      Black is ahead by 44.4 points.];B[pi];W[im];B[il];W[jm];B[jl];W[qq]))(;B[jp]C[I would play here.

      Black is ahead by 54.1 points.];W[im];B[kl];W[ip];B[iq];W[hq];B[jr];W[io]))(;W[jp]C[I would play here.

      Black is ahead by 43.1 points.];B[lo];W[in];B[jm];W[jr];B[pj];W[mm];B[np];W[mp]))(;B[jp]C[I would play here.

      Black is ahead by 45.5 points.];W[gm];B[fm];W[gk];B[ei];W[iq];B[ip];W[hp]))(;W[jp]C[I would play here.

      Black is ahead by 41.8 points.];B[lo];W[di];B[gm];W[in];B[im];W[jn];B[lm]))(;B[jp]C[I would play here.

      Black is ahead by 45.1 points.];W[gm];B[fl];W[iq];B[ip];W[hp];B[ei];W[di]))(;W[jp]C[I would play here.

      Black is ahead by 40.8 points.];B[lo];W[ei];B[fj];W[dk];B[gm];W[hm]))(;B[jp]C[I would play here.

      Black is ahead by 44.8 points.];W[gm];B[iq];W[hq];B[fl];W[gl];B[fj];W[gk]))(;B[jp]C[I would play here.

      Black is ahead by 45.2 points.];W[gm];B[iq];W[hq];B[ek];W[gk];B[ej];W[qq]))(;W[jp]C[I would play here.

      Black is ahead by 40.9 points.];B[lo];W[gm];B[in];W[go];B[ek]))(;B[hq]C[I would play here.

      Black is ahead by 44.9 points.];W[gq];B[hr];W[ep];B[bs];W[ar];B[eq];W[fp]))(;W[pp]C[I would play here.

      Black is ahead by 30.9 points.];B[qn];W[nq];B[qf];W[fc];B[jc]))(;W[dd]C[I would play here.

      Black is ahead by 18.8 points.];B[pp];W[qc];B[pc];W[qd];B[qf];W[rf]))(;W[pd]C[I would play here.

      Black is ahead by 5.7 points.];B[qp];W[dd];B[qc];W[pc];B[qd];W[qf];B[rf];W[rg];B[qe]))
    `,
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 6, 12).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.White,
    },
    additionalInfo: "Partida 13",
    gameEventRef: GameEventTypes.live,
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[0.5]RU[japanese]DT[2022-07-12]PW[Yuichiro Shimawaki]WR[-]PB[Philippe Fanaro]BR[-]RE[W+R]C[Mistakes:

      Player	Move	Loss 	Score

      White	  2	 12.9	B+18.6 points
      White	  4	 12.3	B+31.1 points
      White	  6	 13.8	B+44.7 points
      Black	 29	  4.1	B+42.9 points
      Black	 45	  3.3	B+38.2 points
      Black	 53	  3.6	B+35.0 points
      Black	 55	  3.4	B+33.8 points
      White	 56	  5.4	B+39.2 points
      Black	 57	  6.9	B+32.3 points
      White	 66	  2.9	B+33.2 points
      Black	 67	  4.1	B+29.1 points
      Black	 71	  3.8	B+26.5 points
      White	 72	  6.8	B+33.3 points
      Black	 73	  7.0	B+26.3 points
      Black	 75	  3.9	B+23.9 points
      Black	 77	 15.1	B+10.0 points];B[dp](;W[]C[Mistake!

      This move is 12.9 points worse than the AI move.

      Black is ahead by 18.6 points.];B[pd](;W[]C[Mistake!

      This move is 12.3 points worse than the AI move.

      Black is ahead by 31.1 points.];B[dd](;W[]C[Mistake!

      This move is 13.8 points worse than the AI move.

      Black is ahead by 44.7 points.];B[pp];W[cq];B[cp];W[dq];B[ep];W[fr];B[cg];W[nc];B[qf];W[id];B[kd];W[pe];B[oe];W[pc];B[oc];W[ob];B[od];W[qc];B[pb];W[qb];B[nb];W[pa](;B[mb]C[Mistake!

      This move is 4.1 points worse than the AI move.

      Black is ahead by 42.9 points.];W[qn];B[ql];W[qd];B[pf];W[on];B[qo];W[qm];B[pk];W[np];B[nq];W[mq];B[nr];W[op];B[pq];W[nk](;B[nj]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 38.2 points.];W[mj];B[ni];W[ok];B[pj];W[mi];B[mh];W[lh](;B[mg]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 35.0 points.];W[lg](;B[lf]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 33.8 points.](;W[mf]C[Mistake!

      This move is 5.4 points worse than the AI move.

      Black is ahead by 39.2 points.](;B[nf]C[Mistake!

      This move is 6.9 points worse than the AI move.

      Black is ahead by 32.3 points.];W[oj];B[oi];W[pi];B[me];W[ph];B[og];W[qj];B[ec](;W[kc]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 33.2 points.](;B[jc]C[Mistake!

      This move is 4.1 points worse than the AI move.

      Black is ahead by 29.1 points.];W[jd];B[ic];W[kb](;B[hd]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 26.5 points.](;W[ke]C[Mistake!

      This move is 6.8 points worse than the AI move.

      Black is ahead by 33.3 points.](;B[ld]C[Mistake!

      This move is 7 points worse than the AI move.

      Black is ahead by 26.3 points.];W[hc](;B[hb]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 23.9 points.];W[gc](;B[jb]C[Mistake!

      This move is 15.1 points worse than the AI move.

      Black is ahead by 10.0 points.];W[ja])(;B[gb]C[I would play here.

      Black is ahead by 25.1 points.];W[ib];B[gd];W[jb];B[fc];W[mk];B[dk];W[ro];B[rp];W[po]))(;B[fq]C[I would play here.

      Black is ahead by 27.8 points.];W[gr];B[bq];W[br];B[mk];W[pl];B[bo]))(;B[gc]C[I would play here.

      Black is ahead by 33.3 points.];W[ld];B[mc];W[he];B[mk];W[pl];B[ge];W[hf];B[kg]))(;W[hc]C[I would play here.

      Black is ahead by 26.5 points.];B[fq];W[gr];B[bq];W[br];B[mk];W[pl]))(;B[hc]C[I would play here.

      Black is ahead by 30.3 points.];W[mk];B[dj];W[ro];B[rp];W[po];B[qp];W[ce];B[cd]))(;B[pm]C[I would play here.

      Black is ahead by 33.2 points.];W[pn];B[mk];W[nm];B[lc];W[fd];B[fc];W[gc];B[ff]))(;W[mk]C[I would play here.

      Black is ahead by 30.3 points.];B[if];W[ro];B[rp];W[po];B[qp];W[kc];B[lc]))(;B[mk]C[I would play here.

      Black is ahead by 39.2 points.];W[ro];B[li];W[lj];B[ki];W[rp];B[lk]))(;W[oj]C[I would play here.

      Black is ahead by 33.8 points.];B[oi];W[lk];B[fc];W[pi];B[kf];W[mf];B[oh]))(;B[mk]C[I would play here.

      Black is ahead by 37.2 points.];W[kj];B[mp];W[ro];B[mo];W[oj];B[oi]))(;B[mk]C[I would play here.

      Black is ahead by 38.6 points.];W[ol];B[fc];W[oj];B[nh];W[lg]))(;B[fc]C[I would play here.

      Black is ahead by 41.5 points.];W[lc];B[kc];W[ro];B[mp];W[lb];B[kb]))(;B[mc]C[I would play here.

      Black is ahead by 47.0 points.];W[fc];B[gq];W[qn];B[ql];W[on];B[np]))(;W[pp]C[I would play here.

      Black is ahead by 30.9 points.];B[qn];W[nq];B[qf];W[fc];B[jc]))(;W[dd]C[I would play here.

      Black is ahead by 18.8 points.];B[pp];W[cq];B[dq];W[cp];B[do];W[bn];B[cc]))(;W[pd]C[I would play here.

      Black is ahead by 5.7 points.];B[dc];W[pq];B[qo];W[pm];B[oo];W[np]))
    `,
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Yuichiro Shimawaki"),
    date: new Date(2022, 6, 13).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.White,
      difference: 3.5,
    },
    additionalInfo: "Partida 14",
    gameEventRef: GameEventTypes.live,
    sgf: `
      (;GM[1]FF[4]SZ[19]AP[Sabaki:0.52.1]CA[UTF-8]ST[2]KM[0.5]RU[japanese]DT[2022-07-13]PW[Yuichiro Shimawaki]WR[-]PB[Philippe Fanaro]BR[-]RE[W+3.5]C[Mistakes:

      Player	Move	Loss 	Score

      White	  2	 12.9	B+18.6 points
      White	  4	 12.6	B+31.2 points
      White	  6	 14.2	B+45.0 points
      White	 28	  3.1	B+45.9 points
      White	 30	  4.2	B+48.3 points
      White	 32	  4.3	B+50.0 points
      Black	 33	  4.6	B+45.4 points
      Black	 47	  3.1	B+44.6 points
      Black	 49	  3.8	B+43.4 points
      Black	 53	  6.5	B+40.1 points
      White	 54	  7.6	B+47.7 points
      Black	 55	  8.2	B+39.5 points
      Black	 61	  4.7	B+37.8 points
      Black	 63	  5.7	B+34.6 points
      White	 64	  4.4	B+39.0 points
      Black	 65	  6.6	B+32.4 points
      White	 66	  4.5	B+36.9 points
      Black	 67	  3.7	B+33.2 points
      Black	 79	  3.3	B+33.1 points
      Black	 87	  3.1	B+34.2 points
      Black	 93	  3.7	B+31.4 points
      White	 94	  4.5	B+35.9 points
      White	 98	  4.3	B+38.5 points
      Black	109	  4.3	B+38.9 points
      White	112	  3.0	B+41.8 points
      Black	115	  5.4	B+37.1 points
      White	118	  4.6	B+40.2 points
      Black	119	  4.9	B+35.3 points
      White	120	  2.9	B+38.2 points
      White	124	  3.9	B+39.8 points
      White	126	  5.5	B+44.5 points
      Black	129	  4.5	B+40.5 points
      Black	131	 13.7	B+27.7 points
      White	134	 12.8	B+40.4 points
      Black	143	  7.1	B+32.9 points
      White	144	  5.3	B+38.2 points
      Black	145	  7.7	B+30.5 points
      White	146	  6.4	B+36.9 points
      Black	147	  5.9	B+31.0 points
      White	148	  3.6	B+34.6 points
      Black	149	  5.2	B+29.4 points
      White	150	  4.6	B+34.0 points
      White	152	  3.1	B+36.2 points
      White	154	  6.9	B+42.5 points
      Black	155	  7.0	B+35.5 points
      White	156	  7.7	B+43.2 points
      Black	157	  6.8	B+36.4 points
      White	158	  3.2	B+39.6 points
      White	162	  3.6	B+41.7 points
      Black	163	  5.0	B+36.7 points
      White	164	  3.2	B+39.9 points
      Black	165	  4.2	B+35.7 points
      White	166	  4.6	B+40.3 points
      Black	167	  4.0	B+36.3 points
      Black	169	  6.6	B+30.5 points
      White	170	  4.6	B+35.1 points
      White	172	  4.0	B+37.9 points
      Black	173	  3.5	B+34.4 points
      White	176	  4.4	B+38.3 points
      Black	177	  5.4	B+32.9 points
      Black	179	  4.7	B+30.1 points
      White	180	  5.6	B+35.7 points
      Black	181	  6.2	B+29.5 points
      White	182	  7.9	B+37.4 points
      Black	183	  7.6	B+29.8 points
      White	184	  5.8	B+35.6 points
      Black	185	  5.0	B+30.6 points
      Black	191	  5.0	B+25.3 points
      White	194	  4.6	B+27.9 points
      Black	199	  7.1	B+17.4 points
      White	200	  7.5	B+24.9 points
      Black	201	  3.6	B+21.3 points
      White	202	  5.3	B+26.6 points
      Black	203	 16.0	B+10.6 points
      White	204	  9.8	B+20.4 points
      Black	205	 10.2	B+10.2 points
      Black	211	  3.0	B+8.6 points
      White	212	  3.1	B+11.7 points
      Black	213	  7.1	B+4.6 points
      White	234	  3.4	B+5.7 points
      White	236	  3.5	B+8.2 points
      Black	237	  9.0	W+0.8 points
      White	238	  4.1	B+3.3 points
      Black	247	  4.6	W+1.7 points];B[dp](;W[]C[Mistake!

      This move is 12.9 points worse than the AI move.

      Black is ahead by 18.6 points.];B[pd](;W[]C[Mistake!

      This move is 12.6 points worse than the AI move.

      Black is ahead by 31.2 points.];B[dd](;W[]C[Mistake!

      This move is 14.2 points worse than the AI move.

      Black is ahead by 45.0 points.];B[pp];W[qc];B[qd];W[pc];B[od];W[nb];B[qm];W[fq];B[hq];W[go];B[eo];W[cq];B[er];W[cp];B[cn];W[co];B[dn];W[do];B[ep];W[en];B[dr](;W[bn]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 45.9 points.];B[bm](;W[bo]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 48.3 points.];B[dl](;W[ip]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 50.0 points.](;B[cr]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 45.4 points.];W[cm];B[dm];W[cl];B[ck];W[bl];B[bk];W[am];B[fn];W[dk];B[fl];W[cj];B[kq];W[gm](;B[fm]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 44.6 points.];W[iq](;B[ir]C[Mistake!

      This move is 3.8 points worse than the AI move.

      Black is ahead by 43.4 points.];W[jr];B[hr];W[jq](;B[kr]C[Mistake!

      This move is 6.5 points worse than the AI move.

      Black is ahead by 40.1 points.](;W[ks]C[Mistake!

      This move is 7.6 points worse than the AI move.

      Black is ahead by 47.7 points.](;B[hp]C[Mistake!

      This move is 8.2 points worse than the AI move.

      Black is ahead by 39.5 points.];W[ho];B[io];W[jo];B[in];W[kp](;B[hm]C[Mistake!

      This move is 4.7 points worse than the AI move.

      Black is ahead by 37.8 points.];W[jm](;B[cf]C[Mistake!

      This move is 5.7 points worse than the AI move.

      Black is ahead by 34.6 points.](;W[dj]C[Mistake!

      This move is 4.4 points worse than the AI move.

      Black is ahead by 39.0 points.](;B[pq]C[Mistake!

      This move is 6.6 points worse than the AI move.

      Black is ahead by 32.4 points.](;W[on]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 36.9 points.](;B[pm]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 33.2 points.];W[hl];B[gn];W[db];B[dc];W[eb];B[cb];W[bb];B[cc];W[hc];B[bh];W[ch](;B[bg]C[Mistake!

      This move is 3.3 points worse than the AI move.

      Black is ahead by 33.1 points.];W[ca];B[fc];W[ec];B[ed];W[fb];B[bj];W[gj](;B[fj]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 34.2 points.];W[fi];B[gk];W[hj];B[hk];W[ij](;B[ik]C[Mistake!

      This move is 3.7 points worse than the AI move.

      Black is ahead by 31.4 points.](;W[jj]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 35.9 points.];B[nc];W[oc];B[mc](;W[nd]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 38.5 points.];B[mb];W[ob];B[rc];W[rb];B[rd];W[md];B[ld];W[mf];B[ic];W[sb](;B[hd]C[Mistake!

      This move is 4.3 points worse than the AI move.

      Black is ahead by 38.9 points.];W[gc];B[nf](;W[me]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 41.8 points.];B[mg];W[lg](;B[ke]C[Mistake!

      This move is 5.4 points worse than the AI move.

      Black is ahead by 37.1 points.];W[ng];B[mh](;W[of]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 40.2 points.](;B[qh]C[Mistake!

      This move is 4.9 points worse than the AI move.

      Black is ahead by 35.3 points.](;W[kf]C[Mistake!

      This move is 2.9 points worse than the AI move.

      Black is ahead by 38.2 points.];B[nh];W[og];B[pi](;W[kc]C[Mistake!

      This move is 3.9 points worse than the AI move.

      Black is ahead by 39.8 points.];B[kb](;W[jc]C[Mistake!

      This move is 5.5 points worse than the AI move.

      Black is ahead by 44.5 points.];B[ib];W[je](;B[gd]C[Mistake!

      This move is 4.5 points worse than the AI move.

      Black is ahead by 40.5 points.];W[fd](;B[jd]C[Mistake!

      This move is 13.7 points worse than the AI move.

      Black is ahead by 27.7 points.];W[kd];B[id](;W[jb]C[Mistake!

      This move is 12.8 points worse than the AI move.

      Black is ahead by 40.4 points.];B[fe];W[hb];B[ja];W[le];B[lc];W[ke];B[gh];W[gi](;B[eh]C[Mistake!

      This move is 7.1 points worse than the AI move.

      Black is ahead by 32.9 points.](;W[fh]C[Mistake!

      This move is 5.3 points worse than the AI move.

      Black is ahead by 38.2 points.](;B[fg]C[Mistake!

      This move is 7.7 points worse than the AI move.

      Black is ahead by 30.5 points.](;W[ha]C[Mistake!

      This move is 6.4 points worse than the AI move.

      Black is ahead by 36.9 points.](;B[ei]C[Mistake!

      This move is 5.9 points worse than the AI move.

      Black is ahead by 31.0 points.](;W[ej]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 34.6 points.](;B[fk]C[Mistake!

      This move is 5.2 points worse than the AI move.

      Black is ahead by 29.4 points.](;W[ia]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 34.0 points.];B[mq](;W[ok]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 36.2 points.];B[nl](;W[qg]C[Mistake!

      This move is 6.9 points worse than the AI move.

      Black is ahead by 42.5 points.](;B[rg]C[Mistake!

      This move is 7 points worse than the AI move.

      Black is ahead by 35.5 points.](;W[rf]C[Mistake!

      This move is 7.7 points worse than the AI move.

      Black is ahead by 43.2 points.](;B[qf]C[Mistake!

      This move is 6.8 points worse than the AI move.

      Black is ahead by 36.4 points.](;W[pg]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 39.6 points.];B[kl];W[ll];B[kk](;W[lk]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 41.7 points.](;B[lj]C[Mistake!

      This move is 5 points worse than the AI move.

      Black is ahead by 36.7 points.](;W[mp]C[Mistake!

      This move is 3.2 points worse than the AI move.

      Black is ahead by 39.9 points.](;B[nq]C[Mistake!

      This move is 4.2 points worse than the AI move.

      Black is ahead by 35.7 points.](;W[lm]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 40.3 points.](;B[kj]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 36.3 points.];W[nk](;B[qk]C[Mistake!

      This move is 6.6 points worse than the AI move.

      Black is ahead by 30.5 points.](;W[oi]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 35.1 points.];B[rh](;W[pj]C[Mistake!

      This move is 4 points worse than the AI move.

      Black is ahead by 37.9 points.](;B[jh]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 34.4 points.];W[eg];B[dg](;W[gg]C[Mistake!

      This move is 4.4 points worse than the AI move.

      Black is ahead by 38.3 points.](;B[ff]C[Mistake!

      This move is 5.4 points worse than the AI move.

      Black is ahead by 32.9 points.];W[hh](;B[hf]C[Mistake!

      This move is 4.7 points worse than the AI move.

      Black is ahead by 30.1 points.](;W[ig]C[Mistake!

      This move is 5.6 points worse than the AI move.

      Black is ahead by 35.7 points.](;B[mn]C[Mistake!

      This move is 6.2 points worse than the AI move.

      Black is ahead by 29.5 points.](;W[qe]C[Mistake!

      This move is 7.9 points worse than the AI move.

      Black is ahead by 37.4 points.](;B[sf]C[Mistake!

      This move is 7.6 points worse than the AI move.

      Black is ahead by 29.8 points.](;W[pf]C[Mistake!

      This move is 5.8 points worse than the AI move.

      Black is ahead by 35.6 points.](;B[re]C[Mistake!

      This move is 5 points worse than the AI move.

      Black is ahead by 30.6 points.];W[qj];B[rj];W[rk];B[rl];W[ri](;B[sk]C[Mistake!

      This move is 5 points worse than the AI move.

      Black is ahead by 25.3 points.];W[qi];B[si](;W[mj]C[Mistake!

      This move is 4.6 points worse than the AI move.

      Black is ahead by 27.9 points.];B[ml];W[mm];B[ol];W[mk](;B[ls]C[Mistake!

      This move is 7.1 points worse than the AI move.

      Black is ahead by 17.4 points.](;W[js]C[Mistake!

      This move is 7.5 points worse than the AI move.

      Black is ahead by 24.9 points.](;B[lq]C[Mistake!

      This move is 3.6 points worse than the AI move.

      Black is ahead by 21.3 points.](;W[lp]C[Mistake!

      This move is 5.3 points worse than the AI move.

      Black is ahead by 26.6 points.](;B[lh]C[Mistake!

      This move is 16 points worse than the AI move.

      Black is ahead by 10.6 points.](;W[np]C[Mistake!

      This move is 9.8 points worse than the AI move.

      Black is ahead by 20.4 points.](;B[bq]C[Mistake!

      This move is 10.2 points worse than the AI move.

      Black is ahead by 10.2 points.];W[jk];B[jl];W[im];B[il];W[hn](;B[gp]C[Mistake!

      This move is 3 points worse than the AI move.

      Black is ahead by 8.6 points.](;W[ms]C[Mistake!

      This move is 3.1 points worse than the AI move.

      Black is ahead by 11.7 points.](;B[lr]C[Mistake!

      This move is 7.1 points worse than the AI move.

      Black is ahead by 4.6 points.];W[bi];B[ai];W[ak];B[ci];W[di];B[dh];W[bi];B[jg];W[if];B[ci];W[oq];B[or];W[bi];B[da];W[ea];B[ci];W[op];B[nr];W[bi];B[hg](;W[gf]C[Mistake!

      This move is 3.4 points worse than the AI move.

      Black is ahead by 5.7 points.];B[ci](;W[po]C[Mistake!

      This move is 3.5 points worse than the AI move.

      Black is ahead by 8.2 points.](;B[ek]C[Mistake!

      This move is 9 points worse than the AI move.

      White is ahead by 0.8 points.](;W[qp]C[Mistake!

      This move is 4.1 points worse than the AI move.

      Black is ahead by 3.3 points.];B[qq];W[rp];B[he];W[ih];B[rq];W[rn];B[pk];W[ph](;B[om]C[Mistake!

      This move is 4.6 points worse than the AI move.

      White is ahead by 1.7 points.];W[sq];B[sr];W[sp];B[rr];W[bc];B[bd];W[ac];B[bp];W[br];B[ar];W[bs];B[cs];W[ap];B[as];W[ao];B[qf];W[dq];B[eq];W[rf];B[km];W[kn];B[qf];W[pr];B[ps];W[rf];B[pn];W[oo];B[qf];W[os];B[qr];W[rf];B[aj];W[al];B[qf];W[qs];B[ns];W[rf];B[ba];W[aa];B[qf];W[ji];B[ki];W[rf];B[nm];W[nn];B[qf];W[be];B[ce];W[rf];B[ad];W[se];B[qf];W[ae];B[cd];W[rf];B[sd];W[qf];B[sh];W[kg];B[kh];W[br];B[bs];W[aq];B[br];W[oe];B[sg];W[qn];B[sm];W[sn];B[fo];W[jn];B[is];W[rm];B[sl];W[ni];B[mi];W[fc];B[ge];W[gh];B[gl];W[hm];B[sj];W[ie];B[se];W[sc];B[pe];W[oh])(;B[bc]C[I would play here.

      Black is ahead by 2.9 points.];W[fp];B[fo];W[jn];B[fr];W[br];B[bs];W[se];B[sd];W[bp];B[sp];W[qo];B[qf];W[ki];B[ji];W[rf]))(;W[qo]C[I would play here.

      White is ahead by 0.8 points.];B[rp];W[ge];B[fc];W[qr];B[pr];W[fd];B[qb];W[fc];B[pa];W[pb];B[ra];W[qa];B[aj];W[sa];B[al];W[br];B[bs];W[ak];B[ar];W[ao]))(;B[he]C[I would play here.

      Black is ahead by 8.2 points.];W[qo];B[rp];W[ro];B[rq];W[pk];B[pl];W[ih];B[aj];W[al];B[bc];W[se];B[sd];W[pe];B[qf]))(;W[qq]C[I would play here.

      Black is ahead by 4.7 points.];B[aj];W[qp];B[po];W[qr];B[pr];W[qo];B[pn];W[br];B[he];W[ji];B[ki];W[ih];B[al];W[bs];B[ar]))(;W[ih]C[I would play here.

      Black is ahead by 2.3 points.];B[ci];W[qr];B[pr];W[bi];B[fo];W[po];B[qo];W[jn];B[ci];W[qp];B[pn];W[bi];B[oo];W[aj];B[bc];W[se];B[qf];W[fp];B[fr];W[rf];B[sd];W[no];B[po];W[om];B[qf];W[br];B[bs]))(;B[aj]C[I would play here.

      Black is ahead by 11.7 points.];W[ki];B[li];W[kh];B[lr];W[oq];B[or];W[op];B[nr];W[bc];B[bd]))(;W[dh]C[I would play here.

      Black is ahead by 8.6 points.];B[ef];W[di];B[eg];W[bi];B[ai];W[aj];B[hg];W[ih];B[ci];W[el];B[em];W[bi];B[if];W[jg];B[ci]))(;B[hg]C[I would play here.

      Black is ahead by 11.6 points.];W[ki];B[ji];W[gf];B[if];W[jf];B[ge]))(;B[il]C[I would play here.

      Black is ahead by 20.4 points.];W[dh];B[ef];W[di];B[bi];W[eg];B[op];W[bc];B[bd];W[ac];B[nn]))(;W[jk]C[I would play here.

      Black is ahead by 10.6 points.];B[jl];W[im];B[il];W[hn];B[aj];W[fr];B[al];W[ak];B[gp];W[al];B[bi];W[bc];B[bd]))(;B[km]C[I would play here.

      Black is ahead by 26.6 points.];W[kn];B[bi];W[il];B[im];W[ki];B[li];W[lh];B[mi];W[bc];B[bd]))(;W[dh]C[I would play here.

      Black is ahead by 21.3 points.];B[ef];W[di];B[lp];W[jn];B[il];W[ln];B[eg];W[bi]))(;B[km]C[I would play here.

      Black is ahead by 24.9 points.];W[gp];B[fr];W[gr];B[gq];W[jn]))(;W[jk]C[I would play here.

      Black is ahead by 17.4 points.];B[js];W[jl];B[bi];W[jp];B[jn];W[kn];B[lp];W[ko];B[il];W[lo]))(;B[km]C[I would play here.

      Black is ahead by 24.5 points.];W[kn];B[bi];W[gp];B[fr];W[gr];B[gq]))(;W[dh]C[I would play here.

      Black is ahead by 23.3 points.];B[ef];W[di];B[eg];W[bi];B[ai];W[ak];B[ci];W[gp];B[aj]))(;B[oh]C[I would play here.

      Black is ahead by 30.3 points.];W[ph];B[qi];W[sj];B[pe];W[om];B[no];W[pl];B[ql];W[qo];B[po]))(;B[oh]C[I would play here.

      Black is ahead by 35.6 points.];W[lp];B[mj];W[lq];B[mk];W[se];B[sg]))(;W[lp]C[I would play here.

      Black is ahead by 29.8 points.];B[oh];W[lq];B[mr];W[lr];B[bi];W[ph]))(;B[mj]C[I would play here.

      Black is ahead by 37.4 points.];W[lp];B[mk];W[lq];B[sf];W[oh];B[bi];W[pf]))(;W[lp]C[I would play here.

      Black is ahead by 29.5 points.];B[oh];W[lq];B[mr];W[lr];B[bi]))(;B[km]C[I would play here.

      Black is ahead by 35.7 points.];W[ln];B[oh];W[ol];B[om];W[nm];B[nn];W[ml];B[bi]))(;W[dh]C[I would play here.

      Black is ahead by 30.1 points.];B[ef];W[qj];B[oh];W[ph];B[qi];W[rj];B[oe]))(;B[km]C[I would play here.

      Black is ahead by 34.8 points.];W[ln];B[oh];W[ol];B[om];W[nm];B[nn];W[ml]))(;B[ef]C[I would play here.

      Black is ahead by 38.3 points.];W[hh];B[km];W[kn];B[mk];W[gp];B[ls];W[js];B[fr];W[ml]))(;W[ef]C[I would play here.

      Black is ahead by 33.9 points.];B[dh];W[gg];B[ff];W[hh];B[km];W[jn];B[il];W[lo];B[mk];W[lq]))(;B[km]C[I would play here.

      Black is ahead by 37.9 points.];W[gp];B[fr];W[kn];B[mk];W[ml];B[mj]))(;W[bi]C[I would play here.

      Black is ahead by 33.9 points.];B[ai];W[eg];B[dg];W[ci];B[aj];W[ef];B[dh];W[ff]))(;W[rh]C[I would play here.

      Black is ahead by 30.5 points.];B[ri];W[sg];B[no];W[np];B[oo];W[op];B[oq];W[mj]))(;B[km]C[I would play here.

      Black is ahead by 37.1 points.];W[kn];B[mk];W[lq];B[lr];W[lo];B[mn];W[mr];B[lp]))(;B[mj]C[I would play here.

      Black is ahead by 40.3 points.];W[jk];B[rh];W[kj];B[ef];W[qe];B[sf]))(;W[km]C[I would play here.

      Black is ahead by 35.7 points.];B[il];W[nk];B[nm];W[lo];B[mk];W[lq];B[lr]))(;B[mr]C[I would play here.

      Black is ahead by 39.9 points.];W[km];B[il];W[nk];B[nm];W[mn];B[pk];W[mj];B[oi]))(;W[km]C[I would play here.

      Black is ahead by 36.7 points.];B[kj];W[mm];B[mo];W[mj];B[mk];W[nj]))(;B[km]C[I would play here.

      Black is ahead by 41.7 points.];W[lm];B[kn];W[mp];B[mr];W[lj];B[kj];W[li]))(;W[km]C[I would play here.

      Black is ahead by 38.1 points.];B[lk];W[ml];B[mk];W[mp];B[nq];W[nm];B[no];W[mo];B[nn]))(;W[mp]C[I would play here.

      Black is ahead by 36.4 points.];B[nq];W[pg];B[rh];W[jn];B[il];W[ll]))(;B[kl]C[I would play here.

      Black is ahead by 43.2 points.];W[ll];B[lk];W[ml];B[km];W[mk];B[kk];W[mp]))(;W[ll]C[I would play here.

      Black is ahead by 35.5 points.];B[nk];W[eg];B[dg];W[ef];B[dh];W[ff];B[ee]))(;B[kl]C[I would play here.

      Black is ahead by 42.5 points.];W[ll];B[lk];W[ml];B[mk];W[mp];B[np];W[mn]))(;W[ll]C[I would play here.

      Black is ahead by 35.6 points.];B[mj];W[bi];B[ai];W[eg];B[dg];W[ef];B[dh]))(;W[mp]C[I would play here.

      Black is ahead by 33.1 points.];B[nq];W[jn];B[il];W[eg];B[dg];W[kk]))(;W[eg]C[I would play here.

      Black is ahead by 29.4 points.];B[dg];W[ef];B[dh];W[ff];B[mq];W[mp];B[np];W[lp]))(;B[mq]C[I would play here.

      Black is ahead by 34.6 points.];W[mp];B[np];W[lp];B[ls];W[js];B[mr];W[no]))(;W[nq]C[I would play here.

      Black is ahead by 31.0 points.];B[ia];W[bc];B[ef];W[qf];B[rf];W[rg];B[qg]))(;B[mq]C[I would play here.

      Black is ahead by 36.9 points.];W[mp];B[ls];W[js];B[mr];W[jn];B[il];W[np];B[ia]))(;W[nq]C[I would play here.

      Black is ahead by 30.5 points.];B[np];W[mp];B[nr];W[mr];B[oq];W[mq]))(;B[mq]C[I would play here.

      Black is ahead by 38.2 points.];W[mp];B[np];W[lp];B[bc];W[ga];B[nr]))(;W[nq]C[I would play here.

      Black is ahead by 32.9 points.];B[ei];W[jn];B[il];W[fh];B[eg];W[bc];B[bd]))(;B[mq]C[I would play here.

      Black is ahead by 40.0 points.];W[mp];B[np];W[lp];B[mr];W[no];B[nl]))(;W[fe]C[I would play here.

      Black is ahead by 27.6 points.];B[lc];W[le];B[jb];W[bc];B[bi];W[be];B[ce];W[dg];B[bd];W[ad];B[cd]))(;B[fe]C[I would play here.

      Black is ahead by 41.4 points.];W[id];B[jb];W[lc];B[hb];W[gb];B[lb];W[jd];B[ha];W[ga];B[ma];W[bc];B[bd];W[ac];B[mq];W[jn]))(;B[jb]C[I would play here.

      Black is ahead by 45.0 points.];W[fd];B[jd];W[ie];B[id];W[bc]))(;W[fd]C[I would play here.

      Black is ahead by 39.0 points.];B[jc];W[nq];B[oe];W[ne];B[pf];W[bc];B[bd]))(;W[ib]C[I would play here.

      Black is ahead by 35.9 points.];B[mq];W[jk];B[jc];W[je];B[jb]))(;W[nh]C[I would play here.

      Black is ahead by 35.3 points.];B[lf];W[ib];B[mi];W[ni];B[mj];W[lc];B[mq]))(;B[nh]C[I would play here.

      Black is ahead by 40.2 points.];W[og];B[qg];W[qh];B[oe];W[ne];B[ph];W[oh]))(;W[nh]C[I would play here.

      Black is ahead by 35.6 points.];B[lf];W[of];B[qh];W[qg];B[rg];W[mi];B[lh]))(;B[ng]C[I would play here.

      Black is ahead by 42.5 points.];W[kf];B[ke];W[ib];B[lh];W[jf];B[jb];W[jc]))(;W[le]C[I would play here.

      Black is ahead by 38.8 points.];B[kd];W[mg];B[hb];W[fd];B[ng];W[nh];B[mh]))(;B[gc]C[I would play here.

      Black is ahead by 43.2 points.];W[hd];B[gb];W[hb];B[ha];W[ia];B[ga];W[ib];B[ge];W[he];B[nf];W[me]))(;W[mb]C[I would play here.

      Black is ahead by 34.2 points.];B[mq];W[mp];B[ls];W[js];B[mr];W[jn];B[il]))(;W[jn]C[I would play here.

      Black is ahead by 31.4 points.];B[il];W[nq];B[np];W[mp];B[pi];W[rc]))(;B[mq]C[I would play here.

      Black is ahead by 35.1 points.];W[ik];B[jn];W[kn];B[hn];W[lp];B[km]))(;B[mq]C[I would play here.

      Black is ahead by 37.3 points.];W[mp];B[ls];W[js];B[mr];W[jn];B[il]))(;B[mq]C[I would play here.

      Black is ahead by 36.4 points.];W[ph];B[il];W[jn];B[nc];W[mb]))(;B[jn]C[I would play here.

      Black is ahead by 36.9 points.];W[kn];B[km];W[ln];B[jl];W[lq];B[mc]))(;W[hl]C[I would play here.

      Black is ahead by 32.4 points.];B[gn];W[jn];B[il];W[nq];B[pj];W[mc];B[np]))(;B[jn]C[I would play here.

      Black is ahead by 39.0 points.];W[kn];B[km];W[lm];B[kl];W[ln];B[ls];W[js];B[is];W[jp]))(;W[hl]C[I would play here.

      Black is ahead by 34.6 points.];B[gn];W[jn];B[il];W[dj];B[mq];W[mr];B[ls]))(;B[jn]C[I would play here.

      Black is ahead by 40.3 points.];W[kn];B[km];W[lq];B[ln];W[ko];B[jl];W[cf];B[mc];W[fc]))(;B[mq]C[I would play here.

      Black is ahead by 42.5 points.];W[jm];B[im];W[il];B[hl];W[jn];B[hm];W[js];B[dj]))(;B[kp]C[I would play here.

      Black is ahead by 47.7 points.];W[jo];B[ln];W[fr];B[gn];W[lr];B[mq]))(;W[kp]C[I would play here.

      Black is ahead by 40.1 points.];B[mq];W[mp];B[np];W[mo];B[no];W[nq];B[mr];W[lm]))(;B[kp]C[I would play here.

      Black is ahead by 46.6 points.];W[jm];B[kr];W[lm];B[bj];W[ci];B[dj];W[ek]))(;B[ko]C[I would play here.

      Black is ahead by 47.2 points.];W[jm];B[km];W[kl];B[lm];W[hr];B[jr]))(;B[gn]C[I would play here.

      Black is ahead by 47.7 points.];W[hn];B[hm];W[in];B[hl];W[iq];B[ko];W[hr];B[jr]))(;B[fn]C[I would play here.

      Black is ahead by 50.0 points.];W[em];B[cr];W[br];B[fl];W[iq];B[kq];W[kp]))(;W[fn]C[I would play here.

      Black is ahead by 45.7 points.];B[gp];W[ho];B[jp];W[iq];B[ip];W[hp]))(;W[em]C[I would play here.

      Black is ahead by 44.1 points.];B[dl];W[bl];B[cl];W[am];B[bk];W[cm];B[dm];W[gq];B[fn];W[el];B[fo]))(;W[em]C[I would play here.

      Black is ahead by 42.8 points.];B[bm];W[bo];B[cj];W[dl];B[cl];W[cr]))(;W[pp]C[I would play here.

      Black is ahead by 30.8 points.];B[qn];W[nq];B[fq];W[fc];B[cf]))(;W[dd]C[I would play here.

      Black is ahead by 18.6 points.];B[pp];W[cn];B[fq];W[qc];B[qd]))(;W[pd]C[I would play here.

      Black is ahead by 5.7 points.];B[qp];W[dd];B[cc];W[dc];B[cd];W[cf];B[ce]))
    `,
  },
];
