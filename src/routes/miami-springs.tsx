
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/miami-springs')({
  component: MiamiSprings,
  head: () => ({
    meta: [
      {
        title: 'Miami Springs FL Real Estate & Neighborhood Guide | Jose Anzola, Compass',
      },
      {
        name: 'description',
        content:
          'Explore Miami Springs Florida real estate, historic homes, local parks, and opportunities for home buyers and sellers with Jose Anzola of Compass.',
      },
      {
        property: 'og:title',
        content: 'Miami Springs Real Estate | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Discover historic charm, residential neighborhoods, and real estate opportunities in Miami Springs, Florida.',
      },
    ],
  }),
})

function MiamiSprings() {
  return (
    <div className="bg-white text-luxury-950">
      {/* Hero */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-end overflow-hidden bg-luxury-950">
        <img
          src="/images/neighborhoods/miami-springs.jpg"
          alt="Historic architecture and residential character in Miami Springs, Florida"
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
            Miami Springs, Florida
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-5">
            Miami Springs
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Historic architecture, established residential streets,
            and a distinctive community near Miami International Airport.
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
            Welcome to Miami Springs
          </h2>

          <div className="gold-divider mb-8" />

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Miami Springs is an incorporated city in
            Miami-Dade County known for its historic
            character, established residential streets,
            and distinctive architecture. Founded in
            the 1920s, the city includes homes influenced
            by Pueblo Revival, Mediterranean Revival,
            and other architectural styles.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed">
            Located near Miami International Airport,
            Miami Springs offers access to local parks,
            recreational facilities, neighborhood
            businesses, and major transportation routes.
            Historic landmarks such as the Curtiss Mansion
            contribute to the city's unique identity.
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
              What Makes Miami Springs Distinctive?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">01</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Historic Architecture
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Miami Springs features historic
                residences and architectural
                influences that reflect the
                city's development during
                the early twentieth century.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">02</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Parks & Recreation
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Residents have access to
                neighborhood parks, community
                recreational facilities,
                and outdoor spaces that
                support an active lifestyle.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">03</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Convenient Location
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                The city offers proximity
                to Miami International Airport
                and access to major roads
                connecting residents with
                employment centers and
                destinations across Miami-Dade.
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
              Selling a Home in Miami Springs
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Miami Springs properties vary
              in architectural style, age,
              lot size, renovations, and
              overall condition. Reviewing
              comparable sales and competing
              listings is important when
              establishing an appropriate
              pricing and marketing strategy.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Jose Anzola of Compass can help
              homeowners evaluate their
              property's market position
              and develop a tailored
              marketing approach that
              highlights its unique
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
              Buying a Home in Miami Springs
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Buyers exploring Miami Springs
              can find historic residences,
              updated single-family homes,
              and properties with a variety
              of architectural styles and
              lot configurations.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Important considerations
              may include property condition,
              renovation history, local
              building regulations, flood
              zones, insurance, and potential
              airport-related noise.
            </p>

            <Link
              to="/contact"
              className="btn-gold-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Ask Jose About Miami Springs
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
            Explore Real Estate Opportunities in Miami Springs
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-9">
            Whether you're preparing to sell
            your home or exploring properties
            in Miami Springs, connect with
            Jose to discuss your real estate goals.
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
