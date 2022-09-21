/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'white': '#FFF',
      'light': '#F5F5F5',
      'dark': '#0B374D',
      'gold': '#B48039',
      'paper': '#efede4',
      'forest': '#192719',
    },
    extend: {
      fontFamily: {
        headline: ['beaufort-pro', 'serif'],
        decorative: ['Charmonman', 'cursive'],
        sans: ['trade-gothic-next-condensed', 'trade-gothic', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
