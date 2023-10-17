import type { QueryParams } from './use-params';
import { useSeqDataFetch } from '@/composables/useSeqDataFetch';

export function useTowns(queryParams: ComputedRef<QueryParams>) {
  const { response, next, pagination, loadingNext } = useSeqDataFetch<TownOne>('estate/filter/estates', {
    query: queryParams,
  });

  return {
    towns: response.data,
    loading: response.pending,
    loadingNext,
    pagination,
    show: response.execute,
    next,
  }
};

export interface TownOne {
  id:               number;
  area_cottage:     string;
  area_land:        string;
  is_in_promotion:  boolean;
  number:           string;
  number_of_floors: number;
  number_of_owners: number;
  status:           string;
  project:          Project;
  town:             Town;
  feed_images:      FeedImage[];
}

export interface FeedImage {
  url: string;
}

export interface Project {
  name: string;
}

export interface Town {
  location: string;
  name:     string;
}
