import * as Tokens from '@/helpers/tokens';
import type { Town } from '@/types/estate/town';

export function useFavoriteTowns() {
  const config = useRuntimeConfig();
  const baseURL = config.public.baseURL;

  function getHeaders() {
    return {
      Accept: 'application/json',
      Authorization: 'Bearer ' + Tokens.get()?.token
    };
  }

  async function add(townId: number) {
    await $fetch(`favorites/estates/${townId}`, { baseURL, headers: getHeaders(), method: 'POST' });
  }

  async function remove(townId: number) {
    await $fetch(`favorites/estates/${townId}`, { baseURL, headers: getHeaders(), method: 'DELETE' });
  }

  async function appendPack(townIds: number[]) {
    if(townIds.length === 0) return;
    await $fetch(`favorites/estates`, { baseURL, headers: getHeaders(), method: 'PATCH', body: { estate_ids: townIds } });
  }

  async function all() {
    const res = await $fetch<{ data: Town[] }>(`favorites/estates`, { baseURL, headers: getHeaders() });
    return res.data;
  }

  async function showPack(townIds: number[]) {
    const res = await $fetch<{ data: Town[] }>(`favorites/estates/resolve-ids`, { baseURL, method: 'POST', body: { ids: townIds } });
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
