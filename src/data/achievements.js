/**
 * Achievements are read from progress, never written to it separately, so they
 * cannot drift out of sync with what actually happened.
 * `test` receives the progress object and returns a boolean.
 */
export const achievements = [
  {
    id: 'first-visit',
    name: 'Unang Hakbang',
    description: 'First Step — you walked through the entrance.',
    hint: 'Enter the museum.',
    test: (p) => p.entered === true,
  },
  {
    id: 'art-explorer',
    name: 'Palaboy ng Sining',
    description: 'Art Wanderer — ten works looked at properly.',
    hint: 'View 10 artworks.',
    test: (p) => p.viewedArtworks.length >= 10,
  },
  {
    id: 'curious-mind',
    name: 'Mausisa',
    description: 'Curious One — ten artists and traditions met.',
    hint: 'Discover 10 artists.',
    test: (p) => p.discoveredArtists.length >= 10,
  },
  {
    id: 'time-traveller',
    name: 'Manlalakbay sa Panahon',
    description: 'Time Traveller — five historical periods crossed, from pre-colonial gold to a generated pixel.',
    hint: 'View work from 5 different periods.',
    test: (p) => p.periods.length >= 5,
  },
  {
    id: 'night-owl',
    name: 'Kwago',
    description: 'Night Owl — you stayed after the gallery lights went down.',
    hint: 'Turn on Gabi sa Museo.',
    test: (p) => p.nightMode === true,
  },
  {
    id: 'curator',
    name: 'Kurador',
    description: 'Curator — you hung your own exhibition.',
    hint: 'Create an exhibition in Curator mode.',
    test: (p) => p.exhibitionsCreated >= 1,
  },
  {
    id: 'collector',
    name: 'Kolektor',
    description: 'Collector — five works saved to your own collection.',
    hint: 'Save 5 favourites.',
    test: (p) => p.favouritesPeak >= 5,
  },
  {
    id: 'full-circuit',
    name: 'Buong Bahay',
    description: 'The Whole House — every room walked, Mindanao included.',
    hint: 'Visit all 9 rooms.',
    test: (p) => p.visitedRooms.length >= 9,
  },
  {
    id: 'guided',
    name: 'Ginabayan',
    description: 'Guided — a tour taken from first stop to last.',
    hint: 'Finish a guided tour.',
    test: (p) => p.toursCompleted >= 1,
  },
  {
    id: 'deep-reader',
    name: 'Matiyagang Bisita',
    description: 'The Patient Visitor — twenty-five works, one after another.',
    hint: 'View 25 artworks.',
    test: (p) => p.viewedArtworks.length >= 25,
  },
]

export const achievementsById = Object.fromEntries(achievements.map((a) => [a.id, a]))
