
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/neighborhoods')({
  component: Neighborhoods,
  head: () => ({
    meta: [
      {
        title: 'Miami Neighborhoods | Jose Anzola, Compass',
      },
      {
        name: 'description',
        content:
          'Explore Shenandoah, The Roads, Silver Bluff, and Coral Gables with Jose Anzola of Compass. Discover Miami neighborhoods and real estate opportunities.',
      },
      {
        property: 'og:title',
        content: 'Explore Miami Neighborhoods | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Discover Miami neighborhoods and explore your options for buying or selling with Jose Anzola at Compass.',
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
                    alt={`${neighborhood.name} neighborhood in Miami area`}
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
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-divider mx-auto mb-6" />

          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-5">
            Thinking About Selling Your Home?
          </h2>

          <p className="text-luxury-600 text-lg leading-relaxed mb-10">
            Whether you're considering selling now or planning
            for the future, Jose can help you explore your
            property's value and develop a personalized strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/seller-valuation"
              className="btn-gold px-8 py-4 rounded-lg text-base"
            >
              Get My Home Valuation
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>

            <Link
              to="/contact"
              className="btn-gold-outline px-8 py-4 rounded-lg text-base"
            >
              Contact Jose
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
