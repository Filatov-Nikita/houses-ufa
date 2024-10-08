// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

import * as YandexMap from './scripts/yandex-map';
import * as YandexMetric from './scripts/yandex-metric';
import * as Roistat from './scripts/roistat';
import * as Envybox from './scripts/envybox';
import * as Pixel from './scripts/pixel';
import * as Pixel2 from './scripts/pixel2';
import * as Captcha from './scripts/ysmartcaptcha';
import * as Botfaqtor from './scripts/botfaqtor';
import useRouteRules from './config-parts/useRouteRules';

function definePublicConfig() {
  const host = 'https://adminsite.gkufa.ru/';
  return {
    host,
    baseURL: host + 'api/lobby/',
    rootApi: host + 'api/',
    captchaClientKey: '',
    devCaptchaToken: '',
  }
}

export default defineNuxtConfig({
  ssr: true,
  routeRules: useRouteRules(),
  app: {
    head: {
      script: [
        {
          type: 'text/javascript',
          src: YandexMap.src,
        },
        {
          type: 'text/javascript',
          src: Captcha.src,
          defer: true,
        }
      ],
    },
  },
  $production: {
    app: {
      head: {
        meta: [
          { name: 'yandex-verification', content: '89eb28202ac895e5' }
        ],
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
            innerHTML: Pixel.body,
          },
          {
            type: 'text/javascript',
            innerHTML: Pixel2.body,
          },
          {
            type: 'text/javascript',
            innerHTML: Botfaqtor.body,
          },
        ],
        noscript: [
          {
            innerHTML: YandexMetric.noscript
          },
          {
            innerHTML: Pixel.noscript
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
  modules: ['@pinia/nuxt', 'nuxt-swiper', 'nuxt-jsonld', 'nuxt-viewport'],
  runtimeConfig: {
    public: definePublicConfig(),
  },
  appConfig: {
    seoBase: 'https://seo.dash-gkufa.ru/',
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
  viewport: {
    breakpoints: {
      lg: 1420.9,
      md: 1023.9,
      sm: 767.9,
    },
    fallbackBreakpoint: 'lg',
    feature: 'maxWidth',
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
    vue: {
      script: {
          defineModel: true,
          propsDestructure: true
      }
    },
  }
})
