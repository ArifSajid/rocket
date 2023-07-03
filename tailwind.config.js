/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        xsm: '500px',
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      spacing:{
        13: '3.25rem'
      },
      fontSize:{
        '10xl': ['9rem', { lineHeight: '1.2' }],
      }
    },
  },
  plugins: [],
}

