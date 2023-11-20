import { defineStore } from 'pinia';
import { useNotifyStore } from '@/stores/notify';

export const useQuestionForm = defineStore('questionForm', () => {
  const notify = useNotifyStore();
  const config = useRuntimeConfig();
  const form: Form = reactive(initForm());
  const loading = ref(false);
  const cleanedPhone = computed(() => '+' + form.phone.replace(/[^0-9]+/g, ''));

  async function send() {
    try {
      loading.value = true;
      await $fetch('lead/recall', {
        method: 'post',
        body:  {
          ...form,
          phone: cleanedPhone.value,
          theme: 'Остались вопросы?',
        },
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
    callback_date: '',
    callback_time: '',
  }
}
