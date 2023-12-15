import { useAuthStore } from '@/stores/auth';
import { useFavoritesStore } from '@/stores/favorites';

export default defineNuxtRouteMiddleware(async (to, from) => {
  if(process.server) return;
  const authStore = useAuthStore();
  const favStore = useFavoritesStore();
  if(!authStore.isAuth) {
    if(!favStore.storage.initialized) {
      favStore.storage.parseStorage();
      favStore.storage.initialized = true;
    }
  } else if(favStore.storage.activeItems.length > 0) {
    await favStore.sync();
  }
});
