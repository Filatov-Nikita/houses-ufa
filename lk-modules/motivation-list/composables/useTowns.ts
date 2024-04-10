import type { TownsResponse } from '@/stores/towns';

export default async function useComplexes() {
  const { data } = await useDataFetch<TownsResponse>('estate/towns');

  const items = computed(() => {
    return data.value?.data ?? [];
  });

  const first = computed(() => {
    return items.value.length > 0 ? items.value[0] : null;
  });

  return {
    items,
    first,
  }
}
