import { defineStore } from 'pinia';
import { useStorehouse } from './composables/useStorehouse';
import { useParkStorParams } from '../filter-parkstor-params';

const useFilterStorehouse = defineStore('filterStorehouse', () => {
  const params = useParkStorParams();
  const filterParams = computed(() => params.queryFilter);
  const { showStores, loadingStores, storeshouses, pagination } = useStorehouse(filterParams);

  return {
    loadingStores,
    storeshouses,
    pagination,
    showStores
  }
});


export { useFilterStorehouse };
