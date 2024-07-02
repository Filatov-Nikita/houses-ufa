import { cleanPhone } from '@/helpers';
import { useNotifyStore } from '@/stores/notify';
import { useTimeSlotsStore } from '../store/timeSlots';

interface Body {
  visitor_phone: string,
  visitor_name: string,
}

export interface SlotResponse {
  id: number,
  starts_at: string,
  ends_at: string,
};

export default function useOrder() {
  const notify = useNotifyStore();
  const slotStore = useTimeSlotsStore();

  const form: Body = reactive({
    visitor_phone: '',
    visitor_name: '',
  });

  const day = ref<string | null>(null);
  const slot = ref<string | null>(null);

  const timeSlots = computed(() => {
    if(slotStore.orderDays === null || day.value === null) return [];
    const result = slotStore.orderDays.find(orderDay => orderDay.date === day.value);
    if(!result) return [];
    return result.slots;
  });

  async function send(flatId: number, onSuccess: (data: SlotResponse) => void) {
    const { error, data } = await useDataFetch<{ data: SlotResponse }>(`b2c/objects/flats/${flatId}/key-acquisition`, {
      method: 'POST',
      baseURL: useRuntimeConfig().public.rootApi,
      body: {
        visitor_name: form.visitor_name,
        visitor_phone: cleanPhone(form.visitor_phone),
        visit_datetime: slot.value!
      },
    });

    if(error.value) {
      notify.create({ type: 'error', message: 'Ошибка при отправке заявки, попробуйте еще раз.' });
    } else {
      onSuccess(data.value!.data);
      reset();
    }
  }

  function reset() {
    day.value = null;
    slot.value = null;
    form.visitor_name = '';
    form.visitor_phone = '';
  }

  return {
    form,
    timeSlots,
    day,
    slot,
    send,
    reset,
  }
}
