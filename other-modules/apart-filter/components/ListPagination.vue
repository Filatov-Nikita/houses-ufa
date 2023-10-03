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
      :class="{ 'pagination__page--active': meta.current_page === page }"
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
        @click="setPage(meta.last_page)"
      >
        {{ meta.last_page }}
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
  import { Meta } from '../store/filter-list/composables/useFlats';
  import { useFilterList } from '../store/filter-list';

  const props = defineProps<{
    meta: Meta
  }>();

  const meta = computed(() => props.meta);

  const {
    currentSection,
    prevPage,
    nextPage,
    showEndDots,
    showStartDots,
    showStart,
    showEnd,
    next,
    prev,
    setPage
  } = useFilterList().pagination;
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
