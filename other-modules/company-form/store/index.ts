import { defineStore } from 'pinia';
import { useNotifyStore } from '@/stores/notify';

export const useCompanyForm = defineStore('companyForm', () => {
  const notify = useNotifyStore();
  const config = useRuntimeConfig();
  const form: Form = reactive(initForm());
  const loading = ref(false);
  const cleanedPhone = computed(() => '+' + form.phone.replace(/[^0-9]+/g, ''));

  async function send() {
    try {
      loading.value = true;
      const body: Record<string, string> = {
        first_name: form.first_name,
        email: form.email,
        phone: cleanedPhone.value,
        theme: 'Остались вопросы? Напишите нам',
      };

      if(form.message) body.message = form.message;

      await $fetch('lead/recall', {
        method: 'post',
        body,
        baseURL: config.public.baseURL
      });

      notify.create({ type: 'success', message: 'Форма успешно отправлена!' });
    } catch(e) {
      notify.create({ type: 'error', message: 'Не удалось отправить форму!' });
      throw e;
    } finally {
      loading.value = false;
    }
  }

  return {
    form,
    loading,
    send
  }
});

type Form = ReturnType<typeof initForm>;

function initForm() {
  return {
    first_name: '',
    phone: '',
    email: '',
    message: '',
  }
}
