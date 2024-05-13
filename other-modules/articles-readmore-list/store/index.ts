import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

const useArticlesReadMore = defineStore('articlesReadMore', () => {
  const articleId = ref<string | null>(null);

  const url = computed(() => `press-center/articles/${articleId.value}/read-more`);

  const { data: articles, pending: loading, error, execute: show } = useDataFetch<ArticlesResponse>(url, {
    immediate: false,
    watch: false
  });

  function setArticle(id: string | null) {
    articleId.value = id;
  }

  return {
    articles,
    loading,
    articleId,
    setArticle,
    show
  }
});

export { useArticlesReadMore };

export interface ArticlesResponse {
  data: Article[];
}

export interface Article {
  id:           number;
  body:         string;
  published_at: string | null;
  source_url:   string;
  title:        string;
  type:         string;
  seo:          SEO;
  likes_count:  number;
  image:        Image;
  slug:         string;
}

export interface Image {
  id:            number;
  height:        number;
  path:          string;
  size_in_bytes: number;
  width:         number;
}

export interface SEO {
  description: string;
  key_words:   string;
  title:       string;
}
