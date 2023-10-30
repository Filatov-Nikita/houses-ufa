<template>
  <div class="tw-flex tw-justify-between tw-items-start tw-mb-8">
    <div>
      <h2 class="tw-text-h4 tw-mb-2">Личный кабинет</h2>
      <p class="tw-text-text02 tw-text-body_s2 -tw-tracking-875">
        Мы отправили сообщение на номер
        <br />
        <span class="tw-text-text00"> +7 (999) 999-99-99 </span>
      </p>
    </div>
    <button
      class="tw-rounded-lg tw-p-3 tw-bg-base00 tw-w-fitt"
      @click="openPopup = false"
    >
      <BaseIcon name="close" class="tw-w-6 tw-h-6" />
    </button>
  </div>
  <Form class="tw-grid tw-gap-8" @submit="verifiedPhone" v-slot="{ meta }">
    <BaseInputCode name="kod" class="tw-justify-center" @filled="filled" />
    <div class="tw-flex tw-gap-5">
      <BaseButton
        theme="gray"
        paddingClasses="tw-px-4"
        @click="() => $emit('prev')"
      >
        Назад
      </BaseButton>
      <BaseButton
        v-if="seconds"
        class="tw-grow"
        :disabled="!meta.valid"
        :theme="!meta.valid ? 'gray' : 'green'"
        type="submit"
      >
        {{
          meta.valid
            ? 'Проверить код'
            : `Запросить код через 00:
          ${seconds < 10 ? '0' + seconds : seconds}`
        }}
      </BaseButton>
      <BaseButton v-else class="tw-w-full" @click="requestCode">
        Запросить код
      </BaseButton>
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
const verifiedPhone = () => {}
const seconds = ref('59')
let ticker
const tick = () => {
  seconds.value--
}
const start = () => {
  ticker = setInterval(() => {
    tick()
  }, 1000)
}

const stop = () => {
  clearInterval(ticker)
}
const requestCode = () => {
  seconds.value = '59'
  start()
}

const filled = () => {
  authStore.toRegister()
  console.log('teds')
}
onMounted(() => start())

watch(seconds, (newVal) => {
  if (newVal < 1) {
    stop()
  }
})
</script>
<style lang="scss" scoped></style>
