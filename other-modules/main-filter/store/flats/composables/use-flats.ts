import type { Response } from '@/types/response';
import { useDataFetch } from '@/composables/useDataFetch';
import type { QueryParams } from './use-params';

export function useFlats(queryParams: ComputedRef<QueryParams>) {
  const { data: flats, pending: loading, error, execute: show } = useDataFetch<FlatResponse>('estate/filter/flats', {
    query: queryParams,
    immediate: false,
    watch: false
  });


   return {
    flats,
    loading,
    show
   }
};

export type FlatResponse = Response<Flat[]>

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
  house:                    House;
}

export interface Complex {
  is_in_city: boolean;
  location:   string;
  name:       string;
}

export interface House {
  letter: string;
}
