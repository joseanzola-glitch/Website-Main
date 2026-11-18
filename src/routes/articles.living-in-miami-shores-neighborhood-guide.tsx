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
        src="/living-in-miami-shores-guide.jpg"
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
        <li style={liStyle}>
          <strong>Design District:</strong> Michael's Genuine Food & Drink
          (contemporary American) and Nami Nori (Japanese hand rolls).
        </li>
        <li style={liStyle}>
          <strong>Little River:</strong> Fooq's (Mediterranean, wood-fired) and
          Pastamarket (handmade Italian).
        </li>
        <li style={liStyle}>
          <strong>Bal Harbour and Edgewater:</strong> Makoto (Japanese) and
          Amara at Paraiso (waterfront dining with Latin flavors) for a special
          night out.
        </li>
      </ul>
      <p style={pStyle}>Menus and hours change, so check before you go.</p>

      <h3 style={h3Style}>Schools</h3>
      <p style={pStyle}>
        Public schools serving the village include Miami Shores Elementary
        School, Horace Mann Middle School (in nearby El Portal) and Miami Edison
        Senior High. The village is also home to Doctors Charter School (grades
        6 to 12). There are several private options, including church-affiliated
        schools and Montessori programs, and Barry University is right in the
        village.
      </p>
      <p style={pStyle}>
        <strong>Tip for families:</strong> school zoning can change and depends
        on the exact address, so always confirm with Miami-Dade County Public
        Schools before you buy.
      </p>

      <h2 style={h2Style}>4. Commute and Getting Around</h2>
      <p style={pStyle}>
        Location is one of Miami Shores' biggest advantages. The village sits
        between Interstate 95 and Biscayne Boulevard, so you have two major
        routes close by.
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>
          <strong>Downtown Miami and Brickell:</strong> About 8 miles south.
          Depending on traffic, the drive can be around 15 to 20 minutes.
        </li>
        <li style={liStyle}>
          <strong>Wynwood, the Design District and Midtown:</strong> Just
          minutes away.
        </li>
        <li style={liStyle}>
          <strong>Miami International Airport:</strong> Less than 10 miles away.
        </li>
        <li style={liStyle}>
          <strong>Fort Lauderdale-Hollywood International Airport:</strong>{' '}
          Roughly 17 miles north.
        </li>
      </ul>
      <p style={pStyle}>
        As always in South Florida, rush hour can add time, so test your commute
        at the hours you would actually travel.
      </p>

      <h2 style={h2Style}>5. Homes for Sale in the Area + Contact Jose</h2>
      <p style={pStyle}>
        Miami Shores has a limited number of homes on the market at any time,
        and the best ones can move quickly. That makes local guidance especially
        valuable.
      </p>

      <div style={listingBoxStyle}>
        <img
          src="/153.jpg"
          alt="Renovated single-story home on NE 109th Street in Miami Shores"
          style={listingPhotoStyle}
        />
        <div style={listingBodyStyle}>
          <p style={listingLabelStyle}>Featured Listing</p>
          <p style={listingTitleStyle}>NE 109th Street, Miami Shores, FL 33161</p>
          <p style={listingPriceStyle}>$1,980,000</p>
          <p style={listingTextStyle}>
            Tucked away on a quiet dead-end street, this 4-bedroom,
            1,942-square-foot single-story home has been completely reimagined
            from the ground up, keeping only the original exterior walls. All of
            the work was permitted through the Village of Miami Shores.
          </p>
          <p style={listingTextStyle}>
            Inside, you will find soaring ceilings, a kitchen with Thermador
            appliances and a Bosch dishwasher, and custom-finished closets in
            every bedroom. Major upgrades include a brand-new roof, all-new
            plumbing, and a new septic tank and drain field. Outside, there is a
            newly built in-ground saltwater pool, mature mango and avocado trees
            and a brand-new driveway, all on a 9,225-square-foot lot (about 0.21
            acre). Built in 1946, it offers the charm of a classic Miami Shores
            address with the feel of a virtually new home.
          </p>
          <p style={listingTextStyle}>
            <a href="/contact" style={linkStyle}>
              Contact Jose
            </a>{' '}
            to schedule a showing. Showings are by appointment only.
          </p>
          <a
            href="https://www.compass.com/homedetails/northeast-109th-street-miami-shores-fl-33161/2226187451980537033_lid/?origin=listing_page&origin_type=copy_url&agent_id=676a02c670e3670001b58c7e"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            View Listing on Compass
          </a>
        </div>
      </div>

      <ul style={listStyle}>
        <li style={liStyle}>
          <strong>If you are buying:</strong> I can set up a custom search for
          Miami Shores homes for sale, alert you when new listings hit, and walk
          you through each neighborhood.
        </li>
        <li style={liStyle}>
          <strong>If you are selling:</strong> I can give you a no-obligation
          home value based on recent nearby sales and talk through the best
          timing and pricing strategy.
        </li>
      </ul>
      <p style={pStyle}>
        As a South Florida real estate agent with Compass, I would love to help
        you find your place in the Village Beautiful.
      </p>

      <div style={ctaBoxStyle}>
        <p style={ctaTitleStyle}>Ready to explore Miami Shores?</p>
        <p style={ctaTextStyle}>
          Start your search or get your free home value.
        </p>
        <div style={buttonRowStyle}>
          <a href="/contact" style={buttonStyle}>
            Start My Search
          </a>
          <a href="/seller-valuation" style={buttonOutlineStyle}>
            Get My Home Value
          </a>
        </div>
      </div>

      <p style={noteStyle}>
        Price figures are based on an MLS search of active listings in mid-November
        2026 and on Miami Realtors data for the Miami-Dade County single-family
        median sale price in July 2026.
      </p>
      <p style={noteStyle}>
        Jose Anzola is a South Florida real estate agent with Compass, helping
        homeowners and buyers across Miami-Dade and the surrounding area.
      </p>
    </main>
  )
}
