<template>
  <div class="stat-item" :class="classes">
    <p class="stat-item__label">{{ label }}</p>
    <p class="stat-item__value">{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      label: string,
      value?: string | number,
      theme?: 'green' | 'gray',
    }>(),
    { theme: 'gray' },
  );


  const classes = computed(() => {
    return {
      'stat-item--green': props.theme === 'green',
      'stat-item--gray': props.theme === 'gray',
    }
  });
</script>

<style scoped lang="scss">
  .stat-item {
    border-radius: 16px;
    padding: 16px 24px;

    &--green {
      @apply tw-bg-primary tw-text-white;
    }

    &--gray {
      @apply tw-bg-base00 tw-text-text00;
    }

    &--green &__label {
      @apply tw-text-white;
    }

    &--gray &__label {
      @apply tw-text-text02;
    }

    &__label {
      margin-bottom: 8px;
      @apply tw-text-sm;
    }

    &__value {
      font-size: 40px;
      line-height: 1.4;
    }
  }
</style>
