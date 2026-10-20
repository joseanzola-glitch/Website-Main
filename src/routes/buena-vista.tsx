
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/buena-vista')({
  component: BuenaVista,
  head: () => ({
    meta: [
      {
        title: 'Buena Vista Miami Real Estate & Neighborhood Guide | Jose Anzola, Compass',
      },
      {
        name: 'description',
        content:
          'Explore Buena Vista in Miami, Florida. Discover historic homes, neighborhood character, and opportunities for buyers and sellers with Jose Anzola of Compass.',
      },
      {
        property: 'og:title',
        content: 'Buena Vista Miami Real Estate | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Explore homes, local lifestyle, and real estate opportunities in Buena Vista, Miami.',
      },
    ],
  }),
})

function BuenaVista() {
  return (
    <div className="bg-white text-luxury-950">
      {/* Hero */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-end overflow-hidden bg-luxury-950">
        <img
          src="/images/neighborhoods/buena-vista.jpg"
          alt="Buena Vista neighborhood in Miami, Florida"
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
            Buena Vista
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Historic charm, distinctive homes, and a central Miami
            location near the Miami Design District.
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
            Welcome to Buena Vista
          </h2>

          <div className="gold-divider mb-8" />

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Buena Vista is an established residential neighborhood
            in Miami known for its historic architecture,
            tree-lined streets, and proximity to the Miami
            Design District. Its housing includes charming
            older residences, renovated properties, and
            contemporary homes.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed">
            The neighborhood offers a residential setting
            close to shopping, restaurants, galleries,
            and cultural destinations. Its central location
            provides access to nearby areas such as
            Midtown Miami, Wynwood, and the Upper Eastside.
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
              What Makes Buena Vista Distinctive?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">01</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Historic Architecture
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Buena Vista features historic residences,
                classic architectural details, and
                established residential streets that
                contribute to its distinctive character.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">02</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Design District Access
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Residents are close to the Miami Design
                District, known for its luxury boutiques,
                restaurants, art installations, and
                architectural destinations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">03</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Central Miami Location
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Buena Vista offers convenient access
                to Midtown, Wynwood, Biscayne Boulevard,
                and other destinations throughout
                Miami's urban core.
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
              Selling a Home in Buena Vista
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Buena Vista properties can differ significantly
              in architectural style, renovation quality,
              lot size, and condition. Understanding these
              characteristics, alongside recent comparable
              sales, is important when preparing a
              competitive listing strategy.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Jose Anzola of Compass can help homeowners
              evaluate their property's market position
              and develop a marketing strategy that
              highlights its distinctive features and
              appeal to prospective buyers.
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
              Buying a Home in Buena Vista
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Buyers exploring Buena Vista can find
              a range of properties, including historic
              homes, renovated residences, and modern
              construction in an established neighborhood.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              When evaluating homes, buyers may want
              to consider property condition, renovation
              history, lot dimensions, zoning, and any
              applicable historic preservation requirements.
            </p>

            <Link
              to="/contact"
              className="btn-gold-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Ask Jose About Buena Vista
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
            Explore Your Real Estate Opportunities in Buena Vista
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-9">
            Whether you're preparing to sell a property
            or exploring homes in Buena Vista, connect
            with Jose to discuss your real estate goals.
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
