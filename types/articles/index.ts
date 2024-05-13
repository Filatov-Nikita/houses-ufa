import type { Response } from '../response';

export type ArticlesListResponse = Response<ArticleListItem[]>;
export type ArticleOneResponse = Response<ArticleOne>;

export interface ArticleListItem {
  id:           number;
  body:         string;
  published_at: string | null;
  source_url:   string;
  title:        string;
  type:         string;
  likes_count:  number;
  seo:          SEO;
  slug:         string,
}

export type ArticleOne = ArticleListItem & { image: Image };

export interface SEO {
  description: string;
  key_words:   string;
  title:       string;
}

export interface Image {
  id:            number;
  height:        number;
  url:          string;
  size_in_bytes: number;
  width:         number;
}
