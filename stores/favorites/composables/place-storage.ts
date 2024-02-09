import { useFavoriteStorage } from './storage';
import { useEstateCounter } from './estate-counter';
import { useFavoritePlaces } from './places';
import { useAuthStore } from '@/stores/auth';

export function usePlaceStorage(storage: ReturnType<typeof useFavoriteStorage>, estateCounter: ReturnType<typeof useEstateCounter>) {
  const authStore = useAuthStore();
  const places = useFavoritePlaces();

  async function add(placeId: number) {
    if(authStore.isAuth) {
      await places.add(placeId);
      estateCounter.counter.value.pantries++;
    } else {
      storage.addItem(createItem(placeId))
      storage.saveStorage();
    }
  }

  async function remove(placeId: number) {
    if(authStore.isAuth) {
      await places.remove(placeId);
      estateCounter.counter.value.pantries--;
    } else {
      storage.removeItem(placeId, 'places');
      storage.saveStorage();
    }
  }

  function createItem(placeId: number) {
    return {
      id: placeId,
      type: 'places' as const,
      active: true,
    };
  }

  async function showAll() {
    if(authStore.isAuth) {
      return await places.all();
    } else {
      if(storage.places.value.length === 0) return [];
      return await places.showPack(storage.places.value.map(place => place.id));
    }
  }

  function hasItem(placeId: number, apiValue: boolean | null) {
    if(authStore.isAuth) return apiValue === true;
    else return storage.hasItem(placeId, 'places');
  }

  return {
    add,
    remove,
    appendPack: places.appendPack,
    showAll,
    hasItem,
  }
}
