/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ['4rem', '5rem'], // 64, 80
        h2: ['3rem', '3.5rem'], // 48, 56
        h3: ['2.5rem', '3.5rem'], // 40, 56
        h4: ['2rem', '2.5rem'], // 32, 40
        h5: ['1.5rem', '2rem'], // 24, 32
        h6: ['1.25rem', '1.75rem'], // 20, 28
        body_l: ['1.125rem', '1.75rem'], //18, 28
        body_m: ['1rem', '1.5rem'], // 16, 24
        body_m2: ['1rem', '1.75rem'], // 16, 28
        body_s: ['rem', '1.5rem'], // 14, 24
        body_s2: ['rem', '1.25rem'], // 14, 20
        body_xs: ['rem', '1rem'], // 12, 16
      },
      spacing: {
        5.5: '1.406rem',
      },
    },
    fontFamily: {
      freeset: 'freeset',
    },
    colors: {
      primary: '#4FBA78',
      'primary-hover': '#6AD091',
      'primary-press': '#5BAF7B',

      primary01: '#DFFDE9',
      'primary01-hover': '#EDFFF3',
      'primary01-press': '#D7F5E1',
      secondary: '#F0F0F0',
      'secondary-hover': '#E5E5E5',
      'secondary-press': '#EFEFEF',

      white: '#ffffff',
      error: '#F13F36',
      warning: '#FEBF22',
      dark: '#2D2D2D',
      gray: '#F7F8F8',

      text00: '#2D2D2D',
      text01: '#4F4F4F',
      text02: '#9F9F9F',

      border00: '#E6E6E6',

      base00: '#F7F8F8',
      base01: '#F0F0F0',
      base02: '#D0D0D0',
      base03: '#32404C',

      icon: '#8F8F8F',
      icon01: '#181818',
    },
    screens: {
      m: '375px',
      l: '1024px',
      d: '1440px',
    },
  },
  plugins: [],
}
