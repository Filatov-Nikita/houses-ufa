<template>
  <StepHeader />
  <Form @submit="register" v-slot="{ meta }" class="tw-grid tw-gap-8">
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
        :disabled="!meta.valid"
        :theme="!meta.valid ? 'gray' : 'green'"
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

const authStore = useAuthStore()

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

async function createUser() {
  const res = await $fetch<UserRes>('b2v/b2c/register-and-login', {
    method: 'post',
    body: form,
    baseURL: config.public.rootApi,
    headers: {
      Authorization: 'Bearer ' + authStore.tempToken
    }
  });

  authStore.setToken(res.data.token, authStore.selectRole);
}
</script>
<style lang="scss" scoped></style>
