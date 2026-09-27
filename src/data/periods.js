/**
 * The museum-wide timeline. `start`/`end` are approximate and are used only to
 * place a period on the timeline axis, not as historical claims.
 */
export const periods = [
  {
    id: 'precolonial',
    name: 'Pre-colonial',
    start: -5000,
    end: 1521,
    axisLabel: '5000 BCE',
    summary:
      'Thousands of islands, trading gold, pottery and cloth with China, Borneo, Champa and the Malay world long before any European mapped the archipelago. Writing, weaving and metalwork are already old traditions by the time outsiders arrive.',
    events: [
      { year: -710, label: 'A jar for a second burial is shaped at Manunggul, Palawan' },
      { year: 900, label: 'A debt is cleared and recorded on a copperplate near Laguna de Bay' },
      { year: 1000, label: 'Butuan, on Mindanao\u2019s northern coast, trades gold and porcelain with Song-dynasty China' },
      { year: 1380, label: 'Islam reaches Sulu with traders from Malacca and Borneo' },
    ],
  },
  {
    id: 'spanish-colonial',
    name: 'Spanish Colonial',
    start: 1521,
    end: 1872,
    axisLabel: '1521',
    summary:
      'Three and a half centuries of Spanish rule, a new religion, and a church-building, santo-carving visual culture centred on Manila. The Sultanates of Sulu and Maguindanao are never fully brought under Spanish control, and Mindanao\u2019s history runs on its own track through this period.',
    events: [
      { year: 1521, label: 'Magellan\u2019s fleet reaches the islands and is turned back at Mactan' },
      { year: 1565, label: 'Legazpi founds the first permanent Spanish settlement, in Cebu' },
      { year: 1571, label: 'Manila is made the capital of a new colony' },
      { year: 1600, label: 'Spanish expeditions against the Sultanate of Sulu are repeatedly repelled' },
    ],
  },
  {
    id: 'ilustrado',
    name: 'Ilustrado & Revolution',
    start: 1872,
    end: 1898,
    axisLabel: '1872',
    summary:
      'A generation of Filipino students in Madrid and Paris — the ilustrados — turn painting into a political argument. Their work, and the execution of Rizal, help set off a revolution against Spain.',
    events: [
      { year: 1872, label: 'Three priests \u2014 Gomburza \u2014 are executed in Cavite' },
      { year: 1884, label: 'Luna\u2019s Spoliarium wins a gold medal in Madrid' },
      { year: 1892, label: 'Rizal founds La Liga Filipina; the Katipunan forms weeks later' },
      { year: 1896, label: 'Rizal is executed at Bagumbayan; the Revolution begins' },
    ],
  },
  {
    id: 'american-colonial',
    name: 'American Period',
    start: 1898,
    end: 1946,
    axisLabel: '1898',
    summary:
      'Spain cedes the islands to the United States; a new school system, new patrons and a taste for sunlit rural scenes shape the next generation of painters. American forces meet sustained resistance in Muslim Mindanao years after Luzon is declared pacified.',
    events: [
      { year: 1898, label: 'Spain cedes the islands to the United States after the Battle of Manila Bay' },
      { year: 1906, label: 'The Moro Rebellion continues to resist American rule in Mindanao and Sulu' },
      { year: 1935, label: 'The Commonwealth is inaugurated; the U.P. Oblation is unveiled' },
      { year: 1945, label: 'Manila is destroyed in the battle to retake it from Japanese forces' },
    ],
  },
  {
    id: 'modern',
    name: 'Modernist',
    start: 1928,
    end: 1970,
    axisLabel: '1928',
    summary:
      'A postwar break from the golden-light realism of the previous generation. Cubism, abstraction and mural-scaled history painting arrive together, often in the same few art schools.',
    events: [
      { year: 1928, label: 'Victorio Edades exhibits Manila\u2019s first modernist paintings' },
      { year: 1938, label: 'The \u201cThirteen Moderns\u201d show together for the first time' },
      { year: 1948, label: 'The Neorealists, including Manansala and Ocampo, take up abstraction' },
    ],
  },
  {
    id: 'contemporary',
    name: 'Contemporary',
    start: 1970,
    end: 2026,
    axisLabel: '1970',
    summary:
      'National Artists working across sculpture, abstraction and social realism; a Martial Law decade that pushed much of it into allegory; and a present tense that includes both gallery painting and a living, still-practiced indigenous craft.',
    events: [
      { year: 1972, label: 'Martial law is declared; many artists turn to allegory and protest' },
      { year: 1976, label: 'Napoleon Abueva becomes the youngest National Artist for Sculpture' },
      { year: 1986, label: 'Davao City holds its first Kadayawan, a thanksgiving festival of its eleven tribes' },
      { year: 2026, label: 'This museum writes its first generated work' },
    ],
  },
]

export const periodsById = Object.fromEntries(periods.map((p) => [p.id, p]))

export function getPeriod(id) {
  return periodsById[id] ?? null
}

export function periodName(id) {
  return periodsById[id]?.name ?? 'Undated'
}
