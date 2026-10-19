
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/coral-gables')({
  component: CoralGables,
  head: () => ({
    meta: [
      {
        title: 'Coral Gables Real Estate | Jose Anzola, Compass',
      },
      {
        name: 'description',
        content:
          'Explore Coral Gables real estate, Mediterranean-inspired architecture, neighborhood highlights, and opportunities for buyers and sellers with Jose Anzola of Compass.',
      },
      {
        property: 'og:title',
        content: 'Coral Gables Real Estate | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Discover Coral Gables, Florida, and explore your options for buying or selling a home.',
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
          alt="Coral Gables neighborhood in Florida"
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
            Coral Gables
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Timeless architecture, beautiful streets, and
            distinctive residential properties in one of
            South Florida's most recognizable communities.
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
            Welcome to Coral Gables
          </h2>

          <div className="gold-divider mb-8" />

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Coral Gables is a distinctive city in Miami-Dade
            County, recognized for its Mediterranean-inspired
            architecture, landscaped streets, and carefully
            planned residential areas.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed">
            Often called the City Beautiful, Coral Gables
            features historic residences, luxury estates,
            and modern homes. The city also offers access
            to destinations such as Miracle Mile, the
            Venetian Pool, and the University of Miami.
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
                landmarks, and thoughtfully designed homes
                contribute to the city's identity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">02</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Lifestyle & Amenities
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Coral Gables offers shopping, restaurants,
                cultural destinations, parks, and access
                to major Miami-area locations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">03</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Diverse Luxury Homes
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                From historic residences to waterfront
                estates and contemporary properties,
                Coral Gables offers a wide range of
                distinctive real estate.
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
              Selling a Home in Coral Gables
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Pricing a property in Coral Gables involves
              understanding its location, architectural
              character, condition, lot size, renovations,
              and recent comparable sales.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Jose Anzola of Compass can help homeowners
              evaluate their property's market position
              and develop a tailored marketing strategy
              designed to reach qualified buyers.
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
              Buying a Home in Coral Gables
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Coral Gables offers properties across
              different architectural styles, price
              ranges, and residential settings,
              including historic homes and luxury estates.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Buyers should consider property condition,
              location, comparable sales, and applicable
              local building or historic preservation
              requirements when evaluating a home.
            </p>

            <Link
              to="/contact"
              className="btn-gold-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Ask Jose About Coral Gables
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
            Explore Your Real Estate Opportunities in Coral Gables
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-9">
            Whether you're preparing to sell a property
            or searching for your next home in Coral Gables,
            connect with Jose to discuss your real estate goals.
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
