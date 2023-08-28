<template>
  <div class="group" :class="{ group__border: borderBottom }">
    <div class="group__title">{{ title }}</div>
    <section class="group__section">
      <div
        class="item"
        v-for="(item, index) in dataList"
        :key="`${title}_${index}`"
      >
        <div v-if="finishing" :class="{ finishing: finishing }">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 1.5H4.5C3.83696 1.5 3.20107 1.76339 2.73223 2.23223C2.26339 2.70107 2 3.33696 2 4V8.5C2 8.89782 2.15804 9.27936 2.43934 9.56066C2.72064 9.84196 3.10218 10 3.5 10H6.5L6.00688 12.9169C6.00239 12.9444 6.00009 12.9722 6 13C6 13.5304 6.21071 14.0391 6.58579 14.4142C6.96086 14.7893 7.46957 15 8 15C8.53043 15 9.03914 14.7893 9.41421 14.4142C9.78929 14.0391 10 13.5304 10 13C9.99991 12.9722 9.99761 12.9444 9.99312 12.9169L9.5 10H12.5C12.8978 10 13.2794 9.84196 13.5607 9.56066C13.842 9.27936 14 8.89782 14 8.5V2C14 1.86739 13.9473 1.74021 13.8536 1.64645C13.7598 1.55268 13.6326 1.5 13.5 1.5ZM4.5 2.5H11V5C11 5.13261 11.0527 5.25979 11.1464 5.35355C11.2402 5.44732 11.3674 5.5 11.5 5.5C11.6326 5.5 11.7598 5.44732 11.8536 5.35355C11.9473 5.25979 12 5.13261 12 5V2.5H13V6.5H3V4C3 3.60218 3.15804 3.22064 3.43934 2.93934C3.72064 2.65804 4.10218 2.5 4.5 2.5ZM12.5 9H9.5C9.35674 9 9.21515 9.03077 9.08482 9.09025C8.95449 9.14972 8.83846 9.23651 8.74459 9.34472C8.65071 9.45294 8.58118 9.58006 8.54071 9.71749C8.50024 9.85491 8.48976 9.99943 8.51 10.1412V10.1538L9 13.0375C9 13.3027 8.89464 13.5571 8.70711 13.7446C8.51957 13.9321 8.26522 14.0375 8 14.0375C7.73478 14.0375 7.48043 13.9321 7.29289 13.7446C7.10536 13.5571 7 13.3027 7 13.0375L7.4875 10.1538V10.1412C7.50771 9.99963 7.49729 9.85533 7.45697 9.71809C7.41664 9.58084 7.34734 9.45384 7.25373 9.34567C7.16013 9.23749 7.04441 9.15066 6.91438 9.09103C6.78436 9.03139 6.64305 9.00035 6.5 9H3.5C3.36739 9 3.24021 8.94732 3.14645 8.85355C3.05268 8.75979 3 8.63261 3 8.5V7.5H13V8.5C13 8.63261 12.9473 8.75979 12.8536 8.85355C12.7598 8.94732 12.6326 9 12.5 9Z"
              fill="#4FBA78"
            />
          </svg>
          {{ item }}
        </div>
        <template v-else>
          {{ item }}
        </template>
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
      width: calc(25% - 1.25rem);

      .finishing {
        @apply tw-bg-base00 tw-flex tw-items-center tw-gap-2 tw-px-2 tw-py-0.5 tw-rounded-lg tw-w-fit tw-text-body_s;
      }
    }
  }
}
</style>
