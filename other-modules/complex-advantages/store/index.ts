import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import type { AdvantageOne } from '@/types/estate/advantages';

export const useComplexAdvantages = defineStore('complexAdvantages', () => {
  const complexId = ref<number | null>(null);
  const url = computed(() => `estate/complexes/${complexId.value}/advantages`);
  const { data: advantages, pending: loading, execute: show } = useDataFetch<AdvantageResponse>(url, {
    immediate: false,
  });

  function setComplexId(id: number) {
    complexId.value = id;
  }

  return {
    complexId,
    advantages,
    loading,
    show,
    setComplexId
  }
});

export interface AdvantageResponse {
  data: AdvantageOne[];
}
