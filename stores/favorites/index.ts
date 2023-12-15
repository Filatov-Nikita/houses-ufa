import { defineStore } from 'pinia';
import { useFlatStorage } from './composables/flat-storage';
import { useTownStorage } from './composables/town-storage';
import { usePlaceStorage } from './composables/place-storage';
import { useParkingStorage } from './composables/parking-storage';
import { useFavoriteStorage } from './composables/storage';

export const useFavoritesStore = defineStore('favoritesStore', () => {
  const storage = useFavoriteStorage();
  const flatStorage = useFlatStorage(storage);
  const townStorage = useTownStorage(storage);
  const placeStorage = usePlaceStorage(storage);
  const parkingStorage = useParkingStorage(storage);

  async function sync() {
    await Promise.all([
      flatStorage.appendPack(storage.flats.value.map(flat => flat.id)),
      townStorage.appendPack(storage.towns.value.map(town => town.id)),
      placeStorage.appendPack(storage.places.value.map(place => place.id)),
      parkingStorage.appendPack(storage.parkings.value.map(parking => parking.id)),
    ]);
    storage.clearStorage();
  }

  return {
    flatStorage,
    townStorage,
    placeStorage,
    parkingStorage,
    storage,
    sync,
  }
});
