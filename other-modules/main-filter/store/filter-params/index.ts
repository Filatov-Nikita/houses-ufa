import { defineStore } from 'pinia';

type NumOrNull = number | null;
type StrOrNull = string | null;

export interface Params {
  area_min: NumOrNull,
  area_max: NumOrNull,
  object_id: NumOrNull,
  number_of_floors_min: NumOrNull,
  number_of_floors_max: NumOrNull,
  status: StrOrNull,
  is_in_promotion_only: NumOrNull,
  order_by_direction: StrOrNull,
  order_by_field: StrOrNull,
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
      is_in_promotion_only: null,
      order_by_direction: null,
      order_by_field: null
    }
  }

  return {
    params,
    clearParams
  }
});

export { useFilterParams };
