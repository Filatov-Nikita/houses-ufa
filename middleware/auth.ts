import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();
  if(authStore.userType === null) {
    authStore.failedRoutePath = to.fullPath;
    authStore.openPopup = true;
    return abortNavigation();
  }
})
