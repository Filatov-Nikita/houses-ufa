import { cleanPhone } from '@/helpers';
import { useNotifyStore } from '@/stores/notify';

interface Body {
  visitor_phone: string,
  visitor_name: string,
  visit_time: string,
  visit_date: string,
  comment: string,
}

export default function useOrder() {

  const form: Body = reactive({
    visitor_phone: '',
    visitor_name: '',
    visit_time: '',
    visit_date: '',
    comment: '',
  });

  const time = ref(null);

  async function send(flatId: number, body: Body, onSuccess: () => void) {
    const { error } = await useDataFetch(`b2c/objects/flats/${flatId}/key-obtainments`, {
      method: 'POST',
      baseURL: useRuntimeConfig().public.rootApi,
      body: {
        ...body,
        visitor_phone: cleanPhone(form.visitor_phone),
      },
    });

    const notify = useNotifyStore();

    if(error.value) {
      notify.create({ type: 'error', message: 'Произошла ошибка на сервере!' });
    } else {
      onSuccess();
      notify.create({ type: 'success', message: 'Заявка успешно отправлена!' });
    }
  }

  return {
    form,
    time,
    send,
  }
}
