import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { FontaineTransform } from 'fontaine'
import svgr from "vite-plugin-svgr";

const options = {
  fallbacks: ['Arial'],
}

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
const base = repositoryName ? `/${repositoryName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), FontaineTransform.vite(options), svgr()],
})
