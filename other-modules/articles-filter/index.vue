<template>
  <div class="articles-filter">
    <Toolbar class="articles-filter__toolbar" />
    <ListItems :loading="loading" :articles="articles" />
  </div>
</template>

<script setup lang="ts">
  import Toolbar from './components/Toolbar.vue';
  import ListItems from './components/ListItems.vue';
  import { useArticlesFilter, type Type } from './store';
  import { useRoute, useRouter } from 'vue-router';

  const filter = useArticlesFilter();
  const route = useRoute();
  const router = useRouter();

  const loading = computed(() => filter.loading);
  const articles = computed(() => filter.articles);

  watch(() => route.query, (query) => {
    if(query.type !== filter.currentTab) {
      filter.currentTab = (query.type ?? 'tiding') as Type;
    }
  }, { immediate: true });

  watch(() => filter.currentTab, (type) => {
    if(type !== route.query.type) {
      router.replace({ query: { type } });
    }
  }, { immediate: true });

  await useAsyncData(() => filter.show());
</script>

<style scoped lang="scss">
  .articles-filter {
    &__toolbar {
      margin-bottom: 32px;

      @include lg {
        margin-bottom: 24px;
      }
    }
  }
</style>
