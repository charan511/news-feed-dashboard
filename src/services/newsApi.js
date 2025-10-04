import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWSAPI_BASE_URL || "https://newsapi.org/v2";
const API_KEY = import.meta.env.VITE_NEWSAPI_KEY;
const DEFAULT_COUNTRY = import.meta.env.VITE_DEFAULT_COUNTRY || "us";

export const client = axios.create({
  baseURL: BASE_URL,
  headers: { "X-Api-Key": API_KEY },
});

export async function fetchNews({ category, q, signal }) {
  let endpoint = "";
  let params = new URLSearchParams();

  if (q) {
    // Use "everything" for search
    endpoint = "/everything";
    params.set("q", q);
    params.set("sortBy", "publishedAt"); // latest first
    params.set("language", "en");
  } else {
    // Use "top-headlines" for categories
    endpoint = "/top-headlines";
    params.set("country", DEFAULT_COUNTRY);
    if (category) params.set("category", category);
  }

  const res = await client.get(`${endpoint}?${params.toString()}`, { signal });
  return res.data;
}
