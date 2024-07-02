import { useNotifyStore } from '@/stores/notify';

export default function useOrder() {
  const notify = useNotifyStore();
  const pendingCancel = ref(false);

  async function calcel(flatId: number, onSuccess: () => void) {
    pendingCancel.value = true;

    const { error } = await useDataFetch(`b2c/objects/flats/${flatId}/key-acquisition`, {
      baseURL: useRuntimeConfig().public.rootApi,
      method: 'DELETE',
    });


    if(error.value) {
      notify.create({ type: 'error', message: 'Ошибка при отмене заявки, попробуйте еще раз.' });
    } else {
      onSuccess();
    }

    pendingCancel.value = false;
  }


  return {
    pendingCancel,
    calcel,
  }
}
