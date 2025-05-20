import { Image } from '@/types/share';

export interface File {
  id: number,
  extension: string,
  name: string,
  size_human_readable: string,
  size_in_bytes: number,
  url: string,
}

export interface BookletItem {
  id: number,
  priority: number,
  name: string,
  preview_desktop: Image | null,
  preview_mobile: Image | null,
  file: File | null,
}
