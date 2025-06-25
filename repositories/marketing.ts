import type { Image } from '@/types/share/index';

export default function(appFetch: typeof $fetch) {
  return {
    slides() {
      return appFetch<SlidesRes>('lobby/marketing/slides');
    },
  }
}

export interface SlidesItem {
  id: number,
  priority: number,
  holding_timeout: number,
  subtitle: string | null,
  title: string | null,
  button_url: string | null,
  button_label: string | null,
  desktop_image: Image | null,
  laptop_image: Image | null,
  tablet_image: Image | null,
  mobile_image: Image | null,
}

export type SlidesRes = { data: SlidesItem[] };
