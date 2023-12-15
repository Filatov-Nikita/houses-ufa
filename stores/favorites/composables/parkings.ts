import * as Tokens from '@/helpers/tokens';
import { ParkingOne } from '@/types/estate/parking';

export function useFavoriteParkings() {
  const config = useRuntimeConfig();
  const baseURL = config.public.baseURL;

  function getHeaders() {
    return {
      Accept: 'application/json',
      Authorization: 'Bearer ' + Tokens.get()?.token
    };
  }

  async function add(parkingId: number) {
    await $fetch(`favorites/lots/${parkingId}`, { baseURL, headers: getHeaders(), method: 'POST' });
  }

  async function remove(parkingId: number) {
    await $fetch(`favorites/lots/${parkingId}`, { baseURL, headers: getHeaders(), method: 'DELETE' });
  }

  async function appendPack(parkingIds: number[]) {
    if(parkingIds.length === 0) return;
    await $fetch(`favorites/lots`, { baseURL, headers: getHeaders(), method: 'PATCH', body: { flat_ids: parkingIds } });
  }

  async function all() {
    const res = await $fetch<{ data: ParkingOne[] }>(`favorites/lots`, { baseURL, headers: getHeaders() });
    return res.data;
  }

  async function showPack(parkingIds: number[]) {
    const res = await $fetch<{ data: ParkingOne[] }>(`favorites/lots/resolve-ids`, { baseURL, method: 'POST', body: { ids: parkingIds } });
    return res.data;
  }

  return {
    add,
    remove,
    appendPack,
    all,
    showPack
  }
}
