<template>
  <div class="storey-list">
    <p class="storey-list__title">Этаж</p>
    <div class="storey-list__wrap">
      <button
        class="storey-num-block"
        :class="{ 'storey-num-block--active': floor.id === storeyId }"
        v-for="floor in floors"
        :key="floor.id"
        :disabled="floor.flats_free_count === 0"
        @click="changeStorey(floor)"
      >
        <span class="storey-num-block__count">{{ floor.flats_free_count }}</span>
        <span>{{ floor.number }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Floor } from './types/entrance';

  defineProps<{
    floors: Floor[],
    storeyId: number | null,
  }>();

  const emit = defineEmits<{
    (event: 'update:storeyId', id: number | null): void,
  }>();

  function changeStorey(floor: Floor) {
    emit('update:storeyId', floor.id);
  }
</script>

<style scoped lang="scss">
  .storey-list {
    max-width: 112px;
    margin: 0 auto;

    @include md {
      max-width: 100%;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    &__title {
      margin-bottom: 12px;
      @apply tw-text-text02 tw-text-base tw-text-center;
    }
  }

  .storey-num-block {
    border-radius: 8px;
    width: 48px;
    height: 48px;
    line-height: 48px;
    font-style: 16px;
    position: relative;
    @apply tw-bg-secondary tw-text-center tw-text-text00;

    &:disabled {
      @apply tw-text-text03;
    }

    &:disabled &__count {
      display: none;
    }

    &__count {
      position: absolute;
      right: -4px;
      top: -4px;
      width: 20px;
      height: 20px;
      line-height: 20px;
      border-radius: 50%;
      font-size: 12px;
      @apply tw-bg-primary tw-text-white tw-text-center;
    }

    &--active {
      pointer-events: none;
      @apply tw-bg-primary tw-text-white;
    }

    &--active &__count {
      @apply tw-bg-white tw-text-primary;
    }
  }
</style>
