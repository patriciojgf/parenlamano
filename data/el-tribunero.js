/* data/el-tribunero.js — El Tribunero, el programa de fútbol semanal de Paren la
   Mano (Vorterix), temporada 2026. Capítulos ordenados por fecha de emisión.
   El contexto futbolístico y los invitados de cada uno están en
   data/el-tribunero-videos.js. El motor (assets/engine.js) los renderiza. */
window.PLM_EVENT = (function () {
  const T = "tribunero";

  const categories = [
    { id: "tribunero", chip: "El Tribunero", legend: "El Tribunero", color: "var(--accent)", fg: "var(--ink)", swatch: "var(--accent)", sub: 1 }
  ];

  const meta = {
    eyebrow: "Paren la Mano · Ciclo semanal de fútbol",
    titleA: "El Tribunero",
    titleB: "Temporada 2026",
    sub: "El programa especial de fútbol de Paren la Mano, capítulo a capítulo y ordenado por fecha, con el contexto futbolístico de cada semana y los invitados de cada edición.",
    stats: ["Lunes 19–21 h", "14 capítulos", "2026", "Por Vorterix"],
    footer: "El Tribunero, el programa de fútbol de Paren la Mano por Vorterix. Las fechas indican el día de <b>emisión</b>. Los videos son los originales y oficiales del canal."
  };

  const theme = {
    tokens: {
      "--primary": "#B11226", "--primary-deep": "#3D0810", "--ink": "#2B0610",
      "--accent": "#F2C14E", "--accent-soft": "#D9A441",
      "--secondary": "#E0524A", "--secondary-deep": "#A8322C",
      "--paper": "#FFF8EC", "--line": "rgba(242,193,78,.42)"
    },
    default: "",
    options: []
  };

  // capítulos: [id, título, categoría, fecha de emisión, desc fallback]
  const DATA = [
    { head: "Temporada 2026", date: "2026", videos: [
      ["D4yhGn9p2pU", "El primer Tribunero del año", T, "16 MAR 2026", "El Tribunero."],
      ["-UIAVpa9KgY", "El Tribunero con Flavio Azzaro", T, "25 MAR 2026", "El Tribunero."],
      ["PWww0_Gq5JQ", "El Tribunero con La Cobra", T, "30 MAR 2026", "El Tribunero."],
      ["v5V25orPFLw", "El Tribunero: Clásico de Avellaneda", T, "06 ABR 2026", "El Tribunero."],
      ["cupW4blAL9s", "El Tribunero vencido, con Emiliano Coroniti", T, "13 ABR 2026", "El Tribunero."],
      ["d_rDK299aOo", "Súper Tribunero de Superclásico", T, "20 ABR 2026", "El Tribunero."],
      ["LHoAk1bGrKM", "El Tribunero de mujeres, con Morena Beltrán", T, "27 ABR 2026", "El Tribunero."],
      ["5KaQp_O2pjI", "El Tribunero con Emilio González Moreira", T, "04 MAY 2026", "El Tribunero."],
      ["ULGWrknIHJA", "Tribunero especial cordobés, con Wanchope", T, "11 MAY 2026", "El Tribunero."],
      ["aENb9BthKuk", "Tribunero rivertidísimo", T, "14 MAY 2026", "El Tribunero."],
      ["JWtQOSiR8Fc", "Tribunero especial Tribuviejos, con Elio Rossi", T, "18 MAY 2026", "El Tribunero."],
      ["e23by6f_bWw", "Tribunero especial: Belgrano campeón de la Liga", T, "25 MAY 2026", "El Tribunero."],
      ["Fx7vdfhh3yk", "Tribunero XL con Horacio Pagani", T, "02 JUN 2026", "El Tribunero."],
      ["pvrBDXpuMMw", "Súper Tribunero Mundialista", T, "12 JUN 2026", "El Tribunero."]
    ]}
  ];

  return {
    id: "el-tribunero", meta, theme, categories,
    home: "", homeFlag: "", year: 2026, roundLabels: [],
    data: DATA
  };
})();
