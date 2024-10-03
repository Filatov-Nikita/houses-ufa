import type { Image } from '@/types/share';

export interface PosterItem {
  id:            number;
  location_tag:  string;
  marketing_tag: string | null;
  priority:      number;
  subtitle:      string;
  title:         string;
  type:          string;
  url:           string;
  width_in_cols: number;
  image:         Image | null,
}
