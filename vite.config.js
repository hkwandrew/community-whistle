import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
const base = repositoryName ? `/${repositoryName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), svgr()],
})
