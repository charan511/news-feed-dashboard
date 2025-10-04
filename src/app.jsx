import { useEffect } from 'react'
import useNews from './hooks/usenews'
import Header from './components/header'
import NewsGrid from './components/NewsGrid'
import EmptyState from './components/EmptyState'
import ErrorState from './components/ErrorState'

export default function App() {
  const { category, setCategory, query, setQuery, articles, loading, error } = useNews({ initialCategory: 'business' })

  // Keep document title helpful
  useEffect(() => {
    const label = query ? `Search: ${query}` : category.charAt(0).toUpperCase() + category.slice(1)
    document.title = `News Feed • ${label}`
  }, [category, query])

  return (
    <>
      <Header
        category={category}
        onCategoryChange={setCategory}
        query={query}
        onQueryChange={setQuery}
      />

      <main className="container pb-5">
        {error && <ErrorState message={error?.response?.data?.message || error.message} />}

        {!loading && !error && articles.length === 0 ? (
          <EmptyState />
        ) : (
          <NewsGrid articles={articles} loading={loading} />
        )}
      </main>

      <footer className="container py-4 text-center text-muted small">
        Built with React, Axios & Bootstrap · Data from NewsAPI.org
      </footer>
    </>
  )
}
