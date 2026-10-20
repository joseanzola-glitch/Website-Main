
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/south-miami')({
  component: SouthMiami,
  head: () => ({
    meta: [
      {
        title: 'South Miami FL Real Estate & Neighborhood Guide | Jose Anzola, Compass',
      },
      {
        name: 'description',
        content:
          'Discover South Miami real estate, residential neighborhoods, downtown shopping, and opportunities for buyers and sellers with Jose Anzola of Compass.',
      },
      {
        property: 'og:title',
        content: 'South Miami Real Estate | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Explore homes, neighborhood highlights, and real estate opportunities in South Miami, Florida.',
      },
    ],
  }),
})

function SouthMiami() {
  return (
    <div className="bg-white text-luxury-950">
      {/* Hero */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-end overflow-hidden bg-luxury-950">
        <img
          src="/images/neighborhoods/south-miami.jpg"
          alt="South Miami Florida neighborhood and downtown streetscape"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20 text-white">
          <Link
            to="/neighborhoods"
            className="inline-block text-sm text-white/80 hover:text-white mb-6"
          >
            ← All Neighborhoods
          </Link>

          <p className="text-xs uppercase tracking-[0.25em] text-white/80 mb-4">
            South Miami, Florida
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-5">
            South Miami
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Tree-lined residential streets, local dining, and a
            vibrant downtown in the heart of Miami-Dade County.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Discover the Neighborhood
          </p>

          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">
            Welcome to South Miami
          </h2>

          <div className="gold-divider mb-8" />

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            South Miami is an incorporated city in Miami-Dade
            County known for its established residential
            neighborhoods, tree-lined streets, and walkable
            downtown district. The city offers a variety
            of housing styles, including traditional
            single-family homes, renovated residences,
            townhouses, and condominiums.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed">
            Downtown South Miami features restaurants,
            local shops, and entertainment destinations.
            The city also provides convenient access to
            the South Miami Metrorail station, nearby
            Coral Gables, and the University of Miami
            area in neighboring Coral Gables.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="ivory-bg py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              Neighborhood Highlights
            </p>

            <h2 className="font-serif text-3xl md:text-5xl font-bold">
              What Makes South Miami Distinctive?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">01</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Residential Character
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Established neighborhoods feature
                mature landscaping, diverse home
                styles, and residential streets
                with a distinctive South Miami
                atmosphere.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">02</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Downtown Lifestyle
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Downtown South Miami offers
                restaurants, retail, and local
                businesses, creating opportunities
                to enjoy shopping and dining
                close to residential areas.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">03</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Transit & Accessibility
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                The South Miami Metrorail
                station and nearby major roads
                provide transportation options
                to employment centers and
                destinations throughout Miami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyers and Sellers */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              For Homeowners
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Selling a Home in South Miami
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              South Miami properties can vary
              considerably in lot size, home
              condition, renovation quality,
              and location. Understanding
              recent comparable sales and
              competing listings helps
              establish an informed pricing
              and marketing strategy.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Jose Anzola of Compass can help
              homeowners evaluate their
              property's market position
              and develop a tailored
              marketing strategy to reach
              prospective buyers.
            </p>

            <Link
              to="/seller-valuation"
              className="btn-gold inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Request a Home Valuation
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              For Home Buyers
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Buying a Home in South Miami
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Buyers exploring South Miami
              can find single-family homes,
              renovated residences,
              townhouses, and condominiums
              in a variety of locations.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Important considerations
              may include property condition,
              lot dimensions, local zoning,
              insurance, and proximity
              to downtown amenities
              and transportation.
            </p>

            <Link
              to="/contact"
              className="btn-gold-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Ask Jose About South Miami
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-luxury-950 text-white py-20 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Let's Connect
          </p>

          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Explore Real Estate Opportunities in South Miami
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-9">
            Whether you're preparing to sell
            your home or exploring properties
            in South Miami, connect with Jose
            to discuss your real estate goals.
          </p>

          <Link
            to="/contact"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-lg"
          >
            Contact Jose
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
