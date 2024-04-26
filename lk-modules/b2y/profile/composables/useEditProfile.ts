import type { ProfileB2Y } from '../types';

export function useEditProfile() {
  const editing = ref(false);

  async function editProfile(form: Pick<ProfileB2Y, 'legal_name' | 'email'>, onSuccess: () => Promise<void>) {
    editing.value = true;

    await useDataFetch<{ data: ProfileB2Y }>(`b2y/profile`, {
      method: 'PATCH',
      baseURL: useRuntimeConfig().public.rootApi,
      body: form,
      watch: false,
    });

    await onSuccess();

    editing.value = false;
  }


  return {
    editing,
    editProfile,
  }
}
