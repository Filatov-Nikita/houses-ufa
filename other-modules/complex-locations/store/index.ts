import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import type { Location } from '@/types/estate/locations';

export const useComplexLocations = defineStore('complexLocations', () => {
  const complexId = ref<number | null>(null);
  const currentType = ref('all');

  function setComplexId(id: number) {
    complexId.value = id;
  }

  const url = computed(() => {
    return `estate/complexes/${complexId.value}/sights`;
  });

  const { data, pending: loading, execute: show } = useDataFetch<Response>(url, {
    immediate: false,
    watch: false,
  });

  const locations = computed(() => data.value?.data ?? []);

  const filtredLocations = computed(() => {
    if(currentType.value === 'all') return locations.value;
    return locations.value.filter(location => location.type.value === currentType.value);
  });

  return {
    data,
    loading,
    currentType,
    locations,
    filtredLocations,
    show,
    setComplexId,
  }
});

export interface Response {
  data: Location[];
}
