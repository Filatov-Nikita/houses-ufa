<template>
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
      <BaseInput type="date" rules="required" name="birthday" label="Дата рождения" v-model="form.birthday" />
      <BaseInput
        disabled
        name="cellphone"
        label="Телефон"
        placeholder="+7 (999) 999 99-99"
        v-model="currentPhone"
      />
    </div>
    <div class="tw-flex tw-gap-5">
      <BaseButton theme="gray" paddingClasses="tw-px-4" @click="() => $emit('prev')">
        Назад
      </BaseButton>
      <BaseButton
        class="tw-grow"
        :theme="'green'"
        type="submit"
        >Далее</BaseButton
      >
    </div>
  </Form>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
import { Form } from 'vee-validate'

const authStore = useAuthStore()
const { selectRole, currentPhone } = storeToRefs(authStore);

const form = authStore.agentStore.form;

const emits = defineEmits<{
  (event: 'next'): void,
  (event: 'prev'): void,
}>();

const register = () => {
  emits('next');
}
</script>
<style lang="scss" scoped></style>
