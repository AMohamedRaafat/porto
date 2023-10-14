/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Open Sans', sans-serif",
        poppins: "'Poppins', sans-serif",
        summer: "'Segoe Script', sans-serif"
      },
      backgroundImage: {
        'center-bg': "url('/img/center.jpg')"
      },
      marginRight: {
        reset: '0 !important'
      }
    }
  },
  safelist: ['block', 'hidden'],
  plugins: []
}
