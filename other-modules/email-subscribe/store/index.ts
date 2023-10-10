import { defineStore } from 'pinia';

const useEmailSubscribe = defineStore('emailSubscribe', () => {
  const config = useRuntimeConfig();

  function subcribe(body: { email: string }) {
    return $fetch('newsletter/subscribers', {
      baseURL: config.public.baseURL,
      method: 'POST',
      body
    });
  }

  return {
    subcribe
  }
});

export { useEmailSubscribe };
