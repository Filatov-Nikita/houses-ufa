import { useFavoriteStorage } from './storage';
import { useFavoriteTowns } from './towns';
import { useAuthStore } from '@/stores/auth';

export function useTownStorage(storage: ReturnType<typeof useFavoriteStorage>) {
  const authStore = useAuthStore();
  const towns = useFavoriteTowns();

  function add(townId: number) {
    if(authStore.isAuth) {
      towns.add(townId)
    } else {
      storage.addItem(createItem(townId))
      storage.saveStorage();
    }
  }

  function remove(townId: number) {
    if(authStore.isAuth) {
      towns.remove(townId)
    } else {
      storage.removeItem(townId, 'towns');
      storage.saveStorage();
    }
  }

  function createItem(townId: number) {
    return {
      id: townId,
      type: 'towns' as const,
      active: true,
    };
  }

  async function showAll() {
    if(authStore.isAuth) {
      return await towns.all();
    } else {
      return await towns.showPack(storage.towns.value.map(town => town.id));
    }
  }

  return {
    add,
    remove,
    appendPack: towns.appendPack,
    showAll,
  }
}
