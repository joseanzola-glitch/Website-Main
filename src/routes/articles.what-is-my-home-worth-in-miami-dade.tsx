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

function ArticlePage() {
  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 20px' }}>
      <h1>What Is My Home Worth in Miami-Dade? 5 Ways to Find Out</h1>
      <p>By Jose Anzola, Compass Real Estate</p>

      <p>Introduction paragraph goes here.</p>

      <h2>1. What online estimates can and can't see</h2>
      <p>Text for section 1 goes here.</p>

      <h2>2. Recent comparable sales nearby</h2>
      <p>Text for section 2 goes here.</p>

      <h2>3. Condition, upgrades, views and location</h2>
      <p>Text for section 3 goes here.</p>

      <h2>4. Agent price opinion vs. appraisal</h2>
      <p>Text for section 4 goes here.</p>

      <h2>5. Request a no-obligation home value from Jose</h2>
      <p>Text for section 5 goes here.</p>
    </main>
  )
}
