import { defineStore } from 'pinia';
import { useNotifyStore } from '@/stores/notify';
import * as Tokens from '@/helpers/tokens';

export type EstateTypes = 'town' | 'flat' | 'parking' | 'place';

export const useEstateBook = defineStore('b2tEstateBook', () => {
  const config = useRuntimeConfig();

  const notify = useNotifyStore();

  const shopperId = ref<number>();
  const currentId = ref<number>();
  const currentType = ref<EstateTypes>();
  const booking = ref<boolean>(false);

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

  async function book() {
    try {
      booking.value = true;
      await $fetch(`b2t/shoppers/${shopperId.value}/bookings`, {
        method: 'POST',
        baseURL: config.public.rootApi,
        headers: getHeaders(),
        body: {
          object_id: currentId.value,
          object_type: estateNames[currentType.value!],
        }
      });
    } catch(e) {
      notify.create({ type: 'error', message: 'Не удалось забронировать' });
      throw e;
    } finally {
      booking.value = false;
    }
  }

  return {
    currentId,
    currentType,
    booking,
    shopperId,
    setCurrentId,
    setCurrentType,
    book,
  }
});
