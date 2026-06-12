# Paren la Mano en Qatar 2022 — La línea de tiempo

Sitio que ordena, partido a partido, toda la cobertura mundialista de **Paren la Mano** (Vorterix) desde Doha: los 19 programas, los 27 vlogs de Luquitas Rodríguez y las visitas a AFA Estudio, junto a los resúmenes oficiales de FIFA de cada partido de Argentina.

Del armado de la valija al ¡Muchaaachos! 🏆⭐⭐⭐

**Sitio:** [parenlamano.com.ar](https://parenlamano.com.ar)

## Cómo funciona

Es un sitio estático sin dependencias ni build: un solo `index.html` con HTML, CSS y JS vanilla.

- **Timeline por etapa**: previa, fase de grupos, octavos, cuartos, semi y la final, cada una con su marcador.
- **Filtros**: se puede mostrar/ocultar cada tipo de contenido (programa, vlog, AFA Estudio, resumen FIFA).
- **Carga liviana**: los videos usan *facades* (miniatura + botón); el iframe de YouTube se carga recién al hacer click, vía `youtube-nocookie.com`.

## Desarrollo local

No requiere nada especial:

```sh
open index.html
```

o con un servidor local:

```sh
python3 -m http.server 8000
```

## Publicación

Se publica con GitHub Pages desde la rama `main`. El dominio `parenlamano.com.ar` apunta al sitio mediante el archivo `CNAME`.
