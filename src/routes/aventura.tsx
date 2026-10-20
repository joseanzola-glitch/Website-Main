
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/aventura')({
  component: Aventura,
  head: () => ({
    meta: [
      {
        title: 'Aventura FL Real Estate & Neighborhood Guide | Jose Anzola, Compass',
      },
      {
        name: 'description',
        content:
          'Explore Aventura Florida real estate, waterfront condos, luxury homes, shopping, and opportunities for buyers and sellers with Jose Anzola of Compass.',
      },
      {
        property: 'og:title',
        content: 'Aventura Florida Real Estate | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Discover waterfront residences, luxury condominiums, and real estate opportunities in Aventura, Florida.',
      },
    ],
  }),
})

function Aventura() {
  return (
    <div className="bg-white text-luxury-950">
      {/* Hero */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-end overflow-hidden bg-luxury-950">
        <img
          src="/images/neighborhoods/aventura.jpg"
          alt="Waterfront condominium buildings in Aventura, Florida"
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
            Aventura, Florida
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-5">
            Aventura
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Waterfront living, luxury condominiums, and
            premier shopping in northeastern Miami-Dade County.
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
            Welcome to Aventura
          </h2>

          <div className="gold-divider mb-8" />

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Aventura is a city in northeastern Miami-Dade
            County known for its waterfront residential
            communities, luxury condominiums, and
            shopping destinations. Located near the
            Intracoastal Waterway, it offers a mix
            of high-rise residences, townhomes,
            and gated single-family communities.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed">
            Residents enjoy access to Aventura Mall,
            the scenic Don Soffer Exercise Trail,
            parks, restaurants, and nearby coastal
            destinations such as Sunny Isles Beach.
            Its location also provides connections
            to neighboring areas in Miami-Dade
            and Broward counties.
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
              What Makes Aventura Distinctive?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">01</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Waterfront Residences
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Aventura features condominium
                communities overlooking waterways,
                marinas, and surrounding coastal
                scenery, with views and amenities
                varying by building and residence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">02</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Shopping & Dining
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Aventura Mall is a major regional
                shopping destination featuring
                retail, dining, and entertainment,
                with additional restaurants
                and businesses throughout the city.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">03</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Parks & Recreation
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                The Don Soffer Exercise Trail,
                city parks, and nearby waterfront
                destinations offer opportunities
                for walking, outdoor recreation,
                and enjoying South Florida's climate.
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
              Selling a Property in Aventura
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Aventura properties vary in
              building amenities, waterfront
              exposure, floor plans, community
              features, and property condition.
              Understanding comparable sales,
              competing listings, and buyer
              preferences is essential when
              developing a pricing strategy.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Jose Anzola of Compass can help
              homeowners evaluate their property's
              market position and create a
              tailored marketing approach that
              highlights its distinctive
              features and value.
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
              Buying a Property in Aventura
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Buyers can explore luxury
              waterfront condominiums,
              established residential towers,
              townhomes, and select
              single-family communities.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Important considerations may
              include association fees,
              special assessments, reserve
              funding, building inspections,
              rental restrictions, insurance,
              and financing eligibility.
            </p>

            <Link
              to="/contact"
              className="btn-gold-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Ask Jose About Aventura
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
            Explore Real Estate Opportunities in Aventura
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-9">
            Whether you're preparing to sell
            your property or exploring homes
            in Aventura, connect with Jose
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
