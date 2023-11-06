import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

export const useTownCard = defineStore('townCard', () => {
  const townId = ref<number | null>(null);

  const url = computed(() => {
    return `estate/estates/${townId.value}`;
  });

  const { data, pending: loading, execute: show } = useDataFetch<Response>(url, {
    immediate: false,
    watch: false,
  });

  function setTownId(id: number) {
    townId.value = id;
  }

  const planImages = computed(() => {
    return data.value?.data.layout.images.filter(img => img.is_plan) ?? []
  });

  const renderImages = computed(() => {
    return data.value?.data.layout.images.filter(img => !img.is_plan) ?? []
  });

  return {
    data,
    loading,
    townId,
    planImages,
    renderImages,
    show,
    setTownId,
  }
});

export interface Response {
  data: Data;
}

export interface Data {
  id:        number;
  area_land: string;
  number:    string;
  status:    string;
  layout:    Layout;
  town:      Town;
}

export interface Layout {
  area_cottage:     string;
  name:             string;
  name_alias:       string;
  number_of_floors: number;
  number_of_owners: number;
  type:             Type;
  images:           any[];
}

export interface Type {
  title: string;
  value: string;
}

export interface Town {
  location: string;
  name:     string;
}
