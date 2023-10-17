<template>
  <LoadMoreBtn
    v-if="!mainFilter.pag.isLast && mainFilter.meta"
    class="tw-mt-8"
    :total="mainFilter.meta?.total"
    :loaded="mainFilter.meta?.to"
    :loading="mainFilter.loadingNext"
    @click="mainFilter.next"
  />
</template>

<script setup lang="ts">
  import { useMainFilter } from '../store';

  const mainFilter = useMainFilter();
</script>
