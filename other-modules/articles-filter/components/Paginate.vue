<template>
  <LoadMoreBtn
    v-if="!pagination.isLast && meta"
    :total="meta.total"
    :loaded="meta.to"
    :loading="filter.loadingNext"
    @click="filter.next"
  />
</template>

<script setup lang="ts">
  import LoadMoreBtn from '@/components/LoadMoreBtn.vue';
  import { useArticlesFilter } from '../store';

  const filter = useArticlesFilter();
  const pagination = filter.pagination;
  const meta = computed(() => filter.articles?.meta ?? null)
</script>
