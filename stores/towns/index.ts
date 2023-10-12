import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

const useTownsStore = defineStore('townsStore', () => {
  const { data: towns, pending: loading, error, execute: show } = useDataFetch<TownsResponse>('estate/towns', {
    immediate: false,
    watch: false,
  });

  return {
    towns,
    loading,
    show
  }
});

export interface TownsResponse {
  data: TownItem[]
}

export interface TownItem {
  id: number,
  name: string,
}

export { useTownsStore };
