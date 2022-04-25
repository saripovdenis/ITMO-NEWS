interface NewsItem {
  id: number;
  date: string;
  image_big: string;
  image_small: string;
  title: string;
  description: string;
}

type NewsArray = Array<NewsItem>;

interface NewsState {
  news: NewsArray;
}

export type { NewsState, NewsArray };
