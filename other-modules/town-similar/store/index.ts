import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import type { Town } from '@/types/estate/town';

export const useTownSimilar = defineStore('townSimilar', () => {
  const townId = ref<number | null>(null);

  function setTownId(id: number) {
    townId.value = id;
  }

  const url = computed(() => {
    return `estate/estates/${townId.value}/similar`;
  });

  const { data, pending: loading, execute: show } = useDataFetch<Response>(url, {
    immediate: false,
    watch: false,
  });

  return {
    data,
    loading,
    show,
    setTownId,
  }
});

export interface Response {
  data: Town[],
}
