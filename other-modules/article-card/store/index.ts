import type { ArticleOneResponse } from '@/types/articles';
import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

const useArticleCard = defineStore('articleCard', () => {
  const articleId = ref<string | null>(null);
  const url = computed(() => `press-center/articles/${articleId.value}`);

  const { data: article, pending: loading, error, execute: show } = useDataFetch<ArticleOneResponse>(url, {
    immediate: false,
    watch: false,
  });

  function setArticleId(id: string | null) {
    articleId.value = id;
  }

  return {
    articleId,
    article,
    loading,
    show,
    setArticleId
  }
});

export { useArticleCard };
