import { useDataFetch } from '@/composables/useDataFetch';
import type { Offer } from '@/types/credit';
import { defineStore } from 'pinia';

export const useCreditProgramCalc = defineStore('creditProgramCalc', () => {
  const groupId = ref<number | null>(null);

  const params = {
    cost: 2000000,
    initialPay: 200000,
    period: 25,
  };

  const query = computed(() => {
    return {
      group_id: groupId.value,
    }
  });

  const { data: creditOffers, pending: loading, execute: show } = useDataFetch<Response>('mortgage/offers', {
    query,
    immediate: false,
    watch: false,
  });

  return {
    creditOffers,
    loading,
    groupId,
    params,
    show,
  };
});

interface Response {
  data: Offer[],
};
