import { notNullable } from '../../helpers';
import { type Params } from '../../filter-params';

type NumOrNull = number | null;

interface TownParams {
  area_land_min: NumOrNull,
  area_land_max: NumOrNull,
}

export type QueryParams = Partial<{
  area_cottage_min: NumOrNull,
  area_cottage_max: NumOrNull,
  number_of_floors_min: NumOrNull,
  number_of_floors_max: NumOrNull,
  status: string | null,
  is_in_promotion_only: NumOrNull,
  town_id: NumOrNull,
} & TownParams>;

export function useParams(globalParams: Params) {
  const params: TownParams = reactive(initParams());

  function clearParams(): void {
    Object.assign(params, initParams());
  }

  const queryParams = computed<QueryParams>(() => {
    return notNullable(Object.assign({
      area_cottage_min: globalParams.area_min,
      area_cottage_max: globalParams.area_max,
      number_of_floors_min: globalParams.number_of_floors_min,
      number_of_floors_max: globalParams.number_of_floors_max,
      status: globalParams.status,
      is_in_promotion_only: globalParams.is_in_promotion_only,
      town_id: globalParams.object_id,
    }, params));
  });

  function initParams() {
    return {
      area_land_min: null,
      area_land_max: null,
    }
  }

  return {
    params,
    queryParams,
    clearParams
  }
}
