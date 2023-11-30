import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware(() => {
  if(process.client) {
    const authStore = useAuthStore();
    if (!authStore.checkAuth()) {
      authStore.openPopup = true;
      return navigateTo({ path: '/' })
    }
  }
})
