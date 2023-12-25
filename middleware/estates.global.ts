import { useComplexesStore } from '@/stores/complexes';
import { useTownsStore } from '@/stores/towns';


export default defineNuxtRouteMiddleware(async (to, from) => {
  const complexesStore = useComplexesStore();
  const townsStore = useTownsStore();
  if(!complexesStore.complexes && !townsStore.towns) {
    await useAsyncData(() => {
      return Promise.all([ complexesStore.show(), townsStore.show() ]);
    });
  }
});
