/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./store/**/*.ts",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#4FBA78',
      'primary-hover': '#6AD091',
      'primary-press': '#5BAF7B',
      'white': '#ffffff',
      'dark': '#2D2D2D',
      'gray': '#F7F8F8',
      'gray-600': '#9F9F9F',
      'secondary': '#F0F0F0',
      'secondary-hover': '#E5E5E5',
      'secondary-press': '#EFEFEF',
      'negative': '#F13F36',
    },
    screens: {
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1920px',
    }
  },
  plugins: [],
}
