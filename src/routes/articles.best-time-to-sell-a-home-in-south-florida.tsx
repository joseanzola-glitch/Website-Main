import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/best-time-to-sell-a-home-in-south-florida')({
  head: () => ({
    meta: [
      { title: 'Best Time to Sell a Home in South Florida: Does Winter Help? | Jose Anzola' },
      {
        name: 'description',
        content: 'Is winter a good time to sell a home in South Florida? Compare listing now vs. waiting for spring, get a simple prep timeline, and learn how to price for the season.',
      },
    ],
  }),
  component: ArticlePage,
})

// ---- COLORS ----
const GOLD = '#9a7429'
const DARK = '#1a1a1a'
const TEXT = '#333333'
const GRAY = '#6b6b6b'
const LINE = '#e5e2dc'
const BEIGE = '#f3f1ec'

// ---- STYLES ----
const pageStyle = { maxWidth: '740px', margin: '0 auto', padding: '56px 24px 80px' }

const backLinkStyle = {
  display: 'inline-block',
  marginBottom: '28px',
  fontSize: '15px',
  color: GOLD,
  textDecoration: 'none',
  fontWeight: 600,
}

const eyebrowStyle = {
  fontSize: '13px',
  fontWeight: 600,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: GOLD,
  marginBottom: '16px',
}

const h1Style = {
  fontSize: 'clamp(30px, 5vw, 44px)',
  fontWeight: 700,
  lineHeight: 1.15,
  color: DARK,
  marginBottom: '20px',
}

const bylineStyle = {
  fontSize: '15px',
  color: GRAY,
  paddingBottom: '28px',
  marginBottom: '36px',
  borderBottom: `1px solid ${LINE}`,
}

const photoStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '12px',
  marginBottom: '36px',
  display: 'block',
}

const h2Style = {
  fontSize: '26px',
  fontWeight: 700,
  lineHeight: 1.25,
  color: DARK,
  marginTop: '48px',
  marginBottom: '14px',
}

const h3Style = {
  fontSize: '20px',
  fontWeight: 700,
  color: DARK,
  marginTop: '28px',
  marginBottom: '10px',
}

const pStyle = {
  fontSize: '18px',
  lineHeight: 1.75,
  color: TEXT,
  marginBottom: '20px',
}

const introStyle = { ...pStyle, fontSize: '20px', color: DARK }

const listStyle = {
  listStyleType: 'disc',
  paddingLeft: '26px',
  marginBottom: '20px',
}

const liStyle = {
  fontSize: '18px',
  lineHeight: 1.7,
  color: TEXT,
  marginBottom: '12px',
}

const linkStyle = { color: GOLD, fontWeight: 600, textDecoration: 'underline' }

const ctaBoxStyle = {
  backgroundColor: BEIGE,
  border: `1px solid ${LINE}`,
  borderRadius: '12px',
  padding: '36px 28px',
  marginTop: '56px',
  textAlign: 'center',
}

const ctaTitleStyle = { fontSize: '24px', fontWeight: 700, color: DARK, marginBottom: '10px' }

const ctaTextStyle = { fontSize: '17px', lineHeight: 1.6, color: TEXT, marginBottom: '24px' }

const buttonStyle = {
  display: 'inline-block',
  backgroundColor: GOLD,
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 600,
  padding: '14px 28px',
  borderRadius: '8px',
  textDecoration: 'none',
}

const noteStyle = { fontSize: '14px', color: GRAY, marginTop: '32px', lineHeight: 1.6 }

function ArticlePage() {
  return (
    <main style={pageStyle}>
      <a href="/articles" style={backLinkStyle}>
        ← All Articles
      </a>

      <p style={eyebrowStyle}>Market Timing</p>
      <h1 style={h1Style}>Best Time to Sell a Home in South Florida: Does Winter Help?</h1>
      <p style={bylineStyle}>By Jose Anzola | Compass Real Estate | South Florida</p>

      <img
        src="/articlephoto2.jpg"
        alt="South Florida home in sunny winter weather"
        style={photoStyle}
      />

      <p style={introStyle}>
        If you are wondering about the best time to sell a house in South
        Florida, here is the short answer: winter is a strong season, and it is
        often the start of the busiest stretch of the year. While much of the
        country slows down for the holidays, South Florida's warm weather keeps
        buyers active. Let's look at why, and how to decide what timing works
        for you.
      </p>

      <h2 style={h2Style}>1. Why Winter Demand Often Rises in South Florida</h2>
      <p style={pStyle}>
        Every winter, South Florida fills up with seasonal residents, visitors
        and out-of-state buyers escaping the cold. Many of them are not just
        vacationing. They are touring homes, and many decide to buy once they
        fall in love with the lifestyle.
      </p>
      <p style={pStyle}>
        That means more motivated buyers physically in town, ready to see homes
        in person. Add mild, sunny weather that makes homes look their best, and
        it is easy to see why winter can be a great time to list.
      </p>
      <p style={pStyle}>
        Of course, every neighborhood and price range behaves a little
        differently. A condo in Miami Beach and a family home in Kendall may see
        demand at different moments, so local knowledge matters.
      </p>

      <h2 style={h2Style}>2. Listing Now vs. Waiting for Spring: Pros and Cons</h2>

      <h3 style={h3Style}>Listing in winter</h3>
      <ul style={listStyle}>
        <li style={liStyle}>
          <strong>Pros:</strong> Buyers who are visiting are often serious and
          ready to move. Homes show beautifully in dry, sunny weather. You can
          be under contract before the spring rush.
        </li>
        <li style={liStyle}>
          <strong>Cons:</strong> The holidays can mean busy schedules and fewer
          showings on certain weekends.
        </li>
      </ul>

      <h3 style={h3Style}>Waiting for spring</h3>
      <ul style={listStyle}>
        <li style={liStyle}>
          <strong>Pros:</strong> More buyers return to the market, and you have
          extra time to prepare your home.
        </li>
        <li style={liStyle}>
          <strong>Cons:</strong> More competing listings as other sellers have
          the same idea. Waiting also means more months of mortgage, insurance
          and upkeep costs.
        </li>
      </ul>

      <p style={pStyle}>
        Miami Realtors data for Miami-Dade single-family homes showed a median
        of 58 days to go under contract in the first quarter of 2026 and 51 days
        in the second quarter. In other words, the market stayed active from
        winter into spring. The real question is not "which month is perfect?"
        but "when will my home be ready, priced right and in front of buyers?"
      </p>
      <p style={pStyle}>
        One timing note: summer and early fall bring hurricane season and travel
        schedules, which can slow showings in some areas. That is one more
        reason many sellers aim to list before then.
      </p>

      <h2 style={h2Style}>3. A Simple Prep Timeline</h2>
      <p style={pStyle}>
        Good preparation can make your home stand out. Here is an easy timeline
        if you want to be ready for the winter and spring market:
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          <strong>6 to 8 weeks before listing:</strong> Walk through your home
          and make a to-do list. Handle small repairs, touch up paint and book
          any bigger projects.
        </li>
        <li style={liStyle}>
          <strong>4 to 6 weeks before:</strong> Declutter, deep clean and
          organize closets, garages and storage areas. Buyers love space.
        </li>
        <li style={liStyle}>
          <strong>2 to 4 weeks before:</strong> Refresh the landscaping, power
          wash the exterior and add fresh, neutral touches inside.
        </li>
        <li style={liStyle}>
          <strong>1 to 2 weeks before:</strong> Schedule professional photos. In
          South Florida, great photos of your outdoor space, pool or view can
          make a big difference.
        </li>
        <li style={liStyle}>
          <strong>Listing week:</strong> Do a final tidy, turn on all the lights
          and make sure the home is ready for showings.
        </li>
      </ul>

      <h2 style={h2Style}>4. Pricing for the Season</h2>
      <p style={pStyle}>
        Pricing is where timing and strategy meet. Price too high and your home
        can sit while buyers move on to the next option. Price right and you can
        attract multiple interested buyers early, when your listing is freshest.
      </p>
      <p style={pStyle}>
        A good price comes from recent comparable sales in your neighborhood,
        current competition, and the condition and features of your home.
        Seasonal buyers often move quickly, so a well-priced home can stand out
        right away. If you want to know where your home stands, you can start
        with a{' '}
        <a href="/contact" style={linkStyle}>
          free home value estimate
        </a>
        .
      </p>

      <h2 style={h2Style}>5. Talk to Jose About Your Timing</h2>
      <p style={pStyle}>
        The best time to sell is when your goals, your home and the market line
        up. Maybe you want to be settled before summer. Maybe you need time to
        buy your next home. Maybe you simply want to take advantage of winter
        buyers.
      </p>
      <p style={pStyle}>
        As a South Florida real estate agent with Compass, I can look at your
        neighborhood, your price range and your plans, then build a timeline
        that fits you. No pressure and no obligation.
      </p>

      <div style={ctaBoxStyle}>
        <p style={ctaTitleStyle}>Thinking about selling?</p>
        <p style={ctaTextStyle}>
          Contact Jose to talk through your timing and find out what your home
          is worth.
        </p>
        <a href="/contact" style={buttonStyle}>
          Talk to Jose
        </a>
      </div>

      <p style={noteStyle}>
        Source note: Time-to-contract figures are from Miami Realtors / Florida
        Realtors market data for Miami-Dade single-family homes, Q1 and Q2 2026.
      </p>
      <p style={noteStyle}>
        Jose Anzola is a South Florida real estate agent with Compass, helping
        homeowners and buyers across Miami-Dade and the surrounding area.
      </p>
    </main>
  )
}
