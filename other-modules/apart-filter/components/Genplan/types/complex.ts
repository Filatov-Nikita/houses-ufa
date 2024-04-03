import type { Image } from '@/types/share';

export interface Complex {
  id:          number;
  master_plan: Image | null;
  houses:      House[];
}

export interface House {
  id:                   number;
  complex_plan_polygon: string;
  name:                 string;
}
