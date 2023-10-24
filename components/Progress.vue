<template>
  <div class="progress" :class="state">
    <div class="tw-flex tw-justify-between tw-py-2">
      <span class="progress__title tw-text-body_s2 -tw-tracking-875">
        {{ title }}
      </span>
      <BaseIcon name="check-line" class="progress__icon" />
    </div>
    <div
      class="progress__line tw-h-1 tw-rounded-lg tw-w-full tw-bg-primary"
    ></div>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    state?: 'not' | 'active' | 'success'
  }>(),
  {
    state: 'not',
  }
)
</script>
<style lang="scss" scoped>
.progress {
  &__title {
    @apply tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-transition-colors tw-duration-300 tw-ease-in;
  }
  &__icon {
    @apply tw-w-4 tw-h-4 tw-text-text02 tw-transition-colors tw-duration-300 tw-ease-in;
  }
  &__line {
    @apply tw-bg-base01 tw-relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 100%;

      @apply tw-bg-primary tw-transition-width tw-duration-300 tw-ease-in;
    }
  }
  &.active &__line,
  &.success &__line {
    &:before {
      width: 100%;
    }
  }
  &.active &__title {
    @apply tw-text-black;
  }
  &.active &__icon,
  &.success &__icon {
    @apply tw-text-primary;
  }
  &.success &__title {
    @apply tw-text-primary;
  }
}
</style>
