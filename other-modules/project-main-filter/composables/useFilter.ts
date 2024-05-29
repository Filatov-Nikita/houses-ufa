export interface Params {
  layout_type?: 'cottage' | 'townhouse',
  number_of_floors_min?: number,
  number_of_floors_max?: number,
  town_id?: number,
  area_calc_min?: number,
  area_calc_max?: number,
  order_by_field?: 'area_calc',
  order_by_direction?: 'asc' | 'desc',
}

export default function(initParams?: Partial<Params>) {
  const route = useRoute();
  const router = useRouter();
  const params = reactive(init());

  function init(): Params {
    return {
      layout_type: undefined,
      number_of_floors_min: undefined,
      number_of_floors_max: undefined,
      town_id: undefined,
      area_calc_min: undefined,
      area_calc_max: undefined,
      order_by_field: undefined,
      order_by_direction: undefined,
    };
  }

  const casts = {
    number_of_floors_min: Number,
    number_of_floors_max: Number,
    area_calc_min: Number,
    area_calc_max: Number,
    town_id: Number,
  }

  function clear() {
    let key: keyof Params;
    for(key in params) {
      params[key] = undefined;
    }
  }

  const queryStr = computed(() => JSON.stringify(route.query));

  function syncParams(params: Record<string, any>, casts: Record<string, (v: any) => any>, initParams: Record<string, any> = {}): void {
    let key: any;
    for(key in params) {
      const queryValue = route.query[key] ?? initParams[key];
      const castedValue = (casts[key] && queryValue) ? casts[key](queryValue) : queryValue;
      params[key] = castedValue;
    }
  }

  function syncQuery(params: Record<string, any>, query: Record<string, any>) {
    router.push({ query: Object.assign({}, query, params) });
  }

  watch(queryStr, () => {
    syncParams(params, casts);
  });

  watch(params, () => {
    syncQuery(params, route.query);
  }, { deep: true });

  (function start() {
    syncParams(params, casts, initParams);
  })();

  onMounted(() => {
    syncQuery(params, route.query);
  });

  return {
    params,
    clear,
  }
}
