import { notNullable } from '../../helpers';
import { type Params } from '../../filter-params';
import { initValues } from '../../helpers';
import { useRoute } from 'vue-router';

type NumOrNull = number | null;
type StrOrNull = string | null;

interface TownParams {
  area_land_min: NumOrNull,
  area_land_max: NumOrNull,
}

export type QueryParams = Partial<{
  area_cottage_min: NumOrNull,
  area_cottage_max: NumOrNull,
  number_of_floors_min: NumOrNull,
  number_of_floors_max: NumOrNull,
  status: StrOrNull,
  is_in_promotion_only: NumOrNull,
  town_id: NumOrNull,
  order_by_direction: StrOrNull,
  order_by_field: StrOrNull,
} & TownParams>;

export function useParams(globalParams: Params) {
  const route = useRoute();

  const params: TownParams = reactive(init());

  function init() {
    return initValues(initParams(), {
      area_land_min: (val) => +val,
      area_land_max: (val) => +val,
    }, route.query);
  }

  function clearParams(): void {
    Object.assign(params, initParams());
  }

  const queryParams = computed<QueryParams>(() => {
    const newParams = {
      area_land_min: params.area_land_min ? params.area_land_min * 100 : null,
      area_land_max: params.area_land_max ? params.area_land_max * 100 : null,
    };

    return notNullable(Object.assign({
      area_cottage_min: globalParams.area_min,
      area_cottage_max: globalParams.area_max,
      number_of_floors_min: globalParams.number_of_floors_min,
      number_of_floors_max: globalParams.number_of_floors_max,
      status: globalParams.status,
      is_in_promotion_only: globalParams.is_in_promotion_only,
      town_id: globalParams.object_id,
      order_by_direction: globalParams.order_by_direction,
      order_by_field: globalParams.order_by_field,
    }, newParams));
  });

  function initParams(): TownParams {
    return {
      area_land_min: null,
      area_land_max: null,
    }
  }

  return {
    params,
    queryParams,
    init,
    clearParams
  }
}
