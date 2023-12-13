<template>
  <Form @submit="register" v-slot="{ meta }" class="tw-grid tw-gap-8">
    <div class="tw-grid tw-gap-5">
      <BaseInput
        rules="required"
        name="yr_name"
        label="Название агенства"
        v-model="form.legal_entity_name"
      />
      <BaseInput
        rules="required"
        name="Yr_address"
        label="Юр. адрес"
        v-model="form.address_legal"
      />
      <BaseInput
        rules="required"
        name="address"
        label="Фактический адрес"
        v-model="form.address_actual"
      />
      <BaseInput
        rules="required"
        name="manager"
        label="Директор / Руководитель"
        placeholder="Иванов Иван Иванович"
        v-model="form.director_full_name"
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
const { selectRole } = storeToRefs(authStore)
const emits = defineEmits<{
  (event: 'next'): void
  (event: 'prev'): void
}>()

const form = authStore.agencyStore.form;

const register = () => {
  emits('next')
}
</script>
<style lang="scss" scoped></style>
