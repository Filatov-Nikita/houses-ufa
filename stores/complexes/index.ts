import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

const useComplexesStore = defineStore('complexesStore', () => {
  const { data: complexes, pending: loading, error, execute: show } = useDataFetch<ComplexesResponse>('estate/complexes', {
    immediate: false,
    watch: false,
  });

  return {
    complexes,
    loading,
    show
  }
});

export interface ComplexesResponse {
  data: ComplexItem[]
}

export interface ComplexItem {
  id: number,
  name: string,
}

export { useComplexesStore };
