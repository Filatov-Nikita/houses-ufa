import * as Tokens from '@/helpers/tokens';
import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  const tokenData = Tokens.get();
  if(tokenData === null) return;
  if(authStore.isAuth) return;
  await authStore.checkTokenValid(tokenData.type, tokenData.token);
});
