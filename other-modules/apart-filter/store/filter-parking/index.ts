import { defineStore } from 'pinia';
import { useParking } from './composables/useParking';
import { useParkStorParams } from '../filter-parkstor-params';

const useFilterParking = defineStore('filterParking', () => {
  const params = useParkStorParams();
  const filterParams = computed(() => params.queryFilter);
  const { showParkings, loadingParkings, parkings, pagination } = useParking(filterParams);

  return {
    loadingParkings,
    parkings,
    pagination,
    showParkings
  }
});


export { useFilterParking };
