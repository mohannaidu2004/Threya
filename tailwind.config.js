/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#7A1020',
          dark: '#5C0B17',
          light: '#9B1530',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4AF37',
          pale: '#E8D08A',
        },
        cream: {
          DEFAULT: '#F5EDD6',
          dark: '#EDE0C4',
        },
        navy: {
          DEFAULT: '#1C2340',
          light: '#253060',
        },
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        lato: ['Lato', 'sans-serif'],
        garamond: ['"EB Garamond"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.jpg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
