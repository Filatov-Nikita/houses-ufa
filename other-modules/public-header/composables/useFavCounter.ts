import { useFavoritesStore } from '@/stores/favorites';
import type { FavCounts } from '@/types/favorites';
import { useAuthStore } from '@/stores/auth';

export function useFavCounter() {
  const fav = useFavoritesStore();
  const auth = useAuthStore();

  const favStorageCount = computed(() => fav.storage.activeItems.length);

  if(auth.isAuth) {
    useDataFetch<{ data: FavCounts }>('favorites/counts').then(({ data: counter }) => {
      if(counter.value) {
        fav.estateCounter.setCounter(counter.value.data);
      }
    });
  }

  return {
    favStorageCount,
    estateCounter: fav.estateCounter,
  }
}
