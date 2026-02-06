import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbzASGznabb9uNtJj6Kj-4JjCv8ijUzDjAYBcxZogUKWEmsXBOddfoaIYTu1u7exLUJH/exec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        //followRedirects: true,
      },
    },
  },
})
