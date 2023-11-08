<template>
  <article class="company-info-item">
    <h3 class="company-info-item__title">{{ title }}</h3>
    <p class="company-info-item__subtitle">{{ subtitle }}</p>
    <p class="company-info-item__text">{{ text }}</p>
  </article>
</template>

<script setup lang="ts">
  interface Props {
    title: string,
    subtitle: string,
    text: string,
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .company-info-item {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    &__title {
      font-size: 48px;
      line-height: 1.2;
      font-weight: 400;
      @apply tw-text-primary tw-font-freesetdemi;
    }

    &__subtitle {
      font-size: 24px;
      line-height: 1.3;
      @apply tw-text-primary;
    }

    &__text {
      margin-top: 48px;
      @apply tw-text-text02 tw-text-base;
    }
  }
</style>
