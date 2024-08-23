const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   "main": "#F72585",
      // },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
    },
    screens: {
      "xsm": '415px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

