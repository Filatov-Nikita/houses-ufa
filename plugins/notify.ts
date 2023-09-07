import { useNotifyStore, type Item } from '@/stores/notify';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $notify: {
      create(item: Pick<Item, 'message' | 'type'>): void;
      remove(id: number): void;
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const notifyStore = useNotifyStore();
  nuxtApp.vueApp.config.globalProperties.$notify = {
    create: notifyStore.create,
    remove: notifyStore.remove,
  };
});
