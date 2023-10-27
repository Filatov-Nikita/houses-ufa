<template>
  <div>
    <Toolbar class="tw-mb-8" />
    <ListItems :loading="loading" :articles="articles" />
  </div>
</template>

<script setup lang="ts">
  import Toolbar from './components/Toolbar.vue';
  import ListItems from './components/ListItems.vue';
  import { useArticlesFilter } from './store';

  const filter = useArticlesFilter();

  const loading = computed(() => filter.loading);
  const articles = computed(() => filter.articles);

  await useAsyncData(() => filter.show());
</script>
