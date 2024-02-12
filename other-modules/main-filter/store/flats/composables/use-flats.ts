import type { QueryParams } from './use-params';
import { useSeqDataFetch } from '@/composables/useSeqDataFetch';
import type { Flat } from '@/types/estate/flat';

export function useFlats(queryParams: ComputedRef<QueryParams>) {
  const { response, next, pagination, loadingNext } = useSeqDataFetch<Flat>('estate/filter/flats', {
    query: queryParams,
  });

  return {
    flats: response.data,
    loading: response.pending,
    loadingNext,
    pagination,
    show: response.execute,
    next
  }
};
