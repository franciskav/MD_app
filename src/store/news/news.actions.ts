import { News } from '../../model/news/news';

export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';

export interface GetNewsRequestAction {
  type: typeof GET_NEWS_REQUEST;
}

export interface GetNewsSuccessAction {
  type: typeof GET_NEWS_SUCCESS;
  response: News[];
}

export interface GetNewsFailAction {
  type: typeof GET_NEWS_FAILURE;
  reason: string | undefined;
}

export type NewsActions =
  | GetNewsRequestAction
  | GetNewsSuccessAction
  | GetNewsFailAction;

export const getNews = (): GetNewsRequestAction => ({
  type: GET_NEWS_REQUEST
});

export const getNewsSuccessActionCreator = (
  news: News[]
): GetNewsSuccessAction => ({
  type: GET_NEWS_SUCCESS,
  response: news
});

export const getNewsFailActionCreator = (
  reason: string
): GetNewsFailAction => ({
  type: GET_NEWS_FAILURE,
  reason
});
