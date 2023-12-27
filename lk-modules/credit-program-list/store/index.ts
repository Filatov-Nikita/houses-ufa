import { useDataFetch } from '@/composables/useDataFetch';
import type { Offer } from '@/types/credit';
import { defineStore } from 'pinia';

export const useCreditProgramCalc = defineStore('lkCreditCalc', () => {
  const groupId = ref<number | null>(null);

  const params = {
    cost: 2000000,
    initialPay: 200000,
    period: 25,
  };

  const offerIds = ref<number[]>([]);

  function toogleOffer(id: number) {
    if(hasOffer(id)) {
      offerIds.value = offerIds.value.filter(offerId => offerId !== id);
    } else {
      offerIds.value.push(id);
    }
  }

  function hasOffer(id: number) {
    return offerIds.value.includes(id);
  }

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

  const selectedOffers = computed(() => {
    if(offerIds.value.length === 0 || !creditOffers.value) return [];
    return creditOffers.value.data.filter(offer => offerIds.value.includes(offer.id));
  });

  return {
    creditOffers,
    loading,
    groupId,
    params,
    offerIds,
    show,
    toogleOffer,
    hasOffer,
    selectedOffers,
  };
});

interface Response {
  data: Offer[],
};
