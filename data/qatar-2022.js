/* data/qatar-2022.js — Paren la Mano en Qatar 2022
   Datos del evento. El motor (assets/engine.js) los renderiza vía renderEvent(). */
window.PLM_EVENT = (function () {
  // atajos de categoría usados en DATA
  const V = "vorterix", L = "luquitas", A = "afa", F = "fifa", B = "beder";

  // categorías (orden = orden en la leyenda de filtros)
  const categories = [
    { id:"vorterix", chip:"Vorterix",      legend:"Programa Vorterix", color:"var(--accent)",    fg:"var(--ink)",      swatch:"var(--accent)",    sub:3 },
    { id:"luquitas", chip:"Vlog Luquitas", legend:"Vlog Luquitas",     color:"var(--secondary)", fg:"#08243C",         swatch:"var(--secondary)", sub:2 },
    { id:"beder",    chip:"Vlog Germán",   legend:"Vlog Germán",       color:"#3FA67A",          fg:"#06251A",         swatch:"#3FA67A",          sub:2 },
    { id:"afa",      chip:"AFA Estudio",   legend:"AFA Estudio",       color:"#fff",             fg:"var(--primary)",  swatch:"#fff",             sub:4 },
    { id:"fifa",     chip:"Resumen FIFA",  legend:"Resumen FIFA",      color:"#141414",          fg:"var(--accent)",   swatch:"#141414", swatchBorder:"1px solid var(--accent)", border:"1px solid var(--accent)", official:true, sub:1 }
  ];

  const meta = {
    eyebrow: "Recopilación de fans · Cobertura mundialista",
    titleA: "Paren la Mano",
    titleB: "en Qatar 2022",
    sub: "Del armado de la valija al ¡Muchaaachos! — todos los programas desde Doha y los vlogs de la bandurria, ordenados partido a partido.",
    stats: ["16 NOV → 19 DIC 2022", "19 programas", "38 vlogs", "4 visitas a AFA Estudio", "🏆 Campeones"],
    footer: "Hecho con cariño mundialista. Programas con la fecha en el título (lun–vie); las fechas indican el día de <b>filmación</b> (no de publicación); las marcadas con ≈ son estimadas a partir del contenido y la secuencia de los vlogs. <b>Vamos Argentina.</b>"
  };

  const theme = {
    tokens: {
      "--primary":"#8A1538", "--primary-deep":"#4D0B1F", "--ink":"#2B0613",
      "--accent":"#E8C36A", "--accent-soft":"#D9A441",
      "--secondary":"#75AADB", "--secondary-deep":"#3E7CB8",
      "--paper":"#FFF8EC", "--line":"rgba(232,195,106,.45)"
    },
    default: "hibrido",
    options: [ { id:"album", label:"Álbum" }, { id:"hibrido", label:"Qatar + Álbum" } ]
  };

  const home = "Argentina";
  const homeFlag = "🇦🇷";
  const year = 2022;
  const roundLabels = ["F1","F2","F3","8VOS","4TOS","SEMI","FINAL"];

  // ===================== DATOS =====================
const DATA=[
 {head:"La previa",date:"Mediados de noviembre 2022",videos:[
   ["9ydTJdWpTeM","Armando la valija para Qatar — vlog #00",L,"≈ 15 NOV","La previa desde casa: qué meter en la valija y los nervios antes de viajar a Doha."],
   ["I6d9Df2EE2M","Rumbo a Qatar | Roma, primera escala — vlog #01",L,"≈ 16 NOV","Arranca el viaje con escala en Roma rumbo a Qatar, primeras postales del grupo."],
   ["yx9GGYdoM_g","Estadios con Maslatón & paseo de PLM — vlog #02",L,"≈ 18 NOV","Recorrida por los estadios junto a Maslatón y paseo de la banda por la ciudad."],
   ["X3ZM1WQI874","La excursión nocturna de Alfre y Germán por Doha — vlog #03",L,"≈ 19 NOV","Alfre y Germán salen a explorar Doha de noche en una excursión improvisada."],
 ]},
 {head:"Fecha 1 · Fase de grupos",date:"Martes 22/11/2022",match:{teams:"🇦🇷 Argentina — Arabia Saudita 🇸🇦",score:"1 · 2",note:"Lusail Stadium. El golpe inesperado del debut."},videos:[
   ["spLV1gF0fkI","Resumen oficial: Argentina 1-2 Arabia Saudita | FIFA",F,"MAR 22 NOV","Resumen del debut: la sorpresa saudí frente a una Argentina que arrancó con el pie izquierdo."],
   ["iDaqtUS5dv0","#ParenLaMano Mundial — 22/11 (post derrota)",V,"MAR 22 NOV","Primer programa tras la derrota con Arabia: bronca, análisis y mucho aguante en el estudio."],
   ["nKkX9r_lANE","#ParenLaMano Mundial — 23/11",V,"MIÉ 23 NOV","Día de resaca futbolera: se procesa el golpe y se palpita la reacción ante México."],
   ["7scSAXS1xZA","#ParenLaMano Mundial — 24/11",V,"JUE 24 NOV","Repaso del día mundialista con humor, invitados y el clima de incertidumbre del grupo."],
   ["bsxyhXZmCqY","#ParenLaMano Mundial — 25/11",V,"VIE 25 NOV","Última jornada antes del partido clave con México: análisis, apuestas y nervios."],
 ]},
 {head:"Fecha 2 · Fase de grupos",date:"Sábado 26/11/2022",match:{teams:"🇦🇷 Argentina — México 🇲🇽",score:"2 · 0",note:"Lusail. Goles de Messi y Enzo. Fin de semana: sin programa, pero con vlog."},videos:[
   ["Rb6P2sdlJTE","Resumen oficial: Argentina 2-0 México | FIFA",F,"SÁB 26 NOV","Resumen del 2-0 a México: el zurdazo de Messi y el golazo de Enzo que devolvieron el aire."],
   ["U_H8MsNKeRo","¡Toman, toman! Argentina vs México — vlog #04",L,"SÁB 26 NOV","El festejo del triunfo ante México con el grito de toman toman como bandera del día."],
   ["3E0nkYOa0UI","AFA Estudio Mundial | Luquitas, Beder y Rober Galati",A,"≈ 27 NOV","La banda visita el set de AFA Estudio: charla distendida con Luquitas, Beder y Galati."],
   ["F0hYSn82oHI","#ParenLaMano Mundial — 28/11",V,"LUN 28 NOV","Vuelta al estudio tras el desahogo contra México, ya pensando en Polonia."],
   ["sZxwaIEh2AU","#ParenLaMano Mundial — 29/11",V,"MAR 29 NOV","Programa de la previa a Polonia: cuentas del grupo y qué necesita Argentina para pasar."],
   ["anvVCkBLXVQ","Conocí a Ciro y Beder se perdió en el desierto — vlog #05",L,"≈ 27 NOV","Luquitas conoce a Ciro mientras Beder protagoniza una odisea perdido en el desierto."],
   ["WsirK_ee6mo","Vimos al Bicho y Rob-Rob de compras — vlog #06",L,"≈ 28 NOV","Cruce con el Bicho Riquelme y una salida de compras del Rob-Rob por Doha."],
   ["HmpEZjITupA","Regateando la planchita para el Rob-Rob — vlog #07",L,"≈ 29 NOV","Capítulo de regateo: la negociación épica por una planchita para el Rob-Rob."],
 ]},
 {head:"Fecha 3 · Pase a octavos",date:"Miércoles 30/11/2022",match:{teams:"🇦🇷 Argentina — Polonia 🇵🇱",score:"2 · 0",note:"Estadio 974. Mac Allister y Julián. Primeros del Grupo C."},videos:[
   ["NpXbckymq5E","Resumen oficial: Polonia 0-2 Argentina | FIFA",F,"MIÉ 30 NOV","Resumen del 2-0 a Polonia: Mac Allister y Julián sellan el primer puesto del grupo."],
   ["DFROREs8om0","#ParenLaMano Mundial — 30/11 (clasificación)",V,"MIÉ 30 NOV","Programa de la clasificación a octavos: alivio total y arranca la ilusión en serio."],
   ["o6v9bPO7Fn8","Germán bailó descontrolado el pase a octavos — vlog #08",L,"MIÉ 30 NOV","El baile descontrolado de Germán para festejar el pase de ronda ante Polonia."],
   ["aJYkLq9ton4","#ParenLaMano Mundial — 01/12",V,"JUE 01 DIC","Día sin partido de Argentina: se sigue el resto del Mundial y se palpita Australia."],
   ["i7LlDbppUeU","#ParenLaMano Mundial — 02/12",V,"VIE 02 DIC","Repaso de los cruces de octavos y análisis del rival que viene en la fase eliminatoria."],
   ["vSumHdOyBp0","El peor momento de Rober en Qatar — vlog #09",L,"≈ 01 DIC","El día más bajo de Rober en Qatar, entre el cansancio y los líos del viaje."],
   ["pt2u73SeTt0","Ganó Argentina y estamos contentos — vlog #10",L,"≈ 03 DIC","Resumen tranquilo y feliz tras un nuevo triunfo: el grupo recupera el ánimo."],
 ]},
 {head:"Octavos de final",date:"Sábado 03/12/2022",match:{teams:"🇦🇷 Argentina — Australia 🇦🇺",score:"2 · 1",note:"Ahmad bin Ali. Gol 1000 de Messi como profesional y sufrimiento final."},videos:[
   ["KvSiRNO1BTY","Resumen oficial: Argentina 2-1 Australia | FIFA",F,"SÁB 03 DIC","Resumen de octavos: el gol 1000 de Messi y el 2-1 que se sufrió hasta el final ante Australia."],
   ["dJ6_j_Zvdqs","¡Volvimos a estar contentos! Arg vs Aus — vlog #11",L,"SÁB 03 DIC","El alivio del pase a cuartos contra Australia, otra vez contentos después de sufrir."],
   ["ubOPOfWmzrw","AFA Estudio Mundial | Alfre Montes de Oca y PLM",A,"≈ 04 DIC","Alfre Montes de Oca y la banda en AFA Estudio, con anécdotas del viaje y del Mundial."],
   ["227LWxq1CU0","#ParenLaMano Mundial — 05/12",V,"LUN 05 DIC","Programa post Australia: se descomprime el sufrimiento y se mira de reojo a Países Bajos."],
   ["K07IOnwxuiY","#ParenLaMano Mundial — 06/12",V,"MAR 06 DIC","Día de análisis del cruce de cuartos y del nivel que muestra Argentina en la eliminación directa."],
   ["q7nSZnbQm3o","#ParenLaMano Mundial — 07/12",V,"MIÉ 07 DIC","Repaso del resto de los cuartos del Mundial y la previa del duelo con los neerlandeses."],
   ["3vNyGceA-ac","#ParenLaMano Mundial — 08/12",V,"JUE 08 DIC","Última jornada antes del partidazo ante Países Bajos: nervios, datos y mucho aguante."],
   ["QnqvmnuEUUw","Domingo de crisis y desgano total — vlog #12",L,"DOM 04 DIC","Un domingo de bajón y desgano total: el cansancio del viaje le gana a la banda."],
   ["lnQpf1etTt8","Un día 3 puntos para Big Big Rob — vlog #13",L,"≈ 05 DIC","Jornada redonda para Big Big Rob, que se lleva el día con sus tres puntos."],
   ["5P3fa2lD27g","Lavando los trapitos sucios en Qatar — vlog #14",L,"≈ 06 DIC","Día de logística doméstica en Qatar: lavar la ropa se vuelve toda una aventura."],
   ["zCRm4d5lQw4","Me voy a comprar un crucero — vlog #15",L,"≈ 07 DIC","Wancho sueña en grande y anuncia que se quiere comprar un crucero."],
   ["AkkVZ9C44Cs","Estafaron a Big Big Rob — vlog #16",L,"≈ 08 DIC","La estafa al Rob-Rob: el grupo cuenta entre risas cómo lo terminaron currando."],
 ]},
 {head:"Cuartos de final",date:"Viernes 09/12/2022",match:{teams:"🇦🇷 Argentina — Países Bajos 🇳🇱",score:"2 (4) · (3) 2",note:"Lusail. La noche del Dibu y del “andá pa' allá, bobo”."},videos:[
   ["0i-gsQJg7jc","Resumen oficial: Países Bajos 2(3)-(4)2 Argentina | FIFA",F,"VIE 09 DIC","Resumen de cuartos: el empate agónico de Weghorst y la noche eterna del Dibu en los penales."],
   ["a5r3N-oN0nc","¡Hacelos teta Dibu! Arg vs PBA — vlog #17",L,"VIE 09 DIC","El festejo del pase a semis tras la tanda: arengas al Dibu y el famoso andá pa allá."],
   ["l_dmnDb0dwg","¿Me olés la pata por 100 dólares? — vlog #18",L,"≈ 10 DIC","Capítulo de apuestas absurdas entre amigos, con olores de por medio y mucho delirio."],
   ["eqJ9OTK47w8","Día de preocupación en Qatar — vlog #19",L,"≈ 11 DIC","Día de tensión y preocupación en el grupo, entre el cansancio y la incertidumbre."],
   ["SVL-1X5x4wg","AFA Estudio Mundial | El Rob-Rob y sus amigos de PLM",A,"≈ 11 DIC","El Rob-Rob y sus amigos pasan por AFA Estudio para contar la experiencia mundialista."],
   ["Lpdq9kHDqYw","#ParenLaMano Mundial — 12/12",V,"LUN 12 DIC","Programa de la previa a la semifinal con Croacia: análisis del rival y clima de ilusión."],
 ]},
 {head:"Semifinal",date:"Martes 13/12/2022",match:{teams:"🇦🇷 Argentina — Croacia 🇭🇷",score:"3 · 0",note:"Lusail. Julián imparable, Messi mágico. ¡Estamos en la final!"},videos:[
   ["gbkgbbKZ1CA","Resumen oficial: Argentina 3-0 Croacia | FIFA",F,"MAR 13 DIC","Resumen de semifinal: Julián imparable y Messi a otro nivel para el 3-0 que mete a la final."],
   ["PAsDY0uTxUk","#ParenLaMano Mundial — 13/12 (a la final)",V,"MAR 13 DIC","El programa de la clasificación a la final: euforia total después del baile a Croacia."],
   ["uWe6YFC2aVU","Estamos en la final del mundo | Arg 3-0 Croacia — vlog #20",L,"MAR 13 DIC","El festejo del pase a la final tras el 3-0 a Croacia, con la banda al borde del llanto."],
   ["HbJt7Kig5Xg","#ParenLaMano Mundial — 14/12",V,"MIÉ 14 DIC","Día posterior a la semi: se baja a tierra y se empieza a palpitar la final con Francia."],
   ["G2HGVl6mdEA","#ParenLaMano Mundial — 15/12",V,"JUE 15 DIC","Análisis de la final que viene: cómo llega Francia y qué necesita Argentina para ser campeón."],
   ["Y0xzKP4v08A","#ParenLaMano Mundial — 16/12",V,"VIE 16 DIC","Última semana mundialista en el estudio, con los nervios de la final cada vez más cerca."],
   ["4wf3XTnIMCM","Germán no da más y se quiere volver — vlog #21",L,"≈ 14 DIC","Germán llega al límite del cansancio y bromea con que se quiere volver a casa."],
   ["m7w3WLwRHIY","¡Dos días para la final y no tenemos entradas! — vlog #22",L,"VIE 16 DIC","Cuenta regresiva angustiante: faltan dos días para la final y todavía no consiguen entradas."],
   ["nnfVVzdS1tY","AFA Estudio Mundial | El comandante Germán Beder",A,"≈ 16 DIC","Germán Beder en AFA Estudio repasa la aventura del grupo en Qatar antes de la gran final."],
   ["dkknsdXeV5Q","¡Tenemos entradas! — vlog #23",L,"≈ 17 DIC","Final feliz de la odisea: por fin consiguen las entradas para la final del Mundial."],
 ]},
 {head:"La final · Campeones del mundo",date:"Domingo 18/12/2022",final:true,match:{teams:"🇦🇷 Argentina — Francia 🇫🇷",score:"3 (4) · (2) 3",note:"Lusail. La mejor final de la historia. La tercera estrella. 🏆⭐⭐⭐"},videos:[
   ["zhEWqfP6V_w","Resumen oficial: Argentina 3(4)-(2)3 Francia | La mejor final | FIFA",F,"DOM 18 DIC","Resumen de la mejor final de la historia: 3-3, los penales y la tercera estrella argentina."],
   ["ncW22cFvJmQ","Argentina, ¿sos campeón del mundo? — vlog #24",L,"DOM 18 DIC","La banda procesa en caliente lo vivido en el estadio el día de la consagración."],
   ["C27xr-CBSh8","Reacción a la final Argentina vs Francia (relatos De Paoli)",L,"≈ 28 ENE 2023","Reacción al partido con los relatos de De Paoli, publicada semanas después de la final."],
   ["gVREUy7SlwQ","#PLM 🏅 Campeones del mundo — último programa (19/12)",V,"LUN 19 DIC","El programa de los campeones del mundo: el cierre del año a pura emoción y festejo."],
   ["pZz5QzVtpso","Un comienzo para olvidar, un final para recordar — vlog #25",L,"≈ 19 DIC","Repaso del Mundial completo: de la derrota del debut a la vuelta olímpica en Doha."],
   ["Ars8uSWo4Y4","¡Volvimos campeones del mundo! — vlog #26",L,"≈ 20 DIC","La vuelta a casa con la felicidad de ser campeones del mundo y todo lo que dejó el viaje."],
 ]},
 {head:"Vlogs de Germán Beder",date:"Durante el Mundial",videos:[
   ["mrvlMJNmXD4","#PLM en el Mundial #1: escala en Italia y primera compra en Qatar",B,"≈ 18 NOV","Beder arranca su serie propia: la escala en Italia y la primera compra al llegar a Qatar."],
   ["K-eWiKHdUnM","#PLM en el Mundial #2: paseo con Alfre, entradas y Argentina-México",B,"≈ 26 NOV","Paseo con Alfre, la búsqueda de entradas y la previa del partido ante México."],
   ["SVl2uDxW5ik","#PLM en el Mundial #3: desierto con Alfre, concentración y el Bicho",B,"≈ 28 NOV","Excursión al desierto con Alfre, la concentración de la Selección y el cruce con el Bicho."],
   ["WWluzW7aVZ0","#PLM en el Mundial #4: JPV, compras, danza y Argentina-Polonia",B,"≈ 30 NOV","JPV, compras, mucho baile y el triunfo ante Polonia que sella la clasificación."],
   ["Y-WsECl9GOE","#PLM en el Mundial #5: paseo, charlas, Argentina-Australia y regalo",B,"≈ 03 DIC","Paseos y charlas del grupo, el partido con Australia y un regalo inesperado."],
   ["6icN1Ocx1hw","#PLM en el Mundial #6: playa, reclamos y el crucero de Wancho",B,"≈ 06 DIC","Día de playa, reclamos varios y el ya mítico crucero que se quiere comprar Wancho."],
   ["nlOcbgtH2Lw","#PLM en el Mundial #7: limpieza, shopping, pronósticos y victoria",B,"≈ 09 DIC","Limpieza, shopping, pronósticos del grupo y el festejo de otra victoria de Argentina."],
   ["EwR02BTBQtA","#PLM en el Mundial #8: enfermedad, drama del chocolate y Argentina finalista",B,"≈ 13 DIC","Entre una enfermedad y el drama del chocolate, Argentina se mete en la final."],
   ["kxYcGBUOL9s","#PLM en el Mundial #9: paseo, Senosiain y entradas",B,"≈ 16 DIC","Paseo por Doha, la visita de Senosiain y la novela de las entradas para la final."],
   ["wyLpZqmW6WA","#PLM en el Mundial #10: ¡somos campeones del mundo!",B,"≈ 18 DIC","El día de la gloria contado desde adentro: somos campeones del mundo."],
   ["XamPuRLBBs8","#PLM en el Mundial #11: escala en Italia y vuelta a Argentina",B,"≈ 20 DIC","Cierre de la serie: la escala en Italia y la vuelta a la Argentina ya como campeones."],
 ]},
];

const PUBDATES={"iDaqtUS5dv0":"2022-11-23","dkknsdXeV5Q":"2022-12-17","C27xr-CBSh8":"2023-01-28"};
/* para reacciones publicadas mucho después, la fecha del video (evento) difiere de la de publicación */
const VIDEO_EVENT={"C27xr-CBSh8":"DOM 18 DIC"};

const RESULTS={
 "2022-11-20":{phase:"Fase de grupos",games:[{m:"Qatar 0-2 Ecuador"}]},
 "2022-11-21":{phase:"Fase de grupos",games:[{m:"Inglaterra 6-2 Irán"},{m:"Senegal 0-2 Países Bajos"},{m:"EE.UU. 1-1 Gales"}]},
 "2022-11-22":{phase:"Fase de grupos",games:[{m:"Argentina 1-2 Arabia Saudita",arg:true},{m:"Dinamarca 0-0 Túnez"},{m:"México 0-0 Polonia"},{m:"Francia 4-1 Australia"}]},
 "2022-11-23":{phase:"Fase de grupos",games:[{m:"Marruecos 0-0 Croacia"},{m:"Alemania 1-2 Japón"},{m:"España 7-0 Costa Rica"},{m:"Bélgica 1-0 Canadá"}]},
 "2022-11-24":{phase:"Fase de grupos",games:[{m:"Suiza 1-0 Camerún"},{m:"Uruguay 0-0 Corea del Sur"},{m:"Portugal 3-2 Ghana"},{m:"Brasil 2-0 Serbia"}]},
 "2022-11-25":{phase:"Fase de grupos",games:[{m:"Gales 0-2 Irán"},{m:"Qatar 1-3 Senegal"},{m:"Países Bajos 1-1 Ecuador"},{m:"Inglaterra 0-0 EE.UU."}]},
 "2022-11-26":{phase:"Fase de grupos",games:[{m:"Túnez 0-1 Australia"},{m:"Polonia 2-0 Arabia Saudita"},{m:"Francia 2-1 Dinamarca"},{m:"Argentina 2-0 México",arg:true}]},
 "2022-11-27":{phase:"Fase de grupos",games:[{m:"Japón 0-1 Costa Rica"},{m:"Bélgica 0-2 Marruecos"},{m:"Croacia 4-1 Canadá"},{m:"España 1-1 Alemania"}]},
 "2022-11-28":{phase:"Fase de grupos",games:[{m:"Camerún 3-3 Serbia"},{m:"Corea del Sur 2-3 Ghana"},{m:"Brasil 1-0 Suiza"},{m:"Portugal 2-0 Uruguay"}]},
 "2022-11-29":{phase:"Fase de grupos",games:[{m:"Ecuador 1-2 Senegal"},{m:"Países Bajos 2-0 Qatar"},{m:"Irán 0-1 EE.UU."},{m:"Gales 0-3 Inglaterra"}]},
 "2022-11-30":{phase:"Fase de grupos",games:[{m:"Australia 1-0 Dinamarca"},{m:"Túnez 1-0 Francia"},{m:"Polonia 0-2 Argentina",arg:true},{m:"Arabia Saudita 1-2 México"}]},
 "2022-12-01":{phase:"Fase de grupos",games:[{m:"Croacia 0-0 Bélgica"},{m:"Canadá 1-2 Marruecos"},{m:"Costa Rica 2-4 Alemania"},{m:"Japón 2-1 España"}]},
 "2022-12-02":{phase:"Fase de grupos",games:[{m:"Corea del Sur 2-1 Portugal"},{m:"Ghana 0-2 Uruguay"},{m:"Serbia 2-3 Suiza"},{m:"Camerún 1-0 Brasil"}]},
 "2022-12-03":{phase:"Octavos de final",games:[{m:"Países Bajos 3-1 EE.UU."},{m:"Argentina 2-1 Australia",arg:true}]},
 "2022-12-04":{phase:"Octavos de final",games:[{m:"Francia 3-1 Polonia"},{m:"Inglaterra 3-0 Senegal"}]},
 "2022-12-05":{phase:"Octavos de final",games:[{m:"Japón 1-1 Croacia",pen:"Croacia 3-1 pen."},{m:"Brasil 4-1 Corea del Sur"}]},
 "2022-12-06":{phase:"Octavos de final",games:[{m:"Marruecos 0-0 España",pen:"Marruecos 3-0 pen."},{m:"Portugal 6-1 Suiza"}]},
 "2022-12-09":{phase:"Cuartos de final",games:[{m:"Croacia 1-1 Brasil",pen:"Croacia 4-2 pen."},{m:"Países Bajos 2-2 Argentina",pen:"Argentina 4-3 pen.",arg:true}]},
 "2022-12-10":{phase:"Cuartos de final",games:[{m:"Marruecos 1-0 Portugal"},{m:"Inglaterra 1-2 Francia"}]},
 "2022-12-13":{phase:"Semifinal",games:[{m:"Argentina 3-0 Croacia",arg:true}]},
 "2022-12-14":{phase:"Semifinal",games:[{m:"Francia 2-0 Marruecos"}]},
 "2022-12-17":{phase:"Tercer puesto",games:[{m:"Croacia 2-1 Marruecos"}]},
 "2022-12-18":{phase:"Final",games:[{m:"Argentina 3-3 Francia",pen:"Argentina 4-2 pen.",arg:true}]},
};

const FLAGS={
 "Qatar":"🇶🇦","Ecuador":"🇪🇨","Inglaterra":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","Irán":"🇮🇷","Senegal":"🇸🇳","Países Bajos":"🇳🇱",
 "EE.UU.":"🇺🇸","Gales":"🏴󠁧󠁢󠁷󠁬󠁳󠁿","Argentina":"🇦🇷","Arabia Saudita":"🇸🇦","Dinamarca":"🇩🇰","Túnez":"🇹🇳",
 "México":"🇲🇽","Polonia":"🇵🇱","Francia":"🇫🇷","Australia":"🇦🇺","Marruecos":"🇲🇦","Croacia":"🇭🇷",
 "Alemania":"🇩🇪","Japón":"🇯🇵","España":"🇪🇸","Costa Rica":"🇨🇷","Bélgica":"🇧🇪","Canadá":"🇨🇦",
 "Suiza":"🇨🇭","Camerún":"🇨🇲","Uruguay":"🇺🇾","Corea del Sur":"🇰🇷","Portugal":"🇵🇹","Ghana":"🇬🇭",
 "Brasil":"🇧🇷","Serbia":"🇷🇸"
};

const GROUPS={
 A:["Qatar","Ecuador","Senegal","Países Bajos"],
 B:["Inglaterra","Irán","EE.UU.","Gales"],
 C:["Argentina","Arabia Saudita","México","Polonia"],
 D:["Dinamarca","Túnez","Francia","Australia"],
 E:["Alemania","Japón","España","Costa Rica"],
 F:["Marruecos","Croacia","Bélgica","Canadá"],
 G:["Suiza","Camerún","Brasil","Serbia"],
 H:["Uruguay","Corea del Sur","Portugal","Ghana"]
};

const DAY_GROUPS={
 "2022-11-20":{g:["A"],md:1},
 "2022-11-21":{g:["A","B"],md:1},
 "2022-11-22":{g:["C","D"],md:1},
 "2022-11-23":{g:["E","F"],md:1},
 "2022-11-24":{g:["G","H"],md:1},
 "2022-11-25":{g:["A","B"],md:2},
 "2022-11-26":{g:["C","D"],md:2},
 "2022-11-27":{g:["E","F"],md:2},
 "2022-11-28":{g:["G","H"],md:2},
 "2022-11-29":{g:["A","B"],md:3},
 "2022-11-30":{g:["C","D"],md:3},
 "2022-12-01":{g:["E","F"],md:3},
 "2022-12-02":{g:["G","H"],md:3}
};
const MD_LABEL={1:"tras la 1ª fecha",2:"tras la 2ª fecha",3:"grupo cerrado"};

const ABBR={"Qatar":"QAT","Ecuador":"ECU","Senegal":"SEN","Países Bajos":"NED","Inglaterra":"ENG","Irán":"IRN","EE.UU.":"USA","Gales":"WAL","Argentina":"ARG","Arabia Saudita":"KSA","México":"MEX","Polonia":"POL","Dinamarca":"DEN","Túnez":"TUN","Francia":"FRA","Australia":"AUS","Alemania":"GER","Japón":"JPN","España":"ESP","Costa Rica":"CRC","Bélgica":"BEL","Canadá":"CAN","Marruecos":"MAR","Croacia":"CRO","Suiza":"SUI","Camerún":"CMR","Brasil":"BRA","Serbia":"SRB","Uruguay":"URU","Corea del Sur":"KOR","Portugal":"POR","Ghana":"GHA"};
const BRACKET={
 r16:[
  {d:"2022-12-03",h:"Países Bajos",a:"EE.UU.",hs:3,as:1,w:"Países Bajos"},
  {d:"2022-12-03",h:"Argentina",a:"Australia",hs:2,as:1,w:"Argentina"},
  {d:"2022-12-05",h:"Japón",a:"Croacia",hs:1,as:1,hp:1,ap:3,w:"Croacia"},
  {d:"2022-12-05",h:"Brasil",a:"Corea del Sur",hs:4,as:1,w:"Brasil"},
  {d:"2022-12-04",h:"Francia",a:"Polonia",hs:3,as:1,w:"Francia"},
  {d:"2022-12-04",h:"Inglaterra",a:"Senegal",hs:3,as:0,w:"Inglaterra"},
  {d:"2022-12-06",h:"Marruecos",a:"España",hs:0,as:0,hp:3,ap:0,w:"Marruecos"},
  {d:"2022-12-06",h:"Portugal",a:"Suiza",hs:6,as:1,w:"Portugal"}
 ],
 qf:[
  {d:"2022-12-09",h:"Países Bajos",a:"Argentina",hs:2,as:2,hp:3,ap:4,w:"Argentina"},
  {d:"2022-12-09",h:"Croacia",a:"Brasil",hs:1,as:1,hp:4,ap:2,w:"Croacia"},
  {d:"2022-12-10",h:"Marruecos",a:"Portugal",hs:1,as:0,w:"Marruecos"},
  {d:"2022-12-10",h:"Inglaterra",a:"Francia",hs:1,as:2,w:"Francia"}
 ],
 sf:[
  {d:"2022-12-13",h:"Argentina",a:"Croacia",hs:3,as:0,w:"Argentina"},
  {d:"2022-12-14",h:"Francia",a:"Marruecos",hs:2,as:0,w:"Francia"}
 ],
 fin:[{d:"2022-12-18",h:"Argentina",a:"Francia",hs:3,as:3,hp:4,ap:2,w:"Argentina"}],
 tp:[{d:"2022-12-17",h:"Croacia",a:"Marruecos",hs:2,as:1,w:"Croacia"}]
};

  return {
    id: "qatar-2022", meta, theme, categories, home, homeFlag, year, roundLabels,
    data: DATA, pubdates: PUBDATES, videoEvent: VIDEO_EVENT,
    results: RESULTS, flags: FLAGS, groups: GROUPS, dayGroups: DAY_GROUPS,
    mdLabel: MD_LABEL, abbr: ABBR, bracket: BRACKET
  };
})();
