import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:5173", // Adjust if needed
    },
  },
  build: {
    outDir: 'dist'  // Make sure the output directory is 'dist'
  },
  plugins: [react()],
})
