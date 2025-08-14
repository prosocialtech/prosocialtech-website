import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages needs /prosocialtech-website/ for dev, / for production
  base: mode === 'production' ? '/' : '/prosocialtech-website/',
}))
