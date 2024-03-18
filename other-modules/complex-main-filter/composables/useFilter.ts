export interface Params {
  complex_id?: number,
  area_total_min?: number,
  area_total_max?: number,
  is_in_promotion_only?: number,
  price_min?: number,
  price_max?: number,
  price_type?: 'mortgage_initial_fee' | 'mortgage_monthly_payment' | 'price_total',
  order_by_field?: 'price_total' | 'area_total',
  order_by_direction?: 'asc' | 'desc',
  room_factor_one_classic?: number,
  room_factor_studio?: number,
  room_factor_three_classic?: number,
  room_factor_three_smart?: number,
  room_factor_two_classic?: number,
  room_factor_two_smart?: number,
}

export default function(initParams?: Partial<Params>) {
  const route = useRoute();
  const router = useRouter();
  const params = reactive(init());

  function init(): Params {
    return {
      complex_id: undefined,
      order_by_field: undefined,
      order_by_direction: undefined,
      room_factor_one_classic: undefined,
      room_factor_studio: undefined,
      room_factor_three_classic: undefined,
      room_factor_three_smart: undefined,
      room_factor_two_classic: undefined,
      room_factor_two_smart: undefined,
      price_type: undefined,
      price_min: undefined,
      price_max: undefined,
      area_total_min: undefined,
      area_total_max: undefined,
      is_in_promotion_only: undefined,
    };
  }

  const casts = {
    complex_id: Number,
    price_min: Number,
    price_max: Number,
    area_total_min: Number,
    area_total_max: Number,
    is_in_promotion_only: Number,
    room_factor_one_classic: Number,
    room_factor_studio: Number,
    room_factor_three_classic: Number,
    room_factor_three_smart: Number,
    room_factor_two_classic: Number,
    room_factor_two_smart: Number,
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
