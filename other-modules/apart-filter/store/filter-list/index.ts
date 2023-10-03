import { defineStore } from 'pinia';
import { useFlatParams } from './composables/useParams';
import { useFlatsList } from './composables/useFlats';

const useFilterList = defineStore('filterList', () => {
  const { queryFilter, filterParams, clearParams } = useFlatParams();
  const { all, flats, loadingFlats, pagination } = useFlatsList(queryFilter);

  return {
    filterParams,
    queryFilter,
    flats,
    loadingFlats,
    clearParams,
    all,
    pagination
  }
});

export { useFilterList };
