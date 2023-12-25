import { defineStore } from 'pinia';
import { useNotifyStore } from '@/stores/notify';
import * as Tokens from '@/helpers/tokens';
import { useCreditProgramCalc } from '@/lk-modules/b2c/credit-program-list/store';

export type EstateTypes = 'town' | 'flat' | 'parking' | 'place';

export const useIpotekaModule = defineStore('ipotekaModule', () => {
  const creditStore = useCreditProgramCalc();
  const config = useRuntimeConfig();

  const notify = useNotifyStore();

  const currentId = ref<number>();
  const currentType = ref<EstateTypes>();
  const finishing = ref<boolean>(false);

  function setCurrentId(id: number) {
    currentId.value = id;
  }

  function setCurrentType(type: EstateTypes) {
    currentType.value = type;
  }

  function getHeaders() {
    return {
      Accept: 'application/json',
      Authorization: 'Bearer ' + Tokens.get()?.token
    };
  }

  const estateNames = {
    town: 'estate',
    flat: 'flat',
    parking: 'lot',
    place: 'pantry',
  };

  async function finish() {
    try {
      finishing.value = true;
      await $fetch('b2c/mortgage-claims', {
        method: 'POST',
        baseURL: config.public.rootApi,
        headers: getHeaders(),
        body: {
          mortgage_initial_fee: creditStore.params.initialPay,
          object_id: currentId.value,
          object_type: estateNames[currentType.value!],
          offer_ids: creditStore.offerIds,
          period_in_years: creditStore.params.period
        }
      });
    } catch(e) {
      notify.create({ type: 'error', message: 'Не удалось подать заявку' });
      throw e;
    } finally {
      finishing.value = false;
    }
  }

  return {
    currentId,
    currentType,
    finishing,
    setCurrentId,
    setCurrentType,
    finish,
  }
});
