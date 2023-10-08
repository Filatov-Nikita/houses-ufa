<template>
  <div class="pagination">
    <button
      :class="{ 'tw-invisible': prevPage === null }"
      class="pagination__prev"
      type="button"
      @click="prev"
    >
      <BaseIcon class="tw-w-full tw-h-full" name="back" />
    </button>
    <template v-if="showStart">
      <button
        type="button"
        class="pagination__page"
        @click="setPage(1)"
      >
        1
      </button>
      <div v-if="showStartDots">
        ...
      </div>
    </template>
    <button
      type="button"
      class="pagination__page"
      :class="{ 'pagination__page--active': currentPage === page }"
      v-for="page in currentSection"
      @click="setPage(page)"
    >
      {{ page }}
    </button>
    <template v-if="showEnd">
      <div v-if="showEndDots">
        ...
      </div>
      <button
        type="button"
        class="pagination__page"
        @click="setPage(lastPage)"
      >
        {{ lastPage }}
      </button>
    </template>
    <button
      :class="{ 'tw-invisible': nextPage === null }"
      class="pagination__next"
      type="button"
      @click="next"
    >
      <BaseIcon class="tw-w-full tw-h-full" name="forward" />
    </button>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    currentPage: number,
    lastPage: number,
    currentSection: number[],
    prevPage: number | null,
    nextPage: number | null,
    showEndDots: boolean,
    showStartDots: boolean,
    showStart: boolean,
    showEnd: boolean,
  }>();

  const emit = defineEmits<{
    (event: 'prev'): void
    (event: 'next'): void,
    (event: 'setPage', page: number): void,
  }>();

  function setPage(page: number) {
    emit('setPage', page);
  }

  function prev() {
    emit('prev');
  }

  function next() {
    emit('next');
  }
</script>
<style scoped lang="scss">
.pagination {
  display: flex;
  gap: 8px;

  &__prev, &__next, &__page {
    width: 32px;
    height: 32px;
    border-radius: 8px;

    &:hover {
      @apply tw-bg-secondary;
    }

    &:active {
      @apply tw-bg-secondary-hover;
    }
  }

  &__prev, &__next {
    padding: 8px;
  }

  &__page {
    font-size: 14px;
    line-height: 24px;
    @apply tw-text-text00;

    &--active {
      pointer-events: none;
      @apply tw-bg-secondary;
    }
  }
}
</style>
