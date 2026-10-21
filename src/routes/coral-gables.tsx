
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/coral-gables')({
  component: CoralGables,
  head: () => ({
    meta: [
      {
        title: 'Coral Gables Real Estate Agent & Home Values | Jose Anzola',
      },
      {
        name: 'description',
        content:
          'Thinking of selling your home in Coral Gables, FL? Explore local real estate, property values, and personalized selling strategies with Jose Anzola at Compass.',
      },
      {
        property: 'og:title',
        content: 'Coral Gables Real Estate & Home Valuation | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Discover Coral Gables real estate and learn how Jose Anzola of Compass can help you evaluate your home and prepare for a successful sale.',
      },
    ],
  }),
})

function CoralGables() {
  return (
    <div className="bg-white text-luxury-950">
      {/* Neighborhood Hero */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-end overflow-hidden bg-luxury-950">
        <img
          src="/images/neighborhoods/coral-gables.jpg"
          alt="Residential neighborhood and real estate in Coral Gables, Florida"
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
            Coral Gables, Florida
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-5">
            Coral Gables Real Estate
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Explore distinctive homes, neighborhood character,
            and opportunities to buy or sell real estate in
            Coral Gables, Florida.
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
            Living in Coral Gables, Florida
          </h2>

          <div className="gold-divider mb-8" />

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Coral Gables is a distinctive city in Miami-Dade
            County, known for its Mediterranean-inspired
            architecture, landscaped streets, and carefully
            planned residential communities.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Often called the City Beautiful, Coral Gables
            features historic residences, luxury estates,
            waterfront properties, and contemporary homes.
            Its residential areas offer a variety of
            architectural styles and property types.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed">
            The city is also home to well-known destinations
            including Miracle Mile, Venetian Pool, and the
            University of Miami. These amenities contribute
            to the distinctive lifestyle associated with
            Coral Gables real estate.
          </p>
        </div>
      </section>

      {/* Neighborhood Highlights */}
      <section className="ivory-bg py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              Neighborhood Highlights
            </p>

            <h2 className="font-serif text-3xl md:text-5xl font-bold">
              What Makes Coral Gables Distinctive?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">01</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Iconic Architecture
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Mediterranean Revival architecture, historic
                landmarks, and thoughtfully designed residences
                contribute to the city's recognizable character.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">02</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Lifestyle & Amenities
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Coral Gables offers restaurants, shopping,
                cultural destinations, parks, and convenient
                connections to surrounding Miami communities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">03</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Distinctive Luxury Homes
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                From historic residences to waterfront
                estates and contemporary properties,
                Coral Gables offers a diverse selection
                of distinctive residential real estate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyers and Sellers */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Seller Content */}
          <div>
            <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              For Coral Gables Homeowners
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Selling a Home in Coral Gables
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Wondering what your Coral Gables home is worth?
              Whether you own a historic Mediterranean-style
              residence, a luxury estate, or a modern property,
              understanding your home's potential market value
              is an important first step toward selling.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Property values can vary based on location,
              architectural character, condition, lot size,
              renovations, and recent comparable sales.
              A personalized evaluation can help homeowners
              understand how their property compares with
              competing homes on the market.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Jose Anzola of Compass helps Coral Gables
              homeowners evaluate their property's market
              position and develop a tailored pricing and
              marketing strategy. Whether you're ready to
              list or simply exploring your options,
              request a home valuation to get started.
            </p>

            <Link
              to="/seller-valuation"
              className="btn-gold inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Find Out What My Home Is Worth
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Buyer Content */}
          <div>
            <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              For Home Buyers
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Buying a Home in Coral Gables
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Coral Gables offers properties across different
              architectural styles, price ranges, and residential
              settings, including historic homes, luxury
              estates, and waterfront residences.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Buyers should consider property condition,
              location, comparable sales, and applicable
              building or historic preservation requirements
              when evaluating a property.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Whether you're relocating to Coral Gables,
              searching for a distinctive luxury home,
              or exploring the local real estate market,
              Jose can help you review available options
              and navigate the buying process.
            </p>

            <Link
              to="/contact"
              className="btn-gold-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Ask Jose About Coral Gables Homes
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Home Valuation Information */}
      <section className="ivory-bg py-20 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Coral Gables Home Values
          </p>

          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">
            What Determines Your Coral Gables Home's Value?
          </h2>

          <div className="gold-divider mb-8" />

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            If you're considering selling your home in
            Coral Gables, understanding the factors that
            influence its potential market value can help
            you plan your next move.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Recent comparable sales, property condition,
            architectural features, square footage,
            lot size, renovations, and location all
            contribute to a property's market position.
            Historic characteristics or waterfront
            features may also require additional
            consideration during the pricing process.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed mb-8">
            An individualized home valuation provides
            a more relevant starting point than relying
            exclusively on a general online estimate.
            Jose can help you review your property's
            characteristics alongside local market data.
          </p>

          <Link
            to="/seller-valuation"
            className="btn-gold inline-flex items-center gap-2 px-7 py-4 rounded-lg"
          >
            Request My Coral Gables Home Valuation
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Internal Navigation */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">
            Explore More Miami Neighborhoods
          </h2>

          <p className="text-luxury-600 leading-relaxed mb-8">
            Compare Coral Gables with nearby Miami-area
            communities and discover additional real estate
            opportunities throughout South Florida.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/south-miami"
              className="btn-gold-outline px-6 py-3 rounded-lg"
            >
              South Miami
            </Link>

            <Link
              to="/silver-bluff"
              className="btn-gold-outline px-6 py-3 rounded-lg"
            >
              Silver Bluff
            </Link>

            <Link
              to="/the-roads"
              className="btn-gold-outline px-6 py-3 rounded-lg"
            >
              The Roads
            </Link>

            <Link
              to="/neighborhoods"
              className="btn-gold-outline px-6 py-3 rounded-lg"
            >
              All Neighborhoods
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-luxury-950 text-white py-20 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Coral Gables Real Estate
          </p>

          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Ready to Sell Your Home in Coral Gables?
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-9">
            Whether you're preparing to sell a luxury property,
            exploring your home's potential value, or planning
            your next move, connect with Jose Anzola of Compass
            to discuss a personalized real estate strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/seller-valuation"
              className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg"
            >
              Get My Home Valuation
              <ArrowRightIcon className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="btn-gold-outline inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg"
            >
              Contact Jose
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
