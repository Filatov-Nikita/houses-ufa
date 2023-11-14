<template>
  <div class="faq-section-list">
    <div
      class="faq-section-list__item"
      v-for="item in store.filtredSectionList"
      :key="item.id"
    >
      <button
        class="faq-section-list__btn"
        :class="{ 'faq-section-list__btn--active': item.id === store.currentSectionId }"
        @click="store.setCurrentSectionId(item.id)"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useFaq } from '../store';

  const store = useFaq();
</script>

<style scoped lang="scss">
  .faq-section-list {
    &__item {
      & + & {
        margin-top: 24px;
      }
    }

    &__btn {
      display: inline-block;
      @apply tw-text-text02 tw-text-lg;

      &--active {
        @apply tw-text-primary;
      }
    }
  }
</style>
