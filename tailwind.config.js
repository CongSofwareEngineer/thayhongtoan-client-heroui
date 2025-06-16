import {heroui} from "@heroui/theme"
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        keyframes: {
        zoom: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'spin-3': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        zoom: 'zoom 0.2s ease-in-out',
        spin3s: 'spin-3 3s infinite linear',
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      
    },
  },
  darkMode: "class",
  plugins: [
    heroui({theme: 'light'}),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-title': {
          fontFamily: 'var(--font-title) !important',
          fontSize: '40px',
          fontWeight: '700',
        },
        '.text-medium': {},
        '.text-common': {},
        '.absolute-center': {},
        '.skeleton-loading': {},
        '.bg-red-linear': {
          background: 'linear-gradient(270deg, #FF535F 0%, #A91325 100%)',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}

module.exports = config;