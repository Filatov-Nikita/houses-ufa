import type { MotivationLevel } from '../types';

export default async function useList(type: 'b2t' | 'b2y', current: Ref<string>) {
  const query = computed(() => {
    const [ type, value ] = current.value.split('.');
    const obj = type === 'complex'
      ? { residential_complex_id: value }
      : type === 'town'
      ? { town_id: value }
      : {};
    return obj;
  });

  const { data } = await useDataFetch<{ data: MotivationLevel[] }>(`${type}/motivation-tiers`, {
    baseURL: useRuntimeConfig().public.rootApi,
    query,
  });

  const items = computed(() => {
    return data.value?.data ?? [];
  });

  return {
    items,
  }
}
