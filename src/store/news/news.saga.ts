import { all, put, takeEvery } from 'redux-saga/effects';
import { NewsResponse } from '../../model/news/newsResponse';
import { newsResponseToNews } from '../../utility/helper/mapper';
import newsService from '../../utility/services/newsService';
import {
  getNewsFailActionCreator,
  GetNewsRequestAction,
  getNewsSuccessActionCreator,
  GET_NEWS_REQUEST
} from './news.actions';

export function* newsSaga() {
  yield all([watchGet()]);
}

function* watchGet() {
  yield takeEvery(GET_NEWS_REQUEST, getNewsActionWatcher);
}

function* getNewsActionWatcher(action: GetNewsRequestAction) {
  try {
    const response: NewsResponse[] = yield newsService.getNews();
    const news = newsResponseToNews(response);
    yield put(getNewsSuccessActionCreator(news));
  } catch (error) {
    console.log('error', error.code);
    yield put(getNewsFailActionCreator(error.code));
  }
}
