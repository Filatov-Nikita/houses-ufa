import { defineStore } from 'pinia';

type NumOrNull = number | null;

export interface Params {
  area_min: NumOrNull,
  area_max: NumOrNull,
  object_id: NumOrNull,
  number_of_floors_min: NumOrNull,
  number_of_floors_max: NumOrNull,
  status: string | null,
  is_in_promotion_only: NumOrNull
};

const useFilterParams = defineStore('filterParams', () => {
  const params: Params = reactive(initParams());

  function clearParams() {
    Object.assign(params, initParams());
  }

  function initParams() {
    return {
      area_min: null,
      area_max: null,
      object_id: null,
      number_of_floors_min: null,
      number_of_floors_max: null,
      status: null,
      is_in_promotion_only: null
    }
  }

  return {
    params,
    clearParams
  }
});

export { useFilterParams };
