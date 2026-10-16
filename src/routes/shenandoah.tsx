
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/shenandoah')({
  component: Shenandoah,
  head: () => ({
    meta: [
      {
        title: 'Shenandoah Miami Real Estate | Jose Anzola, Compass',
      },
      {
        name: 'description',
        content:
          'Explore Shenandoah, Miami real estate, neighborhood character, and opportunities for home buyers and sellers with Jose Anzola of Compass.',
      },
      {
        property: 'og:title',
        content: 'Shenandoah Miami Real Estate | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Discover Shenandoah in Miami and explore your options for buying or selling a home.',
      },
    ],
  }),
})

function Shenandoah() {
  return (
    <div className="bg-white text-luxury-950">
      {/* Neighborhood hero */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-end overflow-hidden bg-luxury-950">
        <img
          src="/images/neighborhoods/shenandoah.jpg"
          alt="Shenandoah neighborhood in Miami, Florida"
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
            Shenandoah
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Historic charm, distinctive homes, and a central Miami location.
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
            Welcome to Shenandoah
          </h2>

          <div className="gold-divider mb-8" />

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Shenandoah is an established residential neighborhood
            in Miami known for its historic character, mature
            landscaping, and a mix of architectural styles.
            Its streets feature homes that reflect different
            periods of Miami's residential development.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed">
            Located near Coral Way and Little Havana, Shenandoah
            offers convenient access to areas such as Brickell,
            Downtown Miami, and Coral Gables. Buyers and homeowners
            appreciate its combination of neighborhood character
            and central location.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="ivory-bg py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              Local Character
            </p>

            <h2 className="font-serif text-3xl md:text-5xl font-bold">
              What Makes Shenandoah Distinctive?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">01</div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Architectural Character
              </h3>
              <p className="text-luxury-600 leading-relaxed">
                A mix of historic and updated homes gives
                Shenandoah a distinctive residential identity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">02</div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Central Location
              </h3>
              <p className="text-luxury-600 leading-relaxed">
                The neighborhood is positioned near major Miami
                destinations, including Coral Gables and Brickell.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">03</div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Established Streets
              </h3>
              <p className="text-luxury-600 leading-relaxed">
                Mature trees, residential blocks, and varied
                home designs contribute to the area's character.
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
              Selling a Home in Shenandoah
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Every home has features that can influence its
              market positioning, including location, condition,
              lot size, renovations, and architectural character.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Jose Anzola of Compass can help you evaluate
              comparable properties, understand current market
              conditions, and develop a marketing strategy
              tailored to your home.
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
              Buying a Home in Shenandoah
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Shenandoah offers a range of residential properties,
              from older homes with original architectural details
              to renovated residences with modern finishes.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Understanding property condition, recent comparable
              sales, and neighborhood-specific considerations
              can help buyers make informed decisions.
            </p>

            <Link
              to="/contact"
              className="btn-gold-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Ask Jose About Shenandoah
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
            Your Shenandoah Real Estate Journey Starts Here
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-9">
            Whether you're preparing to sell or exploring
            your next home, connect with Jose to discuss
            your real estate goals.
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
