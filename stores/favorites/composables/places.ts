import * as Tokens from '@/helpers/tokens';
import type { PlaceOne } from '@/types/estate/place';

export function useFavoritePlaces() {
  const config = useRuntimeConfig();
  const baseURL = config.public.baseURL;

  function getHeaders() {
    return {
      Accept: 'application/json',
      Authorization: 'Bearer ' + Tokens.get()?.token
    };
  }

  async function add(placeId: number) {
    await $fetch(`favorites/pantries/${placeId}`, { baseURL, headers: getHeaders(), method: 'POST' });
  }

  async function remove(placeId: number) {
    await $fetch(`favorites/pantries/${placeId}`, { baseURL, headers: getHeaders(), method: 'DELETE' });
  }

  async function appendPack(placeIds: number[]) {
    if(placeIds.length === 0) return;
    await $fetch(`favorites/pantries`, { baseURL, headers: getHeaders(), method: 'PATCH', body: { flat_ids: placeIds } });
  }

  async function all() {
    const res = await $fetch<{ data: PlaceOne[] }>(`favorites/pantries`, { baseURL, headers: getHeaders() });
    return res.data;
  }

  async function showPack(placeIds: number[]) {
    const res = await $fetch<{ data: PlaceOne[] }>(`favorites/pantries/resolve-ids`, { baseURL, method: 'POST', body: { ids: placeIds } });
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
