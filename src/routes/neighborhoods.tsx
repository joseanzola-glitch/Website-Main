
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/neighborhoods')({
  component: Neighborhoods,
  head: () => ({
    meta: [
      {
        title: 'Miami Neighborhoods & Real Estate | Jose Anzola, Compass',
      },
      {
        name: 'description',
        content:
          'Explore 11 Miami-area neighborhoods including Coral Gables, Doral, Buena Vista, Edgewater, Miami Shores, Aventura, South Miami, and Miami Springs with Jose Anzola of Compass.',
      },
      {
        property: 'og:title',
        content: 'Explore Miami Neighborhoods | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Discover 11 distinctive Miami-area neighborhoods and explore your options for buying or selling real estate with Jose Anzola at Compass.',
      },
    ],
  }),
})

const neighborhoods = [
  {
    name: 'Shenandoah',
    location: 'Miami, Florida',
    description:
      'Historic character, established residential streets, and distinctive Miami homes.',
    image: '/images/neighborhoods/shenandoah.jpg',
    link: '/shenandoah',
  },
  {
    name: 'The Roads',
    location: 'Miami, Florida',
    description:
      'Tree-lined streets and residential living near Brickell and Downtown Miami.',
    image: '/images/neighborhoods/the-roads.jpg',
    link: '/the-roads',
  },
  {
    name: 'Silver Bluff',
    location: 'Miami, Florida',
    description:
      'An established residential community near Coral Way and Coconut Grove.',
    image: '/images/neighborhoods/silver-bluff.jpg',
    link: '/silver-bluff',
  },
  {
    name: 'Coral Gables',
    location: 'Coral Gables, Florida',
    description:
      'Mediterranean-inspired architecture, beautiful streets, and distinctive homes.',
    image: '/images/neighborhoods/coral-gables.jpg',
    link: '/coral-gables',
  },
  {
    name: 'Doral',
    location: 'Doral, Florida',
    description:
      'Modern residential communities, beautiful parks, shopping, dining, and a dynamic Miami-Dade lifestyle.',
    image: '/images/neighborhoods/doral.jpg',
    link: '/doral',
  },
  {
    name: 'Buena Vista',
    location: 'Miami, Florida',
    description:
      'Historic homes, tree-lined streets, and residential charm near the Miami Design District.',
    image: '/images/neighborhoods/buena-vista.jpg',
    link: '/buena-vista',
  },
  {
    name: 'Edgewater',
    location: 'Miami, Florida',
    description:
      'Waterfront condominiums, Biscayne Bay views, and contemporary urban living near Downtown Miami.',
    image: '/images/neighborhoods/edgewater.jpg',
    link: '/edgewater',
  },
  {
    name: 'Miami Shores',
    location: 'Miami Shores, Florida',
    description:
      'Established residential streets, distinctive architecture, and neighborhood charm near Biscayne Bay.',
    image: '/images/neighborhoods/miami-shores.jpg',
    link: '/miami-shores',
  },
  {
    name: 'Aventura',
    location: 'Aventura, Florida',
    description:
      'Luxury waterfront residences, condominium communities, premier shopping, and coastal convenience.',
    image: '/images/neighborhoods/aventura.jpg',
    link: '/aventura',
  },
  {
    name: 'South Miami',
    location: 'South Miami, Florida',
    description:
      'Tree-lined residential streets, local restaurants, and a vibrant downtown with convenient transit access.',
    image: '/images/neighborhoods/south-miami.jpg',
    link: '/south-miami',
  },
  {
    name: 'Miami Springs',
    location: 'Miami Springs, Florida',
    description:
      'Historic architecture, established residential neighborhoods, and distinctive community character.',
    image: '/images/neighborhoods/miami-springs.jpg',
    link: '/miami-springs',
  },
]

function Neighborhoods() {
  return (
    <div className="bg-white text-luxury-950">
      {/* Page introduction */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-gold-600 font-semibold uppercase tracking-[0.2em] text-xs mb-4">
            Explore South Florida
          </div>
          <div className="gold-divider mx-auto mb-6" />

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Explore Miami's
            <span className="block text-gradient-gold mt-2">
              Neighborhoods
            </span>
          </h1>

          <p className="text-luxury-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Every neighborhood has its own character and real estate
            opportunities. Explore some of Miami's distinctive
            communities and discover how Jose Anzola of Compass
            can help you navigate buying or selling a home.
          </p>
        </div>
      </section>

      {/* Clickable neighborhood photos */}
      <section className="ivory-bg py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {neighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.name}
                to={neighborhood.link}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-luxury-100">
                  <img
                    src={neighborhood.image}
                    alt={`${neighborhood.name} neighborhood in the Miami area`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-[0.2em] mb-2 text-white/80">
                      {neighborhood.location}
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold">
                      {neighborhood.name}
                    </h2>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-luxury-600 leading-relaxed mb-5">
                    {neighborhood.description}
                  </p>

                  <div className="flex items-center gap-2 text-gold-600 font-semibold text-sm">
                    Explore Neighborhood
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      {/* Seller CTA */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-divider mx-auto mb-6" />

          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Thinking About Selling Your Home in Miami?
          </h2>

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Selling a home in Miami-Dade requires more than simply
            putting a property on the market. From Coral Gables
            and Doral to Miami Shores, Shenandoah, and South Miami,
            each neighborhood has its own market conditions,
            buyer expectations, and opportunities.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Jose Anzola, a real estate agent with Compass,
            helps homeowners explore their property's potential
            market value, understand local competition, and
            develop a personalized selling strategy.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed mb-10">
            Whether you're preparing to sell a luxury home,
            considering relocating, or simply wondering
            what your property could be worth in today's
            Miami real estate market, start with a
            personalized home valuation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/seller-valuation"
              className="btn-gold px-8 py-4 rounded-lg text-base"
            >
              Find Out What My Home Is Worth
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/contact"
              className="btn-gold-outline px-8 py-4 rounded-lg text-base"
            >
              Speak With Jose About Selling
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
