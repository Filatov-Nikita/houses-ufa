<template>
  <ReadmoreList :articles="store.articles" :loading="store.loading" />
</template>

<script setup lang="ts">
  import ReadmoreList from './components/ReadmoreList.vue';
  import { useArticlesReadMore } from './store';

  const props = defineProps<{ articleId: string }>();

  const store = useArticlesReadMore();

  useAsyncData(() => {
    store.setArticle(props.articleId);
    return store.show();
  });
</script>
