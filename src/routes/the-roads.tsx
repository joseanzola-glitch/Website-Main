
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/the-roads')({
  component: TheRoads,
  head: () => ({
    meta: [
      {
        title: 'The Roads Miami Real Estate | Jose Anzola, Compass',
      },
      {
        name: 'description',
        content:
          'Explore The Roads neighborhood in Miami, its residential character, local lifestyle, and real estate opportunities with Jose Anzola of Compass.',
      },
      {
        property: 'og:title',
        content: 'The Roads Miami Real Estate | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Discover The Roads in Miami and explore your options for buying or selling a home.',
      },
    ],
  }),
})

function TheRoads() {
  return (
    <div className="bg-white text-luxury-950">
      {/* Hero */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-end overflow-hidden bg-luxury-950">
        <img
          src="/images/neighborhoods/the-roads.jpg"
          alt="The Roads neighborhood in Miami, Florida"
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
            The Roads
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Tree-lined streets, distinctive homes, and a residential
            setting near the heart of Miami.
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
            Welcome to The Roads
          </h2>

          <div className="gold-divider mb-8" />

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            The Roads is an established Miami neighborhood known
            for its tree-lined streets, residential atmosphere,
            and mix of architectural styles. Its homes range
            from older residences with historic character to
            updated properties with contemporary features.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed">
            Situated southwest of Brickell, The Roads offers
            convenient access to Downtown Miami, Coconut Grove,
            and Coral Gables. Its location makes it an appealing
            area to explore for buyers seeking a residential
            setting near major Miami destinations.
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
              What Makes The Roads Distinctive?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">01</div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Residential Character
              </h3>
              <p className="text-luxury-600 leading-relaxed">
                Established streets and a variety of home
                styles give The Roads its distinctive character.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">02</div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Central Miami Location
              </h3>
              <p className="text-luxury-600 leading-relaxed">
                The neighborhood is close to Brickell and
                offers connections to other major Miami areas.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">03</div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Architectural Variety
              </h3>
              <p className="text-luxury-600 leading-relaxed">
                Buyers can explore properties with traditional,
                historic, and modern design influences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyers and sellers */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              For Homeowners
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Selling a Home in The Roads
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              A home's condition, location, lot size,
              architectural style, and improvements can all
              influence its positioning in the market.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Jose Anzola of Compass can help you review
              comparable properties, evaluate market
              conditions, and plan a marketing strategy
              tailored to your property.
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
              Buying a Home in The Roads
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              The Roads offers a variety of residential
              properties, including established homes,
              renovated residences, and newer designs.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Understanding property features, comparable
              sales, and neighborhood considerations can
              help buyers make informed decisions.
            </p>

            <Link
              to="/contact"
              className="btn-gold-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Ask Jose About The Roads
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
            Explore Your Real Estate Options in The Roads
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-9">
            Whether you're considering selling your home
            or exploring properties in The Roads, connect
            with Jose to discuss your next steps.
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
