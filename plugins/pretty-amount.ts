import { usePrettyAmount } from '@/composables/usePrettyAmount';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $amount: (val: string | number) => string;
    $formatValue: (val: string | number, after?: string) => string;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const { amount, pretty } = usePrettyAmount();
  nuxtApp.vueApp.config.globalProperties.$amount = amount;
  nuxtApp.vueApp.config.globalProperties.$formatValue = pretty;
});
