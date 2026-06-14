# Paren la Mano — Líneas de tiempo

Galería de líneas de tiempo de las coberturas de **Paren la Mano** (Vorterix), ordenadas
partido a partido: programas, vlogs, visitas a AFA Estudio y los resúmenes oficiales de cada
partido. El primer evento es **Qatar 2022** (del armado de la valija al ¡Muchaaachos! 🏆⭐⭐⭐);
la estructura está pensada para sumar más eventos (ej. Mundial de Clubes).

**Sitio:** [parenlamano.com.ar](https://parenlamano.com.ar)

## Cómo funciona

Sitio estático, sin dependencias ni build: HTML, CSS y JS vanilla. El **motor** de render es
compartido y los **datos + la paleta** viven en un archivo por evento, así sumar una línea de
tiempo nueva no toca el motor.

```
índice (portada) ─ index.html  +  data/catalog.js  +  assets/home.css
motor compartido ─ assets/engine.js  +  assets/base.css  +  assets/themes.css
un evento ──────── <id>/index.html  (shell)  +  data/<id>.js  (datos + tema)
```

- **Portada** (`index.html`): lista los eventos como tarjetas desde `data/catalog.js`, cada una
  con su propia paleta, y enlaza a su carpeta.
- **Motor** (`assets/engine.js`): `renderEvent(EVENT)` arma header, filtros, timeline,
  resultados del día, tablas de posiciones, cuadro de eliminatorias y navegación, todo desde el
  objeto del evento. Las posiciones/bracket son opcionales (si el evento no los trae, no se dibujan).
- **Tema por evento**: cada `data/<id>.js` define sus tokens de color; el motor los inyecta.
  Los temas visuales reutilizables (`album`, `híbrido`) están en `assets/themes.css`.
- **Carga liviana**: los videos usan *facades* (miniatura + botón); el iframe de YouTube se carga
  recién al hacer click.

## Sumar un evento nuevo

1. Crear `data/<id>.js` con `window.PLM_EVENT = { ... }` (ver `data/qatar-2022.js` como modelo:
   `meta`, `theme`, `categories`, `data`, y opcionalmente `results`/`groups`/`bracket`/`flags`).
2. Crear `<id>/index.html` copiando el shell de `qatar-2022/index.html` y apuntando a `data/<id>.js`.
3. Agregar una entrada en `data/catalog.js` para que aparezca en la portada.

## Desarrollo local

Requiere un servidor (los archivos se cargan por `fetch`/`<script src>`):

```sh
python3 -m http.server 8000
```

Y abrir <http://localhost:8000/>.

## Publicación

Se publica con GitHub Pages desde la rama `main`. Cuando el dominio `parenlamano.com.ar` quede
delegado, se restaura el archivo `CNAME` para servirlo ahí.
