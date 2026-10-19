
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/silver-bluff')({
  component: SilverBluff,
  head: () => ({
    meta: [
      {
        title: 'Silver Bluff Miami Real Estate | Jose Anzola, Compass',
      },
      {
        name: 'description',
        content:
          'Explore Silver Bluff in Miami, including neighborhood highlights, homes, and real estate opportunities for buyers and sellers with Jose Anzola of Compass.',
      },
      {
        property: 'og:title',
        content: 'Silver Bluff Miami Real Estate | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Discover Silver Bluff in Miami and explore your options for buying or selling a home.',
      },
    ],
  }),
})

function SilverBluff() {
  return (
    <div className="bg-white text-luxury-950">
      {/* Neighborhood Hero */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-end overflow-hidden bg-luxury-950">
        <img
          src="/images/neighborhoods/silver-bluff.jpg"
          alt="Silver Bluff neighborhood in Miami, Florida"
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
            Silver Bluff
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Established residential streets, distinctive homes,
            and a convenient location near Coconut Grove
            and Coral Gables.
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
            Welcome to Silver Bluff
          </h2>

          <div className="gold-divider mb-8" />

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Silver Bluff is an established residential
            neighborhood in Miami known for its mature
            landscaping, distinctive homes, and a mix of
            traditional and updated architectural styles.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed">
            Located near Coral Way, Coconut Grove, and Coral
            Gables, Silver Bluff offers access to some of
            Miami's well-known shopping, dining, and
            cultural destinations while maintaining its
            residential neighborhood character.
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
              What Makes Silver Bluff Distinctive?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">01</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Residential Character
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Established streets, mature landscaping,
                and varied home designs contribute to
                Silver Bluff's distinctive identity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">02</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Convenient Location
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Silver Bluff is situated near Coconut Grove,
                Coral Gables, and major Miami corridors.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">03</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Architectural Variety
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                The neighborhood includes older residences,
                renovated homes, and properties featuring
                modern improvements.
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
              Selling a Home in Silver Bluff
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              When preparing to sell a home in Silver Bluff,
              factors such as property condition, lot size,
              location, architectural features, and recent
              improvements can influence pricing and
              marketing decisions.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Jose Anzola of Compass can help you evaluate
              comparable properties, understand market
              conditions, and create a marketing strategy
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
              Buying a Home in Silver Bluff
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Buyers exploring Silver Bluff can find a
              range of residential properties with
              different architectural styles, layouts,
              and levels of renovation.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Reviewing property condition, comparable
              sales, and neighborhood-specific considerations
              can help buyers evaluate opportunities and
              make informed decisions.
            </p>

            <Link
              to="/contact"
              className="btn-gold-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Ask Jose About Silver Bluff
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
            Your Silver Bluff Real Estate Journey Starts Here
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-9">
            Whether you're considering selling your home
            or exploring properties in Silver Bluff,
            connect with Jose to discuss your real
            estate goals.
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
