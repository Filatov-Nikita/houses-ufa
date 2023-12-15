import { useFavoriteStorage } from './storage';
import { useFavoritePlaces } from './places';
import { useAuthStore } from '@/stores/auth';

export function usePlaceStorage(storage: ReturnType<typeof useFavoriteStorage>) {
  const authStore = useAuthStore();
  const places = useFavoritePlaces();

  function add(placeId: number) {
    if(authStore.isAuth) {
      places.add(placeId)
    } else {
      storage.addItem(createItem(placeId))
      storage.saveStorage();
    }
  }

  function remove(placeId: number) {
    if(authStore.isAuth) {
      places.remove(placeId)
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
      return await places.showPack(storage.places.value.map(place => place.id));
    }
  }

  return {
    add,
    remove,
    appendPack: places.appendPack,
    showAll,
  }
}
