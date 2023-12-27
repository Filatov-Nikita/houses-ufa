import * as Tokens from '@/helpers/tokens';
import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

export const useClientProfile = defineStore('b2tClientData', () => {
  const config = useRuntimeConfig();

  function getHeaders() {
    return {
      Accept: 'application/json',
      Authorization: 'Bearer ' + Tokens.get()?.token
    };
  }

  const editPassport = ref(false);
  const shopperId = ref<number>();

  const url = computed(() => `b2t/shoppers/${shopperId.value}`);

  const {
    data: profileData,
    pending: loadingProfile,
    execute: showProfile
  } = useDataFetch<ProfileResponse>(url, {
    baseURL: config.public.rootApi,
    immediate: false,
    watch: false,
  });

  async function createPassport(body: PassportData): Promise<PassportData> {
    const res = await $fetch<{ data: PassportData }>(`b2t/shoppers/${shopperId.value}/consumer-passport`, {
      method: 'POST',
      baseURL: config.public.rootApi,
      headers: getHeaders(),
      body,
    });

    if(profileData.value) {
      profileData.value.data.consumer.passport = res.data;
    }

    return res.data;
  }

  async function updatePassport(body:  PassportData): Promise<PassportData> {
    const res = await $fetch<{ data: PassportData }>(`b2t/shoppers/${shopperId.value}/consumer-passport`, {
      method: 'PATCH',
      baseURL: config.public.rootApi,
      headers: getHeaders(),
      body,
    });

    if(profileData.value) {
      profileData.value.data.consumer.passport = res.data;
    }

    return res.data;
  }

  return {
    profileData,
    loadingProfile,
    editPassport,
    shopperId,
    showProfile,
    createPassport,
    updatePassport,
  }
});

export interface ProfileResponse {
  data: {
    consumer: ProfileData
  };
}

export interface ProfileData {
  cellphone: string;
  email:     string;
  full_name: string;
  passport:  PassportData | null;
}

export interface PassportData {
  birthday:             string;
  department_code:      string;
  inn:                  string;
  issue_date:           string;
  issued_by:            string;
  registration_address: string;
  series_and_number:    string;
  snils:                string;
}
