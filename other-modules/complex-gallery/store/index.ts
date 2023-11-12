import type { Image } from '@/types/share';
import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

export const useComplexGallery = defineStore('complexGallery', () => {
  const complexId = ref<number | null>(null);
  const currentType = ref<string | null>(null);

  function setComplexId(id: number) {
    complexId.value = id;
  }

  const url = computed(() => `estate/complexes/${complexId.value}/albums`);

  const { data, pending: loading, execute: show } = useDataFetch<Response>(url, {
    immediate: false,
    watch: false,
  });

  return {
    complexId,
    data,
    currentType,
    show,
    setComplexId,
  }
});

export interface Response {
  data: Album[];
}

export interface Album {
  id:       number;
  label:    string;
  priority: number;
  images:   Image[];
}
