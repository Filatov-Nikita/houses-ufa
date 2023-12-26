import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import type { RoomFactor } from '@/types/estate/flat';

export const useFlatCard = defineStore('flatCard', () => {
  const flatId = ref<number | null>(null);

  const url = computed(() => {
    return `estate/flats/${flatId.value}`;
  });

  const { data, pending: loading, execute: show } = useDataFetch<Response>(url, {
    immediate: false,
    watch: false,
  });

  function setFlatId(id: number) {
    flatId.value = id;
  }

  return {
    data,
    loading,
    flatId,
    show,
    setFlatId,
  }
});

export interface Response {
  data: Flat;
}

export interface Flat {
  id:                       number;
  area_total:               string;
  floor_number:             number;
  mortgage_monthly_payment: string;
  number:                   string;
  number_of_rooms:          number;
  plan_image_url:           string;
  price_per_m2:             string;
  price_total:              string;
  room_factor:              RoomFactor;
  complex:                  Complex;
  entrance:                 Entrance;
  house:                    House;
  is_in_favorite:           boolean;
  flat_on_floor_plan_image_url: string | null;
}

export interface Complex {
  location: string;
  name:     string;
  finishing_type: {
    title: string,
    value: string,
  },
}

export interface Entrance {
  completion_quarter: number;
  completion_year:    string;
  name:               string;
}

export interface House {
  letter: string;
}
