import { useDataFetch } from '@/composables/useDataFetch';
import { defineStore } from 'pinia';
import type { Material } from '../types';

export const useTownMaterials = defineStore('townMaterials', () => {
  const townId = ref<number | null>(null);
  const filterValue = ref<string | null>(null);

  function setTownId(id: number) {
    townId.value = id;
  }

  const url = computed(() => {
    return `estate/towns/${townId.value}/materials`;
  });

  const { data, pending: loading, execute: show } = useDataFetch<Response>(url, {
    immediate: false,
    watch: false,
  });

  return {
    data,
    loading,
    filterValue,
    show,
    setTownId,
  }
});

export interface Response {
  data: Material[];
}
