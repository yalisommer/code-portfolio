import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/code-portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/index.html',
      output: {
        manualChunks: {
          // This ensures that all routes are redirected to index.html
          fallback: ['index.html']
        }
      }
    }
  }
})
