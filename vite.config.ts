import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart(),
    nitro({ preset: process.env.VERCEL ? 'vercel' : undefined }),
    viteReact(),
  ],
  server: { host: '127.0.0.1' },
})
