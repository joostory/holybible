/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      'bumblebee', 'halloween'
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
  ],
}
