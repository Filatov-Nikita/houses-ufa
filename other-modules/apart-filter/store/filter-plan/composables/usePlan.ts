import { useComplexOne } from '@/stores/pages/complex-one';
import { useDataFetch } from '@/composables/useDataFetch';
import { QueryFilter } from '../../filter-flats-params/composables/useParams';
import { ComputedRef } from 'vue';

function usePlan(queryFilter: ComputedRef<QueryFilter>) {
  const complexOne = useComplexOne();

  const getAllUrl = computed(() => `estate/complexes/${complexOne.complexId}/flats-grid`);

  const { data: grid, pending: loadingGrid, error, execute: showGrid } = useDataFetch<GridResponse>(getAllUrl, {
    query: queryFilter,
    immediate: false,
  });

  return {
    grid,
    loadingGrid,
    showGrid,
  }
}

export { usePlan };

export interface GridResponse {
  data: GridItem[];
}

export interface GridItem {
  id:                 number;
  completion_quarter: number;
  completion_year:    string;
  name:               string;
  top_floor_number:   number;
  complex:            Complex;
  house:              House;
  floors:             Floor[];
}

export interface Complex {
  id:   number;
  name: string;
}

export interface Floor {
  number: number;
  flats:  Flat[];
}

type Status = 'booked' | 'for_sale' | 'sold' | 'unknown';

export interface Flat {
  id:                       number;
  area_total:               string;
  floor_number:             number;
  is_actual:                boolean | null;
  is_in_promotion:          boolean;
  layout:                   string;
  mortgage_initial_fee:     string;
  mortgage_monthly_payment: string;
  number_of_rooms:          number;
  plan_image_url:           string;
  price_total:              string;
  status:                   Status;
}

export interface House {
  id:     number;
  letter: string;
}
