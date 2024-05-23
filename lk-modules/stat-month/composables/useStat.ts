import { Stat } from '../types';

export function useStat(type: 'b2t' | 'b2y', query: Ref<{ month: number, year: number }>, key: string = 'show_stat') {
  const { data: stat, execute: showStat } = useDataFetch<{ data: Stat }>(`${type}/profile/month-statistics`, {
    key,
    baseURL: useRuntimeConfig().public.rootApi,
    query,
    immediate: false,
  });

  return {
    stat,
    showStat,
  }
}
