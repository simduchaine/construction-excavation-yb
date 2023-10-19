/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue, js, jsx, html}',
    './static/**/*.{html, js}'
  ],
  theme: {
    fontFamily: {
      'body': ['Roboto', 'sans-serif'],
      'display': ['Outfit', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

