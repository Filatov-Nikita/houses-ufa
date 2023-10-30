<template>
  <div class="tw-mb-8">
    <div class="tw-flex tw-justify-between tw-items-start tw-mb-4">
      <div>
        <h2 class="tw-text-h4 tw-mb-2">Регистрация</h2>
        <p class="tw-text-text02">Заполните данные об агентстве</p>
      </div>
      <button
        class="tw-rounded-lg tw-p-3 tw-bg-base00 tw-w-fitt"
        @click="openPopup = false"
      >
        <BaseIcon name="close" class="tw-w-6 tw-h-6" />
      </button>
    </div>
    <div class="tw-flex tw-gap-4">
      <ProgressLine
        v-for="(_, index) in lengthSteps"
        :class="{ active: index === currentStep || currentStep > index }"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
const props = defineProps<{
  lengthSteps: number
  currentStep: number | string
}>()
const authStore = useAuthStore()
const { openPopup } = storeToRefs(authStore)
</script>
<style lang="scss" scoped></style>
