import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/lush-green/",
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  }
})
