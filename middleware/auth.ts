import { useAuthStore } from '~/stores/auth'
export default defineNuxtRouteMiddleware((to) => {
  const { $config } = useNuxtApp()
  const auth = localStorage.getItem('auth')
  const authStore = useAuthStore()
  if (!auth) {
    to.meta = { auth: 'auth' }
    authStore.openPopup = true
    return navigateTo(
      {
        path: '/',
        query: { r: to.path, auth_open: 'true' },
        params: { test: 'test' },
      },
      { redirectCode: 301 }
    )
  }
})
