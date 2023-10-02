import { defineRule, configure } from 'vee-validate';
import {  email } from '@vee-validate/rules';
import { localize, setLocale } from "@vee-validate/i18n";
import ru from "@vee-validate/i18n/dist/locale/ru.json";
export default defineNuxtPlugin(() => {
  defineRule('required', (val: string) => !!val || 'Поле должно быть заполнено');
  defineRule('email', email);
  configure({
    generateMessage: localize({ ru }),
  });
  setLocale("ru");
});
