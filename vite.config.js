import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.svg'],
  server: {
      host: true,
      port: 5173,
      allowedHosts: [
        "5173-shrishtiman-buildoncoff-1cx8aawmrb6.ws-us120.gitpod.io"
      ],
    },
})