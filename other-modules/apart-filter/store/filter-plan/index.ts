import { defineStore } from 'pinia';
import { usePlan } from './composables/usePlan';
import { useFlatParams } from '../filter-flats-params';

const useFilterPlan = defineStore('filterPlan', () => {
  const params = useFlatParams();
  const filterParams = computed(() => params.queryFilter);
  const { showGrid, loadingGrid, grid } = usePlan(filterParams);

  return {
    loadingGrid,
    grid,
    showGrid
  }
});


export { useFilterPlan };
