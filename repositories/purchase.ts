import type { ResponseSimple } from '@/types/response';

export default function(appFetch: typeof $fetch) {
  return {
    bindReferral(body: BindReferralBody) {
      return appFetch<ResponseSimple<BindReferralRes>>('b2c/shoppers', {
        body,
        method: 'post',
      });
    }
  }
}

export type BindReferralRes = unknown;

export interface BindReferralBody {
  fio1: string,
  phone1: string,
  fio2: string,
  phone2: string,
}
