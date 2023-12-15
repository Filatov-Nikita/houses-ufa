import { useFavoriteStorage } from './storage';
import { useFavoriteFlats } from './flats';
import { useAuthStore } from '@/stores/auth';

export function useFlatStorage(storage: ReturnType<typeof useFavoriteStorage>) {
  const authStore = useAuthStore();
  const flats = useFavoriteFlats();

  async function add(flatId: number) {
    if(authStore.isAuth) {
      await flats.add(flatId)
    } else {
      storage.addItem(createItem(flatId))
      storage.saveStorage();
    }
  }

 async function remove(flatId: number) {
    if(authStore.isAuth) {
      await flats.remove(flatId)
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
      return await flats.showPack(storage.flats.value.map(flat => flat.id));
    }
  }

  return {
    add,
    remove,
    appendPack: flats.appendPack,
    showAll,
  }
}
