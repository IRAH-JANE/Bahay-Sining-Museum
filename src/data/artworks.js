import { wiki, generatedCanvas } from '../utils/images'

/**
 * The collection.
 *
 * Real photographs are used only for works confirmed old enough, or public
 * enough, to be safely in the public domain — pre-colonial artifacts and
 * living indigenous crafts (documentary photos, not individually copyrighted
 * art), colonial devotional art, the Ilustrados (Luna d.1899, Hidalgo d.1913),
 * Fabian de la Rosa (d.1937, PD well before the 1996 URAA cutoff), and public
 * monuments under freedom-of-panorama. Everything from Amorsolo onward — his
 * paintings are still held by the Fernando C. Amorsolo Art Foundation — through
 * the Modernists and National Artists is represented as generated studies made
 * in tribute, never as reproductions; every such work says so plainly in its
 * own record.
 */

const work = ({ file, thumbWidth = 760, fullWidth = 1600, ...rest }) => ({
  ...rest,
  image: file ? wiki(file, fullWidth) : null,
  thumb: file ? wiki(file, thumbWidth) : null,
  sourceFile: file ?? null,
  generated: false,
})

const generated = ({ variant, ...rest }) => ({
  ...rest,
  image: generatedCanvas(rest.id, { title: rest.title, variant }),
  thumb: generatedCanvas(rest.id, { title: rest.title, variant }),
  sourceFile: null,
  generated: true,
})

export const artworks = [
  /* ------------------------------ Silid ng mga Ninuno ---------------------- */
  work({
    id: 'manunggul-jar',
    title: 'Manunggul Jar',
    artist: 'Unrecorded potter, Manunggul',
    artistId: 'anon-manunggul',
    year: -800,
    yearText: 'c. 890–710 BCE',
    period: 'precolonial',
    medium: 'Ceramic',
    materials: 'Earthenware with hematite slip',
    category: 'Burial vessel',
    region: 'Palawan',
    dimensions: '66.5 × 51 cm',
    location: 'National Museum of Anthropology, Manila',
    roomId: 'ninuno',
    file: 'Manunggul Jar.jpg',
    description:
      'A secondary-burial jar found in the Tabon Caves of Palawan, its lid topped by two figures seated in a boat, one steering with a paddle. The boat is generally read as a vessel for the soul\u2019s journey to the afterlife.',
    historicalContext:
      'Excavated in 1962 by Robert Fox and his team, the jar is dated by association to the late Neolithic, roughly 890–710 BCE. It is now a National Cultural Treasure and appears on the reverse of the Philippine 1000-peso banknote.',
    curatorNote:
      'Interpretation: the steersman\u2019s arms are crossed over the chest, a burial posture found elsewhere in the region — read by some as the boat itself performing that gesture on behalf of the dead.',
    tags: ['pre-colonial', 'pottery', 'palawan', 'burial', 'famous'],
  }),
  work({
    id: 'agusan-image',
    title: 'Agusan Image (the Golden Tara)',
    artist: 'Unrecorded goldsmith, Butuan',
    artistId: 'anon-agusan',
    year: 1100,
    yearText: 'c. 9th–13th century',
    period: 'precolonial',
    medium: 'Sculpture',
    materials: '21-karat gold',
    category: 'Devotional figure',
    region: 'Agusan del Sur, Mindanao',
    dimensions: '17.8 cm high, 2 kg',
    location: 'Field Museum of Natural History, Chicago',
    roomId: 'ninuno',
    file: 'Filippine, provincia di agusan, immagine hindu, statuetta in oro massiccio, xiii secolo.jpg',
    description:
      'A solid-gold seated female figure, richly ornamented, found in 1917 on the bank of the Wawa River near Esperanza, Agusan del Sur. Scholars have proposed it depicts a Hindu-Buddhist deity — commonly a Tara — reflecting Butuan\u2019s trade contact with Java and Sumatra.',
    historicalContext:
      'Butuan was a gold-trading polity on Mindanao\u2019s northern coast, in documented contact with Song-dynasty China by the 11th century. The image was reportedly kept for generations by a Manobo family before its 1917 discovery; it has been held at Chicago\u2019s Field Museum since the 1920s, and its return has been the subject of ongoing discussion between the museum and Philippine institutions.',
    curatorNote:
      'Interpretation: whatever its exact religious identity, the image is direct physical evidence that Mindanao was part of a Hindu-Buddhist trading world centuries before any Spanish or American map of the islands existed.',
    tags: ['pre-colonial', 'mindanao', 'gold', 'butuan', 'famous'],
  }),
  work({
    id: 'laguna-copperplate',
    title: 'Laguna Copperplate Inscription',
    artist: 'Unrecorded scribe',
    artistId: 'anon-lci',
    year: 900,
    yearText: '900 CE',
    period: 'precolonial',
    medium: 'Inscription',
    materials: 'Copper',
    category: 'Legal document',
    region: 'Manila Bay area',
    dimensions: '20 × 30 cm (approx.)',
    location: 'National Museum of the Philippines',
    roomId: 'ninuno',
    file: 'Laguna Copperplate Inscription.jpg',
    description:
      'A copper document, dated within its own text to the Saka year 822 (900 CE), recording that a debt owed by a man named Namwaran has been cleared in full. It is written in Kawi script mixed with Old Malay, Old Javanese and Sanskrit loanwords.',
    historicalContext:
      'Found in 1989 near the mouth of the Lumbang River in Laguna, the plate is the earliest known written document from the Philippines and shows the pre-colonial archipelago already using an Indic-derived legal and administrative language shared with Java and Bali.',
    curatorNote:
      'Interpretation: a debt receipt is a strange thing to become a national treasure, but that is arguably the point — it proves ordinary law and commerce, not just kings and gods, wrote in this script.',
    tags: ['pre-colonial', 'writing', 'kawi', 'laguna'],
  }),
  work({
    id: 'boxer-codex-warriors',
    title: 'Boxer Codex: Visayan Warriors',
    artist: 'Unrecorded illustrator, Boxer Codex',
    artistId: 'anon-boxer',
    year: 1590,
    yearText: 'c. 1590',
    period: 'precolonial',
    medium: 'Manuscript illustration',
    materials: 'Watercolour on paper',
    category: 'Ethnographic illustration',
    region: 'Visayas',
    dimensions: 'Manuscript page',
    location: 'Lilly Library, Indiana University',
    roomId: 'ninuno',
    file: 'Boxer Codex Visayan Warriors.jpg',
    description:
      'A watercolour plate from the Boxer Codex depicting armed Visayan warriors in tattooed skin and gold ornament, part of a larger set of illustrations recording the dress of the various peoples of the islands and neighbouring Asia around the time of first sustained Spanish contact.',
    historicalContext:
      'Compiled around 1590, probably for a Spanish colonial official, the manuscript is now named for the historian C.R. Boxer, who acquired it in the twentieth century. Extensive tattooing among Visayan men led early Spanish chroniclers to call the islands "Islas de los Pintados" — the islands of the painted people.',
    curatorNote:
      'Interpretation: the codex is a colonial document made to catalogue difference, which makes it a strange kind of evidence — useful for costume and ornament, unreliable for anything the illustrator didn\u2019t think worth recording.',
    tags: ['pre-colonial', 'manuscript', 'visayas', 'tattoo'],
  }),

  /* ------------------------------ Silid ng Katutubong Mindanao -------------- */
  work({
    id: 'tnalak-cloth',
    title: 'T\u2019nalak Dream Cloth',
    artist: 'T\u2019boli weavers, Lake Sebu',
    artistId: 'tboli-weavers',
    year: 2015,
    yearText: 'Contemporary, in an unbroken tradition',
    period: 'precolonial',
    medium: 'Textile',
    materials: 'Abaca fibre, natural dye',
    category: 'Woven cloth',
    region: 'South Cotabato, Mindanao',
    dimensions: 'Variable, woven in panels',
    location: 'Lake Sebu, South Cotabato',
    roomId: 'mindanao',
    file: "T'NALAK.jpg",
    description:
      'A length of t\u2019nalak, woven exclusively by T\u2019boli women from hand-stripped abaca fibre, resist-dyed in the tradition\u2019s three colours — black ground, white pattern, red accent. Common motifs include the human figure, the crab and the frog.',
    historicalContext:
      'T\u2019boli weavers describe their patterns as received in dream from Fu Dalu, guardian spirit of the abaca plant — a design cannot be woven until it has been dreamed. The cloth marks births, marriages and deaths, and a t\u2019nalak pattern appears on the reverse of the Philippine 1000-peso note. Lang Dulay (1928–2015) was named a National Living Treasure for preserving the tradition.',
    curatorNote:
      'Interpretation: calling this a "textile" undersells it slightly — for the T\u2019boli, the cloth is closer to a recorded vision than a decorated object.',
    tags: ['mindanao', 'tboli', 'weaving', 'living tradition', 'famous'],
  }),
  work({
    id: 'panolong',
    title: 'Panolong ng Torogan',
    artist: 'Maranao artisans, Tugaya',
    artistId: 'maranao-artisans',
    year: 1950,
    yearText: '20th century, traditional form',
    period: 'precolonial',
    medium: 'Wood carving',
    materials: 'Carved hardwood',
    category: 'Architectural element',
    region: 'Lanao del Sur, Mindanao',
    dimensions: 'Structural beam, variable length',
    location: 'Lanao del Sur, Mindanao',
    roomId: 'mindanao',
    file: 'Panolong.jpg',
    description:
      'A panolong — the outward-curving beam that projects from the base of a torogan, the royal house of a Maranao datu — carved in okir, the flowing leaf-and-spiral motif language shared across Maranao wood, brass and cloth.',
    historicalContext:
      'The torogan\u2019s scale and the intricacy of its panolong carving once signalled a datu\u2019s rank directly; the form is centred on Lake Lanao, and the town of Tugaya remains the tradition\u2019s living centre for both woodcarving and brasswork today.',
    curatorNote:
      'Interpretation: okir carvers describe two registers within the style — okir-a-dato, bolder and more angular, and okir-a-bae, softer and more curved — carved by the same hands but understood as distinct vocabularies.',
    tags: ['mindanao', 'maranao', 'okir', 'woodcarving', 'architecture'],
  }),
  work({
    id: 'sarimanok',
    title: 'Sarimanok',
    artist: 'Maranao artisans, Tugaya',
    artistId: 'maranao-artisans',
    year: 1980,
    yearText: '20th century, traditional form',
    period: 'precolonial',
    medium: 'Sculpture',
    materials: 'Carved and painted wood',
    category: 'Legendary figure',
    region: 'Lanao del Sur, Mindanao',
    dimensions: 'Variable',
    location: 'Lanao del Sur, Mindanao',
    roomId: 'mindanao',
    file: 'Sarimanok bird of Philippine Folklore.jpg',
    description:
      'A carved and painted sarimanok — the legendary bird of Maranao folklore, shown holding a fish in its beak or talons, its body worked over in okir spirals and leaf forms.',
    historicalContext:
      'In Maranao oral tradition the sarimanok is linked to Itotoro, a spirit of Lake Lanao who communicates through dreams. The sculptor Abdulmari Imao, later a National Artist, is credited with carrying the motif from craft into fine-art sculpture in the mid-twentieth century; it now appears widely as a symbol of Mindanao and of Muslim Filipino identity.',
    curatorNote:
      'Interpretation: the fish in the bird\u2019s beak is usually read as a pairing of sky and water, land and sea — though Maranao carvers themselves describe it more simply, as a mark of abundance.',
    tags: ['mindanao', 'maranao', 'okir', 'sarimanok', 'famous'],
  }),
  work({
    id: 'bagobo-portrait',
    title: 'Bagobo Klata Attire',
    artist: 'Bagobo artisans, Davao del Sur',
    artistId: 'mindanao-artisans',
    year: 2010,
    yearText: 'Contemporary, in an unbroken tradition',
    period: 'precolonial',
    medium: 'Textile and ornament',
    materials: 'Abaca cloth, glass beads, brass bells',
    category: 'Ceremonial dress',
    region: 'Davao del Sur, Mindanao',
    dimensions: 'Variable, full ensemble',
    location: 'Davao del Sur, Mindanao',
    roomId: 'mindanao',
    file: 'Bagobo Klata Attire 1.jpg',
    description:
      'A Bagobo Klata ceremonial ensemble — tie-dyed abaca cloth, beadwork combs and collars, and the small brass bells sewn along hems and anklets that ring with each step. The Bagobo are indigenous to the Mount Apo and Davao Gulf area and are one of the eleven tribes honoured each August at Davao City\u2019s Kadayawan festival.',
    historicalContext:
      'Salinta Monon (1920–2009), of Bansalan in Davao del Sur, was named a National Living Treasure in 1998 for her mastery of inabal, the Bagobo-Tagabawa abaca weave — remembered as the last weaver to carry the tradition\u2019s full complexity. Bagobo dress grades by status: the most complex ikat patterns, with the most beadwork and bells, were historically reserved for those of the highest rank.',
    curatorNote:
      'Interpretation: the bells are functional as much as decorative — a dancer in full regalia is audible before they are visible, which changes what the costume is doing in a performance.',
    tags: ['mindanao', 'davao', 'bagobo', 'weaving', 'living tradition', 'famous'],
  }),
  work({
    id: 'dagmay-cloth',
    title: 'Dagmay Ancestor Cloth',
    artist: 'Bagobo, Mandaya and Tausug artisans',
    artistId: 'mindanao-artisans',
    year: 2000,
    yearText: 'Contemporary, in an unbroken tradition',
    period: 'precolonial',
    medium: 'Textile',
    materials: 'Abaca fibre, mud and bark dye',
    category: 'Woven cloth',
    region: 'Davao Oriental, Mindanao',
    dimensions: 'Variable, woven in panels',
    location: 'Davao Oriental, Mindanao',
    roomId: 'mindanao',
    file: 'Dagmay weaving Mandaya.jpg',
    description:
      'A length of dagmay, the Mandaya people\u2019s ikat-woven abaca cloth, dyed dark with mud and bark in patterns depicting crocodiles, lizards, ferns and human ancestor figures believed to protect the wearer.',
    historicalContext:
      'The Mandaya are indigenous to the mountains of Davao Oriental and Davao de Oro; dagmay weaving, like t\u2019nalak among the T\u2019boli, is passed down through women and remains part of the living craft honoured at Davao City\u2019s annual Kadayawan festival.',
    curatorNote:
      'Interpretation: the crocodile motif recurring through dagmay is often read as respect rather than decoration — a request for the animal\u2019s protection, not merely its likeness.',
    tags: ['mindanao', 'davao', 'mandaya', 'weaving', 'living tradition'],
  }),
  work({
    id: 'pis-syabit',
    title: 'Pis Syabit',
    artist: 'Bagobo, Mandaya and Tausug artisans',
    artistId: 'mindanao-artisans',
    year: 2000,
    yearText: 'Contemporary, in an unbroken tradition',
    period: 'precolonial',
    medium: 'Textile',
    materials: 'Cotton or silk, geometric weave',
    category: 'Woven headcloth',
    region: 'Sulu, Mindanao',
    dimensions: 'Approx. 100 × 100 cm',
    location: 'Sulu Archipelago',
    roomId: 'mindanao',
    file: 'Pis Syabit Tausug weaving.jpg',
    description:
      'A pis syabit, the intricately geometric woven headcloth of the Tausug people of Sulu, traditionally worn folded and knotted by men of standing and now also produced as a wider textile art form.',
    historicalContext:
      'Tausug weaving draws on centuries of trade contact across the Sulu Sea with Brunei, the wider Malay world and southern China, contact that long predates, and continued alongside, the Sultanate of Sulu\u2019s resistance to both Spanish and American colonial control.',
    curatorNote:
      'Interpretation: the geometric precision of pis syabit is sometimes compared to Islamic architectural ornament elsewhere in maritime Southeast Asia — a family resemblance more than a direct borrowing.',
    tags: ['mindanao', 'sulu', 'tausug', 'weaving', 'living tradition'],
  }),

  /* ------------------------------ Silid ng Debosyon ------------------------- */
  work({
    id: 'santo-nino-cebu',
    title: 'Santo Ni\u00f1o de Cebu (devotional copy)',
    artist: 'Unrecorded santero',
    artistId: 'anon-santero',
    year: 1700,
    yearText: '17th–18th century, after the 16th-century original',
    period: 'spanish-colonial',
    medium: 'Sculpture',
    materials: 'Carved and painted wood',
    category: 'Devotional image',
    region: 'Cebu',
    dimensions: 'Approx. 30 cm high',
    location: 'Basilica del Santo Ni\u00f1o, Cebu',
    roomId: 'debosyon',
    file: 'Santo Nino de Cebu.jpg',
    description:
      'A devotional carving of the Christ Child in the pose of the original Santo Ni\u00f1o de Cebu, reportedly given to a local ruler\u2019s wife by Magellan\u2019s expedition in 1521 and found intact decades later, unburned, in the ashes of a razed village.',
    historicalContext:
      'The Santo Ni\u00f1o is the oldest Christian relic associated with the Philippines and remains the focus of the Sinulog festival in Cebu every January — one of the country\u2019s largest religious and cultural celebrations.',
    curatorNote:
      'Interpretation: the image survived the same colonial violence its arrival was part of, which is precisely why its devotion in the Philippines today reads as Filipino rather than Spanish.',
    tags: ['colonial', 'cebu', 'religious', 'santo'],
  }),
  work({
    id: 'santo-processional',
    title: 'Santo Entierro',
    artist: 'Unrecorded santero',
    artistId: 'anon-santero',
    year: 1780,
    yearText: '18th century',
    period: 'spanish-colonial',
    medium: 'Sculpture',
    materials: 'Carved wood, ivory face and hands, gold leaf',
    category: 'Processional image',
    region: 'Luzon',
    dimensions: 'Life-size, reclining',
    location: 'Provincial church collection',
    roomId: 'debosyon',
    file: 'Santo Entierro Philippines.jpg',
    description:
      'A reclining Christ figure carved for Holy Week processions, with an ivory face and hands set into a wooden body — a combination technique, using imported Chinese ivory over local woodwork, common to santos of means across the colonial Philippines.',
    historicalContext:
      'Santo Entierro figures like this one still lead Good Friday processions in many Philippine towns; the ivory-and-wood construction reflects the Manila galleon trade\u2019s direct link to Chinese craftsmen and materials throughout the Spanish colonial period.',
    curatorNote:
      'Interpretation: the combination of Chinese ivory, local hardwood and Spanish devotional form makes a single santo a small monument to three trading worlds meeting in one workshop.',
    tags: ['colonial', 'religious', 'santo', 'holy week'],
  }),
  work({
    id: 'tipos-del-pais-vendor',
    title: 'Tipos del Pa\u00eds: A Vendor',
    artist: 'Dami\u00e1n Domingo',
    artistId: 'damian-domingo',
    year: 1825,
    yearText: 'c. 1820s',
    period: 'spanish-colonial',
    medium: 'Painting',
    materials: 'Watercolour on paper',
    category: 'Genre study',
    region: 'Manila',
    dimensions: 'Album page',
    location: 'Museo Naval, Madrid',
    roomId: 'debosyon',
    file: 'Damian Domingo Tipos del Pais.jpg',
    description:
      'A watercolour from Domingo\u2019s Tipos del Pa\u00eds series, cataloguing Manila\u2019s trades and social types — a street vendor, painted with the same careful attention to dress and posture given to portraits of the colony\u2019s elite.',
    historicalContext:
      'Domingo founded the Academia de Dibujo in 1821, the first formal art school in the colony, and his Tipos series was sold partly to foreign visitors as souvenirs — making it both an art object and an early tourist commodity.',
    curatorNote:
      'Interpretation: unlike the Boxer Codex two centuries earlier, Domingo was a Manila-born painter recording his own city, which changes what the same kind of "type" portrait is doing.',
    tags: ['colonial', 'manila', 'genre', 'watercolour'],
  }),
  work({
    id: 'portrait-principalia',
    title: 'Portrait of a Provincial Family',
    artist: 'Sim\u00f3n Flores y de la Rosa',
    artistId: 'simon-flores',
    year: 1870,
    yearText: 'c. 1870s',
    period: 'spanish-colonial',
    medium: 'Painting',
    materials: 'Oil on canvas',
    category: 'Portrait',
    region: 'Bulacan',
    dimensions: 'Approx. 90 × 70 cm',
    location: 'Private collection',
    roomId: 'debosyon',
    file: 'Simon Flores portrait painting.jpg',
    description:
      'A formal portrait of a landowning provincial family in European dress, painted with the flat, careful realism typical of Flores\u2019s documentary approach to the colonial principalia — the local elite class through which Spain administered its towns.',
    historicalContext:
      'Flores worked a generation before Luna and Hidalgo left for Europe, painting almost exclusively for local patrons rather than for exhibition abroad — a quieter, more provincial art world than the one his younger contemporaries would make famous.',
    curatorNote:
      'Interpretation: the European dress in a portrait like this is itself a historical document — proof of the principalia\u2019s deliberate self-presentation as Hispanicized and modern.',
    tags: ['colonial', 'portrait', 'bulacan', 'principalia'],
  }),
  work({
    id: 'boxer-codex-tagalog',
    title: 'Boxer Codex: Tagalog Couple',
    artist: 'Unrecorded illustrator, Boxer Codex',
    artistId: 'anon-boxer',
    year: 1590,
    yearText: 'c. 1590',
    period: 'spanish-colonial',
    medium: 'Manuscript illustration',
    materials: 'Watercolour on paper',
    category: 'Ethnographic illustration',
    region: 'Luzon',
    dimensions: 'Manuscript page',
    location: 'Lilly Library, Indiana University',
    roomId: 'debosyon',
    file: 'Boxer Codex Tagalog couple.jpg',
    description:
      'A companion plate from the Boxer Codex, showing a Tagalog man and woman of rank in gold jewellery and fine cloth, painted for the same manuscript that recorded the Visayan warriors now hung in the Ancestors room.',
    historicalContext:
      'Read together, the codex\u2019s plates show a colonial administration already cataloguing the islands by ethnic group within a generation of permanent settlement — a habit of classification that would outlast Spanish rule itself.',
    curatorNote:
      'Interpretation: the gold ornament shown here is consistent with the pre-colonial goldwork elsewhere in this museum — evidence the codex, however colonial its purpose, recorded some things accurately.',
    tags: ['colonial', 'manuscript', 'tagalog', 'luzon'],
  }),

  /* ------------------------------ Silid Ilustrado --------------------------- */
  work({
    id: 'spoliarium',
    title: 'Spoliarium',
    artist: 'Juan Luna',
    artistId: 'juan-luna',
    year: 1884,
    yearText: '1884',
    period: 'ilustrado',
    medium: 'Painting',
    materials: 'Oil on canvas',
    category: 'History painting',
    region: 'Philippines / Spain',
    dimensions: '422 × 765 cm',
    location: 'National Museum of Fine Arts, Manila',
    roomId: 'ilustrado',
    file: 'Juan Luna Spoliarium.jpg',
    description:
      'A monumental canvas showing dead and dying gladiators being dragged from the Roman arena to the spoliarium, where their armour was stripped for reuse. Grieving figures at right watch the bodies pass.',
    historicalContext:
      'Spoliarium won a gold medal at Madrid\u2019s 1884 Exposici\u00f3n Nacional de Bellas Artes — the first major prize a Filipino painter had won in Spain\u2019s own national competition, celebrated at a banquet where a young Jos\u00e9 Rizal gave a speech framing the win as proof of Filipino equality. It is now a National Cultural Treasure.',
    curatorNote:
      'Interpretation: Rizal and other ilustrados read the dead gladiators as a stand-in for the colonized Philippines being stripped of its own wealth — a reading Luna never confirmed he intended, but never discouraged either.',
    tags: ['ilustrado', 'history painting', 'madrid', 'famous', 'national treasure'],
  }),
  work({
    id: 'espana-y-filipinas',
    title: 'Espa\u00f1a y Filipinas',
    artist: 'Juan Luna',
    artistId: 'juan-luna',
    year: 1886,
    yearText: 'c. 1886',
    period: 'ilustrado',
    medium: 'Painting',
    materials: 'Oil on wood panel',
    category: 'Allegory',
    region: 'Spain',
    dimensions: 'Approx. 71 × 46 cm',
    location: 'Lopez Museum, Manila',
    roomId: 'ilustrado',
    file: 'Espana y Filipinas by Juan Luna.jpg',
    description:
      'An allegorical double portrait of two women — one representing Spain, the other the Philippines — arm in arm and looking toward a shared horizon, painted as a hopeful image of colonial partnership rather than subjugation.',
    historicalContext:
      'Luna painted this smaller, gentler work not long after the confrontational Spoliarium, at a moment when the ilustrado movement still largely sought reform and representation within the Spanish system rather than independence from it.',
    curatorNote:
      'Interpretation: hung a few years before the Revolution, the painting reads today as a hope that history did not grant — worth noticing precisely because Luna could not have known that yet.',
    tags: ['ilustrado', 'allegory', 'reform movement'],
  }),
  work({
    id: 'virgenes-cristianas',
    title: 'Las V\u00edrgenes Cristianas Expuestas al Populacho',
    artist: 'F\u00e9lix Resurrecci\u00f3n Hidalgo',
    artistId: 'felix-hidalgo',
    year: 1884,
    yearText: '1884',
    period: 'ilustrado',
    medium: 'Painting',
    materials: 'Oil on canvas',
    category: 'History painting',
    region: 'Philippines / Spain',
    dimensions: '190 × 100 cm',
    location: 'National Museum of Fine Arts, Manila',
    roomId: 'ilustrado',
    file: 'Las Virgenes Cristianas Expuestas al Populacho.jpg',
    description:
      'Christian women, condemned under Roman persecution, are led before a jeering crowd. Hidalgo painted the scene with a restraint and cooler palette that contrasted with Luna\u2019s more violent Spoliarium, shown at the same 1884 Madrid exposition.',
    historicalContext:
      'The painting won silver at the same competition where Luna won gold — a paired result the ilustrado community in Madrid celebrated together as a single achievement for Filipino art, regardless of which medal went to whom.',
    curatorNote:
      'Interpretation: like Spoliarium, the painting was quickly read by Filipino audiences as being about colonial persecution rather than ancient Rome — a reading Hidalgo\u2019s own later writing suggests he was comfortable with.',
    tags: ['ilustrado', 'history painting', 'madrid', 'persecution'],
  }),
  work({
    id: 'triunfo-del-ciencia',
    title: 'El Triunfo del Ciencia sobre la Muerte',
    artist: 'Juan Luna',
    artistId: 'juan-luna',
    year: 1890,
    yearText: '1890',
    period: 'ilustrado',
    medium: 'Painting',
    materials: 'Oil on canvas',
    category: 'Allegory',
    region: 'Spain',
    dimensions: '95 × 60 cm',
    location: 'Metropolitan Museum of Manila',
    roomId: 'ilustrado',
    file: 'El Triunfo del Ciencia sobre la Muerte.jpg',
    description:
      'An allegorical figure representing science stands triumphant over a skeleton, painted in a lighter, more Impressionist-influenced style than Luna\u2019s earlier academic history paintings, reflecting his growing interest in French painting.',
    historicalContext:
      'Painted while Luna lived in Paris and moved in circles that included Impressionist and Post-Impressionist painters, the work marks a stylistic shift away from the dense academic realism of Spoliarium toward looser brushwork and brighter colour.',
    curatorNote:
      'Interpretation: the title\u2019s optimism about science sits oddly against Luna\u2019s own life a few years later, which ended in personal tragedy rather than triumph — this museum notes that without claiming to explain it.',
    tags: ['ilustrado', 'allegory', 'paris', 'impressionism'],
  }),

  /* ------------------------------ Silid ng Ginintuang Liwanag ---------------- */
  generated({
    id: 'dalagang-bukid',
    title: 'Dalagang Bukid (study after Amorsolo)',
    artist: 'Bahay Sining Studio, in tribute to Fernando Amorsolo',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'american-colonial',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'ginintuang-liwanag',
    variant: 'wash',
    description:
      'A generated study in backlit, golden tones, made in tribute to Amorsolo\u2019s "Dalagang Bukid" (1929) — a portrait of a young woman in provincial dress that also gave its name, a decade earlier, to the first Filipino-produced film.',
    historicalContext:
      'Amorsolo\u2019s paintings remain under copyright — held by the Fernando C. Amorsolo Art Foundation — and are not reproduced here. This composition borrows only the general warmth of his signature backlighting, generated fresh from a seed rather than copied from any canvas.',
    curatorNote:
      'Interpretation: this is a demonstration piece, not an Amorsolo painting — the real "Dalagang Bukid" is worth seeking out through the Amorsolo Foundation or a Philippine museum collection.',
    tags: ['golden light', 'generated', 'tribute', 'amorsolo', 'famous'],
  }),
  generated({
    id: 'harvest-1930',
    title: 'Harvest (study after Amorsolo)',
    artist: 'Bahay Sining Studio, in tribute to Fernando Amorsolo',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'american-colonial',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'ginintuang-liwanag',
    variant: 'wash',
    description:
      'A generated study in layered, sunlit bands, made in tribute to Amorsolo\u2019s many rice-harvest canvases of the 1920s and 1930s — scenes reproduced widely on calendars and postcards as an image of peaceful rural abundance.',
    historicalContext:
      'Amorsolo\u2019s paintings remain under copyright and are not reproduced here. This composition borrows only the general structure of a layered field under strong light, generated fresh from a seed.',
    curatorNote:
      'Interpretation: the real harvest scenes are worth a second look for what the golden light quietly does — turning visible labour into something closer to leisure.',
    tags: ['golden light', 'generated', 'tribute', 'amorsolo', 'harvest'],
  }),
  generated({
    id: 'maiden-palay-stalks',
    title: 'Maiden with Palay Stalks (study after Amorsolo)',
    artist: 'Bahay Sining Studio, in tribute to Fernando Amorsolo',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'american-colonial',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'ginintuang-liwanag',
    variant: 'wash',
    description:
      'A generated study made in tribute to Amorsolo\u2019s early portraits of women holding sheaves of palay (rice stalks) — rice recurs as a subject across nearly every decade of his sixty-year career.',
    historicalContext:
      'Amorsolo\u2019s paintings remain under copyright and are not reproduced here. This composition borrows only the general warmth of an early, looser Amorsolo canvas, generated fresh from a seed.',
    curatorNote:
      'Interpretation: this is a demonstration piece — the real painting is held at the Ayala Museum in Makati.',
    tags: ['golden light', 'generated', 'tribute', 'amorsolo', 'rice'],
  }),
  generated({
    id: 'capitan-del-barrio',
    title: 'Capit\u00e1n del Barrio (study after Amorsolo)',
    artist: 'Bahay Sining Studio, in tribute to Fernando Amorsolo',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'american-colonial',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'ginintuang-liwanag',
    variant: 'grid',
    description:
      'A generated study made in tribute to Amorsolo\u2019s formal portrait commissions — among them likenesses of barrio captains, a local post carried from the Spanish-era cabeza de barangay through to today\u2019s barangay system.',
    historicalContext:
      'Amorsolo\u2019s paintings remain under copyright and are not reproduced here. This composition borrows only the general formality of a seated commission portrait, generated fresh from a seed.',
    curatorNote:
      'Interpretation: this is a demonstration piece — the real portrait is held at the National Museum of the Philippines.',
    tags: ['golden light', 'generated', 'tribute', 'amorsolo', 'portrait'],
  }),
  work({
    id: 'rice-planting-delarosa',
    title: 'Planting Rice',
    artist: 'Fabi\u00e1n de la Rosa',
    artistId: 'fabian-delarosa',
    year: 1904,
    yearText: '1904',
    period: 'american-colonial',
    medium: 'Painting',
    materials: 'Oil on canvas',
    category: 'Genre painting',
    region: 'Philippines',
    dimensions: 'Approx. 95 × 190 cm',
    location: 'Metropolitan Museum of Manila',
    roomId: 'ginintuang-liwanag',
    file: 'Fabian de la Rosa Planting Rice 1904.jpg',
    description:
      'Women bend to plant rice seedlings across a flooded paddy field, painted a generation before Amorsolo made the subject famous — de la Rosa\u2019s version is flatter in light and closer to plein-air Impressionism than to Amorsolo\u2019s later theatrical backlighting.',
    historicalContext:
      'De la Rosa exhibited this painting at the 1904 St. Louis World\u2019s Fair, where it won a prize — the same fair whose "Philippine Exposition" put living Filipinos, including Igorot and Moro delegations, on display as ethnographic exhibits, a practice this museum does not treat as a neutral historical footnote.',
    curatorNote:
      'Interpretation: de la Rosa taught at the University of the Philippines alongside a young Amorsolo, and this canvas is usually read as the direct template Amorsolo later refined, brightened and multiplied many times over.',
    tags: ['golden light', 'rice', 'genre', 'exposition'],
  }),

  /* ------------------------------ Silid ng Bagong Anyo (generated) ----------- */
  generated({
    id: 'ang-batayan',
    title: 'Ang Batayan (study after Edades)',
    artist: 'Bahay Sining Studio, in tribute to Victorio Edades',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'modern',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'bagong-anyo',
    variant: 'grid',
    description:
      'A generated study in blocky, angular planes, made in tribute to Victorio Edades\u2019 1928 exhibition The Builders — the show that first brought Cubist- and Expressionist-influenced painting to Manila and was jeered at its opening.',
    historicalContext:
      'Edades\u2019 actual paintings remain under copyright and are not reproduced here. This composition borrows only the general spirit of blocky, constructive form his generation introduced, generated fresh from a seed rather than copied from any specific canvas.',
    curatorNote:
      'Interpretation: this is a demonstration piece, not a Victorio Edades painting — read Edades\u2019 own history in the artist record, and see his actual work through the National Museum or U.S.T. collections.',
    tags: ['modern', 'generated', 'tribute', 'edades'],
  }),
  generated({
    id: 'tatlumput-tatlo',
    title: 'Tatlumpu\u2019t Tatlo (study after the Thirteen Moderns)',
    artist: 'Bahay Sining Studio, in tribute to Anita Magsaysay-Ho and the Thirteen Moderns',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'modern',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'bagong-anyo',
    variant: 'wash',
    description:
      'A generated study of rounded, overlapping forms, made in tribute to the "Thirteen Moderns" — the 1938 exhibiting group that included Anita Magsaysay-Ho, one of very few women among the first generation of Philippine modernists.',
    historicalContext:
      'Magsaysay-Ho\u2019s actual paintings of market women and working women remain under copyright and are not reproduced here. Her real biography and career are recorded in her artist entry.',
    curatorNote:
      'Interpretation: a demonstration piece, generated rather than copied — see Magsaysay-Ho\u2019s actual paintings through the museums and collections that hold them.',
    tags: ['modern', 'generated', 'tribute', 'thirteen moderns'],
  }),
  generated({
    id: 'salamin-ng-lungsod',
    title: 'Salamin ng Lungsod (study after Manansala)',
    artist: 'Bahay Sining Studio, in tribute to Vicente Manansala',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'modern',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'bagong-anyo',
    variant: 'orbit',
    description:
      'A generated study in overlapping, semi-translucent planes, made in tribute to Vicente Manansala\u2019s "transparent cubism" — his method of layering cubist-derived shapes over ordinary market and street scenes.',
    historicalContext:
      'Manansala\u2019s actual paintings remain under copyright and are not reproduced here. He was named National Artist in 1981, the year of his death, after a career spanning study in Manila, Canada and Paris.',
    curatorNote:
      'Interpretation: a demonstration piece, not a Manansala painting — the layering here is a loose gesture toward his method, not a copy of any specific canvas.',
    tags: ['modern', 'generated', 'tribute', 'manansala'],
  }),
  generated({
    id: 'anyong-biomorpiko',
    title: 'Anyong Biomorpiko (study after H.R. Ocampo)',
    artist: 'Bahay Sining Studio, in tribute to Hernando R. Ocampo',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'modern',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'bagong-anyo',
    variant: 'wash',
    description:
      'A generated study in dense, jagged colour fields, made in tribute to H.R. Ocampo\u2019s biomorphic abstraction — a largely self-developed vocabulary of organic, angular shapes he arrived at in the 1950s.',
    historicalContext:
      'Ocampo\u2019s actual paintings remain under copyright and are not reproduced here. He was named National Artist in 1991, thirteen years after his death.',
    curatorNote:
      'Interpretation: a demonstration piece — Ocampo\u2019s own shapes were personal enough that he resisted comparison to any single Western abstraction, and this study makes no claim to reproduce them.',
    tags: ['modern', 'generated', 'tribute', 'ocampo'],
  }),
  generated({
    id: 'hugis-at-bigat',
    title: 'Hugis at Bigat (study after Legaspi)',
    artist: 'Bahay Sining Studio, in tribute to Cesar Legaspi',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'modern',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'bagong-anyo',
    variant: 'grid',
    description:
      'A generated study in heavy, angular blocks, made in tribute to Cesar Legaspi\u2019s cubist-derived paintings of labourers and urban figures, developed across a career he pursued largely outside a day job in advertising.',
    historicalContext:
      'Legaspi\u2019s actual paintings remain under copyright and are not reproduced here. He was named National Artist for Painting in 1990.',
    curatorNote:
      'Interpretation: a demonstration piece — the blockiness here gestures at Legaspi\u2019s treatment of the human figure as load-bearing structure, without copying any specific work.',
    tags: ['modern', 'generated', 'tribute', 'legaspi'],
  }),

  /* ------------------------------ Silid ng mga Pambansang Alagad ------------- */
  work({
    id: 'up-oblation',
    title: 'The Oblation',
    artist: 'Guillermo Tolentino',
    artistId: 'guillermo-tolentino',
    year: 1935,
    yearText: '1935',
    period: 'contemporary',
    medium: 'Sculpture',
    materials: 'Concrete cast',
    category: 'Public monument',
    region: 'Quezon City',
    dimensions: '267.9 × 500.3 × 321.3 cm',
    location: 'University of the Philippines Diliman',
    roomId: 'pambansang-alagad',
    file: 'UP Oblation 1.jpg',
    description:
      'A nude male figure stands with arms outstretched and head tilted upward, offering himself — the Filipino oblasyon, or offering — as a symbol of selfless service. It has stood at the heart of the University of the Philippines since 1939.',
    historicalContext:
      'Funded by U.P. students and unveiled on National Heroes\u2019 Day 1935 at the university\u2019s Manila campus, the statue moved with the university to Diliman in 1949. Sculptor Anastacio Caedo, Tolentino\u2019s student, modelled for the figure\u2019s physique. Several later replicas stand at other U.P. campuses, some made by National Artist Napoleon Abueva.',
    curatorNote:
      'Interpretation: the statue\u2019s symbolism has outgrown any single reading over ninety years — for most U.P. students today it functions less as an allegory and more as a landmark for meeting up.',
    tags: ['national artist', 'sculpture', 'monument', 'famous'],
  }),
  work({
    id: 'bonifacio-monument',
    title: 'Bonifacio Monument',
    artist: 'Guillermo Tolentino',
    artistId: 'guillermo-tolentino',
    year: 1933,
    yearText: '1933',
    period: 'contemporary',
    medium: 'Sculpture',
    materials: 'Bronze and granite',
    category: 'Public monument',
    region: 'Caloocan',
    dimensions: 'Approx. 13.7 m high',
    location: 'Monumento Circle, Caloocan',
    roomId: 'pambansang-alagad',
    file: 'Bonifacio Monument (Guillermo Tolentino).jpg',
    description:
      'A crowded bronze grouping of thirty figures around a central obelisk, led by Andr\u00e9s Bonifacio holding a bolo and a revolutionary flag, commemorating the 1896 Cry of Balintawak that began the Philippine Revolution against Spain.',
    historicalContext:
      'Tolentino based individual faces on descendants of actual Katipunan members he was able to locate, and the monument\u2019s traffic circle site — long simply called "Monumento" — has become the informal name for the surrounding district of Caloocan.',
    curatorNote:
      'Interpretation: putting thirty figures around one obelisk was, by Tolentino\u2019s own account, a deliberate refusal to let any single hero — even Bonifacio — stand for a revolution he saw as collective.',
    tags: ['national artist', 'sculpture', 'monument', 'revolution'],
  }),
  generated({
    id: 'siyam-na-musa',
    title: 'Siyam na Musa (study after Abueva)',
    artist: 'Bahay Sining Studio, in tribute to Napoleon Abueva',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'contemporary',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'pambansang-alagad',
    variant: 'grid',
    description:
      'A generated study of nine simplified figures in a shared field, made in tribute to Napoleon Abueva\u2019s Nine Muses relief and his broader move away from Tolentino\u2019s classicism toward abstraction and mixed material.',
    historicalContext:
      'Abueva\u2019s major reliefs and freestanding sculptures remain under copyright and are not reproduced here. Named National Artist for Sculpture in 1976 at forty-five, he remains the youngest person to receive the honour.',
    curatorNote:
      'Interpretation: a demonstration piece — see Abueva\u2019s actual sculpture at the U.P. Faculty Center and other campus sites where it still stands in public.',
    tags: ['national artist', 'generated', 'tribute', 'abueva'],
  }),
  generated({
    id: 'guhit-ng-kulay',
    title: 'Guhit ng Kulay (study after Arturo Luz)',
    artist: 'Bahay Sining Studio, in tribute to Arturo Luz',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'contemporary',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'pambansang-alagad',
    variant: 'orbit',
    description:
      'A generated study in spare geometric line and flat colour, made in tribute to Arturo Luz\u2019s pared-down paintings of dancers, cyclists and street musicians reduced to their structural essentials.',
    historicalContext:
      'Luz\u2019s actual paintings remain under copyright and are not reproduced here. Named National Artist for Visual Arts in 1997, he also directed the Metropolitan Museum of Manila and the Museum of Philippine Art.',
    curatorNote:
      'Interpretation: a demonstration piece — Luz\u2019s own restraint was famously hard-won across decades of paring subjects down; a generated study can only gesture at that discipline, not replicate it.',
    tags: ['national artist', 'generated', 'tribute', 'arturo luz'],
  }),
  generated({
    id: 'poot',
    title: 'Poot (study after Ang Kiukok)',
    artist: 'Bahay Sining Studio, in tribute to Ang Kiukok',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'contemporary',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'pambansang-alagad',
    variant: 'grid',
    description:
      'A generated study in sharp, distorted angles, made in tribute to Ang Kiukok\u2019s expressionist figures — fishermen, crucifixions, screaming forms rendered in a harder-edged style than most of his modernist contemporaries.',
    historicalContext:
      'Ang Kiukok\u2019s actual paintings remain under copyright and are not reproduced here. Born in Davao City in 1931 to a Chinese-Filipino family, he was named National Artist for Painting in 2001.',
    curatorNote:
      'Interpretation: a demonstration piece — worth knowing that one of Philippine modernism\u2019s hardest, most unsettled visual voices came out of Davao, not Manila.',
    tags: ['national artist', 'generated', 'tribute', 'davao', 'ang kiukok'],
  }),
  generated({
    id: 'habi-ng-kamalayan',
    title: 'Habi ng Kamalayan (study after Jos\u00e9 Joya)',
    artist: 'Bahay Sining Studio, in tribute to Jos\u00e9 Joya',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'contemporary',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'pambansang-alagad',
    variant: 'wash',
    description:
      'A generated study in large gestural bands of colour, made in tribute to Jos\u00e9 Joya\u2019s abstract expressionism — scaled, energetic canvases that made him the first Filipino painter shown at the Venice Biennale, in 1964.',
    historicalContext:
      'Joya\u2019s actual paintings remain under copyright and are not reproduced here. He was named National Artist in 2003, eight years after his death.',
    curatorNote:
      'Interpretation: a demonstration piece — Joya described wanting American-scaled gesture applied to distinctly local colour and light, an ambition this study only sketches at.',
    tags: ['national artist', 'generated', 'tribute', 'joya'],
  }),
  generated({
    id: 'larawan-ng-bundok',
    title: 'Larawan ng Bundok (study after BenCab)',
    artist: 'Bahay Sining Studio, in tribute to Benedicto "BenCab" Cabrera',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'contemporary',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Tribute study',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'pambansang-alagad',
    variant: 'orbit',
    description:
      'A generated study of layered, mountainous forms, made in tribute to BenCab\u2019s decades of work centred on Sagada and the Cordillera highlands, alongside his long-running Sabel figure.',
    historicalContext:
      'BenCab\u2019s actual paintings remain under copyright and are not reproduced here. Named National Artist for Visual Arts in 2006, he opened the BenCab Museum outside Baguio in 2009, dedicated partly to Cordillera indigenous art and material culture.',
    curatorNote:
      'Interpretation: a demonstration piece — placed here as a reminder that the Philippines\u2019 living indigenous cultures include the Cordillera highlands of Luzon as well as the Mindanao traditions given their own room in this museum.',
    tags: ['national artist', 'generated', 'tribute', 'cordillera', 'bencab'],
  }),

  /* ------------------------------ Silid ng Liwanag at Anino ------------------ */
  work({
    id: 'escolta-1900s',
    title: 'Escolta, Maynila',
    artist: 'Unrecorded and studio photographers',
    artistId: 'anon-photographer',
    year: 1905,
    yearText: 'c. early 1900s',
    period: 'american-colonial',
    medium: 'Photograph',
    materials: 'Gelatin silver print',
    category: 'Documentary photograph',
    region: 'Manila',
    dimensions: 'Variable',
    location: 'Philippine National Archives',
    roomId: 'liwanag-anino',
    file: 'Escolta Street Manila early 1900s.jpg',
    description:
      'A street-level view of Escolta, Manila\u2019s premier commercial street through the American colonial period, lined with tranv\u00eda tracks, calesas and the ground-floor shopfronts of the city\u2019s first department stores and cinemas.',
    historicalContext:
      'Escolta remained the country\u2019s financial and retail centre until the 1940s, when the Battle of Manila left much of the street, along with most of the old city, in ruins — the subject of the photograph hung beside this one.',
    curatorNote:
      'Interpretation: photographs like this one exist mainly because Escolta was where colonial administrators, businesses and photographers themselves were concentrated — a bias of access, not necessarily of importance.',
    tags: ['photography', 'manila', 'american period', 'escolta'],
  }),
  work({
    id: 'intramuros-1945',
    title: 'Intramuros, 1945',
    artist: 'Unrecorded and studio photographers',
    artistId: 'anon-photographer',
    year: 1945,
    yearText: '1945',
    period: 'american-colonial',
    medium: 'Photograph',
    materials: 'Gelatin silver print',
    category: 'Documentary photograph',
    region: 'Manila',
    dimensions: 'Variable',
    location: 'U.S. National Archives',
    roomId: 'liwanag-anino',
    file: 'Manila 1945 ruins Intramuros.jpg',
    description:
      'The walled city of Intramuros, reduced to rubble after the month-long Battle of Manila between American and Japanese forces in February 1945 — among the most destructive urban battles of the Pacific War.',
    historicalContext:
      'An estimated 100,000 Manila civilians died in the battle, and Intramuros\u2019 four-century-old Spanish colonial architecture, including most of its original churches, was almost entirely destroyed. Manila is often cited as the second most devastated Allied city of the Second World War, after Warsaw.',
    curatorNote:
      'Interpretation: this museum hangs the photograph without softening it — the golden-light countryside two rooms over and this ruined street belong to the same half-century of Philippine history.',
    tags: ['photography', 'manila', 'world war ii', 'intramuros'],
  }),
  work({
    id: 'banaue-rice-terraces',
    title: 'Banaue Rice Terraces',
    artist: 'Unrecorded and studio photographers',
    artistId: 'anon-photographer',
    year: 1910,
    yearText: 'c. early 1900s',
    period: 'american-colonial',
    medium: 'Photograph',
    materials: 'Gelatin silver print',
    category: 'Documentary photograph',
    region: 'Ifugao, Luzon',
    dimensions: 'Variable',
    location: 'Philippine National Archives',
    roomId: 'liwanag-anino',
    file: 'Banaue Rice Terraces early photograph.jpg',
    description:
      'Hand-built stone and earth rice terraces climbing the mountainsides of Ifugao province, engineered by the Ifugao people over an estimated two thousand years without machinery, photographed early in the American colonial period as the terraces were becoming known outside the Cordillera.',
    historicalContext:
      'UNESCO inscribed the Ifugao terraces as a World Heritage Site in 1995 for representing "the ingenuity of a group of people" sustaining an entire agricultural system across mountain terrain, and the terraces remain farmed today by Ifugao communities.',
    curatorNote:
      'Interpretation: the terraces are frequently reproduced as a symbol of "the Philippines" in general — worth remembering they are specifically Ifugao, Cordillera engineering, distinct from the lowland or Mindanao cultures shown elsewhere in this museum.',
    tags: ['photography', 'ifugao', 'cordillera', 'unesco'],
  }),
  work({
    id: 'kadayawan-festival-davao',
    title: 'Kadayawan sa Dabaw',
    artist: 'Unrecorded and studio photographers',
    artistId: 'anon-photographer',
    year: 2018,
    yearText: 'Contemporary',
    period: 'contemporary',
    medium: 'Photograph',
    materials: 'Digital photograph',
    category: 'Documentary photograph',
    region: 'Davao City, Mindanao',
    dimensions: 'Variable',
    location: 'Davao City, Mindanao',
    roomId: 'liwanag-anino',
    file: 'Kadayawan Festival Davao street parade.jpg',
    description:
      'Dancers and float-riders in tribal dress fill a Davao City street during the Kadayawan festival — an August celebration of the harvest and of the eleven indigenous tribes and cultural groups of the Davao Region.',
    historicalContext:
      'First held in 1986, Kadayawan takes its name from a Bagobo word roughly meaning something of value or a gift — the festival gathers the Bagobo, Mandaya, Matigsalug, Ata, Tagabawa, K\u2019lagan, Ovu-Manuvu, Iranun, Kalagan, Sama and Maranao communities of the region in one shared week of thanksgiving.',
    curatorNote:
      'Interpretation: this photograph is the museum\u2019s one contemporary counterpart to the pre-colonial gold and centuries-old weaving elsewhere on these walls — the same Mindanao cultures, still practicing, still celebrated, not only historical.',
    tags: ['photography', 'davao', 'mindanao', 'kadayawan', 'festival'],
  }),

  /* ------------------------------ Silid ng Ngayon (generated) ---------------- */
  generated({
    id: 'kadayawan-digital',
    title: 'Kadayawan',
    artist: 'Bahay Sining Studio',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'contemporary',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Generative art',
    region: 'Generated, after Davao',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'ngayon',
    variant: 'wash',
    description:
      'A generated composition of overlapping warm bands, seeded fresh for each visitor, made as a loose digital echo of Davao\u2019s Kadayawan harvest festival — flowers, fruit and colour rather than any specific costume or tribe.',
    historicalContext:
      'This is a demonstration piece created for this project, not a photograph or a traditional artwork — the real Kadayawan festival and the cultures it honours are documented elsewhere in this museum, in the Mindanao room and in the photography room.',
    curatorNote:
      'Interpretation: generated art can gesture at a festival\u2019s colour and abundance; it cannot show the specific patterns of a specific tribe, which is why those are kept to the real T\u2019nalak, dagmay and pis syabit hung nearby instead.',
    tags: ['generated', 'contemporary', 'davao', 'kadayawan'],
  }),
  generated({
    id: 'haring-ibon',
    title: 'Haring Ibon (King Bird)',
    artist: 'Bahay Sining Studio',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'contemporary',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Generative art',
    region: 'Generated, after the Philippine Eagle',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'ngayon',
    variant: 'orbit',
    description:
      'A generated study in concentric, radiating forms made in tribute to the Philippine eagle — one of the world\u2019s largest and rarest raptors, found only in old-growth forest on Mindanao, Samar, Leyte and Luzon, and headquartered for conservation at the Philippine Eagle Center just outside Davao City.',
    historicalContext:
      'Named the national bird in 1995, the Philippine eagle is critically endangered, with an estimated few hundred breeding pairs remaining as forest habitat continues to shrink — the Davao-based Philippine Eagle Foundation leads the country\u2019s captive breeding and release program.',
    curatorNote:
      'Interpretation: no generated pattern can substitute for the bird itself — this piece exists mainly to point toward it, and toward Davao\u2019s role in trying to keep it from disappearing.',
    tags: ['generated', 'contemporary', 'davao', 'philippine eagle'],
  }),
  generated({
    id: 'habi-digital',
    title: 'Habi',
    artist: 'Bahay Sining Studio',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'contemporary',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Generative art',
    region: 'Generated, after Mindanao weaving',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'ngayon',
    variant: 'grid',
    description:
      '"Habi" — weave — a generated grid composition loosely translating the logic of resist-dye weaving (t\u2019nalak, dagmay, inabel) into repeating code-driven pattern, without reproducing any single community\u2019s actual design.',
    historicalContext:
      'This is a demonstration piece, made to draw a line between a centuries-old hand craft and a screen-generated pattern rather than to claim any equivalence between them.',
    curatorNote:
      'Interpretation: a T\u2019boli weaver works from a pattern received in dream, over weeks, by hand; this piece is drawn by a script in under a second — the comparison is the point, not a claim that one replaces the other.',
    tags: ['generated', 'contemporary', 'weaving', 'mindanao'],
  }),
  generated({
    id: 'barangay-2-0',
    title: 'Barangay 2.0',
    artist: 'Bahay Sining Studio',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'contemporary',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Generative art',
    region: 'Generated, after urban Philippine life',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'ngayon',
    variant: 'grid',
    description:
      'A generated grid of bright, jeepney-adjacent colour blocks, made as a loose gesture toward the ongoing improvisation of Philippine urban life — the barangay as unit of neighbourhood, and as a word now also used for a chat app\u2019s neighbourhood feature.',
    historicalContext:
      'This is a demonstration piece created for this project, with no claim to depict any real jeepney, artist or neighbourhood.',
    curatorNote:
      'Interpretation: included mainly so the museum\u2019s "now" room is not only festivals and eagles — daily urban colour is also part of the present tense.',
    tags: ['generated', 'contemporary', 'urban'],
  }),
  generated({
    id: 'panahon',
    title: 'Panahon (Time)',
    artist: 'Bahay Sining Studio',
    artistId: 'bahay-sining-studio',
    year: 2026,
    yearText: '2026, generated',
    period: 'contemporary',
    medium: 'Generated composition',
    materials: 'Vector graphics',
    category: 'Generative art',
    region: 'Generated',
    dimensions: 'Variable',
    location: 'Generated on request',
    roomId: 'ngayon',
    variant: 'orbit',
    description:
      'A closing, quiet composition of slow concentric rings — panahon means both "time" and "season" or "weather" in Filipino — generated to end the museum\u2019s walk somewhere calm rather than somewhere loud.',
    historicalContext:
      'This is a demonstration piece created for this project.',
    curatorNote:
      'Interpretation: the last room of a museum sets what you carry out of it; this one was written to be a full stop, not another exclamation point.',
    tags: ['generated', 'contemporary', 'closing'],
  }),
]

export const artworksById = Object.fromEntries(artworks.map((a) => [a.id, a]))

export function getArtwork(id) {
  return artworksById[id] ?? null
}

export function artworksByRoom(roomId) {
  return artworks.filter((a) => a.roomId === roomId)
}

export function artworksByArtist(artistId) {
  return artworks.filter((a) => a.artistId === artistId)
}

export function artworksByPeriod(periodId) {
  return artworks.filter((a) => a.period === periodId)
}

export const mediums = [...new Set(artworks.map((a) => a.medium))].sort()
export const regions = [...new Set(artworks.map((a) => a.region))].sort()
export const categories = [...new Set(artworks.map((a) => a.category))].sort()
export const yearBounds = artworks.reduce(
  (acc, a) => ({ min: Math.min(acc.min, a.year), max: Math.max(acc.max, a.year) }),
  { min: artworks[0].year, max: artworks[0].year },
)
