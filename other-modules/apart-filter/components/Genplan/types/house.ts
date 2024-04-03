import type { Image } from '@/types/share';

export interface House {
  id:          number;
  master_plan: Image | null;
  entrances:   Entrance[];
}

export interface Entrance {
  id:                 number;
  completion_quarter: number;
  completion_year:    number;
  house_plan_polygon: string;
  name:               string;
}
