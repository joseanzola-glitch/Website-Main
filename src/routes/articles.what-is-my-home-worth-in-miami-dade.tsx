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

const pageStyle = { maxWidth: '720px', margin: '0 auto', padding: '40px 20px' }
const h1Style = { fontSize: '36px', fontWeight: 700, lineHeight: 1.2, marginBottom: '12px' }
const h2Style = { fontSize: '24px', fontWeight: 700, marginTop: '36px', marginBottom: '12px' }
const pStyle = { fontSize: '18px', lineHeight: 1.7, marginBottom: '18px' }
const bylineStyle = { fontSize: '16px', color: '#666666', marginBottom: '28px' }

function ArticlePage() {
  return (
    <main style={pageStyle}>
      <h1 style={h1Style}>What Is My Home Worth in Miami-Dade? 5 Ways to Find Out</h1>
      <p style={bylineStyle}>By Jose Anzola, Compass Real Estate</p>

      <p style={pStyle}>
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
      <p style={pStyle}>
        Ready to find out what your home is worth?{' '}
        <a href="/contact" style={{ textDecoration: 'underline', fontWeight: 600 }}>
          Contact me here
        </a>{' '}
        and I will get back to you with your home value.
      </p>

      <p style={{ fontSize: '14px', color: '#666666', marginTop: '40px' }}>
        This article is general information and is not an appraisal or a
        guarantee of value.
      </p>
    </main>
  )
}
