<template>
  <Form @submit="register" v-slot="{ meta }" class="tw-grid tw-gap-8">
    <div class="tw-grid tw-gap-5">
      <BaseInput
        rules="required"
        name="fio"
        label="ФИО"
        placeholder="Иванов Иван Иванович"
      />
      <BaseInput name="E-mail" label="E-mail" placeholder="mail@mail.com" />
      <BaseInput
        name="phone"
        label="Телефон"
        placeholder="+7 (999) 999 99-99"
      />
    </div>
    <div class="tw-flex tw-gap-5">
      <BaseButton theme="gray" paddingClasses="tw-px-4" @click="back">
        Назад
      </BaseButton>
      <BaseButton
        class="tw-grow"
        :disabled="!meta.valid"
        :theme="!meta.valid ? 'gray' : 'green'"
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
const { openPopup, dataBuyer, selectRole } = storeToRefs(authStore)

const register = (
  values: { fio: string; email: string; phone: string },
  { resetForm }: any
) => {
  dataBuyer.value = values
  authStore.sendDataBuyer()
  emits('next')
}
const back = () => (selectRole.value = null)
</script>
<style lang="scss" scoped></style>
