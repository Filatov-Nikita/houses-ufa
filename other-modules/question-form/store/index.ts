import { defineStore } from 'pinia';

export const useQuestionForm = defineStore('questionForm', () => {
  const config = useRuntimeConfig();
  const form: Form = reactive(initForm());

  function send() {
    $fetch('', { baseURL: config.public.baseURL });
  }

  return {
    form,
  }
});

type Form = ReturnType<typeof initForm>;

function initForm() {
  return {
    name: '',
    phone: '',
  }
}
