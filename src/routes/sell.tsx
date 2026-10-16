import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowRightIcon,
  CheckIcon,
  HomeIcon,
  PhoneIcon,
  CalendarIcon,
} from '../components/Icons'
import { ContactForm } from '../components/Forms'

export const Route = createFileRoute('/sell')({
  component: Sell,
  head: () => ({
    meta: [
      { title: 'Sell Your Miami Home for Top Dollar | Jose Anzola, Compass' },
      {
        name: 'description',
        content:
          'Selling in Miami or South Florida? Jose Anzola of Compass combines data-driven pricing, strong marketing and tough negotiation to help you net more.',
      },
      {
        property: 'og:title',
        content: 'Sell Your Miami Home for Top Dollar | Jose Anzola, Compass',
      },
      {
        property: 'og:description',
        content:
          'Selling in Miami or South Florida? Jose Anzola of Compass combines data-driven pricing, strong marketing and tough negotiation to help you net more.',
      },
    ],
  }),
})

function Sell() {
  return (
    <div className="bg-white text-luxury-950">
      {/* Hero */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <div className="text-gold-600 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Sellers</div>
            <div className="gold-divider mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-[1.05]">
              Sell for top dollar.
              <span className="block text-gradient-gold mt-2">With a strategy built to win.</span>
            </h1>
            <p className="text-luxury-600 text-lg leading-relaxed mb-8">
              Selling in Miami is equal parts preparation, pricing, and presentation. Jose combines
              live comps, hyperlocal demand data, and an investor's eye to position your home for
              the strongest possible outcome — and negotiates hard to net you the most at closing.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Data-driven pricing strategy',
                'Compass Concierge: pre-sale upgrades with no upfront cost',
                'Private Exclusive pre-marketing to test demand',
                'Full marketing launch: pro media, print, paid, open houses',
                'Weekly reporting and aggressive negotiation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-3 h-3 text-gold-600" />
                  </span>
                  <span className="text-luxury-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+13059045613" className="btn-gold-outline px-6 py-3 rounded-lg text-sm">
                <PhoneIcon className="w-4 h-4 mr-2" />
                Call (305) 904-5613
              </a>
              <Link to="/contact" className="btn-ghost px-6 py-3 rounded-lg text-sm">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="luxury-card rounded-2xl p-7 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gold-400/20 flex items-center justify-center text-gold-600">
                  <HomeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-luxury-950">Talk to Jose</h2>
                  <p className="text-luxury-400 text-xs">Tell me about your home. No obligation.</p>
                </div>
              </div>
              <ContactForm theme="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Seller process */}
      <section className="ivory-bg py-20 md:py-28 px-6 text-luxury-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-gold-600 font-semibold uppercase tracking-[0.2em] text-xs mb-4">The Seller Process</div>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Three phases. One clean path to closing.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                num: '01',
                phase: 'Pre-Market',
                desc: 'Everything that happens before we go live.',
                steps: [
                  'Strategy session & pricing plan',
                  'Recommended prep: repairs, staging, pro photography',
                  'Listing agreement & launch plan',
                  'Compass Concierge financing if desired',
                ],
              },
              {
                num: '02',
                phase: 'On-Market',
                desc: 'Exposure, interest, offers.',
                steps: [
                  'Compass Private Exclusive soft launch',
                  'Full MLS launch + syndication',
                  'Open houses & agent tours',
                  'Weekly reporting with feedback & metrics',
                ],
              },
              {
                num: '03',
                phase: 'Closing',
                desc: 'From offer to keys handed over.',
                steps: [
                  'Offer review & counter strategy',
                  'Contract to close timeline management',
                  'Inspections, appraisal, and contingency handling',
                  'Clean close, keys delivered',
                ],
              },
            ].map((p) => (
              <div key={p.phase} className="ivory-card rounded-2xl p-8">
                <div className="step-number mb-4">{p.num}</div>
                <h3 className="font-serif text-2xl font-bold mb-2">{p.phase}</h3>
                <p className="text-luxury-500 text-sm mb-5">{p.desc}</p>
                <ul className="space-y-2.5">
                  {p.steps.map((step) => (
                    <li key={step} className="flex items-start gap-2.5 text-luxury-700 text-sm">
                      <CheckIcon className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-ivory-100 border-y border-luxury-950/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '98%', label: 'List-to-sold price ratio' },
            { value: '22', label: 'Avg days on market' },
            { value: '$100M+', label: 'Sales volume' },
            { value: '240+', label: 'Homes closed' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-gradient-gold text-3xl md:text-4xl font-serif font-bold mb-2">{s.value}</div>
              <div className="text-luxury-500 text-xs font-medium uppercase tracking-[0.15em]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

            {/* Seller proof: reviews + recent sales */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-gold-600 font-semibold uppercase tracking-[0.2em] text-xs mb-4">Seller Results</div>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-luxury-950 leading-tight">
              What sellers say, and what sold.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
            {[
              {
                text: 'The team is incredible. They sold my properties in record time, and they made the entire process super easy. Thank you for everything.',
                name: 'Alfredo Schael',
                role: 'Seller',
              },
              {
                text: 'Jose and Krystyna did an excellent job during the sales process of our property in the prestigious Coral Ridge section of Fort Lauderdale. They assisted us step by step and helped us overcome many hurdles successfully. They were always available and very responsive. We felt supported and educated throughout the process. We are very pleased and highly recommend their team.',
                name: 'Elfie Wagner',
                role: 'Seller, Coral Ridge',
              },
            ].map((t) => (
              <div key={t.name} className="luxury-card rounded-2xl p-8">
                <p className="text-luxury-600 leading-relaxed mb-6 text-sm italic">"{t.text}"</p>
                <div className="text-luxury-950 font-semibold text-sm">{t.name}</div>
                <div className="text-luxury-400 text-xs">{t.role}</div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
            {[
              { area: 'Silver Bluff', address: '1930 SW 25th St', price: '$2,320,000' },
              { area: 'Hollywood Beach', address: '2711 S Ocean Dr, Unit 1202', price: '$2,300,000' },
              { area: 'Biscayne Park', address: '835 NE 120th St', price: '$2,250,000' },
            ].map((s) => (
              <div key={s.address} className="luxury-card rounded-2xl p-6 text-center">
                <div className="text-gold-600 text-[10px] font-bold uppercase tracking-widest mb-2">Sold · {s.area}</div>
                <div className="font-serif text-2xl font-bold text-luxury-950 mb-1">{s.price}</div>
                <div className="text-luxury-500 text-sm">{s.address}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/listings" className="btn-gold-outline px-8 py-4 rounded-lg text-base">
              See All Sold Homes
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-5">
            What is your home worth today?
          </h2>
          <p className="text-luxury-600 text-lg leading-relaxed mb-10">
            Get a complimentary, data-backed valuation and a custom selling plan — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/seller-valuation" className="btn-gold px-8 py-4 rounded-lg text-base">
              Get My Home Valuation
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/contact" className="btn-gold-outline px-8 py-4 rounded-lg text-base">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
