import { useComplexesStore } from '@/stores/complexes';
import { useTownsStore } from '@/stores/towns';
import { useSlugsStore } from '@/stores/slugs';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const complexesStore = useComplexesStore();
  const townsStore = useTownsStore();
  const slugsStore = useSlugsStore();
  if(!complexesStore.complexes && !townsStore.towns && !slugsStore.slugs) {
    await useAsyncData(() => {
      return Promise.all([ complexesStore.show(), townsStore.show(), slugsStore.getSlugs() ]);
    });
  }
});
