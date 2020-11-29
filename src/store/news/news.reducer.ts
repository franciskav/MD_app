import {
  GET_NEWS_FAILURE,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  NewsActions
} from './news.actions';
import { initialNewsStore, NewsStore } from './news.store';

export const newsReducer = (
  state = initialNewsStore,
  action: NewsActions
): NewsStore => {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        news: action.response
      };
    case GET_NEWS_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        news: []
      };
    default:
      return state;
  }
};
