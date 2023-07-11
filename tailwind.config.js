/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
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
      'secondary': '#F0F0F0',
      'secondary-hover': '#E5E5E5',
      'secondary-press': '#EFEFEF',
    }
  },
  plugins: [],
}
