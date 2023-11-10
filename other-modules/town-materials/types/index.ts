import { Image } from '@/types/share';

export interface Material {
  id:          number;
  comment:     string;
  description: string;
  label:       string;
  priority:    number;
  title:       string;
  images:      Image[];
}
