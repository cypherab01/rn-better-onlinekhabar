export interface PopularNewsResponseType {
  status: number;
  message: string;
  data: PopularNewsData;
}

export interface PopularNewsData {
  news: News[];
}

export interface News {
  post_id: number;
  title: string;
  link: string;
  post_image: string;
  post_full_image: string;
  published_date: string;
  comments_count: number;
  primary_category: PrimaryCategory;
  counter: string;
}

export interface PrimaryCategory {
  term_id: number;
  name: string;
  slug: string;
  term_group: number;
  term_taxonomy_id: number;
  taxonomy: string;
  description: string;
  parent: number;
  count: number;
  filter: string;
  cat_ID: number;
  category_count: number;
  category_description: string;
  cat_name: string;
  category_nicename: string;
  category_parent: number;
}
