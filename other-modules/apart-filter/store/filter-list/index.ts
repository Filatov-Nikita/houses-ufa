import { defineStore } from 'pinia';
import { useFlatParams } from '../filter-flats-params';
import { useFlatsList } from './composables/useFlats';

const useFilterList = defineStore('filterList', () => {
  const params = useFlatParams();

  const queryFilter = computed(() => params.queryFilter);
  const housesList = computed(() => params.housesList);
  const entrancesHouseList = computed(() => params.entrancesHouseList);

  const { all, flats, loadingFlats, pagination } = useFlatsList(queryFilter);

  return {
    filterParams: params.filterParams,
    queryFilter,
    flats,
    loadingFlats,
    pagination,
    housesList,
    entrancesHouseList,
    clearParams: params.clearParams,
    all,
  }
});

export { useFilterList };
