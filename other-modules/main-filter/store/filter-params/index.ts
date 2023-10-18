import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';
import { initValues } from '../helpers';

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
  const route = useRoute();

  const values = initValues(initParams(), {
    area_min: (val) => +val,
    area_max: (val) => +val,
    object_id: (val) => +val,
    number_of_floors_min: (val) => +val,
    number_of_floors_max: (val) => +val,
    is_in_promotion_only: (val) => +val
  }, route.query);

  const params: Params = reactive(values);

  function clearParams() {
    Object.assign(params, initParams());
  }

  function initParams(): Params {
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
    };
  }

  return {
    params,
    clearParams
  }
});

export { useFilterParams };
