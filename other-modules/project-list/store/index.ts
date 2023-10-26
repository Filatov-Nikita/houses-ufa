import { useSeqDataFetch } from '@/composables/useSeqDataFetch';
import { defineStore } from 'pinia';
import type { Project } from '@/types/estate/project';

export const useProjectList = defineStore('projectList', () => {
  const type = ref<Types>('all');

  const query = computed(() => {
    const params: any = {};
    if(type.value !== 'all') params.type = type.value;
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
    next,
    show: response.execute,
  }
});

export type Types = 'all' | 'cottage' | 'townhouse';
