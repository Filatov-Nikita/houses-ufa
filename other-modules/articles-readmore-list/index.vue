<template>
  <ReadmoreList :articles="store.articles" :loading="store.loading" />
</template>

<script setup lang="ts">
  import ReadmoreList from './components/ReadmoreList.vue';
  import { useArticlesReadMore } from './store';

  const props = defineProps<{ articleId: number }>();

  const store = useArticlesReadMore();

  watch(() => props.articleId, (id) => {
    store.setArticle(id);
  }, { immediate: true });
</script>
