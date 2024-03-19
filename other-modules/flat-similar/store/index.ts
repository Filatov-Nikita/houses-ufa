import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import type { Flat } from '@/types/estate/flat';

export const useFlatSimilar = defineStore('flatSimilar', () => {
  const flatId = ref<string | null>(null);

  function setFlatId(id: string) {
    flatId.value = id;
  }

  const url = computed(() => {
    return `estate/flats/${flatId.value}/similar`;
  });

  const { data, pending: loading, execute: show } = useDataFetch<Response>(url, {
    immediate: false,
    watch: false,
  });

  return {
    data,
    loading,
    show,
    setFlatId,
  }
});

export interface Response {
  data: Flat[],
}
