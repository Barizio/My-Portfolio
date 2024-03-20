import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Barizio.github.io/",

  css:{
    modules:{
      localsConvention:"camelCase",
    }
  }
})
