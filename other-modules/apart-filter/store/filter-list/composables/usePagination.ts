import type { Meta } from './useFlats';

function usePagination<T extends Ref<{ meta: Meta } | null>>(data: T, page: Ref<number>, pagLen = 3) {
  const isLast = computed<boolean>(() => data.value?.meta.current_page === data.value?.meta.last_page);
  const isFirst = computed<boolean>(() => data.value?.meta.current_page === 1);

  const prevPage = computed<number | null>(() => {
    if(isFirst.value || !data.value) return null;
    return data.value.meta.current_page - 1;
  });

  const nextPage = computed<number | null>(() => {
    if(isLast.value || !data.value) return null;
    return data.value.meta.current_page + 1;
  });

  const pagesList = computed<number[]>(() => {
    if(!data.value) return [];

    const pages: number[] = [];

    for(let i = 1; i <= data.value?.meta.last_page; i++) {
      pages.push(i);
    }

    return pages;
  });

  const currentSection = computed<number[]>(() => {
    if(!data.value) return [];

    if(pagesList.value.length < pagLen) return pagesList.value;

    let startIndex = data.value?.meta.current_page > 1
    ? data.value?.meta.current_page - 2
    : data.value?.meta.current_page - 1;

    let endIndex = startIndex + pagLen;
    let slice = pagesList.value.slice(startIndex, endIndex);

    if(slice.length < pagLen) {
      const last = slice[slice.length - 1];
      slice = Array(pagLen).fill(0).map((_, i) => last - i).reverse();
    }

    return slice;
  });

  const lastSec = computed<number[]>(() => {
    if(!data.value) return [];
    return pagesList.value.slice(pagLen * -1);
  });

  const firstSec = computed<number[]>(() => {
    if(!data.value) return [];
    return pagesList.value.slice(0, pagLen);
  });

  const showEnd = computed<boolean>(() => {
    if(!data.value) return false;
    return currentSection.value.join('') !== lastSec.value.join('');
  });

  const showStart = computed<boolean>(() => {
    if(!data.value) return false;
    return currentSection.value.join('') !== firstSec.value.join('');
  });

  const showEndDots = computed<boolean>(() => {
    if(!data.value) return false;
    return currentSection.value[currentSection.value.length - 1] !== data.value?.meta.last_page - 1;
  });

  const showStartDots = computed<boolean>(() => {
    if(!data.value) return false;
    return currentSection.value[0] !== 2;
  });

  function next(): void {
    if(nextPage.value) page.value = nextPage.value;
  }

  function prev(): void {
    if(prevPage.value) page.value = prevPage.value;
  }

  function setPage(pageNumber: number): void {
    if(!data.value) return;
    if(pageNumber > data.value.meta.last_page || pageNumber < 1) return;
    page.value = pageNumber;
  }

  return {
    isLast,
    prevPage,
    nextPage,
    currentSection,
    showStart,
    showEnd,
    showEndDots,
    showStartDots,
    prev,
    next,
    setPage
  }
}

export { usePagination };
