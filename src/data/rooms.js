import { artworks } from './artworks'

/**
 * Rooms are the museum's physical organisation. `floor` positions them on the
 * map; `atmosphere` carries the wall colour and light each room is hung under.
 */
const roomDefs = [
  {
    id: 'ninuno',
    number: '01',
    name: 'Silid ng mga Ninuno',
    subtitle: 'The Ancestors — clay, gold and the first writing',
    description:
      'Pottery, gold and script from across the archipelago, made long before Magellan ever saw these islands. A jar built to carry the dead, a debt cleared in Kawi script, a gold image pulled from a Mindanao riverbank — evidence of trade networks and beliefs that owed nothing to Europe.',
    periodLabel: '5000 BCE — 1521',
    periodId: 'precolonial',
    atmosphere: { wall: '#E8DCC0', light: 'warm', mood: 'Low case-lighting, like a vault' },
    floor: { row: 1, col: 1, span: 1 },
  },
  {
    id: 'mindanao',
    number: '02',
    name: 'Silid ng Katutubong Mindanao',
    subtitle: 'Indigenous Mindanao — woven, carved and cast, still made today',
    description:
      'The T\u2019boli of Lake Sebu, the Maranao of Lanao, the Bagobo and Mandaya of Davao, the Tausug of Sulu — traditions that predate the Spanish and never stopped. This is not a room of relics: T\u2019nalak is still woven from a dreamed pattern, okir is still carved in Tugaya, and the eleven tribes honoured every August at Davao\u2019s Kadayawan festival are the same peoples represented on these walls.',
    periodLabel: 'Living tradition',
    periodId: 'precolonial',
    atmosphere: { wall: '#7C3420', light: 'warm', mood: 'Firelight and natural dye' },
    floor: { row: 1, col: 2, span: 1 },
  },
  {
    id: 'debosyon',
    number: '03',
    name: 'Silid ng Debosyon',
    subtitle: 'Devotion — three centuries of santos and retablos',
    description:
      'Spanish rule arrived with a religion, and Filipino hands did the carving and painting that filled its churches. Santos, retablos and the earliest Filipino watercolours sit together here — devotional work made by artisans whose names, in most cases, no record kept.',
    periodLabel: '1521 — 1872',
    periodId: 'spanish-colonial',
    atmosphere: { wall: '#2A211A', light: 'low', mood: 'Candlelight and gold leaf' },
    floor: { row: 1, col: 3, span: 1 },
  },
  {
    id: 'ilustrado',
    number: '04',
    name: 'Silid Ilustrado',
    subtitle: 'The Ilustrados — painters who studied abroad and argued for a nation',
    description:
      'Juan Luna and Félix Resurrección Hidalgo took Philippine painting to Madrid and won, at a moment when winning was itself an argument for Filipino equality. Their canvases, and the monuments raised to the revolution that followed, anchor this room.',
    periodLabel: '1872 — 1898',
    periodId: 'ilustrado',
    atmosphere: { wall: '#3B2417', light: 'dim', mood: 'Salon lighting, deep reds' },
    floor: { row: 2, col: 1, span: 1 },
  },
  {
    id: 'ginintuang-liwanag',
    number: '05',
    name: 'Silid ng Ginintuang Liwanag',
    subtitle: 'Golden Light — the countryside, painted at high noon',
    description:
      'Fernando Amorsolo\u2019s backlit fields defined how the Philippines pictured itself for half a century — rice planting, harvest, a country captain at rest. Bright, optimistic and occasionally the only record we have of a costume or a custom.',
    periodLabel: '1898 — 1946',
    periodId: 'american-colonial',
    atmosphere: { wall: '#D8B25C', light: 'warm', mood: 'Full daylight' },
    floor: { row: 2, col: 2, span: 1 },
  },
  {
    id: 'bagong-anyo',
    number: '06',
    name: 'Silid ng Bagong Anyo',
    subtitle: 'New Form — the break from realism',
    description:
      'Victorio Edades brought Cubism and Expressionism back from the United States and was jeered for it; a decade later the "Thirteen Moderns" made the break permanent. The paintings that mattered here are still copyrighted, so this room shows generated studies made in their spirit rather than the works themselves — each one labelled plainly as such.',
    periodLabel: '1928 — 1970',
    periodId: 'modern',
    atmosphere: { wall: '#20393C', light: 'gallery', mood: 'White-cube daylight' },
    floor: { row: 2, col: 3, span: 1 },
  },
  {
    id: 'pambansang-alagad',
    number: '07',
    name: 'Silid ng mga Pambansang Alagad',
    subtitle: 'The National Artists — sculpture, abstraction and the Cordillera',
    description:
      'Guillermo Tolentino and Napoleon Abueva in bronze and stone; Manansala, Ocampo, Legaspi, Luz, Ang Kiukok and Joya in paint; BenCab\u2019s decades-long attention to the Cordillera. The public monuments here are shown as photographed; the paintings, still under copyright, are represented by generated studies made in tribute.',
    periodLabel: '1950s — present',
    periodId: 'contemporary',
    atmosphere: { wall: '#33261C', light: 'gallery', mood: 'Even museum light' },
    floor: { row: 3, col: 1, span: 1 },
  },
  {
    id: 'liwanag-anino',
    number: '08',
    name: 'Silid ng Liwanag at Anino',
    subtitle: 'Light and Shadow — the archipelago in photographs',
    description:
      'Manila streets before the war, Manila streets after it, and a festival street in Davao a lifetime later. Photography is where the country\u2019s hardest years and its ongoing celebrations sit side by side.',
    periodLabel: '1900 — present',
    periodId: 'american-colonial',
    atmosphere: { wall: '#1E1B18', light: 'low', mood: 'Darkroom red' },
    floor: { row: 3, col: 2, span: 1 },
  },
  {
    id: 'ngayon',
    number: '09',
    name: 'Silid ng Ngayon',
    subtitle: 'Room of Now — made for this project, seeded fresh each time',
    description:
      'Nothing here is a historical object. Every piece is generated in your browser — a harvest festival, a bird found only in Mindanao\u2019s rainforest, a weaving pattern translated into code — and labelled as a demonstration, not a discovery.',
    periodLabel: '2025 — present',
    periodId: 'contemporary',
    atmosphere: { wall: '#10181D', light: 'low', mood: 'Screen-lit' },
    floor: { row: 3, col: 3, span: 1 },
  },
]

export const rooms = roomDefs.map((room) => {
  const held = artworks.filter((item) => item.roomId === room.id)
  return {
    ...room,
    count: held.length,
    featuredId: held[0]?.id ?? null,
    featured: held[0] ?? null,
  }
})

export const roomsById = Object.fromEntries(rooms.map((room) => [room.id, room]))

export function getRoom(id) {
  return roomsById[id] ?? null
}
