/**
 * Guided routes through the collection. Each stop references an artwork id
 * and carries a short spoken-style note rather than the full catalogue entry.
 */
export const tours = [
  {
    id: 'beginner',
    name: 'Unang Pagbisita',
    length: '6 stops · about 5 minutes',
    description:
      'The shortest possible walk through the museum — one stop per room, roughly, aimed at someone who has never been.',
    stops: [
      { id: 'manunggul-jar', note: 'Start here \u2014 a boat built to carry a soul, shaped three thousand years ago.' },
      { id: 'tnalak-cloth', note: 'A cloth pattern that has to be dreamed before a weaver is allowed to make it.' },
      { id: 'spoliarium', note: 'The painting that made a Madrid audience call a Filipino a great painter, in public, in 1884.' },
      { id: 'dalagang-bukid', note: 'The backlit golden style that became, for decades, what Filipino painting was supposed to look like.' },
      { id: 'up-oblation', note: 'Look for the outstretched arms \u2014 every U.P. graduation photo has this statue somewhere in it.' },
      { id: 'kadayawan-festival-davao', note: 'The same Mindanao cultures from two rooms back, still dancing every August.' },
    ],
  },
  {
    id: 'kasaysayan',
    name: 'Maikling Kasaysayan',
    length: '8 stops · about 8 minutes',
    description: 'A short walk through five hundred years, room by room, in order.',
    stops: [
      { id: 'laguna-copperplate', note: 'The oldest known written document from the islands \u2014 a cleared debt, not a decree.' },
      { id: 'agusan-image', note: 'Solid gold, pulled from a Mindanao riverbank, centuries older than any Spanish map of these islands.' },
      { id: 'santo-nino-cebu', note: 'Philippine Christianity\u2019s oldest surviving relic, reportedly found unburned in a fire.' },
      { id: 'spoliarium', note: '1884: a Filipino wins Spain\u2019s own national painting competition.' },
      { id: 'harvest-1930', note: 'The American-period image of a peaceful, productive countryside \u2014 partly true, partly sold.' },
      { id: 'ang-batayan', note: '1928: the break from realism the Manila art establishment did not want yet.' },
      { id: 'poot', note: 'Ang Kiukok carries a harder-edged modernism out of Davao and into the national conversation.' },
      { id: 'panahon', note: 'And finally, a work with no original object behind it at all \u2014 just a seed and some code.' },
    ],
  },
  {
    id: 'bagong-anyo-tour',
    name: 'Bagong Anyo',
    length: '6 stops · about 6 minutes',
    description: 'The modernists and National Artists, room seven and its neighbour, back to back.',
    stops: [
      { id: 'ang-batayan', note: 'Edades, jeered in 1928 for painting like this.' },
      { id: 'salamin-ng-lungsod', note: 'Manansala\u2019s "transparent cubism," laid over an ordinary market scene.' },
      { id: 'anyong-biomorpiko', note: 'H.R. Ocampo\u2019s shapes \u2014 built from a vocabulary he mostly invented himself.' },
      { id: 'hugis-at-bigat', note: 'Legaspi painted labourers as if they were load-bearing structure.' },
      { id: 'guhit-ng-kulay', note: 'Arturo Luz, paring a dancer down to a handful of lines.' },
      { id: 'larawan-ng-bundok', note: 'BenCab\u2019s decades of attention to the Cordillera highlands, far from Manila.' },
    ],
  },
  {
    id: 'sikat',
    name: 'Ang mga Sikat',
    length: '5 stops · about 5 minutes',
    description: 'The five works most likely to already be familiar, whatever else you know about Philippine art.',
    stops: [
      { id: 'spoliarium', note: 'The one that ends up in every Philippine history textbook.' },
      { id: 'dalagang-bukid', note: 'Amorsolo\u2019s golden light, reproduced on more calendars than anyone ever counted.' },
      { id: 'manunggul-jar', note: 'Turn over a 1000-peso bill sometime \u2014 it\u2019s on the back.' },
      { id: 'sarimanok', note: 'Mindanao\u2019s legendary bird, now recognized as a symbol nationwide.' },
      { id: 'up-oblation', note: 'If a photo says "U.P.," this statue is usually somewhere in the frame.' },
    ],
  },
]

export const toursById = Object.fromEntries(tours.map((t) => [t.id, t]))
