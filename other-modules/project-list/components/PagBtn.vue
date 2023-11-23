<template>
  <LoadMoreBtn
    v-if="!store.pagination.isLast && store.projects?.meta"
    class="project-list-pag"
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

<style scoped lang="scss">
  .project-list-pag {
    margin-top: 32px;

    @include lg {
      margin-top: 24px;
    }
  }
</style>
