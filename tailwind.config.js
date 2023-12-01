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
    extend: {
      colors: {
        'wood-brown': '#BA8756',
        'smoke': '#F7F2ED'
      },
      spacing: {
        '72': '18rem',
        '75': '18.75rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
      },
      backgroundImage: theme => ({
        'wave': "url('~@/assets/images/bg-texture-wave.png')",
        'earth': "url('~@/assets/images/earth-bg-texture.png')",

      })
    },
  },
  plugins: [],
}

