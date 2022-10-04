import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://George-Fran.github.io/react-rick-y-morty/",
  plugins: [react()]
})
