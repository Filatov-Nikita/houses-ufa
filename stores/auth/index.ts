export const useAuthStore = defineStore('authStore', () => {
  const isAuth = ref(false)
  const token = ref('')
  const openPopup = ref(true)
  const type = ref<'signIn' | 'register'>('signIn')
  //вход

  const selectRole = ref<'buyer' | 'owner' | 'agent' | 'agency' | null>(null)
  // console.log(route.query)
  // watchEffect(() => {
  //   console.log(route.query)

  const dataBuyer = ref({
    fio: '',
    email: '',
    phone: '',
  })
  const sendDataBuyer = () => {
    isAuth.value = true
    console.log(dataBuyer.value)
  }

  const toRegister = () => {
    type.value = 'register'
    selectRole.value = null
  }

  const signIn = (phone: { phone: string }) => {
    console.log()
  }

  watch(openPopup, (val) => {
    if (!isAuth.value && !val) {
      type.value = 'signIn'
      selectRole.value = null
    }
  })
  // })
  return {
    isAuth,
    token,
    openPopup,
    selectRole,
    type,
    dataBuyer,
    sendDataBuyer,
    signIn,
    toRegister,
  }
})
