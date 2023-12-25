import { useRouter, useRoute } from 'vue-router';
import { useAgent } from './composables/agent';
import { useAgency } from './composables/agency';
import * as Tokens from '@/helpers/tokens';
import type { UserType } from '@/types/user';

export const useAuthStore = defineStore('authStore', () => {
  const router = useRouter();
  const route = useRoute();
  const isAuth = ref(false);
  const userType = ref<UserType | null>(null);
  const openPopup = ref(false);
  const type = ref<'signIn' | 'register'>('signIn');
  const visitorId = ref<number | null>(null);
  const currentPhone = ref<string | null>(null);
  const tempToken = ref<string | null>(null);
  const agentStore = useAgent();
  const agencyStore = useAgency();
  const failedRoutePath = ref<string | null>(null);
  const config = useRuntimeConfig();

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

  function showLK() {
    if(failedRoutePath.value) {
      router.push(failedRoutePath.value).then(() => {
        failedRoutePath.value = null;
      });
    } else {
      router.push(`/lk/${userType.value}`);
    }
  }

  function checkAuth() {
    return Tokens.get() !== null;
  }

  function logout() {
    Tokens.clear();
    router.replace('/').then(() => {
      if(process.client) {
        window.location.reload();
      }
    });
  }

  async function checkTokenValid(type: UserType, token: string) {
    try {
        await $fetch<{ message: 'pong' }>(`${type}/ping`, {
        baseURL: config.public.rootApi,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json'
        }
      });
      isAuth.value = true;
      userType.value = type;
    } catch(e) {
      isAuth.value = false;
      userType.value = null;
      Tokens.clear();
    }
  }

  watch(route, () => {
    openPopup.value = false;
  });

  return {
    isAuth,
    userType,
    openPopup,
    selectRole,
    type,
    visitorId,
    currentPhone,
    cellphoneRaw,
    tempToken,
    agentStore,
    agencyStore,
    failedRoutePath,
    checkTokenValid,
    getToken: Tokens.get,
    checkAuth,
    showLK,
    setToken: Tokens.set,
    setTempToken,
    setCurrentPhone,
    setVisitorId,
    toRegister,
    logout,
  }
})
