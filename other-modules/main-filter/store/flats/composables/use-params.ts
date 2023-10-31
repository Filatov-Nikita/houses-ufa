import { notNullable } from '../../helpers';
import { type Params } from '../../filter-params';
import { useRoute } from 'vue-router';
import { initValues } from '../../helpers';

type NumOrNull = number | null;
type StrOrNull = string | null;

interface FlatParams {
  is_in_city: NumOrNull,
  room_factor_studio: NumOrNull,
  room_factor_one_classic: NumOrNull,
  room_factor_two_smart: NumOrNull,
  room_factor_two_classic: NumOrNull,
  room_factor_three_smart: NumOrNull,
  room_factor_three_classic: NumOrNull,
  price_max: NumOrNull,
  price_min: NumOrNull,
  price_type: 'mortgage_initial_fee' | 'mortgage_monthly_payment' | 'price_total';
}

export type QueryParams = Partial<{
  area_total_min: NumOrNull;
  area_total_max: NumOrNull;
  number_of_floors_min: NumOrNull;
  number_of_floors_max: NumOrNull;
  status: string | null;
  complex_id: NumOrNull;
  is_in_promotion_only: NumOrNull;
  order_by_direction: StrOrNull,
  order_by_field: StrOrNull,
} & FlatParams>;

export function useParams(globalParams: Params) {
  const route = useRoute();

  function init() {
    const values = initValues(initParams(), {
      is_in_city: (val) => +val,
      room_factor_studio: (val) => +val,
      room_factor_one_classic: (val) => +val,
      room_factor_two_smart: (val) => +val,
      room_factor_two_classic: (val) => +val,
      room_factor_three_smart: (val) => +val,
      room_factor_three_classic: (val) => +val,
      price_max: (val) => +val,
      price_min: (val) => +val,
    }, route.query);

    roomsInit(values);

    return values;
  }

  const params: FlatParams = reactive(init());

  function clearParams(): void {
    Object.assign(params, initParams());
    roomsInit(params);
  }

  function roomsInit(params: FlatParams): void {
    const isTrue = [
      params.room_factor_studio,
      params.room_factor_one_classic,
      params.room_factor_two_smart,
      params.room_factor_two_classic,
      params.room_factor_three_smart,
      params.room_factor_three_classic,
    ].every(val => val === null);

    if(isTrue) {
      params.room_factor_studio = 1;
    }
  }

  const queryParams = computed<QueryParams>(() => {
    return notNullable(Object.assign({
      area_total_min: globalParams.area_min,
      area_total_max: globalParams.area_max,
      number_of_floors_min: globalParams.number_of_floors_min,
      number_of_floors_max: globalParams.number_of_floors_max,
      status: globalParams.status,
      complex_id: globalParams.object_id,
      is_in_promotion_only: globalParams.is_in_promotion_only,
      order_by_direction: globalParams.order_by_direction,
      order_by_field: globalParams.order_by_field,
    }, params));
  });

  function initParams(): FlatParams {
    return {
      is_in_city: null,
      room_factor_studio: null,
      room_factor_one_classic: null,
      room_factor_two_smart: null,
      room_factor_two_classic: null,
      room_factor_three_smart: null,
      room_factor_three_classic: null,
      price_max: null,
      price_min: null,
      price_type: 'price_total' as const
    }
  }

  return {
    params,
    queryParams,
    init,
    clearParams
  }
}
