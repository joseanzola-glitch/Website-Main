
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/edgewater')({
  component: Edgewater,
  head: () => ({
    meta: [
      {
        title: 'Edgewater Miami Real Estate & Neighborhood Guide | Jose Anzola, Compass',
      },
      {
        name: 'description',
        content:
          'Explore Edgewater Miami real estate, waterfront condos, Biscayne Bay views, and buying or selling opportunities with Jose Anzola of Compass.',
      },
      {
        property: 'og:title',
        content: 'Edgewater Miami Real Estate | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Discover waterfront living and real estate opportunities in Edgewater, Miami.',
      },
    ],
  }),
})

function Edgewater() {
  return (
    <div className="bg-white text-luxury-950">
      {/* Hero */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-end overflow-hidden bg-luxury-950">
        <img
          src="/images/neighborhoods/edgewater.jpg"
          alt="Edgewater Miami waterfront skyline and Biscayne Bay"
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
            Miami, Florida
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-5">
            Edgewater
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Waterfront residences, modern condominium towers,
            and sweeping views of Biscayne Bay.
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
            Welcome to Edgewater
          </h2>

          <div className="gold-divider mb-8" />

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Edgewater is a waterfront neighborhood along
            Biscayne Bay, just north of Downtown Miami.
            Known for its modern high-rise residences
            and urban lifestyle, the neighborhood
            offers a mix of luxury condominiums,
            established residential buildings,
            and newer developments.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed">
            Edgewater provides access to waterfront
            green spaces such as Margaret Pace Park,
            along with nearby shopping, dining,
            entertainment, and cultural destinations
            in Midtown Miami, Wynwood, and the
            Miami Design District.
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
              What Makes Edgewater Distinctive?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">01</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Biscayne Bay Views
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Many waterfront residences feature
                views of Biscayne Bay, the Miami
                skyline, and surrounding coastal
                neighborhoods, depending on the
                building and unit location.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">02</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Condominium Living
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Edgewater offers a wide selection
                of condominium residences, including
                buildings with amenities such as
                fitness centers, pools, concierge
                services, and resident lounges.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">03</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Urban Convenience
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Residents enjoy access to
                Margaret Pace Park, Biscayne
                Boulevard, nearby restaurants,
                and major Miami shopping and
                cultural destinations.
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
              Selling a Property in Edgewater
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Selling a condominium in Edgewater
              requires understanding building-specific
              pricing, floor plans, views, amenities,
              recent comparable sales, and competing
              listings. Monthly association fees
              and building conditions may also
              influence buyer decisions.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Jose Anzola of Compass can help
              property owners assess their
              market position and develop
              a marketing strategy that
              highlights their residence's
              features and appeal.
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
              Buying a Property in Edgewater
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Buyers can explore a range
              of condominium options,
              from established residential
              buildings to newer luxury
              towers with waterfront views
              and modern amenities.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Important considerations
              include association fees,
              building financials, reserve
              funding, assessments,
              inspection requirements,
              rental restrictions, and
              financing eligibility.
            </p>

            <Link
              to="/contact"
              className="btn-gold-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Ask Jose About Edgewater
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
            Explore Real Estate Opportunities in Edgewater
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-9">
            Whether you're preparing to sell
            your condominium or searching for
            a residence in Edgewater, connect
            with Jose to discuss your goals.
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
