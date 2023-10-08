import { useComplexOne } from '@/stores/pages/complex-one';
import { useFilterHead } from '../../filter-head';
import { useDataFetch } from '@/composables/useDataFetch';
import type { QueryFilter } from '../../filter-flats-params/composables/useParams';
import { ComputedRef } from 'vue';

function useStorehouse(queryFilter: ComputedRef<QueryFilter>) {
  const complexOne = useComplexOne();
  const filterHead = useFilterHead();

  const getAllUrl = computed(() => `estate/complexes/${complexOne.complexId}/pantries`);

  const { data: storeshouses, pending: loadingStores, error, execute: showStores } = useDataFetch<StorehouseResponse>(getAllUrl, {
    query: queryFilter,
    immediate: false,
    watch: false,
  });

  watch([queryFilter, getAllUrl], () => {
    if(filterHead.currentParkStoreFilter === 'stores') {
      showStores();
    }
  });

  return {
    storeshouses,
    loadingStores,
    showStores,
  }
}

export { useStorehouse };

export interface StorehouseResponse {
  data:  OneStore[];
  links: Links;
  meta:  Meta;
}

export interface OneStore {
  id:             number;
  area_total:     string;
  number:         string;
  plan_image_url: string;
  price_total:    string;
  status:         string;
  storehouse:     Storehouse;
}

export interface Storehouse {
  name: string;
}

export interface Links {
  first: string;
  last:  string;
  prev:  null;
  next:  string;
}

export interface Meta {
  current_page: number;
  from:         number;
  last_page:    number;
  links:        Link[];
  path:         string;
  per_page:     number;
  to:           number;
  total:        number;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}
