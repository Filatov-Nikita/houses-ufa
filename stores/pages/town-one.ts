import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import type { EstateCard } from '@/types/estate/estate-card';
import { useSlugsStore } from '@/stores/slugs';

const useTownOne = defineStore('townOne', () => {
  const slugsStore = useSlugsStore();

  const townId = ref<number | null>(null);

  const showOneUrl = computed(() => `/estate/towns/${townId.value}`);

  const { data: town, pending: loadingTown, execute: showOne } = useDataFetch<TownResponse>(showOneUrl, {
    immediate: false,
    watch: false,
  });

  function setTownId(slug: string | null) {
    if(slug === null) {
      townId.value = null;
    } else {
      const id = slugsStore.townSlugIds[slug];
      townId.value = id ? parseInt(id) : parseInt(slug);
    }
  }

  return {
    town,
    loadingTown,
    townId,
    showOne,
    setTownId
  }
});

export interface TownResponse {
  data: EstateCard;
}

export { useTownOne };
