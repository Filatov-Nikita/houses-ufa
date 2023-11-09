import type { Image } from '@/types/share'
import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

export const useComplexGenplan = defineStore('complexGenplan', () => {
  const complexId = ref<number | null>(null);

  function setComplexId(id: number) {
    complexId.value = id;
  }

  const url = computed(() => `estate/complexes/${complexId.value}/master-plan`);

  const { data, pending: loading, execute: show } = useDataFetch<Response>(url, {
    immediate: false,
    watch: false,
  });

  return {
    data,
    loading,
    show,
    setComplexId,
  }
});

export interface Response {
  data: Data;
}

export interface Data {
  id:          number;
  master_plan: Image | null;
  houses:      House[];
}

export interface House {
  id:                   number;
  complex_plan_polygon: string;
  name:                 string;
}
