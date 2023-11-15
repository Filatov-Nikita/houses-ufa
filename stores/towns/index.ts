import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import type { Image } from '@/types/share';

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
  latitude: string,
  longitude: string,
  location: string,
  sight_picture: Image | null,
}

export { useTownsStore };
