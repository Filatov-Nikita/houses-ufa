/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './store/**/*.ts',
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
        body_s: ['0.875rem', '1.5rem'], // 14, 24
        body_s2: ['0.875rem', '1.25rem'], // 14, 20
        body_xs: ['0.75rem', '1rem'], // 12, 16
      },
      spacing: {
        5.5: '1.406rem',
      },
      transitionProperty: {
        height: 'height',
        fill: 'fill',
        top: 'top',
        left: 'left',
        width: 'width',
      },
    },
    fontFamily: {
      freeset: 'freeset',
      freesetdemi: 'freeset-demi',
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
      negative: '#F13F36',
      warning: '#FEBF22',
      dark: '#2D2D2D',
      gray: '#F7F8F8',
      'gray-600': '#9F9F9F',
      dark: '#2D2D2D',
      text00: '#2D2D2D',
      text01: '#4F4F4F',
      text02: '#9F9F9F',
      text03: '#C0C0C0',

      border00: '#E6E6E6',

      base00: '#F7F8F8',
      base01: '#F0F0F0',
      base02: '#D0D0D0',
      base03: '#32404C',

      icon: '#8F8F8F',
      icon01: '#181818',
    },
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
    },
    letterSpacing: {
      875: '0.00875rem',
      3: '0.03rem',
    },
    keyframes: {
      slideInLeft: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      slideOutLeft: {
        '0%': { transform: 'translateX(-0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      slideInRight: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
      slideOutRight: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(100%)' },
      },
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      fadeOut: {
        '0%': { opacity: 1 },
        '100%': { opacity: 0 },
      },
    },
    animation: {
      slideInLeft: 'slideInLeft .1s ease-in-out',
      slideOutLeft: 'slideOutLeft .1s ease-in-out',
      slideInRight: 'slideInRight .1s ease-in-out',
      slideOutRight: 'slideOutRight .1s ease-in-out',

      fadeIn: 'fadeIn 10s ease-in-out',
      fadeOut: 'fadeOut 10s ease-in-out',
    },
    boxShadow: {
      shadow00:
        '0px 5px 16px 0px rgba(0, 0, 0, 0.07), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
      shadow01: '0px 5px 16px 0px rgba(0, 0, 0, 0.07)',
    },
    container: {
      DEFAULT: '100%',
      center: true,

      padding: {
        DEFAULT: '16px',
        lg: '24px',
        xl: '40px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // ".container": {
        //   maxWidth: "100%",
        //   width: "100%",
        //   padding: "0 15px",
        //   marginRight: "auto",
        //   marginLeft: "auto",
        // },
      })
    },
  ],
}
