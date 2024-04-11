import type { Response, Meta } from '@/types/response';
import type { UseFetchOptions } from 'nuxt/app';
import { useDataFetch } from './useDataFetch';
import { useSeqPagination } from './useSeqPagination';

export function useSeqDataFetch<T>(url: string | Ref<string>, options: UseFetchOptions<Response<T[]>> = {}, initialPage?: number) {
  const config = useRuntimeConfig();

  const page = ref(initialPage ?? 1);

  const loadingNext = ref(false);

  const query = computed(() => {
    return Object.assign({ page: page.value }, options.query?.value ?? {});
  });

  let oldQuery: any;
  const defOpts: UseFetchOptions<Response<T[]>> = {
    query,
    immediate: false,
    watch: false,
    onResponse() {
      oldQuery = { ...query.value };
    }
  }

  const response = useDataFetch<Response<T[]>>(url, Object.assign({}, defOpts, options, { query }));

  const meta = computed(() => response.data.value?.meta ?? null);
  const pagination = useSeqPagination(page, meta);

  function setMeta(meta: Meta): void {
    if(response.data.value) {
      response.data.value.meta = meta;
    }
  }

  function appendChunk(chunk: T[]): void {
    if(response.data.value) {
      response.data.value.data.push(...chunk);
    }
  }

  async function next(): Promise<void> {
    if(!response.data.value) {
      await response.execute();
    } else {
      try {
        pagination.next();
        loadingNext.value = true;

        const chunk = await $fetch<Response<T[]>>(unref(url), {
          baseURL: config.public.baseURL,
          query: Object.assign(oldQuery ?? { ...query.value }, { page: page.value }),
        });

        setMeta(chunk.meta);
        appendChunk(chunk.data);
      } finally {
        loadingNext.value = false;
      }
    }
  }

  return {
    response,
    page,
    pagination,
    loadingNext,
    query,
    next,
  }
}
