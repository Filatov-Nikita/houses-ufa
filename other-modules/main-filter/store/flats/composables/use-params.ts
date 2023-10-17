import { notNullable } from '../../helpers';
import { type Params } from '../../filter-params';

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
  price_type: StrOrNull
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
  const params: FlatParams = reactive(initParams());

  function clearParams(): void {
    Object.assign(params, initParams());
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

  function initParams() {
    return {
      is_in_city: null,
      room_factor_studio: 1,
      room_factor_one_classic: null,
      room_factor_two_smart: null,
      room_factor_two_classic: null,
      room_factor_three_smart: null,
      room_factor_three_classic: null,
      price_max: null,
      price_min: null,
      price_type: null
    }
  }

  return {
    params,
    queryParams,
    clearParams
  }
}
