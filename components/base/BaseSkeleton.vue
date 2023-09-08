<template>
  <div :style="{ '--speed': speed }" class="base-skeleton" :class="{ 'base-skeleton--round': round }"></div>
</template>

<script setup lang="ts">
interface Props {
 round?: boolean,
 speed?: string
}

withDefaults(
  defineProps<Props>(),
  {
    round: false,
    speed: '1.5s'
  }
);
</script>

<style scoped lang="scss">
  .base-skeleton {
    position: relative;
    overflow: hidden;
    @apply tw-bg-base01;

    &--round {
      border-radius: 50%;
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
