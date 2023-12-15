import * as Tokens from '@/helpers/tokens';
import type { Flat } from '@/types/estate/flat';

export function useFavoriteFlats() {
  const config = useRuntimeConfig();
  const baseURL = config.public.baseURL;

  function getHeaders() {
    return {
      Accept: 'application/json',
      Authorization: 'Bearer ' + Tokens.get()?.token
    };
  }

  async function add(flatId: number) {
    await $fetch(`favorites/flats/${flatId}`, { baseURL, headers: getHeaders(), method: 'POST' });
  }

  async function remove(flatId: number) {
    await $fetch(`favorites/flats/${flatId}`, { baseURL, headers: getHeaders(), method: 'DELETE' });
  }

  async function appendPack(flatIds: number[]) {
    if(flatIds.length === 0) return;
    await $fetch(`favorites/flats`, { baseURL, headers: getHeaders(), method: 'PATCH', body: { flat_ids: flatIds } });
  }

  async function all() {
    const res = await $fetch<{ data: Flat[] }>(`favorites/flats`, { baseURL, headers: getHeaders() });
    return res.data;
  }

  async function showPack(flatIds: number[]) {
    const res = await $fetch<{ data: Flat[] }>(`favorites/flats/resolve-ids`, { baseURL, method: 'POST', body: { ids: flatIds } });
    return res.data;
  }

  return {
    add,
    remove,
    appendPack,
    all,
    showPack,
  }
}
