<template>
  <div class="town-materials-card">
    <h3 class="town-materials-card__title">{{ title }}</h3>
    <p class="town-materials-card__text">{{ text }}</p>
    <p class="town-materials-card__comment">{{ comment }}</p>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string,
    text: string,
    comment: string,
  }>();
</script>

<style scoped lang="scss">
  .town-materials-card {
    padding: 24px;
    border-radius: 16px;
    @apply tw-bg-white;

    @include md {
      padding: 16px;
    }

    &__title {
      margin-bottom: 12px;
      @apply tw-text-2xl tw-text-text00;
    }

    &__text {
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 24px;
      @apply tw-text-text01;
    }

    &__comment {
      @apply tw-text-text02 tw-text-xs;
    }
  }
</style>
