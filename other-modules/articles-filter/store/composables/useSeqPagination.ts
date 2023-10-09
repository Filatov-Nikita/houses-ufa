import type { Meta } from '../index';

const useSeqPagination = function (page: Ref<number>, meta: Ref<Meta | null>) {
  const isLast = computed<boolean>(() => meta.value?.current_page === meta.value?.last_page);
  const isFirst = computed<boolean>(() => meta.value?.current_page === 1);

  const prevPage = computed<number | null>(() => {
    if(isFirst.value || !meta.value) return null;
    return meta.value.current_page - 1;
  });

  const nextPage = computed<number | null>(() => {
    if(isLast.value || !meta.value) return null;
    return meta.value.current_page + 1;
  });

  function next(): void {
    if(nextPage.value) page.value = nextPage.value;
  }

  function setPage(i: number) {
    page.value = i;
  }

  return {
    prevPage,
    nextPage,
    isFirst,
    isLast,
    setPage,
    next,
  }
};

export { useSeqPagination };
