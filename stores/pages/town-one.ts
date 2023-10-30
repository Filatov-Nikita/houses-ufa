import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import type { EstateCard } from '@/types/estate/estate-card';

const useTownOne = defineStore('townOne', () => {
  const townId = ref<number | null>(null);

  const showOneUrl = computed(() => `/estate/towns/${townId.value}`);

  const { data: town, pending: loadingTown, execute: showOne } = useDataFetch<TownResponse>(showOneUrl, {
    immediate: false,
    watch: false,
  });

  function setTownId(id: number | null) {
    townId.value = id;
  }

  return {
    town,
    loadingTown,
    showOne,
    setTownId
  }
});

export interface TownResponse {
  data: EstateCard;
}

export { useTownOne };
