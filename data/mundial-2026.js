/* data/mundial-2026.js — Paren la Mano en el Mundial 2026
   Datos del evento. El motor (assets/engine.js) los renderiza vía renderEvent(). */
window.PLM_EVENT = (function () {
  const V = "vorterix", VL = "vlog", L = "luquitas", A = "afa";

  const categories = [
    { id:"vorterix", chip:"Vorterix",      legend:"Programa Vorterix", color:"var(--accent)",    fg:"var(--ink)",      swatch:"var(--accent)",    sub:3 },
    { id:"vlog",     chip:"Vlog PLM",      legend:"Vlog PLM",          color:"var(--secondary)", fg:"#032A1A",         swatch:"var(--secondary)", sub:2 },
    { id:"luquitas", chip:"Vlog Luquitas", legend:"Vlog Luquitas",      color:"#60C3A4",          fg:"#032A1A",         swatch:"#60C3A4",          sub:2 },
    { id:"afa",      chip:"AFA Estudio",   legend:"AFA Estudio",        color:"#fff",             fg:"var(--primary)",  swatch:"#fff",             sub:4 },
  ];

  const meta = {
    eyebrow: "Recopilación de fans · Cobertura mundialista",
    titleA: "Paren la Mano",
    titleB: "en el Mundial 2026",
    sub: "Los programas en vivo desde EE.UU., los vlogs de la bandurria y las visitas a AFA Estudio — toda la cobertura de PLM en el Mundial de Canadá, México y EE.UU., partido a partido.",
    stats: ["11 JUN → en curso", "🇦🇷 Argentina · Grupo J", "📍 En vivo desde EE.UU.", "🌎 Canadá · México · EE.UU."],
    footer: "Hecho con cariño mundialista. Los programas llevan la fecha en el título; las marcadas con ≈ son estimadas. El torneo está en curso — los datos se actualizan con cada jornada. <b>Vamos Argentina.</b>"
  };

  const theme = {
    tokens: {
      "--primary":"#0E6B43", "--primary-deep":"#063620", "--ink":"#021A0F",
      "--accent":"#F4C84B", "--accent-soft":"#D4A832",
      "--secondary":"#4FB0E0", "--secondary-deep":"#2E8EC4",
      "--paper":"#F0FAF4", "--line":"rgba(244,200,75,.40)"
    },
    default: "",
    options: []
  };

  const home = "Argentina";
  const homeFlag = "🇦🇷";
  const year = 2026;
  const roundLabels = ["F1","F2","F3","8VOS","4TOS","SEMI","FINAL"];

  const DATA = [
    {head:"La previa — desde Argentina",date:"Junio 2026",videos:[
      ["ybCpADKASeU","Están arruinando el mundial? | PLM",VL,"MAR 9 JUN","Debate encendido todavía desde Argentina: ¿qué está pasando con la organización y el espectáculo del torneo?"],
      ["ISgG_zogN4E","El peor arranque de todos los mundiales? | #PLM 11/06",V,"JUE 11 JUN","El primer día del Mundial 2026: análisis del arranque polémico del torneo más grande de la historia, todavía desde el estudio en Argentina."],
    ]},
    {head:"Llegada a Estados Unidos",date:"12 al 15 de junio de 2026",videos:[
      ["zL4LA84Wc38","Nos vamos a Los Ángeles | Vlog #01",VL,"≈ 12 JUN","La banda pone primera rumbo a Los Ángeles para la aventura mundialista."],
      ["UR3-mzydtm8","Pedos en el avión | #PLM",VL,"≈ 12 JUN","El vuelo a Estados Unidos con todos sus condimentos."],
      ["n5rzuhmZqCw","El primer día del mundial fue malísimo? | PLM",VL,"≈ 12 JUN","Llegada a suelo americano y primeras impresiones del arranque del torneo."],
      ["XTmiDHiCcyA","Estados Unidos no está preparado para nosotros... | PLM",VL,"≈ 13 JUN","El equipo se adapta al Mundial en tierra americana: estadios, fans y el ambiente mundialista."],
      ["lLvdfzEatCI","Paren la Mano en AFA Estudio Mundial 2026",A,"≈ 15 JUN","Visita a AFA Estudio en la previa del debut de Argentina: la charla con el ambiente oficial."],
    ]},
    {head:"Fecha 1 · Fase de grupos",date:"Lunes 16/06/2026",match:{teams:"🇦🇷 Argentina — Argelia 🇩🇿",score:"3 · 0",note:"Arrowhead Stadium, Kansas City. Hat-trick de Messi: aparición #200 con la Selección y récord histórico."},videos:[
      ["EH6UqnnZRpQ","Nos cruzamos con Bochini en Kansas City: Vlog Día 2 | #PLM 17/06",VL,"MAR 17 JUN","El día después del 3-0 a Argelia: el encuentro inesperado con el Bocha en pleno Kansas City."],
      ["HKnzP4rqtUg","Así vivimos el primer partido de Argentina en el mundial | #PLM",VL,"MAR 17 JUN","La experiencia completa de vivir el 3-0 a Argelia en el estadio: el hat-trick histórico de Messi."],
      ["BUt97vit3Yw","Rápidos y Furiosos | vlog #03",L,"≈ 17 JUN","El vlog #03 de Luquitas post-partido: sensaciones, el festejo y la vida mundialista en Kansas City."],
      ["1NTpNDJEeyI","Road trip histórico por la Ruta 66: Vlog Día 4 | #PLM 18/06",VL,"MIÉ 18 JUN","De Kansas City a Dallas por la legendaria Ruta 66: la aventura mundialista on the road."],
      ["wC1_ILkKeoU","El primer programa desde Estados Unidos | #PLM Completo 18/06",V,"MIÉ 18 JUN","El primer programa emitido en vivo desde suelo americano: análisis, invitados y la previa de la Fecha 2."],
    ]},
  ];

  return {
    id: "mundial-2026", meta, theme, categories,
    home, homeFlag, year, roundLabels,
    data: DATA
  };
})();
