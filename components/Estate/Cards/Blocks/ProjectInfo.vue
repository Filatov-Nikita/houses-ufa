<template>
  <div class="estate-project-info">
    <div class="estate-project-info__title">{{ typeTitle }}</div>
    <div class="estate-project-info__square">{{ square }} м²</div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    typeTitle: string,
    square: string
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .estate-project-info {
    padding-top: 24px;

    &__title {
      margin-bottom: 8px;
      @apply tw-text-text02 tw-text-base;
    }

    &__square {
      @apply tw-text-2xl tw-text-text00;
    }
  }
</style>
