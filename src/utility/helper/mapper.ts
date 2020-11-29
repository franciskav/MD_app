import { News } from '../../model/news/news';
import { NewsResponse } from '../../model/news/newsResponse';

export const newsResponseToNews = (newsResponse: NewsResponse[]): News[] => {
  const news: News[] = newsResponse.map(n => {
    return {
      id: n.id ? n.id : '0',
      title: n.title,
      date: n.date,
      details: n.details,
      image: n.image
    };
  });
  return news;
};
