import { useSeqDataFetch } from '@/composables/useSeqDataFetch';
import { defineStore } from 'pinia';
import type { Project } from '@/types/estate/project';

export const useProjectList = defineStore('projectList', () => {
  const type = ref<Types>('all');
  const executeId = ref<number | undefined>();
  const townId = ref<number | undefined>();

  const query = computed(() => {
    const params: any = { per_page: 4 };
    if(type.value !== 'all') params.type = type.value;
    if(executeId.value !== undefined) params.exclude_id = executeId.value;
    if(townId.value !== undefined) params.town_id = townId.value;
    return params;
  });

  const { response, next, pagination, loadingNext } = useSeqDataFetch<Project>('estate/estate-layouts', {
    query,
  });

  watch(type, () => {
    response.execute();
  });

  return {
    projects: response.data,
    loading: response.pending,
    loadingNext,
    pagination,
    type,
    executeId,
    townId,
    next,
    show: response.execute,
  }
});

export type Types = 'all' | 'cottage' | 'townhouse';
