import { News } from '../../model/news/news';

export interface NewsStore {
  isLoading: boolean;
  error: string | undefined;
  news: News[];
}

export const initialNewsStore: NewsStore = {
  isLoading: false,
  error: undefined,
  news: []
};
