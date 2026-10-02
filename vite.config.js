import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // Served from https://<user>.github.io/go-youn-jung-portfolio/
  // Override with `BASE_PATH=/` for a custom domain or user-site deploy.
  base: process.env.BASE_PATH || '/go-youn-jung-portfolio/',
  server: { host: '127.0.0.1', port: 5173, strictPort: true },
})
