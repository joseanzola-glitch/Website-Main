
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from '../components/Icons'

export const Route = createFileRoute('/miami-shores')({
  component: MiamiShores,
  head: () => ({
    meta: [
      {
        title: 'Miami Shores Real Estate & Neighborhood Guide | Jose Anzola, Compass',
      },
      {
        name: 'description',
        content:
          'Explore Miami Shores real estate, historic homes, tree-lined streets, and opportunities for buyers and sellers with Jose Anzola of Compass.',
      },
      {
        property: 'og:title',
        content: 'Miami Shores Real Estate | Jose Anzola',
      },
      {
        property: 'og:description',
        content:
          'Discover homes, neighborhood amenities, and real estate opportunities in Miami Shores, Florida.',
      },
    ],
  }),
})

function MiamiShores() {
  return (
    <div className="bg-white text-luxury-950">
      {/* Hero */}
      <section className="relative min-h-[440px] md:min-h-[560px] flex items-end overflow-hidden bg-luxury-950">
        <img
          src="/images/neighborhoods/miami-shores.jpg"
          alt="Residential neighborhood in Miami Shores, Florida"
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
            Miami Shores, Florida
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-5">
            Miami Shores
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Tree-lined streets, distinctive architecture, and
            established residential charm near Biscayne Bay.
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
            Welcome to Miami Shores
          </h2>

          <div className="gold-divider mb-8" />

          <p className="text-luxury-600 text-lg leading-relaxed mb-6">
            Miami Shores is an incorporated village in
            northeastern Miami-Dade County, known for
            its established residential streets, mature
            landscaping, and architectural variety.
            The community features a mix of historic
            residences, renovated homes, and contemporary
            properties.
          </p>

          <p className="text-luxury-600 text-lg leading-relaxed">
            Located near Biscayne Bay, Miami Shores
            offers access to local parks, recreational
            facilities, neighborhood businesses,
            and destinations throughout Greater Miami.
            Its residential character and variety
            of home styles make it a distinctive
            option for buyers exploring the area.
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
              What Makes Miami Shores Distinctive?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">01</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Architectural Character
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Miami Shores features a range of
                architectural styles, including
                historic Mediterranean Revival
                residences, mid-century homes,
                and updated contemporary properties.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">02</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Parks & Recreation
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                Residents have access to local
                parks and recreational amenities,
                including community sports
                facilities and outdoor spaces.
                Availability and access may vary
                by facility.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <div className="text-gold-600 text-3xl mb-5">03</div>

              <h3 className="font-serif text-2xl font-bold mb-4">
                Convenient Location
              </h3>

              <p className="text-luxury-600 leading-relaxed">
                The village is located near
                Biscayne Boulevard and offers
                access to nearby shopping,
                dining, waterfront destinations,
                and major Miami neighborhoods.
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
              Selling a Home in Miami Shores
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Miami Shores homes vary in age,
              architecture, lot size, renovations,
              and proximity to Biscayne Bay.
              Understanding these characteristics,
              together with recent comparable
              sales and competing listings,
              helps establish an informed
              pricing and marketing strategy.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Jose Anzola of Compass can help
              homeowners evaluate their property's
              market position and develop a
              personalized strategy to showcase
              its features to prospective buyers.
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
              Buying a Home in Miami Shores
            </h2>

            <p className="text-luxury-600 leading-relaxed mb-6">
              Buyers exploring Miami Shores
              can find a selection of historic
              homes, updated residences, and
              contemporary properties on
              established residential streets.
            </p>

            <p className="text-luxury-600 leading-relaxed mb-8">
              Important considerations may
              include property condition,
              renovation history, insurance
              requirements, flood-zone
              designation, lot dimensions,
              and applicable local building
              regulations.
            </p>

            <Link
              to="/contact"
              className="btn-gold-outline inline-flex items-center gap-2 px-7 py-4 rounded-lg"
            >
              Ask Jose About Miami Shores
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
            Explore Real Estate Opportunities in Miami Shores
          </h2>

          <p className="text-white/75 text-lg leading-relaxed mb-9">
            Whether you're preparing to sell
            your home or exploring properties
            in Miami Shores, connect with
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
