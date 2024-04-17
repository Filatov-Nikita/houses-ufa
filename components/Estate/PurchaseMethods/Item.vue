<template>
  <component :is="tag ?? 'article'" class="buy-item">
    <div class="buy-item__icon">
      <BaseIcon class="buy-item__svg" :name="icon" />
    </div>
    <div class="buy-item__right">
      <h3 class="buy-item__title">{{ title }}</h3>
      <p class="buy-item__text">{{ text }}</p>
    </div>
  </component>
</template>

<script setup lang="ts">
  interface Props {
    title: string,
    text: string,
    icon: string,
    tag?: string | object,
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .buy-item {
    padding: 24px;
    border-radius: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    @apply tw-bg-white tw-text-left;

    &__title {
      margin-bottom: 16px;
      @apply tw-text-text00 tw-text-xl;
    }

    &__text {
      @apply tw-text-text01 tw-text-base;
    }

    &__icon {
      border-radius: 8px;
      padding: 8px;
      width: 48px;
      height: 48px;
      @apply tw-bg-base00 tw-text-primary;
    }

    &__svg {
      width: 100%;
      height: 100%;
    }

    &__right {
      flex-basis: 280px;
      flex-grow: 1;
    }
  }
</style>
