<template>
  <LoadMoreBtn
    v-if="!store.pagination.isLast && store.projects?.meta"
    class="tw-mt-8"
    :total="store.projects?.meta.total"
    :loaded="store.projects?.meta.to"
    :loading="store.loadingNext"
    @click="store.next"
  />
</template>

<script setup lang="ts">
  import { useProjectList } from '../store';

  const store = useProjectList();
</script>
