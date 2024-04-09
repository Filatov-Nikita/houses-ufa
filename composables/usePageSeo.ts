interface SeoConfig {
  title?: string,
  description?: string,
  keywords?: string,
}

export async function usePageSeo(url: string, fallback: Ref<SeoConfig> = ref({})) {
  const baseURL = useAppConfig().seoBase;
  const { data, error } = await useFetch<SeoConfig>(url, { baseURL });

  useSeoMeta({
    title: () => data.value?.title ?? fallback.value.title ?? null,
    description: () => data.value?.description ?? fallback.value.description,
    keywords: () => data.value?.keywords ?? fallback.value.keywords,
  });

  return {
    data,
    error,
  }
}
