import { defineRule } from 'vee-validate';

export default defineNuxtPlugin(() => {
  defineRule('required', (val: string) => !!val || 'Поле должно быть заполнено');
});
