import { defineStore } from 'pinia';
import { useStorehouse } from './composables/useStorehouse';
import { useParkStorParams } from '../filter-parkstor-params';

const useFilterStorehouse = defineStore('filterStorehouse', () => {
  const params = useParkStorParams();
  const filterParams = computed(() => params.queryFilter);
  const { showStores, loadingStores, storeshouses } = useStorehouse(filterParams);

  return {
    loadingStores,
    storeshouses,
    showStores
  }
});


export { useFilterStorehouse };
