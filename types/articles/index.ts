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
  seo:          SEO;
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
  path:          string;
  size_in_bytes: number;
  width:         number;
}
