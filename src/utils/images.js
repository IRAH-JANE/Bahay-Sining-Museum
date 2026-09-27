/**
 * Image helpers.
 *
 * Artwork photographs are served from Wikimedia Commons through the stable
 * Special:FilePath redirect, which resizes on the fly. No API key, no backend.
 * If a file is ever renamed upstream, <SmartImage> falls back to a generated
 * museum placeholder instead of a broken-image icon.
 */
const COMMONS = 'https://commons.wikimedia.org/wiki/Special:FilePath/'

export function wiki(fileName, width = 1280) {
  return `${COMMONS}${encodeURIComponent(fileName)}?width=${width}`
}

/** Deterministic 32-bit hash so the same artwork always gets the same placeholder. */
export function hashString(value = '') {
  let hash = 2166136261
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return Math.abs(hash)
}

/**
 * A pigment palette drawn from the artwork's own id, used for the loading
 * state and for the placeholder shown when a photograph cannot be reached.
 */
export function pigment(seed) {
  const h = hashString(seed)
  const base = h % 360
  return {
    a: `hsl(${base} 34% 24%)`,
    b: `hsl(${(base + 38) % 360} 42% 48%)`,
    c: `hsl(${(base + 190) % 360} 22% 82%)`,
    angle: (h % 60) - 30,
  }
}

/** An inline SVG "canvas" used for the digital-art room and for image failures. */
export function generatedCanvas(seed, { title = '', variant = 'wash' } = {}) {
  const { a, b, c, angle } = pigment(seed)
  const h = hashString(seed)
  const scene = originalStudy(seed, h)
  const shapes =
    variant === 'grid'
      ? Array.from({ length: 24 }, (_, i) => {
          const x = (i % 6) * 100 + 40
          const y = Math.floor(i / 6) * 120 + 60
          const size = 24 + ((h >> i) % 46)
          const op = 0.18 + ((h >> (i + 3)) % 60) / 100
          return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${i % 3 ? b : c}" opacity="${op.toFixed(2)}"/>`
        }).join('')
      : variant === 'orbit'
        ? Array.from({ length: 14 }, (_, i) => {
            const r = 30 + i * 22
            const op = 0.5 - i * 0.03
            return `<circle cx="${300 + ((h >> i) % 40)}" cy="280" r="${r}" fill="none" stroke="${i % 2 ? b : c}" stroke-width="${1 + (i % 3)}" opacity="${op.toFixed(2)}"/>`
          }).join('')
        : /* 'wash': soft overlapping bands, blurred at the edges so it reads as a
             painted horizon rather than a row of loading-skeleton bars. Also the
             fallback shown when a real photograph fails to load, so it needs to
             look unmistakably like a piece of art, not an in-progress UI state. */
          Array.from({ length: 6 }, (_, i) => {
            const hue = (h + i * 47 + ((h >> (i + 2)) % 25)) % 360
            const sat = 34 + ((h >> i) % 34)
            const light = 30 + ((h >> (i + 3)) % 36)
            const y = -30 + i * 108 + ((h >> (i + 1)) % 40)
            const bandH = 70 + ((h >> (i + 6)) % 90)
            const op = 0.55 + ((h >> (i + 4)) % 30) / 100
            return `<rect x="-60" y="${y}" width="720" height="${bandH}" rx="${bandH / 2}" fill="hsl(${hue} ${sat}% ${light}%)" opacity="${op.toFixed(2)}" filter="url(#soften)"/>`
          }).join('')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 560" width="600" height="560" role="img" aria-label="${escapeXml(title)}">
    <defs>
      <linearGradient id="g" gradientTransform="rotate(${angle})">
        <stop offset="0%" stop-color="${a}"/>
        <stop offset="100%" stop-color="${b}"/>
      </linearGradient>
      <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3"/><feColorMatrix type="saturate" values="0"/></filter>
      <filter id="soften" x="-30%" y="-100%" width="160%" height="300%"><feGaussianBlur stdDeviation="16"/></filter>
    </defs>
    <rect width="600" height="560" fill="url(#g)"/>
    ${scene || shapes}
    <rect width="600" height="560" filter="url(#grain)" opacity="0.12"/>
  </svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

// Original, locally rendered illustrations for the studio's generated studies.
// These are visual interpretations of their subjects, not reproductions of the
// referenced artists' paintings or images scraped from search results.
function originalStudy(seed, h) {
  const fields = `<path d="M0 340 Q130 285 260 345 T600 320V560H0Z" fill="#667443"/><path d="M0 405 Q150 350 300 410 T600 385V560H0Z" fill="#ad914b"/><path d="M0 475 Q180 420 360 480 T600 455V560H0Z" fill="#d0ad5f"/><path d="M0 518 Q160 470 320 515T600 500" fill="none" stroke="#ebd08a" stroke-width="5" opacity=".6"/>`
  const person = (x, y, color = '#aa4932', scale = 1) => `<g transform="translate(${x} ${y}) scale(${scale})"><circle cy="-51" r="12" fill="#986640"/><path d="M-15 -39 Q0 -50 15 -39L20 2H-20Z" fill="${color}"/><path d="M-12 0L-17 45M12 0L20 45M-14 -29L-35 -4M14 -29L35 -10" fill="none" stroke="#48362b" stroke-width="8" stroke-linecap="round"/><path d="M-14 -39Q0 -61 17 -40" fill="none" stroke="#ebc66a" stroke-width="7"/></g>`
  const landscape = `<circle cx="485" cy="105" r="52" fill="#f3cb76" opacity=".9"/><path d="M0 300L100 185 175 280 280 155 400 290 495 195 600 285V400H0Z" fill="#68724e" opacity=".8"/><path d="M0 315Q140 265 260 330T600 305V560H0Z" fill="#827b47"/>${fields}<path d="M45 300L70 235 95 300M85 300L105 245 126 300" fill="#4f4934"/><path d="M51 300h70v50H51z" fill="#8d5336"/><path d="M38 302l49-38 50 38" fill="#59402f"/>`
  const palay = `<g stroke="#e2c568" stroke-width="4" fill="none">${Array.from({ length: 18 }, (_, i) => { const x = 25 + i * 34; const top = 145 + ((h >> (i % 16)) % 95); return `<path d="M${x} 560Q${x - 5} 360 ${x + ((i % 5) - 2) * 13} ${top}"/><path d="M${x + 5} ${top + 25}l20 -12m-24 30l-20 -15m25 3l19 -16"/>` }).join('')}</g>`
  const bird = `<g transform="translate(300 265)"><path d="M-95 5Q-80 -85 8 -72Q80 -66 82 9Q67 67 -5 75Q-74 64 -95 5Z" fill="#d38d31" stroke="#553b2d" stroke-width="7"/><path d="M-58 -26Q0 -110 50 -32Q10 12 -40 28Z" fill="#b94f32"/><path d="M70 -12l78 23 -76 22Z" fill="#e2c265"/><circle cx="36" cy="-31" r="7" fill="#28211c"/><path d="M-68 55l-22 91m62 -84l-7 84m38 -89l32 89" stroke="#553b2d" stroke-width="9"/></g>`
  const scenes = {
    'harvest-1930': `${landscape}${palay}${person(230, 414, '#a74632', 1.25)}${person(355, 445, '#e3bd69', 1.05)}<path d="M206 366l65 -40m68 50l-40 -25" stroke="#e7c96e" stroke-width="8" stroke-linecap="round"/>`,
    'rice-planting-delarosa': `${landscape}${[170, 275, 390, 485].map((x, i) => `<g transform="translate(${x} ${365 + (i % 2) * 28})"><circle r="10" fill="#76553b"/><path d="M-20 0q20 -28 40 0l22 14h-84z" fill="#e8d4a8"/><path d="M-35 15h70" stroke="#554939" stroke-width="7"/></g>`).join('')}<path d="M50 485h500M30 520h540" stroke="#e5cf91" stroke-width="5" opacity=".7"/>`,
    'maiden-palay-stalks': `${landscape}${palay}<g transform="translate(310 390)"><circle cy="-80" r="21" fill="#96633f"/><path d="M-28 -55Q0 -70 28 -55L38 55H-38Z" fill="#ca6041"/><path d="M-24 55l-8 60m52 -60l11 60" stroke="#44392e" stroke-width="10"/><path d="M-37 -52Q0 -111 38 -52" fill="#e8c56d"/><path d="M-28 -35L-95 -2M28 -35L86 -84" stroke="#96633f" stroke-width="10"/><path d="M82 -90q30 20 6 52" fill="none" stroke="#e7c567" stroke-width="6"/></g>`,
    'dalagang-bukid': `${landscape}${palay}<g transform="translate(315 395)"><circle cy="-72" r="20" fill="#98643f"/><path d="M-27 -49Q0 -64 27 -49L50 55H-50Z" fill="#d84e3e"/><path d="M-42 -20L-93 14m135 -34l54 -31" stroke="#98643f" stroke-width="10"/><path d="M-20 55l-14 63m47 -63l19 63" stroke="#45372e" stroke-width="10"/><path d="M-36 -50Q0 -110 38 -50" fill="#e6c36b"/><path d="M-50 55Q0 80 50 55" fill="#eed39a"/></g>`,
    'capitan-del-barrio': `${landscape}<path d="M180 330v-58h240v58M205 272l95-70 95 70" fill="#8c4b35" stroke="#593d30" stroke-width="9"/><g transform="translate(300 395)"><circle cy="-72" r="19" fill="#996642"/><path d="M-35 -50h70l33 100H-68Z" fill="#e8ddc4" stroke="#5a4939" stroke-width="6"/><path d="M-35 -66q35 -28 70 0l-8 10h-54z" fill="#302d29"/><path d="M-30 50l-14 78m75 -78l17 78" stroke="#493a30" stroke-width="11"/><path d="M-28 -26l-42 26m98 -26l49 13" stroke="#996642" stroke-width="10"/></g>`,
    'kadayawan': `${landscape}<g>${Array.from({ length: 8 }, (_, i) => `<path d="M${50 + i * 70} 560Q${80 + i * 65} 300 ${30 + i * 72} 80" fill="none" stroke="hsl(${(h + i * 45) % 360} 70% 60%)" stroke-width="12" opacity=".82"/>`).join('')}</g><circle cx="300" cy="230" r="70" fill="#f2c55f" opacity=".8"/>`,
    'haring-ibon': `${landscape}${bird}<path d="M220 180l-32-60m72 55l8-77m64 94l54-55m-165 138l-70 10m168 -6l65 30" stroke="#e5c15f" stroke-width="9"/>`,
    'habi-digital': `<rect width="600" height="560" fill="#244b49"/>${Array.from({ length: 14 }, (_, i) => `<path d="M${-200 + i * 65} 0L${200 + i * 65} 560M${200 + i * 65} 0L${-200 + i * 65} 560" stroke="hsl(${(h + i * 17) % 360} 47% 67%)" stroke-width="${i % 3 === 0 ? 9 : 3}" opacity=".65"/>`).join('')}<path d="M300 45l205 235-205 235L95 280Z" fill="none" stroke="#e7c878" stroke-width="9"/>`,
    'barangay-2-0': `<rect width="600" height="560" fill="#233d55"/>${Array.from({ length: 12 }, (_, i) => { const x = 65 + (i % 4) * 130; const y = 75 + Math.floor(i / 4) * 155; return `<rect x="${x}" y="${y}" width="96" height="100" rx="8" fill="hsl(${(h + i * 29) % 360} 48% 55%)"/><path d="M${x + 20} ${y + 30}h56m-56 22h56m-56 22h35" stroke="#f0dfb9" stroke-width="6" opacity=".8"/>` }).join('')}`,
  }
  if (scenes[seed]) return scenes[seed]
  if (seed.startsWith('dalagang')) return `${landscape}${palay}${person(300, 420)}`

  // Distinct, deliberately composed modernist image for the remaining studio
  // studies; the id shifts the forms so each artwork has its own visual.
  const cx = 170 + (h % 260)
  const cy = 150 + ((h >>> 8) % 250)
  const palette = ['#e7c77a', '#a84e3b', '#315d56', '#d7bca0', '#596c8d']
  const shards = Array.from({ length: 9 }, (_, i) => {
    const x = 45 + ((h >>> (i % 16)) % 480)
    const y = 50 + ((h >>> ((i + 5) % 16)) % 430)
    const w = 32 + ((h >>> ((i + 8) % 16)) % 105)
    const ht = 28 + ((h >>> ((i + 11) % 16)) % 115)
    return `<path d="M${x} ${y + ht}L${x + w / 2} ${y}L${x + w} ${y + ht * .72}Z" fill="${palette[i % palette.length]}" opacity="${i % 2 ? '.76' : '.92'}"/>`
  }).join('')
  return `<rect width="600" height="560" fill="#302b31"/><path d="M0 410Q155 300 310 390T600 350V560H0Z" fill="#54604b" opacity=".55"/><circle cx="${cx}" cy="${cy}" r="105" fill="${palette[h % palette.length]}" opacity=".75"/><path d="M35 470Q190 80 520 100Q365 210 565 475Q330 325 35 470Z" fill="${palette[(h >>> 4) % palette.length]}" opacity=".65"/>${shards}<path d="M0 510Q180 430 340 490T600 460" fill="none" stroke="#efdda9" stroke-width="5" opacity=".7"/>`
}

function escapeXml(value) {
  return String(value).replace(/[<>&"']/g, (ch) => `&#${ch.charCodeAt(0)};`)
}
