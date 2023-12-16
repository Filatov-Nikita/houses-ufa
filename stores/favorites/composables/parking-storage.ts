import { useFavoriteStorage } from './storage';
import { useFavoriteParkings } from './parkings';
import { useAuthStore } from '@/stores/auth';

export function useParkingStorage(storage: ReturnType<typeof useFavoriteStorage>) {
  const authStore = useAuthStore();
  const parkings = useFavoriteParkings();

  async function add(parkingId: number) {
    if(authStore.isAuth) {
      await parkings.add(parkingId)
    } else {
      storage.addItem(createItem(parkingId))
      storage.saveStorage();
    }
  }

  async function remove(parkingId: number) {
    if(authStore.isAuth) {
      await parkings.remove(parkingId)
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

  function hasItem(parkingId: number, apiValue: boolean | null) {
    if(authStore.isAuth) return apiValue === true;
    else return storage.hasItem(parkingId, 'parkings');
  }

  return {
    add,
    remove,
    appendPack: parkings.appendPack,
    showAll,
    hasItem,
  }
}
