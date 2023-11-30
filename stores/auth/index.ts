import { useRouter, useRoute } from 'vue-router';
import { useAgent } from './composables/agent';
import { useAgency } from './composables/agency';

export const useAuthStore = defineStore('authStore', () => {
  const router = useRouter();
  const route = useRoute();
  const isAuth = ref(false);
  const openPopup = ref(false);
  const type = ref<'signIn' | 'register'>('signIn');
  const visitorId = ref<number | null>(null);
  const currentPhone = ref<string | null>(null);
  const tempToken = ref<string | null>(null);
  const agentStore = useAgent();
  const agencyStore = useAgency();

  function setVisitorId(id: number) {
    visitorId.value = id;
  }

  function setCurrentPhone(phone: string) {
    currentPhone.value = phone;
  }

  function setTempToken(value: string) {
    tempToken.value = value;
  }

  const cellphoneRaw = computed(() => {
    if(currentPhone.value === null) return '';
    return '+' + currentPhone.value.replace(/[^0-9]+/g, '');
  });

  const selectRole = ref('b2c');

  const toRegister = () => {
    type.value = 'register'
  }

  watch(openPopup, (val) => {
    if (!isAuth.value && !val) {
      type.value = 'signIn'
    }
  });

  function setToken(token: string, type: string) {
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('tokenType', type);
  }

  function showLK() {
    router.push('/lk/agent');
  }

  function checkAuth() {
    return localStorage.getItem('token') !== null;
  }

  watch(route, () => {
    openPopup.value = false;
  });

  return {
    isAuth,
    openPopup,
    selectRole,
    type,
    visitorId,
    currentPhone,
    cellphoneRaw,
    tempToken,
    agentStore,
    agencyStore,
    checkAuth,
    showLK,
    setToken,
    setTempToken,
    setCurrentPhone,
    setVisitorId,
    toRegister,
  }
})
