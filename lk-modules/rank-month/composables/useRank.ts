import { Rank } from '../types/index';

export function useRank(type: 'b2y' | 'b2t') {
  const { data: rank, execute: showRank } = useDataFetch<{ data: Rank }>(`${type}/profile/month-rank`, {
    baseURL: useRuntimeConfig().public.rootApi,
    immediate: false,
  });


  return {
    rank,
    showRank,
  }
}
