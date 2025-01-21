import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist'  // This is the default directory for build output
  },
  base: "/shoppingreact",
  plugins: [react()],
})
