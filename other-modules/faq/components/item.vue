<template>
  <AccordionMain
    class="tw-bg-white tw-py-6 tw-px-4 tw-rounded-2xl"
    icons-class="tw-h-10 tw-w-10 tw-rounded-lg tw-grid tw-place-content-center tw-bg-secondary"
  >
    <template #title>{{ question }}</template>

    <template #content>
      <div class="tw-mt-4 tw-text-text01 lg:tw-text-body_m2">
        {{ answer }}
      </div>
    </template>
  </AccordionMain>
</template>
<script lang="ts" setup>
interface Props {
  id: number
  question: string
  priority: number
  answer: string
}
const props = defineProps<Props>()
</script>
<style lang="scss" scoped></style>
