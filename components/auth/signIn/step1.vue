<template>
  <div class="tw-flex tw-justify-between tw-items-start tw-mb-8">
    <div>
      <h2 class="tw-text-h4 tw-mb-2">Вход</h2>
      <p class="tw-text-text02">Выберите роль</p>
    </div>
    <button
      class="tw-rounded-lg tw-p-3 tw-bg-base00 tw-w-fitt"
      @click="openPopup = false"
    >
      <BaseIcon name="close" class="tw-w-6 tw-h-6" />
    </button>
  </div>

  <form class="tw-grid tw-gap-8">
    <div class="tw-grid tw-grid-cols-2 tw-gap-4">
      <BaseRadioSlot
        v-for="item in roles"
        v-model="selectRole"
        :value="item.value"
        name="bank"
        v-slot="{ checked }"
      >
        <div
          class="tw-flex tw-justify-between tw-items-center tw-bg-base00 tw-rounded-lg tw-p-4"
        >
          <span class="tw-text-body_s -tw-tracking-875">
            {{ item.title }}
          </span>
          <div
            class="tw-w-5 tw-h-5 tw-rounded-full tw-border tw-border-border00 tw-bg-secondary transi tw-duration-100 tw-ease-in"
            :class="[checked ? ' tw-border-[6px] tw-border-primary' : '']"
          ></div>
        </div>
      </BaseRadioSlot>
    </div>
    <BaseButton
      :disabled="selectRole ? false : true"
      :theme="selectRole ? 'green' : 'gray'"
      @click="() => $emit('next')"
      >Далее</BaseButton
    >
    <!-- <SpinnerDotPulse /> -->
  </form>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
const emits = defineEmits<{
  (event: 'next'): void
}>()

const authStore = useAuthStore()
const { openPopup, selectRole } = storeToRefs(authStore)
const roles = [
  {
    title: 'Покупатель',
    value: 'buyer',
  },
  {
    title: 'Владелец',
    value: 'owner',
  },
  {
    title: 'Агентство',
    value: 'agency',
  },
  {
    title: 'Агент',
    value: 'agent',
  },
]
</script>
<style lang="scss" scoped></style>
