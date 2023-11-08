import { defineStore } from 'pinia'
import { useDataFetch } from '@/composables/useDataFetch';

export const useComplexFlatGroups = defineStore('complexFlatGroups', () => {

  const complexId = ref<number | null>(null);
  const currentType = ref('all');

  function setComplexId(id: number) {
    complexId.value = id;
  }

  const url = computed(() => `estate/complexes/${complexId.value}/flats-by-room-factor`);

  const { data, pending: loading, execute: show } = useDataFetch<Response>(url, {
    immediate: false,
    watch: false,
  });

  const typesList = computed(() => {
    const list = data.value?.data ?? [];
    const values: Record<string, number> = {};
    list.forEach(el => {
      values[el.room_factor] = 1;
    });
    return Object.keys(values);
  });

  const filtredList = computed(() => {
    const list = data.value?.data ?? [];
    if(currentType.value === 'all') return list;
    return list.filter(el => el.room_factor === currentType.value);
  });

  const flatList = computed(() => {
    const items: Flat[] = [];
    filtredList.value.forEach((group) => {
      items.push(...group.flats);
    });
    return items;
  });

  return {
    data,
    loading,
    typesList,
    currentType,
    filtredList,
    flatList,
    show,
    setComplexId,
  }
});

export interface Response {
  data: OneGroup[];
}

export interface OneGroup {
  room_factor: string;
  flats:       Flat[];
}

export interface Flat {
  area_total:      string;
  count:           number;
  plan_image_url:  string;
  price_total_min: string;
  room_factor:     string;
}
