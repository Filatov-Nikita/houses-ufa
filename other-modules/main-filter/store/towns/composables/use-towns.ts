import type { Response } from '@/types/response';
import { useDataFetch } from '@/composables/useDataFetch';
import type { QueryParams } from './use-params';

export function useTowns(queryParams: ComputedRef<QueryParams>) {
  const { data: towns, pending: loading, error, execute: show } = useDataFetch<TownResponse>('estate/filter/estates', {
    query: queryParams,
    immediate: false,
    watch: false,
  });


   return {
    towns,
    loading,
    show
   }
};

export type TownResponse = Response<Town[]>;

export interface Town {
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
