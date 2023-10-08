<template>
  <ListPagination
    class="tw-justify-center"
    v-if="meta"
    :current-page="meta.current_page"
    :last-page="meta.last_page"
    :current-section="currentSection"
    :prev-page="prevPage"
    :next-page="nextPage"
    :show-end-dots="showEndDots"
    :show-start-dots="showStartDots"
    :show-start="showStart"
    :show-end="showEnd"
    @prev="prev"
    @next="next"
    @set-page="setPage"
  />
</template>

<script setup lang="ts">
  import ListPagination from '../ListPagination.vue';
  import { useFilterParking } from '../../store/filter-parking';
  const store = useFilterParking();

  const meta = computed(() => store.parkings?.meta);

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
  } = store.pagination;
</script>
