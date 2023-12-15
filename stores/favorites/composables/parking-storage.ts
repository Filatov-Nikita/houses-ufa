import { useFavoriteStorage } from './storage';
import { useFavoriteParkings } from './parkings';
import { useAuthStore } from '@/stores/auth';

export function useParkingStorage(storage: ReturnType<typeof useFavoriteStorage>) {
  const authStore = useAuthStore();
  const parkings = useFavoriteParkings();

  function add(parkingId: number) {
    if(authStore.isAuth) {
      parkings.add(parkingId)
    } else {
      storage.addItem(createItem(parkingId))
      storage.saveStorage();
    }
  }

  function remove(parkingId: number) {
    if(authStore.isAuth) {
      parkings.remove(parkingId)
    } else {
      storage.removeItem(parkingId, 'parkings');
      storage.saveStorage();
    }
  }

  function createItem(parkingId: number) {
    return {
      id: parkingId,
      type: 'parkings' as const,
      active: true,
    };
  }

  async function showAll() {
    if(authStore.isAuth) {
      return await parkings.all();
    } else {
      if(storage.parkings.value.length === 0) return [];
      return await parkings.showPack(storage.parkings.value.map(parking => parking.id));
    }
  }

  return {
    add,
    remove,
    appendPack: parkings.appendPack,
    showAll,
  }
}
