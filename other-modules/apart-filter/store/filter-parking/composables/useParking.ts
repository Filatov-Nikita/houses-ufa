import { useComplexOne } from '@/stores/pages/complex-one';
import { useFilterHead } from '../../filter-head';
import { useDataFetch } from '@/composables/useDataFetch';
import type { QueryFilter } from '../../filter-parkstor-params/composables/useParams';
import { ComputedRef } from 'vue';

function useParking(queryFilter: ComputedRef<QueryFilter>) {
  const complexOne = useComplexOne();
  const filterHead = useFilterHead();

  const getAllUrl = computed(() => `estate/complexes/${complexOne.complexId}/parking-lots`);

  const { data: parkings, pending: loadingParkings, error, execute: showParkings } = useDataFetch<ParkingResponse>(getAllUrl, {
    query: queryFilter,
    immediate: false,
    watch: false,
  });

  watch([queryFilter, getAllUrl], () => {
    if(filterHead.currentParkStoreFilter === 'parking') {
      showParkings();
    }
  });

  return {
    parkings,
    loadingParkings,
    showParkings,
  }
}

export interface ParkingResponse {
  data:  OneParking[];
  links: Links;
  meta:  Meta;
}

export interface OneParking {
  id:             number;
  area_total:     string;
  number:         string;
  plan_image_url: string;
  price_total:    string;
  status:         string;
  parking:        Parking;
}

export interface Parking {
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

export { useParking };
