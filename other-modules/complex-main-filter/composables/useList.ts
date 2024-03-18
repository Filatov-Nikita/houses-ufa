import useFilter from './useFilter';
import { useSeqDataFetch } from '@/composables/useSeqDataFetch';
import type { Flat } from '@/types/estate/flat';

export default async function(filter: ReturnType<typeof useFilter>) {
  const params = computed(() => filter.params);

  const { response, next, pagination, loadingNext } = useSeqDataFetch<Flat>('estate/filter/flats', {
    query: params,
  });

  await response.execute();

  const showedCount = computed(() => {
    if(!response.data.value) return 0;
    return response.data.value.meta.total;
  });

  return {
    flats: response.data,
    loading: response.pending,
    loadingNext,
    pagination,
    showedCount,
    show: response.execute,
    next,
  }
}
