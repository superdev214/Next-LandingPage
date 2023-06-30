/** @type {import('tailwindcss').Config} */
const converter = require('color-convert');
const primaryColor = '#2D93C7';
const charcoalColor = '#34454E';
const generalColor = '#23242A';
const htr = converter.hex.rgb; //* shorthand


const primaryRGB = htr(primaryColor).join(', ');
const charcoalRGB = htr(charcoalColor).join(', ');
const generalRGB = htr(generalColor).join(', ');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: 'SF Pro Text Bold',
      },
      colors: {
        primary: {
          DEFAULT: `rgba(${primaryRGB}, 1)`,
          400: `rgba(${primaryRGB}, .4)`,
        },
        charcoal:{
          default: `rgba(${charcoalRGB}, 1)`,
        },
        general:{
          default: `rgba(${generalRGB}, 1)`,
        }
      },
      lineHeight:{
        'extra-large': '72px'
      }
    },
  },
  plugins: [],
}