import type { Image } from '@/types/share';

export interface Block {
  id:                number;
  name:              string;
  town_plan_polygon: string;
  master_plan:       Image | null;
  estates:           Estate[];
}

export interface Estate {
  id:                 number;
  block_plan_polygon: string;
}
