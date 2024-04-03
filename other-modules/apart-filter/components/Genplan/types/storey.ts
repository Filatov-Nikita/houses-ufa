import type { Image } from '@/types/share';

export type Status = 'for_sale' | 'booked' | 'sold' | 'unknown';

export interface Storey {
  id:          number;
  master_plan: Image | null;
  flats:       Flat[];
}

export interface Flat {
  id:                 number;
  floor_plan_polygon: string;
  status:             Status;
}
