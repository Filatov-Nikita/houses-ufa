import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

export const useClientProfile = defineStore('clientProfile', () => {
  const config = useRuntimeConfig();

  const {
    data: profileData,
    pending: loadingProfile,
    execute: showProfile
  } = useDataFetch<ProfileResponse>('b2t/profile', {
    baseURL: config.public.rootApi,
    immediate: false,
  });

  return {
    profileData,
    loadingProfile,
    showProfile,
  }
});

export interface ProfileResponse {
  data: ProfileData;
}

export interface ProfileData {
  birthday:  string;
  cellphone: string;
  email:     string;
  full_name: string;
  agency:    Agency;
}

export interface Agency {
  legal_name: string;
}
