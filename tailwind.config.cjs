/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    backgroundImage: {
      'hero-pattern':
        "url(\"data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%2334d1bf' fill-opacity='0.15'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
    },
    colors: {
      blue: '#3454d1',
      gray: '#EFEFEF',
      turquoise: '#34d1bf',
      black: '#070707',
      cerise: '#d1345b',
      green: colors.green,
      emerald: colors.emerald,
      red: colors.red,
      'tw-gray': colors.gray,
    },
    fontFamily: {
      header: ['Khand', 'sans-serif'],
      body: ['Hind Madurai', 'sans-serif'],
      alternative: ['Harmattan', 'sans-serif'],
    },
    extend: {
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1.0)', opacity: 0.5 },
          '100%': { transform: 'scale(2.0)' },
        },
        'progress-bar': {
          '0%': { width: 0 },
          '100%': { width: 'auto' },
        },
      },
      animation: {
        'scale-up': 'scale ease-in 1s forwards',
        'progress-bar': 'progress-bar 3s ease-in-out',
      },
    },
  },
  plugins: [],
};
