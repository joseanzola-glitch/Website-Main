
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/doral')({
  component: Doral,
  head: () => ({
    meta: [
      {
        title: 'Doral FL Real Estate & Neighborhood Guide | Jose Anzola, Compass',
      },
      {
        name: 'description',
        content:
          'Explore Doral, Florida real estate, local amenities, residential communities, and opportunities for home buyers and sellers with Jose Anzola of Compass.',
      },
      {
        property: 'og:title',
        content: 'Doral Florida Real Estate | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Discover Doral, Florida and explore your options for buying or selling a home with Jose Anzola.',
      },
    ],
  }),
})

function Doral() {
  return (
    <div className="bg-white text-luxury-950">
      {/* Neighborhood Hero */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-end overflow-hidden bg-luxury-950">
        <img
          src="/images/neighborhoods/doral.jpg"
          alt="Doral neighborhood in Miami-Dade County, Florida"
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
            Miami-Dade County, Florida
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-5">
            Doral
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Modern communities, beautiful parks, and a dynamic
            lifestyle in one of Miami-Dade County's distinctive cities.
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
            Welcome to Doral
          </h2>

          <div className="gold-divider mb-8" />

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Located west of Miami International Airport,
            Doral is a thriving city in Miami-Dade County
            known for its residential communities, business
            districts, parks, and shopping destinations.
            The city offers a mix of contemporary homes,
            townhouses, condominiums, and gated communities.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed">
            Residents enjoy destinations such as Downtown
            Doral, CityPlace Doral, and Doral Central Park.
            With convenient access to major highways and
            employment centers, Doral offers a variety
            of residential and lifestyle options.
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
              What Makes Doral Distinctive?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">01</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Residential Communities
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Doral offers a mix of gated neighborhoods,
                single-family homes, townhouses, and
                condominium communities with a variety
                of amenities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">02</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Shopping & Dining
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Downtown Doral and CityPlace Doral provide
                restaurants, retail destinations, and
                spaces for community activities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">03</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Parks & Recreation
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Doral features public parks, walking
                paths, recreational facilities, and
                outdoor spaces throughout the city.
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
              Selling a Home in Doral
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Selling a property in Doral requires
              understanding its location, community
              amenities, property condition, recent
              comparable sales, and buyer demand.
              Features such as outdoor space, renovations,
              and community facilities can also influence
              how a property is positioned.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Jose Anzola of Compass can help homeowners
              evaluate their property's market position,
              review comparable listings, and develop
              a personalized marketing strategy designed
              to attract qualified buyers.
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
              Buying a Home in Doral
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Doral offers a variety of housing options,
              from modern condominiums and townhouses
              to spacious single-family homes and
              properties in gated communities.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Buyers can compare locations, community
              amenities, association fees, property
              features, and recent sales when evaluating
              their options in Doral.
            </p>

            <Link
              to="/contact"
              className="btn-gold-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Ask Jose About Doral
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
            Explore Your Real Estate Opportunities in Doral
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-9">
            Whether you're preparing to sell your home
            or exploring properties in Doral, connect
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
