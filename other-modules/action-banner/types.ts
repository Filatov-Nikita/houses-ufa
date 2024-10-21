import type { Image } from '@/types/share';

export interface Banner {
  id:             number;
  capitals:       string;
  ends_at:        string;
  image_position: 'left' | 'center' | 'none';
  starts_at:      string;
  subtitle:       string;
  title:          string;
  image:          Image | null;
}
