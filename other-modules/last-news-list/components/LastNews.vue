<template>
  <LastNewsList :loading="store.loading" :news="store.lastNews" />
</template>

<script setup lang="ts">
  import LastNewsList from './ListItems.vue';
  import { useLastNewsListStore } from '../store';

  const store = useLastNewsListStore();
</script>
