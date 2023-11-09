import { defineStore } from 'pinia';

export const useFavList = defineStore('favList', () => {
  const favType  = ref<FavTypes>('flats');

  return {
    favType,
  }
});

export type FavTypes = 'flats' | 'towns' | 'places' | 'parkings';
