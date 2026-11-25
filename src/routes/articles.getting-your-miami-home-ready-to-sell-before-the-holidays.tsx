import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/getting-your-miami-home-ready-to-sell-before-the-holidays')({
  head: () => ({
    meta: [
      { title: 'Getting Your Miami Home Ready to Sell Before the Holidays: A 10-Step Checklist | Jose Anzola' },
      {
        name: 'description',
        content: 'Wondering how to prepare a house to sell in Miami? Follow this simple 10-step checklist, from decluttering and curb appeal to photos, paperwork and pricing.',
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
  marginTop: '44px',
  marginBottom: '14px',
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

const tipBoxStyle = {
  backgroundColor: BEIGE,
  border: `1px solid ${LINE}`,
  borderLeft: `4px solid ${GOLD}`,
  borderRadius: '8px',
  padding: '18px 22px',
  marginBottom: '24px',
  fontSize: '17px',
  lineHeight: 1.65,
  color: TEXT,
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

      <p style={eyebrowStyle}>Seller Checklist</p>
      <h1 style={h1Style}>Getting Your Miami Home Ready to Sell Before the Holidays: A 10-Step Checklist</h1>
      <p style={bylineStyle}>By Jose Anzola | Compass Real Estate | South Florida</p>

      <img
        src="/articlephoto4.jpg"
        alt="Bright, clean living room ready for a home sale in Miami"
        style={photoStyle}
      />

      <p style={introStyle}>
        If you are wondering how to prepare a house to sell in Miami, the good
        news is that the steps that matter most are simple: a clean, bright,
        well-presented home that is priced right. With the holidays approaching,
        a little planning now can help you put your home in front of buyers
        while many of them are still actively looking.
      </p>
      <p style={pStyle}>
        Here is a 10-step checklist you can work through one weekend at a time.
        You do not have to do everything on this list. Start at the top and do
        what makes sense for your home.
      </p>

      <h2 style={h2Style}>1. Declutter every room</h2>
      <p style={pStyle}>
        Buyers want to picture their own life in your home, and that is hard to
        do when every shelf and counter is full. Clear the kitchen counters,
        thin out closets, and pack away extra furniture, personal photos and
        collections.
      </p>
      <div style={tipBoxStyle}>
        <strong>Tip:</strong> anything you pack now is a head start on your
        move.
      </div>

      <h2 style={h2Style}>2. Deep clean (including windows)</h2>
      <p style={pStyle}>
        A spotless home feels cared for. Clean the windows so the South Florida
        light comes through, and do not forget the details buyers notice:
        baseboards, grout, appliances, ceiling fans and the garage. If your
        schedule is tight, a professional cleaning is often money well spent.
      </p>

      <h2 style={h2Style}>3. Make small repairs</h2>
      <p style={pStyle}>
        Fix the little things: dripping faucets, loose handles, cracked tiles,
        torn screens, doors that stick and burned-out bulbs. Small problems can
        make buyers wonder what else may have been put off.
      </p>

      <h2 style={h2Style}>4. Fresh neutral paint</h2>
      <p style={pStyle}>
        Fresh paint is one of the simplest ways to make a home feel updated.
        Soft whites, warm grays and light beiges work well because they let
        buyers imagine their own style. Even touching up scuffs and marked-up
        walls can make a visible difference.
      </p>

      <h2 style={h2Style}>5. Boost curb appeal</h2>
      <p style={pStyle}>
        Buyers form an opinion before they walk through the door. Trim the
        hedges and palms, refresh the mulch, pressure wash the driveway and
        walkways, and clean the front door. A new doormat, clear house numbers
        and a few potted plants go a long way.
      </p>

      <h2 style={h2Style}>6. Upgrade lighting</h2>
      <p style={pStyle}>
        Bright, even light makes rooms feel larger and more welcoming. Replace
        dim or mismatched bulbs with matching warm-white ones, clean your light
        fixtures, and open the blinds. For showings and photos, turn on every
        light in the house.
      </p>

      <h2 style={h2Style}>7. Stage key rooms</h2>
      <p style={pStyle}>
        You do not need to stage the whole house. Focus on the rooms buyers care
        about most: the living room, the kitchen, the primary bedroom and any
        outdoor space. Arrange furniture so each room flows, keep bedding and
        décor simple, and set up the patio or pool area so it looks ready to
        enjoy.
      </p>
      <div style={tipBoxStyle}>
        <strong>Holiday tip:</strong> if you decorate for the holidays, keep it
        light and neutral so the home still feels like it could be theirs.
      </div>

      <h2 style={h2Style}>8. Professional photos</h2>
      <p style={pStyle}>
        Most buyers see your home online before they ever visit, so your photos
        are your first showing. Schedule them after the cleaning, staging and
        curb appeal work is done. In South Florida, great photos of your
        outdoor space, pool or view can make a big difference.
      </p>

      <h2 style={h2Style}>9. Gather documents (HOA, permits)</h2>
      <p style={pStyle}>
        Having your paperwork ready helps the sale move smoothly once you have
        an interested buyer. Start collecting:
      </p>
      <ul style={listStyle}>
        <li style={liStyle}>HOA or condo association contact information, rules and fee details</li>
        <li style={liStyle}>Permits and receipts for renovations and major repairs</li>
        <li style={liStyle}>Warranties or service records for the roof, air conditioning and appliances</li>
        <li style={liStyle}>A copy of your survey, if you have one</li>
      </ul>
      <p style={pStyle}>
        Every property is a little different, and I can tell you exactly which
        documents will matter for yours.
      </p>

      <h2 style={h2Style}>10. Pricing meeting with Jose</h2>
      <p style={pStyle}>
        Once your home is ready, the next step is the one that matters most:
        pricing. We will go over recent comparable sales near you, the current
        competition, and the condition and features of your home, then build a
        price and timeline that fit your goals.
      </p>
      <p style={pStyle}>
        You do not have to finish the whole checklist first. If you would like
        to know what is worth doing and what you can skip, we can walk through
        your home together. There is no pressure and no obligation.
      </p>

      <div style={ctaBoxStyle}>
        <p style={ctaTitleStyle}>Ready to get started?</p>
        <p style={ctaTextStyle}>
          Schedule a pricing meeting with Jose and get a plan for selling your
          home.
        </p>
        <a href="/contact" style={buttonStyle}>
          Schedule a Pricing Meeting
        </a>
      </div>

      <p style={noteStyle}>
        This article is general information and is not legal or financial advice
        or a guarantee of results.
      </p>
      <p style={noteStyle}>
        Jose Anzola is a South Florida real estate agent with Compass, helping
        homeowners and buyers across Miami-Dade and the surrounding area.
      </p>
    </main>
  )
}
