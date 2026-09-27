import { Link } from 'react-router-dom'
import { PageTransition } from '../components/layout/PageTransition'
import { SectionHeading } from '../components/ui/SectionHeading'
import { artworks } from '../data/artworks'
import { artists } from '../data/artists'
import { rooms } from '../data/rooms'

const stack = [
  'React 18 + Vite',
  'Tailwind CSS',
  'Framer Motion',
  'React Router',
  'Recharts',
  'Lucide icons',
  'Web Audio API',
  'Browser localStorage',
]

const faq = [
  {
    q: 'Where do the photographs come from?',
    a: 'Historical works are served live from Wikimedia Commons, using files already in the public domain — pre-colonial artifacts, colonial devotional art, the Ilustrados, Amorsolo\u2019s era, and photographed public monuments. If a file is ever renamed upstream, the interface shows a generated placeholder instead of a broken image.',
  },
  {
    q: 'Why are some paintings "generated studies" instead of the real thing?',
    a: 'Most twentieth-century Philippine paintings — the Modernists and most National Artists, from Edades to BenCab — are still under copyright, so this museum does not reproduce them. Instead it generates an abstract study in the artist\u2019s general spirit, labelled plainly as a tribute rather than a copy, while the artist\u2019s real biography stays fully factual.',
  },
  {
    q: 'Why does Mindanao get its own room?',
    a: 'Because T\u2019boli weaving, Maranao okir and brasswork, and Bagobo, Mandaya and Tausug craft are living traditions, not historical footnotes — and because Philippine art history told only through Manila and Luzon leaves most of the country out. Silid ng Katutubong Mindanao exists to not do that.',
  },
  {
    q: 'Where does my data go?',
    a: 'Nowhere. Favourites, recently viewed works, your own exhibitions, progress and settings are all kept in this browser\u2019s local storage. There is no account and no server database behind any of it.',
  },
  {
    q: 'Are the curator notes historical fact?',
    a: 'No. Every curator note is explicitly labelled as an interpretation. Dates, mediums, dimensions and locations follow the standard catalogue record; the notes are one reading of a work, not a claim about it.',
  },
  {
    q: 'Why is the ambient sound not a recording?',
    a: 'It is synthesised on the fly with the Web Audio API rather than shipped as an audio file, and it only starts after you interact with the page, in line with browser autoplay rules.',
  },
]

export default function About() {
  return (
    <PageTransition>
      <header className="border-b border-[var(--rule)]">
        <div className="mx-auto max-w-[110rem] px-5 py-12 sm:px-10 lg:py-16">
          <p className="plaque text-[var(--gold)]">About</p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-none">
            Bahay Sining
          </h1>
          <p className="mt-5 max-w-reading text-sm leading-relaxed text-[var(--ink-soft)]">
            A house of art with no building — pre-colonial gold, three centuries of devotion,
            Ilustrados, golden light, modernists, National Artists, and a living Mindanao. {artworks.length}{' '}
            works, {artists.length} artists and traditions, {rooms.length} rooms, open at any hour.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-10">
        <section className="mb-16">
          <SectionHeading title="What this is" />
          <p className="max-w-reading text-sm leading-[1.85] text-[var(--ink-soft)]">
            This project treats a website like a building: rooms instead of pages, works hung on
            walls instead of laid out in a grid, and a small amount of ceremony around walking from
            one place to another. It is a student project — a Philippine companion to an earlier,
            Western-facing digital museum built the same way — not an official museum product, and
            it makes no claim to be complete. Philippine art and culture is far larger than one
            student project can hold; this is a walk through some of it, weighted deliberately
            toward Mindanao and the parts of the country a Manila-centred survey usually leaves out.
          </p>
        </section>

        <section className="mb-16">
          <SectionHeading title="Built with" />
          <ul className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="border border-[var(--rule)] px-3 py-1.5 text-xs uppercase tracking-plaque text-[var(--ink-soft)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <SectionHeading title="Frequently asked" />
          <dl className="space-y-8">
            {faq.map((item) => (
              <div key={item.q} className="border-t border-[var(--rule)] pt-5">
                <dt className="font-display text-xl italic">{item.q}</dt>
                <dd className="mt-2 max-w-reading text-sm leading-relaxed text-[var(--ink-soft)]">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-[var(--rule)] pt-8">
          <p className="text-sm text-[var(--ink-soft)]">
            Curious how something works, or found a door that does not open?{' '}
            <Link to="/museum" className="link-underline">
              Head back into the museum
            </Link>{' '}
            and keep exploring.
          </p>
        </section>
      </div>
    </PageTransition>
  )
}
