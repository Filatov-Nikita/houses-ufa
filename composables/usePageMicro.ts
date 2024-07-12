export function usePageMicro(url: string) {
  const baseURL = useAppConfig().seoBase + '/json-ld';
  const { data, error } = useFetch<any>(url, { baseURL });

  useJsonld(() => {
    if(error.value || !data.value) return null;
    return data.value;
  });

  return {
    data,
    error,
  }
}
