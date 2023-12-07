import { ComputedRef } from 'vue';
import { useDataFetch } from '@/composables/useDataFetch';
import type { QueryFilter } from '../../filter-flats-params/composables/useParams';
import { usePagination } from '../../composables/usePagination';
import { useComplexOne } from '@/stores/pages/complex-one';
import { useFilterHead } from '../../filter-head';
import type { RoomFactor } from '@/types/estate/flat';

function useFlatsList(queryFilter: ComputedRef<QueryFilter>) {
  const complexOne = useComplexOne();
  const filterHead = useFilterHead();

  const page = ref(1);

  const query = computed(() => {
    return Object.assign({ page: page.value }, queryFilter.value);
  });

  const getAllUrl = computed(() => `estate/complexes/${complexOne.complexId}/flats-index`);

  const { data: flats, pending: loadingFlats, error, execute: all } = useDataFetch<FlatsResponse>(getAllUrl, {
    query,
    immediate: false,
    watch: false
  });

  const meta = computed(() => flats.value?.meta ?? null);

  const pagination = usePagination(meta, page);

  watch(queryFilter, () => {
    pagination.setPage(1);
  });

  watch([ page, queryFilter, getAllUrl ], () => {
    if(filterHead.currentFlatFilter === 'list') {
      all();
    }
  });

  return {
    page,
    flats,
    loadingFlats,
    pagination,
    all,
  }
}

export { useFlatsList };

export interface FlatsResponse {
  data:  Flat[];
  links: Links;
  meta:  Meta;
}

export interface Flat {
  id:                       number;
  area_total:               string;
  floor_number:             number;
  is_in_promotion:          boolean;
  layout:                   string;
  mortgage_initial_fee:     string;
  mortgage_monthly_payment: string;
  number_of_rooms:          number;
  plan_image_url:           string;
  price_total:              string;
  status:                   string;
  complex:                  Complex;
  entrance:                 Entrance;
  house:                    House;
  room_factor:              RoomFactor;
}

export interface Complex {
  name: string;
}

export interface Entrance {
  completion_quarter: number;
  completion_year:    string;
  name:               string;
  top_floor_number:   number;
}

export interface House {
  letter: string;
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
