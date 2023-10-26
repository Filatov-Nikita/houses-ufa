// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';


export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      script: [
        {
          src: "https://api-maps.yandex.ru/2.1/?apikey=62425c4f-4dfc-4f52-a01f-bc1e23d27b7d&coordorder=longlat&lang=ru_RU",
        },
      ],
    },
  },
  // devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-swiper'],
  runtimeConfig: {
    public: {
      baseURL: 'http://31.129.104.95/api/lobby/'
    }
  },
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
    '~/plugins/maska.ts',
    '~/plugins/vee-validate.ts',
    '~/directives/click-outside.ts',
    '~/directives/pretty.ts',
    '~/plugins/pretty-amount.ts',
    '~/plugins/icons-sprite.ts',
    '~/plugins/loaders.ts',
    '~/plugins/format-date.ts',
    '~/plugins/notify.ts',
  ],
  css: ['~/assets/css/app.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    // заглушка чтобы плагин работал
    optimizeDeps: { exclude: ['fsevents'] },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [ path.resolve(process.cwd(), 'assets/icons') ],
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-last',
        customDomId: '__svg__icons__dom__',
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/mixins/screens.scss" as *;'
        }
      }
    },
  }
})
