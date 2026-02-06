import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#d4af37',
          dark: '#0b0e14',
          slate: '#0f172a',
        },
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: {
          '2xl': '1280px',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Pretendard',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 10px 40px rgba(0,0,0,0.15)',
        subtle: '0 4px 20px rgba(0,0,0,0.06)',
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(120deg, rgba(11,14,20,0.88) 0%, rgba(11,14,20,0.6) 45%, rgba(11,14,20,0.88) 100%)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

