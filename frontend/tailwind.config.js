/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
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
    }
  },
  plugins: [],
}
