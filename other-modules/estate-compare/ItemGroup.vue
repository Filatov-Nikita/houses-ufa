<template>
  <div class="group" :class="{ group__border: borderBottom }">
    <div class="group__title">{{ title }}</div>
    <section class="group__section">
      <div
        class="item"
        v-for="(item, index) in dataList"
        :key="`${title}_${index}`"
      >
        <slot name="item" :item="item">
          {{ item }}
        </slot>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { group } from 'console'

const itemGroupProps = withDefaults(
  defineProps<{
    title: string
    dataList: Array<number | string>
    borderBottom?: boolean
    finishing?: boolean
  }>(),
  {
    borderBottom: false,
    finishing: false,
  }
)
</script>
<style lang="scss" scoped>
.group {
  @apply tw-grid tw-gap-3 tw-py-4;
  &__border {
    @apply tw-border-b tw-border-border00;
  }
  &__title {
    @apply tw-text-text02 tw-text-body_xs lg:tw-text-body_s2;
  }
  &__section {
    @apply tw-grid tw-grid-cols-2 tw-gap-4 lg:tw-flex lg:tw-flex-wrap tw-overflow-hidden lg:tw-gap-5 lg:tw-justify-between tw-text-body_m;

    .item {
      @screen lg {
        width: calc(33% - 1.25rem);
      }
      @screen xl {
        width: calc(25% - 1.25rem);
      }
      width: calc(100% - 1.25rem);

      .finishing {
        @apply tw-bg-base00 tw-flex tw-items-center tw-gap-2 tw-px-2 tw-py-0.5 tw-rounded-lg tw-w-fit tw-text-body_s;
      }
    }
  }
}
</style>
