import { defineStore } from 'pinia';

interface Params {
  filterType: 'flats' | 'out-city-flats' | 'towns',
  status: 'for_sale' | 'booked' | 'sold' | null,
  price_type: 'price',
  price_min: number | null,
  area_min: number | null,
  area_max: number | null,
  area_land_min: number | null,
  area_land_max: number | null,
  is_in_promotion_only: number | null,
  room_factor_studio: number | null,
  number_of_floors_min: number | null,
  number_of_floors_max: number | null,
  room_factor_one_classic: number | null,
  room_factor_two_smart: number | null,
  room_factor_two_classic: number | null,
  room_factor_three_smart: number | null,
  room_factor_three_classic: number | null,
}

export const useEstateMiniFilter = defineStore('estateMiniFilter', () => {
  const params = reactive(initParams());
  const showedModal = ref(false);

  function initParams(): Params {
    return {
      filterType: 'flats',
      status: null,
      price_type: 'price',
      price_min: null,
      area_min: null,
      area_max: null,
      area_land_min: null,
      area_land_max: null,
      is_in_promotion_only: 0,
      room_factor_studio: 1,
      number_of_floors_min: null,
      number_of_floors_max: null,
      room_factor_one_classic: null,
      room_factor_two_smart: null,
      room_factor_two_classic: null,
      room_factor_three_smart: null,
      room_factor_three_classic: null,
    }
  };

  const query = computed(() => {
    return Object.fromEntries(Object.entries(params).filter(entry => entry[1] !== null));
  });

  function clear() {
    Object.assign(params, initParams());
  }

  return {
    params,
    query,
    showedModal,
    clear,
  }
});
