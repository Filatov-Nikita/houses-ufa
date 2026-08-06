<template>
  <Form class="quest-form__form" @submit="onSubmit" v-slot="{ isSubmitting }">
    <BaseInput
      class="quest-form__input"
      rules="required"
      name="fio1"
      label="Ваше имя (ФИО)"
      placeholder="Иван Иванович Иванов"
      v-model="form.fio1"
    />
    <BaseInput
      class="quest-form__input"
      rules="required"
      name="phone1"
      label="Ваш номер телефона"
      placeholder="+7 (XXX) XXX XX XX"
      maska="+7 (###) ### ## ##"
      v-model="form.phone1"
    />
    <BaseInput
      class="quest-form__input"
      rules="required"
      name="fio2"
      label="Имя рекомендуемого человека (ФИО)"
      placeholder="Иван Иванович Иванов"
      v-model="form.fio2"
    />
    <BaseInput
      class="quest-form__input"
      rules="required"
      name="phone2"
      label="Номер телефона рекомендуемого человека"
      placeholder="+7 (XXX) XXX XX XX"
      maska="+7 (###) ### ## ##"
      v-model="form.phone2"
    />
    <div class="quest-form__bottom">
      <div class="quest-form__actions">
        <BaseCheckbox class="quest-form__input" name="agree" label="" :checkedValue="true" :uncheckedValue="false" v-model="agree">
          <p class="quest-form__perc">
            Нажимая кнопку, вы соглашаетесь с&nbsp;<a href="/docs/sogl.pdf" target="_blank">условиями обработки персональных данных</a>
          </p>
        </BaseCheckbox>
        <BaseButton class="quest-form__input btn-submit" type="submit" :disabled="!agree || isSubmitting">
          Отправить
        </BaseButton>
      </div>
      <p class="notice">
        ВАЖНО! Этого человека не&nbsp;должно быть в&nbsp;нашей базе - засчитываются только уникальные пользователи. Программа не&nbsp;распространяется на&nbsp;родственников первого круга (родители, супруги, дети)
      </p>
    </div>
  </Form>
</template>

<script setup lang="ts">
  import { Form } from 'vee-validate';
  import type { BindReferralBody } from '@/repositories/purchase';
  import { cleanPhone } from '@/helpers';
  import { useNotifyStore } from '@/stores/notify';

  const notify = useNotifyStore();

  const form: BindReferralBody = reactive({
    fio1: '',
    phone1: '',
    fio2: '',
    phone2: '',
  });

  const agree = ref(false);

  const api = useNuxtApp().$api;

  async function onSubmit() {
    try {
      await api.purchase.bindReferral({
        ...form,
        phone1: cleanPhone(form.phone1),
        phone2: cleanPhone(form.phone2),
      });
      notify.create({
        type: 'success',
        message: 'Спасибо за рекомендацию, данный клиент закреплен за Вами',
      });
      reset();
    } catch(e) {
      console.log(e);
      notify.create({
        type: 'error',
        message: 'Данный номер есть в базе. В закрепление отказано',
      });
    }
  }

  function reset() {
    form.fio1 = '';
    form.fio2 = '';
    form.phone1 = '';
    form.phone2 = '';
  }
</script>

<style scoped src="@/other-modules/question-form/assets/style/form.scss"></style>

<style scoped lang="scss">
  .notice {
    margin-top: 16px;
    @apply tw-text-negative tw-text-sm;
  }
</style>
