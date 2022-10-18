/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    colors: {
      'white': '#FFF',
      'black': '#000',
      'light': '#F5F5F5',
      'dark': '#0B374D',
      'gold': '#B48039',
      'paper': '#efede4',
      'forest': '#192719',
      'paper-action': '#DAD7C9',
      'transparent': '#ffffff/0',
    },
    extend: {
      fontFamily: {
        headline: ['beaufort-pro', 'serif'],
        decorative: ['Charmonman', 'cursive'],
        sans: ['trade-gothic-next-condensed', 'trade-gothic', 'sans-serif']
      },
      aspectRatio: {
        '4/5': '4 / 5',
      },
      borderRadius: {
        'jumbo-sm': '4.5rem',
        'jumbo': '7rem'
      },
      animation: {
        'draw-v': 'vDraw 3.5s ease-out forwards',
      },
      keyframes: {
        vDraw : {
          'to': { transform: 'translateY(50%)'}
        }
      },
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
