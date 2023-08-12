import { useLoadersStore } from '@/stores/loaders';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $loaders: {
      contains(key: string): boolean;
      append(key: string): string;
      remove(key: string): void;
      resetAll(): void;
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const loadStore = useLoadersStore();
  nuxtApp.vueApp.config.globalProperties.$loaders = {
    contains: loadStore.contains,
    append: loadStore.append,
    remove: loadStore.remove,
    resetAll: loadStore.resetAll,
  };
});
