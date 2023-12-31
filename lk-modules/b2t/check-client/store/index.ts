import { defineStore } from 'pinia';
import * as Tokens from '@/helpers/tokens';

type RelTypes = 'sibling' | 'child' | 'daughter-in-law' | 'spouse' | 'nephew' | 'son-in-law' | 'grandchild';

interface Body {
  backup_full_name: string,
  backup_phone: string,
  consumer_full_name: string,
  consumer_phone: string,
  object_id: number,
  object_type: 'estate' | 'flat',
  relationship_type: RelTypes,
}

export const useCheckClient = defineStore('b2tCheckClient', () => {
  const config = useRuntimeConfig();

  const form = reactive(init());

  function init() {
    return {
      backup_full_name: '',
      backup_phone: '',
      consumer_full_name: '',
      consumer_phone: '',
      relationship_type: 'sibling' as RelTypes,
    }
  }

  function clearForm() {
    Object.assign(form, init());
  }

  function getHeaders() {
    return {
      Accept: 'application/json',
      Authorization: 'Bearer ' + Tokens.get()?.token
    };
  }

  async function createClient(body: Body) {
    return $fetch.raw('b2t/shoppers', {
      method: 'POST',
      baseURL: config.public.rootApi,
      headers: getHeaders(),
      body,
    });
  }

  return {
    form,
    createClient,
    clearForm,
  };
});
