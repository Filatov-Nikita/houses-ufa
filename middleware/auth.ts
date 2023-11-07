import { useAuthStore } from '~/stores/auth'
export default defineNuxtRouteMiddleware((to) => {
  const { $config } = useNuxtApp()
  // const auth = localStorage.getItem('auth')
  const authStore = useAuthStore()
  if (!authStore.isAuth) {
    to.meta = { auth: 'auth' }
    console.log(authStore)

    authStore.openPopup = true
    return navigateTo(
      {
        path: '/',
        query: { r: to.path },
        params: { test: 'test' },
      }
      // { redirectCode: 301 }
    )
  }
})
