import createMarketingRepo from '@/repositories/marketing';
import createPressCenterRepo from '@/repositories/press-center';

export default defineNuxtPlugin({
  name: 'api',
  setup() {
    const appFetch = useNuxtApp().$appFetch;

    const marketing = createMarketingRepo(appFetch);
    const pressCenter = createPressCenterRepo(appFetch);

    return {
      provide: {
        api: {
          marketing,
          pressCenter,
        },
      }
    }
  },
});
