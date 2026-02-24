import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Serve arquivos estáticos da pasta pai (fortmassa) que contém wp-content/uploads/
  publicDir: path.resolve(__dirname, '..'),
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
