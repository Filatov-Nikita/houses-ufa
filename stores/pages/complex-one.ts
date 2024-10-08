import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import type { Image } from '@/types/share';
import { useSlugsStore } from '@/stores/slugs';

const useComplexOne = defineStore('complexOne', () => {
  const slugsStore = useSlugsStore();

  const complexId = ref<number | null>(null);

  const showOneUrl = computed(() => `/estate/complexes/${complexId.value}`);
  const showHousesUrl = computed(() => `/estate/complexes/${complexId.value}/houses`);

  const { data: complex, pending: loadingComplex, execute: showOne } = useDataFetch<ComplexResponse>(showOneUrl, {
    immediate: false,
    watch: false,
  });

  const { data: houses, pending: loadingHouses, execute: showHouses } = useDataFetch<HousesResponse>(showHousesUrl, {
    immediate: false,
    watch: false,
    query: {
      with_entrances: 1,
      with_parkings: 1,
      with_storehouses: 1,
    },
  });

  function setComplexId(slug: string | null) {
    if(slug === null) {
      complexId.value = null;
    } else {
      const id = slugsStore.complexSlugIds[slug];
      complexId.value = id ? parseInt(id) : parseInt(slug);
    }
  }

  return {
    complexId,
    houses,
    complex,
    loadingHouses,
    loadingComplex,
    showOne,
    showHouses,
    setComplexId
  }
});

export interface HousesResponse {
  data: House[];
}

export interface House {
  id:          number;
  letter:      string;
  name:        string;
  entrances:   Entrance[];
  parkings:    Parking[];
  storehouses: Storehouse[];
}

export interface Entrance {
  id:   number;
  name: string;
}

export interface Parking {
  id:   number;
  name: string;
}

export interface Storehouse {
  id:   number;
  name: string;
}

export interface ComplexResponse {
  data: ComplexOne;
}

export interface ComplexOne {
  id:              number;
  has_filled_facade: boolean;
  has_parkings:    boolean;
  has_storehouses: boolean;
  location:        string;
  marketing_tag:   null;
  name:            string;
  about:           About;
  seo:             SEO;
  images:          Image[];
  latitude:        string,
  longitude:       string,
  sight_picture:   Image | null,
}

export interface About {
  id:              number;
  description:     string;
  feature_1_title: string;
  feature_1_value: string;
  feature_2_title: string;
  feature_2_value: string;
  feature_3_title: string;
  feature_3_value: string;
}

export interface SEO {
  id:               number;
  meta_description: null;
  meta_keywords:    null;
  meta_title:       null;
  text_description: string;
  text_title:       string;
}

export { useComplexOne };
