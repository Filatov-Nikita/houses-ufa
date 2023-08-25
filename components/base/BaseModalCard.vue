<template>
  <div
    class="card"
    :class="[{ card__full: isFull }, { 'card__full-mob': isFullMob }]"
  >
    <div class="card__wrapper">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    hide: Function
    isFull?: boolean
    isFullMob?: boolean
  }>(),
  {
    isFull: false,
    isFullMob: false,
  }
)
</script>
<style lang="scss" scoped>
.card {
  @apply tw-bg-white tw-p-4 tw-py-6 lg:tw-p-12 tw-rounded-2xl tw-w-full lg:tw-w-[668px] tw-overflow-hidden;
  &__wrapper {
    @apply tw-relative tw-h-full;
  }
  max-width: 1960px;
  &__full-mob {
    @media screen and (max-width: 1023px) {
      @apply tw-rounded-t-2xl tw-rounded-b-none tw-bg-base00 tw-px-4 tw-py-2 tw-pb-0;
    }
  }
  &__full {
    @apply lg:tw-h-full lg:tw-w-full lg:tw-px-6 lg:tw-py-7 xl:tw-px-10 xl:tw-py-11;
  }
}
</style>
