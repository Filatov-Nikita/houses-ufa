import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'
import * as Tokens from '@/helpers/tokens';

export function useDataFetch<T>(url: string | Ref<string>, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig();

  const headers: Record<string, string> = {};

    const tokenData = Tokens.get();

    if(tokenData) {
      headers.Authorization = 'Bearer ' + tokenData.token;
    }

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseURL ?? '',
    // cache request
    key: unref(url),
    headers,
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return useFetch(url, params)
}
