import * as Tokens from '@/helpers/tokens';
import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

export const useClientProfile = defineStore('clientProfile', () => {
  const config = useRuntimeConfig();

  function getHeaders() {
    return {
      Accept: 'application/json',
      Authorization: 'Bearer ' + Tokens.get()?.token
    };
  }

  const editPassport = ref(false);

  const {
    data: profileData,
    pending: loadingProfile,
    execute: showProfile
  } = useDataFetch<ProfileResponse>('b2c/profile', {
    baseURL: config.public.rootApi,
    immediate: false,
  });

  async function createPassport(body: PassportData): Promise<PassportData> {
    const res = await $fetch<{ data: PassportData }>('b2c/profile/passport', {
      method: 'POST',
      baseURL: config.public.rootApi,
      headers: getHeaders(),
      body,
    });

    if(profileData.value) {
      profileData.value.data.passport = res.data;
    }

    return res.data;
  }

  async function updatePassport(body:  PassportData): Promise<PassportData> {
    const res = await $fetch<{ data: PassportData }>('b2c/profile/passport', {
      method: 'PATCH',
      baseURL: config.public.rootApi,
      headers: getHeaders(),
      body,
    });

    if(profileData.value) {
      profileData.value.data.passport = res.data;
    }

    return res.data;
  }

  return {
    profileData,
    loadingProfile,
    editPassport,
    showProfile,
    createPassport,
    updatePassport,
  }
});

export interface ProfileResponse {
  data: ProfileData;
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
