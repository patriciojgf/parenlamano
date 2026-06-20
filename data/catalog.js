/* data/catalog.js — índice de líneas de tiempo para la portada.
   Cada entrada describe una tarjeta. Para sumar un evento nuevo: agregá su
   data/<id>.js + carpeta <id>/index.html y una entrada acá. */
window.PLM_CATALOG = [
  {
    id: "qatar-2022",
    href: "qatar-2022/",
    eyebrow: "Mundial · FIFA",
    title: "Qatar 2022",
    subtitle: "Del armado de la valija al ¡Muchaaachos! — todos los programas desde Doha, los vlogs y AFA Estudio, partido a partido.",
    dateRange: "16 NOV → 19 DIC 2022",
    badge: "🏆 Campeones del mundo",
    stats: ["19 programas", "38 vlogs", "7 partidos"],
    theme: { primary: "#8A1538", primaryDeep: "#4D0B1F", accent: "#E8C36A", secondary: "#75AADB" }
  },
  {
    id: "el-tribunero",
    href: "el-tribunero/",
    eyebrow: "Paren la Mano · Ciclo semanal",
    title: "El Tribunero",
    subtitle: "El programa de fútbol de Paren la Mano, capítulo a capítulo y ordenado por fecha, con el contexto futbolístico de cada semana y sus invitados.",
    dateRange: "Temporada 2026",
    badge: "🎙️ En emisión",
    stats: ["14 capítulos", "Lunes 19–21 h", "Vorterix"],
    theme: { primary: "#7B1E96", primaryDeep: "#270A30", accent: "#D7A8F0", secondary: "#E12AD6" }
  },
  {
    id: "copa-america-2024",
    soon: true,
    eyebrow: "Copa América · CONMEBOL",
    title: "Copa América 2024",
    subtitle: "Próximamente: la cobertura de Paren la Mano de la Copa América en Estados Unidos.",
    dateRange: "2024",
    badge: "Próximamente",
    stats: [],
    theme: { primary: "#13788C", primaryDeep: "#0A3E4A", accent: "#5BD6C0", secondary: "#8FE3D8" }
  },
  {
    id: "mundial-clubes-2025",
    soon: true,
    eyebrow: "Mundial de Clubes · FIFA",
    title: "Mundial de Clubes 2025",
    subtitle: "Próximamente: la cobertura de Paren la Mano del nuevo Mundial de Clubes.",
    dateRange: "2025",
    badge: "Próximamente",
    stats: [],
    theme: { primary: "#0E3A5F", primaryDeep: "#06243D", accent: "#F2C14E", secondary: "#5BC0BE" }
  },
  {
    id: "mundial-2026",
    soon: true,
    eyebrow: "Mundial · FIFA",
    title: "Mundial 2026",
    subtitle: "Próximamente: la cobertura del próximo Mundial (Canadá, México y EE.UU.).",
    dateRange: "2026",
    badge: "Próximamente",
    stats: [],
    theme: { primary: "#0E6B43", primaryDeep: "#063620", accent: "#F4C84B", secondary: "#4FB0E0" }
  }
];
