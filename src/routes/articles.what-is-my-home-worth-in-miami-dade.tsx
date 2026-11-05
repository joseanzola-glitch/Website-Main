import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/what-is-my-home-worth-in-miami-dade')({
  head: () => ({
    meta: [
      { title: 'What Is My Home Worth in Miami-Dade? 5 Ways to Find Out | Jose Anzola' },
      {
        name: 'description',
        content: 'Wondering what your Miami-Dade home is worth? Here are 5 ways to find out, from online estimates to a no-obligation home value from Jose Anzola.',
      },
    ],
  }),
  component: ArticlePage,
})

// ---- COLORS (change these here if something looks off) ----
const GOLD = '#9a7429'
const DARK = '#1a1a1a'
const TEXT = '#333333'
const GRAY = '#6b6b6b'
const LINE = '#e5e2dc'
const BEIGE = '#f3f1ec'

// ---- STYLES ----
const pageStyle = { maxWidth: '740px', margin: '0 auto', padding: '56px 24px 80px' }

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

const h2Style = {
  fontSize: '26px',
  fontWeight: 700,
  lineHeight: 1.25,
  color: DARK,
  marginTop: '48px',
  marginBottom: '14px',
}

const pStyle = {
  fontSize: '18px',
  lineHeight: 1.75,
  color: TEXT,
  marginBottom: '20px',
}

const introStyle = { ...pStyle, fontSize: '20px', color: DARK }

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

const backLinkStyle = {
  display: 'inline-block',
  marginBottom: '28px',
  fontSize: '15px',
  color: GOLD,
  textDecoration: 'none',
  fontWeight: 600,
}

const disclaimerStyle = { fontSize: '13px', color: GRAY, marginTop: '32px', lineHeight: 1.6 }

const photoStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '12px',
  marginBottom: '36px',
  display: 'block',
}

function ArticlePage() {
  return (
    <main style={pageStyle}>
      <a href="/articles" style={backLinkStyle}>
        ← All Articles
      </a>

      <p style={eyebrowStyle}>Seller Guide</p>
      <h1 style={h1Style}>What Is My Home Worth in Miami-Dade? 5 Ways to Find Out</h1>
      <p style={bylineStyle}>By Jose Anzola, Compass Real Estate</p>

      <p style={introStyle}>
        If you own a home in Miami-Dade, sooner or later you will ask yourself,
        "What is my home worth?" Maybe you are thinking about selling, maybe you
        are just curious, or maybe a neighbor's sale got you wondering. Whatever
        the reason, the answer matters, and it is not always as simple as typing
        your address into a website.
      </p>
      <p style={pStyle}>
        Values in South Florida can change from one street to the next, and even
        from one building to the next. Here are five ways to find out what your
        home is worth, in the order I recommend them.
      </p>

      <h2 style={h2Style}>1. What online estimates can and can't see</h2>
      <p style={pStyle}>
        Online home value tools are a good place to start. They use public
        records and recent sales to produce a quick number, and they take about
        30 seconds. Use that number as a rough starting point, not as a price.
      </p>
      <p style={pStyle}>
        Here is what they cannot see: the inside of your home. They do not know
        if you just redid the kitchen, replaced the roof, or installed impact
        windows. They do not know if your unit has a great view or if your
        street gets a lot of noise. Two homes that look identical on paper can
        be worth very different amounts once you walk through the front door.
      </p>

      <h2 style={h2Style}>2. Recent comparable sales nearby</h2>
      <p style={pStyle}>
        Real estate professionals call these "comps." A comp is a home similar
        to yours that sold recently and nearby. The best comps are close to your
        home, similar in size and style, and sold within the last few months.
        If you own a condo, the best comps are often in your own building or one
        very much like it.
      </p>
      <p style={pStyle}>
        One tip: look at what homes actually sold for, not what they were listed
        for. A listing price is what a seller hopes to get. The sold price is
        what a buyer was truly willing to pay. It is also helpful to look at
        homes that are currently for sale in your area, because they show you
        the competition you would be up against.
      </p>

      <h2 style={h2Style}>3. Condition, upgrades, views and location</h2>
      <p style={pStyle}>
        This is where Miami-Dade homes really separate from each other. Several
        things can move your home's value up or down:
      </p>
      <p style={pStyle}>
        Condition and upgrades matter. Updated kitchens and bathrooms, a newer
        roof, newer air conditioning, and impact windows all appeal to buyers
        here. Location matters too, including how close you are to the water,
        whether you have a water view, and what your street is like. For condos,
        buyers pay close attention to monthly association fees and the overall
        condition of the building.
      </p>
      <p style={pStyle}>
        A good value opinion takes all of this into account. It is one of the
        biggest reasons a walk-through beats a website every time.
      </p>

      <h2 style={h2Style}>4. Agent price opinion vs. appraisal</h2>
      <p style={pStyle}>
        These two are often confused, but they are different tools for
        different jobs.
      </p>
      <p style={pStyle}>
        An appraisal is a formal value report written by a licensed appraiser.
        It is usually ordered by a lender when a buyer is financing a purchase,
        or when an owner refinances. An agent's price opinion is a comparison
        of your home against recent sales and current competition, aimed at
        answering a practical question: what could I realistically sell this
        home for right now, and how should it be priced to attract buyers?
      </p>
      <p style={pStyle}>
        If you are thinking about selling, an agent's price opinion is usually
        the best first step, and it does not cost anything.
      </p>

      <h2 style={h2Style}>5. Request a no-obligation home value from Jose</h2>
      <p style={pStyle}>
        The most accurate way to learn what your home is worth is to have
        someone who works in your neighborhood look at it. When you ask me for a
        home value, I review the recent sales around you, take into account the
        condition and features of your home, and explain the price range I
        would expect in today's market. I also walk you through how I would
        price it if you decide to sell.
      </p>
      <p style={pStyle}>
        There is no pressure and no obligation. If you decide to wait, you will
        still know where you stand. If you decide to sell, you will already have
        a plan.
      </p>

      <div style={ctaBoxStyle}>
        <p style={ctaTitleStyle}>Ready to find out what your home is worth?</p>
        <p style={ctaTextStyle}>
          Send me a quick message and I will get back to you with your
          no-obligation home value.
        </p>
        <a href="/contact" style={buttonStyle}>
          Get My Home Value
        </a>
      </div>

      <p style={disclaimerStyle}>
        This article is general information and is not an appraisal or a
        guarantee of value.
      </p>
    </main>
  )
}
