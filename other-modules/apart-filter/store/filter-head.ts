import { defineStore } from 'pinia';

const useFilterHead = defineStore('useFilterHead', () => {
  const currentTabFilter = ref<'flats' | 'places'>('flats');
  const currentFlatFilter = ref<'list' | 'plan'>('list');

  return {
    currentFlatFilter,
    currentTabFilter
  }
});

export { useFilterHead };
