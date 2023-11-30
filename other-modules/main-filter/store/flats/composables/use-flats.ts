import type { QueryParams } from './use-params';
import { useSeqDataFetch } from '@/composables/useSeqDataFetch';

export function useFlats(queryParams: ComputedRef<QueryParams>) {
  const { response, next, pagination, loadingNext } = useSeqDataFetch<Flat>('estate/filter/flats', {
    query: queryParams,
  });

  return {
    flats: response.data,
    loading: response.pending,
    loadingNext,
    pagination,
    show: response.execute,
    next
  }
};

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
  finishing_type: {
    title: string,
    value: string
  },
}

export interface House {
  letter: string;
}
