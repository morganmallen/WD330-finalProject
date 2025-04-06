import { defineConfig } from 'vite'

// Determine the base URL based on environment
const base = process.env.NODE_ENV === 'production' 
  ? '/WD330-finalProject/'
  : '/'

export default defineConfig({
  base: base,
  build: {
    outDir: 'dist'
  }
})