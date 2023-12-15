import { defineStore } from 'pinia';
import { type FavTypes } from '@/stores/favorites/composables/storage';
import { useFavoritesStore } from '@/stores/favorites';
import { type Flat } from '@/types/estate/flat';
import { type Town } from '@/types/estate/town';
import { type PlaceOne } from '@/types/estate/place';
import { type ParkingOne } from '@/types/estate/parking';

export const useFavList = defineStore('favList', () => {
  const favType  = ref<FavTypes>('flats');

  const favStore = useFavoritesStore();

  const flats = ref<Flat[]>([]);
  const towns = ref<Town[]>([]);
  const parkings = ref<ParkingOne[]>([]);
  const places = ref<PlaceOne[]>([]);

  async function showFlats() {
    flats.value = await favStore.flatStorage.showAll();
  }

  async function showTowns() {
    towns.value = await favStore.townStorage.showAll();
  }

  async function showPlaces() {
    places.value = await favStore.placeStorage.showAll();
  }

  async function showParkings() {
    parkings.value = await favStore.parkingStorage.showAll();
  }

  return {
    favType,
    flats,
    towns,
    parkings,
    places,
    showFlats,
    showTowns,
    showPlaces,
    showParkings,
  }
});
