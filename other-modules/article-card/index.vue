<template>
  <Header :date="date" :title="title" :loading="loading" />
  <Content :loading="loading" :body="body" :img="img" :sourceUrl="sourceUrl" />
</template>

<script setup lang="ts">
  import Header from './components/Header.vue';
  import Content from './components/Content.vue';
  import { useArticleCard } from './store';

  const props = defineProps<{
    articleId: number
  }>();

  const articleCard = useArticleCard();
  const article = computed(() => articleCard.article);
  const loading = computed(() => articleCard.loading);
  const title = computed(() => article.value?.data.title ?? null);
  const date = computed(() => article.value?.data.published_at ?? null);
  const img = computed(() => article.value?.data.image ?? null);
  const body = computed(() => article.value?.data.body ?? null);
  const sourceUrl = computed(() => article.value?.data.source_url ?? null);

  await useAsyncData(() => {
    articleCard.setArticleId(props.articleId);
    return articleCard.show()
  });

  useSeoMeta({
    title: () => article.value?.data.title ?? null,
    description: () => article.value?.data.seo.description,
    keywords: () => article.value?.data.seo.key_words,
  });
</script>
