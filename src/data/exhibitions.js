/**
 * Curated cross-sections of the permanent collection. Each pulls works from
 * several rooms around one thread rather than one period or one room.
 */
export const exhibitions = [
  {
    id: 'kadayawan-ani-pasasalamat',
    title: 'Kadayawan: Ani at Pasasalamat',
    tagline: 'Harvest and Thanksgiving — Mindanao\u2019s living traditions, old and new',
    dates: 'Ongoing',
    curator: 'Bahay Sining',
    statement:
      'Every August, Davao City gathers eleven tribes for one thanksgiving. This exhibition puts that festival beside the objects it celebrates — gold pulled from a Mindanao riverbank centuries before any colonizer arrived, cloth still woven from a pattern that has to be dreamed before it can be made, and a bird found nowhere else on earth. None of it is presented as finished history. Most of it is still being made, worn and danced today.',
    coverId: 'kadayawan-festival-davao',
    artworkIds: [
      'agusan-image',
      'tnalak-cloth',
      'panolong',
      'sarimanok',
      'bagobo-portrait',
      'dagmay-cloth',
      'pis-syabit',
      'kadayawan-festival-davao',
      'kadayawan-digital',
      'haring-ibon',
    ],
    timeline: [
      { year: 1100, label: 'The Agusan gold image is cast on Mindanao\u2019s northern coast' },
      { year: 1917, label: 'The image is found near Esperanza, Agusan del Sur' },
      { year: 1986, label: 'Davao City holds its first Kadayawan festival' },
      { year: 1995, label: 'The Philippine eagle is named the national bird' },
      { year: 2026, label: 'This museum draws a digital echo of the festival' },
    ],
  },
  {
    id: 'liwanag-mula-espoliaryo',
    title: 'Liwanag: Mula Espoliaryo Hanggang Ani',
    tagline: 'Light — from a Roman arena to a rice field',
    dates: 'Ongoing',
    curator: 'Bahay Sining',
    statement:
      'Two ways of using light to make an argument. Juan Luna and F\u00e9lix Hidalgo painted darkness — dead gladiators, persecuted saints — to make a Madrid audience uncomfortable on purpose, in 1884. A generation later, Fernando Amorsolo painted the opposite: backlit fields, golden and calm, that told a very different story about the same colonized country. Neither approach is more honest than the other. Both were strategies.',
    coverId: 'spoliarium',
    artworkIds: [
      'spoliarium',
      'virgenes-cristianas',
      'espana-y-filipinas',
      'triunfo-del-ciencia',
      'dalagang-bukid',
      'harvest-1930',
      'capitan-del-barrio',
    ],
    timeline: [
      { year: 1884, label: 'Luna and Hidalgo win gold and silver in Madrid' },
      { year: 1896, label: 'The Revolution begins; Rizal is executed' },
      { year: 1922, label: 'Amorsolo\u2019s rice-planting scenes become a national image' },
      { year: 1972, label: 'Amorsolo is named the first National Artist of the Philippines' },
    ],
  },
  {
    id: 'anyo-at-kalayaan',
    title: 'Anyo at Kalayaan',
    tagline: 'Form and Freedom — breaking with realism, twice',
    dates: 'Ongoing',
    curator: 'Bahay Sining',
    statement:
      'Victorio Edades was jeered in 1928 for painting like a Cubist. Forty years later, Martial Law pushed a new generation toward allegory instead of protest they couldn\u2019t say outright. This exhibition follows Philippine modernism from its first unpopular break with realism through to the National Artists who made abstraction, sculpture and quiet defiance part of the mainstream — including one, Ang Kiukok, who carried a harder edge out of Davao and into Manila\u2019s galleries.',
    coverId: 'hugis-at-bigat',
    artworkIds: [
      'ang-batayan',
      'tatlumput-tatlo',
      'salamin-ng-lungsod',
      'anyong-biomorpiko',
      'hugis-at-bigat',
      'guhit-ng-kulay',
      'poot',
      'habi-ng-kamalayan',
      'larawan-ng-bundok',
    ],
    timeline: [
      { year: 1928, label: 'Edades exhibits The Builders' },
      { year: 1938, label: 'The Thirteen Moderns show together for the first time' },
      { year: 1972, label: 'Martial law pushes many artists toward allegory' },
      { year: 2001, label: 'Ang Kiukok, born in Davao City, is named National Artist' },
    ],
  },
]

export const exhibitionsById = Object.fromEntries(exhibitions.map((e) => [e.id, e]))
