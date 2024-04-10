import type { ComplexesResponse } from '@/stores/complexes';

export default async function useComplexes() {
  const { data } = await useDataFetch<ComplexesResponse>('estate/complexes');

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
