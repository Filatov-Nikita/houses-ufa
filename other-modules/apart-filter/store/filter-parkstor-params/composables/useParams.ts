import { reactive, computed } from 'vue';
import { useComplexOne } from '@/stores/pages/complex-one';
import { useFilterHead } from '../../filter-head';

function useParkStoreParams() {
  const filterParams: FilterParams = reactive(init());
  const complexOne = useComplexOne();
  const filterHead = useFilterHead();

  watch(() => filterHead.currentParkStoreFilter, () => {
    filterParams.storehouse_id = null;
  });

  const housesList = computed(() => complexOne.houses?.data ?? []);
  const levelsList = computed(() => {
    if(filterHead.currentParkStoreFilter === 'parking') {
      return flatArray(housesList.value.map(house => house.parkings));
    }
    else {
      return flatArray(housesList.value.map(house => house.storehouses));
    }
  });

  function flatArray<T>(list: T[][]) {
    return list.reduce((acc, current, i, arr) => {
      current.forEach(item => acc.push(item));
      return acc;
    }, []);
  }

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
    levelsList,
    clearParams
  }
}

function init(): FilterParams {
  return {
    price_min: null,
    price_max: null,
    storehouse_id: null,
    order_by_field: 'price_total',
    order_by_direction: null
  }
}

type NumOrNull = number | null;

type FilledFilter<T> = { [K in keyof T]?: Exclude<T[K], null> };

export type QueryFilter = FilledFilter<FilterParams>;

export interface FilterParams {
  storehouse_id: NumOrNull,
  price_min: NumOrNull,
  price_max: NumOrNull,
  order_by_direction: string | null,
  order_by_field: 'price_total',
};

export { useParkStoreParams };
