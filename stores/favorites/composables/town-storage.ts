import { useFavoriteStorage } from './storage';
import { useFavoriteTowns } from './towns';
import { useAuthStore } from '@/stores/auth';

export function useTownStorage(storage: ReturnType<typeof useFavoriteStorage>) {
  const authStore = useAuthStore();
  const towns = useFavoriteTowns();

  async function add(townId: number) {
    if(authStore.isAuth) {
      await towns.add(townId)
    } else {
      storage.addItem(createItem(townId))
      storage.saveStorage();
    }
  }

  async function remove(townId: number) {
    if(authStore.isAuth) {
      await towns.remove(townId)
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
      if(storage.towns.value.length === 0) return [];
      return await towns.showPack(storage.towns.value.map(town => town.id));
    }
  }

  function hasItem(townId: number, apiValue: boolean | null) {
    if(authStore.isAuth) return apiValue === true;
    else return storage.hasItem(townId, 'towns');
  }

  return {
    add,
    remove,
    appendPack: towns.appendPack,
    showAll,
    hasItem,
  }
}
