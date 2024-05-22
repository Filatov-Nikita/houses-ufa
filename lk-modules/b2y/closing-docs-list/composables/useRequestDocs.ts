import useCoolDown from  './useCoolDown';
import type { Params } from './useClosingDocsList';

interface Args {
  onCooldownFinish: () => void,
  query: Params,
};

export default function(params: Args) {
  const coolDown = useCoolDown(10, params.onCooldownFinish);
  const loading = ref(false);

  function beforeCreate() {
    loading.value = true;
  }

  function afterCreate(hasError: boolean) {
    loading.value = false;

    if(!hasError) {
      coolDown.refresh();
    }
  }

  async function createDocs() {
    beforeCreate();
    const { data, error } = await useDataFetch<Response>(`b2y/closing-docs`, {
      baseURL: useRuntimeConfig().public.rootApi,
      headers: {
        Accept: 'application/json',
      },
      method: 'POST',
      body: params.query,
    });
    afterCreate(error.value !== null);
  }

  return {
    loading,
    coolDown,
    createDocs,
  }
}
