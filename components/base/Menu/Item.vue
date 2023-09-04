<template>
  <component :is="tag" class="base-menu-item">
    <div class="base-menu-item__icon">
      <BaseIcon class="tw-w-full tw-h-full" :name="icon" />
    </div>
    <div class="base-menu-item__label">{{ label }}</div>
  </component>
</template>

<script setup lang="ts">
  interface Props {
    tag?: string,
    icon: string,
    label: string
  }

  withDefaults(defineProps<Props>(), {
    tag: 'button',
  });
</script>

<style scoped lang="scss">
  .base-menu-item {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 8px 16px;
    transition: background-color 0.3s;
    border-radius: 8px;

    &__icon {
      width: 24px;
      height: 24px;
      @apply tw-text-icon;
    }

    &__label {
      letter-spacing: -0.14px;
      @apply tw-text-text00 tw-text-sm;
    }

    &:hover {
      @apply tw-bg-base00;
    }
  }
</style>
