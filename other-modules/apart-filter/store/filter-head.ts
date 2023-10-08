import { defineStore } from 'pinia';

const useFilterHead = defineStore('useFilterHead', () => {
  const currentTabFilter = ref<'flats' | 'places'>('flats');
  const currentFlatFilter = ref<'list' | 'plan'>('list');
  const currentParkStoreFilter = ref<'stores' | 'parking'>('stores');

  return {
    currentFlatFilter,
    currentTabFilter,
    currentParkStoreFilter
  }
});

export { useFilterHead };
