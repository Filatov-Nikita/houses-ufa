<template>
  <Form @submit="register" v-slot="{ meta }" class="tw-grid tw-gap-8">
    <div class="tw-grid tw-gap-5">
      <BaseInput
        rules="required"
        name="yr_name"
        label="Название агенства"
        placeholder="000000000"
      />
      <BaseInput
        name="Yr_address"
        label="Юр. адрес"
        placeholder="000000, город"
      />
      <BaseInput
        name="address"
        label="Фактический адрес"
        placeholder="000000, город"
      />
      <BaseInput
        name="manager"
        label="Директор / Руководитель"
        placeholder="Иванов Иван Иванович"
      />
    </div>
    <div class="tw-flex tw-gap-5">
      <BaseButton
        theme="gray"
        paddingClasses="tw-px-4"
        @click="() => $emit('prev')"
      >
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
const emits = defineEmits<{
  (event: 'next'): void
  (event: 'prev'): void
}>()
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
