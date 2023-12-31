import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import type { Image } from '@/types/share';

const useComplexesStore = defineStore('complexesStore', () => {
  const { data: complexes, pending: loading, error, execute: show } = useDataFetch<ComplexesResponse>('estate/complexes', {
    immediate: false,
    watch: false,
  });

  const outCityComplexes = computed(() => {
    return complexes.value?.data.filter(complex => complex.is_in_city === false) ?? [];
  });

  const inCityComplexes = computed(() => {
    return complexes.value?.data.filter(complex => complex.is_in_city === true) ?? [];
  });

  return {
    complexes,
    loading,
    outCityComplexes,
    inCityComplexes,
    show
  }
});

export interface ComplexesResponse {
  data: ComplexItem[]
}

export interface ComplexItem {
  id: number,
  is_in_city: boolean,
  name: string,
  latitude: string,
  longitude: string,
  location: string,
  sight_picture: Image | null,
}

export { useComplexesStore };
