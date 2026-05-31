import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
// Change 'gabriel-portfolio' to your actual GitHub repo name before deploying
export default defineConfig({
  plugins: [react()],
  base: '/gabriel-portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
