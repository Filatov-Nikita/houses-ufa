import type { Image } from '@/types/share';

export interface Badge {
  id: number
  image: Image,
  label: string,
  color: string,
  priority: number,
}
