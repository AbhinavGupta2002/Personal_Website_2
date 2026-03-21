/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      gap: {
        'grid': '2rem'
      },
      screens: {
        'grd': '1268px',
        'hdr': '1024px'
      },
      height: {
        'grd': '13.5rem'
      },
    },
  },
  plugins: [require("daisyui")]
}
