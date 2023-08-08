// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-swiper'],
  components: [
    '~/components/base',
    '~/components/base/BaseSelect/displays',
    '~/components/base/BaseSelect/dropdowns',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  swiper: {
    modules: ['navigation', 'pagination'],
  },
  plugins: [
    '~/plugins/vee-validate.ts',
    '~/directives/click-outside.ts',
    '~/plugins/pretty-amount.ts',
  ],
  css: ['~/assets/css/app.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
