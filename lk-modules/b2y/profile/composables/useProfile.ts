import type { ProfileB2Y } from '../types';

export function useProfile() {
  const { data: profile, execute: showProfile } = useDataFetch<{ data: ProfileB2Y }>(`b2y/profile`, {
    baseURL: useRuntimeConfig().public.rootApi,
    immediate: false,
  });

  return {
    profile,
    showProfile,
  }
}
