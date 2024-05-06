import type { Project } from '@/types/estate/project';

export function useLandProjects(townId: Ref<number>) {
  const url = computed(() => `/estate/estates/${townId.value}/estate-layouts`);

  const { response, next, pagination, loadingNext } = useSeqDataFetch<Project>(url);

  return {
    response,
    pagination,
    loadingNext,
    next,
  }
}
