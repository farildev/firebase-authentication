/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      primary : "Poppins"
    },
    extend: {
      backgroundColor : {
        primary : '#202227',
        input : '#282A2F',
        stroke : '#8692A6',
        secondary : '#5871EB'
      }
    },
  },
  plugins: [],
}