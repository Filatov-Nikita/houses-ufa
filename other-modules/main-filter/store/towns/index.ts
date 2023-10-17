import { defineStore } from 'pinia';
import { useTowns } from './composables/use-towns';
import { useParams } from './composables/use-params';
import { useFilterParams } from '../filter-params';

const useTownsFilter = defineStore('townsFilter', () => {
  const globalParams = useFilterParams();
  const { params, queryParams, clearParams } = useParams(globalParams.params);
  const { towns, loading, loadingNext, pagination, show, next } = useTowns(queryParams);

  return {
    params,
    data: towns,
    loading,
    loadingNext,
    pagination,
    show,
    next,
    clearParams
  }
});

export { useTownsFilter };
