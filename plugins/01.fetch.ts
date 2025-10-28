import * as Tokens from '@/helpers/tokens';

export default defineNuxtPlugin({
  name: 'fetch',
  setup() {
    const token = useCookie('token');

    const appFetch = $fetch.create({
      baseURL: useRuntimeConfig().public.rootApi,
      retry: false,
      onRequest({ options }) {
        if(token.value) {
          if(Array.isArray(options.headers)) {
            options.headers.push([ 'Authorization', 'Bearer ' + token.value ]);
          } else if(options.headers instanceof Headers) {
            options.headers.append('Authorization', 'Bearer ' + token.value);
          } else if(options.headers) {
            options.headers['Authorization'] = 'Bearer ' + token.value;
          }
        }
      },
      onResponseError({ response }) {
        if(response.status === 401) {
          Tokens.clear();
          navigateTo('/');
        }
      },
    });

    return {
      provide: {
        appFetch,
      }
    };
  },
});
