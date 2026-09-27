# Bahay Sining — Philippine Digital Museum

A virtual museum of Philippine art, history and culture, built as a single-page React app —
cinematic entrance, nine themed rooms, an immersive zoom/pan artwork viewer, guided tours, a
"Curator mode" for building your own exhibitions, and a personal journey/achievements system.
Everything is kept in your browser's local storage; there is no backend and no account.

This is a Philippine-focused companion to an earlier, Western-facing build of the same concept —
same architecture, entirely new content, palette and typography, and a deliberate weighting toward
Mindanao and Davao culture that a Manila-centred survey usually leaves out.

## Running it

```bash
npm install
npm run dev
```

Then open the local address Vite prints (usually `http://localhost:5173`).

To build a static production bundle:

```bash
npm run build
npm run preview   # serves the built dist/ folder locally
```

## Stack

React 18 · Vite · Tailwind CSS · Framer Motion · React Router · Recharts · Lucide icons · the Web
Audio API · browser `localStorage`.

## The nine rooms

1. **Silid ng mga Ninuno** — The Ancestors. Pre-colonial pottery, gold and script.
2. **Silid ng Katutubong Mindanao** — Indigenous Mindanao. T'boli t'nalak, Maranao okir and
   sarimanok, Bagobo, Mandaya and Tausug craft — living traditions, not relics.
3. **Silid ng Debosyon** — Devotion. Three centuries of santos, retablos and early watercolours.
4. **Silid Ilustrado** — The Ilustrados. Juan Luna and Félix Hidalgo, painting a political
   argument in Madrid.
5. **Silid ng Ginintuang Liwanag** — Golden Light. Fernando Amorsolo's backlit countryside.
6. **Silid ng Bagong Anyo** — New Form. The Modernists, represented as generated tribute studies
   rather than reproductions (see **Copyright**, below).
7. **Silid ng mga Pambansang Alagad** — The National Artists. Sculpture photographed in public,
   paintings represented as generated tribute studies.
8. **Silid ng Liwanag at Anino** — Light and Shadow. Historic photography, Manila to Davao.
9. **Silid ng Ngayon** — Room of Now. Fully generated pieces made for this project — a Kadayawan
   study, a Philippine eagle tribute, a digital echo of Mindanao weaving.

## How it's organised

```
src/
  data/         The collection: 45 works, 28 artists and traditions, 9 rooms, 6 periods,
                3 exhibitions, 4 guided tours, 10 achievements, 5 ambient tracks.
  hooks/        Standalone store hooks (favourites, recently viewed, progress,
                settings, audio, curator exhibitions), each backed by one
                namespaced localStorage key ("bahay-sining:*").
  context/      MuseumProvider composes the hooks above into one context and
                adds toasts, the command palette, compare tray, achievement unlocking.
  components/   UI grouped by what it's for: artwork/, gallery/, museum/,
                navigation/, search/, timeline/, audio/, layout/, ui/.
  pages/        One file per route, wired up with React.lazy in App.jsx.
  utils/        images.js, search.js, recommendations.js, dateUtils.js,
                storage.js (the only file that touches localStorage directly).
```

## Design

A different palette and typeface from the original build, drawn from Philippine material culture
rather than reused: **capiz** (pearled shell, the warm daylight wall), **narra** (the national
hardwood, the dark ink/frame tone), plus terracotta, azure and an Amorsolo-gold accent. Display type
is Fraunces; UI type is Work Sans.

## Copyright — how this museum handles it

Real Wikimedia Commons photographs are used only for works old enough, or public enough, to be
safely in the public domain: pre-colonial artifacts, colonial devotional art, the Ilustrados,
Amorsolo's era, and photographed public monuments (the Bonifacio Monument, the U.P. Oblation).

Twentieth-century Philippine paintings that are very likely still under copyright — the Modernists
and most National Artists, from Victorio Edades to BenCab — are **not reproduced**. Instead, each is
represented by a small generated abstract study made in the artist's general spirit, clearly labelled
as a tribute rather than a copy, both on the artwork's own label and in its historical-context text.
The artist's biography and real career stay fully factual throughout; only the image is generated.

As in the original build, every artwork image also has a deterministic generated-SVG fallback, so a
renamed or moved Commons file shows a placeholder — never a broken-image icon.

## Data and privacy

Favourites, recently viewed works, your own curated exhibitions, achievement progress and your
settings are all stored under namespaced keys in this browser's `localStorage` — nothing is sent to
a server. Settings → Data lets you export everything as a JSON backup, re-import it (validated
before anything is written), or clear it all.
