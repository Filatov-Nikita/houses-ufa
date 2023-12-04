// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

import * as YandexMap from './scripts/yandex-map';
import * as YandexMetric from './scripts/yandex-metric';
import * as Roistat from './scripts/roistat';
import * as Marquiz from './scripts/marquiz';
import * as Envybox from './scripts/envybox';

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      script: [
        {
          type: 'text/javascript',
          src: YandexMap.src,
        }
      ],
    },
  },
  $production: {
    app: {
      head: {
        script: [
          {
            type: 'text/javascript',
            innerHTML: YandexMetric.body,
          },
          {
            type: 'text/javascript',
            innerHTML: Roistat.body,
            tagPosition: 'bodyClose',
          },
          {
            type: 'text/javascript',
            src: Envybox.src,
            async: true,
            tagPosition: 'bodyClose',
          },
          {
            type: 'text/javascript',
            innerHTML: Marquiz.body1,
          },
          {
            type: 'text/javascript',
            innerHTML: Marquiz.body2,
          },
          {
            type: 'text/javascript',
            innerHTML: Marquiz.body3,
            tagPosition: 'bodyClose',
          },
          {
            type: 'text/javascript',
            innerHTML: Marquiz.body4,
            tagPosition: 'bodyClose',
          },
        ],
        noscript: [
          {
            innerHTML: YandexMetric.noscript
          }
        ],
        link: [
          {
            rel: 'stylesheet',
            href: Envybox.link,
            tagPosition: 'bodyClose',
          }
        ],
      }
    }
  },
  // devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-swiper'],
  runtimeConfig: {
    public: {
      baseURL: 'https://adminsite.gkufa.ru/api/lobby/',
      rootApi: 'https://adminsite.gkufa.ru/api/',
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
    modules: ['navigation', 'pagination', 'effect-fade'],
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
