import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/')({
  component: ArticlesPage,
})

function ArticlesPage() {
  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 20px' }}>
      <h1>Articles</h1>
    </main>
  )
}
