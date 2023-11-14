import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import type { Location } from '@/types/estate/locations';

export const useTownLocations = defineStore('townLocations', () => {
  const townId = ref<number | null>(null);
  const currentType = ref('all');

  function setTownId(id: number) {
    townId.value = id;
  }

  const url = computed(() => {
    return `estate/towns/${townId.value}/sights`;
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
    setTownId,
  }
});

export interface Response {
  data: Location[];
}
