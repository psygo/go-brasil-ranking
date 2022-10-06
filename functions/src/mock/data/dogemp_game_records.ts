import {
  Color,
  GameRecord,
  Hosts,
} from "../../../../frontend/src/models/game_record";

import { findEventRef, findPlayerRef } from "./fake_game_records";

export const dogempGames: readonly GameRecord[] = [
  // ***************************************************************************
  // Nov 2021
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Audrey Luciano Filho"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2021, 10, 2).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "38321258",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-11-01]PC[OGS: https://online-go.com/game/38321258]GN[1a Partida do Dojo | DOGemP]PB[AudreyLucianoFilho]PW[psygo]BR[11k]WR[3d]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[0.5]RU[Japanese]HA[9]AB[jd][jp][dj][pj][jj][dd][pp][pd][dp]AP[Sabaki:0.52.1];W[qf];B[re];W[nc];B[ne];W[pc];B[qc];W[od];B[pe];W[oe];B[of];W[pf];B[og];W[rc];B[qd];W[qb];B[pb];W[oc];B[rb];W[qh];B[ri];W[pi];B[oi];W[qj];B[qi];W[ph];B[qk];W[oh];B[oj];W[nh];B[mf];W[lc];B[mi];W[mh];B[lh];W[lg];B[mg];W[ni];B[nj];W[li];B[kh];W[mj];B[kf];W[le]C[psygo: Esqueci de te desejar boa sorte, Audrey
      psygo: Boa sorte
      AudreyLucianoFilho: Boa
      ];B[ke];W[lf];B[kg];W[ld];B[ml];W[rd];B[qe];W[se];B[rf];W[rg];B[qa];W[sf];B[qb];W[sd];B[nb];W[ob];B[mb];W[mc];B[lb];W[oa];B[kc];W[fq];B[eq];W[fp];B[hq];W[do];B[ep];W[eo];B[fo];W[cp];B[fr];W[er];B[dq];W[dr];B[cq];W[bq];B[cm];W[qq];B[qp];W[pq];B[nq];W[oq];B[op];W[nr];B[mq];W[mr];B[kr];W[rp];B[ro];W[rq];B[gr];W[cc];B[cf];W[dc];B[ec];W[eb];B[cd];W[fc];B[ed];W[gb];B[ea];W[bc];B[gd];W[fd];B[fe];W[ge];B[gc];W[fb];B[hb];W[hc];B[hd];W[ic];B[ib];W[ee];B[ff];W[id];B[he];W[ie];B[hf];W[jb];B[jc];W[ha];B[kb];W[ia];B[gp];W[cr];B[ef];W[dl];B[fn];W[cl];B[dm];W[bm];B[bn];W[em];B[bl];W[bk];B[am];W[en];B[ck];W[el];B[bj];W[rn];B[so];W[lq];B[lr];W[np];B[mp];W[qo];B[qn];W[po];B[oo];W[pn];B[qm];W[on];B[no];W[sn];B[rm];W[sp];B[gl];W[nl];B[nk];W[mk];B[ol];W[nm];B[pk];W[lo];B[lp];W[mo];B[kp];W[nn];B[np];W[ik];B[jk];W[gk];B[fk];W[hl];B[gj];W[hj];B[hk];W[dk];B[cj];W[gk];B[ij];W[hk];B[gm];W[fj];B[ek];W[jl];B[im];W[hm];B[il];W[ej];B[fl];W[gn]C[AudreyLucianoFilho: Posso desistir? Não tenho mais como virar
      psygo: É uma opcao sua. Pode desistir, sim, ou continuar, vc que sabe.
      AudreyLucianoFilho: ok. valeu
      psygo: Obrigado pela partida, Audrey.
      AudreyLucianoFilho: gg
      psygo: Tá aí, Audrey?
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Ventura"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2021, 10, 8).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "38482719",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-11-07]PC[OGS: https://online-go.com/game/38482719]GN[2a Partida DOGemP]PB[Pedepano]PW[psygo]BR[?]WR[3d]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]C[psygo: Boa partida
      ]AP[Sabaki:0.52.1];B[dd];W[pd]C[Pedepano: boa partida pra você também
      ];B[qp];W[dq];B[do];W[co];B[cn];W[cp];B[dm];W[op];B[lq];W[qo]C[Pedepano: não me lembro dos josekis, esqueci praticamente todos durante o tempo que fiquei sem jogar
      psygo: Improvisa ae
      ];B[pp]C[psygo: Eu tb nao conheço mtu este que joguei
      ];W[po];B[oq];W[nq];B[np];W[oo];B[pr];W[or];B[pq];W[mp];B[nr];W[no];B[os]C[Pedepano: um lance que errei deu tudo errado
      psygo: Partida longa ainda
      psygo: Rlx
      Pedepano: acabou completamente o que queria fazer
      psygo: Nao deu tao errado assim
      ];W[pg];B[ro];W[rn];B[rp];W[fc];B[fd];W[gd];B[fe];W[cc];B[ec];W[be];B[ci];W[id];B[qn];W[rm];B[pl];W[pm];B[pj];W[ql];B[ol];W[qk];B[ni];W[ng];B[hf];W[je];B[qc];W[pc];B[qd];W[qf];B[pb];W[ob];B[qb];W[nc];B[rf];W[re];B[qe];W[rg];B[rd];W[sf];B[sb];W[li];B[mh];W[kg];B[mk];W[kk];B[ko];W[lm];B[lh];W[kh];B[kj];W[jj];B[lk];W[jk];B[ki];W[ji];B[lj];W[ch];B[dh];W[bi]C[Pedepano: vlw
      ];B[di]C[Pedepano: ei
      Pedepano: eu não joguei
      psygo: Clicou sem querer?
      psygo: O que aconteceu?
      Pedepano: sim
      psygo: Quer pedir undo?
      psygo: É só pedir
      Pedepano: como faz isso?
      psygo: Do lado esquerdo do botao de passe
      ];W[bh];B[eq];W[er];B[fr];W[ep]C[Pedepano: ih rapaz, essa eu não tinha calculado
      psygo: Como assim?
      psygo: É só conectar
      Pedepano: sim, eu tinha pensado em outra coisa
      ];B[fq];W[dp];B[of];W[dr];B[mf];W[qj];B[ld];W[lc];B[kd];W[kc];B[cf];W[bf];B[bj];W[jq];B[ip];W[hq];B[gp];W[hp];B[ho];W[io];B[in];W[go];B[hn];W[fp];B[jf];W[kf];B[if];W[ih];B[ke];W[jd];B[md];W[jm];B[mn];W[lo];B[ln];W[kn];B[jn];W[km];B[mm];W[kp];B[jo];W[hl];B[gn];W[gq];B[gl];W[gk];B[fk];W[hj];B[gh];W[fl];B[gm];W[fj];B[ek];W[gi];B[hh];W[fh];B[hi];W[ii];B[ik];W[il];B[ll];W[kl];B[fg];W[gc];B[mc];W[mb];B[jr];W[kr];B[ir];W[iq];B[kq];W[lr];B[mq];W[mr];B[np];W[bk];B[ck];W[aj];B[cj];W[eb]C[Pedepano: eu sou menos ruim na abertura, ruim no meio jogo e péssimo no final
      psygo: Rlx, o fim de jogo parece ok. É que a partida já estava um pouco distante msm.
      ];B[bl]C[psygo: Eu tb cometo erros no fim de jogo
      psygo: Estou até comentando sobre eles agora
      Pedepano: show, vou assistir seus comentários depois que acabar aqui :)
      psygo: Tava pensando em nós dois revisarmos após a partida
      psygo: Consegue?
      psygo: Ia revisar no canal ao vivo msm.
      ];W[bn]C[Pedepano: consigo sim :)
      ];B[bm];W[bo];B[bg];W[cg];B[dg];W[ce];B[df];W[mg];B[lg];W[lf];B[nf];W[nh];B[mi];W[oi];B[oh];W[og];B[oj];W[pe];B[pi];W[qi];B[nq];W[hr];B[db];W[dc];B[ed];W[cb];B[cd];W[bd];B[ai];W[ag];B[ak];W[fn];B[fm];W[en];B[em];W[dn];B[mo];W[om];B[nm];W[ge];B[gf];W[pk];B[ok];W[ej];B[dj];W[pa];B[ra];W[de];B[ee];W[jp];B[lp];W[ef];B[ff];W[eh];B[eg];W[ei];B[ig];W[ph];B[le];W[jh];B[an];W[ao];B[am];W[so]C[Pedepano: vou desisti
      ];B[sp];W[sn]C[psygo: Vc que sabe
      Pedepano: como a gente revisa agora
      Pedepano: ?
      psygo: Vai aparecer um link com a revisao, mas eu até recomendo vc me ligar no Discord
      psygo: Topa?
      psygo: Consegue?
      Pedepano: sim
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Ventura"),
    whiteRef: findPlayerRef("Erendiro Pedro Sangueve"),
    date: new Date(2021, 10, 14).getTime(),
    result: {
      whoWins: Color.White,
      difference: 151.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "38650411",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-11-13]PC[OGS: https://online-go.com/game/38650411]GN[DOGemP]PB[Pedepano]PW[AfricanGrimReaper]BR[?]WR[6k]TM[3600]OT[15/600 canadian]RE[W+151.5]SZ[19]KM[6.5]RU[Japanese]AP[Sabaki:0.52.1];B[dd];W[pd];B[pq];W[cq];B[dp];W[cp];B[dq];W[do];B[co];W[eo];B[fq];W[cn];B[bo];W[bn];B[bp];W[bq];B[ci];W[qo];B[ql];W[qq];B[np];W[pp];B[oq];W[qr];B[qi];W[fc];B[kq];W[jd];B[qf];W[cf];B[ef];W[de];B[ee];W[cd];B[fd];W[dc];B[gc];W[ed];B[gd];W[ph];B[md];W[pf];B[qc];W[pc];B[qd];W[qe];B[re];W[pe];B[pb];W[ob];B[qb];W[nc];B[mf];W[rf];B[rd];W[le];B[me];W[pi];B[pj]C[Pedepano: está tendo problema com a internet ainda ou só está pensando mesmo?
      ];W[oj]C[AfricanGrimReaper: Por vezes sim, desculpa
      AfricanGrimReaper: Outras vezes só estou a tentar pensar bem na jogada
      Pedepano: blz, eu não queria que você tivesse essa desvantagem da internet, se você quiser adiar a partida pra quando sua internet estiver funcionando normal, por mim tudo bem
      Pedepano: que adiar ou continuar?
      AfricanGrimReaper: Podemos continuar
      Pedepano: ok
      AfricanGrimReaper: Estou a gostar da partida
      ];B[pk];W[jf];B[mh];W[gf];B[ff];W[ge];B[fe];W[dg];B[eg];W[eh];B[fh];W[dh];B[fi];W[gg];B[fg];W[ck];B[dj];W[ej];B[fj];W[ek];B[ji];W[lg];B[mg];W[ld];B[mc];W[lc];B[mb];W[ii];B[qg];W[qh];B[rg];W[oi];B[pg];W[og];B[of];W[rh];B[sf];W[nf];B[oe];W[ne];B[od];W[nd];B[oc];W[ng];B[nh];W[oh];B[mj];W[nk];B[mk];W[nl];B[ri];W[sh];B[si];W[rk];B[qj];W[rl];B[qm];W[on];B[rm];W[rn];B[sm];W[ml];B[kk];W[kl];B[jk];W[sk];B[hk];W[jh];B[ki];W[gk];B[fk];W[fl];B[gj];W[gl];B[hi];W[ij];B[ik];W[hh];B[hp];W[hj];B[ja];W[ib];B[hb];W[ia];B[ic];W[jb];B[jc];W[lb];B[ie];W[id];B[hd];W[fb];B[ig];W[ih];B[if];W[he];B[je];W[kd];B[lf];W[kf];B[jg];W[kg];B[kh];W[hg];B[lh];W[ke];B[jj];W[lj];B[el];W[em]C[AfricanGrimReaper: Desculpa! 
      AfricanGrimReaper: As vezes fico ansioso e jogo por impulso
      ];B[ei];W[dk];B[di];W[bh];B[im];W[gq];B[gp];W[fp];B[hq];W[eq];B[fr];W[er];B[dr];W[gr];B[hr];W[fs];B[cr];W[br];B[om];W[ol];B[nm];W[pm];B[pl];W[pn];B[mm];W[lm];B[mn];W[ln];B[mo];W[in];B[jm];W[jn];B[km];W[kn];B[hn];W[hm];B[gn];W[lk];B[nj];W[ok];B[kp];W[nb];B[jl];W[ll];B[hl];W[dl];B[gm];W[ma];B[pr];W[hs];B[is];W[gs];B[ir];W[ip];B[jp];W[ho];B[go];W[io];B[iq];W[lo];B[lp];W[ni];B[mi];W[op];B[nq];W[ps];B[os];W[qs];B[or];W[sr];B[sn];W[so];B[qn];W[ro];B[fn];W[fo];B[en];W[dn];B[fm];W[el];B[no];W[oo];B[sg];W[la];B[hc];W[pa];B[qa];W[oa];B[kc];W[kb];B[li];W[na];B[];W[]C[AfricanGrimReaper: Obrigado pela partida
      Pedepano: vlw, abraço
      AfricanGrimReaper: Abraço
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Erendiro Pedro Sangueve"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2021, 10, 17).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "38733948",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-11-16]PC[OGS: https://online-go.com/game/38733948]GN[Liga DOGemP]PB[AfricanGrimReaper]PW[psygo]BR[6k]WR[3d]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]AP[Sabaki:0.52.1];B[pc];W[dd]C[AfricanGrimReaper: Bom jogo! ^^
      psygo: Bom jogo pra vc tb!
      ];B[dp];W[qp];B[qe];W[fq];B[cn];W[kq];B[fc];W[pf];B[cc];W[dc];B[cd];W[de];B[db];W[eb];B[cb];W[fb];B[cf];W[ic];B[qk];W[qf];B[pe];W[of];B[oe];W[nf];B[pn];W[op];B[df];W[ne];B[nd];W[md];B[ee];W[nc];B[ec];W[qc];B[qb];W[pb];B[rc];W[qm];B[pm];W[qn];B[po];W[pp];B[qo];W[ro];B[hq];W[pl];B[nn];W[ol];B[nm];W[mk];B[rh];W[rf];B[oj];W[ql];B[oh];W[qi];B[mj];W[lj];B[nk];W[nl];B[ml];W[lk];B[mi];W[kh];B[qh];W[qj];B[rk];W[pk];B[pj];W[rj];B[pi];W[rl];B[li];W[ki];B[fp];W[ip];B[mq];W[lp];B[lo];W[mp];B[jp];W[jq];B[io];W[hp];B[ho];W[gp];B[go];W[ep];B[fo];W[eq];B[kj];W[ll];B[mm];W[km];B[jj];W[ko];B[lm];W[jl]C[AfricanGrimReaper: Thanks for the game 🙌🏿
      psygo: Obg, Eren
      psygo: Quer já revisar na stream?
      AfricanGrimReaper: Sim por favor
      psygo: Blz
      AfricanGrimReaper: Correu muito mal para mim 
      psygo: Quer entrar no canal de voz pra falar comigo ou por este chat msm?
      psygo: ?
      psygo: [object Object\]
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Rui Malhado"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2021, 10, 25).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "38953919",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-11-24]PC[OGS: https://online-go.com/game/38953919]GN[Liga DOGemP]PB[Phelan]PW[psygo]BR[3k]WR[3d]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]C[Phelan: Bom jogo :)
      psygo: Bom jogo
      ]AP[Sabaki:0.52.1];B[pd]C[psygo: Bom jogo
      ];W[dd];B[qp];W[dq];B[nq];W[dn];B[fc];W[qj];B[qh];W[qm];B[jd];W[pc];B[oc];W[qd];B[qe];W[qc];B[od];W[re];B[qf];W[rf];B[cf];W[fd];B[bd];W[ec];B[gc];W[bc];B[be];W[cc];B[cj];W[cl];B[iq];W[ch];B[dh];W[ci];B[di];W[bj];B[dj];W[bk];B[dg];W[kp];B[io];W[pp];B[pq];W[qo];B[po];W[op];B[qq];W[oo];B[pn];W[qn];B[om];W[mo];B[mm];W[kn];B[oj];W[pi];B[nh];W[og];B[oh];W[ph];B[pg];W[rg];B[qg];W[rh];B[qi];W[rj];B[pj];W[mq];B[np];W[no];B[nr];W[jm];B[kr];W[gq];B[jk];W[lr];B[kq];W[lq];B[jp];W[ko];B[mp];W[lp];B[go];W[hm];B[hr];W[hp];B[ho];W[gr];B[ks];W[jr];B[jq];W[mr];B[gp];W[hq];B[ep];W[dp];B[fm];W[fl];B[gm];W[gl];B[il];W[im];B[hl];W[kk];B[ln];W[kj];B[el];W[ek];B[dk];W[dl];B[em];W[nl];B[nm];W[ol];B[lo];W[lm];B[mn];W[ml];B[ll];W[km];B[ms];W[hk];B[ik];W[hj];B[gk];W[fk];B[ij];W[hi];B[ii];W[hh];B[ih];W[hg];B[fj];W[gj];B[ej];W[gk];B[ff];W[ig];B[jh];W[kf];B[kh];W[ie];B[gd];W[id];B[kc];W[ic];B[fe];W[lb];B[kb];W[ld];B[kd];W[lc];B[mb];W[la];B[le];W[ke];B[me];W[jb];B[pm];W[pl];B[oq];W[mj];B[ls];W[ed];B[eb];W[db];B[fa];W[cd]C[Phelan: Obrigado pelo jogo :)
      psygo: Obg pela partida
      psygo: Tensa, hein?
      psygo: Foi legal
      Phelan: sim, muito dificil! :)
      psygo: Acho que vou deixar a revisao pro domingo
      Phelan: bem tensa
      Phelan: ok
      psygo: Ou vc prefere ver algo agora?
      Phelan: pode ser domingo
      Phelan: estou cansado tambem
      psygo: Ok
      psygo: Blz, nos vemos no domingo entao.
      Phelan: ok, até domingo
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  // ***************************************************************************
  // Dez 2021
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Lucas Cristovam"),
    whiteRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    date: new Date(2021, 11, 6).getTime(),
    result: {
      whoWins: Color.Black,
      time: true,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39258192",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-05]PC[OGS: https://online-go.com/game/39258192]GN[lukeverso x vendito]PB[lukeverso]PW[vandito]BR[25k]WR[19k]TM[3600]OT[15/600 canadian]RE[B+T]SZ[19]KM[6.5]RU[Japanese]C[vandito: Bom jogo!
      lukeverso: Bom jogo, cara!
      ]AP[Sabaki:0.52.1];B[pd];W[cp];B[dd];W[qp];B[po];W[oq];B[pp];W[qq];B[pq];W[pr];B[qr];W[or];B[rr];W[qo];B[pn];W[qm];B[qn];W[rn];B[ro];W[rp];B[pm];W[rm];B[dp];W[dq];B[ep];W[eq];B[fq];W[fp];B[hp];W[eo];B[do];W[dn];B[fo];W[co];B[gp];W[ep];B[gq];W[kp];B[gn];W[dk];B[di];W[cf];B[df];W[dg];B[eg];W[dh];B[eh];W[ci];B[ei];W[cj];B[ee];W[cg];B[ek];W[dl];B[el];W[dm];B[en];W[do];B[em];W[pl];B[ol];W[pk];B[nm];W[qf];B[pg];W[oe];B[pf];W[pe];B[od];W[md];B[ne];W[nd];B[qe];W[qg];B[qd];W[of];B[nf];W[og];B[oh];W[ph];B[oi];W[pi];B[nc];W[mg];B[ie];W[je];B[jd];W[ke];B[ld];W[me];B[mc];W[le];B[kd];W[mj]C[lukeverso: Ainda tô triste por conta de P12.
      ];B[hd];W[mf];B[rf];W[rc];B[re];W[rg];B[sg];W[sh];B[sf];W[pg];B[oj];W[ok];B[nk];W[nj];B[mk];W[lk];B[ml];W[ll];B[lm];W[km];B[lj];W[kl];B[mi];W[pj];B[ni];W[kn];B[ln];W[ko];B[jp];W[jh];B[lp];W[lo];B[mo];W[mn];B[mm];W[nn];B[no];W[mp];B[on];W[np];B[op];W[nq];B[mn]C[lukeverso: Caraca.
      lukeverso: Uau.
      lukeverso: Que jogo.
      vandito: haha
      vandito: muito bom!
      lukeverso: MUITO bom.
      lukeverso: Não sei, eu ia perguntar.
      vandito: por um momento esqueci dele kkkk
      lukeverso: Acho que ele não se atentou ao lance de 10 minutos pra fazer 15 jogadas.
      lukeverso: Quando chegou em 1 minuto e ele tinha 10 jogadas pra fazer, eu pensei que ele ia entrar num modo "berserk" da vida.
      vandito: obrigado pela partida luke
      lukeverso: Olha, que curioso.
      lukeverso: Eu te agradeço pra caramba, cara.
      lukeverso: Você é a primeira pessoa com quem eu jogo sério.
      lukeverso: E é minha terceira partida num 19 x 19.
      lukeverso: A primeira eu não entendi nada, a segunda foi contra um bot e essa daqui.
      lukeverso: Que foi incrível.
      lukeverso: Valeu, Fanaro!
      vandito: eu também nunca joguei partida com tempo assim
      lukeverso: Você acompanhou desde o começo, foi?
      vandito: não que eu me lembre
      lukeverso: Pode colar no Discord, vandito?
      lukeverso: Pra áudio?
      lukeverso: Nossa, aquele P12 foi um erro de clique.
      lukeverso: H4 lá no começo também foi.
      psygo: Tava atento ao relógio, vandito?
      psygo: Ok, faz parte.
      psygo: Bacana a partida. Parabéns para os dois. Deu bastante jogo.
      psygo: Acompanhei aqui e ali, e em momentos chaves.
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Erendiro Pedro Sangueve"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2021, 11, 9).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39342634",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-08]PC[OGS: https://online-go.com/game/39342634]GN[Eren]PB[AfricanGrimReaper]PW[psygo]BR[6k]WR[3d]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]AP[Sabaki:0.52.1];B[pd];W[dd];B[pq];W[dp];B[po];W[pn];B[qn];W[qm];B[qo];W[qc];B[pc];W[qd];B[pe];W[rf];B[fc];W[jd];B[dn];W[ec];B[id];W[fd];B[gc];W[gd];B[hc];W[jc];B[lc];W[ie];B[je];W[ic];B[hd];W[he];B[ge];W[hg];B[jf];W[ig];B[ib];W[jb];B[ha];W[lb];B[mb];W[ld];B[kb];W[mc];B[la];W[kc];B[ja];W[lb];B[ee];W[ed];B[lc];W[kd];B[md];W[lb];B[if];W[hf];B[lc];W[kf];B[nc];W[jg];B[fq];W[fp];B[gp];W[fo];B[eq];W[do];B[jq];W[dl];B[dj];W[cl];B[dg];W[cf];B[cg];W[bg];B[bh];W[bf];B[bi];W[ei];B[ej];W[fj];B[fk];W[fi];B[el];W[hp];B[go];W[gn];B[fn];W[fm];B[en];W[hn];B[ho];W[em];B[dm];W[fl];B[ek];W[hl];B[bn];W[bm];B[co];W[cp];B[bp];W[bq];B[eo];W[cn];B[ep];W[bo];B[in];W[gl];B[gk];W[ik];B[hj];W[ij];B[hi];W[gh];B[ii];W[ji];B[jh];W[ki];B[bk];W[bl];B[di];W[ck];B[cj];W[ak];B[aj];W[bj];B[le];W[ai]C[psygo: Jogou bem
      psygo: Parabens
      AfricanGrimReaper: obrigado!
      psygo: Foi bem difícil
      AfricanGrimReaper: sê pegou leve hehe
      psygo: O gráfico da IA até mostra que vc teve umas boas chances
      psygo: Peguei leve nada
      AfricanGrimReaper: mas obg msm, vou ver reviso bem essa partida
      AfricanGrimReaper: Fanaro tenho de ir andado. obrigado por  tudo
      psygo: Obg vc, abs
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("André Barbosa"),
    date: new Date(2021, 11, 11).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39399355",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-10]PC[OGS: https://online-go.com/game/39399355]GN[DoJo]PB[cixidetroy]PW[seupera]BR[16k]WR[5k]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[0.5]RU[Japanese]HA[9]AB[jd][jp][dj][pj][jj][dd][pp][pd][dp]C[seupera: bom jogo
      cixidetroy: bom jogo:)
      ]AP[Sabaki:0.52.1];W[fq];B[eq];W[cn];B[cp];W[fp];B[en];W[er];B[dr];W[ep];B[dq];W[do];B[eo];W[cl];B[cf];W[dk];B[ek];W[el];B[fl];W[fk];B[fm];W[ej];B[dm];W[cm];B[dl];W[ci];B[cj];W[ck];B[di];W[bj];B[eg];W[iq];B[jq];W[ip];B[io];W[ho];B[fn];W[in];B[jo];W[hl];B[hm];W[im];B[gl];W[hk];B[gk];W[gj];B[nq];W[qq];B[pq];W[qp];B[qo];W[ro];B[qn];W[rn];B[qm];W[rm];B[ql];W[ln];B[kn];W[km];B[lm];W[ll];B[mm];W[kl];B[mn];W[nc];B[oc];W[nd];B[qf];W[kc];B[jc];W[gc];B[fc];W[fd];B[ec];W[gf];B[if];W[hh];B[gg];W[hg];B[hf];W[fg];B[gh];W[fh];B[ge];W[ff];B[fe];W[ee];B[ed];W[ch];B[dh];W[dg];B[df];W[cg];B[ef];W[he];B[gd];W[hd];B[ie];W[fd];B[de];W[eh];B[fe];W[gd];B[bg];W[be];B[bi];W[ei];B[bd];W[bf];B[me];W[od];B[pc];W[of];B[jh];W[ld];B[md];W[mc];B[oe];W[ne];B[pe];W[lf];B[mf];W[mg];B[ph];W[oi];B[pi];W[mj];B[ml];W[mk];B[ol];W[gb];B[fb];W[rl];B[rk];W[qr];B[pr];W[ir];B[jr];W[fr];B[lo];W[br];B[co];W[dn];B[bn];W[bm];B[bo];W[bq];B[ar];W[cs];B[kb];W[ds];B[mb];W[lb];B[la];W[lc];B[nb];W[jb];B[ka];W[ma];B[na];W[ja];B[ma];W[ob]C[seupera: obrigado pelo jogo
      cixidetroy: obrigada pelo jogo
      cixidetroy: dificil :'(
      seupera: demais. Você jogou bem
      seupera: Quer revisar ou depois o Felipe vai revisar? 
      cixidetroy: não tenho ideia se ele vai revisar, como que é ?
      seupera: Acho que depende do nível que vc entrou na liga, eu to no só para jogar
      cixidetroy: tô com revisoes, mas podemos revisar
      seupera: As dele vão ser melhores kkk 
      seupera: Mas eu vou explicar minhas intenções com minhas jogadas
      seupera: posso ligar no discord?
      cixidetroy: sim so 5 mn
      seupera: beleza, quando estiver tudo certo é só falar
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Erendiro Pedro Sangueve"),
    whiteRef: findPlayerRef("Laura Augustina Avram"),
    date: new Date(2021, 11, 11).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39397595",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-10]PC[OGS: https://online-go.com/game/39397595]GN[Friendly Match]PB[AfricanGrimReaper]PW[balaura]BR[6k]WR[4k]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]C[AfricanGrimReaper: Oiii
      balaura: boa partida :)
      ]AP[Sabaki:0.52.1];B[pd]C[AfricanGrimReaper: Oiii
      balaura: boa partida :)
      ];W[dq];B[de];W[qp];B[do];W[cm];B[cp];W[cq];B[bq];W[eo];B[dn];W[dp];B[bo];W[cj];B[en];W[fo];B[fn];W[go];B[oq];W[lq];B[po];W[qo];B[pn];W[qn];B[pm];W[ql];B[lo];W[jp];B[ch];W[ej];B[gn];W[ho];B[gk];W[eh];B[di];W[fk];B[qf];W[fe];B[dc];W[nc];B[oc];W[nd];B[ic];W[kc];B[ie];W[fg];B[ke];W[nf];B[ph];W[fc];B[me];W[ne];B[cf];W[pq];B[pl];W[qk];B[nh];W[jd];B[id];W[je];B[jf];W[if];B[hf];W[ig];B[ge];W[kf];B[hg];W[jg];B[fi];W[ei];B[hi];W[gl];B[hk];W[el];B[hl];W[ci];B[dh];W[gh];B[hh];W[gi];B[ki];W[jn];B[km];W[jm];B[jl];W[kn];B[ln];W[kl];B[lm];W[jk];B[il];W[ji];B[gm];W[kj]C[AfricanGrimReaper: Obrigado
      balaura: obrigada 
      AfricanGrimReaper: Quem sabe numa próxima eu ganho hehr 🙏🏿
      AfricanGrimReaper: Muito forte
      AfricanGrimReaper: Alguma dica de melhoria?
      balaura: hmmm :)
      balaura: revisar com AI :-D
      balaura: nao sei que dizer
      AfricanGrimReaper: Vou revisar com ai mais então hehe
      AfricanGrimReaper: Obrigado pela partida, até uma próxima
      balaura: :)
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Lucas Cristovam"),
    whiteRef: findPlayerRef("Sophie Pagès"),
    date: new Date(2021, 11, 12).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39426991",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-11]PC[OGS: https://online-go.com/game/39426991]GN[lukeverso vs cixidetroy]PB[lukeverso]PW[cixidetroy]BR[23k]WR[16k]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]C[lukeverso: Bom jogo, Sophie!
      cixidetroy: bom jogo :)
      ]AP[Sabaki:0.52.1];B[pd];W[dp];B[dd];W[pq];B[po];W[qo];B[qn];W[qp];B[pn];W[nq];B[pl];W[qf];B[pg];W[pf];B[of];W[oe];B[pe];W[od];B[og];W[pc];B[oc];W[qd];B[qe];W[re];B[qg];W[pe];B[md];W[nc];B[mc];W[fc];B[cf];W[dc];B[ec];W[ed];B[eb];W[db];B[da];W[fb];B[ea];W[ca];B[ce];W[cd];B[de];W[bd];B[be];W[cn];B[oj];W[ck];B[ci];W[jc];B[fd];W[ee];B[fe];W[ef];B[ff];W[dg];B[cg];W[fg];B[gc];W[gd];B[ge];W[hd];B[hc];W[id];B[ch];W[hf]C[lukeverso: Uau. Esse jogo está extremamente agressivo.
      ];B[fq];W[hq]C[lukeverso: Não há muito a fazer aqui, pelo que eu realmente tô reparando.
      lukeverso: Você foi bem agressiva desde o começo.
      lukeverso: Ainda preciso aprender a me defender melhor!
      lukeverso: Obrigado pelo jogo, Sophie.
      cixidetroy: você ficou chateado?
      cixidetroy: obrigada pelo jogo
      lukeverso: Não, não, de jeito algum!
      cixidetroy: :)
      cixidetroy: estou tentando melhorar em ataque
      lukeverso: Como disse, você jogou extremamente bem. Fortíssima de cara.
      cixidetroy: ai to tentando em todo canto
      lukeverso: Gostei pra caramba.
      cixidetroy: obrigada
      lukeverso: Danke schön!
      cixidetroy: ^^
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Fabrício Caluza Machado"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2021, 11, 12).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39425631",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-11]PC[OGS: https://online-go.com/game/39425631]GN[DOGemP - liga A dez 2021]PB[Fabrício]PW[psygo]BR[3k]WR[3d]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]C[psygo: Boa partida
      Fabrício: Bom jogo!
      ]AP[Sabaki:0.52.1];B[pd];W[dd];B[pq];W[dq];B[po];W[dn];B[jp];W[qj];B[ql];W[qf];B[nc];W[rd];B[qc];W[of];B[cf];W[ch];B[cc];W[cd];B[dc];W[ed];B[bd];W[be];B[bc];W[bf];B[fc];W[hq];B[cl];W[cn];B[di];W[bj];B[fd];W[dh];B[eh];W[ei];B[ef];W[eg];B[ce];W[fh];B[ff];W[md];B[kd];W[qn];B[qo];W[pn];B[ol];W[ro];B[rm];W[rn];B[rp];W[nn];B[ml];W[ln];B[oo];W[on];B[kl];W[jn];B[pi];W[pj];B[hn];W[ip];B[jo];W[io];B[in];W[jm];B[lp];W[jl];B[hl];W[jj];B[hj];W[ii];B[hi];W[hh];B[ih];W[jh];B[jk];W[ik];B[ig];W[kk];B[gh];W[mc];B[ne];W[nb];B[me];W[kc];B[jd];W[jc];B[mh];W[nk];B[el];W[fk];B[mk];W[mj];B[lj];W[nj];B[hk];W[fl];B[oi];W[qi];B[oj];W[ok];B[mi];W[pk];B[lk];W[kg];B[ki];W[ji];B[pg];W[pf];B[qg];W[rg];B[rh];W[og];B[rf];W[ni];B[re];W[mg];B[nh];W[oh];B[ng];W[nf];B[lg];W[mf];B[lf];W[lh];B[kh];W[li];B[kj];W[jg];B[jk];W[le];B[il];W[kk];B[mn];W[mm];B[jk];W[if];B[hg];W[kk];B[lm];W[mo];B[jk];W[qe];B[ij];W[qd];B[kf];W[jf];B[ke];W[id];B[ld];W[he];B[hf];W[ie];B[ic];W[lc];B[nd];W[hc];B[ob];W[mb];B[rc];W[sd];B[sc];W[pb];B[oa];W[pc]C[Fabrício: obrigado
      psygo: Obg
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    date: new Date(2021, 11, 13).getTime(),
    result: {
      whoWins: Color.Black,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39446354",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-12]PC[OGS: https://online-go.com/game/39446354]GN[DOGemP - Liga B dez 2021]PB[cixidetroy]PW[vandito]BR[16k]WR[21k]TM[3600]OT[15/600 canadian]RE[B+R]SZ[19]KM[6.5]RU[Japanese]AP[Sabaki:0.52.1];B[pd];W[qp]C[vandito: Bom jogo!
      ];B[dq]C[cixidetroy: bom jogo!
      ];W[cd];B[op];W[pq];B[oq];W[pr];B[dn];W[qn];B[kp];W[mp];B[mq];W[nq];B[np];W[nr];B[mo];W[or];B[cg];W[dj];B[eh];W[fj];B[lq];W[qj];B[qf];W[qg];B[rf];W[ec];B[fd];W[ee];B[ed];W[dc];B[de];W[dd];B[ef];W[fc];B[fe];W[be];B[mc];W[jd];B[gc];W[gd];B[hd];W[lo];B[lp];W[ge];B[gf];W[he];B[ie];W[hf];B[id];W[hc];B[ic];W[hb];B[jc];W[if];B[kd];W[fh];B[fg];W[gg];B[ff];W[cf];B[df];W[dg];B[ch];W[di];B[dh];W[je];B[lc];W[oe];B[me];W[jf];B[of];W[pf];B[pe];W[og];B[pg];W[nf];B[qh];W[pf];B[rg];W[ph];B[of];W[oh];B[pf];W[lf];B[mf];W[mg];B[ne];W[ng];B[mm];W[lm];B[ll];W[fn];B[hp];W[eo];B[do];W[cm];B[cj];W[ci];B[bi];W[bj];B[bh];W[bg];B[ck];W[bk];B[cl];W[bl];B[dl];W[cn];B[dm];W[am];B[co]C[cixidetroy: oq é esse numéro da direita (que eu tenho 2?)
      ];W[bn];B[an]C[vandito: é os seu npumero de pedras a jogar com esse tempo que você tem
      cixidetroy: e depois ?
      vandito: ganha mais 10 min
      cixidetroy: ah ok
      ];W[ao]C[cixidetroy: eu tava mto estressada^^
      ];B[bp];W[bo];B[ep];W[fp];B[fq];W[go];B[io];W[in];B[ko];W[ln];B[mn];W[km];B[jn];W[jm];B[im];W[hn];B[hm];W[gm];B[hk];W[ij];B[jl];W[il];B[hl];W[kl];B[ik];W[kk];B[mk];W[jk];B[hj];W[il];B[gh];W[fi];B[hg];W[hi];B[gi];W[gj];B[ii]C[vandito: aff cliquei errado rs
      cixidetroy: quando?
      ];W[jj]C[cixidetroy: quer voltar?
      vandito: no lance anterior
      ];B[hh]C[vandito: no problem
      cixidetroy: ok
      ];W[ji];B[ih];W[jg];B[jh];W[jl];B[li];W[gl];B[lj];W[gk];B[hi];W[kh];B[ki];W[kg];B[gp];W[ho];B[fo];W[lk];B[ml];W[fp];B[en];W[fo];B[fm];W[kn];B[jo];W[gn];B[fl];W[ek];B[ql];W[ei];B[ol];W[ig];B[gg];W[ce];B[rl];W[ah];B[pj];W[ai];B[eg]C[vandito: um belo jogo!
      vandito: tô esgotado aqui
      cixidetroy: obrigada pelo jogo
      cixidetroy: mto interessante!!
      cixidetroy: tô exausta^^
      cixidetroy: foi bem longa a partida
      vandito: Eu que agradeço!
      vandito: Acho eu deveria der desistido bem antes...
      cixidetroy: achei mto interessante fazer os combates, entao eu gostei assim
      vandito: *Acho que eu deveria ter desistido bem antes...
      cixidetroy: com oque o resultado ja ta do dojo ?
      vandito: O movimento 44 para mim acho que foi o melhor movimento que eu consegui fazer no Go até hoje rs
      vandito: Eu coloquei lá
      vandito: "O movimento 44 para mim acho que foi o melhor movimento que eu consegui fazer no Go até hoje rs" pena que eu não conseguir fazer uma boa luta no centro
      vandito: Jogou muito bem cixi!
      vandito: Seria um honra seupera
      vandito: beleza
      seupera: Bom Jogo
      seupera: Como estao de tempo? Posso oferecer uma revisão?
      seupera: Os dois jogaram bem
      seupera: Entra no canal de audio de revisões lá da liga
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Rui Malhado"),
    date: new Date(2021, 11, 18).getTime(),
    result: {
      whoWins: Color.Black,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39597218",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-17]PC[OGS: https://online-go.com/game/39597218]GN[DOGemP]PB[psygo]PW[Phelan]BR[3d]WR[3k]TM[3600]OT[15/600 canadian]RE[B+R]SZ[19]KM[6.5]RU[Japanese]C[Phelan: Bom jogo! :)
      psygo: Bom jogo! :))
      ]AP[Sabaki:0.52.1];B[pd];W[dp];B[pq];W[dd];B[pn];W[jq];B[cn];W[cl];B[cq];W[dq];B[cp];W[do];B[dn];W[en];B[co];W[dr];B[dl];W[em];B[ck];W[nc];B[qf];W[pc];B[qc];W[qb];B[oc];W[pb];B[od];W[ob];B[nd];W[mc];B[rc];W[cg];B[md];W[lc];B[ld];W[kd];B[ke];W[je];B[jf];W[kf];B[le];W[ie];B[kg];W[dm];B[cm];W[bl];B[bk];W[fk];B[dk];W[mq];B[dc];W[ec];B[eb];W[fc];B[cd];W[ce];B[cc];W[be];B[fb];W[gc];B[gb];W[hc];B[hb];W[ib];B[kp];W[mo];B[kq];W[jp];B[kn];W[ko];B[lo];W[jo];B[lp];W[kr];B[lr];W[jr];B[lq];W[ln];B[mn];W[lm];B[mp];W[mm];B[no];W[ig];B[nm];W[mk];B[nl];W[lj];B[nj];W[qm];B[qn];W[pk];B[oj];W[mh];B[li];W[mi];B[mj];W[lh];B[ki];W[kh];B[lk];W[kl];B[kj];W[oh];B[pi];W[di];B[fj];W[ej];B[ek];W[gk];B[hi];W[fi];B[hk];W[hl];B[il];W[ik];B[jk];W[hj];B[jl];W[jn];B[im];W[hn];B[ij];W[hh];B[lf];W[jg];B[jb];W[ia];B[jd];W[kc];B[ed];W[de];B[ic];W[id];B[cr];W[gi];B[ds];W[es];B[cs];W[fr];B[bd];W[ph];B[qh];W[qi];B[rh];W[ls];B[ms];W[ks];B[mr];W[ii];B[hk];W[hm];B[ci];W[bi];B[ch];W[ml];B[nk];W[oi];B[pj];W[dh];B[bh];W[bg];B[bj];W[rb];B[sb]C[Phelan: Obrigado pelo jogo :)
      psygo: Obg, Rui
      Phelan: Estava a contar 20-30 pontos de desvantagem para mim
      Phelan: já estava perdido há muito
      psygo: Acho que vc podia ter tentado viver à direita, nao?
      psygo: Ao invés de Q10, pq nao R12? Acho que deveria morrer, mas seria mtu mais complicado.
      psygo: Ao invés de Q12
      psygo: *
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    whiteRef: findPlayerRef("André Barbosa"),
    date: new Date(2021, 11, 19).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39614270",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-18]PC[OGS: https://online-go.com/game/39614270]GN[Liga]PB[vandito]PW[seupera]BR[22k]WR[4k]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[0.5]RU[Japanese]HA[9]AB[jd][jp][dj][pj][jj][dd][pp][pd][dp]C[vandito: Bom jogo!
      seupera: Bom jogo
      ]AP[Sabaki:0.52.1];W[nq];B[qn];W[kq];B[jq];W[fq];B[eq];W[cn];B[cp];W[fp];B[cf];W[eo];B[lq];W[kr];B[lr];W[kp];B[mp];W[jr];B[ir];W[jo];B[hp];W[io];B[ho];W[hn];B[fr];W[gr];B[er];W[hq];B[hr];W[iq];B[gs];W[gq];B[fs];W[qq];B[pq];W[qp];B[po];W[pr];B[or];W[qr];B[nr];W[ro];B[rq];W[rn];B[qo];W[rm];B[ql];W[qm];B[pm];W[rk];B[rl];W[sl];B[rj];W[qk];B[pl];W[qj];B[pk];W[qi];B[qf];W[qc];B[oc];W[re];B[rd];W[qd];B[qe];W[rc];B[rg];W[rh];B[pg];W[pc];B[od];W[oh];B[pi];W[ph];B[qh];W[qg];B[gn];W[qh];B[fn];W[hm];B[em];W[en];B[fm];W[go];B[dn];W[dm];B[do];W[dl];B[el];W[ek];B[fk];W[dk];B[ej];W[cj];B[cl];W[ck];B[ci];W[fj];B[gj];W[fi];B[hj];W[di];B[gk];W[ch];B[il];W[no];B[np];W[ln];B[mn];W[mo];B[oq];W[on];B[oo];W[mm];B[pn];W[hh];B[mj];W[ni];B[nj];W[li];B[jh];W[kg];B[jg];W[kf];B[if];W[je];B[ie];W[kd];B[jf];W[ke];B[id];W[mc];B[pf];W[oe];B[mi];W[ng];B[mg];W[mf];B[mh];W[nf];B[lj];W[cc];B[ec];W[be];B[cd];W[bd];B[bf];W[db];B[bc];W[bb];B[de];W[eb];B[fc];W[jc];B[ic];W[jb];B[ib];W[gb];B[fb];W[fa];B[gc];W[bo];B[bp];W[bh];B[hd];W[ff];B[ii];W[ef];B[kj];W[js];B[ok];W[hs];B[mq];W[df];B[ed];W[lp];B[ps];W[rr]C[seupera: Obrigado pelo jogo
      vandito: eu que agradeço!
      vandito: Não consegui nem dar trabalho kkkk
      seupera: Quer revisar?
      vandito: Quero
      vandito: Se estiver com tempo, uma revisão seria de grande valia para mim :)
      seupera: Entra no canal lá
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("Gabriel Ventura"),
    date: new Date(2021, 11, 20).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
      difference: 40.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39647446",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-19]PC[OGS: https://online-go.com/game/39647446]GN[DOGemP - pedepano x cixidetroy]PB[cixidetroy]PW[Pedepano]BR[16k]WR[5k]TM[3600]OT[10/600 canadian]RE[W+40.5]SZ[19]KM[0.5]RU[Japanese]HA[9]AB[jd][jp][dj][pj][jj][dd][pp][pd][dp]C[Pedepano: boa partida
      cixidetroy: bom jogo
      ]AP[Sabaki:0.52.1];W[cf]C[Pedepano: boa partida
      cixidetroy: bom jogo
      ];B[fc];W[bd];B[cd];W[bc];B[db];W[ci];B[cj];W[di];B[ei];W[ej];B[fi];W[ek];B[cl];W[em];B[dm];W[fm];B[dn];W[fp];B[el];W[fl];B[dl];W[gk];B[fj];W[fk];B[dh];W[ch];B[bi];W[bh];B[bj];W[eh];B[fh];W[eg];B[df];W[ef];B[ee];W[ce];B[de];W[dg];B[ff];W[fg];B[gg];W[gf];B[fe];W[gh];B[hg];W[hh];B[hj];W[gj];B[he];W[ig];B[hf];W[jh];B[jm];W[qn];B[nq];W[on];B[rp];W[pl];B[nk];W[qj];B[pk];W[qk];B[ol];W[om];B[pm];W[ql];B[nm];W[nn];B[mm];W[pi];B[oi];W[ph];B[oh];W[pg];B[og];W[pf];B[qe];W[qf];B[of];W[pe];B[oe];W[qd];B[qc];W[rd];B[rc];W[re];B[le];W[iq];B[jq];W[dq];B[cq];W[eq];B[ep];W[cp];B[bp];W[co];B[do];W[bq];B[bo];W[cr];B[cn];W[pc];B[od];W[pb];B[cq];W[qb];B[oc];W[ob];B[nb];W[rb];B[nc];W[qq];B[qp];W[oq];B[pq];W[np];B[op];W[mq];B[or];W[lp];B[mr];W[ln];B[mn];W[mo];B[lm];W[jo];B[ko];W[kn];B[kp];W[jn];B[lq];W[lr];B[mp];W[gd];B[ge];W[mq];B[lo];W[kq];B[kr];W[jr];B[lq];W[ok];B[oj];W[kq];B[cg];W[bg];B[lq];W[ml];B[mp];W[nl];B[ll];W[mk];B[nj];W[lk];B[km];W[li];B[lj];W[mj];B[mi];W[kj];B[kk];W[lj];B[kh];W[ji];B[ki];W[lh];B[kg];W[jk];B[ij];W[ik];B[kl];W[no];B[pn];W[ok];B[oo];W[ol];B[ni];W[lg];B[lf];W[kf];B[ke];W[jf];B[hd];W[ip];B[ir];W[hr];B[js];W[gq];B[cc];W[qm];B[po];W[mg];B[mf];W[cp];B[co];W[en];B[in];W[io];B[hk];W[il];B[im];W[hl];B[hi];W[gi];B[bb];W[ro];B[aq];W[ar];B[ap];W[cq];B[ng];W[hs];B[is];W[sp];B[sq];W[so];B[qr];W[ab];B[ba];W[ac];B[ie];W[if];B[ah];W[ag];B[ai];W[na];B[ma];W[oa];B[mb];W[dk];B[ck];W[qo];B[hn];W[eo];B[ho];W[gp];B[mh];W[je];B[kd];W[];B[aa];W[be];B[];W[]C[psygo: [object Object\]
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Erendiro Pedro Sangueve"),
    whiteRef: findPlayerRef("Rui Malhado"),
    date: new Date(2021, 11, 20).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39641205",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-19]PC[OGS: https://online-go.com/game/39641205]GN[Phelan vs AfricanGrimReaper - Liga A DOGemP Dezembro]PB[AfricanGrimReaper]PW[Phelan]BR[6k]WR[3k]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]C[Phelan: Bom jogo! :)
      AfricanGrimReaper: Bom jogo :)
      ]AP[Sabaki:0.52.1];B[pd]C[Phelan: Bom jogo! :)
      AfricanGrimReaper: Bom jogo :)
      ];W[dp];B[pp];W[dd];B[fq];W[cn];B[jp];W[nc];B[qn];W[qf];B[pf];W[pg];B[of];W[qe];B[qd];W[qi];B[oc];W[nd];B[od];W[jd];B[cc];W[dc];B[cd];W[ce];B[be];W[cf];B[bf];W[cg];B[bg];W[ch];B[jf];W[le];B[ee];W[fd];B[fe];W[gd];B[ge];W[hd];B[ie];W[fg];B[gg];W[gh];B[hg];W[fh];B[oq];W[ii];B[lf];W[mf];B[jh];W[mg];B[ji];W[ij];B[og];W[ph];B[ne];W[pe];B[oe];W[me];B[nb];W[lc];B[jj];W[ik];B[dm];W[eo];B[fm];W[go];B[hm];W[jk];B[mi];W[io];B[hp];W[ho];B[jm];W[lk];B[jo];W[oh];B[lg];W[lh];B[kh];W[li];B[kf];W[he];B[hh]C[AfricanGrimReaper: Thanks for the game
      Phelan: Obrigado pelo jogo
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Rui Malhado"),
    whiteRef: findPlayerRef("Laura Augustina Avram"),
    date: new Date(2021, 11, 22).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39701832",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-21]PC[OGS: https://online-go.com/game/39701832]GN[Friendly Match]PB[Phelan]PW[balaura]BR[3k]WR[4k]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]C[Phelan: Bom jogo! :)
      balaura: boa partida :)
      ]AP[Sabaki:0.52.1];B[pd]C[balaura: boa partida :)
      ];W[dq];B[dd];W[qp];B[do];W[cm];B[cq];W[gq];B[dr];W[eq];B[cp];W[cj];B[ch];W[en];B[dm];W[dn];B[cn];W[bn];B[co];W[bm];B[dl];W[er];B[cr];W[cl];B[dk];W[dj];B[eo];W[fn];B[fl];W[fj];B[gl];W[hn];B[bk];W[ck];B[bj];W[hk];B[hl];W[il];B[im];W[hm];B[gk];W[hj];B[gj];W[gi];B[ik];W[jl];B[hi];W[ij];B[fi];W[gh];B[ej];W[ei];B[fh];W[ek];B[fg];W[hg];B[qg];W[nc];B[jc];W[cc];B[cd];W[dc];B[ec];W[eb];B[fc];W[bd];B[be];W[bc];B[cf];W[fb];B[gc];W[qc];B[pc];W[pb];B[ob];W[qb];B[oc];W[nb];B[oa];W[qd];B[qe];W[re];B[qf];W[rf];B[nd];W[ii];B[jk];W[kl];B[op];W[mq];B[qo];W[ro];B[qn];W[rn];B[rm];W[pp];B[on];W[oq];B[mo];W[qm];B[pm];W[ql];B[rl];W[qk];B[rk];W[qj];B[rj];W[qi];B[rh];W[nk]C[balaura: obrigada
      Phelan: Obrigado pelo jogo :)
      balaura: :)
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Erendiro Pedro Sangueve"),
    whiteRef: findPlayerRef("Fabrício Caluza Machado"),
    date: new Date(2021, 11, 24).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39754350",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-23]PC[OGS: https://online-go.com/game/39754350]GN[DOGemP - liga A dez 2021]PB[AfricanGrimReaper]PW[Fabrício]BR[6k]WR[3k]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]C[AfricanGrimReaper: Have fun :)
      Fabrício: Bom jogo!
      ]AP[Sabaki:0.52.1];B[pc];W[dp];B[qp];W[dd];B[op];W[pe];B[qe];W[qf];B[qd];W[pf];B[nc];W[qj];B[cn];W[fq];B[dj];W[cg];B[db];W[dc];B[eb];W[cb];B[hc];W[np];B[nq];W[mq];B[no];W[mp];B[oq];W[qm];B[hq];W[jq];B[ho];W[fo];B[jo];W[ip];B[io];W[hp];B[gp];W[gq];B[kq];W[hr];B[jr];W[kp];B[jp];W[iq];B[ir];W[hq];B[lp];W[ko];B[lo];W[kn];B[lq];W[ln];B[mn];W[im];B[hm];W[il];B[hl];W[hk];B[fm];W[fl];B[fn];W[el];B[dm];W[go];B[gn];W[ik];B[gk];W[fj];B[fk];W[ek];B[ej];W[gl];B[gj];W[fi];B[gi];W[fh];B[gh];W[fg];B[dk];W[gg];B[ii];W[ll];B[ml];W[lk];B[pk];W[qk];B[pm];W[pj];B[ql];W[rl];B[pl];W[rn];B[qn];W[rm];B[mk];W[li];B[ig];W[mj];B[ne];W[hh];B[ij];W[ih];B[jh];W[hg];B[kj];W[ji];B[jj];W[ki];B[dl];W[lj];B[em];W[id];B[ic];W[jd];B[hd];W[he];B[kf];W[jf];B[kd];W[jc];B[jb];W[kc];B[nh];W[kb];B[ia];W[fc];B[fb];W[mf];B[nf];W[ng];B[mg];W[og];B[je];W[le];B[ke];W[ie];B[ld];W[lg];B[kg];W[mh];B[cq];W[cp];B[bp];W[dr];B[eo];W[bo];B[dq];W[eq];B[fp];W[bq];B[ch];W[bg];B[bh];W[ah];B[ai];W[ag];B[bj];W[bm];B[bl];W[gd];B[ec];W[gc];B[gb];W[ed];B[re];W[rf];B[sf];W[sg];B[se];W[rg];B[ro];W[da];B[ea];W[ka];B[ib];W[oa];B[ob];W[na];B[pa];W[mb];B[if];W[hf];B[jg];W[dh];B[di];W[ok];B[nk];W[pn];B[om];W[on];B[nm];W[qo];B[oj];W[rp];B[rq];W[so];B[qq];W[sq]C[AfricanGrimReaper: Gg
      AfricanGrimReaper: Thanks
      Fabrício: obrigado
      Fabrício: interessante que o jogo tava bem próximo, apesar de eu estar pressionando no final
      Fabrício: eu perdi muitos pontos na primeira metade
      Fabrício: não vi.  Qndo eu joguei L19 eu tava querendo preparar P19, mas eu deixei de consertar C18 pra isso
      Fabrício: eu tava tentando pressionar pq eu sabia que o jogo tava próximo
      Fabrício: assim? Tbm não vi
      Fabrício: ok
      psygo: A partida foi muito próxima quase o tempo inteiro, bem bacana.
      psygo: O Eren tb nao viu o clamp em B18, que ele podia ter utilizado agora no final tanto na hora de viver com o seu grupo qto depois.
      psygo: P16 tb foi um ponto que vc poderia ter explorado durante mtu tempo. A resposta nao me pareceu clara para ele, ele possuía muitos pontos de corte.
      psygo: Acho que o maior erro do Branco no final das contas foi ao redor de J4. Uma sequência melhor teria sido, ao invés de F5, jogar a variacao acima
      psygo: A sequência acima é um sente bem grande que branco teria
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Laura Augustina Avram"),
    whiteRef: findPlayerRef("Fabrício Caluza Machado"),
    date: new Date(2021, 11, 28).getTime(),
    result: {
      whoWins: Color.Black,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39858503",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-27]PC[OGS: https://online-go.com/game/39858503]GN[DOGemP - liga A dez 2021]PB[balaura]PW[Fabrício]BR[4k]WR[3k]TM[3600]OT[15/600 canadian]RE[B+R]SZ[19]KM[6.5]RU[Japanese]C[balaura: Boa partida :)
      Fabrício: Bom jogo!
      ]AP[Sabaki:0.52.1];B[qd]C[Fabrício: Bom jogo!
      ];W[dp];B[pq];W[dd];B[fc];W[cf];B[jd];W[qo];B[op];W[od];B[mc];W[qc];B[qg];W[rd];B[pc];W[pd];B[qe];W[oc];B[rc];W[pb];B[qb];W[rb];B[pc];W[hc];B[qc];W[ec];B[fd];W[he];B[cc];W[eb];B[ch];W[ef];B[ck];W[ql];B[cn];W[co];B[dn];W[fq];B[ib];W[hb];B[ff];W[eg];B[ne];W[kd];B[kc];W[je];B[ld];W[ke];B[id];W[ie];B[hd];W[gd];B[gc];W[ge];B[gb];W[fe];B[ic];W[lp];B[ed];W[dc];B[qp];W[po];B[oo];W[on];B[mo];W[nn];B[mp];W[qi];B[cq];W[bo];B[hq];W[fo];B[fr];W[gr];B[eq];W[er];B[fp];W[gq];B[ep];W[eo];B[dq];W[do];B[gp];W[hp];B[hr];W[fs];B[go];W[ip];B[jq];W[jp];B[kq];W[dr];B[cr];W[hs];B[ir];W[ds];B[kp];W[fm];B[gn];W[em];B[jo];W[in];B[io];W[hn];B[ho];W[gm];B[ei];W[dj];B[cj];W[di];B[dk];W[ek];B[dh];W[ej];B[eh];W[bi];B[ci];W[bh];B[gi];W[gh];B[fj];W[fk];B[hj];W[fh];B[fi];W[jj];B[hl];W[ik];B[hk];W[hm];B[il];W[jl];B[jm];W[kl];B[bn];W[jn];B[kn];W[km];B[im];W[cl];B[dl];W[bm];B[bl]C[balaura: obrigada
      Fabrício: obrigado. Foi muito dificil!
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Laura Augustina Avram"),
    date: new Date(2021, 11, 29).getTime(),
    result: {
      whoWins: Color.White,
      difference: 6.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39886842",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-28]PC[OGS: https://online-go.com/game/39886842]GN[Liga DOGemP Dez 2021]PB[psygo]PW[balaura]BR[3d]WR[3k]TM[3600]OT[15/600 canadian]RE[W+6.5]SZ[19]KM[6.5]RU[Japanese]C[balaura: boa partida :)
      ]AP[Sabaki:0.52.1];B[pd];W[dq];B[cd]C[psygo: Boa partida!
      ];W[qp];B[do];W[cm];B[cq];W[gq];B[dp];W[dr];B[bo];W[cj];B[cr];W[cg];B[iq];W[ed];B[ec];W[fc];B[dc];W[fd];B[mc];W[kq];B[op];W[qm];B[qq];W[rq];B[pq];W[rr];B[mq];W[ip];B[jq];W[kp];B[jp];W[jo];B[ko];W[lo];B[kn];W[lp];B[hp];W[nr];B[mm];W[no];B[pn];W[oo];B[po];W[pp];B[rp];W[qo];B[qn];W[ro];B[rn];W[sp];B[om];W[kr];B[qd];W[pi];B[qk];W[pf];B[qg];W[pg];B[qh];W[qi];B[ph];W[oh];B[oi];W[ri];B[qf];W[oj];B[ni];W[nj];B[mj];W[mi];B[nh];W[mk];B[lj];W[lk];B[kk];W[kj];B[li];W[pk];B[kl];W[ql];B[rk];W[nm];B[nl];W[pm];B[nn];W[on];B[mo];W[np];B[mp];W[nq];B[mr];W[ln];B[mn];W[km];B[jn];W[jm];B[in];W[mh];B[ng];W[lm];B[ll];W[nk];B[ml];W[jj];B[ik];W[hl];B[im];W[jl];B[jk];W[il];B[ii];W[lh];B[ki];W[ji];B[kh];W[jh];B[kg];W[gk];B[gj];W[jg];B[fj];W[ek];B[hk];W[gl];B[hg];W[kf];B[lg];W[lf];B[mg];W[if];B[ge];W[id];B[di];W[ci];B[fk];W[fl];B[el];W[em];B[dl];W[dm];B[dk];W[dj];B[ej];W[ck];B[fn];W[cl];B[hc];W[hd];B[gd];W[gc];B[ic];W[gf];B[df];W[ef];B[dg];W[dh];B[eg];W[fh];B[eh];W[ei];B[fi];W[fg];B[di];W[ij];B[hj];W[ei];B[rm];W[rl];B[di];W[ch];B[ei];W[de];B[cf];W[ce];B[be];W[bd];B[bf];W[bc];B[cb];W[bb];B[cc];W[eb];B[ba];W[db];B[fb];W[gb];B[ab];W[ir];B[he];W[hf];B[ie];W[jd];B[jc];W[kd];B[rh];W[lb];B[sl];W[pl];B[sk];W[sj];B[lc];W[kc];B[mb];W[ek];B[sh];W[sm];B[kb];W[jb];B[la];W[ib];B[si];W[rj];B[ns];W[or];B[pr];W[sn];B[os];W[ne];B[nd];W[nf];B[fr];W[gr];B[fq];W[ls];B[ms];W[gp];B[fp];W[hq];B[io];W[ho];B[go];W[hn];B[hm];W[ip];B[pj];W[qj];B[hp];W[dd];B[ca];W[ip];B[gn];W[hp];B[gs];W[hr];B[gm];W[pe];B[og];W[jr];B[bm];W[bl];B[bn];W[en];B[eo];W[ld];B[ai];W[md];B[od];W[fa];B[ad];W[bg];B[ag];W[hs];B[fs];W[qs];B[ps];W[jo];B[gh];W[ih];B[gg];W[ff];B[hi];W[da];B[ac];W[mf];B[qr];W[qe];B[re];W[rs];B[al];W[ak];B[am];W[aj];B[ah];W[bi];B[lr];W[cn];B[ks];W[co];B[cp];W[ol];B[ig];W[ja];B[ka];W[jp];B[oq];W[jf];B[hh];W[js];B[ls];W[nm];B[bj];W[bk];B[om];W[af];B[ae];W[nm];B[dk];W[dl];B[om];W[bh];B[af];W[nm];B[hb];W[ha];B[om];W[fm];B[fo];W[nm];B[oe];W[of];B[om];W[bp];B[bq];W[nm];B[];W[om];B[];W[]C[balaura: obrigada
      psygo: Obg
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Lucas Cristovam"),
    whiteRef: findPlayerRef("André Barbosa"),
    date: new Date(2021, 11, 31).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
      difference: 61.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "39944144",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2021-12-30]PC[OGS: https://online-go.com/game/39944144]GN[Liga]PB[lukeverso]PW[seupera]BR[24k]WR[5k]TM[3600]OT[15/600 canadian]RE[W+61.5]SZ[19]KM[0.5]RU[Japanese]HA[9]AB[jd][jp][dj][pj][jj][dd][pp][pd][dp]C[seupera: Bom jogo
      lukeverso: Bom jogo!
      ]AP[Sabaki:0.52.1];W[cn]C[lukeverso: Bom jogo!
      ];B[fq];W[bp];B[co];W[cq];B[dq];W[bo];B[dn];W[nq];B[qn];W[pq];B[qq];W[qr];B[rq];W[op];B[po];W[rr];B[lq];W[nn];B[pl];W[cf];B[fc];W[cc];B[cd];W[bd];B[bc];W[bb];B[ce];W[be];B[bf];W[cg];B[ch];W[bh];B[ci];W[dc];B[ec];W[ed];B[de];W[eg];B[ee];W[cm];B[cl];W[dm];B[em];W[el];B[en];W[dl];B[dk];W[gl];B[bk];W[bl];B[ck];W[am];B[bg];W[ag];B[bi];W[af];B[gd];W[ei];B[md];W[qc];B[qd];W[pc];B[oc];W[ob];B[nc];W[nb];B[mb];W[rd];B[re];W[rc];B[qe];W[oe];B[od];W[lc];B[ld];W[mc];B[lb];W[kc];B[kb];W[jc];B[ic];W[ke];B[kd];W[ok];B[pg];W[pk];B[qk];W[ol];B[pm];W[qj];B[qi];W[rj];B[ri];W[rk];B[ql];W[pi];B[ph];W[oj];B[rl];W[rp];B[sq];W[qp];B[qo];W[sp]C[lukeverso: Ah, eu não tinha visto essa.
      lukeverso: Legal...
      ];B[ro]C[seupera: Boa pra endgame, normalmente
      ];W[sr];B[so];W[rm]C[lukeverso: Isso aqui é um tsumego?
      lukeverso: Tô tentando entender.
      lukeverso: Sem spoilers, porém.
      lukeverso: KKKKKKKKKK
      ];B[on];W[om];B[sl];W[oo];B[sj]C[seupera: há. Eu jurava que tava morto...
      ];W[pj]C[lukeverso: Eu tô pensando nisso agora.
      seupera: boa jogada
      lukeverso: Se você fechasse ali, eu só jogo em T9 agora, certo?
      lukeverso: Porque aí esse grupo vive.
      lukeverso: Aquilo era um tsumego, não era?
      seupera: sim, era
      lukeverso: Eu literalmente ignorei.
      lukeverso: Ia jogar em outro lugar.
      ];B[sk]C[lukeverso: Mas aí eu me liguei nesse detalhe de que eu não podia perder T9 de algum modo.
      lukeverso: Ou você me cercava de vez.
      lukeverso: Esse grupo estaria morto, né?
      lukeverso: Eu ainda não sou bom em ver isso.
      seupera: Eu também não sou mto bom kkkk
      lukeverso: Tô queimando os neurônios tentando achar uma jogada pra sobreviver KKKKKKKKKKK
      lukeverso: Se T9 estivesse com uma branca, eu tava perdido, acho?
      seupera: Acho que na hora que vc perguntou se era tsumego tinha como salvar mesmo se eu cortasse
      seupera: mas do jeito que tá agora, só conectando
      seupera: mas depois que vc jogou T8 tava viva
      seupera: eu não tinha como cortar mais
      lukeverso: Ah, é? E eu tava com medo de ter feito coisa errada em T8.
      lukeverso: Geralmente minha lógica é: "Vou tentar cercar o tabuleiro logo."
      seupera: não, pq ia ser auto-atari
      lukeverso: Mas eu odeio invasões porque ainda não sou bom em preveni-las.
      seupera: ou melhor
      seupera: acho que eu podia cortar, mas ai vc jogava P5
      seupera: T10 e P5 eram miai
      lukeverso: Sim...
      lukeverso: Entendi...
      ];W[nh]C[lukeverso: Outra coisa que eu não gosto muito é esse tipo de jogada que você fez. Pra mim, ela é muito "??? Que foi isso?"
      lukeverso: E eu sempre fico me perguntando o que tá rolando.
      lukeverso: Qual a intenção.
      lukeverso: E acabo perdendo tempo demais.
      seupera: No caso, eu tô pra tras no jogo
      seupera: então não as vezes pode ser qualquer loucura só pra ver como você joga
      seupera: eu tenho um plano por trás
      lukeverso: Tipo uma jogada de passe mesmo?
      seupera: mas não é um bom plano
      lukeverso: Sim, entendi.
      seupera: não necessáriamente um bom plano
      lukeverso: Toda jogada sempre tem uma intenção, claro.
      seupera: tipo, não é um passe, mas não é uma jogada boa mesmo
      ];B[hn];W[fm];B[fn];W[gn];B[go];W[gm];B[ho];W[il]C[lukeverso: Confesso que minha intenção, no geral, é mais defensiva.
      lukeverso: Preciso aprender a atacar mais.
      lukeverso: Mas acho que, pra isso, preciso antes saber me proteger.
      seupera: você começou na vantagem, então isso não é de todo ruim
      lukeverso: Exatamente.
      seupera: é muito mais importante saber identificar como se defender, e quando se defender
      ];B[jl]C[seupera: dois erros principais no começo do jogo: Não se defender quando precisava, se defender quando não precisava
      ];W[jm]C[lukeverso: Tem razão...
      seupera: O ataque é um jeito de vc conseguir sente
      lukeverso: Esse tipo de coisa eu ainda não sei bem como identificar. Então eu tentendo mais "conter" um prejuízo maior.
      seupera: Mas até no meu nível, a gente perde mais 'tempo' reagindo a jogadas gote
      ];B[im];W[km];B[ik];W[hl];B[jn];W[jg]C[lukeverso: Pronto, essa jogada sua agora, a meu ver, é pra tentar algo naquela região vasta que tá ali no tabuleiro.
      lukeverso: Minha lógica pra esse tipo de coisa é tentar "conter" usando algum grupo próximo.
      seupera: Exato, eu sinto que estou perdendo (ainda não conto direito)
      lukeverso: Eu nem sei contar KKKKKKKKK
      seupera: então eu to tentando pegar bastante coisa no centro
      ];B[if]C[lukeverso: Sim...
      ];W[ig];B[gf];W[hg]C[lukeverso: Eu sei que é um jogo de "negociação", como falam. Eu jogo bem tipo "Beleza, se você quer essa parte, pode pegar, mas eu vou tentar ficar com essa outra aqui, viu?"
      ];B[hf]C[seupera: Sim, em geral. Você só tem que tomar cuidado com o que tá querendo pegar
      lukeverso: É por isso que não gosto de invasões!
      seupera: Tipo, eu pego 10 pontos, e você 2
      seupera: Ou, você pega 3 pontos, e eu ataco um grupo seu
      ];W[kn];B[ko];W[kk]C[seupera: Uma coisa que eu tinha bastante dificuldade no começo era ver o tabuleiro tod
      ];B[mg];W[mh]C[lukeverso: Eu sinto essa dificuldade no começo do jogo.
      lukeverso: Mas nessa hora aqui, eu consigo enxergar coisas.
      ];B[kf];W[kg];B[jf];W[lg];B[lf];W[nf];B[ng];W[og];B[mf];W[oh];B[pf];W[of];B[ne];W[cr];B[fk];W[ek];B[ej];W[gj];B[gk];W[hk];B[fj];W[hj];B[fh];W[eh];B[fg];W[fi];B[gi];W[gh];B[hi];W[ii]C[lukeverso: Ah, achei que ia dar pra conectar tudo KKKKKKKKK
      lukeverso: Não vi esse atari aí.
      ];B[ef];W[dg];B[di];W[mr];B[lr];W[pa];B[jb];W[eb];B[fb];W[fs]C[lukeverso: Oxe.
      seupera: Salto do macaco
      lukeverso: Nunca ouvi falar.
      lukeverso: E eu literalmente disse "Oxe" em voz alta.
      lukeverso: KKKKKKKKKKKK
      seupera: Esse é bem legal
      seupera: Faz mó diferença no endgame
      lukeverso: Eu tô curtindo esse jogo num nível incrível, cara.
      lukeverso: Acho que é a melhor partida que já joguei até agora.
      seupera: e você tá jogando bem
      ];B[er];W[es]C[lukeverso: É graças a você, sério.
      ];B[gr];W[gs];B[is];W[hs];B[ir];W[hr];B[hq];W[ds];B[dr];W[lo];B[lp];W[ea];B[fa];W[cb];B[ms];W[ns];B[ls];W[mo]C[lukeverso: Ó, isso que eu vou fazer agora é realmente uma invasão.
      lukeverso: Mas não julgue.
      seupera: de boa
      lukeverso: Eu só quero ver onde vai dar.
      lukeverso: KKKKKKKKKKK
      seupera: eu fazia altos overplay
      seupera: jogando até o fim
      lukeverso: """"""""Invasão"""""""".
      seupera: tem que treinar o máximo possível
      lukeverso: É que aquele centro tá muito vazio.
      lukeverso: Mas não sei onde jogar pra tentar reduzir, se é que dá.
      ];B[kl];W[ll];B[jk];W[kj];B[ji];W[ki];B[ih];W[jh];B[ij];W[ii]C[lukeverso: KKKKKKKKKKKKKK
      lukeverso: Okay.
      seupera: nem vou dar dica nessa etapa ainda
      seupera: pq vai da experiencia
      seupera: uma hora vc começa a ver se tem espaço pra fazer dois olhos ou não
      seupera: ou se tem  fraquezas que dá pra abusar
      seupera: até lá, eu recomendo tentar e tentar
      lukeverso: Te juro que, quando você jogou K12, eu falei comigo mesmo, "É só capturar, não?"
      lukeverso: Foi no automático.
      ];B[si]C[seupera: Eu sei, joguei lá pra isso mesmo
      lukeverso: Dei alguns pontos de graça.
      ];W[se]C[lukeverso: Mas tá de boa.
      ];B[sf]C[seupera: Não necessáriamente, pq era meu território, e tive que colocar pedras nele
      lukeverso: Ah, verdade, isso reduz, certo?
      seupera: e como eu acabei capturando, ficou elas por elas
      seupera: sim
      lukeverso: Interessante.
      seupera: o problema é se vc joga e eu jogo fora do meu territorio
      seupera: pq aí sim eu to ganhando pontos
      ];W[sd];B[pe];W[na];B[ma];W[cp];B[do];W[mq];B[gg];W[mp]C[seupera: Eu podia ter conectado, mas deixei o snapback pra ficar com o sente
      lukeverso: Me lembra o que é sente, por favor?
      seupera: sente é iniciativa
      lukeverso: Snapback também.
      seupera: snapback é quando você captura uma pedra, e eu capturo o grupo de volta
      lukeverso: Ahhhhhh.
      seupera: que nem aconteceu com aquele grupo do meio
      lukeverso: E eu tava me perguntando porque cê tinha ignorado aquela captura.
      seupera: se vc jogar H12, por exemplo, vc captura uma pedra
      seupera: mas o grupo que vai ficar lá, vai ter uma única liberdade, em G12
      seupera: aí eu jogo lá
      lukeverso: Sim...
      seupera: isso é snapback
      lukeverso: E pega os dois grupos.
      lukeverso: Legal.
      lukeverso: Eu sabia que tinha algo.
      lukeverso: Quase fui no impulso de capturar de novo.
      ];B[dh]C[seupera: É meio dificil de ver no começo
      lukeverso: Eu não tinha visto mesmo.
      lukeverso: Eu sabia que ficaria G12 aberto, mas não me liguei que ia pegar as 4 pedras.
      seupera: Mas com a experiencia fica mais facil
      ];W[cs];B[df];W[hh];B[hm];W[fr];B[iq];W[pn];B[];W[]C[seupera: Obrigado pelo jogo
      lukeverso: Quêeeeeee!
      lukeverso: Que incrível!
      lukeverso: Ainda foi uma pontuação alta!
      lukeverso: De verdade, melhor partida até agora.
      lukeverso: Obrigado pelo jogo!
      seupera: Claro. Querendo jogar, é só chamar
      lukeverso: Com certeza!
      seupera: só nao ofereço para revisar agora, pq minha esposa está em reunião agora
      lukeverso: Nada, sem problemas.
      seupera: Se vc quiser, podemos revisar mais tarde
      seupera: umas 19 horas ou no fim de semana
      seupera: Você até pode dar uma olhada e ver se tem alguma dúvida
      seupera: Não sei se vc tá no tier com revisao da liga, eu não to :'(
      lukeverso: Também não. Entrei pra jogar com outras pessoas!
      lukeverso: Mas podemos nos reunir mais tarde. Estou livre!
      seupera: Isso é ótimo, jogando com gente mais forte e com tempo pra pensar é bom
      lukeverso: Isso mesmo. A ideia é de aprender na prática, sabe?
      seupera: Sim
      seupera: Minha esposa acabou de sair da reuniao
      lukeverso: Opa, então vamos pro Discord.
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  // ***************************************************************************
  // Jan 2022
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Gabriel Garcia"),
    whiteRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    date: new Date(2022, 0, 9).getTime(),
    result: {
      whoWins: Color.White,
      difference: 109.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40192381",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-08]PC[OGS: https://online-go.com/game/40192381]GN[DOGemP - Liga B jan 2021]PB[PutzGrila]PW[vandito]BR[19k]WR[20k]TM[3600]OT[15/600 canadian]RE[W+109.5]SZ[19]KM[6.5]RU[Japanese]C[PutzGrila: Bom jogo aew
      vandito: Bom jogo!
      ]AP[Sabaki:0.52.1];B[qd]C[PutzGrila: Bom jogo aew
      vandito: Bom jogo!
      ];W[dp];B[pp];W[dc];B[fc];W[ce];B[db];W[cc];B[fe];W[cn];B[nq];W[fq];B[qj];W[jc];B[pc];W[mc];B[cl];W[cj];B[bj];W[bi];B[bk];W[iq];B[cm];W[bn];B[el];W[ei];B[dg];W[ee];B[ge];W[eb];B[fb];W[ea];B[gd];W[eg];B[df];W[ef];B[de];W[dd];B[ed];W[ec];B[fd];W[dh];B[dj];W[cg];B[di];W[ci];B[ek];W[hi];B[fi];W[ej];B[dk];W[fj];B[fh];W[eh];B[gg];W[ig];B[gf];W[gl];B[jm];W[qg];B[og];W[pe];B[pf];W[pi];B[oe];W[od];B[pd];W[qe];B[nd];W[qf];B[ph];W[pg];B[of];W[oh];B[oi];W[qh];B[pj];W[oj];B[ni];W[nk];B[nh];W[qi];B[ok];W[nj];B[pk];W[rj];B[ol];W[nl];B[nm];W[mm];B[om];W[mn];B[nn];W[mo];B[no];W[mq];B[mp];W[lp];B[np];W[mr];B[kj];W[jl];B[il];W[im];B[kl];W[jk];B[kk];W[km];B[ll];W[jn];B[ml];W[qq];B[mj];W[jj];B[jh];W[ji];B[ki];W[ie];B[hh];W[ih];B[jf];W[jg];B[kh];W[kf];B[ke];W[je];B[lf];W[if];B[kg];W[ng];B[nf];W[oc];B[nc];W[mf];B[mg];W[me];B[md];W[le];B[jf];W[ob];B[ld];W[kf];B[ne];W[pb];B[lc];W[rd];B[jd];W[id];B[jf];W[mb];B[kb];W[jb];B[nb];W[ja];B[ma];W[kd];B[kc];W[fa];B[jd];W[gb];B[hc];W[hb];B[hl];W[hm];B[hj];W[hk];B[gj];W[fk];B[ic];W[kd];B[ib];W[ia];B[jd];W[ha];B[ka];W[hd];B[gc];W[kd];B[kf];W[jd];B[gi];W[ij];B[ii];W[hg];B[hi];W[gk];B[ai];W[ah];B[aj];W[bh];B[fn];W[em];B[en];W[fm];B[hf];W[fg];B[gh];W[cf];B[dn];W[dm];B[gn];W[gm];B[do];W[co];B[ep];W[eq];B[ck];W[bm];B[cp];W[dq];B[bp];W[bl];B[an];W[fl];B[bo];W[dl];B[cq];W[ak];B[dr];W[fp];B[nr];W[ms];B[ns];W[eo];B[er];W[fr];B[fs];W[gs];B[es];W[gr];B[mk];W[ho];B[jp];W[fo];B[ko];W[hn];B[lo];W[lm];B[lq];W[go];B[lr];W[cs];B[cr];W[rk];B[qo];W[ro];B[rp];W[rn];B[ql];W[qp];B[rq];W[qr];B[rm];W[rr];B[sn];W[qn];B[po];W[sq];B[so];W[sp];B[sm];W[rl];B[qm];W[rp];B[pn];W[pr];B[ls];W[os];B[or];W[ps];B[pq];W[si];B[ip];W[jq];B[kp];W[kq];B[hq];W[hr];B[hp];W[jr];B[sl];W[am];B[ao];W[oa];B[na];W[qc];B[ks];W[js];B[io];W[pd];B[in];W[jm];B[bs];W[br];B[ds];W[];B[]C[PutzGrila: vlw =D
      vandito: Obrigado pela partida!
      vandito: foi ótimo jogo
      vandito: foi um*
      vandito: Merci pour l'examen, M. Sallmard!
      Sallmard: Si ça vous intéresse https://online-go.com/game/40194913
      Sallmard: La revue AI détaillée 
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("Laércio Pereira"),
    date: new Date(2022, 0, 10).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40224966",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-09]PC[OGS: https://online-go.com/game/40224966]GN[Partie amicale]PB[cixidetroy]PW[laercioskt]BR[16k]WR[1d]TM[3600]OT[9x300 byo-yomi]RE[W+R]SZ[19]KM[0.5]RU[Chinese]HA[9]AB[dd][jd][pd][pj][jj][dj][dp][jp][pp]AP[Sabaki:0.52.1];W[mp]C[laercioskt: Boa partida
      laercioskt: I will :)
      ];B[nq];W[mq]C[cixidetroy: Também quero chegar 1d algum dia <3 
      cixidetroy: Foi difícil?
      ];B[oq];W[pn];B[rp]C[laercioskt: acho que estabilizei no último ano, então foram 7 anos
      laercioskt: mas tem gente que consegue em meses então é relativo
      ];W[fq];B[cn]C[cixidetroy: Entendi
      cixidetroy: Não tenho muito tempo para jogar 
      cixidetroy: Então provavelmente demore
      ];W[hp];B[eq];W[cf];B[fc];W[qf];B[nc];W[qd];B[qc];W[rc];B[qe];W[rd];B[pe];W[re];B[pf];W[qg];B[pg];W[hc];B[jb];W[he];B[fe];W[hg];B[eg];W[bd];B[cc];W[ch];B[dh];W[ci];B[di];W[jf];B[ld];W[ph];B[oh];W[pi];B[oi];W[qj];B[pk];W[qk];B[li];W[hi];B[hj];W[gj];B[gi];W[gh];B[fi];W[ij];B[hk];W[ii];B[ik];W[cj];B[ie];W[id];B[ic];W[hd];B[je];W[ib];B[jc];W[ff];B[ef];W[hf];B[ig];W[ji];B[if];W[fb];B[gb];W[gc];B[eb];W[fd];B[ge];W[ec];B[fa];W[fc];B[de];W[kj];B[jk];W[ki];B[hb];W[db];B[kk];W[ia];B[ja];W[cb];B[bc];W[ea];B[ha];W[bb];B[ab];W[dc];B[cd];W[cl];B[kf];W[jq];B[kp];W[kq];B[ip];W[iq];B[ho];W[cq];B[cp];W[er];B[dr];W[dq];B[ep];W[cr];B[fp];W[gq];B[bq];W[rn];B[dl];W[dm];B[em];W[dk];B[el];W[cm];B[ek];W[gp];B[go];W[ln];B[jn];W[oj];B[ok];W[nj];B[nk];W[mj];B[mk];W[lj];B[lk];W[ng]C[laercioskt: obrigado pela partida
      laercioskt: mas tinha jogo ainda ehm :)
      laercioskt: jogou bem demais
      laercioskt: parabéns
      cixidetroy: obrigada pela partida
      cixidetroy: tô exausta
      laercioskt: imagino rs
      cixidetroy: podia continuar mas tô sem força de verdade
      cixidetroy: mas obga foi mto interessante a partida
      laercioskt: tranquilo, entendo
      laercioskt: o Philippe vai revisar essa partida?
      cixidetroy: acho que sim :)
      laercioskt: se quiser (talvez em outra hora) posso apontar algumas coisas
      cixidetroy: vc quer revisar agora?
      cixidetroy: quero:D
      cixidetroy: pode ser outro momento sim
      cixidetroy: amanha da pra você?
      laercioskt: amanhã vai ser complicado
      laercioskt: estou com muito trabalho durante a semana
      cixidetroy: pode ser agora mesmo se quiser
      cixidetroy: fim de semana que vem tô ocupada
      laercioskt: vamos lá então
      cixidetroy: ok
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    whiteRef: findPlayerRef("Ariel Oliveira"),
    date: new Date(2022, 0, 10).getTime(),
    result: {
      whoWins: Color.Black,
      time: true,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40229371",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-09]PC[OGS: https://online-go.com/game/40229371]GN[DOGemP - Liga B jan 2022]PB[vandito]PW[Oliv.AS]BR[19k]WR[13k]TM[3600]OT[15/600 canadian]RE[B+T]SZ[19]KM[6.5]RU[Japanese]C[vandito: Bom jogo!
      Oliv.AS: Estão jogando sem handicap?
      ]AP[Sabaki:0.52.1];B[pd]C[vandito: Bom jogo!
      Oliv.AS: Estão jogando sem handicap?
      ];W[pp]C[vandito: Sim
      Oliv.AS: Bom jogo para você também!
      Oliv.AS: =)
      ];B[cd];W[dp]C[vandito: Eu acho que eu precisaria de handcap contra ti aparentemente tu é bem mais forte... Mas vamos essa assim mesmo. Quero me desafiar um pouco
      ];B[cn];W[fp];B[cp]C[Oliv.AS: tranquilo, nas próximas se for preciso usamos handicap
      ];W[cq];B[dq];W[cr];B[ep];W[do];B[co];W[eq];B[eo];W[dr];B[dn];W[qj];B[dj];W[ec];B[dc];W[ed];B[ee];W[ic];B[gc];W[gd];B[hc];W[hd];B[id];W[jd];B[ie];W[kc];B[ib];W[jc];B[fd];W[fc];B[ge];W[fe];B[ff];W[fd];B[he];W[jb];B[hb];W[ia];B[ga];W[de];B[df];W[ce];B[dd];W[ef];B[eg];W[fb];B[eb];W[db];B[ea];W[fa];B[cb];W[da];B[ca];W[bd];B[cc];W[bc];B[ee];W[cf];B[cg];W[bg];B[bf];W[be];B[ef];W[jq];B[je];W[nc];B[mc];W[md];B[nb];W[lc];B[mb];W[oc];B[nd];W[pc];B[eb];W[ea];B[ld];W[me];B[ne];W[le];B[mf];W[lf];B[ob];W[pb];B[od];W[qc];B[lb];W[mg]C[Oliv.AS: ué...desculpe perguntar, mas não deveria ter acabado o tempo?
      ];B[nf];W[lg]C[vandito: estamos nos extras
      ];B[ng]C[vandito: ahh nãoo!
      vandito: foi injusto :(
      Oliv.AS: que estranho, primeira vez que jogo com tempo canadense
      vandito: Aconteceu isso comogo também no primeiro jogo
      Oliv.AS: não se preocupe, está tudo bem
      Oliv.AS: então kkkk
      Oliv.AS: obrigado pelo jogo =)
      vandito: Tipo o tempo extra você tem 15 pedras para jogar em 10 min
      vandito: Obrigado pela partida!
      Oliv.AS: ah sim
      Oliv.AS: so jogo byo yomi japones
      vandito: Poxa tu tava bem na frente... Já tava pensando em desistir
      Oliv.AS: vou prestar mais atenção na próxima
      Oliv.AS: vou indo nessa, obrigado
      Oliv.AS: depois jogamos mais!
      Oliv.AS: =)
      Oliv.AS: boa noite
      vandito: Boa noite!
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    whiteRef: findPlayerRef("Fabrício Caluza Machado"),
    date: new Date(2022, 0, 10).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40252915",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-10]PC[OGS: https://online-go.com/game/40252915]GN[DOGemP - Liga B jan 2022]PB[vandito]PW[Fabrício]BR[18k]WR[3k]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[0.5]RU[Japanese]HA[9]AB[jd][jp][dj][pj][jj][dd][pp][pd][dp]C[vandito: Bom jogo!
      Fabrício: bom jogo!
      ]AP[Sabaki:0.52.1];W[nq];B[oq];W[np];B[no];W[op];B[pr];W[po];B[qp];W[qo];B[ro];W[rn];B[rp];W[qm];B[pn];W[oo];B[on];W[nn];B[mo];W[nm];B[ml];W[qf];B[mm];W[om];B[qe];W[pf];B[of];W[og];B[oe];W[ng];B[qh];W[ph];B[qg];W[rf];B[qi];W[pg];B[re];W[nj];B[pl];W[pm];B[nk];W[ok];B[oj];W[ol];B[qk];W[fq];B[ni];W[mj];B[mi];W[lj];B[li];W[kj];B[ki];W[ll];B[mn];W[jk];B[nr];W[ji];B[ij];W[jh];B[lg];W[oi];B[ql];W[ik];B[hj];W[me];B[nd];W[md];B[nc];W[ke];B[mf];W[nf];B[kf];W[jf];B[mg];W[kg];B[ne];W[hk];B[gk];W[gj];B[gi];W[fj];B[fk];W[hi];B[gh];W[cn];B[co];W[dn];B[en];W[do];B[eo];W[ep];B[eq];W[fp];B[cq];W[em];B[bo];W[gn];B[mq];W[rl];B[fr];W[er];B[dr];W[dq];B[mp];W[qn];B[eq];W[pq];B[qq];W[dq];B[kh];W[lf];B[eq];W[se];B[fm];W[fn];B[sd];W[dq];B[el];W[cp];B[dm];W[sf];B[bp];W[dp];B[es];W[cr];B[eq];W[bq];B[bn];W[cm];B[bm];W[cl];B[bl];W[ck];B[cj];W[bk];B[ak];W[bj];B[bi];W[aj];B[ai];W[rd];B[ej];W[ii];B[gm];W[qc];B[mc];W[kd];B[kc];W[jc];B[id];W[lc];B[kb];W[lb];B[jb];W[pc];B[fi];W[hq]C[vandito: Obrigado pela partida!
      Fabrício: obrigado. Partidas com handicap alto são dificeis, tenho que explorar tudo que é espaço
      Fabrício: não consigo revisar que nem o Fanaro faz, mas consigo anotar algumas coisas
      vandito: Seria de grande valia Fabrício. Se tiver alguma dica para me dar eu aceito de bom grado! :)
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Garcia"),
    whiteRef: findPlayerRef("Ariel Oliveira"),
    date: new Date(2022, 0, 14).getTime(),
    result: {
      whoWins: Color.White,
      difference: 111.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40341596",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-13]PC[OGS: https://online-go.com/game/40341596]GN[DOGemP - Liga C jan 2022]PB[PutzGrila]PW[Oliv.AS]BR[14k]WR[13k]TM[3600]OT[15/600 canadian]RE[W+111.5]SZ[19]KM[6.5]RU[Japanese]AP[Sabaki:0.52.1];B[pc];W[dd];B[oj];W[pq];B[pp];W[cp];B[oq];W[qq];B[qn];W[qo];B[po];W[qp];B[on];W[rn];B[qm];W[rm];B[rk];W[eq];B[jp];W[cj];B[lr];W[jc];B[ne];W[mc];B[nc];W[md];B[nd];W[me];B[mg];W[mf];B[nf];W[lg];B[mh];W[lh];B[mi];W[lj];B[li];W[kj];B[ki];W[lf];B[lk];W[kk];B[ll];W[kl];B[lm];W[km];B[kn];W[jn];B[ko];W[jo];B[lp];W[jm];B[mb];W[lb];B[nb];W[lc];B[ji];W[ip];B[jq];W[iq];B[ir];W[hr];B[kr];W[hq];B[ed];W[dc];B[ee];W[df];B[ef];W[eg];B[fg];W[gh];B[dg];W[eh];B[de];W[cf];B[dh];W[ei];B[hh];W[gg];B[gf];W[fh];B[ff];W[hg];B[ih];W[jh];B[jf];W[jg];B[ig];W[if];B[hf];W[ie];B[ii];W[ce];B[ej];W[di];B[gj];W[gd];B[fi];W[dl];B[dj];W[ci];B[dk];W[ck];B[el];W[dm];B[id];W[he];B[je];W[jd];B[gc];W[ic];B[ec];W[eb];B[fb];W[db];B[la];W[ka];B[ma];W[kb];B[fn];W[gl];B[hl];W[gi];B[fj];W[hi];B[ij];W[hj];B[hk];W[gk];B[ik];W[ek];B[fk];W[fl];B[gm];W[ek];B[em];W[en];B[fm];W[eo];B[fo];W[fp];B[gp];W[io];B[gq];W[gr];B[fq];W[ep];B[go];W[fr];B[hs];W[hm];B[im];W[hn];B[fs];W[es];B[is];W[gs];B[ea];W[da];B[fa];W[hb];B[ro];W[rp];B[bc];W[bd];B[cb];W[ab];B[mj];W[qe];B[qf];W[qc];B[qb];W[rb];B[rc];W[qd];B[sb];W[rf];B[qg];W[rd];B[sc];W[sd];B[ra];W[rg];B[pe];W[qh];B[ph];W[qi];B[qj];W[ri];B[rj];W[pd];B[od];W[pf];B[pg];W[oe];B[of];W[pe];B[pi];W[se];B[sj];W[si];B[rl];W[or];B[nr];W[nq];B[op];W[mr];B[mq];W[ns];B[np];W[nr];B[ls];W[ps];B[];W[]C[Oliv.AS: Gabriel
      Oliv.AS: Muito obrigado pelo jogo!
      Oliv.AS: =)
      PutzGrila: =D
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("André Barbosa"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2022, 0, 15).getTime(),
    result: {
      whoWins: Color.White,
      difference: 63.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40366499",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-14]PC[OGS: https://online-go.com/game/40366499]GN[Desafio]PB[seupera]PW[psygo]BR[5k]WR[3d]TM[3600]OT[15/600 canadian]RE[W+63.5]SZ[19]KM[6.5]RU[Japanese]C[psygo: Boa partida
      seupera: Bom jogo
      ]AP[Sabaki:0.52.1];B[pd];W[dd];B[pq];W[dq];B[qo];W[cn];B[jq];W[pn];B[qn];W[qc];B[pc];W[qd];B[pe];W[rf];B[cf];W[fc];B[cd];W[cc];B[bc];W[ce];B[bd];W[de];B[be];W[cb];B[jd];W[ch];B[df];W[bg];B[bf];W[fe];B[dh];W[cj];B[di];W[dj];B[ej];W[ek];B[pm];W[ei];B[fj];W[fi];B[gi];W[gj];B[fk];W[gh];B[hi];W[eg];B[cg];W[bh];B[eh];W[fh];B[fg];W[gg];B[ef];W[ff];B[bb];W[ba];B[ee];W[ed];B[el];W[cl];B[dk];W[ck];B[dp];W[cp];B[do];W[co];B[eq];W[dr];B[er];W[en];B[fo];W[em];B[qg];W[rg];B[qh];W[ij];B[ih];W[jf];B[kh];W[kd];B[kc];W[jc];B[lc];W[id];B[ke];W[je];B[jb];W[ib];B[ld];W[gl];B[gk];W[hj];B[hk];W[ik];B[hl];W[ii];B[il];W[hh];B[gm];W[gn];B[fn];W[fm];B[hm];W[eo];B[fp];W[ep];B[rh];W[fq];B[gq];W[fr];B[gr];W[es];B[gp];W[gs];B[qb];W[rb];B[kl];W[hr];B[hq];W[ir];B[iq];W[kr];B[jr];W[js];B[lq];W[lr];B[kq];W[mq];B[mp];W[nq];B[np];W[oq];B[op];W[pr];B[is];W[hs];B[or];W[nr];B[qr];W[os];B[qq];W[kj];B[ji];W[kk];B[ll];W[mj];B[ni];W[mi];B[kf];W[lg];B[lh];W[mh];B[mg];W[ng];B[mf];W[nh];B[nk];W[oi];B[pj];W[mk];B[ml];W[oj];B[ok];W[pi];B[qi];W[pb];B[ob];W[qa];B[jg];W[kb];B[jd];W[ja];B[if];W[ie];B[lb];W[nb];B[nc];W[oa];B[oc];W[qf];B[pf];W[qj];B[pk];W[pg];B[rj];W[qs];B[nj];W[ph];B[rs];W[ps];B[rr];W[sh];B[qk];W[hf];B[qe];W[re];B[si];W[sg];B[ig];W[nf];B[ne];W[me];B[lf];W[oe];B[nd];W[of];B[dl];W[dm];B[fl];W[ki];B[mb];W[na];B[ma];W[pa];B[kd];W[jl];B[jm];W[jj];B[jh];W[ka];B[lk];W[jk];B[kg];W[hg];B[];W[]C[seupera: Obrigado pelo jogo
      seupera: tenho que ver melhor quando um grupo está seguro 
      psygo: Obg pela partida
      seupera: kkk
      psygo: É, nesse quesito, foi parecido com a outra partida que jogamos.
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Guilherme Francisco de Souza Silva"),
    whiteRef: findPlayerRef("Fabrício Caluza Machado"),
    date: new Date(2022, 0, 15).getTime(),
    handicap: 6,
    result: {
      whoWins: Color.Black,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40370260",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-15]PC[OGS: https://online-go.com/game/40370260]GN[DOGemP - Liga B jan 2022]PB[XIKO]PW[Fabrício]BR[10k]WR[3k]TM[3600]OT[15/600 canadian]RE[B+R]SZ[19]KM[0.5]RU[Japanese]HA[6]AB[dj][pj][dd][pp][pd][dp]C[Fabrício: bom jogo!
      XIKO: bom jogo
      ]AP[Sabaki:0.52.1];W[qf];B[nc];W[qd];B[qc];W[rc];B[qe];W[rd];B[pe];W[re];B[qb];W[qn];B[nq];W[pf];B[of];W[pc];B[pb];W[og];B[nf];W[qj];B[ql];W[qk];B[pl];W[pk];B[pn];W[fc];B[cf];W[dc];B[cc];W[cb];B[cd];W[eb];B[hc];W[jc];B[ie];W[hd];B[id];W[ic];B[gd];W[hb];B[gc];W[gb];B[fe];W[ng];B[mf];W[mg];B[lc];W[lf];B[le];W[ke];B[nd];W[me];B[ne];W[ld];B[gp];W[dk];B[ek];W[dl];B[el];W[dm];B[em];W[cj];B[dn];W[di];B[ej];W[ch];B[bg];W[ei];B[fi];W[fh];B[gi];W[gh];B[hi];W[hh];B[ii];W[ee];B[ed];W[fd];B[ge];W[ef];B[eg];W[dg];B[fg];W[ff];B[ih];W[ig];B[hg];W[eh];B[jf];W[jg];B[kg];W[hf];B[he];W[jh];B[kh];W[ji];B[ki];W[jj];B[kf];W[kj];B[lg];W[jd];B[le];W[fj];B[gk];W[lf];B[ck];W[le];B[mi];W[lj];B[li];W[mh];B[mj];W[ll];B[mk];W[ml];B[oj];W[ok];B[nk];W[nl];B[ol];W[qh];B[ph];W[oh];B[qi];W[ri];B[pi];W[qg];B[pg];W[rl];B[rm];W[rk];B[qm];W[iq];B[hq];W[ip];B[lk];W[kk];B[kl];W[if];B[je];W[nj];B[ni];W[oi];B[nj];W[gf];B[lh];W[lq];B[km];W[mn];B[lo];W[ln];B[kn];W[ko];B[mp];W[im];B[nm];W[nn];B[jn];W[jo];B[in];W[hn];B[ho];W[gn];B[io];W[hp];B[go];W[gq];B[fq];W[hr];B[kp];W[lp];B[jp];W[mo];B[ko];W[op];B[oq]C[Fabrício: obrigado
      XIKO: obrigado você
      XIKO: nossa
      XIKO: achei que eu ia morrer
      XIKO: eu acho que você podia ter lutado o ko
      Fabrício: a ameaça C9 era pequena comparada com a luta
      Fabrício: não sei se eu podia ter lutado melhor depois, aquele grupo em P13 que caiu foi péssimo, eu forcei demais.
      Fabrício: Mas eu acho que vc errou por ter corrido com aquelas peças, de poucas peças caindo virou um monstro, apesar de ter dado certo.
      XIKO: faz sentido
      XIKO: era melhor eu ter feito meu moyo né
      Fabrício: parabéns!
      XIKO: nossa, a sorte é que recentemente eu vi um vídeo sobre o básico de semeai
      XIKO: daí consegui contar as liberdades certinho
      Fabrício: :)
      XIKO: obrigado pelos comentários!
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Laércio Pereira"),
    date: new Date(2022, 0, 16).getTime(),
    result: {
      whoWins: Color.Black,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40389931",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-15]PC[OGS: https://online-go.com/game/40389931]GN[Grupo A | Jan 2022 | DOGemP]PB[psygo]PW[laercioskt]BR[3d]WR[1k]TM[3600]OT[15/600 canadian]RE[B+R]SZ[19]KM[6.5]RU[Japanese]C[laercioskt: bom jogo
      ]AP[Sabaki:0.52.1];B[pd]C[laercioskt: bom jogo
      ];W[dp]C[psygo: boa partida
      ];B[qp];W[dd];B[np];W[qc];B[qd];W[pc];B[od];W[nb];B[cq];W[cp];B[dq];W[fq];B[eq];W[ep];B[fr];W[gq];B[gr];W[hq];B[cj];W[ch];B[cm];W[pg];B[fo];W[fp];B[ho];W[en];B[el];W[gm];B[hm];W[dl];B[dm];W[em];B[fl];W[gl];B[gn];W[fm];B[dk];W[bq];B[br];W[bo];B[jq];W[hr];B[aq];W[bp];B[ar];W[gs];B[es];W[lq];B[kq];W[lp];B[jo];W[pq];B[nr];W[pp];B[po];W[oo];B[op];W[qo];B[pn];W[qq];B[rp];W[ro];B[rn];W[rq];B[qn];W[no];B[mo];W[nq];B[oq];W[sp];B[pr];W[qr];B[nc];W[oc];B[rc];W[mc];B[nd];W[rb];B[gj];W[hl];B[im];W[fk];B[ek];W[hj];B[hi];W[fj];B[hk];W[ij];B[gk];W[ik];B[gi];W[il];B[jh];W[di];B[ei];W[eh];B[fh];W[lk];B[kj];W[kk];B[pj];W[om];B[mp];W[pl];B[ql];W[qk];B[pk];W[rl];B[ol];W[qm];B[pm];W[nm];B[ql];W[dr];B[cr];W[pl];B[nl];W[km];B[mm];W[lr];B[ko];W[ks];B[lo];W[ki];B[ji];W[mi];B[li];W[lh];B[kh];W[mj];B[oh];W[ng];B[og];W[lg];B[le];W[nh];B[oi];W[mf];B[mb];W[ob];B[lc];W[rd];B[re];W[fc];B[sd];W[sb];B[dn];W[eo];B[bn];W[jm];B[cc];W[cd];B[bd];W[be];B[bb];W[ad];B[ac];W[bc];B[ll];W[kl];B[bd];W[er];B[ds];W[bc];B[pa];W[qa];B[bd];W[ae];B[eb];W[fb];B[ec];W[ed];B[fd];W[bc];B[gc];W[gb];B[bd];W[sn];B[fe];W[bc];B[ra];W[ma];B[lb];W[qb];B[bd];W[rm];B[bc];W[hc];B[cf]C[laercioskt: vlw
      psygo: Obg
      psygo: Partida muito difícil
      psygo: A gnt fez uma partida muito próxima durante mtu tempo
      laercioskt: eu achei um pouco cedo o erro em O5
      psygo: Eu quase caí na armadilha kkkkk Acho que faltou uma pedra na regiao. Mas eu tb ia tentar corrigir em P2 o mais rapido possível.
      laercioskt: eu sabia de P7 mas não achei a hora certeza de jogar
      laercioskt: estou dando uma olhada no jogo
      laercioskt: se quiser a gente pode fazer um review
      psygo: Eu to olhando os movimentos do computador tb. Mas confesso que vai ser bem difícil de saber onde estao os erros pois foi tudo bem complicado.
      psygo: De qualquer maneira, quer fazer uma revisao/
      psygo: ?
      psygo: Quer fazer por voz?
      laercioskt: sim
      laercioskt: vou entrar no discord
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Lucas Cristovam"),
    whiteRef: findPlayerRef("Ariel Oliveira"),
    date: new Date(2022, 0, 17).getTime(),
    handicap: 3,
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40417499",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-16]PC[OGS: https://online-go.com/game/40417499]GN[lukeverso vs Oliv.AS]PB[lukeverso]PW[Oliv.AS]BR[24k]WR[13k]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[0.5]RU[Japanese]HA[3]AB[pp][pd][dp]AP[Sabaki:0.52.1];W[cd];B[ed];W[df];B[dc];W[di];B[cm];W[nq];B[qn];W[jp];B[gp];W[qq];B[pq];W[pr];B[jq];W[iq];B[kq];W[kp];B[ir];W[hq];B[gq];W[hr];B[js];W[lq];B[hs];W[kr];B[gr];W[jr];B[is];W[ks];B[gs];W[nc];B[qf];W[jd];B[lc];W[qc];B[pc];W[pb];B[hc];W[ld];B[jc];W[kd];B[kc];W[md];B[ob];W[qb];B[oc];W[re];B[rf];W[qj];B[rl];W[pl];B[qk];W[pk];B[rj];W[qi];B[ri];W[ql];B[qh];W[rk];B[sk];W[rm];B[qk];W[qm]C[lukeverso: Não gosto de Kous...
      ];B[rk];W[pj];B[sh];W[rn];B[pn];W[qp];B[qo];W[ro]C[Oliv.AS: acho que ninguém gosta rsrsr
      ];B[np];W[oq];B[op];W[ck];B[bl];W[cc];B[cb];W[bb];B[eb];W[cq];B[cp];W[dq];B[bq];W[br];B[bo];W[aq];B[ap]C[lukeverso: Acho que agora ele é vantajoso(?).
      ];W[bp]C[lukeverso: Se eu só jogasse B4, ia entregar território pra você...
      ];B[er];W[ao];B[an]C[lukeverso: Não sei...
      ];W[ap]C[Oliv.AS: mas a forma ponnuki é forte, sinceramente não sei...acho que estou na frente
      Oliv.AS: digo, acho que estou vivo...
      lukeverso: Ponnuki?
      Oliv.AS: quando captura uma pedra cercando os 4 lados
      Oliv.AS: aquela forma de "cruz" chama ponnuki
      Oliv.AS: no caso ela não está agora...
      Oliv.AS: mas estava antes
      ];B[bs];W[dr];B[cs];W[ds]C[lukeverso: Acho que não venço essa corrida, né?
      lukeverso: Achei que dava.
      Oliv.AS: cara acredita que eu tinha cometido um erro no lance anterior...depois preciso ler de novo mas acho que você poderia ter me matado
      ];B[ar];W[as]C[lukeverso: É, não ia mesmo.
      ];B[gl]C[Oliv.AS: acho que na jogada 97...depois voltamos e olhamos
      ];W[cr];B[eq];W[gn];B[hn];W[go];B[ho];W[gm];B[hm];W[en];B[el];W[dm];B[dl];W[bn];B[co];W[cn];B[bm]C[lukeverso: Que jogo difícil...
      ];W[am]C[lukeverso: KKKKKKKKKK
      ];B[eo];W[cl];B[al];W[an];B[bk];W[bj];B[cj]C[lukeverso: AH.
      lukeverso: Puts.
      lukeverso: Que sacanagem.
      lukeverso: Nem me liguei.
      lukeverso: saca-nagem*
      ];W[ak];B[fp];W[em]C[Oliv.AS: minha cabeça esta quente rsrsr
      Oliv.AS: jogo difícil mesmo 
      ];B[fm];W[fn];B[ep];W[hp];B[es];W[fr];B[fq];W[fl];B[jj];W[ek]C[lukeverso: Acho que tô perdendo feio.
      ];B[ef];W[dg];B[eg];W[gk];B[hl]C[Oliv.AS: acho que sim..
      ];W[gi];B[hj];W[gj];B[hi]C[Oliv.AS: mas eu perco feio para muito jogadores também
      ];W[gh];B[gg]C[lukeverso: C3 foi onde o pesadelo começou.
      lukeverso: Não sei me defender bem de invasões no 3-3.
      ];W[he];B[id];W[ie];B[ge];W[hd];B[ic];W[gd];B[fd];W[gf];B[ff];W[fe];B[ee];W[gc];B[gb];W[fc];B[ec];W[fb];B[fa];W[hg];B[ge];W[fg];B[fe];W[eh];B[da];W[mb];B[lb];W[ki];B[lj];W[ji];B[ii];W[ih];B[hk];W[nn];B[lo];W[mo]C[lukeverso: É...
      lukeverso: Acho que é isso.
      lukeverso: Muito difícil.
      Oliv.AS: Muito obrigado
      lukeverso: Obrigado pela partida!
      Oliv.AS: Eu que agradeço Lucas =)
      Oliv.AS: Quer conversar? Ou está cansado?
      lukeverso: Fica pra depois! Vou precisar me ausentar.
      Oliv.AS: Tranquilo, valeu mesmo!
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Lucas Cristovam"),
    whiteRef: findPlayerRef("Gabriel Garcia"),
    date: new Date(2022, 0, 20).getTime(),
    handicap: 3,
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40503374",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-19]PC[OGS: https://online-go.com/game/40503374]GN[lukeverso vs PutzGrila]PB[lukeverso]PW[PutzGrila]BR[24k]WR[16k]TM[3600]OT[15/600 canadian]RE[W+36.5]SZ[19]KM[0.5]RU[Japanese]HA[3]AB[pp][pd][dp]C[lukeverso: Bom jogo, cara!
      PutzGrila: pra ti tb
      lukeverso: Espero não vacilar.
      ]AP[Sabaki:0.52.1];W[dd]C[lukeverso: Bom jogo, cara!
      PutzGrila: pra ti tb
      lukeverso: Espero não vacilar.
      ];B[cc];W[co]C[PutzGrila: eu espero n vacilar
      lukeverso: KKKKKKKKKKKKK
      ];B[dc]C[PutzGrila: n to conseguindo pegar a ideia do 19x19 ainda kkkk
      ];W[dj];B[fc]C[lukeverso: Eu também não.
      lukeverso: É muito maior do que o 9 x 9.
      ];W[en];B[pj];W[fp];B[do];W[dn]C[lukeverso: Eu tô me perguntando que joseki é esse, se é que isso lá é um joseki KKKKKKKKKK
      ];B[cn];W[cm];B[cp];W[bn];B[bo];W[dq];B[cn];W[bm];B[eq];W[co];B[cq];W[bp];B[cn];W[dr];B[er];W[co];B[cr];W[ao];B[ds];W[ep];B[fq];W[jp];B[mp];W[fd];B[gc];W[gf];B[gd];W[ge];B[jc];W[eg]C[PutzGrila: kkkkkkk
      ];B[md];W[im]C[PutzGrila: estamos todos aprendendo
      PutzGrila: eu tb...no GO, isso q é legal...n importa seu nível, sempre estyamos evoluindo =)
      ];B[cd];W[ce];B[de];W[ed];B[cf];W[df];B[be];W[cg];B[ce];W[ee];B[ec];W[lq];B[mq];W[lp];B[lo];W[ko];B[no];W[ln];B[mo];W[mn];B[nn];W[nm];B[om];W[nl];B[ok];W[ol];B[pl];W[nk];B[pn];W[oj];B[mm];W[pk];B[kn];W[lm];B[km];W[ml];B[kl];W[jj];B[qk];W[mj];B[ok];W[kk];B[ll];W[mm];B[lk];W[pk];B[mk];W[lj];B[oi];W[nj];B[ok];W[ik];B[pk];W[jn];B[il];W[jl]C[lukeverso: Ih.
      lukeverso: KKKKKKKK
      lukeverso: Tava morto mesmo.
      ];B[hq];W[hp];B[jq];W[iq];B[ir];W[gq];B[ip];W[gr];B[io];W[ho];B[in];W[hn];B[hm];W[hl];B[iq];W[gp];B[fr];W[le];B[me];W[ld];B[lc];W[jd];B[kc];W[kd];B[ic];W[id];B[hd];W[he];B[mg];W[nh];B[oh];W[ng];B[nf];W[og];B[pg];W[of];B[oe];W[pf];B[qf];W[pe];B[qe];W[od];B[ne];W[qd];B[nd];W[pc];B[oc];W[qg];B[pd];W[ph];B[pi];W[rf];B[qh];W[re];B[pg];W[od];B[rg];W[ni];B[pd];W[ph];B[od];W[rh];B[pg];W[sg];B[ph];W[ri]C[lukeverso: Você é bem forte, pô!
      ];B[rj]C[PutzGrila: onde? n viu minhas outras partidas? kkkk
      lukeverso: Não, pior que não.
      ];W[lg]C[PutzGrila: sou um desastre kkkk
      ];B[mf]C[PutzGrila: é sorte
      ];W[lf];B[si];W[sh];B[sj];W[nb];B[ob];W[oa];B[mc];W[pb];B[mb];W[na];B[ma];W[mr];B[nr];W[lr];B[ms];W[ls];B[ns];W[js];B[gs];W[hr];B[hs];W[is];B[fs];W[ks];B[bg];W[ch];B[bh];W[bi];B[ai];W[aj];B[ah];W[bj];B[gl];W[gm];B[gk];W[ek];B[gj];W[gi];B[hi];W[hh];B[gh];W[fi];B[fj];W[hj];B[fh];W[ei];B[ej];W[eh];B[ij];W[ii];B[dk];W[dl];B[ck];W[bk];B[cj];W[di];B[el];W[fl];B[fk];W[fm];B[dm];W[em];B[cl];W[dm];B[ci];W[bl];B[qi];W[qq];B[pq];W[pr];B[qr];W[rr];B[rq];W[qs];B[qp];W[rp];B[qr];W[sq];B[qq];W[qo];B[ro];W[sp];B[so];W[rn];B[sr];W[rm];B[qn];W[ql];B[po];W[qm];B[pm];W[rk];B[sk];W[rl];B[sn];W[bq];B[br];W[ar];B[bs];W[aq];B[as];W[eo];B[dq];W[or];B[oq];W[op];B[rs];W[mh];B[nq];W[];B[lh];W[kh];B[ki];W[li];B[kj];W[ji];B[];W[]C[PutzGrila: Obrigado pela partida 
      lukeverso: Ganhou.
      PutzGrila: gg
      lukeverso: Ah, aceita as pedras a serem removidas.
      PutzGrila: ganhei uma =D
      lukeverso: Sim.
      lukeverso: Hehe.
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2022, 0, 23).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.Black,
      difference: 39.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40589847",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-22]PC[OGS: https://online-go.com/game/40589847]GN[DOGemP | Liga Jan 2022 | Grupo A]PB[cixidetroy]PW[psygo]BR[15k]WR[3d]TM[3600]OT[15/600 canadian]RE[B+39.5]SZ[19]KM[0.5]RU[Japanese]HA[9]AB[jd][jp][dj][pj][jj][dd][pp][pd][dp]C[psygo: Boa partida
      cixidetroy: boa partida :)
      ]AP[Sabaki:0.52.1];W[qf]C[cixidetroy: boa partida :)
      ];B[nc];W[od];B[oc];W[qd];B[oe];W[qc];B[fq];W[bo];B[bp];W[cp];B[co];W[cq];B[bq];W[do];B[cn];W[bn];B[dq];W[cr];B[br];W[cm];B[dn];W[cj];B[dm];W[cl];B[dl];W[ci];B[cf];W[fc];B[ec];W[fd];B[fg];W[cc];B[eb];W[ef];B[de];W[bg];B[bf];W[cg];B[fe];W[ed]C[psygo: [object Object\]
      ];B[ee];W[dc];B[fb];W[hc];B[gb];W[hd];B[hb];W[gf];B[ff];W[hh];B[ge];W[he];B[hf];W[if];B[hg];W[ig];B[gg];W[je];B[ld];W[jc];B[kd];W[ic];B[db];W[lb];B[ih];W[jh];B[ii];W[og];B[kg];W[kf];B[lg];W[lf];B[mf];W[mg];B[lh];W[mh];B[ki];W[me];B[nf];W[le];B[md];W[ne];B[of];W[nd];B[pe];W[pc];B[ng];W[mc];B[oh];W[nq];B[qn];W[po];B[qo];W[pq];B[op];W[oq];B[lq];W[np];B[qq];W[qr];B[ql];W[gq];B[fp];W[kq];B[kp];W[lr];B[kr];W[jq];B[mr];W[lp];B[ls];W[jr];B[mq];W[lo];B[nr];W[or];B[ns];W[io];B[ip];W[fr];B[dr];W[hp];B[iq];W[oo];B[qp];W[ol];B[mi];W[rj];B[qk];W[kn];B[ho];W[ir];B[hq];W[gp];B[hr];W[in];B[hn];W[hm];B[gn];W[gm];B[fn];W[rr];B[im];W[jl];B[il];W[ik];B[hl];W[jk];B[hk];W[pi];B[oj];W[nj];B[oi];W[qj];B[pk];W[ij];B[jg];W[ie];B[hj];W[af];B[be];W[ae];B[ad];W[ag];B[cd];W[di];B[ej];W[kj];B[ji];W[lj];B[mj];W[mk];B[nk];W[ml];B[nl];W[nm];B[ok];W[jm];B[qi];W[ri];B[qh];W[rh];B[qg];W[rg];B[qe];W[re];B[om];W[nn];B[ei];W[ib];B[ia];W[ja];B[ha];W[bc];B[bd];W[so];B[rq];W[sq];B[sp];W[rp];B[ro];W[sp];B[sn];W[sr];B[rk];W[eh];B[fh];W[ca];B[cb];W[bb];B[ac];W[pm];B[qm];W[ko];B[eg];W[jo];B[is];W[on];B[dh];W[dg];B[ck];W[bk];B[dk];W[bj];B[os];W[ps];B[sj];W[si];B[sk];W[li];B[ni];W[bm];B[ao];W[an];B[ap];W[df];B[pl];W[om];B[ch];W[bh];B[eh];W[pf];B[pg];W[rf];B[mp];W[mo];B[pn];W[jf];B[kh];W[gc];B[gd];W[];B[]C[cixidetroy: obrigada pela partida
      psygo: Obg
      psygo: Eu vou revisar lá na transmissao.
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Lucas Cristovam"),
    whiteRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    date: new Date(2022, 0, 23).getTime(),
    handicap: 3,
    result: {
      whoWins: Color.Black,
      difference: 52.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40590036",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-22]PC[OGS: https://online-go.com/game/40590036]GN[lukeverso vs vandito]PB[lukeverso]PW[vandito]BR[24k]WR[18k]TM[3600]OT[15/600 canadian]RE[B+52.5]SZ[19]KM[0.5]RU[Japanese]HA[3]AB[pp][pd][dp]AP[Sabaki:0.52.1];W[dd];B[fc]C[lukeverso: Bom jogo.
      ];W[cf];B[dc];W[cc];B[cb];W[db]C[vandito: Bom jogo! :)
      ];B[ec];W[bb];B[cd];W[ca];B[de];W[ce];B[ed];W[bd];B[df];W[ch];B[dg];W[cg];B[di];W[hc];B[jc];W[fb];B[gb];W[eb];B[gc]C[psygo: [object Object\]
      ];W[mc];B[nc];W[jd];B[id];W[kc];B[ic];W[he];B[hd];W[ie];B[je];W[kd];B[ke];W[me];B[md];W[nd];B[ld];W[le];B[lc];W[lb];B[kb];W[jb];B[ld];W[lc];B[ib];W[ka];B[od];W[oc];B[nb];W[ob];B[pc];W[na];B[pb];W[mb];B[qf];W[pg];B[qg];W[pe];B[qe];W[pf];B[qi];W[pi];B[qh];W[ph];B[ge];W[jf];B[if];W[kf];B[hf];W[qn];B[qo];W[qk];B[rk];W[rj];B[qj];W[rl];B[ql];W[pk];B[pn];W[qm];B[pl];W[pm];B[ol];W[om];B[pj];W[ok];B[oj];W[nl];B[je];W[ke];B[ie];W[jh];B[ri];W[sj];B[si];W[sk];B[ro];W[sm];B[rn];W[rm];B[sn];W[np];B[op];W[oq];B[nq];W[mq];B[nr];W[or];B[mr];W[lq];B[os];W[oo];B[no];W[mp];B[on];W[lr];B[pr];W[ms];B[pq];W[nn];B[po];W[mo];B[gq];W[eq];B[ep];W[fq];B[fp];W[gp];B[hp];W[go];B[hq];W[dq];B[cq];W[cr];B[cp];W[br];B[dl];W[cj];B[ci];W[dj];B[ej];W[dh];B[eh];W[bi];B[ei];W[ek];B[hj];W[gj];B[dk];W[fk];B[ck];W[dn];B[bj];W[ai];B[aj];W[bh];B[fl];W[fm];B[el];W[gl];B[fj];W[gk];B[fn];W[hn];B[gm];W[em];B[en];W[dm];B[cm];W[cn];B[gn];W[bm];B[ho];W[cl];B[fo];W[gi];B[hi];W[bk];B[al];W[bo];B[bl];W[am];B[cm];W[bp];B[bq];W[aq];B[cl];W[ar];B[co];W[ap];B[do];W[bn];B[fr];W[dr];B[er];W[il];B[hm];W[hl];B[in];W[jn];B[jj];W[lj];B[jl];W[jm];B[ik];W[im];B[io];W[jo];B[jp];W[kp];B[mj];W[nj];B[lk];W[kl];B[kk];W[jk];B[ll];W[ni];B[jl];W[km];B[ln];W[jk];B[ko];W[jq];B[ip];W[iq];B[lm];W[kj];B[jl];W[mk];B[jk];W[gh];B[hh];W[hg];B[ig];W[gg];B[ih];W[ji];B[ml];W[mi];B[ki];W[jg];B[li];W[mj];B[oo];W[mn];B[lo];W[hr];B[gr];W[gs];B[fs];W[hs];B[oi];W[oh];B[ii]C[lukeverso: Sinto que tô perdendo feio de novo.
      lukeverso: Ando bem desmotivado com o jogo.
      vandito: Não pow
      vandito: Tá pau a pau kkkk
      lukeverso: 17 capturas pra você já deve dar uma boa folga contra as minhas 14.
      ];W[jr]C[vandito: Você estava 20 pontos na minha frente no mínimo
      ];B[lp]C[vandito: está*
      lukeverso: Não consigo ver isso.
      ];W[kq]C[lukeverso: Juro pra você, cara.
      lukeverso: Pra mim, tá tudo branco.
      vandito: Quando a gente acabar eu te mostro
      ];B[fa]C[vandito: Mas continue firme aí que o jogo está parelho
      ];W[ea];B[ga];W[rc];B[qd];W[rd];B[re];W[qb];B[pa];W[qa];B[sd];W[sc];B[se]C[lukeverso: Eu ia desistir lá no começo, quando você pegou 3 pedras.
      vandito: ia ser o pior erro da usa vida kkkkk
      ];W[];B[]C[lukeverso: Impossível.
      lukeverso: Não entendi essa parte do centro.
      vandito: Você não percebeu que matou meu grupo no meio 
      lukeverso: Por que aquele grupo tá morto?
      vandito: E nem eu na hora kkkk
      lukeverso: Impossível mesmo.
      vandito: Porque eu não consigo fazer 2 olhos com ele nem ferrando
      lukeverso: Eu achei que tinha alguma conexão, que aquilo era um grupo imenso, cara.
      vandito: Obrigado pela partida!
      vandito: Jogou muito bem
      lukeverso: Obrigado também.
      lukeverso: Tô bem confuso.
      vandito: No fim estava parelho, mas eu cometi esse erro com o grupo do centro e você tomou muita vantagem. Fiz a leitura errada achei que daria para te matar antes de morrer :(
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Laércio Pereira"),
    whiteRef: findPlayerRef("André Barbosa"),
    date: new Date(2022, 0, 24).getTime(),
    result: {
      whoWins: Color.Black,
      difference: 13.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40619205",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-23]PC[OGS: https://online-go.com/game/40619205]GN[DoJo]PB[laercioskt]PW[seupera]BR[1k]WR[4k]TM[3600]OT[15/600 canadian]RE[B+13.5]SZ[19]KM[6.5]RU[Japanese]C[laercioskt: Bom jogo
      seupera: Bom jogo
      ]AP[Sabaki:0.52.1];B[pd]C[laercioskt: Bom jogo
      seupera: Bom jogo
      ];W[dp];B[dd];W[pp];B[cq];W[cp];B[dq];W[ep];B[fr];W[fc];B[cf];W[dc];B[cc];W[cb];B[ec];W[db];B[ed];W[eb];B[fd];W[dj];B[gc];W[bc];B[cd];W[fb];B[bd];W[gb];B[hc];W[bb];B[qq];W[qp];B[pq];W[op];B[oq];W[nq];B[nr];W[mq];B[mr];W[lq];B[qj];W[qc];B[qd];W[pc];B[od];W[nb];B[qm];W[gq];B[fq];W[fp];B[hq];W[hp];B[gr];W[gp];B[ip];W[io];B[jp];W[om];B[jo];W[in];B[no];W[mo];B[nn];W[mn];B[nm];W[np];B[ol];W[iq];B[hr];W[jq];B[lm];W[jn];B[nc];W[mb];B[kp];W[ko];B[rc];W[rb];B[rd];W[ob];B[ld];W[jk];B[bj];W[ch];B[ci];W[di];B[bh];W[cj];B[bi];W[bk];B[bq];W[bp];B[ap];W[lj];B[bo];W[kc];B[cn];W[dm];B[dn];W[en];B[cl];W[cm];B[bl];W[dl];B[mi];W[mj];B[ni];W[li];B[lg];W[lh];B[mh];W[kg];B[kf];W[lf];B[mg];W[jf];B[ke];W[je];B[kd];W[jd];B[jg];W[kh];B[lc];W[jc];B[gg];W[hh];B[gh];W[gi];B[hg];W[ig];B[hi];W[ih];B[fi];W[gj];B[eh];W[he];B[ge];W[nj];B[oj];W[mm];B[ml];W[ll];B[fj];W[fk];B[gk];W[hj];B[hk];W[ij];B[ek];W[fl];B[ej];W[ck];B[dh];W[bm];B[el];W[em];B[lb];W[mc];B[md];W[rq];B[rr];W[rp];B[kr];W[kq];B[lr];W[eq];B[er];W[on];B[pm];W[sr];B[rs];W[ad];B[ae];W[ac];B[sb];W[ra];B[pa];W[pb];B[lk];W[kl];B[rn];W[mk];B[oo];W[nl];B[pn];W[ok];B[pk];W[oi];B[nk];W[mf];B[oh];W[ok];B[pi];W[aj];B[bg];W[hf];B[hb];W[hd];B[gd];W[gf];B[ff];W[ma];B[jr];W[ir];B[is];W[do];B[ao];W[bn];B[co];W[an];B[aq];W[ei];B[ai];W[dk];B[fh];W[ak];B[ic];W[id];B[jb];W[kb];B[ia];W[ga];B[ha];W[nk];B[oc];W[qa];B[qo];W[ro];B[po];W[sn];B[sm];W[so];B[qr];W[la];B[ja];W[sq];B[sc];W[ka];B[sa];W[oa];B[ss];W[];B[]C[seupera: Obrigado pelo jogo
      laercioskt: obrigado pelo jogo
      laercioskt: quer rever algo?
      seupera: estou dando uma olhada aqui para ver se encontro algo
      seupera: Tem algum erro gritante que vc viu?
      laercioskt: acho que tempo pontos importantes 
      laercioskt: olhando com a IA agora me parece que alguns que eu achava que não faziam sentido, fazia :P
      laercioskt: estou fazendo stream
      seupera: vou la
      laercioskt: caso queria ver aí eu posso comentar
      laercioskt: quer fazer o review pra gente?
      psygo: A diferença nao é muito grande de qualquer maneira
      psygo: Acho que fica difícil, acho que a IA é melhor pra este caso, ou mesmo vc, Laércio. E foi uma partida bem no estilo de IA tb...
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Guilherme Francisco de Souza Silva"),
    whiteRef: findPlayerRef("Gabriel Ventura"),
    date: new Date(2022, 0, 24).getTime(),
    handicap: 2,
    result: {
      whoWins: Color.Black,
      difference: 17.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40626509",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-24]PC[OGS: https://online-go.com/game/40626509]GN[XIKO vs Pedepano DOGemP]PB[XIKO]PW[Pedepano]BR[10k]WR[5k]TM[3600]OT[15/600 canadian]RE[B+17.5]SZ[19]KM[0.5]RU[Japanese]HA[2]AB[pd][dp]AP[Sabaki:0.52.1];W[pp];B[dc];W[de];B[cd];W[ce];B[fc];W[ci];B[fq]C[Pedepano: cliquei sem querer
      ];W[kc]C[XIKO: tranquilo, acontece comigo também xD
      ];B[qn];W[pk];B[np];W[no];B[oo];W[op];B[mp];W[nn];B[on];W[om];B[qo];W[qp];B[nm];W[mm];B[nl];W[mn];B[ol];W[pm];B[pl]C[Pedepano: desculpa
      Pedepano: cliquei no lugar errado de novo
      ];W[qm];B[rm]C[Pedepano: estava tentando fazer uma jogada condicional, por isso cliquei errado
      ];W[ql];B[rp];W[rq];B[so];W[qr];B[rl];W[rk];B[sl];W[rn];B[sn];W[po];B[nc];W[qf];B[qe];W[pf];B[co];W[jp];B[kq];W[jq];B[ko];W[lo];B[kp];W[lp];B[lq];W[mq];B[nq];W[mr];B[nr];W[gp];B[jo];W[ip];B[ho];W[io];B[hp];W[in];B[hq];W[hn];B[jm];W[jn];B[kn];W[km];B[ln];W[lm];B[mo];W[jl];B[nf];W[nj];B[nh];W[ph];B[jd];W[md];B[ld];W[mc];B[oe];W[me];B[mf];W[le];B[lf];W[ke];B[kf];W[je];B[id];W[jf];B[hf];W[jg];B[cg];W[dg];B[cf];W[df];B[be];W[ch];B[gn];W[gm];B[fn];W[fm];B[hh];W[he];B[ge];W[gf];B[hg];W[ie];B[ff];W[gg];B[fh];W[fg];B[eg];W[eh];B[gh];W[hd];B[hc];W[ic];B[jc];W[ib];B[jb];W[hb];B[gc];W[kb];B[ei];W[dh];B[dj];W[cj];B[ck];W[dk];B[cl];W[ej];B[ek];W[di];B[fi];W[fk];B[el];W[dl];B[fj];W[dm];B[dj];W[cm];B[bm];W[bn];B[bk];W[cn];B[bj];W[bi];B[al];W[aj];B[ej];W[bd];B[bc];W[bf];B[ad];W[bg];B[em];W[en];B[eo];W[ai];B[il];W[im];B[hl];W[gk];B[ij];W[ik];B[hk];W[jk];B[hj];W[hm];B[bo];W[ak];B[pr];W[ki];B[rf];W[rg];B[re];W[of];B[ne];W[ng];B[mg];W[mh];B[og];W[ni];B[lh];W[mi];B[li];W[lj];B[pg];W[qg];B[qh];W[oh];B[ng];W[qi];B[rh];W[ri];B[pe];W[sh];B[jr];W[nb];B[ob];W[oc];B[pc];W[pb];B[od];W[oa];B[qb];W[oc];B[nd];W[ed];B[ec];W[gd];B[dn];W[bl];B[ob];W[fe];B[mb];W[oc]C[Pedepano: cuidado com o tempo
      ];B[ro];W[pn];B[ob];W[na];B[pa];W[lb];B[ma];W[la];B[ir];W[kh];B[lg];W[gb];B[fb];W[pq];B[ga];W[ia];B[or];W[ao];B[gl];W[fl];B[ap];W[an];B[bp];W[sf];B[gj];W[se];B[sd];W[sg];B[rd];W[ef];B[fg];W[gf];B[sk];W[sj];B[qs];W[rs];B[ps];W[sr];B[ih];W[ji];B[ii];W[jj];B[iq];W[jm];B[af];W[ag];B[ae];W[dd];B[jh];W[fd];B[kg];W[ig];B[];W[]C[Pedepano: vlw
      XIKO: gg
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Laura Augustina Avram"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2022, 0, 27).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40707619",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-26]PC[OGS: https://online-go.com/game/40707619]GN[Jan 2022 | Grupo A | DOGemP]PB[balaura]PW[psygo]BR[3k]WR[3d]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]C[balaura: boa partida :)
      psygo: Boa partida :)
      ]AP[Sabaki:0.52.1];B[qd]C[psygo: Boa partida :)
      ];W[dd];B[pq];W[dq];B[fc];W[cf];B[jd];W[qo];B[op];W[ql];B[jq];W[dn];B[qj];W[rq];B[cl];W[cj];B[cq];W[cp];B[dp];W[co];B[dr];W[eq];B[br];W[bq];B[cr];W[bp];B[er];W[fq];B[fr];W[gq];B[gr];W[hq];B[hr];W[iq];B[ir];W[jp];B[kp];W[kq];B[jr];W[jo];B[ko];W[kn];B[jn];W[km];B[ip];W[io];B[in];W[ho];B[mp];W[mo];B[lp];W[il];B[hn];W[go];B[hl];W[hk];B[gk];W[hm];B[gl];W[gn];B[ik];W[hj];B[jl];W[im];B[jm];W[gm];B[jk];W[gj];B[dj];W[ci];B[fj];W[fi];B[gi];W[hi];B[ei];W[gh];B[ek];W[fl];B[fk];W[eh];B[di];W[dh];B[ck];W[cm];B[dm];W[em];B[dl];W[bm];B[el];W[pj];B[mm];W[qi];B[qk];W[pk];B[rl];W[qm];B[ri];W[rh];B[qh];W[pi];B[rj];W[qg];B[ph];W[rf];B[sk];W[nm];B[ll];W[pd];B[pc];W[pe];B[oh];W[qc];B[oc];W[rc];B[md];W[rm];B[si];W[hc];B[cc];W[dc];B[db];W[eb];B[cb];W[fb];B[be];W[bf];B[ce];W[de];B[cd];W[kc];B[jc];W[jb];B[kd];W[kb];B[lc];W[le];B[ld];W[he];B[hd];W[gd];B[lb];W[ib];B[ol];W[nl];B[ok];W[pl];B[om];W[nj];B[nk];W[ne];B[mh];W[ni];B[me];W[nh];B[ng];W[og];B[of];W[pg];B[nf];W[qr];B[pr];W[ae];B[ad];W[af]C[balaura: obrigada
      psygo: Obg
      psygo: Quer fazer uma ligacao?
      balaura: agira mesmo nao posso. voce pode mais tarde?
      balaura: *agora
      Cactus Juice: bom jogo :D
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Fabrício Caluza Machado"),
    whiteRef: findPlayerRef("Rui Malhado"),
    date: new Date(2022, 0, 27).getTime(),
    result: {
      whoWins: Color.Black,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40712999",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-26]PC[OGS: https://online-go.com/game/40712999]GN[DOGemP | Jan 2022 | Grupo B ]PB[Fabrício]PW[Phelan]BR[3k]WR[3k]TM[3600]OT[15/600 canadian]RE[B+R]SZ[19]KM[6.5]RU[Japanese]C[Phelan: Bom jogo
      Fabrício: Bom jogo!
      ]AP[Sabaki:0.52.1];B[pd];W[dp];B[qp];W[dd];B[cc];W[cd];B[dc];W[ec];B[eb];W[fc];B[fb];W[gc];B[gb];W[hc];B[cn];W[cj];B[fq];W[fp];B[dq];W[co];B[eq];W[dn];B[gp];W[qf];B[nc];W[qd];B[qc];W[rc];B[qe];W[rd];B[pe];W[re];B[qb];W[pf];B[rg];W[rf];B[qh];W[rb];B[qk];W[pb];B[pc];W[qa];B[ob];W[op];B[pn];W[qq];B[rq];W[pq];B[kp];W[rr];B[ro];W[sq];B[mq];W[rp];B[qo];W[bd];B[bc];W[ej];B[gi];W[gk];B[fn];W[fh];B[gh];W[fg];B[el];W[fj];B[bp];W[bo];B[cp];W[fm];B[en];W[dm];B[em];W[hg];B[dk];W[ck];B[dj];W[di];B[ci];W[dl];B[ek];W[dh];B[nh];W[nn];B[jc];W[jh];B[jf];W[lh];B[gg];W[gf];B[ih];W[jg];B[ig];W[if];B[ie];W[hf];B[kf];W[lg];B[lf];W[of];B[ne];W[mj];B[kl];W[kn];B[ml];W[jk];B[kk];W[kj];B[jl];W[ik];B[nj];W[nk];B[mk];W[nl];B[mm];W[nm];B[jn];W[mn];B[ko];W[hm];B[il];W[ep];B[fo];W[do];B[hk];W[hl];B[hn];W[lk];B[oj];W[ln];B[hb];W[ic];B[jb];W[im];B[jm];W[in];B[io];W[ho];B[hj];W[jj];B[gl];W[gn];B[fl];W[ip];B[jo];W[hp];B[go];W[jq];B[hq];W[kq];B[iq];W[jp];B[lq];W[lr];B[mr];W[ir];B[hr];W[lp];B[kr];W[jr];B[ls];W[ll];B[gm];W[qm];B[pm];W[ql];B[pl];W[rk];B[qj];W[rn];B[so];W[mf];B[me];W[ac];B[ab];W[ad];B[bb];W[gj];B[hi];W[ap];B[bq];W[aq];B[ar];W[ao];B[br];W[ii];B[rj]C[Phelan: Obrigado pelo jogo :)
      Fabrício: obrigado!
      Fabrício: um jogo muito bom
      Phelan: sim, muito puxado! :) E um jogo de moyos, que não costumo ter frequentemente :)
      Phelan: Bem, tenho que ir, obrigado pelo jogo
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Ventura"),
    whiteRef: findPlayerRef("Fabrício Caluza Machado"),
    date: new Date(2022, 0, 31).getTime(),
    result: {
      whoWins: Color.White,
      difference: 88.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40822130",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-30]PC[OGS: https://online-go.com/game/40822130]GN[DOGemP | Jan 2022 | Grupo B ]PB[Pedepano]PW[Fabrício]BR[6k]WR[3k]TM[3600]OT[15/600 canadian]RE[W+88.5]SZ[19]KM[6.5]RU[Japanese]C[Fabrício: Oi! Bom jogo!
      ]AP[Sabaki:0.52.1];B[pd]C[Fabrício: Oi! Bom jogo!
      ];W[dd]C[Pedepano: Bom jogo pra você também
      ];B[dp];W[pp];B[jj];W[fq];B[eq];W[fp];B[cn];W[jp];B[df];W[fc];B[cd];W[cc];B[ce];W[qf];B[pi];W[qc];B[qd];W[pc];B[od];W[rd];B[re];W[rc];B[qe];W[nc];B[pf];W[qn];B[bc];W[cb];B[hc];W[jc];B[he];W[hb];B[ib];W[ic];B[gb];W[hd];B[gc];W[gd];B[fb];W[jb];B[ha];W[ec];B[lc];W[ld];B[md];W[mc];B[le];W[kd];B[nd];W[ke];B[lf];W[kf];B[lg];W[kg];B[kh];W[qk];B[qj];W[pk];B[jh];W[fm];B[ci];W[oi];B[oj];W[pj];B[qi];W[nj];B[ok];W[ol];B[nk];W[mk];B[ni];W[nl];B[jn];W[oh];B[ph];W[lh];B[kp];W[jq];B[kq];W[mq];B[mp];W[nq];B[np];W[lq];B[ln];W[kr];B[fk];W[nf];B[me];W[of];B[pg];W[rj];B[ri];W[rk];B[ge];W[fd];B[fe];W[rg];B[qg];W[sg];B[ie];W[rf];B[id];W[eb];B[oc];W[ob];B[lb];W[nb];B[se];W[si];B[rh];W[sh];B[og];W[ng];B[mh];W[nh];B[li];W[fa];B[ja];W[ea];B[hl];W[ko];B[jo];W[lo];B[lp];W[mo];B[kn];W[mn];B[hp];W[hq];B[iq];W[ir];B[ip];W[jr];B[gp];W[gq];B[fo];W[eo];B[ep];W[go];B[ho];W[gn];B[dl];W[hn];B[io];W[kl];B[jl];W[jk];B[ik];W[jm];B[im];W[il];B[in];W[hk];B[jl];W[oe];B[pe];W[il];B[jd];W[ij];B[kc];W[gl];B[gi];W[ih];B[gg];W[bb];B[qq];W[qp];B[oq];W[pq];B[nr];W[op];B[or];W[pr];B[lr];W[no];B[ig];W[dm];B[cl];W[cm];B[bm];W[bn];B[bl];W[co];B[dn];W[do];B[em];W[cq];B[cp];W[bp];B[bq];W[er];B[fl];W[fn];B[gk];W[hm];B[hj];W[ii];B[lj];W[lk];B[hh];W[bd];B[be];W[ac];B[ae];W[ee];B[ef];W[de];B[cf];W[sd];B[mb];W[pb];B[ga];W[am];B[al];W[an];B[na];W[oa];B[ma];W[ad];B[hi];W[ji];B[kj];W[ik];B[lh];W[mi];B[sf];W[sj];B[];W[]C[Fabrício: obrigado!
      Pedepano: Vlw
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Laércio Pereira"),
    whiteRef: findPlayerRef("Laura Augustina Avram"),
    date: new Date(2022, 0, 31).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40825956",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-01-30]PC[OGS: https://online-go.com/game/40825956]GN[Friendly Match]PB[laercioskt]PW[balaura]BR[1d]WR[3k]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]C[balaura: boa partida :)
      laercioskt: bom jogo =)
      ]AP[Sabaki:0.52.1];B[pd];W[dq];B[dd];W[qp];B[do];W[cm];B[en];W[gq];B[op];W[mq];B[qq];W[qm];B[pp];W[rp];B[pr];W[qj];B[cq];W[cr];B[cp];W[br];B[dl];W[ck];B[cf];W[bn];B[dk];W[cj];B[dj];W[ci];B[qf];W[nc];B[lc];W[qc];B[pc];W[pb];B[ob];W[qb];B[nb];W[re];B[qe];W[rf];B[rg];W[qd];B[qg];W[di];B[ei];W[eh];B[fh];W[fg];B[fi];W[eg];B[cg];W[ch];B[gg];W[gf];B[hf];W[hg];B[gh];W[he];B[if];W[fe];B[ie];W[db];B[ec];W[hd];B[cc];W[id];B[jd];W[jc];B[kc];W[je];B[kd];W[ig];B[jf];W[jg];B[kf];W[kg];B[lg];W[lf];B[ke];W[lh];B[mg];W[ki];B[mh];W[mi];B[ni];W[nj];B[mj];W[li];B[oi];W[nk];B[lk];W[kk];B[ll];W[kl];B[lm];W[km];B[ln];W[kn];B[lp];W[dm];B[em];W[fk];B[fl];W[gk];B[ej];W[hl];B[fp];W[fq];B[ho];W[lo];B[ip];W[gp];B[go];W[kp];B[hm];W[mo];B[gl];W[rr];B[nr];W[nq];B[mr];W[oq];B[lq];W[kq];B[lr];W[mp];B[pk];W[qk];B[pl];W[pm];B[ol];W[nl];B[om];W[nm];B[on];W[pj];B[oj];W[pq];B[nn];W[mn];B[mm];W[lj];B[ok];W[rn];B[hr];W[kr];B[iq];W[ep];B[hk];W[il];B[hj];W[eo];B[dn];W[fb];B[gc];W[fc];B[gd];W[fd];B[ge];W[ff];B[ic];W[bb];B[cb];W[ca];B[bc];W[bg];B[ba];W[aa];B[bf];W[ah];B[ac];W[da];B[eb];W[ea];B[ab];W[ba];B[fa];W[ga];B[dg];W[dh];B[bd];W[hb];B[hc];W[ri];B[fo];W[er];B[jr];W[ks];B[bo];W[cl];B[gs];W[ph];B[dp];W[oc];B[ds];W[es];B[cs];W[bq];B[aq];W[pe];B[of];W[nh];B[oh];W[ng];B[og];W[mf];B[ne];W[me];B[od];W[nd];B[oe];W[md];B[sg];W[sd];B[pi];W[qh];B[mb];W[sf]C[balaura: obrigada
      laercioskt: obrigado
      laercioskt: jogou muito bem, a diferença estava enorme rs
      balaura: :-)
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("André Barbosa"),
    date: new Date(2022, 1, 5).getTime(),
    handicap: 9,
    result: {
      whoWins: Color.Black,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "40980404",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-02-04]PC[OGS: https://online-go.com/game/40980404]GN[Partida amistosa]PB[cixidetroy]PW[seupera]BR[16k]WR[4k]TM[3600]OT[15/600 canadian]RE[B+R]SZ[19]KM[0.5]RU[Japanese]HA[9]AB[jd][jp][dj][pj][jj][dd][pp][pd][dp]C[seupera: Bom jogo
      ]AP[Sabaki:0.52.1];W[nq];B[qn];W[fq];B[hq];W[cq];B[dq];W[cp];B[do];W[co];B[dn];W[er];B[dr];W[cm]C[cixidetroy: bom jogo :)
      ];B[dl];W[dm];B[em];W[el];B[ek];W[en];B[fm];W[cl];B[fl];W[fo];B[eo];W[fn];B[fp];W[gp];B[gn];W[ep];B[go];W[fp];B[hp];W[cr];B[ck];W[kq];B[jq];W[pr];B[oq];W[or];B[kr];W[qp];B[qo];W[rp];B[lr];W[np];B[oo];W[ql];B[no];W[mn];B[mo];W[om];B[lp];W[qf];B[qh];W[rj];B[qj];W[ri];B[rh];W[rm];B[pm];W[pl];B[nm];W[nl];B[nn];W[mk];B[mm];W[qi];B[pi];W[ph];B[rk];W[rg];B[si];W[rd];B[pf];W[so];B[pg];W[qg];B[sj];W[qc];B[oh];W[ob];B[qe];W[re];B[pc];W[pb];B[mc];W[cf];B[fc];W[ci];B[cj];W[bd];B[cc];W[ef];B[dh];W[di];B[ei];W[eh];B[ch];W[fi];B[ej];W[dg];B[fh];W[eg];B[gi];W[bh];B[bi];W[ed];B[ec];W[hf];B[hc];W[ki];B[lj];W[kj];B[kk];W[ji];B[ij];W[lk];B[ll];W[mi];B[jl];W[lc];B[ld];W[mb];B[kc];W[lb];B[nd];W[ia];B[gb];W[bc];B[bb];W[nc];B[md];W[ab];B[ba];W[db];B[cb];W[bg];B[mg];W[ke];B[kd];W[lg];B[mf];W[lf];B[le];W[jf];B[lh];W[mh];B[nh];W[ii];B[nj];W[mj];B[ok];W[ol];B[hi];W[fg];B[gh];W[ee];B[bl];W[bm];B[bk];W[gr];B[hr];W[cd];B[dc];W[mr]C[seupera: Tudo bem?
      cixidetroy: desculpa
      cixidetroy: meu filho acordou
      ];B[mq];W[kb]C[seupera: sem problemas, quer continuar depois?
      ];B[ic];W[hg];B[gg]C[cixidetroy: nao acho que vdc
      cixidetroy: de novo
      cixidetroy: nao
      cixidetroy: tudo bem
      cixidetroy: acho que vdc
      laercioskt: Será que o endgame vai decidir?
      ];W[am]C[cixidetroy: nao botei a virgula^^
      ];B[ms];W[nr]C[psygo: A diferença está em mais de 10 pontos...
      ];B[pq];W[qq];B[ro];W[rn];B[on];W[ns];B[ls];W[oc];B[od];W[qd];B[pe];W[sg];B[sh];W[je];B[ie];W[if];B[he];W[gf];B[ge];W[hh];B[hj];W[qm];B[pn];W[ni];B[oi];W[rl];B[sl];W[sm];B[sk];W[jb];B[ha]C[laercioskt: achava que deveria ser H19 mas agora fiquei na dúvida
      ];W[ib];B[hb];W[ml];B[lm]C[psygo: H1 é um sente branco que os dois estao ignorando há mtu tempo...
      ];W[cg]C[laercioskt: true
      psygo: Tá dizendo W+0.5 lol
      ];B[gs]C[psygo: Acho que a IA nao achava que Branco faria pontos tao limpos ao redor de K12
      ];W[fs];B[hs]C[laercioskt: pera, a IA pondera a força dos jogadores?:P
      ];W[op];B[po];W[mp];B[lq]C[psygo: Nao, é só que, antes de Branco fazer aqueles pontos, a IA dizia que era B+10
      ];W[de];B[gq]C[seupera: Affe
      seupera: Pior que eu  li aquilo varias vezes antes de tenukar
      seupera: li errado a primeira vez e enviesou
      seupera: bom jogo
      seupera: Parabens Sophia, ficou bem mais forte
      cixidetroy: obrigada pelo jogo
      cixidetroy: foi bem cansativo^^
      seupera: demaiss
      laercioskt: entendi... mas eu brinquei porque acho que talvez relamente não dava mas pela força os jogadores não viram
      psygo: Foi quase
      laercioskt: essa doeu
      laercioskt: muito legal o grafico, parabéns para ambos
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  // ***************************************************************************
  // Fev 2022
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Gabriel Garcia"),
    whiteRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    date: new Date(2022, 1, 8).getTime(),
    result: {
      whoWins: Color.Black,
      difference: 5.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41068955",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-02-07]PC[OGS: https://online-go.com/game/41068955]GN[DOGemP - Liga C fev 2022]PB[PutzGrila]PW[vandito]BR[16k]WR[18k]TM[3600]OT[15/600 canadian]RE[B+5.5]SZ[19]KM[6.5]RU[Japanese]AP[Sabaki:0.52.1];B[pd];W[dd];B[qp];W[dp];B[pj];W[mc];B[eq];W[dn];B[dq];W[cq];B[ep];W[do];B[fn];W[dl];B[jp];W[oq];B[pq];W[kq];B[np];W[hp];B[dc];W[ce];B[ed];W[ec];B[de];W[cd];B[fc];W[eb];B[db];W[fd];B[ee];W[fb];B[gc];W[gb];B[ge];W[hc];B[gd];W[jc];B[oc];W[qf];B[id];W[ic];B[qe];W[pf];B[oe];W[nf];B[of];W[og];B[pg];W[ph];B[qg];W[rg];B[qh];W[qi];B[ng];W[oh];B[nh]C[vandito: Estava tão concentrado que esqueci de desejar um bom jogo hehe
      vandito: Bom Jogo!
      PutzGrila: nós dois kkk
      PutzGrila: Bom game aí
      ];W[ne];B[nd];W[md];B[me];W[mf];B[le];W[lf];B[ke];W[kf];B[jf];W[je];B[jd];W[if];B[jg];W[ie];B[kd];W[mh];B[mg];W[lg];B[ni];W[lh];B[ki];W[hd];B[rh];W[sh];B[pi];W[ri];B[jh];W[ig];B[ii];W[hi];B[hj];W[ij];B[ik];W[hk];B[jj];W[gj];B[gi];W[ij];B[hh];W[hj];B[fi];W[ih];B[ji];W[dh];B[dj];W[ej];B[fj];W[ek];B[fk];W[fm];B[hl];W[ff];B[fg];W[gf];B[fe];W[ef];B[df];W[dg];B[cf];W[bf];B[cg];W[ch];B[bg];W[be];B[eg];W[hg];B[gh];W[he];B[el];W[bh];B[dk];W[ei];B[gg];W[hf];B[dm];W[cl];B[em];W[cm];B[gm];W[eo];B[ci];W[bi];B[fo];W[fp];B[gp];W[fq];B[fr];W[gq];B[go];W[gr];B[cp];W[cr];B[dr];W[ds];B[cn];W[co];B[bn];W[bp];B[hq];W[in];B[ho];W[ip];B[jm];W[kn];B[jn];W[ko];B[kp];W[jq];B[iq];W[io];B[ln];W[lp];B[jo];W[im];B[il];W[jl];B[km];W[lo];B[hn];W[ir];B[hm];W[lm];B[mn];W[mm];B[ml];W[nm];B[mp];W[lq];B[pm];W[op];B[on];W[nn];B[mo];W[no];B[nl];W[mi];B[mj];W[nj];B[oi];W[mk];B[lj];W[nk];B[ol];W[pk];B[ok];W[qj];B[oj];W[lk];B[ll];W[kk];B[kl];W[kc];B[qk];W[rk];B[oo];W[ql];B[qm];W[rm];B[rn];W[sn];B[so];W[sm];B[pl];W[qk];B[rp];W[qn];B[ro];W[pn];B[om];W[nq];B[mq];W[mr];B[kr];W[jr];B[hr];W[er];B[or];W[nr];B[pr];W[os];B[is];W[js];B[hs];W[ls];B[ps];W[ns];B[fl];W[qc];B[pc];W[pe];B[od];W[qd];B[re];W[pb];B[ob];W[pa];B[qb];W[rb];B[rf];W[qg];B[rc];W[qa];B[rd];W[qb];B[oa];W[sc];B[sd];W[se];B[sb];W[na];B[ra];W[nb];B[nc];W[lb];B[sf]C[vandito: Errei na pressão kkk
      PutzGrila: kkkkkk
      PutzGrila: acontece
      PutzGrila: faz parte, em campeonatos, tempo, faz parte
      ];W[sg];B[eh];W[ag];B[di];W[cj];B[ck];W[bj];B[bl];W[bk]C[vandito: Pois é 
      ];B[bc];W[al];B[bm];W[ah];B[cc];W[ak];B[am];W[af];B[bo];W[ao];B[ap];W[aq];B[ea];W[fa];B[da];W[]C[PutzGrila: posso fechar um ponto?
      vandito: pode
      ];B[ac]C[PutzGrila: ainda tem pontos em aberto
      ];W[fd];B[ba];W[hb];B[pp];W[fs];B[li];W[ld]C[PutzGrila: acho q agora foi kkkk
      PutzGrila: agora morreu td
      ];B[];W[]C[vandito: Deixei escapar no finalzinho kkk
      PutzGrila: Vlw.....Bom game =)
      vandito: Obrigado pela partida
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Garcia"),
    whiteRef: findPlayerRef("Ariel Oliveira"),
    date: new Date(2022, 1, 11).getTime(),
    result: {
      whoWins: Color.White,
      time: true,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41155570",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-02-10]PC[OGS: https://online-go.com/game/41155570]GN[DOGemP Liga C - fev 2022]PB[PutzGrila]PW[Oliv.AS]BR[16k]WR[13k]TM[3600]OT[15/600 canadian]RE[W+T]SZ[19]KM[6.5]RU[Japanese]C[Oliv.AS: Opa
      Oliv.AS: Bom jogo!
      PutzGrila: Opaaa
      PutzGrila: bom jogo aew
      ]AP[Sabaki:0.52.1];B[pd]C[Oliv.AS: Opa
      Oliv.AS: Bom jogo!
      PutzGrila: Opaaa
      PutzGrila: bom jogo aew
      ];W[pp];B[dc];W[cp];B[jd];W[fq];B[qn];W[ql];B[pl];W[qm];B[pn];W[cj];B[cd];W[qf];B[qe];W[pf];B[pe];W[oe];B[od];W[ne];B[nd];W[me];B[md];W[le];B[ld];W[cg];B[of];W[og];B[nf];W[mf];B[ng];W[nh];B[df];W[dg];B[cf];W[ef];B[ee];W[ff];B[fe];W[gf];B[hf];W[ge];B[gd];W[hg];B[he];W[gg];B[mo];W[nq];B[np];W[mq];B[jp];W[iq];B[ip];W[hq];B[kq];W[rp];B[nn];W[pk];B[nk];W[ol];B[pm];W[ok];B[nl];W[om];B[oo];W[on];B[po];W[qk];B[pq];W[qp];B[jg];W[ke];B[kd];W[if];B[je];W[ie];B[hd];W[jf];B[ig];W[kf];B[ki];W[mg];B[kg];W[ii];B[lh];W[jk];B[lk];W[nj];B[lj];W[km];B[hn];W[nm];B[ll];W[mn];B[no];W[ln];B[lo];W[ko];B[kp];W[lp];B[lq];W[oq];B[jo];W[kn];B[mp];W[gn];B[il];W[jl];B[jj];W[ik];B[hl];W[ij];B[mm];W[ji];B[kj];W[ih];B[go];W[gm];B[mi];W[ni];B[mj];W[ml];B[mk];W[lm];B[kl];W[jm];B[hm];W[gl];B[hk];W[fo];B[gp];W[fp];B[gq];W[gr];B[hp];W[in];B[gk];W[hh];B[ho];W[ek];B[bg];W[bh];B[bf];W[ch];B[fk];W[em];B[rf];W[rg];B[re];W[qg];B[rn];W[rm];B[sn];W[sm];B[ej];W[dk];B[fi];W[gj];B[fj];W[gi];B[di];W[ci];B[eh];W[eg];B[dj];W[fh];B[fl];W[fm];B[el];W[dl];B[jr];W[lr];B[sg];W[sh];B[sf];W[rh];B[fc];W[dh];B[ei];W[dm];B[dq];W[hr];B[dp];W[cq];B[er];W[fr];B[co];W[eq];B[cr];W[bo];B[bq];W[bp];B[ar];W[ds];B[bn];W[cn]C[PutzGrila: kkkkkkkkkkkkk
      Oliv.AS: Uau
      PutzGrila: tava jogando e ouvindo música
      Oliv.AS: que partida, duas horas e meia
      PutzGrila: q sacanagi kkkkk
      PutzGrila: mas eu ia perder kkk
      Oliv.AS: você fez muitos pontos no topo
      PutzGrila: mas meu próximo movimento seria M13
      Oliv.AS: este grupo está morto
      PutzGrila: quase, se eu conseguisse M13 e J12, n estaria vivo?
      Oliv.AS: vamos ver...
      Oliv.AS: estou sem cabeça para visualizar rsrs
      Oliv.AS: deixar eu abrir uma análise aqui
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Guilherme Francisco de Souza Silva"),
    whiteRef: findPlayerRef("Emanuel Araújo"),
    date: new Date(2022, 1, 12).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41184861",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-02-11]PC[OGS: https://online-go.com/game/41184861]GN[XIKO vs Pedepano DOGemP]PB[XIKO]PW[Cactus Juice]BR[9k]WR[4k]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]C[Cactus Juice: Alô oiu som, bom jogo
      XIKO: bom jogo
      ]AP[Sabaki:0.52.1];B[pd]C[Cactus Juice: Alô oiu som, bom jogo
      XIKO: bom jogo
      ];W[dp];B[pq]C[Cactus Juice: pronto, tvaa colocando musiquinha
      ];W[cc];B[qo];W[qf];B[nc];W[qd];B[qc];W[rc];B[qe];W[rd];B[pe];W[re];B[qb];W[qh];B[pf];W[pg];B[og];W[cn];B[fq];W[eq];B[fp];W[iq];B[do];W[co];B[ep];W[dq];B[en];W[lq];B[fd];W[dj];B[dl];W[cl];B[ch];W[dk];B[bj];W[dn];B[fm];W[cf];B[eh];W[fk];B[hm];W[bk];B[gh];W[hc];B[he];W[kc];B[gb];W[gc];B[fc];W[hb];B[jd];W[jc];B[kd];W[ld];B[le];W[md];B[lb];W[lc];B[mb];W[me];B[lf];W[fb];B[eb];W[ga];B[dc];W[cb];B[ik];W[mf];B[mg];W[lg];B[jf];W[ng];B[mh];W[nf];B[ph];W[qg];B[nh];W[of];B[oh];W[id];B[ie];W[kf];B[kg];W[ke];B[lh];W[je];B[jh];W[rb];B[kp];W[kq];B[lp];W[mp];B[mo];W[no];B[nn];W[np];B[nr];W[jp];B[kn];W[mr];B[jo];W[lo];B[ln];W[mn];B[mm];W[on];B[nm];W[qn];B[ko];W[qp];B[pp];W[ro];B[po];W[rq];B[pn];W[qm];B[rk];W[ob];B[pb];W[qa];B[pa];W[oa];B[ra];W[oc];B[od];W[pc]C[XIKO: ;-;
      Cactus Juice: :~
      Cactus Juice: chegae
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Philippe Fanaro"),
    whiteRef: findPlayerRef("Fabrício Caluza Machado"),
    date: new Date(2022, 1, 13).getTime(),
    result: {
      whoWins: Color.Black,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41207174",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-02-12]PC[OGS: https://online-go.com/game/41207174]GN[Grupo A | Fev 2022 | DOGemP]PB[psygo]PW[Fabrício]BR[3d]WR[3k]TM[3600]OT[15/600 canadian]RE[B+R]SZ[19]KM[6.5]RU[Japanese]C[Fabrício: Bom jogo!
      ]AP[Sabaki:0.52.1];B[pd]C[Fabrício: Bom jogo!
      ];W[dd]C[psygo: Boa partida!
      ];B[pq];W[dp];B[pn];W[kq];B[cq];W[cp];B[dq];W[ep];B[fr];W[nc];B[dj];W[qf];B[nd];W[md];B[ne];W[pc];B[qc];W[oc];B[pf];W[re];B[qd];W[qh];B[pg];W[ph];B[oh];W[ql];B[qj];W[pj];B[pk];W[qk];B[oj];W[pi];B[oi];W[rj];B[kd];W[me];B[mf];W[ke];B[le];W[ld];B[lf];W[kc];B[jd];W[jc];B[ic];W[id];B[je];W[ie];B[jf];W[if];B[ig];W[hg];B[ih];W[hc];B[gq];W[bq];B[br];W[dl];B[mq];W[dh];B[en];W[cn];B[el];W[hh];B[dm];W[ii];B[cm];W[jg];B[jh];W[kf];B[hi];W[bm];B[bo];W[cl];B[bn];W[bk];B[co];W[ek];B[fk];W[fj];B[gk];W[hj];B[gi];W[gj];B[ej];W[dk];B[ij];W[hk];B[ji];W[fi];B[cc];W[cd];B[dc];W[eb];B[bd];W[be];B[bb];W[ac];B[ad];W[db];B[ce];W[bf];B[cg];W[bg];B[ch];W[bh];B[fb];W[fc];B[ec];W[gb];B[fd];W[de];B[gc];W[fa];B[hb];W[ib];B[ga];W[ol];B[lo];W[jo];B[iq];W[ko];B[ln];W[gp];B[hp];W[go];B[ho];W[gn];B[bp];W[hn];B[in];W[jm];B[im];W[km];B[hl];W[fl];B[gl];W[fm];B[ik];W[em];B[ml];W[pp];B[op];W[qq];B[oq];W[qp];B[om];W[pm];B[qm];W[pl];B[rn];W[on];B[oo];W[nm];B[po];W[mm];B[lm];W[ll];B[lp];W[lk];B[lh];W[mk];B[kp];W[mi];B[pb];W[mh];B[ng];W[kg];B[io];W[lg];B[ob];W[nb];B[qg];W[rg];B[rd];W[oa];B[fh];W[ei];B[di];W[qb];B[rb];W[pa];B[ra];W[pr];B[or];W[rr];B[bi];W[cf];B[dg];W[ai];B[aj];W[fe];B[dn];W[bj];B[ah];W[cj];B[ci];W[al];B[ge];W[eg];B[eh];W[fg];B[gf];W[ff];B[gg];W[df];B[ps]C[psygo: Obg pela partida.
      psygo: Até a metade eu realmente estava achando que vc estava mtu melhor.
      Fabrício: obrigado... achei que no meio da partida estava competitivo, mas no fim perdi muito feio
      Fabrício: Foi a forma como lidei com a invasão em C17 que desequlibrou, não é? Achei que dava pra matar, mas é muito dificil
      psygo: É mtu difícil de matar esse tipo de grupo msm. Em geral, algo como E18 é só se vc estivesse com muita força e pelo menos duas pedras no canto já.
      psygo: Achei que vc nao precisava ter tentado matar o grupo, era só jogar normal, vc estava bem à frente.
      psygo: S15 nao é joseki, mas é dificil de se lidar realmente.
      Fabrício: é, eu saí na frente ali, acho que deu mais certo do que deveria
      Fabrício: bom, obrigado! Depois eu assito a sua stream, sempre é legal assistir a própria partida pelo outro ponto de vista :P
      psygo: Legal, se quiser assistir lá, eu estou revisando agora.
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    whiteRef: findPlayerRef("Ariel Oliveira"),
    date: new Date(2022, 1, 15).getTime(),
    result: {
      whoWins: Color.White,
      time: true,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41271299",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-02-14]PC[OGS: https://online-go.com/game/41271299]GN[DOGemP Liga C - fev 2022]PB[vandito]PW[Oliv.AS]BR[17k]WR[12k]TM[3600]OT[15/600 canadian]RE[W+T]SZ[19]KM[6.5]RU[Japanese]C[Oliv.AS: Bom jogo!
      vandito: Bom jogo!
      ]AP[Sabaki:0.52.1];B[pd]C[vandito: Bom jogo!
      ];W[pp];B[dc];W[dp];B[jd];W[qc];B[pc];W[qd];B[pe];W[rf];B[df];W[pb];B[ob];W[qb];B[qg];W[qf];B[pf];W[qe];B[og];W[ce];B[ed];W[cc];B[cf];W[cb];B[db];W[be];B[bf];W[cj];B[cn];W[co];B[cp];W[cq];B[bo];W[bp];B[do];W[cp];B[bn];W[dn];B[eo];W[en];B[fo];W[fn];B[gn];W[el];B[ck];W[cl];B[eq];W[ep];B[fp];W[fq];B[gq];W[fr];B[er];W[gr];B[hq];W[hr];B[iq];W[dr];B[ir];W[es];B[pq];W[qq];B[qp];W[rq];B[rp];W[pr];B[oq];W[or];B[nr];W[nq];B[op];W[po];B[oo];W[pn];B[on];W[pm];B[ql];W[ro];B[ol];W[om];B[nm];W[pl];B[pk];W[nl];B[nn];W[ok];B[pj];W[rh];B[ri];W[qh];B[sg];W[ph];B[pg];W[rg];B[sh];W[oi];B[oj];W[nj];B[ml];W[mk];B[lk];W[ll];B[mm];W[lj];B[kk];W[lm];B[ln];W[jm];B[gl];W[go];B[gp];W[ho];B[gm];W[in];B[km];W[kl];B[jl];W[jp];B[dm];W[em];B[dl];W[dk];B[cm];W[bk];B[ek];W[fk];B[ej];W[fl];B[fj];W[gk];B[hk];W[gj];B[gi];W[hj];B[ij];W[ik];B[hl];W[ii];B[jj];W[hi];B[il];W[fi];B[dj];W[ck];B[ei];W[gh];B[fh];W[gi];B[eh];W[ki];B[mi];W[mj];B[ji];W[jh];B[kh];W[kj];B[jk];W[ni];B[ih];W[ao];B[am];W[ap];B[bm];W[al];B[jg];W[mh];B[mg];W[mr];B[gg];W[an];B[lh];W[li];B[nh];W[mi];B[mq];W[ns];B[lq];W[lr];B[kr];W[kq];B[np];W[mp];B[nr];W[lp];B[nq];W[jr];B[jq];W[ks];B[ip];W[io];B[jo];W[kp];B[is];W[hp];B[hs];W[dq]C[Oliv.AS: uau cara
      vandito: Obrigado pela partida :)
      Oliv.AS: que partida
      Oliv.AS: Muito obrigado
      Oliv.AS: O que achou da partida?
      vandito: Eu me senti atrás o tempo todo
      Oliv.AS: Eu achei difícil, sinceramente
      Oliv.AS: Olá
      vandito: O pior é que eu estava com esse lance na mente o tempo inteiro
      Oliv.AS: entao, por isso eu não acho que ele estava tão atrás
      vandito: Verdade cchagas
      Oliv.AS: estava visando algo no M17 depois O18
      Oliv.AS: acham que funcionava?
      vandito: Não sei...
      Oliv.AS: pporque o normal vandito depois de R18 é conectar com p17 ou o17
      Oliv.AS: sim, fiquei na dúvida na hora se explora isso ou deixava para depois...
      Oliv.AS: explorava*
      vandito: Faz sentido
      Oliv.AS: sim, faz muito sentido
      vandito: Mas em nenhum momento me passou pela cabeça p17 ou o17 eu estava muito focado na parte de baixo
      Oliv.AS: eu já fui punido várias vezes por causa dela também rsrsr
      Oliv.AS: daí a gente fica meio calejado ^^'
      Oliv.AS: você tem jogado em outro site vandito? 
      vandito: não
      Oliv.AS: Estou vendo aqui parece que você quase não joga, mas não achei que jogou ruim não
      vandito: joguei um pouco o tygem, mais apanhei tanto para as crianças coreanas que deixei para lá :( rsrs
      Oliv.AS: 17k eu era bem pior rsrsrs
      vandito: mas*
      Oliv.AS: sim esta pedrinha em o18 é o terror
      vandito: Vou indo gente. Obrigado pelas dicas cchagas!
      Oliv.AS: Falou boa noite!
      Oliv.AS: Obrigado novamente
      vandito: :)
      Oliv.AS: vou indo também, obrigado cchagas
      cchagas: Manos
      cchagas: Olá
      cchagas: Vandito devia ter jogado N3 desde o mov 86
      cchagas: Antes se pá
      cchagas: Ele teria ficado com toda aquela área que no fim ficou pro Oliv.As
      cchagas: É então... não tava mesmo
      cchagas: É que ele não aproveitou as chances que teve pra jogar ali
      cchagas: Contra alguém mais forte acho que podia ter ido direto pro 018
      cchagas: Mas funcionava
      cchagas: O lane é que o Vandito tinha que ter reforçado em 017 ou p17 o quanto antes
      cchagas: isso!
      cchagas: A não ser que tenha algum lugar muito valioso onde ele consiga manter o Sente até poder jogar em o17 ou p17
      cchagas: Então... pessoalmente eu não gosto de deixar pra depois quando é porque o adversário não viu
      cchagas: Porque isso é contar que ele vai continuar não vendo
      cchagas: E eu acho isso prática ruim. Quando é algo que alguém mais forte veria eu acho ruim ignorar
      cchagas: Quando fica claro pra mim que o adversário não viu e que não é parte da estratégia eu acho melhor explorar o quanto antes
      cchagas: inclusive num contexto de grupo de estudo, punir erro o quanto antes ajuda a outra pessoa a entender que errou também
      cchagas: Sim, ficou claro que você não viu. Por isso que eu acho que o Oliv.AS devia ter jogado em o18 o quanto antes
      cchagas: esse tipo de jogada em o18 demora pra aprender 
      cchagas: Eu já era 9 kyu quando entendi ela
      cchagas: Antes a impressão que eu tinha é que tava protegido, que o outro só poderia jogar em 917
      cchagas: p17
      cchagas: Mas o18 causa um pua estrago
      cchagas: Ah... Eu disse que poderia ir direto pra o18 porque mesmo ele jogando p19 e depois em o17, dava pra usar a pedra em 018 pra fazer estrago
      cchagas: Mas talvez (aí não tenho certeza) jogar em outro lugar na 17 antes, como você disse era ate melhor
      cchagas: Valeu
      cchagas: Boa noite
      cchagas: é nois
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Sophie Pagès"),
    whiteRef: findPlayerRef("Emanuel Araújo"),
    date: new Date(2022, 1, 20).getTime(),
    handicap: 4,
    result: {
      whoWins: Color.White,
      difference: 44.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41399649",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-02-19]PC[OGS: https://online-go.com/game/41399649]GN[DoGemP]PB[cixidetroy]PW[Cactus Juice]BR[16k]WR[4k]TM[3600]OT[15/600 canadian]RE[W+44.5]SZ[19]KM[0.5]RU[Japanese]HA[4]AB[dd][pp][pd][dp]C[Cactus Juice: Bom jogo ^^
      ]AP[Sabaki:0.52.1];W[qn];B[nq]C[cixidetroy: Bom jogo :)
      ];W[qf];B[qh];W[qc];B[qd];W[pc];B[od];W[rd];B[re];W[rc];B[qe];W[nc];B[qk];W[qq];B[qp];W[pq];B[oq];W[rp];B[ro];W[rr];B[qo];W[sq];B[pr];W[qr];B[or];W[cn];B[fq];W[bp];B[cq];W[dl];B[cg];W[ci]C[Cactus Juice: Você é francesa?
      cixidetroy: sou sim
      ];B[jp];W[hq]C[cixidetroy: me apaxonei pelo brasil ha alguns anos
      ];B[hp];W[iq]C[Cactus Juice: veio visitar?
      ];B[ip];W[kq]C[cixidetroy: eu trabalho com eventos
      cixidetroy: ai teve um torneio em porto alegre e fui apitar
      ];B[jq]C[Cactus Juice: :O Que legal
      cixidetroy: :)
      ];W[jr]C[Cactus Juice: torneio de que?
      cixidetroy: Magic the gathering
      cixidetroy: ja ouviu falar?
      ];B[gq];W[lr]C[Cactus Juice: Sim haha
      ];B[fo];W[lo];B[kp];W[lp];B[hr]C[Cactus Juice: eu jogava quando era mais novo, hoje em dia é um hobby muito caro :P
      ];W[ir];B[gr];W[no]C[cixidetroy: é mesmo
      ];B[oo];W[nn];B[on];W[om]C[cixidetroy: você é de onde ?
      Cactus Juice: Do Rio de Janeiro
      ];B[pm]C[Cactus Juice: MAs por acaso morei em porto alegre
      Cactus Juice: hahaha
      Cactus Juice: De 2014 a 2015
      Cactus Juice: E em 2019
      ];W[ol]C[cixidetroy: :)
      cixidetroy: fui là em 2017
      cixidetroy: mas apenas 4 dias
      ];B[pl];W[ok]C[cixidetroy: você foi là para trabalhar ?
      ];B[oi]C[Cactus Juice: estudar
      ];W[nd]C[cixidetroy: ja estive de ferias no rio, 2  vezes eu acho, é muito lindo como cidade
      ];B[of]C[Cactus Juice: :O
      Cactus Juice: Ficou aonde por aqui?
      ];W[fc]C[cixidetroy: a primeira vez, eu fiquei perto dessas escadas amarelas
      cixidetroy: desculpa nao vou lembrar dos nomes 
      Cactus Juice: Escadaría Celarón?
      Cactus Juice: :P
      Cactus Juice: Na Lapa
      ];B[ec];W[fd]C[cixidetroy: isso
      ];B[id];W[ic]C[cixidetroy: segunda vez eu nao lembro, fiquei 2 dias com a minha filha, eu queria lhe mostrar o cristo, e depois a gente foi visitar um amigo meu em angra dos reis
      Cactus Juice: Que legal ^^
      ];B[hd];W[hc];B[fb];W[gb];B[eb];W[jd];B[gd];W[gc];B[hf];W[fe];B[if];W[kf];B[fg];W[eg];B[ff];W[ce];B[df];W[de];B[ee];W[ed];B[ef];W[dc];B[cd];W[db];B[cc];W[ea];B[be];W[pj];B[pi];W[qj];B[rk];W[ri];B[rh];W[ne];B[oe];W[mg];B[mj];W[jn];B[kj];W[bq];B[cr];W[cb];B[bd];W[bh];B[bg];W[ei];B[eh];W[fm];B[hn];W[fi];B[gm];W[fl];B[ij];W[kl];B[mk];W[mm];B[ll];W[lm];B[kk];W[jl];B[im];W[ml];B[lk];W[bb];B[jm];W[km];B[il];W[jk];B[jj];W[en];B[fn];W[eo];B[ep];W[br];B[oc];W[ob];B[nf];W[mf];B[ng];W[se];B[rf];W[so];B[sn];W[sp];B[rn];W[np];B[op];W[cp];B[dq];W[je];B[ie];W[jg];B[ig];W[mh];B[nh];W[jh];B[kh];W[kg];B[ji];W[lh];B[ki];W[dh];B[dg];W[ch];B[fh];W[gj];B[gi];W[hi];B[gh];W[hj];B[ih];W[ik];B[mi];W[hh];B[hg];W[hl];B[hm];W[gl];B[le];W[me];B[sf];W[sd];B[si];W[ac];B[ad];W[cs];B[ds];W[bs];B[do];W[dn];B[co];W[bo];B[rj];W[mq];B[mr];W[ms];B[nr];W[qi];B[oj];W[pk];B[nk];W[nl];B[ql];W[ps];B[os];W[qs];B[ns];W[ls];B[is];W[js];B[hs];W[ag];B[af];W[ah];B[bc];W[ab];B[jo];W[ko];B[in];W[ge];B[gf];W[li];B[ii];W[kn];B[jf];W[ke];B[lj];W[he];B[];W[]C[Cactus Juice: obrigado pelo jogo 
      cixidetroy: obrigada pela partida
      cixidetroy: :)
      Cactus Juice: jogou muito bem, ahcoque você já é mais forte que 16k
      Cactus Juice: acho que*
      Cactus Juice: Desculpa, a pilha do meu teclado está ruim
      cixidetroy: obrigada 
      cixidetroy: to bem perdida qua do alguém atacar 
      cixidetroy: mas o seu estilo de jogo é tudo calmo
      Cactus Juice: É, eu acho que você fugiu demais dos ataques
      cixidetroy: sim
      Cactus Juice: e isso me deixou pegar a vantagem
      cixidetroy: tenho que aprender 
      cixidetroy: não sei bem como melhorar 
      Cactus Juice: Do jeito simples seria atacar mais
      cixidetroy: ahaha sim
      Cactus Juice: Do jeito menos simples é atacar mais e resolver tsumego para saber como atacar melhor
      cixidetroy: sem medo ;)
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Fabrício Caluza Machado"),
    whiteRef: findPlayerRef("Laércio Pereira"),
    date: new Date(2022, 1, 21).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41425907",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-02-20]PC[OGS: https://online-go.com/game/41425907]GN[DOGemP | Fev 2022 |  Grupo A]PB[Fabrício]PW[laercioskt]BR[3k]WR[1k]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]C[laercioskt: olá
      laercioskt: bom jogo
      Fabrício: Bom jogo!
      ]AP[Sabaki:0.52.1];B[pd];W[dp];B[pq];W[dd];B[pk];W[qc];B[qd];W[pc];B[nc];W[oc];B[od];W[nb];B[mc];W[mb];B[lc];W[po];B[qo];W[qn];B[qp];W[nn];B[nq];W[qi];B[oj];W[nh];B[oh];W[og];B[nf];W[oi];B[ph];W[pi];B[pg];W[pf];B[of];W[qg];B[ng];W[qh];B[og];W[nj];B[nk];W[mk];B[mj];W[ni];B[ml];W[lk];B[nl];W[ll];B[pn];W[pm];B[on];W[om];B[oo];W[no];B[op];W[mm];B[qm];W[ql];B[rm];W[rl];B[rn];W[rj];B[cn];W[dn];B[dm];W[en];B[bo];W[cq];B[cj];W[em];B[dl];W[jq];B[ep];W[eq];B[lb];W[rc];B[fc];W[cf];B[jo];W[hp];B[lp];W[ec];B[fd];W[fb];B[hc];W[gb];B[kh];W[hb];B[ic];W[mg];B[lg];W[mh];B[mf];W[ef];B[gf];W[gg];B[fg];W[ff];B[hg];W[gh];B[hh];W[ge];B[hf];W[fe];B[gi];W[he];B[ie];W[re];B[el];W[hn];B[eg];W[dg];B[dh];W[ch];B[gn];W[gm];B[hm];W[in];B[fm];W[go];B[fn];W[fo];B[gl];W[di];B[fh];W[bp];B[bg];W[bf];B[ci];W[eh];B[bh];W[lr];B[cg];W[dh];B[im];W[jn];B[jm];W[kn];B[dj];W[ej];B[ib];W[gc];B[ma];W[oa];B[qf];W[rf];B[qe];W[co];B[bn];W[fk];B[fi];W[ei];B[ek];W[fj];B[gk];W[ki];B[ji];W[lh];B[kg];W[ko];B[rd];W[sd];B[mr];W[lq];B[ls];W[kr];B[mp];W[ag];B[bi];W[kj];B[jj];W[hd]C[Fabrício: Obrigado, vc foi melhor do que eu o jogo todo
      laercioskt: obrigado,pela partida
      laercioskt: acho que as complicações que criei no começo me favoreceram
      laercioskt: mas tenho dúvidas se foi uma abertura possível da minh aparte
      laercioskt: talvez se você tivesse me mantido separado com Q12 ao invés de O14 o jogo teria sido mais complicado
      Fabrício: A sequência entre O14 e P13 já me deixou muito atrás
      laercioskt: pois, vc ficou meio apertado ali sem pontos praticamente
      laercioskt: achei interessante o seu corte em F13
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Caio Ribeiro Chagas"),
    whiteRef: findPlayerRef("Guilherme Francisco de Souza Silva"),
    date: new Date(2022, 1, 21).getTime(),
    result: {
      whoWins: Color.Black,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41435407",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-02-20]PC[OGS: https://online-go.com/game/41435407]GN[XIKO vs cchagas]PB[cchagas]PW[XIKO]BR[6k]WR[10k]TM[3600]OT[15/600 canadian]RE[B+R]SZ[19]KM[6.5]RU[Japanese]C[cchagas: Salve
      XIKO: bom jogo :)
      cchagas: Bom jogo
      ]AP[Sabaki:0.52.1];B[dq]C[cchagas: Bom jogo
      ];W[pd];B[cd];W[qp];B[oq];W[po];B[lq];W[qk];B[ok];W[pg];B[nc];W[oc];B[md];W[nd];B[ne];W[od];B[lc];W[ec];B[gc];W[ee];B[df];W[de];B[ce];W[ef];B[dg];W[ge];B[id];W[jc];B[ic];W[kd];B[jd];W[ld];B[kc];W[me];B[mc];W[nf];B[le];W[mf];B[kf];W[eg];B[qn];W[pn];B[qm];W[pm];B[ql];W[pl];B[rk];W[pk];B[rj];W[np];B[nq];W[mp];B[lp];W[lo];B[qh];W[qg];B[ph];W[oh];B[rg];W[rf];B[rh];W[qe];B[oi];W[oj];B[nh];W[nj];B[og];W[of];B[ko];W[mq];B[mr];W[nr];B[or];W[lr];B[ns];W[kp];B[kq];W[kn];B[jp];W[mn];B[jj];W[dh];B[ch];W[ci];B[di];W[eh];B[cg];W[dj];B[jn];W[gj];B[km];W[co];B[cp];W[do];B[fp];W[cl];B[cm];W[dm];B[bm];W[bn];B[dl];W[ck];B[dn];W[em];B[en];W[cn];B[fm];W[el];B[fl];W[ek];B[eo];W[bp];B[bq];W[dp];B[cq];W[ep];B[eq];W[fq];B[an]C[cchagas: Obrigado
      cchagas: Cara... eu não esperava pegar esse grupo
      cchagas: Ataquei ali só pra construir forma externa
      cchagas: Eu esperava que você jogasse b8 ou b5 e aí eu protegeria em f3 e ficaria por isso essa troca
      XIKO: sim, eu deveria ter feito isso
      XIKO: depois disso foi gg pra mim
      XIKO: não tinha mais esperança
      cchagas: Nossa... 
      cchagas: lembrei que a comunidade de Go normalmente usa gg no começo
      cchagas: acho tão estranho haha
      cchagas: Bom... novamente, obrigado pela partida. Eu estou superfeliz de poder jogar e trocar ideias com as pessoas com quem jogo. 
      cchagas: Bom resto de fim de semana pra ti
      XIKO: bom fim de semana pra ti também :)
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Garcia"),
    whiteRef: findPlayerRef("Ariel Oliveira"),
    date: new Date(2022, 1, 22).getTime(),
    result: {
      whoWins: Color.White,
      difference: 108.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41467316",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-02-21]PC[OGS: https://online-go.com/game/41467316]GN[DOGemP | grupo C | Fev 2022]PB[PutzGrila]PW[Oliv.AS]BR[14k]WR[12k]TM[3600]OT[15/600 canadian]RE[W+108.5]SZ[19]KM[6.5]RU[Japanese]C[Oliv.AS: Bom jogo!
      PutzGrila: pra ti tb =)
      ]AP[Sabaki:0.52.1];B[qc]C[Oliv.AS: Bom jogo!
      PutzGrila: pra ti tb =)
      ];W[pq];B[cd];W[cp];B[ec];W[dj];B[pj];W[pd];B[pc];W[od];B[nd];W[ne];B[me];W[nc];B[md];W[oc];B[oe];W[nf];B[of];W[ng];B[og];W[nh];B[oi];W[oh];B[ph];W[qf];B[pg];W[qe];B[mb];W[mc];B[lc];W[mf];B[lf];W[lg];B[mi];W[le];B[ld];W[kf];B[ke];W[je];B[kd];W[jd];B[jf];W[lb];B[lf];W[kg];B[jc];W[if];B[kc];W[nb];B[jg];W[jh];B[ie];W[ig];B[he];W[eq];B[qd];W[pe];B[id];W[jf];B[oa];W[pb];B[oo];W[qo];B[ql];W[np];B[mn];W[jp];B[lp];W[lo];B[kn];W[ko];B[mo];W[mp];B[df];W[ch];B[cg];W[dh];B[eh];W[ei];B[fh];W[fl];B[gj];W[fi];B[gh];W[gi];B[hh];W[hi];B[ih];W[ji];B[ii];W[jj];B[ij];W[hj];B[ik];W[jk];B[il];W[jl];B[jm];W[km];B[ln];W[lm];B[ml];W[jn];B[im];W[in];B[hn];W[ho];B[gn];W[go];B[fn]C[PutzGrila: em uns 15 min, vou dar um pause pra pegar comida kkkkk
      PutzGrila: na verdade 20 agora....
      ];W[hm];B[gl];W[gk];B[el];W[gm];B[hl];W[fm];B[en];W[fk];B[co];W[bo];B[cn];W[bn];B[cm];W[bm];B[bl];W[ck];B[cl];W[bk];B[dp];W[dq]C[PutzGrila: vou descer pegar jantar, já volto...perdão por isso
      Oliv.AS: vou no banheiro
      Oliv.AS: sem problemas
      Oliv.AS: quando eu voltar aviso, meu tempo está menor rsrs
      Oliv.AS: voltei
      PutzGrila: voltei
      Oliv.AS: eu não vi sua mensagem antes, eu jogo no modo zen (tela cheia O.O)
      ];B[ep]C[PutzGrila: kkkk
      ];W[fp];B[fo];W[dm];B[cq];W[bp];B[fq];W[gp];B[gr];W[cr];B[iq];W[gq];B[kq];W[jq];B[jr];W[lq];B[fr];W[io];B[op];W[oq];B[lr];W[kp];B[kr];W[mr];B[is];W[hq];B[hr];W[ip];B[dr];W[bq];B[er];W[br];B[cq];W[dq];B[eq];W[em];B[bh];W[dn];B[eo];W[do];B[bi];W[ci];B[bj];W[ak];B[cj];W[dl];B[dg];W[di];B[ag];W[ir];B[ls];W[iq];B[ms];W[nr];B[ns];W[js];B[kb];W[ma];B[rg];W[qg];B[rh];W[qh];B[qi];W[ni];B[mj];W[nj];B[mk];W[mm];B[nn];W[nm];B[ol];W[on];B[mh];W[lh];B[mg];W[le];B[no];W[po];B[lf];W[oj];B[pi];W[li];B[ok];W[lj];B[re];W[rf];B[rd];W[sf];B[lk];W[kk];B[nk];W[qb];B[rb];W[sc];B[ja];W[sg];B[la];W[mb];B[na];W[ri];B[ek];W[dk];B[];W[rm]C[PutzGrila: precisa continuar n, vc já ganhou
      ];B[];W[]C[PutzGrila: gg =)
      Oliv.AS: cara
      Oliv.AS: achei que você tinha clicado errado =/
      Oliv.AS: que mancada que eu dei ali no centro hein
      PutzGrila: kkkkk nem nem, já contei td....pra eu ganhar...vc teria q fazer algum erro muito grande....
      PutzGrila: eu perdi no momento q meu grupo do inferior esquerdo morreu
      Oliv.AS: o jogo foi ótimo
      Oliv.AS: e mais uma vez te deixei fazer um moyo consideravel
      Oliv.AS: minha ideia era atacá-lo usando um pouco das liberdades que meu grupo do centro tirou das suas pedras do topo
      Oliv.AS: mas depois que perdi ele parei de pensar em alguma coisa...mesmo assim seria difícil 
      PutzGrila: eu no máximooooooo conseguiria perder por 11.5 mokus
      PutzGrila: isso, se vc cometesse um erro ainda
      Oliv.AS: caramba, como sabe O.O
      PutzGrila: depois q perdi o grupo inferior....n tinha mais como ganhar...vc pegou metade  de baixo inteira mais parte do centro e superior direito
      PutzGrila: se vc cometesse um erro, conseguiria recuperar uns pontos no superior direito
      PutzGrila: mas msmo assim, n seria suficiente
      Oliv.AS: eu olho por cima as posições...sabia que estava na frente mas não conto pontos
      PutzGrila: eu conto, pra n ficarmos jogando em vão kkkk
      PutzGrila: eu n tinha mais oq fazer....kkkkk
      Oliv.AS: kkkkkk boa, se deixar eu fico aqui até amanhã
      Oliv.AS: mas você faz bem em contar...preciso ficar esperto com isso
      Oliv.AS: você avançou rápido, parece que esses dias estava 16k
      Oliv.AS: mas só joga 9x9 O.O
      Oliv.AS: ?
      PutzGrila: sim, 19x19 demora muito...e aí jogo em intervalos d reuniões kkkkk
      PutzGrila: é q assim, eu conto pra saber se tenho como ganhar....mas pra eu ganhar, vc teria q jogar errado, muito errado....e várias vezes seguidas
      PutzGrila: improvável
      PutzGrila: mas se acontecesse
      PutzGrila: eu ganharia por 45 a mais
      PutzGrila: bom, vou -me
      PutzGrila: vlw =D
      Oliv.AS: cara eu acho que você podia tentar arrumar um tempo para tabuleiros maiores, assim, minha opinião DDK rsrs
      Oliv.AS: boa noite
      Oliv.AS: obrigado pela partida
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Caio Ribeiro Chagas"),
    whiteRef: findPlayerRef("Emanuel Araújo"),
    date: new Date(2022, 1, 22).getTime(),
    result: {
      whoWins: Color.White,
      difference: 24.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41464891",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-02-21]PC[OGS: https://online-go.com/game/41464891]GN[GrupoB/Fevereiro 2022]PB[cchagas]PW[Cactus Juice]BR[6k]WR[4k]TM[3600]OT[15/600 canadian]RE[W+24.5]SZ[19]KM[6.5]RU[Japanese]C[Cactus Juice: alo alo
      Cactus Juice: bom jogo ^^
      cchagas: a hora que eu vi o seu já tinha enviado hehe
      cchagas: Bom jogo
      ]AP[Sabaki:0.52.1];B[dq];W[pd];B[pq];W[cc];B[qf];W[nd];B[qi];W[qe];B[pf];W[rf];B[rg];W[do];B[cp];W[co];B[gq];W[dk];B[re];W[rd];B[dd];W[se];B[qg];W[cd];B[de];W[dc];B[ce];W[fc];B[ch];W[eq];B[er];W[dp];B[cq];W[fq];B[fr];W[gp];B[hq];W[hp];B[qo];W[iq];B[ip];W[jq];B[io];W[fo];B[hm];W[mq];B[lo];W[lp];B[ko];W[no];B[jm];W[mo];B[ql];W[jd];B[ie];W[id];B[lc];W[mc];B[le];W[kc];B[ld];W[lb];B[kb];W[mb];B[kd];W[jc];B[je];W[gd];B[ge];W[fe];B[gf];W[ff];B[gh];W[fh];B[gi];W[di];B[ci];W[cj];B[dh];W[eh];B[ei];W[dj];B[eg];W[fg];B[ef];W[fi];B[ed];W[gj];B[ii];W[gg];B[if];W[hg];B[fd];W[gc];B[ec];W[eb];B[fb];W[db];B[gb];W[hb];B[hd];W[hc];B[jb];W[he];B[hf];W[hd];B[nf];W[ih];B[jh];W[hi];B[ij];W[jg];B[ig];W[hh];B[kh];W[ml];B[mm];W[nm];B[ll];W[nk];B[mn];W[nn];B[mk];W[nl];B[mj];W[oi];B[nh];W[ni];B[mi];W[qm];B[rm];W[qn];B[rn];W[po];B[pn];W[pm];B[pp];W[pl];B[oo];W[qk];B[em];W[gm];B[gn];W[fn];B[gl];W[fm];B[fl];W[el];B[ek];W[dl];B[fk];W[ej];B[nj];W[oj];B[hk];W[rl];B[nr];W[mr];B[nq];W[rj];B[ri];W[np];B[kq];W[kp];B[kr];W[jr];B[jp];W[hr];B[gr];W[lr];B[js];W[lq];B[ir];W[or];B[oq];W[ns];B[ms];W[ls];B[pr];W[on];B[po];W[oh];B[ng];W[me];B[lf];W[mf];B[mg];W[md];B[kf];W[sm];B[ro];W[bo];B[bp];W[be];B[bf];W[bd];B[cf];W[ah];B[bi];W[bj];B[bg];W[ai];B[dg];W[og];B[of];W[hn];B[in];W[ho];B[ao];W[an];B[ap];W[bn];B[os];W[gk];B[hl];W[oe];B[fj];W[hj];B[pe];W[qj];B[ne];W[od];B[sn];W[sl];B[ks];W[pi];B[ph];W[pg];B[qh];W[sh];B[sg];W[si];B[sf];W[re];B[qc];W[qd];B[qb];W[ob];B[lh];W[af];B[ag];W[ae];B[bh];W[aj];B[rh];W[sj];B[ms];W[lg];B[mh];W[ns];B[ib];W[ga];B[ms];W[mp];B[ns];W[ik];B[jk];W[il];B[im];W[kl];B[lm];W[];B[]C[Cactus Juice: boa, jogou bem demais ^^
      cchagas: valeeeu mano
      Cactus Juice: só acho que demorou pra atacar a direita
      cchagas: com certeza
      Cactus Juice: mas tvaa complicado, tu jogou pelo centro e eu tinha acesso em 3 direções
      cchagas: Você ganhou no momento em que conseguiu colocar n8 primeiro
      cchagas: foi n8?
      cchagas: Sim
      cchagas: n8
      Cactus Juice: nem
      Cactus Juice: eu tavana frente o jkogo todo
      cchagas: ahahah isso é
      cchagas: Quis dizer que depois daquilo já era
      Cactus Juice: e tu ainda tinha o bad shape em L10
      Cactus Juice: ahhh sim
      Cactus Juice: aí sim 
      Cactus Juice: e eu também não ataquei a esquerda com muita força
      Cactus Juice: dava pra ter atacado melhor
      cchagas: Mas ae... obrigado pela partida
      cchagas: Eu me emplogo quando jogo com gente mais forte
      Cactus Juice: obrigado pelo jogo
      Cactus Juice: mas eu não li, então não sei ahaha
      Cactus Juice: foi um ótimo jogo :D
      cchagas: ah... tô vendo a variação agora
      cchagas: acho que dava pra viver, ia ser deprimente mas dava
      Cactus Juice: em cima tu viu uma sequência boa também
      cchagas: no fim foi deprimente do memso tanto
      Cactus Juice: quas eme meteu em apuros
      Cactus Juice: complicada, então fácil de errar
      cchagas: É então... depois eu quero ver direito se não tinha mesmo como
      Cactus Juice: acho que não, mas não tneho certeza
      cchagas: é... a princípio parece que não
      cchagas: Mas eu tinha que tentar pra saber haha
      Cactus Juice: sim ^^
      Cactus Juice: bom, fui _o/
      Cactus Juice: Ah, jog amais devagar hauahua
      cchagas: hahaha 
      cchagas: É a empolgação... é a segunda vez que jogo na liga
      cchagas: E a primeira vez com alguém mais forte
      Cactus Juice: ahhahahaahahahaha
      Cactus Juice: vvamo que vamo
      cchagas: Na real eu nunca tinha jogado em grupo de estudos antes, falando sobre as jogadas e tals
      cchagas: sou novo nisso
      cchagas: então paciência comigo
      Cactus Juice: mÊs que vem deve ter mais entre eu e você ^^
      Cactus Juice: ahhhh sim
      Cactus Juice: revisar é super importante
      cchagas: Total
      cchagas: abraço ae
      cchagas: e obrigado de novo
      Cactus Juice: abraço!
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Laércio Pereira"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2022, 1, 24).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41521732",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-02-23]PC[OGS: https://online-go.com/game/41521732]GN[Grupo A | Fev 2022 | DOGemP]PB[laercioskt]PW[psygo]BR[1k]WR[3d]TM[3600]OT[15/600 canadian]RE[W+R]SZ[19]KM[6.5]RU[Japanese]C[laercioskt: opa... bom jogo
      psygo: Bom jogo!
      ]AP[Sabaki:0.52.1];B[pd];W[dd];B[pq]C[psygo: Tava enchendo a cara no bar qdo eu te lembrei da partida?
      ];W[dq]C[psygo: kkkkkkk
      laercioskt: kkk, pior que não, estava no trabalho 
      ];B[cc]C[psygo: Tendi
      ];W[cd];B[dc];W[ed];B[fc]C[psygo: Vc é tipo o Clark Kent do Go
      laercioskt: tipo isso, só tirei o óculos na vdd
      ];W[fd];B[gc];W[ec];B[eb];W[fb];B[gb];W[db];B[fa];W[cb];B[cj];W[cl];B[bf];W[be];B[cg];W[el];B[dp];W[cp];B[eq];W[cq];B[pn];W[jp];B[hq];W[iq];B[ir];W[jr];B[ip];W[jq];B[io];W[hp];B[go];W[gq];B[ho];W[hr];B[do];W[fp];B[fo];W[ep];B[dm];W[cm];B[co];W[eo];B[dn];W[bo];B[bn];W[bp];B[cn];W[ck];B[dj];W[ek];B[fm];W[fi];B[eg];W[gg];B[gh];W[fh];B[fg];W[jm];B[gl];W[gk];B[il];W[hk];B[jl];W[hg];B[gf];W[hf];B[ge];W[gd];B[he];W[ic];B[hd];W[hc];B[hb];W[ib];B[ha];W[je];B[if];W[ig];B[jg];W[hi];B[jh];W[ii];B[ie];W[kj];B[kk];W[jf];B[jd];W[kd];B[ke];W[kf];B[jc];W[le];B[ff];W[lj];B[km];W[qc];B[pc];W[qd];B[pe];W[qe];B[pf];W[qf];B[lh];W[ng];B[pg];W[ni];B[mi];W[mj];B[mg];W[mf];B[nh];W[oh];B[oi];W[mh];B[bc];W[bb];B[nh];W[nj];B[og];W[mh];B[ce];W[bd];B[nh];W[kc];B[nf];W[jb];B[id];W[bh];B[lb];W[kb];B[ch];W[bj];B[bi];W[ai];B[ci];W[bk];B[lc];W[nc];B[md];W[ld];B[mc];W[me];B[lg];W[nd];B[nb];W[la];B[ej];W[fj]C[laercioskt: vlw
      psygo: Obg
      psygo: Vc saiu cortando tudo
      laercioskt: uhum
      psygo: Quer entrar numa ligacao pra revisar?
      laercioskt: um pouco inconsequente até rs
      psygo: Vc está transmitindo?
      laercioskt: hoje não consigo
      psygo: Blz
      laercioskt: achei que iria conseguir, mas outro dia vou querer rever
      psygo: Blz, um bas entao, partida bem difícil
      psygo: Vou dar uma revisada agora
      laercioskt: beleza, depois assisto
      laercioskt: vlw
      laercioskt: vou nessa
      laercioskt: até
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Emanuel Araújo"),
    whiteRef: findPlayerRef("Gabriel Ventura"),
    date: new Date(2022, 1, 28).getTime(),
    result: {
      whoWins: Color.Black,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41624493",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-02-27]PC[OGS: https://online-go.com/game/41624493]GN[Partida amistosa]PB[Cactus Juice]PW[Pedepano]BR[4k]WR[5k]TM[3600]OT[10/600 canadian]RE[B+R]SZ[19]KM[6.5]RU[Japanese]C[Cactus Juice: Alo
      Cactus Juice: bom jogo ^^
      ]AP[Sabaki:0.52.1];B[qd];W[oc];B[pf]C[Pedepano: vlw
      Pedepano: bom jogo
      ];W[kd];B[pp];W[dc];B[cq];W[de];B[qn];W[jp];B[mc];W[md];B[ld];W[lc];B[nd];W[le];B[nc];W[dp];B[dq];W[ep];B[cp];W[dn];B[fq];W[fm];B[lp];W[lo];B[kp];W[ko];B[jo];W[ip];B[jn];W[lm];B[ho];W[hp];B[go];W[fp];B[gp];W[gq];B[eq];W[hr];B[hm];W[mp];B[mq];W[nq];B[lq];W[no];B[jq];W[iq];B[jr];W[mr];B[lr];W[nr];B[ir];W[fr];B[io];W[qq];B[op];W[pq];B[np];W[mo];B[om];W[qk];B[ok];W[qh];B[lk];W[kl];B[ik];W[on];B[pn];W[nm];B[ol];W[kk];B[kj];W[mk];B[mj];W[jk];B[jj];W[il];B[jm];W[jl];B[hl];W[nj];B[nk];W[ml];B[oj];W[ni];B[oi];W[mi];B[lj];W[ph];B[oh];W[rf];B[hj];W[lh];B[ne];W[ii];B[ij];W[ji];B[dj];W[co];B[cm];W[bo];B[oo];W[nn];B[hq];W[gr];B[br];W[ql];B[pm];W[ch];B[dm];W[em];B[fk];W[ek];B[dk];W[ej];B[el];W[fl];B[dl];W[ei];B[di];W[dh];B[fo];W[eo];B[fn];W[en];B[eh];W[fi];B[gk];W[bm];B[bl];W[an];B[cn];W[bp];B[bq];W[ci];B[bn];W[am];B[ao];W[ap];B[al];W[ao];B[aq];W[gi];B[hi];W[hh];B[ih];W[jh];B[gh];W[hg];B[fh];W[eg];B[gj];W[gg];B[fj];W[nf];B[of];W[og];B[ng];W[mf];B[pg];W[ro];B[rn];W[pd];B[qc];W[oe];B[od];W[pe];B[qe]C[Cactus Juice: obrigado pelo jogo
      Pedepano: esse jogo foi um desastre rs
      Pedepano: obrigado pela partida
      Cactus Juice: concordo
      Cactus Juice: Tem resolvido tsumego?
      Cactus Juice: Aconteceram uns erros de L& bem básicos =/
      Pedepano: não, nunca fiquei fazendo tsumego
      Pedepano: eu só jogo mesmo
      Cactus Juice: SAquei
      Pedepano: entendi
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Gabriel Ventura"),
    whiteRef: findPlayerRef("Caio Ribeiro Chagas"),
    date: new Date(2022, 2, 2).getTime(),
    result: {
      whoWins: Color.White,
      difference: 13.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41677034",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-03-01]PC[OGS: https://online-go.com/game/41677034]GN[GrupoB/Fevereiro 2022]PB[Pedepano]PW[cchagas]BR[5k]WR[6k]TM[3600]OT[15/600 canadian]RE[W+13.5]SZ[19]KM[6.5]RU[Japanese]C[cchagas: Salve
      Pedepano: bom jogo
      ]AP[Sabaki:0.52.1];B[pd];W[dq]C[cchagas: Bom jogo
      ];B[do];W[cp];B[co];W[pq];B[po];W[cc];B[dd];W[cd];B[de];W[qc];B[qd];W[pc];B[oc];W[ob];B[nc];W[nb];B[mc];W[mb];B[lc];W[rd];B[re];W[rc];B[qf];W[qk];B[qi];W[qn];B[on];W[jc];B[hc];W[lb];B[kc];W[kb];B[jd];W[ic];B[id];W[hd];B[he];W[gd];B[if];W[ge];B[pk];W[qj];B[pj];W[pi];B[qh];W[pl];B[oi];W[og];B[oh];W[kd];B[ke];W[hf];B[ie];W[gg];B[ih];W[cg];B[ff];W[ef];B[ce];W[dc];B[fe];W[ee];B[fd];W[ed];B[gc];W[gf];B[fg];W[gh];B[eh];W[fc];B[dg];W[df];B[cf];W[bf];B[ch];W[be];B[bh];W[di];B[ei];W[dh];B[eg];W[cj];B[gi];W[gb];B[dj];W[ci];B[fj];W[dk];B[ek];W[ck];B[ol];W[pm];B[om];W[qo];B[el];W[jl];B[jn];W[ji];B[ii];W[ij];B[kj];W[im];B[in];W[hl];B[gm];W[ll];B[jj];W[hj];B[ln];W[hi];B[hh];W[ig];B[jg];W[jh];B[kh];W[hg];B[ki];W[ld];B[kf];W[od];B[nd];W[oe];B[ne];W[nf];B[me];W[pf];B[qe];W[jq];B[mk];W[mq];B[eq];W[er];B[fq];W[fr];B[dp];W[cq];B[gq];W[gr];B[ip];W[iq];B[hq];W[hr];B[oq];W[pp];B[op];W[pn];B[lq];W[lr];B[mp];W[lp];B[lo];W[kp];B[nq];W[mr];B[pr];W[qr];B[os];W[nr];B[or];W[oo];B[no];W[qs];B[kl];W[km];B[kk];W[jm];B[lm];W[kn];B[cl];W[bl];B[dl];W[hn];B[hm];W[io];B[jo];W[ho];B[hp];W[gl];B[fm];W[ej];B[fi];W[fk];B[gk];W[fl];B[hk];W[il];B[ik];W[ko];B[jp];W[kq];B[dj];W[gj];B[ej];W[jk];B[bi];W[bk];B[bm];W[mf];B[le];W[nh];B[mh];W[qg];B[rg];W[oj];B[ok];W[nj];B[ni];W[mi];B[ng];W[mg];B[lh];W[fh];B[cm];W[bg];B[bj];W[ah];B[al];W[hb];B[rj];W[rk];B[ri];W[ns];B[po];W[nh];B[ph];W[oo];B[nn];W[bo];B[bn];W[bp];B[sk];W[rl];B[sl];W[sm];B[sj];W[rm];B[sd];W[sc];B[se];W[an];B[qq];W[rq];B[po];W[qp];B[oo];W[ai];B[ak];W[ao];B[aj];W[ag];B[am];W[];B[]C[cchagas: Obrigado
      Pedepano: obrigado pelo jogo
      cchagas: Nossa mano... vacilei demais ali na esquerda
      Pedepano: foi interessante
      cchagas: Eu contei uma pedra a mais e achei que não ia dar semeai
      cchagas: quer dizer, que se desse eu tava na frente
      Pedepano: sim, mas foi consequencia do ataque no centro, você não tinha como defender o centro e a esquerda ao mesmo tempo
      cchagas: Então... ali no centro eu não consegui prever que eu ia ter que fazer uma jogada a mais pra proteger, achei que ia conseguir causar o ko
      Pedepano: ah sim, tinha uma liberdade lá em cima, se não tivesse eu teria perdido a batalha da esquerda também
      cchagas: Não que eu ia capturar o grupo todo ali, mas achei que causando o ko conseguiria uma troca boa
      Pedepano: sim, com certeza
      cchagas: Então... com esse eu acho que dava se tivesse uma pedra em F12
      cchagas: A tal da pedra que eu contei a mais
      Pedepano: sim, se tivesse a pedra em f12 daria sim
      Pedepano: eu tinha muitos pontos de ataque ali
      Pedepano: sim, verdade
      Pedepano: mas se tivesse a pedra em f12 ela teria me beneficado na batalha do centro
      cchagas: nossa... pode crer
      cchagas: de qualquer forma acho que errei muito em achar que dava pra provocar o ko em f9
      Pedepano: como faz pra colar variação aqui?
      cchagas: não sei haha
      cchagas: eu devia ter jogado logo em  b11
      Pedepano: você colou umas variações
      Pedepano: não é essa, é outra
      Pedepano: queria colar aqui mas não consigo
      Pedepano: na jogada 195 eu poderia jogar em j12 se tivesse uma pedra em f12, seria devastador
      cchagas: nossa... to olhando aqui e fiquei confuso haha
      cchagas: olha lá a variação que eu fiz de 202 a 206
      cchagas: imagina que tem a tal da pedra em f12
      cchagas: Isso é o que eu tinha calculado
      cchagas: Sem ver que tava esse vazio em f12
      cchagas: olha só...
      cchagas: como faz?
      Pedepano: sim, sem a liberdade de f12 teria esse ataque também
      cchagas: É então... só que se tivesse f12 você também não teria deixado a abertura
      cchagas: Foi só um delírio hahaha
      Pedepano: essa liberdade me salvou ali, mas ela salvou o cchagas antes na batalha do meio, sem essa liberdade a batalha do meio teria sido diferente e essa batalha da esquerda também seria diferente
      Pedepano: o atare em não funciona porque tem os pontos de ataque em f6 em seguida e e4
      Pedepano: o atari em e6 que to falando, se não tivesse a liberdade de f12 ele funcionaria em conjunto com os ataques em e4 e f6, a liberdade de f12 me salvou de tudo isso
      Pedepano: como faz pra colar variante? ia facilitar demais
      cchagas: Agora, k13 foi um baita erro Pedepano
      cchagas: em move114
      cchagas: 114
      Pedepano: sim, me arrendi de k13 imediatamente após ter jogado
      Pedepano: como não seria?
      Pedepano: é verdade, tinha que ter visto mais fundo, a liberdade de f12 não faria diferença nessa variante
      cchagas: sim, salvava as brancas
      cchagas: não
      cchagas: Isso não mesmo
      cchagas: Pra mater o grupo grande só se eu tivesse conseguido forçar o ko logo antes
      cchagas: isso
      cchagas: O pedepano viu uma ali que dava
      cchagas: NOSSA 
      cchagas: Essa é a que daquelas que você sabia que existe em algum lugar mas não acha haha
      cchagas: então
      cchagas: sobre essa parte debaixo
      cchagas: em 132 eu joguei n3
      cchagas: devia ter jogado g3
      cchagas: porque o canto direito tava mais forte
      cchagas: devia ter reforçado o esquerdo 
      cchagas: até n4 eu acho que rolava
      cchagas: mas eu deixei mais denso no canto direito ao invés de reforçar o esquerdo
      cchagas: Cactus, eu disse n4 pensando em g4
      cchagas: isso, g4 no mov 132
      cchagas: verdade
      cchagas: eu achei que você ia na hora
      cchagas: Prezados, preciso ir jantar
      cchagas: Obrigado pelo jogo Pedepano, e pela troca de ideia
      cchagas: E obrigado Cactus pelos insights
      Pedepano: eu sou muito ruim em contagem de território, eu passei esse jogo inteiro sem saber quem estava ganhando, se eu soubesse que estava perdendo naquele ponte teria jogado l8 ao invés de n9 com certeza
      Pedepano: Obrigado cchagas
      Pedepano: obrigado Cactus
      cchagas: Boa noite galera
      cchagas: flw vlw
      Pedepano: boa noite :)
      Cactus Juice: sim, não sdalvaria
      Cactus Juice: mas o endgame é bem melhor
      Cactus Juice: e é ko
      Cactus Juice: cchagas, tu tava certo xD
      Cactus Juice: sim, eu segui a sequÊncia de f9
      Cactus Juice: ah sim, sim, Pedepano, seria
      Cactus Juice: onde tão as variações?
      Cactus Juice: tem que compartilharam xD
      Cactus Juice: mesmo sem a liberdad de f12, isso não funciona
      Cactus Juice: xD
      Cactus Juice: é só dar atari em e6
      Cactus Juice: sim
      Cactus Juice: ih verdade
      Cactus Juice: vi errado xD
      Cactus Juice: bom, mesmo assim perde menos
      Cactus Juice: tu diz compartilhar?
      Cactus Juice: Tem um botão compartilhar na análise
      Cactus Juice: não seria
      Cactus Juice: colquei a pedra de f12
      Cactus Juice: ah
      Cactus Juice: tu dis pela troca
      Cactus Juice: diz*
      Cactus Juice: Sim, pela troca até vai
      Cactus Juice: Mas não matar a parte grande do grupo
      Cactus Juice: era só ter jogado a variação do ko ao invés de correr :P
      Cactus Juice: era só fazer oa tari duplo ao invés de capturar m3
      Cactus Juice: maaaaaaaaaaaaas
      Cactus Juice: tu não precisava do ko, então
      Cactus Juice: de boas
      Cactus Juice: eu diria que assim a troca fica até quase igual xD
      Cactus Juice: chagas, coonecta L5 antes de forçar o ko xD
      Cactus Juice: só pra ser menos problema pra vocÊ se perder
      Cactus Juice: por que não g4? xD
      Cactus Juice: ao invés de jogar tudo na terceira linha
      Cactus Juice: ah sim
      Cactus Juice: hehehe ótimo jogo vocês dois
      Cactus Juice: BOa ^^
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Laura Augustina Avram"),
    whiteRef: findPlayerRef("Philippe Fanaro"),
    date: new Date(2022, 2, 6).getTime(),
    result: {
      whoWins: Color.White,
      difference: 4.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41782166",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-03-05]PC[OGS: https://online-go.com/game/41782166]GN[Grupo A | Fev 2022 | DOGemP]PB[balaura]PW[psygo]BR[3k]WR[3d]TM[3600]OT[15/600 canadian]RE[W+4.5]SZ[19]KM[6.5]RU[Japanese]C[balaura: boa partida :)
      psygo: Boa partida!
      ]AP[Sabaki:0.52.1];B[qd];W[dd];B[pq];W[dq];B[fc];W[oc];B[pe];W[ic];B[cc];W[dc];B[cd];W[de];B[db];W[eb];B[cb];W[fb];B[cf];W[oe];B[of];W[ne];B[pc];W[pb];B[qb];W[qo];B[op];W[ql];B[qj];W[mq];B[rp];W[ro];B[qp];W[po];B[nq];W[mp];B[oo];W[on];B[nn];W[om];B[no];W[ip];B[cn];W[do];B[bp];W[dn];B[cm];W[dm];B[cl];W[dl];B[cq];W[dr];B[jd];W[jc];B[ld];W[lb];B[ob];W[nb];B[pa];W[ck];B[bk];W[bj];B[cj];W[dk];B[bi];W[co];B[bn];W[bo];B[ao];W[dj];B[ci];W[qh];B[pi];W[og];B[nf];W[mf];B[me];W[nc];B[ng];W[oh];B[nj];W[mi];B[mg];W[ni];B[oj];W[ml];B[mj];W[li];B[lj];W[ki];B[kj];W[ji];B[jj];W[hi];B[ii];W[ih];B[ij];W[jg];B[lf];W[jm];B[hh];W[hg];B[gh];W[gi];B[gg];W[hf];B[fi];W[hk];B[gk];W[hj];B[hl];W[ik];B[il];W[jk];B[jl];W[kk];B[nl];W[nm];B[ll];W[kl];B[mm];W[lm];B[mk];W[mn];B[ml];W[mo];B[pl];W[rk];B[rj];W[rm];B[pm];W[sl];B[qk];W[qm];B[gf];W[he];B[gc];W[ge];B[fe];W[df];B[ec];W[gb];B[hc];W[hb];B[ff];W[eh];B[ei];W[di];B[dh];W[eg];B[dg];W[ef];B[ce];W[fj];B[fh];W[gd];B[id];W[hd];B[ed];W[je];B[kd];W[kg];B[kb];W[kc];B[lc];W[ka];B[mb];W[jb];B[ma];W[pn];B[ol];W[mr];B[nr];W[ns];B[os];W[ms];B[pr];W[sp];B[sq];W[so];B[cr];W[rq];B[rr];W[sr];B[qr];W[cs];B[bs];W[ds];B[br];W[qf];B[re];W[rf];B[ie];W[if];B[ke];W[jf];B[lh];W[kh];B[qq];W[qe];B[rd];W[pf];B[pd];W[ri];B[sj];W[sq];B[sk];W[rl];B[si];W[sh];B[qi];W[rh];B[ph];W[pg];B[ej];W[ek];B[ee];W[fk];B[cp];W[dp];B[oi];W[nh];B[lg];W[la];B[mc];W[da];B[ca];W[ea];B[sf];W[sg];B[se];W[rs];B[qs];W[ss];B[np];W[fd];B[fg];W[];B[]C[balaura: obrigada
      psygo: Obg
      psygo: :O
      psygo: Estou chocado
      balaura: como asim?
      psygo: Desde que vc me causou os desastres no topo, eu estava crente que havia perdido
      psygo: Eu estou transmitindo
      psygo: Vc gostaria de entrar em uma ligacao e transmitir uma revisao ao vivo?
      balaura: sim, eu posso entrar
      cchagas: Eu acho que se pretas tivessem jogado G18 no movimento 136 não teria como pretas matar a não ser que fizesse uma troca igual ou pior. Porque se pretas conectassem em D17 brancas jogavam a G15 que jogaram prematuramente em 136
      cchagas: Brancas... se brancas tivessem jogado G18 ao invés de G15
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
  {
    blackRef: findPlayerRef("Vanderson da Silva Rodrigues"),
    whiteRef: findPlayerRef("Gabriel Garcia"),
    date: new Date(2022, 2, 6).getTime(),
    result: {
      whoWins: Color.White,
      difference: 2.5,
    },
    links: [
      {
        host: Hosts.ogs,
        id: "41807658",
      },
    ],
    sgf: `
      (;FF[4]CA[UTF-8]GM[1]DT[2022-03-06]PC[OGS: https://online-go.com/game/41807658]GN[DOGemP Liga C - fev 2022]PB[vandito]PW[PutzGrila]BR[17k]WR[13k]TM[3600]OT[15/600 canadian]RE[W+2.5]SZ[19]KM[6.5]RU[Japanese]C[PutzGrila: bom game aew
      vandito: Bom jogo!
      ]AP[Sabaki:0.52.1];B[pd];W[cq];B[dd];W[qp];B[op];W[oo];B[po];W[pp];B[no];W[on];B[pn];W[np];B[oq];W[pm];B[om];W[nn];B[qm];W[pl];B[qn];W[pq];B[mo];W[nq];B[or]C[PutzGrila: perdão
      ];W[nr]C[vandito: Acontece :)
      PutzGrila: cachorro ta pulando em cima aqui
      ];B[nm];W[mn];B[ln];W[mm];B[ml];W[qd];B[qe];W[pe];B[qc];W[od];B[rd];W[pc];B[qd];W[nc];B[pf];W[oe];B[of];W[ne];B[ql];W[oj];B[ok];W[pk];B[pj];W[nk];B[qk];W[ol];B[nl];W[qj];B[ok];W[pi];B[pk];W[ni];B[qi];W[og];B[ph];W[oi];B[pg];W[ng];B[mk];W[nj];B[mj];W[mi];B[li];W[lh];B[ki];W[kh];B[eq];W[ji];B[do];W[kj];B[gd];W[lm];B[lo];W[pr];B[km];W[ll];B[kl];W[lk];B[jk];W[lj];B[dj];W[hj];B[hk];W[gk];B[ik];W[gl];B[gj];W[gi];B[fj];W[ij];B[lq];W[im];B[kn];W[ho];B[gm];W[hm];B[fl];W[fm];B[gn];W[el];B[fk];W[hl];B[hn];W[in];B[io];W[fn];B[go];W[hp];B[jo];W[fp];B[gq];W[gp];B[eo];W[fo];B[hq];W[fq];B[ip];W[ep];B[em];W[dm];B[dl];W[en];B[ek];W[dq];B[em];W[dn];B[cl];W[co];B[iq];W[el];B[fi];W[gh];B[fh];W[ff];B[gg];W[hg];B[gf];W[ef];B[df];W[ge];B[fe];W[he];B[fg];W[fd];B[ee];W[gc];B[hf];W[ig];B[hd];W[ie];B[id];W[jd];B[je];W[if];B[jc];W[kd];B[ic];W[kf];B[kc];W[lc];B[ld];W[ke];B[mc];W[lb];B[mb];W[md];B[la];W[le];B[kb];W[ld];B[ma];W[ob];B[pb];W[oc];B[qb];W[na];B[mr];W[os];B[ms];W[ec];B[dc];W[ed];B[de];W[eb];B[db];W[gb];B[hb];W[ha];B[ea];W[ib];B[hh];W[hi];B[fr];W[er];B[gr];W[nb];B[ka];W[jb];B[bm];W[ro];B[ja];W[hc];B[fb];W[ia];B[da];W[ga];B[fa];W[fc];B[em];W[rn];B[rm];W[sm];B[pl];W[rq];B[sl];W[so];B[rj];W[ns];B[mq];W[mp];B[lp];W[jn];B[kq];W[fs];B[gs];W[es];B[js];W[oh];B[nf];W[mf];B[bo];W[cm];B[bn];W[bp];B[ap];W[aq];B[ao];W[br];B[cn];W[dp];B[bl];W[ci];B[ch];W[di];B[dh];W[cj];B[ej];W[bh];B[bg];W[ck];B[bi];W[el];B[bj];W[dg];B[eg];W[aj];B[bk];W[sk];B[rl];W[qh];B[qg];W[rh];B[rg];W[ri];B[qj];W[sg];B[si];W[pa];B[qa];W[oa];B[sn];W[kk];B[jl];W[sm];B[sj];W[rf];B[qf];W[];B[]C[PutzGrila: gg
      vandito: Gostei da partida
      vandito: Muito obrigado!
      PutzGrila: se defendeu bem n fimm :)
      PutzGrila: eu q agradeço
      vandito: Eu tentei treinar um pouco isso, da outra vez eu fiquei sem capacidade de raciocínio no fim
      psygo: 
      ])
    `,
    gameEventRef: findEventRef("DOGemP"),
  },
];
