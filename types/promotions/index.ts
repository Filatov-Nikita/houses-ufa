import type { Image, File } from '@/types/share';

export interface PromotionListItem {
  id:       number;
  ends_at:  string;
  subtitle: string;
  title:    string;
  image:    Image | null;
  slug:     string;
  image_mobile: Image | null;
}

export interface PromotionDetailed {
  id:        number;
  body:      string;
  comment:   string;
  ends_at:   string;
  starts_at: string;
  subtitle:  string;
  title:     string;
  url:       string;
  image:     Image | null;
  files:     File[];
  slug:      string;
  image_mobile: Image | null;
}
