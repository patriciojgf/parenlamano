/* engine.js — motor de render de las líneas de tiempo de Paren la Mano.
   renderEvent(EVENT) arma header, leyenda/filtros, timeline, resultados del día,
   tablas de posiciones, cuadro de eliminatorias, navegación y selector de estilo,
   todo a partir del objeto EVENT (ver data/<id>.js). */

/* constantes de idioma (no dependen del evento) */
const DOW = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];
const MESL = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
const MES = { ENE:1, FEB:2, MAR:3, ABR:4, MAY:5, JUN:6, JUL:7, AGO:8, SEP:9, OCT:10, NOV:11, DIC:12 };

function injectStyle(id, css) {
  let s = document.getElementById(id);
  if (!s) { s = document.createElement("style"); s.id = id; document.head.appendChild(s); }
  s.textContent = css;
}

function renderEvent(EVENT) {
  const DATA = EVENT.data || [];
  const RESULTS = EVENT.results || {};
  const FLAGS = EVENT.flags || {};
  const GROUPS = EVENT.groups || {};
  const DAY_GROUPS = EVENT.dayGroups || {};
  const MD_LABEL = EVENT.mdLabel || {};
  const ABBR = EVENT.abbr || {};
  const BRACKET = EVENT.bracket || {};
  const PUBDATES = EVENT.pubdates || {};
  const VIDEO_EVENT = EVENT.videoEvent || {};
  const categories = EVENT.categories || [];
  const HOME = EVENT.home || "";
  const HOMEFLAG = EVENT.homeFlag || "";
  const YEAR = EVENT.year || new Date().getFullYear();
  const ABBR_R = EVENT.roundLabels || [];
  const meta = EVENT.meta || {};
  const theme = EVENT.theme || {};

  const CHIP = {}; categories.forEach(c => CHIP[c.id] = c.chip);
  const SUB = {}; categories.forEach(c => SUB[c.id] = c.sub != null ? c.sub : 2);
  const OFFICIAL = new Set(categories.filter(c => c.official).map(c => c.id));
  const hasResults = Object.keys(RESULTS).length > 0;
  const hasGroups = Object.keys(GROUPS).length > 0;
  const hasBracket = Object.keys(BRACKET).length > 0;

  if (meta.title) document.title = meta.title;

  /* ---------- tema: tokens de color + colores de categoría ---------- */
  if (theme.tokens) {
    injectStyle("ev-tokens", ":root{" + Object.entries(theme.tokens).map(([k, v]) => `${k}:${v}`).join(";") + "}");
  }
  injectStyle("ev-cats", categories.map(c => {
    let r = `.chip.${c.id}{background:${c.color};color:${c.fg};`;
    if (c.border) r += `border:${c.border};`;
    return r + "}";
  }).join("\n"));
  document.body.dataset.theme = theme.default || "";

  /* ---------- header ---------- */
  const hero = document.getElementById("hero");
  hero.innerHTML = `
    <div class="hero-eyebrow">${meta.eyebrow || ""}</div>
    <h1><span class="plm">${meta.titleA || ""}</span><span class="qatar">${meta.titleB || ""}</span></h1>
    <p class="hero-sub">${meta.sub || ""}</p>
    <div class="hero-meta">${(meta.stats || []).map(s => `<span>${s}</span>`).join("")}</div>`;

  /* ---------- leyenda / filtros ---------- */
  const legend = document.getElementById("legend");
  legend.innerHTML = categories.map(c => {
    const sw = `background:${c.swatch || c.color}` + (c.swatchBorder ? `;border:${c.swatchBorder}` : "");
    return `<button class="fchip" data-chip="${c.id}"><i style="${sw}"></i>${c.legend}</button>`;
  }).join("");

  /* ---------- footer ---------- */
  document.getElementById("footer").innerHTML = meta.footer || "";

  const tl = document.getElementById("timeline");

  /* ---------- helpers ---------- */
  function flag(n) { return FLAGS[n] || ""; }

  function fmtISO(iso) {
    const d = new Date(iso), dd = String(d.getDate()).padStart(2, "0");
    const yr = d.getFullYear() !== YEAR ? " " + d.getFullYear() : "";
    return `${DOW[d.getDay()]} ${dd} ${MESL[d.getMonth()]}${yr}`;
  }
  function videoMeta(id, when) {
    const ev = VIDEO_EVENT[id] || when;
    const est = ev.startsWith("≈");
    let html = `<div class="card-meta"><span><b>Fecha del video:</b> ${fmtISO(whenToISO(ev))}${est ? ' <em>estimada</em>' : ''}</span>`;
    const pub = PUBDATES[id];
    if (pub) { const [y, mo, d] = pub.split("-").map(Number); html += `<span><b>Publicación:</b> ${fmtISO(new Date(y, mo - 1, d).getTime())}</span>`; }
    return html + `</div>`;
  }
  function videoExtra(id) {
    const info = (window.PLM_VIDEOS || {})[id];
    if (!info) return "";
    const chips = (arr) => (arr || []).map(t => `<span class="vchip">${t}</span>`).join("");
    let rows = "";
    if (info.contexto) rows += `<div class="vrow"><span class="vlabel">Contexto</span><span class="vtext">${info.contexto}</span></div>`;
    if (info.temas && info.temas.length) rows += `<div class="vrow"><span class="vlabel">Temas</span><span class="vchips">${chips(info.temas)}</span></div>`;
    if (info.con && info.con.length) rows += `<div class="vrow"><span class="vlabel">Con</span><span class="vchips">${chips(info.con)}</span></div>`;
    if (info.invitados && info.invitados.length) rows += `<div class="vrow"><span class="vlabel">Invitados</span><span class="vchips">${chips(info.invitados)}</span></div>`;
    return rows ? `<div class="vinfo">${rows}</div>` : "";
  }
  function card(id, title, chip, when, desc) {
    const c = document.createElement("article");
    c.className = "card" + (OFFICIAL.has(chip) ? " official" : "");
    c.dataset.chip = chip;
    const info = (window.PLM_VIDEOS || {})[id];
    const realDesc = (info && info.desc) ? info.desc : desc;
    c.innerHTML = `
      <div class="card-head"><div class="card-title">${title}</div></div>
      <div class="player">
        <button class="facade" data-id="${id}" aria-label="Reproducir: ${title.replace(/"/g, '&quot;')}">
          <img loading="lazy" src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="">
        </button>
      </div>
      <div class="card-body">
        <p class="card-desc">${realDesc}</p>
        ${videoExtra(id)}
        <div class="card-foot">
          <div class="foot-left">
            <span class="chip ${chip}">${CHIP[chip] || chip}</span>
            <a class="yt-link" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">Ver en YouTube &#8599;</a>
          </div>
          ${videoMeta(id, when)}
        </div>
      </div>`;
    return c;
  }

  /* ---- parsear la banda de fecha a ISO para ordenar ---- */
  function whenToISO(w) {
    const t = w.replace("≈", "").trim().split(/\s+/);
    const nums = t.filter(x => /^\d+$/.test(x));
    const dd = parseInt(nums.find(x => x.length <= 2), 10);
    const yy = nums.find(x => x.length === 4) ? parseInt(nums.find(x => x.length === 4), 10) : YEAR;
    // el mes es el último token alfabético que sea un mes; así no colisiona
    // con las abreviaturas de día de la semana (p. ej. "MAR" = martes y marzo)
    const monthToks = t.filter(x => /^[A-ZÁ]+$/.test(x) && MES[x]);
    const mm = MES[monthToks[monthToks.length - 1]];
    return new Date(yy, mm - 1, dd).getTime();
  }

  /* ---- cuadro de eliminatorias ---- */
  function koISO(s) { const [y, mo, d] = s.split("-").map(Number); return new Date(y, mo - 1, d).getTime(); }
  function koSets(round, upto) { const win = new Set(), lose = new Set(); (BRACKET[round] || []).forEach(mt => { if (koISO(mt.d) <= upto) { win.add(mt.w); lose.add(mt.w === mt.h ? mt.a : mt.h); } }); return { win, lose }; }
  function koTeam(name, mt, upto) {
    const played = koISO(mt.d) <= upto;
    const ab = ABBR[name] || name;
    const isW = mt.w === name, isH = mt.h === name;
    const reg = isH ? mt.hs : mt.as, pen = isH ? mt.hp : mt.ap;
    const sc = played ? `${reg}${pen != null ? ` <i>(${pen})</i>` : ""}` : "";
    const cls = `kt${played && isW ? " win" : ""}${name === HOME ? " arg" : ""}`;
    return `<div class="${cls}"><span>${flag(name)} ${ab}</span><b>${sc}</b></div>`;
  }
  function koMatch(mt, round, upto) {
    const played = koISO(mt.d) <= upto;
    let revealed = played || round === "r16";
    if (!revealed) {
      if (round === "qf") { const s = koSets("r16", upto); revealed = s.win.has(mt.h) && s.win.has(mt.a); }
      else if (round === "sf") { const s = koSets("qf", upto); revealed = s.win.has(mt.h) && s.win.has(mt.a); }
      else if (round === "fin") { const s = koSets("sf", upto); revealed = s.win.has(mt.h) && s.win.has(mt.a); }
      else if (round === "tp") { const s = koSets("sf", upto); revealed = s.lose.has(mt.h) && s.lose.has(mt.a); }
    }
    if (!revealed) return `<div class="kom tbd"><div class="kt"><span>Por definir</span><b></b></div><div class="kt"><span></span><b></b></div></div>`;
    return `<div class="kom${played ? " played" : ""}">${koTeam(mt.h, mt, upto)}${koTeam(mt.a, mt, upto)}</div>`;
  }
  function bracket(upto) {
    const col = (round, title, extra) => `<div class="kcol${extra || ""}"><div class="kcol-h">${title}</div><div class="kcol-body">${(BRACKET[round] || []).map(mt => koMatch(mt, round, upto)).join("")}</div></div>`;
    const tp = BRACKET.tp ? `<div class="tp-row"><span class="tp-label">3º puesto</span><div class="tp-box">${koMatch(BRACKET.tp[0], "tp", upto)}</div></div>` : "";
    return `<div class="bracket">${col("r16", "Octavos")}${col("qf", "Cuartos")}${col("sf", "Semis")}${col("fin", "Final", " kcol-fin")}</div>${tp}`;
  }
  function decorate(g) {
    const m = g.m.match(/^(.+?)\s(\d+)-(\d+)\s(.+)$/);
    if (!m) return g.m;
    const A = m[1], ga = m[2], gb = m[3], B = m[4];
    let score = `${ga}-${gb}`;
    if (g.pen) {
      const pm = g.pen.match(/^(.+?)\s(\d+)-(\d+)/);
      if (pm) {
        const wp = +pm[2], lp = +pm[3];
        const aPen = (pm[1] === A) ? wp : lp, bPen = (pm[1] === A) ? lp : wp;
        score = `${ga}<i>(${aPen})</i>-<i>(${bPen})</i>${gb}`;
      }
    }
    return `<span class="tm">${flag(A)} ${A}</span><b class="sc">${score}</b><span class="tm">${flag(B)} ${B}</span>`;
  }
  function standings(G, uptoISO) {
    const teams = GROUPS[G]; const tbl = {};
    teams.forEach(t => tbl[t] = { t, pj: 0, gf: 0, gc: 0, pts: 0 });
    Object.keys(RESULTS).forEach(dk => {
      const r = RESULTS[dk]; if (r.phase !== "Fase de grupos") return;
      const [y, mo, d] = dk.split("-").map(Number); const iso = new Date(y, mo - 1, d).getTime();
      if (iso > uptoISO) return;
      r.games.forEach(gm => {
        const m = gm.m.match(/^(.+?)\s(\d+)-(\d+)\s(.+)$/); if (!m) return;
        const A = m[1], ga = +m[2], gb = +m[3], Bt = m[4];
        if (!tbl[A] || !tbl[Bt]) return;
        tbl[A].pj++; tbl[Bt].pj++; tbl[A].gf += ga; tbl[A].gc += gb; tbl[Bt].gf += gb; tbl[Bt].gc += ga;
        if (ga > gb) tbl[A].pts += 3; else if (ga < gb) tbl[Bt].pts += 3; else { tbl[A].pts++; tbl[Bt].pts++; }
      });
    });
    return Object.values(tbl).sort((x, y) => y.pts - x.pts || (y.gf - y.gc) - (x.gf - x.gc) || y.gf - x.gf);
  }

  /* ---- aplanar: cada video y cada partido como un ítem con su fecha ---- */
  const items = [];
  let _gi = 0;
  DATA.forEach(st => {
    if (st.match) {
      const m = st.date.match(/(\d{2})\/(\d{2})\/(\d{4})/);
      const iso = new Date(parseInt(m[3], 10), parseInt(m[2], 10) - 1, parseInt(m[1], 10)).getTime();
      items.push({ kind: "match", iso, sub: 0, st });
    }
    st.videos.forEach((v) => items.push({ kind: "video", iso: whenToISO(v[3]), sub: SUB[v[2]] || 2, seq: _gi++, v }));
  });
  /* separadores de resultados: uno al final de cada jornada */
  Object.keys(RESULTS).forEach(dk => {
    const [y, mo, d] = dk.split("-").map(Number);
    items.push({ kind: "day", iso: new Date(y, mo - 1, d).getTime(), sub: 5, dk });
  });
  /* orden cronológico estable: misma fecha → partido, luego videos, luego resultados */
  items.sort((a, b) => a.iso - b.iso || a.sub - b.sub || (a.seq ?? 0) - (b.seq ?? 0));

  /* ---- nodos de fecha en la barra ---- */
  function dateKey(iso) { const d = new Date(iso); return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate(); }
  const dateExact = {};
  items.forEach(it => { if (it.kind === "video") { const k = dateKey(it.iso); if (!it.v[3].startsWith("≈")) dateExact[k] = true; else if (!(k in dateExact)) dateExact[k] = false; } });
  function railLabel(iso) {
    const d = new Date(iso), k = dateKey(iso);
    const dd = String(d.getDate()).padStart(2, "0");
    const yr = d.getFullYear() !== YEAR ? " " + d.getFullYear() : "";
    const exact = dateExact[k];
    const datetxt = `${DOW[d.getDay()]} ${dd} ${MESL[d.getMonth()]}${yr}`;
    const tag = exact ? "" : (d.getFullYear() !== YEAR ? "fecha de publicación" : "filmación estimada");
    return { datetxt, tag, approx: !exact };
  }
  function resultsKey(iso) { const d = new Date(iso); const z = n => String(n).padStart(2, "0"); return d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate()); }
  function dayResultsRows(iso) {
    const r = RESULTS[resultsKey(iso)];
    if (!r) return "";
    const rows = r.games.map(g => {
      const m = g.m.match(/^(.+?)\s(\d+)-(\d+)\s(.+)$/);
      if (!m) return "";
      return `<span class="dmr${g.arg ? " arg" : ""}">${flag(m[1])}<span class="ab">${ABBR[m[1]] || ""}</span><b>${m[2]}-${m[3]}</b><span class="ab">${ABBR[m[4]] || ""}</span>${flag(m[4])}${g.pen ? '<i>p</i>' : ''}</span>`;
    }).join("");
    return `<div class="dm-results">${rows}</div>`;
  }
  function emitDate(iso, parent) {
    const { datetxt, approx } = railLabel(iso);
    const dm = document.createElement("div");
    dm.className = "datemark" + (approx ? " approx" : "");
    dm.innerHTML = `<span class="dm-pill"><span class="dm-date">${datetxt}</span></span>${dayResultsRows(iso)}`;
    parent.appendChild(dm);
  }

  /* ---- render: cada día en su propio grupo, con la fecha sticky dentro del grupo ---- */
  let grid = null, argN = 0, lastRailDate = null, curGroup = null;
  function flush() { grid = null; }
  items.forEach(it => {
    const _k = dateKey(it.iso);
    if (_k !== lastRailDate) {
      flush();
      curGroup = document.createElement("div");
      curGroup.className = "daygroup";
      curGroup.dataset.iso = it.iso;
      tl.appendChild(curGroup);
      emitDate(it.iso, curGroup);
      lastRailDate = _k;
    }
    if (it.kind === "match") {
      flush();
      const st = it.st;
      const s = document.createElement("section");
      s.className = "stage match";
      s.id = "arg-" + (++argN);
      s.innerHTML = `<div class="scoreboard${st.final ? " final" : ""}">
          <div class="sb-eyebrow"><span>${st.head}</span><span>${st.date}</span></div>
          <span class="teams">${st.match.teams}</span>
          <span class="score">${st.match.score}</span>
          <span class="note">${st.match.note}</span>
        </div>`;
      curGroup.appendChild(s);
    } else if (it.kind === "day") {
      flush();
      const r = RESULTS[it.dk]; const [y, mo, d] = it.dk.split("-").map(Number);
      const dt = new Date(y, mo - 1, d);
      const label = `${DOW[dt.getDay()]} ${String(d).padStart(2, "0")} ${MESL[mo - 1]}`;
      const games = r.games.map(g => `<span class="res${g.arg ? " arg" : ""}">${decorate(g)}</span>`).join("");
      const bar = document.createElement("div");
      bar.className = "daybar" + (r.phase !== "Fase de grupos" ? " ko" : "") + (r.phase === "Final" ? " final" : "");
      let extra = "";
      const dg = DAY_GROUPS[it.dk];
      if (dg && hasGroups) {
        extra = `<div class="groups">` + dg.g.map(G => {
          const st = standings(G, it.iso);
          const allPlayed = st.every(r => r.pj >= dg.md);
          const closed = dg.md === 3 && allPlayed;
          const lbl = closed ? "grupo cerrado · pasan los 2 primeros" : (allPlayed ? MD_LABEL[dg.md] : dg.md + "ª fecha en juego");
          const rows = st.map((row, i) => {
            const dgoal = row.gf - row.gc;
            const cls = ((row.t === HOME ? "arg " : "") + (closed && i < 2 ? "qual" : "")).trim();
            return `<tr class="${cls}"><td class="pos">${i + 1}</td><td class="gt">${flag(row.t)} ${row.t}</td><td>${row.pj}</td><td>${dgoal > 0 ? "+" : ""}${dgoal}</td><td class="pt">${row.pts}</td></tr>`;
          }).join("");
          return `<table class="gtable"><caption>Grupo ${G} <small>${lbl}</small></caption><thead><tr><th></th><th></th><th>PJ</th><th>DG</th><th>Pts</th></tr></thead><tbody>${rows}</tbody></table>`;
        }).join("") + `</div>`;
      }
      if (r.phase !== "Fase de grupos" && hasBracket) {
        extra += `<div class="bracket-wrap"><div class="bracket-h">Cuadro de eliminatorias</div>${bracket(it.iso)}</div>`;
      }
      bar.innerHTML = `<div class="daybar-head"><span class="daybar-date">${label}</span><span class="daybar-phase">${r.phase} · resultados del día</span></div><div class="daybar-res">${games}</div>` + extra;
      curGroup.appendChild(bar);
    } else {
      if (!grid) { grid = document.createElement("div"); grid.className = "videos"; curGroup.appendChild(grid); }
      grid.appendChild(card(it.v[0], it.v[1], it.v[2], it.v[3], it.v[4]));
    }
  });

  /* ---------- filtros por canal ---------- */
  const hiddenChips = new Set();
  function applyFilters() {
    document.querySelectorAll(".card").forEach(c => { c.style.display = hiddenChips.has(c.dataset.chip) ? "none" : ""; });
    document.querySelectorAll(".videos").forEach(g => {
      const any = [...g.children].some(c => c.style.display !== "none");
      g.classList.toggle("allhidden", !any);
    });
  }
  function setFilterH() { const l = document.querySelector(".legend"); if (l) document.documentElement.style.setProperty("--filter-h", l.offsetHeight + "px"); }
  setFilterH(); window.addEventListener("resize", setFilterH);
  document.querySelectorAll(".fchip").forEach(b => {
    b.addEventListener("click", () => {
      const ch = b.dataset.chip;
      hiddenChips.has(ch) ? hiddenChips.delete(ch) : hiddenChips.add(ch);
      b.classList.toggle("off", hiddenChips.has(ch));
      b.setAttribute("aria-pressed", hiddenChips.has(ch) ? "false" : "true");
      applyFilters();
    });
  });

  /* ---------- navegación entre partidos del equipo local ---------- */
  const matchSecs = [...document.querySelectorAll(".stage.match")];
  let wantOpen = null, pastHeader = false;
  function isDesktop() { return window.matchMedia("(min-width:1280px)").matches; }
  if (matchSecs.length) {
    const argnav = document.createElement("nav");
    argnav.className = "argnav";
    argnav.innerHTML = `<div class="argnav-t">⚽ ${HOME}</div>`;
    matchSecs.forEach((sec, i) => {
      const teams = sec.querySelector(".teams").textContent.trim();
      const rival = teams.split(/\s+/).pop();
      const score = sec.querySelector(".score").textContent.replace(/\s*·\s*/, "-").replace(/\s+/g, "");
      const b = document.createElement("button");
      b.dataset.target = sec.id;
      b.innerHTML = `<span class="ab">${ABBR_R[i] || ""}</span><span class="vs">${HOMEFLAG} ${score} ${rival}</span>`;
      b.addEventListener("click", () => {
        document.getElementById(sec.id).scrollIntoView({ behavior: "smooth", block: "start" });
        if (!isDesktop()) { wantOpen = false; navState(); }
      });
      argnav.appendChild(b);
    });
    document.body.appendChild(argnav);
    const fab = document.createElement("button");
    fab.className = "argnav-fab"; fab.setAttribute("aria-label", "Mostrar u ocultar partidos del equipo");
    document.body.appendChild(fab);
    function navState() {
      const dflt = isDesktop();
      const intent = (wantOpen == null ? dflt : wantOpen);
      const open = intent && (isDesktop() ? pastHeader : true);
      argnav.classList.toggle("show", open);
      fab.classList.toggle("active", open);
      fab.textContent = open ? "✕" : "⚽";
    }
    fab.addEventListener("click", () => {
      const intent = (wantOpen == null ? isDesktop() : wantOpen);
      wantOpen = !intent;
      navState();
    });
    window.addEventListener("resize", navState);
    const spy = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          argnav.querySelectorAll("button[data-target]").forEach(b => b.classList.toggle("active", b.dataset.target === e.target.id));
        }
      });
    }, { rootMargin: "-20% 0px -65% 0px" });
    matchSecs.forEach(s => spy.observe(s));
    const headerEl = document.querySelector("header");
    if (headerEl) {
      new IntersectionObserver(es => {
        es.forEach(e => { pastHeader = !e.isIntersecting; navState(); });
      }, { threshold: 0 }).observe(headerEl);
    }
    navState();
  }

  /* ---------- facade -> iframe al hacer click (carga liviana) ---------- */
  tl.addEventListener("click", e => {
    const b = e.target.closest(".facade");
    if (!b) return;
    const id = b.dataset.id;
    const f = document.createElement("iframe");
    const og = location.protocol.indexOf("http") === 0 ? `&origin=${encodeURIComponent(location.origin)}` : "";
    f.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1${og}`;
    f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    f.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    f.allowFullscreen = true;
    f.title = "Reproductor de YouTube";
    b.replaceWith(f);
  });

  /* ---------- selector de estilo ---------- */
  const opts = theme.options || [];
  if (opts.length) {
    const sp = document.createElement("div");
    sp.className = "stylepick"; sp.setAttribute("role", "toolbar"); sp.setAttribute("aria-label", "Elegir estilo");
    sp.innerHTML = `<span>Estilo</span>` + opts.map(o => `<button data-th="${o.id}"${o.id === (theme.default || "") ? ' class="on"' : ''}>${o.label}</button>`).join("");
    document.body.appendChild(sp);
    sp.querySelectorAll("button").forEach(b => {
      b.addEventListener("click", () => {
        document.body.dataset.theme = b.dataset.th;
        sp.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
      });
    });
  }
}
