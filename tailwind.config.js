/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gap: {
        'grid': '30rem'
      },
      screens: {
        'grd': '1268px',
        'hdr': '1023px'
      },
      height: {
        'grd': '13.5rem'
      }
    },
  },
  plugins: [require("daisyui")]
}
