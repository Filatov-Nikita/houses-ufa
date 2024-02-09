import { useFavoriteStorage } from './storage';
import { useEstateCounter } from './estate-counter';
import { useFavoriteFlats } from './flats';
import { useAuthStore } from '@/stores/auth';

export function useFlatStorage(storage: ReturnType<typeof useFavoriteStorage>, estateCounter: ReturnType<typeof useEstateCounter>) {
  const authStore = useAuthStore();
  const flats = useFavoriteFlats();

  async function add(flatId: number) {
    if(authStore.isAuth) {
      await flats.add(flatId);
      estateCounter.counter.value.flats++;
    } else {
      storage.addItem(createItem(flatId))
      storage.saveStorage();
    }
  }

 async function remove(flatId: number) {
    if(authStore.isAuth) {
      await flats.remove(flatId);
      estateCounter.counter.value.flats--;
    } else {
      storage.removeItem(flatId, 'flats');
      storage.saveStorage();
    }
  }

  function createItem(flatId: number) {
    return {
      id: flatId,
      type: 'flats' as const,
      active: true,
    };
  }

  async function showAll() {
    if(authStore.isAuth) {
      return await flats.all();
    } else {
      if(storage.flats.value.length === 0) return [];
      return await flats.showPack(storage.flats.value.map(flat => flat.id));
    }
  }

  function hasItem(flatId: number, apiValue: boolean | null) {
    if(authStore.isAuth) return apiValue === true;
    else return storage.hasItem(flatId, 'flats');
  }

  return {
    add,
    remove,
    appendPack: flats.appendPack,
    showAll,
    hasItem,
  }
}
