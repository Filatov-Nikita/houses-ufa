import type { Image } from '@/types/share';
import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

export const useComplexProgress = defineStore('complexProgress', () => {
  const filterType = ref<'album' | 'camera'>('camera');
  const complexId = ref<number | null>(null);

  function setComplexId(id: number) {
    complexId.value = id;
  }

  const cameraUrl = computed(() => `estate/complexes/${complexId.value}/overwatches`);

  const {
    data: cameraData,
    pending: loadingCamera,
    execute: showCamera
  } = useDataFetch<CameraResponse>(cameraUrl, {
    immediate: false,
    watch: false,
  });

  return {
    filterType,
    cameraData,
    loadingCamera,
    showCamera,
    setComplexId,
  }
});

export interface CameraResponse {
  data: OneCamera[];
}

export interface OneCamera {
  id:       number;
  priority: number;
  title:    string;
  url:      string;
  preview:  Image | null;
}
