import type { Image } from '../share';

export interface About {
  id:              number;
  description:     string;
  feature_1_title: string;
  feature_1_value: string;
  feature_2_title: string;
  feature_2_value: string;
  feature_3_title: string;
  feature_3_value: string;
}

export interface SEO {
  id:               number;
  meta_description: null;
  meta_keywords:    null;
  meta_title:       null;
  text_description: string;
  text_title:       string;
}

export interface Document {
  id:                 number;
  extension:          string;
  name:               string;
  size_human_readable: string;
  size_in_bytes:      number;
  url:                string;
}

export interface EstateCard  {
  id:              number;
  location:        string;
  marketing_tag:   null;
  name:            string;
  about:           About;
  seo:             SEO;
  latitude:        string,
  longitude:       string,
  sight_picture:   Image | null,
  images:          Image[];
  documents:       Document[];
}
