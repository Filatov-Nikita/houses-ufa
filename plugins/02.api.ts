import createMarketingRepo from '@/repositories/marketing';
import createPressCenterRepo from '@/repositories/press-center';
import createPurchaseRepo from '@/repositories/purchase';
import createRepoB2t from './lk-parts/b2t';
import createRepoTowns from './estate-parts/towns';

export default defineNuxtPlugin({
  name: 'api',
  setup() {
    const appFetch = useNuxtApp().$appFetch;

    const marketing = createMarketingRepo(appFetch);
    const pressCenter = createPressCenterRepo(appFetch);
    const b2t = createRepoB2t(appFetch);
    const towns = createRepoTowns(appFetch);
    const purchase = createPurchaseRepo(appFetch);

    return {
      provide: {
        api: {
          marketing,
          pressCenter,
          b2t,
          towns,
          purchase,
        },
      }
    }
  },
});
