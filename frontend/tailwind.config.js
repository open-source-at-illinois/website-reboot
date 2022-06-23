/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "darkBlue": "#16224c",
          "lightBlue": "#3F60D9",
          "darkOrange": "#d09a22",
          "lightOrange": "#FFC12C",
        }
      }
    },
    fontFamily: {
      'sans': ['Comfortaa', 'sans-serif'],
      'mdh1': ['Exo 2', 'sans-serif'],
      'mdh2': ['Maitree', 'serif'],
    }
  },
  plugins: [],
}
