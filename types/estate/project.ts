export interface Project {
  id:          number;
  area_calc:   string;
  description: string;
  name:        string;
  name_alias:  string;
  type:        Type;
  feed_images: FeedImage[];
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
