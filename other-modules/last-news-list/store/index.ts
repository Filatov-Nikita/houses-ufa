import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

const useLastNewsListStore = defineStore('lastNewsListStore', () => {
  const { data: lastNews, pending: loading, error } = useDataFetch<ArticlesResponse>('/press-center/articles', {
    query: { per_page: 3, type: 'tiding' },
  });

  return {
    lastNews,
    loading,
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
  likes_count:  number;
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

export { useLastNewsListStore };
