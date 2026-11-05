import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/')({
  head: () => ({
    meta: [
      { title: 'Articles | Jose Anzola' },
      {
        name: 'description',
        content: 'Real estate articles and tips for Miami-Dade and South Florida home sellers, from Jose Anzola at Compass.',
      },
    ],
  }),
  component: ArticlesPage,
})

// ---- YOUR ARTICLES LIST (add new articles here later) ----
const articles = [
  {
    link: '/articles/what-is-my-home-worth-in-miami-dade',
    photo: '/articlephoto1.jpg',
    photoAlt: 'Miami-Dade home with a For Sale sign',
    label: 'Seller Guide',
    title: 'What Is My Home Worth in Miami-Dade? 5 Ways to Find Out',
    preview:
      'Online estimates are a start, but they cannot see inside your home. Here are five ways to find out what your Miami-Dade home is really worth.',
  },
]

// ---- COLORS ----
const GOLD = '#9a7429'
const DARK = '#1a1a1a'
const TEXT = '#333333'
const GRAY = '#6b6b6b'
const LINE = '#e5e2dc'
const BEIGE = '#f3f1ec'

// ---- STYLES ----
const pageStyle = { maxWidth: '1000px', margin: '0 auto', padding: '56px 24px 80px' }

const eyebrowStyle = {
  fontSize: '13px',
  fontWeight: 600,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: GOLD,
  marginBottom: '16px',
}

const h1Style = {
  fontSize: 'clamp(32px, 5vw, 46px)',
  fontWeight: 700,
  lineHeight: 1.15,
  color: DARK,
  marginBottom: '16px',
}

const introStyle = {
  fontSize: '19px',
  lineHeight: 1.7,
  color: TEXT,
  maxWidth: '640px',
  marginBottom: '48px',
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '28px',
}

const cardStyle = {
  display: 'block',
  textDecoration: 'none',
  backgroundColor: '#ffffff',
  border: `1px solid ${LINE}`,
  borderRadius: '14px',
  overflow: 'hidden',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
}

const cardPhotoStyle = {
  width: '100%',
  aspectRatio: '16 / 10',
  objectFit: 'cover',
  display: 'block',
  backgroundColor: BEIGE,
}

const cardBodyStyle = { padding: '24px' }

const cardLabelStyle = {
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: GOLD,
  marginBottom: '10px',
}

const cardTitleStyle = {
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: 1.3,
  color: DARK,
  marginBottom: '12px',
}

const cardPreviewStyle = {
  fontSize: '16px',
  lineHeight: 1.65,
  color: TEXT,
  marginBottom: '18px',
}

const cardLinkStyle = { fontSize: '15px', fontWeight: 600, color: GOLD }

const bottomBoxStyle = {
  backgroundColor: BEIGE,
  border: `1px solid ${LINE}`,
  borderRadius: '12px',
  padding: '32px 28px',
  marginTop: '56px',
  textAlign: 'center',
}

const bottomTitleStyle = { fontSize: '22px', fontWeight: 700, color: DARK, marginBottom: '8px' }

const bottomTextStyle = { fontSize: '16px', lineHeight: 1.6, color: TEXT, marginBottom: '20px' }

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

function ArticlesPage() {
  return (
    <main style={pageStyle}>
      <p style={eyebrowStyle}>Jose Anzola · Compass</p>
      <h1 style={h1Style}>Articles</h1>
      <p style={introStyle}>
        Straight answers and practical tips for Miami-Dade and South Florida
        homeowners who are thinking about selling.
      </p>

      <div style={gridStyle}>
        {articles.map((article) => (
          <a key={article.link} href={article.link} style={cardStyle}>
            <img src={article.photo} alt={article.photoAlt} style={cardPhotoStyle} />
            <div style={cardBodyStyle}>
              <p style={cardLabelStyle}>{article.label}</p>
              <p style={cardTitleStyle}>{article.title}</p>
              <p style={cardPreviewStyle}>{article.preview}</p>
              <span style={cardLinkStyle}>Read article →</span>
            </div>
          </a>
        ))}
      </div>

      <div style={bottomBoxStyle}>
        <p style={bottomTitleStyle}>Curious what your home is worth?</p>
        <p style={bottomTextStyle}>
          Get a free, no-obligation home value from Jose.
        </p>
        <a href="/contact" style={buttonStyle}>
          Get My Home Value
        </a>
      </div>
    </main>
  )
}
