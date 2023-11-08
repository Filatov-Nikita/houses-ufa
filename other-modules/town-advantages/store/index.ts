import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import  type { AdvantageOne } from '@/types/estate/advantages';

export const useTownAdvantages = defineStore('townAdvantages', () => {
  const townId = ref<number | null>(null);
  const url = computed(() => `estate/towns/${townId.value}/advantages`);
  const { data: advantages, pending: loading, execute: show } = useDataFetch<AdvantageResponse>(url, {
    immediate: false,
    watch: false,
  });

  function setTownId(id: number) {
    townId.value = id;
  }

  return {
    townId,
    advantages,
    loading,
    show,
    setTownId
  }
});

export interface AdvantageResponse {
  data: AdvantageOne[];
}
