import {
  Color,
  GameRecord,
  Hosts,
} from "../../../frontend/src/models/game_record";

import { findEventRef, findPlayerRef } from "../infra";

export const pglatc_2022: readonly GameRecord[] = [
  // ***************************************************************************
  // R1 | Brasil vs Peru
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Felipe Herman van Riemsdijk"),
    whiteRef: findPlayerRef("Aaron Alvarado"),
    date: new Date(2022, 0, 29).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.pglatc,
        id: "12273/original/Lqtestn_-_riemsdijk.sgf?1643647720",
      },
    ],
    sgf: `
      (;GM[1]EV[Internet Go Server game: Lqtestn vs riemsdijk]US[Brought to you by IGS PANDANET]CP[
        Copyright (c) PANDANET Inc. 2022
        Permission to reproduce this game is given, provided proper credit is given.
        No warrantee, implied or explicit, is understood.
        Use of this game is an understanding and agreement of this notice.
      ]GN[Lqtestn-riemsdijk(B) IGS]RE[W+Resign]PW[Lqtestn]WR[5d ]NW[33]PB[riemsdijk]BR[2d?]NB[30]PC[IGS:  igs.joyjoy.net 6969]DT[2022-01-31]SZ[19]TM[2700]KM[6.500000]LT[]RR[Normal]C[
       riemsdijk 2d?: 568 boa partida
      ]AP[Sabaki:0.52.1]CA[UTF-8];B[qc]BL[2689]C[
       Lqtestn 5d : hola. buen juego
       Lqtestn 5d : Hi!
      ];W[pp]WL[2685];B[cc]BL[2687];W[dp]WL[2679];B[qq]BL[2686];W[qp]WL[2671];B[pq]BL[2684];W[op]WL[2668]C[
       riemsdijk 2d?: 568 Hello ^^
      ];B[nr]BL[2681];W[pf]WL[2661];B[nd]BL[2679];W[df]WL[2637];B[fc]BL[2675];W[rq]WL[2631];B[rr]BL[2673];W[or]WL[2628];B[oq]BL[2670];W[nq]WL[2625];B[pr]BL[2669];W[mr]WL[2622];B[os]BL[2668];W[mq]WL[2619];B[cq]BL[2666];W[cp]WL[2612];B[dq]BL[2664];W[ep]WL[2609];B[eq]BL[2661];W[fq]WL[2605];B[fr]BL[2660];W[bq]WL[2601];B[br]BL[2659];W[gr]WL[2598];B[bp]BL[2648];W[bo]WL[2589];B[aq]BL[2638];W[gp]WL[2579];B[ch]BL[2628];W[dj]WL[2549];B[eh]BL[2625];W[ff]WL[2545];B[bj]BL[2621];W[gd]WL[2531];B[gc]BL[2603];W[hd]WL[2528];B[gh]BL[2596];W[lc]WL[2522];B[nc]BL[2561];W[ih]WL[2504];B[fd]BL[2553];W[hf]WL[2500];B[nf]BL[2467];W[pi]WL[2488];B[fj]BL[2453];W[hk]WL[2484];B[oj]BL[2390];W[oi]WL[2478];B[mj]BL[2387];W[mh]WL[2461];B[ml]BL[2339];W[pl]WL[2450];B[pj]BL[2286];W[qj]WL[2446];B[qk]BL[2282];W[pk]WL[2441];B[ni]BL[2267];W[qi]WL[2375];B[nh]BL[2264];W[me]WL[2372];B[ne]BL[2249];W[lm]WL[2364];B[fl]BL[2197];W[gm]WL[2359];B[pm]BL[2048];W[om]WL[2348];B[ql]BL[2040];W[ok]WL[2344];B[nj]BL[2038];W[on]WL[2330];B[qg]BL[2002];W[pg]WL[2309];B[mm]BL[1983];W[mn]WL[2306];B[ll]BL[1947];W[km]WL[2302];B[kl]BL[1946];W[jm]WL[2299];B[jl]BL[1945];W[im]WL[2291];B[hc]BL[1924];W[ic]WL[2284];B[ib]BL[1886];W[jc]WL[2280];B[kg]BL[1873];W[mg]WL[2248];B[oh]BL[1827];W[ph]WL[2244];B[mf]BL[1814];W[kh]WL[2231];B[of]BL[1768];W[lf]WL[2221];B[le]BL[1742];W[kf]WL[2217];B[ke]BL[1728];W[jf]WL[2194];B[md]BL[1719];W[qe]WL[2186];B[qd]BL[1714];W[re]WL[2177];B[sd]BL[1710];W[pd]WL[2166];B[pc]BL[1707];W[rd]WL[2155];B[rc]BL[1705];W[dm]WL[2146];B[ck]BL[1648];W[bg]WL[2133];B[cg]BL[1644];W[cf]WL[2129];B[bh]BL[1636];W[be]WL[2125];B[fe]BL[1630];W[fg]WL[2119];B[eg]BL[1595];W[ef]WL[2115];B[fh]BL[1593];W[bc]WL[2106];B[bb]BL[1590];W[cd]WL[2103];B[cb]BL[1582];W[bl]WL[2088];B[dk]BL[1578];W[jb]WL[2083];B[ge]BL[1576];W[he]WL[2078];B[hb]BL[1562];W[mb]WL[2072];B[nb]BL[1559];W[na]WL[2069];B[nk]BL[1525];W[ol]WL[2065];B[gf]BL[1523];W[gg]WL[2062];B[hg]BL[1520];W[hh]WL[2059];B[oa]BL[1465];W[ma]WL[2054];B[mc]BL[1464];W[kb]WL[2050];B[se]BL[1404];W[sf]WL[2045];B[sc]BL[1403];W[rg]WL[2042];B[rp]BL[1384];W[ro]WL[2039];B[sq]BL[1383];W[qn]WL[2035];B[ms]BL[1376];W[lr]WL[2030];B[ls]BL[1375];W[ks]WL[2027];B[ns]BL[1375];W[er]WL[1986];B[dr]BL[1297];W[ob]WL[1982];B[pb]BL[1289];W[pa]WL[1979];B[qa]BL[1288];W[fs]WL[1956];B[fm]BL[1279];W[fn]WL[1953];B[gl]BL[1275];W[hm]WL[1949];B[en]BL[1222];W[em]WL[1940];B[fo]BL[1220];W[gn]WL[1937];B[bn]BL[1218];W[cn]WL[1933];B[ao]BL[1216];W[co]WL[1929];B[ag]BL[1186];W[oa]WL[1919];B[oc]BL[1181];W[cm]WL[1900];B[bf]BL[1166];W[ab]WL[1892];B[ld]BL[1160];W[je]WL[1886];B[dd]BL[1127];W[ae]WL[1875];B[af]BL[1117];W[kj]WL[1850];B[de]BL[1074];W[ce]WL[1846]C[
       riemsdijk 2d?: 568 Thank you for the game
      ];OS[ame2c][Azcopaec][Biro][CactiJuice][CRaGNABV][hissao][iiglesis][Kensai][moradito][NeZioT][psygo][TheNormann])
    `,
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 1",
  },
  {
    blackRef: findPlayerRef("Hélcio Alexandre Pacheco"),
    whiteRef: findPlayerRef("Daniel Makiya"),
    date: new Date(2022, 0, 29).getTime(),
    result: {
      whoWins: Color.Black,
    },
    links: [
      {
        host: Hosts.pglatc,
        id: "12274/original/ozeromirei_-_HelcioAlex.sgf?1643647720",
      },
    ],
    sgf: `
      (;GM[1]EV[Internet Go Server game: ozeromirei vs HelcioAlex]US[Brought to you by IGS PANDANET]CP[
        Copyright (c) PANDANET Inc. 2022
        Permission to reproduce this game is given, provided proper credit is given.
        No warrantee, implied or explicit, is understood.
        Use of this game is an understanding and agreement of this notice.
      ]GN[ozeromirei-HelcioAlex(B) IGS]RE[B+11.5]PW[ozeromirei]WR[3k ]NW[26]PB[HelcioAlex]BR[2d?]NB[30]PC[IGS:  igs.joyjoy.net 6969]DT[2022-01-31]SZ[19]TM[2700]KM[6.500000]LT[]RR[Normal]C[
       HelcioAlex 2d?: 565 Lets have a nive game
      ]AP[Sabaki:0.52.1]CA[UTF-8];B[pd]BL[2688]C[
       ozeromirei 3k : 565 buen jueg
      ];W[dp]WL[2687];B[pq]BL[2678];W[dc]WL[2667];B[ce]BL[2674];W[ed]WL[2645];B[ch]BL[2666];W[qo]WL[2635];B[qp]BL[2598];W[po]WL[2613];B[nq]BL[2595];W[qk]WL[2609];B[nc]BL[2566];W[lq]WL[2572];B[cq]BL[2412];W[dq]WL[2550];B[cp]BL[2408];W[co]WL[2548];B[bo]BL[2407];W[cn]WL[2546];B[bn]BL[2406];W[cm]WL[2545];B[bm]BL[2405];W[cl]WL[2542];B[ip]BL[2393];W[mo]WL[2528];B[fp]BL[2386];W[ro]WL[2506];B[rp]BL[2380];W[or]WL[2503];B[oq]BL[2334];W[nr]WL[2500];B[pr]BL[2327];W[mq]WL[2498];B[eo]BL[2324];W[do]WL[2494];B[em]BL[2322];W[cj]WL[2483];B[bc]BL[2314];W[hc]WL[2458];B[qi]BL[2301];W[qd]WL[2417];B[qc]BL[2262];W[qe]WL[2414];B[rc]BL[2261];W[pe]WL[2404];B[od]BL[2250];W[qg]WL[2395];B[ph]BL[2245];W[nf]WL[2391];B[nh]BL[2242];W[md]WL[2382];B[lb]BL[2235];W[lf]WL[2375];B[ok]BL[2230];W[pl]WL[2323];B[ml]BL[2219];W[pj]WL[2320];B[mj]BL[2203];W[pi]WL[2316];B[qh]BL[2199];W[ni]WL[2315];B[pg]BL[2196];W[mh]WL[2301];B[qf]BL[2182];W[dr]WL[2294];B[cr]BL[2180];W[gq]WL[2292];B[gp]BL[2173];W[hq]WL[2290];B[hp]BL[2152];W[fn]WL[2284];B[en]BL[2149];W[jn]WL[2279];B[iq]BL[2147];W[cs]WL[2273];B[bs]BL[2145];W[ds]WL[2272];B[bq]BL[2144];W[df]WL[2255];B[cf]BL[2141];W[dh]WL[2254];B[dg]BL[2140];W[eg]WL[2253];B[cg]BL[2140];W[fk]WL[2248];B[hm]BL[2137];W[il]WL[2244];B[mi]BL[2106];W[nj]WL[2232];B[lh]BL[2099];W[mg]WL[2230];B[kl]BL[2098];W[hn]WL[2218];B[im]BL[2096];W[jm]WL[2217];B[in]BL[2095];W[jl]WL[2208];B[ng]BL[2081];W[gm]WL[2201];B[hl]BL[2078];W[gl]WL[2200];B[hk]BL[2075];W[jo]WL[2197];B[io]BL[2073];W[jj]WL[2194];B[ek]BL[2064];W[li]WL[2190];B[fj]BL[2060];W[pf]WL[2169];B[rf]BL[2057];W[rj]WL[2162];B[ri]BL[2053];W[rg]WL[2150];B[sg]BL[2048];W[re]WL[2147];B[rh]BL[2048];W[si]WL[2144];B[qj]BL[2046];W[rk]WL[2142];B[pk]BL[2044];W[nk]WL[2141];B[ol]BL[2043];W[mk]WL[2137];B[ql]BL[2007];W[rl]WL[2135];B[pm]BL[2006];W[rm]WL[2133];B[oo]BL[2005];W[on]WL[2130];B[no]BL[2003];W[nn]WL[2127];B[mn]BL[1998];W[pn]WL[2122];B[lo]BL[1960];W[mp]WL[2119];B[di]BL[1874];W[ir]WL[2114];B[jr]BL[1872];W[hr]WL[2113];B[kq]BL[1871];W[ln]WL[2106];B[mm]BL[1824];W[ko]WL[2091];B[nl]BL[1797];W[se]WL[2086];B[oi]BL[1794];W[rr]WL[2076];B[rq]BL[1791];W[kc]WL[2058];B[kk]BL[1769];W[lj]WL[2051];B[oj]BL[1768];W[ii]WL[2048];B[hj]BL[1764];W[jk]WL[2016];B[qm]BL[1760];W[so]WL[1972];B[qn]BL[1747];W[rn]WL[1964];B[sj]BL[1739];W[qr]WL[1960];B[os]BL[1737];W[sq]WL[1951];B[sp]BL[1733];W[op]WL[1949];B[sr]BL[1707];W[np]WL[1932];B[mr]BL[1706];W[gh]WL[1923];B[cb]BL[1702];W[bi]WL[1911];B[dk]BL[1696];W[bl]WL[1908];B[kb]BL[1670];W[jb]WL[1876];B[fa]BL[1652];W[lc]WL[1864];B[mb]BL[1645];W[fb]WL[1856];B[ga]BL[1615];W[db]WL[1848];B[da]BL[1614];W[lr]WL[1839];B[ns]BL[1611];W[sc]WL[1809];B[sb]BL[1607];W[sd]WL[1805];B[rb]BL[1604];W[pp]WL[1791];B[qq]BL[1601];W[cc]WL[1768];B[bb]BL[1599];W[eb]WL[1742];B[ne]BL[1596];W[oe]WL[1740];B[ea]BL[1583];W[nd]WL[1734];B[ef]BL[1581];W[ff]WL[1732];B[ee]BL[1577];W[fe]WL[1728];B[de]BL[1576];W[oc]WL[1717];B[pc]BL[1574];W[ob]WL[1716];B[nb]BL[1572];W[eh]WL[1678];B[ib]BL[1551];W[jc]WL[1672];B[ja]BL[1549];W[hb]WL[1670];B[ha]BL[1547];W[ic]WL[1669];B[ia]BL[1546];W[af]WL[1657];B[ae]BL[1536];W[ag]WL[1655];B[bf]BL[1528];W[bh]WL[1651];B[bg]BL[1526];W[ah]WL[1650];B[ci]BL[1523];W[bj]WL[1645];B[hi]BL[1522];W[hh]WL[1641];B[ck]BL[1517];W[bk]WL[1637];B[fq]BL[1514];W[fr]WL[1635];B[gb]BL[1513];W[gc]WL[1624];B[kj]BL[1503];W[ki]WL[1622];B[km]BL[1502];W[cd]WL[1602];B[bd]BL[1501];W[dl]WL[1598];B[el]BL[1498];W[gi]WL[1596];B[gj]BL[1496];W[is]WL[1560];B[js]BL[1490];W[kr]WL[1552];B[kp]BL[1487];W[lp]WL[1548];B[eq]BL[1486];W[er]WL[1512];B[dd]BL[1481];W[fc]WL[1498];B[fi]BL[1479];W[am]WL[1488];B[an]BL[1473];W[al]WL[1487];B[fh]BL[1471];W[fg]WL[1486];B[og]BL[1456];W[om]WL[1461];B[pl]BL[1453];W[sk]WL[1451];B[ms]BL[1418];W[me]WL[1422];B[kn]BL[1404];W[lm]WL[1416];B[ll]BL[1403];W[lo]WL[1415];B[of]BL[1401];W[sj]WL[1412];B[sh]BL[1394];W[ne]WL[1409];B[jq]BL[1387];W[ei]WL[1406];B[dj]BL[1383];W[ij]WL[1401];B[ej]BL[1380];W[lk]WL[1398];B[ep]BL[1377];W[mc]WL[1396];B[ls]BL[1360];W[ks]WL[1390];B[jp]BL[1359];W[nm]WL[1386];B[sf]BL[1357];W[ik]WL[1384];B[dn]BL[1350];W[rd]WL[1382];B[dm]BL[1343];W[tt]WL[1371];B[tt]BL[1338];W[tt]WL[1371]C[
       ozeromirei 3k : ozeromirei dead @ M12
       HelcioAlex 2d?: HelcioAlex dead @ G7
       HelcioAlex 2d?: HelcioAlex dead @ F6
       HelcioAlex 2d?: HelcioAlex dead @ H6
       HelcioAlex 2d?: HelcioAlex dead @ F9
       ozeromirei 3k : ozeromirei dead @ P17
       HelcioAlex 2d?: HelcioAlex dead @ R2
       ozeromirei done
       ozeromirei done
      ];TW[ak][aj][ai][es][ec][fs][fd][gs][gr][gg][gf][ge][gd][hs][hg][hf][he][hd][ih][ig][if][ie][id][ji][jh][jg][jf][je][jd][kh][kg][kf][ke][kd][lh][lg][le][ld][mj][mi][mf][no][oo][sn][sm][sl]TB[as][ar][aq][ap][ao][ad][ac][ab][aa][br][bp][be][ba][ca][df][fo][fn][fm][fl][fk][go][gn][gm][gl][gk][ho][hn][ka][la][ma][nr][na][or][oh][oc][ob][oa][ps][pj][pi][pb][pa][qs][qr][qg][qb][qa][rs][rr][rg][ra][ss][sq][sa]OS[Azcopaec][Biro][CactiJuice][hissao][iiglesis][Kensai][Lqtestn][psygo][riemsdijk][Toto2])
    `,
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 1",
  },
  {
    blackRef: findPlayerRef("Ricardo Miyashiro"),
    whiteRef: findPlayerRef("Laércio Pereira"),
    date: new Date(2022, 0, 29).getTime(),
    result: {
      whoWins: Color.White,
    },
    links: [
      {
        host: Hosts.pglatc,
        id: "12275/original/laercioskt_-_Harumasa.sgf?1643647720",
      },
    ],
    sgf: `
      (;GM[1]EV[Internet Go Server game: laercioskt vs Harumasa]US[Brought to you by IGS PANDANET]CP[
        Copyright (c) PANDANET Inc. 2022
        Permission to reproduce this game is given, provided proper credit is given.
        No warrantee, implied or explicit, is understood.
        Use of this game is an understanding and agreement of this notice.
      ]GN[laercioskt-Harumasa(B) IGS]RE[W+33.5]PW[laercioskt]WR[1k+]NW[28]PB[Harumasa]BR[7k ]NB[22]PC[IGS:  igs.joyjoy.net 6969]DT[2022-01-31]SZ[19]TM[2700]KM[6.500000]LT[]RR[Normal]AP[Sabaki:0.52.1]CA[UTF-8];B[pd]BL[2693]C[
       laercioskt 1k+: 170 Ola, tenha um bom jogo!
       Harumasa 7k : 170 hi gg
      ];W[dp]WL[2676];B[pq]BL[2691];W[dd]WL[2675];B[qk]BL[2684];W[nc]WL[2667];B[qf]BL[2682];W[pc]WL[2634];B[qc]BL[2679];W[qb]WL[2633];B[rc]BL[2661];W[ob]WL[2555];B[fq]BL[2656];W[cn]WL[2538];B[dr]BL[2653];W[po]WL[2532];B[qo]BL[2650];W[qn]WL[2526];B[qp]BL[2649];W[pn]WL[2523];B[nq]BL[2648];W[mo]WL[2498];B[fc]BL[2643];W[hc]WL[2492];B[fe]BL[2642];W[cf]WL[2489];B[id]BL[2641];W[hd]WL[2486];B[he]BL[2640];W[ic]WL[2485];B[jd]BL[2639];W[jc]WL[2483];B[kd]BL[2638];W[lc]WL[2480];B[me]BL[2636];W[od]WL[2459];B[of]BL[2633];W[pe]WL[2455];B[qe]BL[2628];W[pf]WL[2453];B[pg]BL[2627];W[qd]WL[2444];B[rd]BL[2627];W[ge]WL[2386];B[gf]BL[2623];W[gd]WL[2385];B[cc]BL[2619];W[dc]WL[2381];B[db]BL[2618];W[eb]WL[2379];B[be]BL[2610];W[bf]WL[2377];B[bb]BL[2606];W[da]WL[2373];B[ca]BL[2605];W[cb]WL[2372];B[ce]BL[2599];W[de]WL[2370];B[db]BL[2598];W[qg]WL[2281];B[ea]BL[2586];W[rg]WL[2279];B[ph]BL[2570];W[qi]WL[2274];B[pi]BL[2567];W[qj]WL[2273];B[pj]BL[2566];W[rk]WL[2272];B[rl]BL[2558];W[rj]WL[2239];B[pl]BL[2555];W[rf]WL[2222];B[cl]BL[2549];W[cq]WL[2208];B[ci]BL[2545];W[ef]WL[2195];B[ff]BL[2543];W[fd]WL[2194];B[ec]BL[2541];W[ed]WL[2191];B[fb]BL[2540];W[hq]WL[2147];B[fo]BL[2537];W[ho]WL[2130];B[fm]BL[2535];W[en]WL[2125];B[fn]BL[2534];W[dl]WL[2098];B[bm]BL[2527];W[ck]WL[2088];B[bk]BL[2525];W[cm]WL[2087];B[bl]BL[2524];W[dk]WL[2082];B[bn]BL[2521];W[bo]WL[2080];B[cj]BL[2515];W[em]WL[2054];B[fi]BL[2504];W[ei]WL[2025];B[eh]BL[2499];W[dh]WL[2004];B[ej]BL[2495];W[di]WL[2003];B[dj]BL[2494];W[fj]WL[2000];B[fk]BL[2461];W[gj]WL[1998];B[dg]BL[2460];W[ch]WL[1996];B[ek]BL[2442];W[mm]WL[1754];B[mk]BL[2430];W[lq]WL[1744];B[eg]BL[2416];W[df]WL[1715];B[gh]BL[2395];W[oe]WL[1513];B[nf]BL[2386];W[ld]WL[1500];B[le]BL[2383];W[kl]WL[1409];B[kj]BL[2379];W[jj]WL[1386];B[jk]BL[2376];W[kk]WL[1385];B[il]BL[2372];W[lj]WL[1383];B[ki]BL[2371];W[mj]WL[1371];B[nl]BL[2364];W[ml]WL[1364];B[nk]BL[2359];W[lk]WL[1363];B[el]BL[2356];W[dm]WL[1358];B[bp]BL[2354];W[ao]WL[1350];B[bq]BL[2353];W[cp]WL[1037];B[cr]BL[2344];W[br]WL[1035];B[ar]BL[2340];W[bs]WL[1033];B[cs]BL[2338];W[er]WL[1032];B[eq]BL[2322];W[aq]WL[863];B[as]BL[2305];W[br]WL[858];B[bs]BL[2294];W[ap]WL[856];B[dq]BL[2290];W[br]WL[851];B[bq]BL[2284];W[do]WL[849];B[jq]BL[2272];W[ip]WL[781];B[lr]BL[2267];W[kr]WL[772];B[kq]BL[2249];W[mr]WL[761];B[lp]BL[2248];W[mq]WL[759];B[mp]BL[2247];W[np]WL[710];B[nr]BL[2243];W[ls]WL[708];B[ko]BL[2241];W[lo]WL[702];B[kp]BL[2238];W[jr]WL[687];B[jn]BL[2233];W[jl]WL[673];B[im]BL[2219];W[ik]WL[663];B[ln]BL[2211];W[mn]WL[657];B[lm]BL[2208];W[ll]WL[631];B[in]BL[2195];W[hl]WL[624];B[hn]BL[2190];W[gi]WL[588];B[fh]BL[2186];W[ji]WL[566];B[ih]BL[2171];W[kh]WL[563];B[li]BL[2170];W[mh]WL[562];B[no]BL[2153];W[op]WL[547];B[jh]BL[2120];W[kg]WL[541];B[kc]BL[2096];W[kb]WL[540];B[jb]BL[2095];W[lb]WL[530];B[if]BL[2093];W[rn]WL[478];B[ro]BL[2089];W[ns]WL[460];B[or]BL[2087];W[gr]WL[454];B[fr]BL[2085];W[bh]WL[319];B[gl]BL[2081];W[bi]WL[295];B[bj]BL[2076];W[gb]WL[249];B[hj]BL[2074];W[hk]WL[136];B[hi]BL[2065];W[gk]WL[133];B[lg]BL[2060];W[lh]WL[132];B[ni]BL[2059];W[mi]WL[130];B[hm]BL[2047];W[om]WL[77];B[nm]BL[2046];W[nn]WL[74];B[gs]BL[2037];W[hs]WL[69];B[fs]BL[2025];W[iq]WL[61];B[pm]BL[2020];W[kf]WL[41];B[ke]BL[2012];W[ae]WL[36];B[bd]BL[2010];W[km]WL[28];B[kn]BL[2008];W[pp]WL[25];B[rq]BL[2006];W[ga]WL[11];B[fa]BL[2004];W[nj]WL[14];B[oj]BL[2002];W[qh]WL[6];B[os]BL[1999];W[ms]WL[11];B[gq]BL[1992];W[hr]WL[28];B[gc]BL[1988];W[hb]WL[28];B[ad]BL[1986];W[af]WL[23];B[nh]BL[1985];W[mg]WL[28];B[lf]BL[1984];W[sl]WL[21];B[sm]BL[1981];W[sk]WL[28];B[rm]BL[1980];W[sn]WL[25];B[qm]BL[1978];W[so]WL[27];B[sp]BL[1977];W[ng]WL[25];B[og]BL[1976];W[gp]WL[19];B[eo]BL[1970];W[jf]WL[18];B[jg]BL[1966];W[je]WL[28];B[ie]BL[1965];W[ii]WL[4];B[nd]BL[1961];W[md]WL[23];B[ne]BL[1960];W[go]WL[7];B[gn]BL[1958];W[oq]WL[19];B[qr]BL[1956];W[aj]WL[6];B[ak]BL[1954];W[ai]WL[27];B[ol]BL[1953];W[on]WL[28];B[io]BL[1950];W[an]WL[26];B[fp]BL[1946];W[hp]WL[24];B[am]BL[1933];W[ij]WL[23];B[hh]BL[1930];W[cg]WL[22];B[jp]BL[1927];W[bp]WL[17];B[br]BL[1925];W[ep]WL[19];B[tt]BL[1923];W[tt]WL[28];B[tt]BL[1923]C[
       Harumasa 7k : Harumasa dead @ K18
       Harumasa 7k : Harumasa dead @ R17
       Harumasa 7k : Harumasa dead @ R15
       Harumasa 7k : Harumasa dead @ O5
       Harumasa 7k : Harumasa dead @ E2
       Harumasa done
      ];TW[ah][ag][bg][co][dn][ha][is][ir][ib][ia][js][jk][jb][ja][ks][kj][ki][ka][lr][li][la][mc][mb][ma][no][nb][na][oo][oc][oa][pd][pb][pa][qf][qe][qc][qa][ri][rh][re][rd][rc][rb][ra][sj][si][sh][sg][sf][se][sd][sc][sb][sa]TB[al][ac][ab][aa][bc][ba][cb][ds][da][es][er][eb][fl][fg][gm][gg][hg][hf][ig][jo][ok][oi][oh][ps][pr][pk][qs][qq][ql][rs][rr][rp][ss][sr][sq]OS[Azcopaec][Biro][CactiJuice][HelcioAlex][hissao][iiglesis][Lqtestn][Noriyuki73][Nuredin][psygo][riemsdijk])
    `,
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 1",
  },
  // ***************************************************************************
  // R2 | Brasil vs Chile
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Amir Fragman"),
    whiteRef: findPlayerRef("Avelio Sepúlveda"),
    date: new Date(2022, 1, 19).getTime(),
    result: {
      whoWins: Color.Black,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 2",
  },
  {
    blackRef: findPlayerRef("Francisco González"),
    whiteRef: findPlayerRef("Alexandre Amaro"),
    date: new Date(2022, 1, 19).getTime(),
    result: {
      whoWins: Color.White,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 2",
  },
  {
    blackRef: findPlayerRef("Hélcio Alexandre Pacheco"),
    whiteRef: findPlayerRef("Ignacio Iglesis"),
    date: new Date(2022, 1, 19).getTime(),
    result: {
      whoWins: Color.Black,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 2",
  },
  // ***************************************************************************
  // R3 | Brasil vs Venezuela
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Julio Melchert"),
    whiteRef: findPlayerRef("Hélcio Alexandre Pacheco"),
    date: new Date(2022, 3, 12).getTime(),
    result: {
      whoWins: Color.White,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 3",
  },
  {
    blackRef: findPlayerRef("Thiago Augusto da Silva"),
    whiteRef: findPlayerRef("Javier Gonzalez"),
    date: new Date(2022, 3, 12).getTime(),
    result: {
      whoWins: Color.Black,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 3",
  },
  {
    blackRef: findPlayerRef("Diego Guerrero"),
    whiteRef: findPlayerRef("Gabriel Marcondes de Castilho"),
    date: new Date(2022, 3, 12).getTime(),
    result: {
      whoWins: Color.White,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 3",
  },
  // ***************************************************************************
  // R4 | Brasil vs Costa Rica
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Alexandre Amaro"),
    whiteRef: findPlayerRef("Mario Aguero"),
    date: new Date(2022, 3, 3).getTime(),
    result: {
      whoWins: Color.Black,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 4",
  },
  {
    blackRef: findPlayerRef("Adrian Villalta-Cerdas"),
    whiteRef: findPlayerRef("Hélcio Alexandre Pacheco"),
    date: new Date(2022, 3, 3).getTime(),
    result: {
      whoWins: Color.White,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 4",
  },
  {
    blackRef: findPlayerRef("Gabriel Marcondes de Castilho"),
    whiteRef: findPlayerRef("Manuel Rodríguez"),
    date: new Date(2022, 3, 3).getTime(),
    result: {
      whoWins: Color.Black,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 4",
  },
  // ***************************************************************************
  // R5 | Brasil vs México
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Hélcio Alexandre Pacheco"),
    whiteRef: findPlayerRef("Olivier Mendieta"),
    date: new Date(2022, 3, 23).getTime(),
    result: {
      whoWins: Color.Black,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 5",
  },
  {
    blackRef: findPlayerRef("Carlos Daniel Santiago López"),
    whiteRef: findPlayerRef("Laércio Pereira"),
    date: new Date(2022, 3, 23).getTime(),
    result: {
      whoWins: Color.White,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 5",
  },
  {
    blackRef: findPlayerRef("Gabriel Marcondes de Castilho"),
    whiteRef: findPlayerRef("Emiliano Alvarado Vargas"),
    date: new Date(2022, 3, 23).getTime(),
    result: {
      whoWins: Color.Black,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 5",
  },
  // ***************************************************************************
  // R6 | Brasil vs Colômbia
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Juan David Ramírez Jiménez"),
    whiteRef: findPlayerRef("Amir Fragman"),
    date: new Date(2022, 4, 14).getTime(),
    result: {
      whoWins: Color.White,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 6",
  },
  {
    blackRef: findPlayerRef("Alexandre Amaro"),
    whiteRef: findPlayerRef("Juan Burgos"),
    date: new Date(2022, 4, 14).getTime(),
    result: {
      whoWins: Color.Black,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 6",
  },
  {
    blackRef: findPlayerRef("Juan Samper"),
    whiteRef: findPlayerRef("Hélcio Alexandre Pacheco"),
    date: new Date(2022, 4, 14).getTime(),
    result: {
      whoWins: Color.Black,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 6",
  },
  // ***************************************************************************
  // R7 | Brasil vs Argentina
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Alexandre Amaro"),
    whiteRef: findPlayerRef("Fernando Aguilar"),
    date: new Date(2022, 5, 5).getTime(),
    result: {
      whoWins: Color.White,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 7",
  },
  {
    blackRef: findPlayerRef("Santiago Andres Tabares"),
    whiteRef: findPlayerRef("Felipe Herman van Riemsdijk"),
    date: new Date(2022, 5, 5).getTime(),
    result: {
      whoWins: Color.Black,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 7",
  },
  {
    blackRef: findPlayerRef("Hélcio Alexandre Pacheco"),
    whiteRef: findPlayerRef("David Pollitzer"),
    date: new Date(2022, 5, 5).getTime(),
    result: {
      whoWins: Color.White,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 7",
  },
  // ***************************************************************************
  // R8 | Brasil vs Cuba
  // ***************************************************************************
  {
    blackRef: findPlayerRef("Amir Fragman"),
    whiteRef: findPlayerRef("Yordan Cruz"),
    date: new Date(2022, 5, 25).getTime(),
    result: {
      whoWins: Color.Black,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 8",
  },
  {
    blackRef: findPlayerRef("Rafael Alejandro Torres Puebla"),
    whiteRef: findPlayerRef("Alexandre Amaro"),
    date: new Date(2022, 5, 25).getTime(),
    result: {
      whoWins: Color.White,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 8",
  },
  {
    blackRef: findPlayerRef("Hélcio Alexandre Pacheco"),
    whiteRef: findPlayerRef("Roilan de la Torre"),
    date: new Date(2022, 5, 25).getTime(),
    result: {
      whoWins: Color.Black,
    },
    gameEventRef: findEventRef(
      "Pandanet Latin American Team Championship 2022"
    ),
    additionalInfo: "Rodada 8",
  },
];
