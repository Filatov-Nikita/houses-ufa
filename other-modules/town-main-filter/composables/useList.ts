import useFilter from './useFilter';
import { useSeqDataFetch } from '@/composables/useSeqDataFetch';
import type { Town } from '@/types/estate/town';

export default async function(filter: ReturnType<typeof useFilter>) {
  const params = computed(() => filter.params);

  const { response, next, pagination, loadingNext } = useSeqDataFetch<Town>('estate/filter/estates', {
    query: params,
  });

  await response.execute();

  const showedCount = computed(() => {
    if(!response.data.value) return 0;
    return response.data.value.meta.total;
  });

  return {
    towns: response.data,
    loading: response.pending,
    loadingNext,
    pagination,
    showedCount,
    show: response.execute,
    next,
  }
}
