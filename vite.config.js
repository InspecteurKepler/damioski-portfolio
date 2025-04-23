import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4545,
    host: true,
    allowedHosts: ['damioski.de', 'portfolio.damioski.de'],
  },
  plugins: [
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  },
})
