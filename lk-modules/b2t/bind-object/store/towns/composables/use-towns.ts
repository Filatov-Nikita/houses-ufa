import type { QueryParams } from './use-params';
import type { Town } from '@/types/estate/town';
import { useSeqDataFetch } from '@/composables/useSeqDataFetch';

export function useTowns(queryParams: ComputedRef<QueryParams>) {
  const { response, next, pagination, loadingNext } = useSeqDataFetch<Town>('estate/filter/estates', {
    query: queryParams,
  });

  return {
    towns: response.data,
    loading: response.pending,
    loadingNext,
    pagination,
    show: response.execute,
    next,
  }
};
