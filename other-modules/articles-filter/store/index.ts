import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';
import { useSeqPagination } from './composables/useSeqPagination';

const useArticlesFilter = defineStore('articlesFilter', () => {
  type Type = 'tiding' | 'mass_media';
  type Params = {
    date: string | null,
  };

  const currentTab = ref<Type>('tiding');
  const page = ref(1);

  const params: Params = reactive(initParams());

  function initParams(): Params {
    return {
      date: null,
    }
  }

  const query = computed(() => {
    const filter = Object.fromEntries(
      Object.entries(params).filter(param => param[1] !== null)
    );
    return Object.assign({ type: currentTab.value, page: page.value }, filter);
  });

  const { data: articles, pending: loading, error } = useDataFetch<ArticlesResponse>('press-center/articles', {
    query,
  });

  const meta = computed(() => articles.value?.meta ?? null);

  const pagination = useSeqPagination(page, meta);

  watch([ currentTab, params ], () => pagination.setPage(1));

  return {
    articles,
    loading,
    params,
    currentTab,
    pagination
  }
});

export interface ArticlesResponse {
  data:  Article[];
  links: Links;
  meta:  Meta;
}

export interface Article {
  id:           number;
  body:         string;
  published_at: string | null;
  source_url:   string;
  title:        string;
  type:         string;
  seo:          SEO;
}

export interface SEO {
  description: string;
  key_words:   string;
  title:       string;
}

export interface Links {
  first: string;
  last:  string;
  prev:  string;
  next:  string;
}

export interface Meta {
  current_page: number;
  from:         number;
  last_page:    number;
  links:        Link[];
  path:         string;
  per_page:     number;
  to:           number;
  total:        number;
}

export interface Link {
  url:    string;
  label:  string;
  active: boolean;
}

export { useArticlesFilter };
