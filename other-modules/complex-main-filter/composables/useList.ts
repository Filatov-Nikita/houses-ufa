import useFilter from './useFilter';
import { useSeqDataFetch } from '@/composables/useSeqDataFetch';
import type { Flat } from '@/types/estate/flat';

export default async function(filter: ReturnType<typeof useFilter>) {
  const params = computed(() => filter.params);
  const route = useRoute();

  const { response, next, pagination, loadingNext, page } = useSeqDataFetch<Flat>('estate/filter/flats', {
    query: params,
  }, route.query.page ? +route.query.page : undefined);

  function syncPage() {
    useRouter().replace({ query: { ...route.query, ...filter.params, page: page.value } });
  }

  onMounted(() => {
    syncPage();
  });

  watch(page, () => {
    syncPage();
  });

  watch(filter.params, () => {
    page.value = 1;
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
