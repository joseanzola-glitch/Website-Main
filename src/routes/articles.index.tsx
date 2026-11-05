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

function ArticlesPage() {
  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 20px' }}>
      <h1>Articles</h1>

      <ul>
        <li>
          <a href="/articles/what-is-my-home-worth-in-miami-dade">
            What Is My Home Worth in Miami-Dade? 5 Ways to Find Out
          </a>
        </li>
      </ul>
    </main>
  )
}
