<template>
  <button type="button" class="estate-action-btn" :class="`estate-action-btn--${theme}`">
    <BaseIcon :name="icon" />
  </button>
</template>

<script setup lang="ts">
  interface Props { theme: 'white' | 'gray', icon: string }

  withDefaults(defineProps<Props>(), { theme: 'gray' });
</script>
<style scoped lang="scss">
  .estate-action-btn {
    border-radius: 8px;
    padding: 8px;
    width: 40px;
    height: 40px;

    &--gray {
      @apply tw-bg-base00;
    }

    &--white {
      @apply tw-bg-white;
    }

    &:hover {
      @apply tw-bg-secondary-hover;
    }

    &:active {
      @apply tw-bg-secondary-press;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }
</style>
