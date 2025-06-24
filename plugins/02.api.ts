import createMarketingRepo from '@/repositories/marketing';

export default defineNuxtPlugin({
  name: 'api',
  setup() {
    const appFetch = useNuxtApp().$appFetch;

    const marketing = createMarketingRepo(appFetch);

    return {
      provide: {
        api: {
          marketing,
        },
      }
    }
  },
});
