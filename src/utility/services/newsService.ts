import firebase from 'firebase';
import { NewsResponse } from '../../model/news/newsResponse';

class NewsService {
  getNews = async () => {
    var news: NewsResponse[] = [];
    await firebase
      .database()
      .ref('news')
      .once('value', snapshot => {
        snapshot.forEach(n => {
          news.push({
            id: n.key,
            title: n.val().title,
            date: n.val().date,
            details: n.val().details,
            image: n.val().image
          });
        });
      });
    return news;
  };
}

const newsService = new NewsService();
export default newsService;
