import { notNullable } from '../../helpers';
import { type Params } from '../../filter-params';

type NumOrNull = number | null;

interface FlatParams {
  is_in_city: NumOrNull,
  number_of_rooms_one: NumOrNull,
  number_of_rooms_studio: NumOrNull,
  number_of_rooms_two: NumOrNull,
  price_max: NumOrNull,
  price_min: NumOrNull,
  price_type: string | null
}

export type QueryParams = Partial<{
  area_total_min: NumOrNull;
  area_total_max: NumOrNull;
  number_of_floors_min: NumOrNull;
  number_of_floors_max: NumOrNull;
  status: string | null;
  complex_id: NumOrNull;
  is_in_promotion_only: NumOrNull;
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
    }, params));
  });

  function initParams() {
    return {
      is_in_city: null,
      number_of_rooms_one: 1,
      number_of_rooms_studio: null,
      number_of_rooms_two: null,
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
