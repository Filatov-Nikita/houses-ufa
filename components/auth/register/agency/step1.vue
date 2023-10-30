<template>
  <Form @submit="register" v-slot="{ meta }" class="tw-grid tw-gap-8">
    <div class="tw-grid tw-gap-5 tw-grid-cols-2">
      <BaseSelect
        class="tw-col-span-2"
        label="Тип организации"
        name="typeOrg"
        :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
        v-model="typeApartment"
      />
      <BaseInput
        name="ogrn"
        label="ОГРН / ОГРНИП "
        placeholder="000000000000 / 00000000000000"
        class="tw-col-span-2"
      />
      <BaseInput name="inn" label="ИНН" placeholder="000000000" />
      <BaseInput name="kpp" label="КПП" placeholder="000000000" />
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
