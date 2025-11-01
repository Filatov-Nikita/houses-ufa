import type { ResponseSimple } from '@/types/response';

export default function(appFetch: typeof $fetch) {
  return {
    show(id: number | string) {
      return appFetch<ResponseSimple<ProjectOne>>(`lobby/estate/estate-layouts/${id}`);
    },
  }
}

export interface ProjectOne {
  id:          number;
  area_calc:   string;
  description: string;
  name:        string;
  name_alias:  string;
  type:        Type;
  feed_images: FeedImage[];
  video_url: string | null;
}

export interface FeedImage {
  url:       string;
  floor:     number;
  is_plan:   boolean;
  is_render: boolean;
}

export interface Type {
  title: string;
  value: string;
}
