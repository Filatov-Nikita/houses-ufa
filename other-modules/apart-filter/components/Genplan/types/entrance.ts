import type { Image } from '@/types/share';

export interface Entrance {
  id:          number;
  master_plan: Image | null;
  streets:     Streets;
  floors:      Floor[];
}

export interface Floor {
  id:                    number;
  entrance_plan_polygon: string;
  flats_free_count:      number;
  number:                number;
}

export interface Streets {
  bottom: string;
  left:   string;
  right:  string;
  top:    string;
}
