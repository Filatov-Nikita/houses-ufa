import type { UseFetchOptions } from 'nuxt/app';

export default function<T>(url: MaybeRef<string>, options?: UseFetchOptions<T>) {
  const { $appFetch } = useNuxtApp();
  return useFetch(url, {
    ...options,
    $fetch: $appFetch,
  });
}
