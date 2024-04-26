import { Stat } from '../types';

export function useStat(type: 'b2t' | 'b2y', query: ComputedRef<{ month: number, year: number }>) {
  const { data: stat, execute: showStat } = useDataFetch<{ data: Stat }>(`${type}/profile/month-statistics`, {
    baseURL: useRuntimeConfig().public.rootApi,
    query,
    immediate: false,
  });

  return {
    stat,
    showStat,
  }
}
