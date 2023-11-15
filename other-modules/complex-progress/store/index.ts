import type { Image } from '@/types/share';
import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

export const useComplexProgress = defineStore('complexProgress', () => {
  const filterType = ref<'album' | 'camera'>('album');
  const albumParams = reactive(initAlbumParams());

  function initAlbumParams(): AlbumParams {
    return {
      month: null,
      year: null
    }
  }

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

  const albumUrl = computed(() => `estate/complexes/${complexId.value}/build-feeds`);

  const {
    data: albumData,
    pending: loadingAlbum,
    execute: showAlbum,
  } = useDataFetch<AlbumResponse>(albumUrl, {
    immediate: false,
    watch: false,
  });

  const filtredAlbums = computed(() => {
    if(!albumData.value) return [];
    return albumData.value.data.filter((item) => {
      const year = albumParams.year?.value ?? item.year;
      const month = albumParams.month?.value ?? item.month;
      return item.year === year && item.month === month;
    });
  });

  const monthList = getMonthList();

  const availableYears = computed(() => {
    if(!albumData.value) return [];
    const list: Record<string, number> = {};

    albumData.value.data.forEach(item => {
      list[item.year] = 1;
    });

    return Object.keys(list).map(item => ({ label: item, value: item }));
  });

  const availableMonths = computed(() => {
    if(!albumData.value) return [];
    return albumData.value.data.map(item => ({
      label: monthList[item.month],
      value: item.month,
    }));
  });

  return {
    filterType,
    cameraData,
    loadingCamera,
    albumData,
    loadingAlbum,
    filtredAlbums,
    monthList,
    availableMonths,
    availableYears,
    albumParams,
    showAlbum,
    showCamera,
    setComplexId,
  }
});

function getMonthList(): Record<string, string> {
  return {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Декабрь',
  }
}

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

export interface AlbumResponse {
  data: OneAlbum[];
}

export interface OneAlbum {
  id:           number;
  images_count: number;
  month:        number;
  year:         string;
  preview:  Image | null;
}

interface AlbumParams {
  month: { label: string, value: number } | null,
  year: { label: string, value: string } | null,
}
