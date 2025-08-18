import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react(), tailwindcss()],
  // Update to the below base with ternary once custom domain added
  // Add {mode} back in as function arg
  // base: mode === 'production' ? '/' : '/prosocialtech-website/',
  base: '/prosocialtech-website/',
}))
