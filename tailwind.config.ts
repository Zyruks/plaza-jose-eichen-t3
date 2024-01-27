import { type Config } from 'tailwindcss';
import tailwindCssAnimated from 'tailwindcss-animated';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      animation: {},
      animationDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        '3s': '3s',
        '5s': '5s',
        '10s': '10s',
        '15s': '15s',
        '20s': '20s',
      },
      animationDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        '3s': '3s',
        '5s': '5s',
        '10s': '10s',
        '15s': '15s',
        '20s': '20s',
      },
      borderWidth: {
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px',
      },
      colors: {
        primary: {
          50: '#EFF8FF',
          100: '#DEF0FF',
          200: '#B6E2FF',
          300: '#75CdFF',
          400: '#2CB5FF',
          500: '#00A0FF',
          600: '#007BD4',
          700: '#0061AB',
          800: '#00528D',
          900: '#064574',
          950: '#042B4D',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {},
      fontSize: {
        'fluid-text-sm': 'clamp(0.781rem, 0.775rem + 0.033vi, 0.8rem)',
        'fluid-text-base': 'clamp(0.938rem, 0.916rem + 0.109vi, 1rem)',
        'fluid-text-lg': 'clamp(1.125rem, 1.082rem + 0.217vi, 1.25rem)',
        'fluid-text-xl': 'clamp(1.35rem, 1.276rem + 0.37vi, 1.563rem)',
        'fluid-text-2xl': 'clamp(1.62rem, 1.504rem + 0.579vi, 1.953rem)',
        'fluid-text-3xl': 'clamp(1.944rem, 1.771rem + 0.865vi, 2.441rem)',
        'fluid-text-4xl': 'clamp(2.333rem, 2.083rem + 1.25vi, 3.052rem)',
        'fluid-text-5xl': 'clamp(2.799rem, 2.446rem + 1.766vi, 3.815rem)',
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
      },
      screens: {
        xs: '500px',
      },
      zIndex: {
        1: '1',
        10: '10', // Navbar
        20: '20', // Overlay
        30: '30', // Modal
        40: '40', // Toast
        50: '50', // Tooltip and Popover
      },
    },
  },
  plugins: [tailwindCssAnimated],
} satisfies Config;
