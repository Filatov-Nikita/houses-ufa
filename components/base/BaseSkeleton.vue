<template>
  <div
    :style="{ '--speed': speed }"
    class="base-skeleton"
    :class="{
      'base-skeleton--round': round,
      'base-skeleton--white': theme === 'white',
      'base-skeleton--gray': theme === 'gray',
    }"
  ></div>
</template>

<script setup lang="ts">
interface Props {
 round?: boolean,
 speed?: string,
 theme?: 'gray' | 'white',
}

withDefaults(
  defineProps<Props>(),
  {
    round: false,
    speed: '1.5s',
    theme: 'gray',
  }
);
</script>

<style scoped lang="scss">
  .base-skeleton {
    position: relative;
    overflow: hidden;

    &--round {
      border-radius: 50%;
    }

    &--gray {
      @apply tw-bg-base01;
    }

    &--white {
      @apply tw-bg-white;
    }

    &::after {
      content: '';
      animation: p-skeleton-animation var(--speed) infinite;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(-100%);
      z-index: 1;
      background: linear-gradient(90deg, rgba(200, 200, 200, 0), rgba(200, 200, 200, 0.4), rgba(200, 200, 200, 0));
    }
  }

  @keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
</style>
