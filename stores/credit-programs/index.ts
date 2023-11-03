import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import type { Group } from '@/types/credit';

export const useCreditPrograms = defineStore('creditPrograms', () => {
  const { data: creditProgs, pending: loading, execute: show } = useDataFetch<Response>('mortgage/groups', {
    immediate: false,
    watch: false,
  });

  return {
    creditProgs,
    loading,
    show,
  }
});


interface Response {
  data: Group[],
};
