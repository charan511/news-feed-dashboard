import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Optional: If you run into CORS with NewsAPI on free plan, consider adding a tiny proxy.
   base: '/news-feed-dasshboard/',
    // proxy: { '/api': { target: 'https://newsapi.org', changeOrigin: true, rewrite: p => p.replace(/^\/api/, '') } }
  }
})
