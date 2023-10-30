<template>
  <div class="tw-flex tw-justify-between tw-items-start tw-mb-8">
    <div>
      <h2 class="tw-text-h4 tw-mb-2">Личный кабинет</h2>
      <p class="tw-text-text02">
        Введите номер телефона, чтобы войти <br />
        или зарегистрироваться в личном кабинете
      </p>
    </div>
    <button
      class="tw-rounded-lg tw-p-3 tw-bg-base00 tw-w-fitt"
      @click="openPopup = false"
    >
      <BaseIcon name="close" class="tw-w-6 tw-h-6" />
    </button>
  </div>

  <Form class="tw-grid tw-gap-8" @submit="signIn" v-slot="{ meta }">
    <BaseInput
      rules="required"
      name="phone"
      label="Телефон"
      placeholder="+7 (999) 999 99-99"
    />
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
        >Зарегистрироваться</BaseButton
      >
    </div>
    <!-- <SpinnerDotPulse /> -->
  </Form>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
import { Form } from 'vee-validate'
const emits = defineEmits<{
  (event: 'next'): void
  (event: 'prev'): void
}>()
const authStore = useAuthStore()
const { openPopup } = storeToRefs(authStore)
const signIn = (value: { phone: string }, { resetForm }: any) => {
  authStore.signIn(value)
  emits('next')
}
</script>
<style lang="scss" scoped></style>
