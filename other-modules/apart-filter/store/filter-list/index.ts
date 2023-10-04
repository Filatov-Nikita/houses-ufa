import { defineStore } from 'pinia';
import { useFlatParams } from './composables/useParams';
import { useFlatsList } from './composables/useFlats';

const useFilterList = defineStore('filterList', () => {
  const { queryFilter, filterParams, clearParams, housesList, entrancesHouseList } = useFlatParams();
  const { all, flats, loadingFlats, pagination } = useFlatsList(queryFilter);

  return {
    filterParams,
    queryFilter,
    flats,
    loadingFlats,
    pagination,
    housesList,
    entrancesHouseList,
    clearParams,
    all,
  }
});

export { useFilterList };
