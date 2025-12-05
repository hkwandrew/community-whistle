import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { FontaineTransform } from 'fontaine'
import svgr from "vite-plugin-svgr";

const options = {
  fallbacks: ['Arial'],
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), FontaineTransform.vite(options), svgr()],
})
