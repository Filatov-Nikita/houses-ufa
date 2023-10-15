import { defineStore } from 'pinia';
import { useFlats } from './composables/use-flats';
import { useParams } from './composables/use-params';
import { useFilterParams } from '../filter-params';

const useFlatsFilter = defineStore('flatsFilter', () => {
  const globalParams = useFilterParams();
  const { params, clearParams, queryParams } = useParams(globalParams.params);
  const flats = useFlats(queryParams);

  return {
    params,
    data: flats.flats,
    show: flats.show,
    clearParams,
  }
});

export { useFlatsFilter };
