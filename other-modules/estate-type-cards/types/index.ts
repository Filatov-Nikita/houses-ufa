import type { Image } from '@/types/share';

export interface BannerOne {
  id:               number;
  priority:         number;
  subtitle:         string;
  title:            string;
  url:              string;
  background_image: Image | null;
  main_image:       Image | null;
}
