import type { ArticleListItem } from '@/types/articles';
import { defineStore } from 'pinia';
import { useSeqDataFetch } from '@/composables/useSeqDataFetch';

export type Type = 'tiding' | 'mass_media' | 'useful';

const useArticlesFilter = defineStore('articlesFilter', () => {
  type Params = {
    year_eq: string | null,
  };

  const currentTab = ref<Type>('tiding');
  const params: Params = reactive(initParams());

  function initParams(): Params {
    return {
      year_eq: null,
    }
  }

  const query = computed(() => {
    const filter = Object.fromEntries(
      Object.entries(params).filter(param => param[1] !== null)
    );
    return Object.assign({ type: currentTab.value }, filter);
  });

  const { response: articles, pagination, loadingNext, next } = useSeqDataFetch<ArticleListItem>('press-center/articles', {
    query,
  });

  watch([ currentTab, params ], () => {
    pagination.setPage(1);
    articles.execute();
  });

  return {
    articles: articles.data,
    loading: articles.pending,
    loadingNext,
    params,
    currentTab,
    pagination,
    next,
    show: articles.execute,
  }
});

export { useArticlesFilter };
