import createMarketingRepo from '@/repositories/marketing';
import createPressCenterRepo from '@/repositories/press-center';
import createRepoB2t from './lk-parts/b2t';

export default defineNuxtPlugin({
  name: 'api',
  setup() {
    const appFetch = useNuxtApp().$appFetch;

    const marketing = createMarketingRepo(appFetch);
    const pressCenter = createPressCenterRepo(appFetch);
    const b2t = createRepoB2t(appFetch);

    return {
      provide: {
        api: {
          marketing,
          pressCenter,
          b2t,
        },
      }
    }
  },
});
