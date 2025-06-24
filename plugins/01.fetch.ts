import * as Tokens from '@/helpers/tokens';

export default defineNuxtPlugin({
  name: 'fetch',
  setup() {
    const tokenData = Tokens.get();

    const appFetch = $fetch.create({
      baseURL: useRuntimeConfig().public.rootApi,
      retry: false,
      onRequest({ options }) {
        if(tokenData) {
          if(Array.isArray(options.headers)) {
            options.headers.push([ 'Authorization', 'Bearer ' + tokenData.token ]);
          } else if(options.headers instanceof Headers) {
            options.headers.append('Authorization', 'Bearer ' + tokenData.token);
          } else if(options.headers) {
            options.headers['Authorization'] = 'Bearer ' + tokenData.token;
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
