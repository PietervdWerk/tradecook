// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '1.875rem',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-7-end': 'span 7 / span 7',
      },
      maxWidth: {
        2: '2rem',
        4: '4rem',
        8: '8rem',
        10: '10rem',
        12: '12rem',
        13: '13rem',
        26: '26rem',
      },
    },
    minWidth: {
      md: ' 28rem',
    },
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      primary: {
        DEFAULT: '#ff731d',
        main: '#ff731d',
        text: 'black',
        hover: '#FF9A5C',
      },
      secondary: '#657153',
      highlighter: {
        DEFAULT: '#48639c',
        main: '#48639c',
        text: 'white',
        hover: '#738BBF',
      },
      base: '#fff7e9',
      'base-2': '#e4dfda',
      color: {
        DEFAULT: '#707070',
        light: '#707070',
        dark: '#000000',
      },
    },
  },
  plugins: [],
}

