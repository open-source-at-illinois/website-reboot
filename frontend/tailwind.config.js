/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0 35px 60px 15px rgba(0, 0, 0, 0.10)',
        'card-hover': '0 35px 60px 15px rgba(0, 0, 0, 0.25)',
        'dark-card': '0 35px 60px 15px #17233f',
        'dark-card-hover': '0 35px 60px 15px #070b15',
      },
      colors: {
        primary: {
          darkBlue: '#16224c',
          lightBlue: '#3F60D9',
          darkOrange: '#d09a22',
          lightOrange: '#FFC12C',
        },
        dark: {
          darkBlue: '#16224c',
          lightBlue: '#3F60D9',
          darkOrange: '#d09a22',
          bg: '#0f172a',
          text: '#d1d5db'
        }
      },
    },
    fontFamily: {
      sans: ['Comfortaa', 'sans-serif'],
      mdh1: ['Exo 2', 'sans-serif'],
      mdh2: ['Maitree', 'serif'],
    },
  },
  darkMode: 'class',
  plugins: [],
};
