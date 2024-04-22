import type { Image } from '@/types/share';

export interface Turn {
  id:                number;
  name:              string;
  town_plan_polygon: string | null;
  master_plan:       Image | null;
  estates:           Estate[];
  has_for_sale_estates: boolean;
}

export interface Estate {
  id:                 number;
  block_plan_polygon: string | null;
  turn_plan_polygon: string | null;
}
