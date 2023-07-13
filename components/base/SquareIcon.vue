<template>
  <div
    class="tw-bg-secondary tw-w-12 tw-h-12 tw-rounded-lg tw-grid tw-place-content-center tw-p-2"
  >
    <img :src="src" :alt="alt" :width="width" :height="height" />
  </div>
</template>
<script setup lang="ts">
const iconProps = defineProps<{
  src: string
  alt?: string
  width?: string
  height?: string
}>()
</script>
<style lang="scss" scoped></style>
