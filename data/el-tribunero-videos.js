/* data/el-tribunero-videos.js — ficha de cada capítulo de El Tribunero 2026:
   descripción, contexto futbolístico de esa semana, clubes en juego e invitados.
   El motor (engine.js) usa la descripción y muestra los chips por tarjeta. */

/* escudos: colores de cada club/selección para el badge (bandas verticales) */
window.PLM_CLUBS = {
  river:         { n: "River",         c: ["#FFFFFF", "#D6122A", "#FFFFFF"] },
  boca:          { n: "Boca",          c: ["#0E2C8B", "#F4C20D"] },
  racing:        { n: "Racing",        c: ["#5BA3D9", "#FFFFFF"] },
  independiente: { n: "Independiente", c: ["#D6122A", "#161616"] },
  belgrano:      { n: "Belgrano",      c: ["#5BA3D9", "#FFFFFF", "#5BA3D9"] },
  talleres:      { n: "Talleres",      c: ["#1C2E8A", "#FFFFFF"] },
  argentina:     { n: "Argentina",     c: ["#75AADB", "#FFFFFF", "#75AADB"] },
  mexico:        { n: "México",        c: ["#0B6B3A", "#FFFFFF", "#C8102E"] }
};

window.PLM_VIDEOS = {
  "D4yhGn9p2pU": {
    desc: "El Tribunero estrena temporada: vuelve el ciclo de fútbol de Paren la Mano, los lunes a la noche por Vorterix.",
    contexto: "Torneo Apertura en pleno desarrollo y la cuenta regresiva al Mundial: se palpita la última lista de Scaloni para los amistosos previos.",
    clubs: ["argentina"],
    invitados: []
  },
  "-UIAVpa9KgY": {
    desc: "Edición con el polémico periodista deportivo Flavio Azzaro, garantía de debate picante en la mesa.",
    contexto: "Fecha FIFA: la Selección se concentra para sus últimos amistosos antes del Mundial —ante Mauritania y Zambia en la Bombonera— con la lista de Scaloni en discusión.",
    clubs: ["argentina"],
    invitados: ["Flavio Azzaro"]
  },
  "PWww0_Gq5JQ": {
    desc: "El Tribunero recibe a La Cobra para otra noche de fútbol y polémica.",
    contexto: "Plena gira de amistosos de la Selección, entre Mauritania y Zambia, en la última ventana FIFA antes de la cita mundialista.",
    clubs: ["argentina"],
    invitados: ["La Cobra"]
  },
  "v5V25orPFLw": {
    desc: "Tribunero dedicado al Clásico de Avellaneda, uno de los duelos más calientes del fútbol argentino.",
    contexto: "Fin de semana del clásico entre Racing e Independiente por el Torneo Apertura.",
    clubs: ["racing", "independiente"],
    invitados: []
  },
  "cupW4blAL9s": {
    desc: "El Tribunero “vencido”, con Emiliano Coroniti como invitado.",
    contexto: "Otra fecha del Torneo Apertura, con el arbitraje y el VAR en el centro de la polémica.",
    clubs: [],
    invitados: ["Emiliano Coroniti"]
  },
  "d_rDK299aOo": {
    desc: "Edición especial XL por el partido más grande del fútbol argentino: el Superclásico.",
    contexto: "Fin de semana de River vs Boca por el Torneo Apertura, el duelo que paraliza al país.",
    clubs: ["river", "boca"],
    invitados: []
  },
  "LHoAk1bGrKM": {
    desc: "El Tribunero de mujeres, con la periodista deportiva Morena Beltrán como gran invitada.",
    contexto: "Recta final de la fase regular del Torneo Apertura, con los equipos peleando la clasificación a los playoffs.",
    clubs: [],
    invitados: ["Morena Beltrán"]
  },
  "5KaQp_O2pjI": {
    desc: "Tribunero con Emilio González Moreira como invitado, para meterse de lleno en la actualidad del fútbol.",
    contexto: "Definición de la fase regular del Torneo Apertura y la previa de los playoffs por el título.",
    clubs: [],
    invitados: ["Emilio González Moreira"]
  },
  "ULGWrknIHJA": {
    desc: "Especial cordobés con Wanchope Ábila, ídolo de Belgrano y bandera de la provincia.",
    contexto: "Playoffs del Torneo Apertura con los equipos de Córdoba en primer plano: Belgrano, en marcha hacia una final histórica.",
    clubs: ["belgrano", "talleres"],
    invitados: ["Wanchope Ábila"]
  },
  "aENb9BthKuk": {
    desc: "Edición “rivertidísima”, con River como gran protagonista de la mesa.",
    contexto: "Semifinales de los playoffs del Apertura, con River metiéndose en la gran final.",
    clubs: ["river"],
    invitados: []
  },
  "JWtQOSiR8Fc": {
    desc: "Especial “Tribuviejos”, una noche de fútbol del recuerdo con el histórico médico Elio Rossi.",
    contexto: "Camino a la gran final del Torneo Apertura entre River y Belgrano.",
    clubs: ["river", "belgrano"],
    invitados: ["Elio Rossi"]
  },
  "e23by6f_bWw": {
    desc: "Tribunero especial por una hazaña histórica del fútbol argentino.",
    contexto: "Belgrano le ganó 3-2 a River la final del Torneo Apertura en el Kempes y se consagró campeón de Primera por primera vez en su historia.",
    clubs: ["belgrano", "river"],
    invitados: []
  },
  "Fx7vdfhh3yk": {
    desc: "Edición XL con Horacio Pagani, una leyenda del periodismo deportivo argentino.",
    contexto: "Cuenta regresiva al Mundial: Scaloni define la lista de 26 y la Selección ultima su preparación antes de viajar a defender la corona de Qatar.",
    clubs: ["argentina"],
    invitados: ["Horacio Pagani"]
  },
  "pvrBDXpuMMw": {
    desc: "Súper Tribunero mundialista: arranca la cobertura de la Copa del Mundo.",
    contexto: "El Mundial 2026 ya está en marcha: comenzó el 11 de junio con México 2-0 Sudáfrica en el Azteca, con Argentina lista para defender el título.",
    clubs: ["argentina", "mexico"],
    invitados: []
  }
};
