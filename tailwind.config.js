/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fef7f0',
          100: '#fdecd8',
          200: '#fbd5b0',
          300: '#f8b87d',
          400: '#f5934a',
          500: '#f2762a',
          600: '#e35a1f',
          700: '#bc431c',
          800: '#96361e',
          900: '#7a2f1c',
          950: '#42150a',
        },
        latte: {
          50: '#fefcf8',
          100: '#fdf8ed',
          200: '#fbf0d4',
          300: '#f7e3b0',
          400: '#f1d080',
          500: '#eab84d',
          600: '#e1a23a',
          700: '#c8832e',
          800: '#a4682a',
          900: '#855527',
          950: '#472c12',
        },
        mocha: {
          50: '#fdf8f3',
          100: '#fbece0',
          200: '#f6d5c1',
          300: '#f0b893',
          400: '#e89464',
          500: '#e2763a',
          600: '#d35f2a',
          700: '#af4a25',
          800: '#8c3d26',
          900: '#723423',
          950: '#3d1a10',
        }
      },
      transitionProperty: {
        'theme': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
}
