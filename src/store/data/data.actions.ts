import { Data } from '../../model/data/data';
import { DataRequest } from '../../model/data/dataRequest';

export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';
export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';

export interface PostDataRequestAction {
  type: typeof POST_DATA_REQUEST;
  successAction: () => void;
  dataRequest: DataRequest;
}

export interface PostDataSuccessAction {
  type: typeof POST_DATA_SUCCESS;
}

export interface PostDataFailAction {
  type: typeof POST_DATA_FAILURE;
  reason: string | undefined;
}

export interface GetDataRequestAction {
  type: typeof GET_DATA_REQUEST;
}

export interface GetDataSuccessAction {
  type: typeof GET_DATA_SUCCESS;
  response: Data;
}

export interface GetDataFailAction {
  type: typeof GET_DATA_FAILURE;
  reason: string | undefined;
}

export type DataActions =
  | PostDataRequestAction
  | PostDataSuccessAction
  | PostDataFailAction
  | GetDataRequestAction
  | GetDataSuccessAction
  | GetDataFailAction;

export const postData = (
  dataRequest: DataRequest,
  successAction: () => void
): PostDataRequestAction => ({
  type: POST_DATA_REQUEST,
  dataRequest: dataRequest,
  successAction
});

export const postDataSuccessActionCreator = (): PostDataSuccessAction => ({
  type: POST_DATA_SUCCESS
});

export const postDataFailActionCreator = (
  reason: string
): PostDataFailAction => ({
  type: POST_DATA_FAILURE,
  reason
});

export const getData = (): GetDataRequestAction => ({
  type: GET_DATA_REQUEST
});

export const getDataSuccessActionCreator = (
  data: Data
): GetDataSuccessAction => ({
  type: GET_DATA_SUCCESS,
  response: data
});

export const getDataFailActionCreator = (
  reason: string
): GetDataFailAction => ({
  type: GET_DATA_FAILURE,
  reason
});
