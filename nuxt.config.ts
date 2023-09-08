// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
import { existsSync, readFileSync } from "node:fs";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-swiper'],
  runtimeConfig: {
    public: {
      baseURL: 'http://31.129.104.95/api/lobby/'
    }
  },
  
  
  // components: [
  //   '~/components/base',
  //   '~/components/base/BaseSelect/displays',
  //   '~/components/base/BaseSelect/dropdowns',
  // ],
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
    '~/directives/pretty.ts',
    '~/plugins/pretty-amount.ts',
    '~/plugins/icons-sprite.ts',
    '~/plugins/loaders.ts',
    '~/plugins/format-time.ts',
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
    // vue: {
    //   script: {
    //     fs: {
    //       fileExists(file: string) {
    //         return existsSync(file);
    //       },
    //       readFile(file: string) {
    //         return readFileSync(file, "utf-8");
    //       },
    //     },
    //   },
    // },
  }
})
