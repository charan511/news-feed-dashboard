import { useEffect, useMemo, useRef, useState } from "react";
import { fetchNews } from "../services/newsApi";

/**
 * Custom hook to fetch news based on category or search query.
 * - If query is empty → uses "top-headlines"
 * - If query is provided → uses "everything"
 */
export default function useNews({ initialCategory = "business" } = {}) {
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortRef = useRef();

  // Debounce search (wait 500ms after typing stops)
  useEffect(() => {
    const id = setTimeout(() => setDebouncedQ(query.trim()), 500);
    return () => clearTimeout(id);
  }, [query]);

  // Fetch news whenever category or query changes
  useEffect(() => {
    setLoading(true);
    setError(null);

    if (abortRef.current) abortRef.current.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    fetchNews({ category, q: debouncedQ || undefined, signal: ctrl.signal })
      .then((data) => setArticles(data.articles || []))
      .catch((err) => {
        if (err.name !== "CanceledError" && err.name !== "AbortError") {
          setError(err);
        }
      })
      .finally(() => setLoading(false));

    return () => ctrl.abort();
  }, [category, debouncedQ]);

  return useMemo(
    () => ({
      category,
      setCategory,
      query,
      setQuery,
      articles,
      loading,
      error,
    }),
    [category, query, articles, loading, error]
  );
}
