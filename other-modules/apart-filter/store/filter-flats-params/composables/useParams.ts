import { reactive, computed } from 'vue';
import { useComplexOne } from '@/stores/pages/complex-one';

function useFlatParams() {
  const filterParams: FilterParams = reactive(init());
  const complexOne =  useComplexOne();

  const housesList = computed(() => complexOne.houses?.data ?? null);
  const currentHouse = computed(() => {
    if(!housesList.value || !filterParams.house_id) return null;
    const house = housesList.value.find((house) => house.id === filterParams.house_id);
    return house ?? null;
  });

  watch(() => filterParams.house_id, () => {
    filterParams.entrance_id = null;
  });

  const entrancesHouseList = computed(() => {
    return currentHouse.value?.entrances ?? null;
  });

  function clearParams(): void {
    Object.assign(filterParams, init());
  }

  function getQueryFilter(filterParams: FilterParams): QueryFilter {
    const params = Object.entries(filterParams).filter(param => param[1] !== null);
    return Object.fromEntries(params);
  }

  const queryFilter = computed<QueryFilter>(() => getQueryFilter(filterParams));

  return {
    filterParams,
    queryFilter,
    housesList,
    entrancesHouseList,
    clearParams
  }
}

function init(): FilterParams {
  return {
    house_id: null,
    entrance_id: null,
    room_factor_studio: 1,
    room_factor_one_classic: null,
    room_factor_two_smart: null,
    room_factor_two_classic: null,
    room_factor_three_smart: null,
    room_factor_three_classic: null,
    area_total_min: null,
    area_total_max: null,
    floor_number_min: null,
    floor_number_max: null,
    is_this_year_completion: null,
    is_in_promotion_only: null,
    price_min: null,
    price_max: null,
    price_type: 'price_total',
    order_by_field: null,
    order_by_direction: null
  }
}

type NumOrNull = number | null;

type FilledFilter<T> = { [K in keyof T]?: Exclude<T[K], null> };

export type QueryFilter = FilledFilter<FilterParams>;

export interface FilterParams {
  house_id: NumOrNull,
  entrance_id: NumOrNull,
  room_factor_studio: NumOrNull,
  room_factor_one_classic: NumOrNull,
  room_factor_two_smart: NumOrNull,
  room_factor_two_classic: NumOrNull,
  room_factor_three_smart: NumOrNull,
  room_factor_three_classic: NumOrNull,
  area_total_min: NumOrNull,
  area_total_max: NumOrNull,
  floor_number_min: NumOrNull,
  floor_number_max: NumOrNull,
  is_this_year_completion: NumOrNull,
  is_in_promotion_only: NumOrNull,
  price_type: 'mortgage_initial_fee' | 'mortgage_monthly_payment' | 'price_total',
  price_min: NumOrNull,
  price_max: NumOrNull,
  order_by_direction: string | null,
  order_by_field: string | null
};

export { useFlatParams };
