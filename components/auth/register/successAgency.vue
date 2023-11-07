<template>
  <div class="tw-grid tw-justify-items-center tw-text-center tw-mb-6">
    <div class="tw-bg-base00 tw-rounded-lg tw-p-3 tw-w-fit tw-mb-6">
      <BaseIcon name="check" class="tw-w-8 tw-h-8 tw-text-primary" />
    </div>
    <div class="tw-text-h5 tw-mb-4">Успешная регистрация</div>
    <div class="tw-text-text02">
      Менеджер скоро свяжется с вами для уточнения деталей
    </div>
  </div>
  <BaseButton theme="gray" class="tw-w-full" @click="openPopup = false">
    Хорошо
  </BaseButton>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const { openPopup } = storeToRefs(authStore)
watch(openPopup, (val) => {
  authStore.signIn()
})
</script>
