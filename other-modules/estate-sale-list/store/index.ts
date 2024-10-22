import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import type { Flat } from '@/types/estate/flat';
import type { Town } from '@/types/estate/town';
import type { Response } from '@/types/response';

export const useEstateSaleList = defineStore('estateSaleList', () => {
  const filterType = ref<'flats' | 'towns'>('flats');

  const params = { is_in_promotion_only: 1 };
  const flatParams: FlatParams = reactive({
    room_factor_studio: null,
    room_factor_one_classic: null,
    room_factor_two_smart: null,
    room_factor_two_classic: null,
    room_factor_three_smart: null,
    room_factor_three_classic: null
  });

  const townParams: TownParams = reactive({
    area_cottage_min: null,
    area_cottage_max: null,
  });

  const query = computed(() => {
    if(filterType.value === 'flats') {
      return notNullable(Object.assign({}, params, flatParams));
    } else {
      return notNullable(Object.assign({}, params, townParams));
    }
  });

  function notNullable<T extends Record<string, any>>(record: T): Partial<T> {
    return Object.fromEntries(Object.entries(record).filter(entry => entry[1] !== null)) as Partial<T>;
  }

  const townReq = useDataFetch<Response<Town[]>>('estate/filter/estates', {
    query,
    immediate: false,
    watch: false,
  });

  const flatReq = useDataFetch<Response<Flat[]>>('estate/filter/flats', {
    query,
    immediate: false,
    watch: false,
  });

  const flats = computed(() => flatReq.data.value?.data ?? []);
  const towns = computed(() => townReq.data.value?.data ?? []);

  const currentFilter = computed(() => {
    switch(filterType.value) {
      case 'flats': return flatReq;
      case 'towns': return townReq;
    }
  });

  async function show() {
    await currentFilter.value.execute();
  }

  watch(query, () => {
    show();
  });

  return {
    flats,
    towns,
    filterType,
    flatParams,
    townParams,
    currentFilter,
    show,
  }
});

interface FlatParams {
  room_factor_studio: number| null,
  room_factor_one_classic: number| null,
  room_factor_two_smart: number| null,
  room_factor_two_classic: number| null,
  room_factor_three_smart: number| null,
  room_factor_three_classic: number| null
}

interface TownParams {
  area_cottage_min?: number | null,
  area_cottage_max?: number | null,
}
