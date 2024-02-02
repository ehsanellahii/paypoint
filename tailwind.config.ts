import { nextui } from '@nextui-org/react';
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        xs: '450px',
      },
      colors: {
        main: {
          brand: '#5897CD',
          off: '',
        },
        blue: {
          dark: '#0071BB',
          light: '#0066A8',
          royal: '#0057fc',
          teal: '#2f3460',
        },
        white: {
          main: '#FFFFFF',
          off: '#FAF7F3',
          lightOrange: '#f6f6f6',

          snow: '#F3ECDA',
        },
        black: {
          main: '#0a0a0a',
          text: '#0e1318',
        },
        grey: {
          off: 'F6F6F6',
          text: '#526370',
          pText: '#4a4e57',
        },
        yellow: {
          main: '#FFD800',
        },
        red: {
          cool: '#E06259',
          dark: '#5A0024',
          neon: '#FF3131',
        },
        orange: {
          main: '#ff8300',
        },
      },
      boxShadow: {
        video: '0px 0px 15px 1px rgba(101, 118.99999999999997, 134, 0.15)',
        wrapper: '0px 0px 10px 1px rgba(0, 0, 0, 0.23)',
      },
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#5897CD',
          },
        },
      },
    }),
  ],
};
