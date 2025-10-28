import type { FileExtented } from "@/types/share";
import type { ResponseSimple } from '@/types/response';

export default function(appFetch: typeof $fetch) {
  return {
    list(targetArea: TargetAreaParam) {
      return appFetch<ResponseSimple<StratagemsItem[]>>('b2t/motivation-stratagems', {
        headers: { Accept: 'application/json' },
        params: { target_area: targetArea },
      });
    },
  };
}

export type TargetAreaParam = 'condominium' | 'town';

export interface StratagemsItem {
  id: number,
  actual_since: string,
  file: FileExtented,
  target_area: {
    value: string,
    title: string,
  },
}
