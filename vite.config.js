import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES
    ? "/reactailwind/" // ←ここはGitHub Pages用に絶対パス "/"付きで！
    : "./",
  build: {
    outDir: "docs", // ★ビルド成果物を docs/ に出す
    assetsDir: "assets", // ★assetsはassets/にまとめる
  },
  plugins: [react()],
})