<template>
  <Form @submit="onSubmit" v-slot="{ isSubmitting }">
    <BaseInput
      rules="required"
      name="fio1"
      label="Ваше имя (ФИО)"
      placeholder="Иван Иванов Иванович"
      v-model="form.fio1"
    />
    <BaseInput
      rules="required"
      name="phone1"
      label="Ваш номер телефона"
      placeholder="+7 (XXX) XXX XX XX"
      maska="+7 (###) ### ## ##"
      v-model="form.phone1"
    />
    <BaseInput
      rules="required"
      name="fio2"
      label="ИМЯ рекомендуемого человека (ФИО)"
      placeholder="Иван Иванов Иванович"
      v-model="form.fio2"
    />
    <BaseInput
      rules="required"
      name="phone2"
      label="Номер телефона рекомендуемого человека"
      placeholder="+7 (XXX) XXX XX XX"
      maska="+7 (###) ### ## ##"
      v-model="form.phone2"
    />
    <div class="actions">
      <p class="perc question-form__input">
        Нажимая кнопку, вы соглашаетесь с&nbsp;<a href="/docs/sogl.pdf" target="_blank">условиями обработки персональных данных</a>
      </p>
      <BaseButton class="btn-submit" type="submit" :disabled="isSubmitting">
        Отправить
      </BaseButton>
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
  import { useNotifyStore } from '~/stores/notify';

  const notify = useNotifyStore();

  const form: BindReferralBody = reactive({
    fio1: '',
    phone1: '',
    fio2: '',
    phone2: '',
  });

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

<style scoped lang="scss">
  .actions {
    margin-top: 12px;
  }

  .perc {
    margin-bottom: 12px;
    @apply tw-text-text02 tw-text-sm;

    @include lg {
      @apply tw-text-xs;
    }

    a {
      @apply tw-text-primary;
    }
  }

  .btn-submit {
    width: 100%;
    max-width: 240px;
  }

  .notice {
    margin-top: 16px;
    @apply tw-text-negative tw-text-sm;
  }
</style>
