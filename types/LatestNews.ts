export interface LatestNewsResponseType {
  status: number;
  message: string;
  data: LatestNewsData;
}

export interface LatestNewsData {
  news: LatestNews[];
}

export interface LatestNews {
  link: string;
  image: string;
  title: string;
  nepali_date: string;
}
