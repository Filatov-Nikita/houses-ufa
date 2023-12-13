<template>
  <StepHeader />
  <Form @submit="register" v-slot="{ isSubmitting }" class="tw-grid tw-gap-8">
    <div class="tw-grid tw-gap-5">
      <BaseInput
        rules="required"
        name="fio"
        label="ФИО"
        placeholder="Иванов Иван Иванович"
        v-model="form.full_name"
      />
      <BaseInput rules="required|email" name="E-mail" label="E-mail" placeholder="mail@mail.com" v-model="form.email" />
      <BaseInput
        disabled
        name="cellphone"
        label="Телефон"
        placeholder="+7 (999) 999 99-99"
        v-model="authStore.currentPhone"
      />
    </div>
    <div class="tw-flex tw-gap-5">
      <BaseButton theme="gray" paddingClasses="tw-px-4" @click="() => $emit('prev')">
        Назад
      </BaseButton>
      <BaseButton
        class="tw-grow"
        :disabled="isSubmitting"
        :theme="'green'"
        type="submit"
        >Зарегистрироваться</BaseButton
      >
    </div>
  </Form>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
import StepHeader from './header.vue'
import { Form } from 'vee-validate'
import { useNotifyStore } from '@/stores/notify';
import { FetchError } from 'ofetch';

const authStore = useAuthStore()
const notify = useNotifyStore();

const { openPopup, selectRole } = storeToRefs(authStore)

const emits = defineEmits<{
  (event: 'prev'): void,
  (event: 'next'): void,
}>()

const form = reactive({
  full_name: '',
  email: '',
});

const register = async () => {
  await createUser();
  authStore.showLK();
};

const config = useRuntimeConfig();

interface UserRes {
  data: {
    id: number,
    cellphone: string,
    email: string,
    full_name: string,
    token: string
  }
}

type ServerError = {
  errors: Record<string, string[]>,
  message: string,
}

async function createUser() {
  try {
    const res = await $fetch<UserRes>('b2v/b2c/register-and-login', {
      method: 'post',
      body: form,
      baseURL: config.public.rootApi,
      headers: {
        Authorization: 'Bearer ' + authStore.tempToken
      }
    });

    authStore.setToken(res.data.token, authStore.selectRole);
  } catch(e) {
    if(e instanceof FetchError) {
      if(e.status === 422) {
        const data = e.data as ServerError;
        Object.values(data.errors).map(e => {
          notify.create({ type: 'error', message: e.join(', ') });
        });
      } else {
        notify.create({ type: 'error', message: 'Не удалось создать заявку' });
      }
    }
    throw e;
  }
}
</script>
<style lang="scss" scoped></style>
