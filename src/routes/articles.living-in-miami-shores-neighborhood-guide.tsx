import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/living-in-miami-shores-neighborhood-guide')({
  head: () => ({
    meta: [
      { title: 'Living in Miami Shores: A Neighborhood Guide for Buyers and Sellers | Jose Anzola' },
      {
        name: 'description',
        content: 'Thinking about Miami Shores homes for sale? Explore home types and prices, parks, dining, schools and commute times in the Village Beautiful, with a local Compass agent.',
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

const listingBoxStyle = {
  backgroundColor: BEIGE,
  border: `1px solid ${LINE}`,
  borderRadius: '12px',
  overflow: 'hidden',
  marginTop: '8px',
  marginBottom: '28px',
}

const listingPhotoStyle = {
  width: '100%',
  height: 'auto',
  display: 'block',
}

const listingBodyStyle = { padding: '28px 26px' }

const listingLabelStyle = {
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: GOLD,
  marginBottom: '8px',
}

const listingTitleStyle = {
  fontSize: '22px',
  fontWeight: 700,
  color: DARK,
  marginBottom: '4px',
  lineHeight: 1.3,
}

const listingPriceStyle = {
  fontSize: '20px',
  fontWeight: 600,
  color: GOLD,
  marginBottom: '16px',
}

const listingTextStyle = {
  fontSize: '17px',
  lineHeight: 1.7,
  color: TEXT,
  marginBottom: '14px',
}

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

const buttonRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  justifyContent: 'center',
}

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

const buttonOutlineStyle = {
  display: 'inline-block',
  backgroundColor: 'transparent',
  color: GOLD,
  border: `2px solid ${GOLD}`,
  fontSize: '16px',
  fontWeight: 600,
  padding: '12px 26px',
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

      <p style={eyebrowStyle}>Neighborhood Guide</p>
      <h1 style={h1Style}>Living in Miami Shores: A Neighborhood Guide for Buyers and Sellers</h1>
      <p style={bylineStyle}>By Jose Anzola | Compass Real Estate | South Florida</p>

      <img
        src="/articlephoto3.jpg"
        alt="Tree-lined street in Miami Shores, Florida"
        style={photoStyle}
      />

      <p style={introStyle}>
        If you are searching for Miami Shores homes for sale, you are looking at
        one of the most charming pockets of Miami-Dade. Known as "The Village
        Beautiful," Miami Shores blends a small-town feel with big-city access.
        Whether you are thinking of buying or selling here, this guide covers
        what makes the village special.
      </p>

      <h2 style={h2Style}>1. Quick Overview of Miami Shores</h2>
      <p style={pStyle}>
        Miami Shores is an in-town village just north of Miami's urban core,
        between Biscayne Boulevard and Biscayne Bay. It was established in 1932
        and still has a quiet, neighborly atmosphere. Think tree-lined streets,
        shady oaks and a strong sense of community.
      </p>
      <p style={pStyle}>
        The village is mostly single-family homes, with only a small number of
        multi-family properties. Its small downtown district runs along
        Northeast 2nd Avenue, and Barry University and the Miami Shores Country
        Club are part of the village's identity.
      </p>
      <p style={pStyle}>
        For many buyers, that is the appeal: a residential neighborhood that
        still feels close to everything.
      </p>

      <h2 style={h2Style}>2. Types of Homes and Typical Price Ranges</h2>
      <p style={pStyle}>
        If you want a house with a yard, Miami Shores is a great place to look.
        Most homes here are single-family, and you will find a range of sizes
        and styles, from cozy starter homes to larger renovated properties and
        homes closer to the bay.
      </p>
      <p style={pStyle}>
        Prices vary widely depending on size, condition, lot and location within
        the village. Based on an MLS search of active listings in mid-November
        2026, single-family homes in the Miami Shores area start at roughly
        $900,000 and climb well into the millions, with many listings between
        about $1.2 million and $3.5 million. Townhomes and condos in the
        surrounding area start around the $300,000s. For context, the Miami-Dade
        County single-family median sale price was $685,000 in July 2026,
        according to Miami Realtors, so Miami Shores sits well above the county
        overall.
      </p>

      <h3 style={h3Style}>What does that mean for you?</h3>
      <ul style={listStyle}>
        <li style={liStyle}>
          <strong>Buyers:</strong> Get a clear picture of what your budget can
          buy in the specific part of the village you like.
        </li>
        <li style={liStyle}>
          <strong>Sellers:</strong> Your price depends on recent nearby sales,
          your home's condition and any upgrades. A countywide average will not
          tell you what your home is worth.
        </li>
      </ul>
      <p style={pStyle}>
        For current prices and recent sales, ask for a custom search or{' '}
        <a href="/seller-valuation" style={linkStyle}>
          home value
        </a>{' '}
        from Jose.
      </p>

      <h2 style={h2Style}>3. Parks, Dining and Schools</h2>

      <h3 style={h3Style}>Parks and recreation</h3>
      <p style={pStyle}>
        Miami Shores Village has its own Parks and Recreation Department, a
        recreation complex, an aquatic center and a country club. Bayfront Park
        is a popular spot for enjoying views of Biscayne Bay. The Brockway
        Memorial Library is also a community favorite.
      </p>

      <h3 style={h3Style}>Dining and shopping</h3>
      <p style={pStyle}>
        The village has two small commercial areas, along Northeast 2nd Avenue
        and Biscayne Boulevard, but many of the area's popular restaurants are a
        short drive away. Here is a quick guide by neighborhood:
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          <strong>MiMo / Upper East Side:</strong> Pinch Kitchen + Bar
          (American, with live jazz on Wednesdays and Saturdays), Battubelin
          (Italian) and Phuc Yea (Vietnamese-inspired shareable plates).
        </li>
        <li style={liStyle}>
          <strong>North Miami:</strong> Osteria, a neighborhood Italian
          favorite.
        </li>
